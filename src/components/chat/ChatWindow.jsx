"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
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

    // Predefined starter questions
    const suggestions = [
        "What are your opening hours?",
        "Where is the clinic located?",
        "Do you offer home services?",
        "How to book a doctor?",
    ];

    // useEffect(() => {
    //     // Create new conversation if none exists
    //     const createConversation = async () => {
    //         const id = Date.now().toString();
    //         setConversationId(id);

    //         await setDoc(doc(db, "conversations", id), {
    //             userId: id,
    //             createdAt: serverTimestamp(),
    //             lastMessage: input,
    //             unreadForAdmin: true,
    //         });
    //     };

    //    if(input){
    //      createConversation();
    //    }
    // }, [input]);

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
        console.log(predefinedQA)
        const found = predefinedQA.find(
            item => item.q.toLowerCase() === text.toLowerCase()
        );
       
        if (found) {
            // Auto reply
            await addDoc(collection(db, `conversations/${conversationId}/messages`), {
                text: found.a,
                sender: "bot",
                createdAt: serverTimestamp(),
            });
        }
    };

    return (
        <div className="fixed bottom-20 right-6 w-80 bg-white shadow-2xl rounded-xl overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center bg-[var(--brandColor)] text-white px-3 py-2">
                <span className="font-semibold">Chat with Support</span>
                <X className="cursor-pointer" onClick={onClose} />
            </div>

            {/* Messages */}
            <div className="h-72 overflow-y-auto p-3 space-y-3">
                {/* Suggestions first */}
                {messages.length === 0 && (
                    <div className="text-sm text-gray-600 space-y-2">
                        <p className="font-semibold">Quick Questions:</p>
                        {suggestions.map((s, i) => (
                            <button
                                key={i}
                                onClick={() => sendMessage(s)}
                                className="block w-full text-left p-2 bg-gray-100 rounded-md"
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                )}

                {messages.map((msg, i) => (
                    <div
                        key={i}
                        className={`p-2 rounded-md max-w-[80%] ${msg.sender === "user"
                            ? "bg-[var(--brandColorLight)] ml-auto"
                            : "bg-gray-200"
                            }`}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t flex gap-2">
                <input
                    className="flex-1 border rounded-md px-3 py-2 text-sm"
                    placeholder="Type your message…"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    onClick={() => sendMessage(input)}
                    className="px-4 py-2 bg-[var(--brandColor)] text-white rounded-md"
                >
                    Send
                </button>
            </div>
        </div>
    );
}
