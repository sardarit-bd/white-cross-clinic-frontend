"use client";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import ChatWindow from "./ChatWindow";

export default function ChatButton() {
  const [open, setOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Check if user info exists in session storage
    const savedUserInfo = sessionStorage.getItem('chatUserInfo');
    if (savedUserInfo) {
      setUserInfo(JSON.parse(savedUserInfo));
    }
  }, []);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-[var(--brandColor)] text-white p-4 rounded-full shadow-xl hover:scale-105 transition z-50"
      >
        <MessageCircle size={26} />
      </button>

      {open && (
        <ChatWindow 
          onClose={() => setOpen(false)} 
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
      )}
    </>
  );
}