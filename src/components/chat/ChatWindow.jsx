"use client";

import { useEffect, useState } from "react";
import { X, MessageCircle, Minimize2 } from "lucide-react";
import { db } from "@/lib/firebase";

import {
    collection,
    addDoc,
    query,
    orderBy,
    onSnapshot,
    serverTimestamp,
    doc,
    setDoc,
} from "firebase/firestore";
import { predefinedQA } from "@/lib/predefinedQA";

export default function ChatWindow({ onClose }) {
    const [conversationId, setConversationId] = useState(null);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isMinimized, setIsMinimized] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Predefined starter questions
    const suggestions = [
        "What are your opening hours?",
        "Where is the clinic located?",
        "Do you offer home services?",
        "How to book a doctor?",
    ];

    // Listen to messages real-time
    useEffect(() => {
        if (!conversationId) return;

        const messagesRef = collection(db, "conversations", conversationId, "messages");
        const q = query(messagesRef, orderBy("createdAt", "asc"));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            setMessages(snapshot.docs.map((d) => d.data()));
        });

        return () => unsubscribe();
    }, [conversationId]);

    const sendMessage = async (text) => {
        if (!conversationId) {
            const createConversation = async () => {
                const id = Date.now().toString();
                setConversationId(id);

                await setDoc(doc(db, "conversations", id), {
                    userId: id,
                    createdAt: serverTimestamp(),
                    lastMessage: text,
                    unreadForAdmin: true,
                });
            };

            createConversation();
        }

        if (!text?.trim()) return;

        await addDoc(collection(db, "conversations", conversationId, "messages"), {
            text,
            sender: "user",
            createdAt: serverTimestamp(),
            seen: false,
        });

        setInput("");
        
        const found = predefinedQA.find(
            item => item.q.toLowerCase() === text.toLowerCase()
        );
       
        if (found) {
            // Auto reply
            setTimeout(async () => {
                await addDoc(collection(db, `conversations/${conversationId}/messages`), {
                    text: found.a,
                    sender: "bot",
                    createdAt: serverTimestamp(),
                });
            }, 1000);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage(input);
        }
    };

    // Floating chat button
    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 w-14 h-14 bg-[var(--brandColor)] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[var(--brandColorDark)] transition-all duration-300 z-50"
            >
                <MessageCircle size={24} />
            </button>
        );
    }

    // Minimized state
    if (isMinimized) {
        return (
            <div className="fixed bottom-6 right-6 w-80 bg-white shadow-2xl rounded-lg overflow-hidden border border-[var(--borderLight)]">
                {/* Header bar */}
                <div className="flex justify-between items-center bg-[var(--brandColor)] text-white px-4 py-3">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                        <span className="font-semibold text-sm">Chat with us</span>
                    </div>
                    <div className="flex gap-2">
                        <button 
                            onClick={() => setIsMinimized(false)}
                            className="hover:bg-[var(--brandColorDark)] p-1 rounded"
                        >
                            <MessageCircle size={16} />
                        </button>
                        <button 
                            onClick={onClose}
                            className="hover:bg-[var(--brandColorDark)] p-1 rounded"
                        >
                            <X size={16} />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Full chat window
    return (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white shadow-2xl rounded-xl overflow-hidden border border-[var(--borderLight)] flex flex-col z-50">
            {/* Header */}
            <div className="flex justify-between items-center bg-[var(--brandColor)] text-white px-4 py-3">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <MessageCircle size={16} />
                    </div>
                    <div>
                        <h3 className="font-semibold text-sm">White Cross Support</h3>
                        <p className="text-xs text-blue-100">We're online</p>
                    </div>
                </div>
                <div className="flex gap-1">
                    <button 
                        onClick={() => setIsMinimized(true)}
                        className="w-8 h-8 hover:bg-[var(--brandColorDark)] rounded flex items-center justify-center transition-colors"
                    >
                        <Minimize2 size={16} />
                    </button>
                    <button 
                        onClick={onClose}
                        className="w-8 h-8 hover:bg-[var(--brandColorDark)] rounded flex items-center justify-center transition-colors"
                    >
                        <X size={16} />
                    </button>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto bg-[var(--bgLight)] p-4">
                {messages.length === 0 ? (
                    <div className="space-y-3">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-[var(--brandColorLight)] rounded-full flex items-center justify-center mx-auto mb-2">
                                <MessageCircle size={20} className="text-[var(--brandColor)]" />
                            </div>
                            <h4 className="font-semibold text-[var(--textDark)] text-sm">How can we help you?</h4>
                            <p className="text-[var(--textLight)] text-xs mt-1">Ask us anything</p>
                        </div>
                        
                        <div className="space-y-2">
                            {suggestions.map((suggestion, index) => (
                                <button
                                    key={index}
                                    onClick={() => sendMessage(suggestion)}
                                    className="w-full text-left p-3 bg-white border border-[var(--borderLight)] rounded-lg hover:bg-[var(--bgLight)] transition-colors text-sm text-[var(--textDark)]"
                                >
                                    {suggestion}
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-[80%] px-3 py-2 rounded-2xl ${
                                        msg.sender === "user"
                                            ? "bg-[var(--brandColor)] text-white rounded-br-none"
                                            : "bg-white border border-[var(--borderLight)] text-[var(--textDark)] rounded-bl-none shadow-sm"
                                    }`}
                                >
                                    <p className="text-sm leading-relaxed">{msg.text}</p>
                                    <p className={`text-xs mt-1 ${
                                        msg.sender === "user" ? "text-blue-100" : "text-[var(--textMuted)]"
                                    }`}>
                                        {msg.createdAt?.toDate().toLocaleTimeString([], {
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Input Area */}
            <div className="border-t border-[var(--borderLight)] bg-white p-3">
                <div className="flex gap-2">
                    <input
                        className="flex-1 border border-[var(--borderLight)] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brandColor)] focus:border-transparent"
                        placeholder="Type your message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button
                        onClick={() => sendMessage(input)}
                        disabled={!input.trim()}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                            input.trim()
                                ? "bg-[var(--brandColor)] hover:bg-[var(--brandColorDark)] text-white"
                                : "bg-[var(--bgGray)] text-[var(--textMuted)] cursor-not-allowed"
                        }`}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}