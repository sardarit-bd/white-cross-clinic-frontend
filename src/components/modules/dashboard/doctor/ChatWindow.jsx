"use client";

import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useEffect, useState, useRef } from "react";
import { sendMessage } from "@/lib/sendMessage";

export default function ChatWindow({ conversationId }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!conversationId) return;

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
    // eslint-disable-next-line react-hooks/immutability
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    await sendMessage(conversationId, input, "admin");
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[95vh] bg-[var(--bgLight)] w-full">
      {/* Header */}
      <div className="bg-[var(--bgWhite)] border-b border-[var(--borderLight)] px-6 py-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[var(--brandColor)] flex items-center justify-center text-white font-semibold">
            U
          </div>
          <div>
            <h3 className="font-semibold text-[var(--textDark)]">User</h3>
            {/* <p className="text-sm text-[var(--textMuted)]">Active now</p> */}
          </div>
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto px-6 py-4 bg-[var(--bgLight)]">
        <div className="max-w-3xl mx-auto space-y-3">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex gap-3 ${
                m.sender === "admin" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              {/* Avatar */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold ${
                  m.sender === "admin" 
                    ? "bg-[var(--brandColor)]" 
                    : "bg-[var(--brandAccent)]"
                }`}
              >
                {m.sender === "admin" ? "A" : "U"}
              </div>

              {/* Message bubble */}
              <div
                className={`max-w-md px-4 py-2 rounded-2xl ${
                  m.sender === "admin"
                    ? "bg-[var(--brandColor)] text-[var(--textWhite)] rounded-tr-none"
                    : "bg-[var(--bgWhite)] text-[var(--textDark)] border border-[var(--borderLight)] rounded-tl-none shadow-sm"
                }`}
              >
                <p className="text-sm leading-relaxed">{m.text}</p>
                <div
                  className={`text-xs mt-1 ${
                    m.sender === "admin"
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

      {/* Input area */}
      <div className="bg-[var(--bgWhite)] border-t border-[var(--borderLight)] px-6 py-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-3 items-end">
            {/* Input field */}
            <div className="flex-1 relative">
              <textarea
                className="w-full border border-[var(--borderLight)] rounded-2xl px-4 py-3 pr-12 resize-none focus:outline-none focus:ring-2 focus:ring-[var(--brandColor)] focus:border-transparent bg-[var(--bgLight)]"
                placeholder="Type a message..."
                rows="1"
                value={input}
                onChange={(e) => setInput(e.target.value)}
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
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                input.trim()
                  ? "bg-[var(--brandColor)] hover:bg-[var(--brandColorDark)] text-white"
                  : "bg-[var(--bgGray)] text-[var(--textMuted)] cursor-not-allowed"
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}