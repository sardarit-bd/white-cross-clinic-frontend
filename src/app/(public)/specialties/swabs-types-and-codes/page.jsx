"use client";

import { useState } from "react";

// ===============================
//  SWABS DYNAMIC DATA
// ===============================
const swabList = [
  "Candida only swab",
  "Cervical swab",
  "Ear swab",
  "Eye swab",
  "Gonorrhoea",
  "High vaginal swab",
  "Oral swab",
  "Penile swab",
  "Rectal swab",
  "Skin swab",
  "Throat swab",
  "Urethral swab",
  "Vaginal swab",
  "Vulval swab",
  "Wound swab",
  "MRSA by Culture: 1 swab",
  "MRSA by Culture: 2 swabs",
  "MRSA by Culture: 3 swabs",
  "MRSA by Culture: 4 swabs",
];

export default function SwabsPage() {
  const [search, setSearch] = useState("");

  const filtered = swabList.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-10">

      {/* PAGE TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-2">
        Swabs: Types And Codes
      </h1>

      <p className="text-[var(--textDark)]/90 mb-6">
        <span className="font-semibold">Patient Request Forms AND Swabs</span> should be
        labelled with the body site from which the sample was taken.
        <span className="font-semibold"> This is important</span>, as the swab site determines
        the appropriate culture media required to target the most likely pathogens.
      </p>

      <p className="mb-4 text-[var(--textDark)]/80">
        Please use the search box below to filter this list
      </p>

      {/* SEARCH INPUT */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-xs px-4 py-2 border border-[var(--borderLight)] rounded-md mb-6
                   focus:outline-none focus:ring-2 focus:ring-[var(--brandColor)]"
      />

      {/* TABLE */}
      <div className="overflow-hidden rounded-md border border-[var(--borderLight)]">
        {/* TABLE HEADER */}
        <div className="bg-[var(--brandColor)] text-white font-semibold px-4 py-3">
          Swab Site
        </div>

        {/* LIST */}
        <div className="divide-y divide-gray-200 bg-white">
          {filtered.map((item, i) => (
            <button
              key={i}
              className="w-full text-left px-4 py-3 hover:bg-[var(--brandColorLight)]
                         transition cursor-pointer text-[var(--textDark)]"
            >
              {item}
            </button>
          ))}

          {filtered.length === 0 && (
            <p className="px-4 py-4 text-gray-500 italic">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
