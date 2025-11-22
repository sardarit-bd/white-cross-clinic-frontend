"use client";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import ChatWindow from "./ChatWindow";

export default function ChatButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-[var(--brandColor)] text-white p-4 rounded-full shadow-xl hover:scale-105 transition"
      >
        <MessageCircle size={26} />
      </button>

      {open && <ChatWindow onClose={() => setOpen(false)} />}
    </>
  );
}
