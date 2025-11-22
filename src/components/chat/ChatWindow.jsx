"use client";

import { useEffect, useState } from "react";
import { X, MessageCircle, Minimize2, User, Mail } from "lucide-react";
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
    updateDoc,
} from "firebase/firestore";
import { predefinedQA } from "@/lib/predefinedQA";

export default function ChatWindow({ onClose, userInfo, setUserInfo }) {
    const [conversationId, setConversationId] = useState(null);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isMinimized, setIsMinimized] = useState(false);
    const [userData, setUserData] = useState({
        name: "",
        email: ""
    });
    const [showUserForm, setShowUserForm] = useState(true);

    // Predefined starter questions
    const suggestions = [
        "What are your opening hours?",
        "Where is the clinic located?",
        "Do you offer home services?",
        "How to book a doctor?",
    ];

    // Load conversation from session storage on component mount
    useEffect(() => {
        if (userInfo) {
            setShowUserForm(false);
            const savedConversationId = sessionStorage.getItem('conversationId');
            if (savedConversationId) {
                setConversationId(savedConversationId);
            }
        }
    }, [userInfo]);

    // Listen to messages real-time
    useEffect(() => {
        if (!conversationId) return;

        const messagesRef = collection(db, "conversations", conversationId, "messages");
        const q = query(messagesRef, orderBy("createdAt", "asc"));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            setMessages(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
        });

        return () => unsubscribe();
    }, [conversationId]);

    // Save user info and start conversation
    const handleUserRegistration = async () => {
        if (!userData.name.trim() || !userData.email.trim()) {
            alert("Please enter both name and email");
            return;
        }

        // Save user info to session storage
        const userInfo = {
            name: userData.name.trim(),
            email: userData.email.trim(),
            timestamp: new Date().toISOString()
        };
        sessionStorage.setItem('chatUserInfo', JSON.stringify(userInfo));
        setUserInfo(userInfo);
        setShowUserForm(false);

        // Create new conversation
        await createNewConversation(userInfo);
    };

    const createNewConversation = async (userInfo) => {
        const id = `user_${Date.now()}`;
        setConversationId(id);
        
        // Save conversation ID to session storage
        sessionStorage.setItem('conversationId', id);

        await setDoc(doc(db, "conversations", id), {
            userId: id,
            userName: userInfo.name,
            userEmail: userInfo.email,
            createdAt: serverTimestamp(),
            lastMessage: "User started conversation",
            unreadForAdmin: true,
            userInfo: userInfo
        });

        // Send welcome message
        await addDoc(collection(db, "conversations", id, "messages"), {
            text: `Hello ${userInfo.name}! Welcome to White Cross Clinic. How can we help you today?`,
            sender: "bot",
            createdAt: serverTimestamp(),
        });
    };

    const sendMessage = async (text) => {
        if (!conversationId) {
            // If no conversation exists but user info is available
            if (userInfo) {
                await createNewConversation(userInfo);
            }
            return;
        }

        if (!text?.trim()) return;

        // Send user message
        await addDoc(collection(db, "conversations", conversationId, "messages"), {
            text,
            sender: "user",
            userName: userInfo?.name,
            userEmail: userInfo?.email,
            createdAt: serverTimestamp(),
            seen: false,
        });

        // Update last message in conversation
        await updateDoc(doc(db, "conversations", conversationId), {
            lastMessage: text,
            updatedAt: serverTimestamp(),
            unreadForAdmin: true,
        });

        setInput("");
        
        // Find predefined answer
        const found = predefinedQA.find(
            item => item.q.toLowerCase() === text.toLowerCase()
        );
       
        if (found) {
            // Auto reply after 1 second
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
            if (showUserForm) {
                handleUserRegistration();
            } else {
                sendMessage(input);
            }
        }
    };

    // User registration form
    const renderUserForm = () => (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white shadow-2xl rounded-xl overflow-hidden border border-[var(--borderLight)] flex flex-col z-50">
            {/* Header */}
            <div className="flex justify-between items-center bg-[var(--brandColor)] text-white px-4 py-3">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <MessageCircle size={16} />
                    </div>
                    <div>
                        <h3 className="font-semibold text-sm">Welcome to White Cross</h3>
                        <p className="text-xs text-blue-100">Let's get started</p>
                    </div>
                </div>
                <button 
                    onClick={onClose}
                    className="w-8 h-8 hover:bg-[var(--brandColorDark)] rounded flex items-center justify-center transition-colors"
                >
                    <X size={16} />
                </button>
            </div>

            {/* Registration Form */}
            <div className="flex-1 overflow-y-auto bg-[var(--bgLight)] p-6">
                <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-[var(--brandColorLight)] rounded-full flex items-center justify-center mx-auto mb-3">
                        <User size={24} className="text-[var(--brandColor)]" />
                    </div>
                    <h4 className="font-semibold text-[var(--textDark)] text-lg mb-2">Get Started</h4>
                    <p className="text-[var(--textLight)] text-sm">Please enter your details to start chatting with our support team</p>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-[var(--textDark)] mb-2">
                            Your Name *
                        </label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--textMuted)]" size={16} />
                            <input
                                type="text"
                                value={userData.name}
                                onChange={(e) => setUserData({...userData, name: e.target.value})}
                                className="w-full border border-[var(--borderLight)] rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brandColor)] focus:border-transparent"
                                placeholder="Enter your full name"
                                onKeyPress={handleKeyPress}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[var(--textDark)] mb-2">
                            Email Address *
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--textMuted)]" size={16} />
                            <input
                                type="email"
                                value={userData.email}
                                onChange={(e) => setUserData({...userData, email: e.target.value})}
                                className="w-full border border-[var(--borderLight)] rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brandColor)] focus:border-transparent"
                                placeholder="Enter your email address"
                                onKeyPress={handleKeyPress}
                            />
                        </div>
                    </div>

                    <button
                        onClick={handleUserRegistration}
                        disabled={!userData.name.trim() || !userData.email.trim()}
                        className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                            userData.name.trim() && userData.email.trim()
                                ? "bg-[var(--brandColor)] hover:bg-[var(--brandColorDark)] text-white"
                                : "bg-[var(--bgGray)] text-[var(--textMuted)] cursor-not-allowed"
                        }`}
                    >
                        Start Chatting
                    </button>
                </div>
            </div>
        </div>
    );

    // Floating chat button (when minimized or not open)
    if (!showUserForm && isMinimized) {
        return (
            <div className="fixed bottom-6 right-6 w-80 bg-white shadow-2xl rounded-lg overflow-hidden border border-[var(--borderLight)] z-50">
                <div className="flex justify-between items-center bg-[var(--brandColor)] text-white px-4 py-3">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                        <span className="font-semibold text-sm">
                            {userInfo?.name || "Chat with us"}
                        </span>
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

    // Show user form if no user info
    if (showUserForm) {
        return renderUserForm();
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
                        <h3 className="font-semibold text-sm">{userInfo?.name}</h3>
                        <p className="text-xs text-blue-100">We're online • {userInfo?.email}</p>
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