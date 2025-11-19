"use client";

import { Search, Sparkles } from "lucide-react";

export default function HomeSearchSection() {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[var(--textDark)] mb-4">
          Find What You’re Looking For
        </h2>

        {/* <p className="text-center text-[var(--textLight)] mb-10 max-w-2xl mx-auto">
          Search medical articles, doctors, symptoms — or ask our AI assistant for smarter health insights.
        </p> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* NORMAL SEARCH */}
          <div className="bg-[var(--bgLight)] p-4 rounded-xl border border-[var(--borderLight)] shadow-[var(--shadowCard)] flex items-center gap-3">
            <Search size={22} className="text-[var(--brandColor)]" />
            <input
              type="text"
              placeholder="Search normally..."
              className="w-full bg-transparent focus:outline-none text-[var(--textDark)]"
            />
          </div>

          {/* AI SEARCH - HIGH CONTRAST & VISIBLE */}
          <div className="rounded-xl p-[2px] bg-[var(--bgLight)] shadow-xl">
            <div className="bg-white rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--brandColorLight)] flex items-center justify-center">
                <Sparkles size={20} className="text-[var(--brandColor)]" />
              </div>
              <input
                type="text"
                placeholder="Ask AI anything about your health..."
                className="w-full bg-transparent focus:outline-none text-[var(--textDark)] placeholder-[var(--textLight)]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
