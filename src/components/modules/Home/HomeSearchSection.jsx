"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Sparkles } from "lucide-react";

export default function HomeSearchSection() {
  const router = useRouter();

  const [normalQuery, setNormalQuery] = useState("");
  const [aiQuery, setAiQuery] = useState("");

  // 🔍 Normal search redirect
  const handleNormalKey = (e) => {
    if (e.key === "Enter" && normalQuery.trim()) {
      router.push(`/find?q=${encodeURIComponent(normalQuery)}`);
    }
  };

  // 🤖 AI Search redirect
  const handleAIKey = (e) => {
    if (e.key === "Enter" && aiQuery.trim()) {
      router.push(`/search?ai=${encodeURIComponent(aiQuery)}`);
    }
  };

  return (
    <section className="w-full bg-[var(--bgLight)] py-12 px-6 md:px-12">
      <div className="container mx-auto">

        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[var(--textDark)] mb-4">
          Find What You’re Looking For
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* NORMAL SEARCH */}
          <div className="bg-[var(--bgLight)] p-4 rounded-xl border border-[var(--borderLight)] shadow-[var(--shadowCard)] flex items-center gap-3">
            <Search size={22} className="text-[var(--brandColor)]" />
            <input
              type="text"
              placeholder="Search normally..."
              className="w-full font-bold bg-transparent focus:outline-none text-[var(--textDark)]"
              value={normalQuery}
              onChange={(e) => setNormalQuery(e.target.value)}
              onKeyDown={handleNormalKey}
            />
          </div>

          {/* AI SEARCH */}
          <div className="rounded-xl p-[2px] bg-[var(--brandGradient)] shadow-xl">
            <div className="bg-white rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--brandColorLight)] flex items-center justify-center">
                <Sparkles size={20} className="text-[var(--brandColor)]" />
              </div>
              <input
              autoFocus
                type="text"
                placeholder="Ask AI  anything about your health..."
                className="w-full font-bold bg-transparent focus:outline-none text-[var(--textDark)] placeholder-[var(--textLight)]"
                value={aiQuery}
                onChange={(e) => setAiQuery(e.target.value)}
                onKeyDown={handleAIKey}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
