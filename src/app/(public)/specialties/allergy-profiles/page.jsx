"use client";

import { useState } from "react";
import Link from "next/link";

// Convert item name into URL slug
const toSlug = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const allergyProfiles = [
  "Allergy Profiles",
  "ALEX² Allergy Test (Self-collect)",
  "ALEX² Allergy Test (Venous / Self-collect)",
  "Allergic Rhinitis/Asthma Profile",
  "Allergy Profile 1 (Food & Inhalants)",
  "Allergy Profile 2 (UK Aero Allergen)",
  "Allergy Profile 3 (Food)",
  "Allergy Profile 4 (Nuts & Seeds)",
  "Allergy Profile 5 (Children’s Panel)",
  "Allergy Profile 6 (Shellfish)",
  "Allergy Profile 7 (Finfish)",
  "Allergy Profile 7 (Finfish)",
  "Allergy Profile 8 (Cereal – singles)",
  "Allergy Profile 9 (Antibiotics)",
  "Allergy Profile 10 (Insects)",
  "Allergy Profile 11 (Combined Shellfish/Finfish)",
  "Allergy Profile 12 (Milk & Milk Proteins)",
  "Allergy Profile 13 (Stone fruit/Rosaceae family)",
  "Atopic Dermatitis/Eczema Profile (14 allergens)",
  "Gluten Sensitivity Profile CHANGE",
  "ISAC Panel (Self-collect)",
];

export default function AllergyProfilesPage() {
  const [search, setSearch] = useState("");

  const filtered = allergyProfiles.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 md:p-10">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--textDark)]">
        Allergy Profiles
      </h1>

      {/* Description */}
      <p className="mt-3 text-[var(--textLight)] max-w-3xl">
        Our allergy profiles group common allergen tests. They include profiles
        based on geography, food types, inhalants, antibiotics, eczema, gluten
        and rhinitis.
      </p>

      <p className="text-[var(--textLight)] mt-2">
        Please use the search box below to filter this list
      </p>

      {/* Search Box */}
      <div className="mt-6 max-w-md">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-[var(--brandColor)] outline-none"
        />
      </div>

      {/* Table */}
      <div className="mt-6 border rounded-md overflow-hidden">
        {/* Table Header */}
        <div className="bg-[var(--brandColor)] text-white px-4 py-3 font-semibold">
          Test Name
        </div>

        {/* Rows */}
        <div className="divide-y">
          {filtered.map((item, i) => (
            <div
              key={i}
              className="block px-4 py-3 hover:bg-[var(--brandColorLight)] text-[var(--textDark)] transition"
            >
              {item}
            </div>
          ))}

          {filtered.length === 0 && (
            <p className="p-4 text-[var(--textLight)]">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
