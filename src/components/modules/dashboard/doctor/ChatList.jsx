"use client";

import { collection, onSnapshot, query, orderBy, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";

export default function ChatList({ onSelect }) {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "conversations"), orderBy("createdAt", "desc"));

    const unsub = onSnapshot(q, (snap) => {
      const list = snap.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
    console.log(list)
      setConversations(list);
    });

    return () => unsub();
  }, []);

  // 🔥 Delete entire conversation
  const deleteConversation = async (id) => {
    await deleteDoc(doc(db, "conversations", id));
  };

  return (
    <div className="w-72 bg-white border-r h-screen flex flex-col sticky top-0">
      {/* Sticky Header */}
      <div className="p-4 pb-6 border-b border-[var(--borderLight)] bg-white sticky top-0 z-10">
        <h2 className="font-bold text-xl text-[var(--brandColor)]">
          Conversations
        </h2>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {conversations.length === 0 && (
          <p className="text-gray-500 text-sm text-center mt-20">
            No conversations yet
          </p>
        )}

        {conversations.map((c) => (
          <div
            key={c.id}
            className="
              group 
              flex 
              items-start 
              justify-between 
              p-3 mb-3 
              bg-[var(--bgLight)] 
              rounded-lg 
              cursor-pointer 
              border border-[var(--borderLight)]
              hover:bg-[var(--brandColorLight)]
              transition
            "
          >
            {/* Chat Click Area */}
            <div
              onClick={() => onSelect(c.id)}
              className="flex-1"
            >
              {/* User ID */}
              <p className="text-sm font-semibold text-[var(--textDark)]">
                {c.userId || "Guest User"}
              </p>

              {/* Last Message */}
              <p className="text-xs text-[var(--textLight)] mt-1 line-clamp-1">
                {c.lastMessage || "No messages"}
              </p>

              {/* Timestamp + unread badge */}
              <div className="flex items-center gap-2 mt-2">
                <p className="text-[10px] text-gray-400">
                  {c.updatedAt?.toDate().toLocaleString() || ""}
                </p>

                {/* 🔵 Unread notification */}
                {c.unread && (
                  <span className="
                    px-2 py-[2px] 
                    text-[10px] 
                    rounded-full 
                    bg-[var(--brandColor)] 
                    text-white
                  ">
                    New
                  </span>
                )}
              </div>
            </div>

            {/* Delete Button */}
            <button
              onClick={() => deleteConversation(c.id)}
              className="
                opacity-0 
                group-hover:opacity-100 
                transition 
                text-[var(--brandRed)]
                hover:text-red-700
              "
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}