"use client";

import { useState } from "react";
import Link from "next/link";

// 🔵 DATA (scalable + object based)
const exposureTests = [
  { name: "2-Butanone GC" },
  { name: "2-Furoic Acid" },
  { name: "Acetone – Blood" },
  { name: "Acetone – Urine" },
  { name: "Alcohol Profile" },
  { name: "Alcohol Profile 2" },
  { name: "Benzene" },
  { name: "Cholinesterase (Serum/Pseudo)" },
  { name: "Doxepin Level (Sinequan)" },
  { name: "MBOCA in Urine" },
  { name: "Molybdenum (Serum)" },
  { name: "Thallium (Blood)" },
  { name: "Thallium (Urine)" },
  { name: "Toluene (Blood)" },
  { name: "Trichloroacetic Acid (Urine)" },
  { name: "Toluene (Urine)" },
  { name: "Xanthine – Blood" },
  { name: "Xylene – Urine" },
  { name: "Zinc Protoporphyrin" },
];

// 🔵 Utility: Convert name → slug
const toSlug = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function SpecificExposurePage() {
  const [search, setSearch] = useState("");

  const filtered = exposureTests.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full bg-[var(--bgLight)] py-10">
      <div className="container mx-auto bg-white shadow-sm rounded-md p-6 md:p-10">

        {/* PAGE TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-6">
          Tests For Specific Exposure
        </h1>

        {/* SEARCH BOX */}
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full max-w-xs px-4 py-2 mb-6 border border-[var(--borderLight)] 
            rounded-md focus:ring-2 focus:ring-[var(--brandColor)]
          "
        />

        {/* TABLE-LIKE LIST */}
        <div className="border rounded-md overflow-hidden">

          {/* HEADER */}
          <div className="bg-[var(--brandColor)] text-white px-4 py-3 font-semibold">
            Test Name
          </div>

          {/* LIST */}
          {filtered.length > 0 ? (
            filtered.map((item, idx) => (
              <Link
                key={idx}
                href={`/specific-exposure/${toSlug(item.name)}`}
                className="
                  block px-4 py-3 border-b last:border-none 
                  hover:bg-[var(--brandColorLight)] transition 
                  text-[var(--textDark)]
                "
              >
                {item.name}
              </Link>
            ))
          ) : (
            <div className="px-4 py-4 text-gray-500 text-sm">
              No matching tests found.
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
