"use client";

import { collection, query, orderBy, onSnapshot, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useEffect, useState, useRef } from "react";
import { sendMessage } from "@/lib/sendMessage";
import { ArrowLeft } from "lucide-react";

export default function ChatWindow({ conversationId, onBack }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [conversationData, setConversationData] = useState(null);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (!conversationId) return;

    // Fetch conversation data to get user info
    const fetchConversationData = async () => {
      const conversationDoc = await getDoc(doc(db, "conversations", conversationId));
      if (conversationDoc.exists()) {
        setConversationData(conversationDoc.data());
      }
    };

    fetchConversationData();

    const q = query(
      collection(db, `conversations/${conversationId}/messages`),
      orderBy("createdAt", "asc")
    );

    const unsub = onSnapshot(q, (snap) => {
      setMessages(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsub();
  }, [conversationId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    await sendMessage(conversationId, input, "admin");
    await updateDoc(doc(db, "conversations", conversationId), {
      unreadForAdmin: false,
      lastMessage: input
    });
    setInput("");
    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);

    // Auto-resize textarea
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
  };

  if (!conversationId) {
    return (
      <div className="hidden md:flex flex-1 flex-col items-center justify-center bg-[var(--bgLight)]">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-[var(--textDark)] mb-2">
            Select a conversation
          </h3>
          <p className="text-[var(--textLight)]">
            Choose a chat from the list to start messaging
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`
      flex flex-col h-full bg-[var(--bgLight)] 
      ${conversationId ? 'flex-1 flex' : 'hidden md:flex'}
    `}>
      {/* Header */}
      <div className="bg-[var(--bgWhite)] border-b border-[var(--borderLight)] px-4 py-3">
        <div className="flex items-center gap-3">
          {/* Back button for mobile */}
          <button
            onClick={onBack}
            className="md:hidden p-1 hover:bg-[var(--bgLight)] rounded"
          >
            <ArrowLeft size={20} className="text-[var(--textDark)]" />
          </button>

          <div className="w-10 h-10 rounded-full bg-[var(--brandColor)] flex items-center justify-center text-white font-semibold">
            {conversationData?.userName?.charAt(0) || conversationData?.userInfo?.name?.charAt(0) || "U"}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-[var(--textDark)]">
              {conversationData?.userName || conversationData?.userInfo?.name || "User"}
            </h3>
            <p className="text-sm text-[var(--textMuted)]">
              {conversationData?.userEmail || conversationData?.userInfo?.email || "No email"}
            </p>
          </div>
        </div>
      </div>

      {/* Messages area - Scrollable */}
      <div className="flex-1 overflow-y-auto px-4 py-4 bg-[var(--bgLight)]">
        <div className="mx-auto space-y-3">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex gap-3 ${m.sender === "admin" ? "flex-row-reverse" : "flex-row"
                }`}
            >
              {/* Avatar - Hidden on mobile for sent messages */}
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold
                ${m.sender === "admin" ? "bg-[var(--brandColor)]" : "bg-[var(--brandAccent)]"}
                ${m.sender === "admin" ? "hidden sm:flex" : "flex"}
              `}>
                {m.sender === "admin" ? "A" :
                  conversationData?.userName?.charAt(0) ||
                  conversationData?.userInfo?.name?.charAt(0) ||
                  "U"
                }
              </div>

              {/* Message bubble */}
              <div
                className={`max-w-[85%] sm:max-w-md px-4 py-2 rounded-2xl ${m.sender === "admin"
                    ? "bg-[var(--brandColor)] text-[var(--textWhite)] rounded-tr-none"
                    : "bg-[var(--bgWhite)] text-[var(--textDark)] border border-[var(--borderLight)] rounded-tl-none shadow-sm"
                  }`}
              >
                <p className="text-sm leading-relaxed break-words">{m.text}</p>
                <div
                  className={`text-xs mt-1 ${m.sender === "admin"
                      ? "text-blue-100"
                      : "text-[var(--textMuted)]"
                    }`}
                >
                  {m.createdAt?.toDate().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input area - Fixed at bottom */}
      <div className="bg-[var(--bgWhite)] border-t border-[var(--borderLight)] px-4 py-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-3 items-end">
            {/* Input field */}
            <div className="flex-1 relative">
              <textarea
                ref={textareaRef}
                className="w-full border border-[var(--borderLight)] rounded-2xl px-4 py-3 pr-12 resize-none focus:outline-none focus:ring-2 focus:ring-[var(--brandColor)] focus:border-transparent bg-[var(--bgLight)]"
                placeholder="Type a message..."
                rows="1"
                value={input}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                style={{
                  minHeight: "44px",
                  maxHeight: "120px",
                }}
              />
            </div>

            {/* Send button */}
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${input.trim()
                  ? "bg-[var(--brandColor)] hover:bg-[var(--brandColorDark)] text-white"
                  : "bg-[var(--bgGray)] text-[var(--textMuted)] cursor-not-allowed"
                }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}