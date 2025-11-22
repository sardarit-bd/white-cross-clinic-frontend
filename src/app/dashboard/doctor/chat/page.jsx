"use client";


import ChatList from "@/components/modules/dashboard/doctor/ChatList";
import ChatWindow from "@/components/modules/dashboard/doctor/ChatWindow";
import { useState } from "react";

export default function AdminChatPage() {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="flex h-screen overflow-hidden">
  <ChatList onSelect={setSelectedChat} />
  <ChatWindow conversationId={selectedChat} />
</div>
  );
}
