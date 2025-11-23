"use client";

import { useState } from "react";

const testData = [
  "ALEX² Allergy Test (Self-collect)",
  "ALEX² Allergy Test (Venous / Self-collect)",
  "Allergic Rhinitis/Asthma Profile",
  "Allergy – Individual Allergens",
  "Allergy – 5 x Single Individual Allergens",
  "Allergy – 10 x Single Individual Allergens",
  "Allergy Profile 1 (Food & Inhalants)",
  "Allergy Profile 2 (UK Aero Allergens)",
  "Allergy Profile 3 (Food)",
  "Allergy Profile 4 (Nuts & Seeds)",
];

export default function SpecialList() {
  const [search, setSearch] = useState("");

  const filtered = testData.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="w-full bg-white py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h1 className="text-3xl font-bold text-[var(--textDark)]">
          Allergy Test Library
        </h1>

        <p className="mt-3 text-[var(--textLight)] leading-relaxed">
          Our allergy profiles, individual allergen tests, and allergen
          component tests. Please use the search box below to filter this list.
        </p>

        {/* Search Box */}
        <div className="mt-6">
          <input
            type="text"
            placeholder="Search..."
            className="
              w-full md:w-96 
              px-4 py-2 
              rounded-lg 
              border border-[var(--borderLight)] 
              bg-[var(--bgLight)] 
              focus:outline-none 
              focus:ring-2 focus:ring-[var(--brandColor)]
            "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="mt-8 border rounded-lg overflow-hidden shadow-sm">
          {/* Table Header */}
          <div className="bg-[var(--brandColor)] text-white px-4 py-3 font-semibold flex justify-between">
            <span>Test Name</span>
            <span>▾</span>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[var(--borderLight)]">
            {filtered.length === 0 ? (
              <p className="p-4 text-[var(--textLight)] text-sm">
                No matching tests found.
              </p>
            ) : (
              filtered.map((name, i) => (
                <div
                  key={i}
                  className="
                    px-4 py-3 
                    text-[var(--brandColor)] 
                    hover:bg-[var(--brandColorLight)] 
                    hover:text-[var(--brandColorDark)] 
                    transition cursor-pointer
                  "
                >
                  {name}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
