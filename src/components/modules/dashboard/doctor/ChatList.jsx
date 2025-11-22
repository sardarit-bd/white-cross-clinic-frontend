"use client";

import { collection, onSnapshot, query, orderBy, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";

export default function ChatList({ onSelect, selectedChat }) {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "conversations"), orderBy("createdAt", "desc"));

    const unsub = onSnapshot(q, (snap) => {
      const list = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(list);
      setConversations(list);
    });

    return () => unsub();
  }, []);

  const deleteConversation = async (id) => {
    await deleteDoc(doc(db, "conversations", id));
  };

  return (
    <div className={`
      w-full md:w-72 bg-white 
      h-full flex flex-col
      ${selectedChat ? 'hidden md:flex' : 'flex'}
    `}>
      {/* Header */}
      <div className="p-4 pb-6 border-b border-[var(--borderLight)] bg-white">
        <h2 className="font-bold text-xl text-[var(--brandColor)]">
          Conversations
        </h2>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {conversations.length === 0 && (
          <p className="text-gray-500 text-sm text-center mt-20">
            No conversations yet
          </p>
        )}

        {conversations.map((c) => (
          <div
            key={c.id}
            className={`
              group flex items-start justify-between p-3 border-b border-[var(--borderLight)]
              cursor-pointer transition-all border-r border-[var(--borderLight)]
              ${selectedChat === c.id 
                ? 'bg-[var(--brandColorLight)] border-[var(--brandColor)]' 
                : 'bg-white hover:bg-[var(--bgLight)]'
              }
            `}
            onClick={() => onSelect(c.id)}
          >
            {/* Chat Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[var(--textDark)] truncate">
                  {c.userId || "Guest User"}
                </p>
                <span className="text-xs text-[var(--textMuted)]">
                  {c.updatedAt?.toDate().toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                  }) || ""}
                </span>
              </div>

              <p className="text-xs text-[var(--textLight)] mt-1 truncate">
                {c.lastMessage || "No messages"}
              </p>

              {/* Unread badge */}
              {c.unread && (
                <div className="flex items-center gap-2 mt-2">
                  <span className="px-2 py-1 text-[10px] rounded-full bg-[var(--brandColor)] text-white">
                    New
                  </span>
                </div>
              )}
            </div>

            {/* Delete Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteConversation(c.id);
              }}
              className="
                opacity-0 group-hover:opacity-100 transition 
                text-[var(--brandRed)] hover:text-red-700 ml-2
              "
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}