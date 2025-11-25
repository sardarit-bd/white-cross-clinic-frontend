"use client";

import { useState } from "react";
import Link from "next/link";

const tests = [
  "Aluminium (Blood)",
  "Arsenic (Blood)",
  "Cadmium (Blood)",
  "Chromium (Blood)",
  "Copper (Serum)",
  "Lead (Blood)",
  "Lead Profile (Hb, ZPP, Lead)",
  "Magnesium (Serum)",
  "Mercury (Blood)",
  "Nickel (Serum)",
  "Silver (Blood)",
  "Trace Metal (Blood) Profile",
  "Zinc (Serum)",
];

export default function TraceMetalsInBlood() {
  const [search, setSearch] = useState("");

  const filtered = tests.filter((t) =>
    t.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* PAGE TITLE */}
      <h1 className="text-3xl font-bold text-[var(--textDark)] mb-4">
        Trace Metals In Blood
      </h1>

      <p className="text-[var(--textLight)] mb-6">
        Please use the search box below to filter this list
      </p>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-sm mb-6 px-4 py-2 border border-[var(--borderLight)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brandColor)]"
      />

      {/* TABLE */}
      <div className="border border-[var(--borderLight)] rounded-lg overflow-hidden">
        {/* TABLE HEADER */}
        <div className="bg-[var(--brandColor)] text-white px-6 py-3 font-semibold flex justify-between items-center">
          <span>Test Name</span>
          <span className="opacity-70 text-sm">⇅</span>
        </div>

        {/* TABLE ROWS */}
        {filtered.map((item, i) => {
          const slug = item
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");

          return (
            <Link
              key={i}
              href={`/trace-metals/${slug}`}
              className="block px-6 py-3 border-t border-[var(--borderLight)] 
                         hover:bg-[var(--brandColorLight)] hover:text-[var(--brandColor)] 
                         transition-all duration-200"
            >
              {item}
            </Link>
          );
        })}

        {filtered.length === 0 && (
          <div className="px-6 py-4 text-[var(--textLight)] italic">
            No tests found...
          </div>
        )}
      </div>
    </div>
  );
}
