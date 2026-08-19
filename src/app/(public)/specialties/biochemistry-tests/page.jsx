"use client";

import { useState } from "react";

const biochemistryTests = [
  "5 HIAA",
  "5’ Nucleotidase",
  "6-Thioguanine Nucleotides",
  "21 Hydroxylase Ab’s",
  "Acetylcholine Receptor Autoantibodies",
  "Acid Phosphatase – Total",
  "Adenosine Deaminase",
  "Adiponectin",
  "Albumin",
  "Alcohol (Medical)",
  "Alcohol (Urine)",
  "Aldolase",
  "Alkaline Phosphatase",
  "Alkaline Phosphatase Isoenzymes",
  "Alpha-1-Antitrypsin (Serum)",
  "Alpha-1-Antitrypsin (Stool)",
  "Alpha-1-Antitrypsin Genotype – PI*MM, PI*MS, PI*Z",
  "Alpha-1-Glycoprotein",
  "Alpha-1-Microglobulin",
  "Alpha-2-Macroglobulins",
  "Alpha-Fetoprotein",
  "ALT (Alanine Aminotransferase) (SGPT)",
  "Aluminium (Blood)",
  "Amino Acid (EDTA Plasma)",
  "Amino Acid Quantitative (Urine)",
  "Aminolevulinic",
  "Ammonia",
  "Amylase (Self-collect)",
  "Amylase (Urine)",
  "Amylase (Venous/Self-collect)",
  "Amylase Isoenzymes",
  "Beta 2 Microglobulin (Serum)",
  "Bicarbonate",
  "Bone Screen (Bloods only)",
  "BUN (Blood Urea Nitrogen)",
  "Lactate Dehydrogenase (LDH)"
];
// Slug generator
const toSlug = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function BiochemistryTests() {
  const [search, setSearch] = useState("");

  const filtered = biochemistryTests.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white border border-gray-100 container mx-auto p-6">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-4">
          Biochemistry Tests
        </h1>

        <p className="text-[var(--textLight)] mb-4">
          Please use the search box below to filter this list
        </p>

        {/* Search box */}
        <div className="max-w-md">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[var(--brandColor)] outline-none"
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="border border-gray-200 overflow-hidden">

        {/* Table Header */}
        <div className="bg-[var(--brandColor)] text-white px-4 py-3 font-semibold">
          Test Name
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-gray-200">
          {filtered.map((item, index) => (
            <p
              key={index}
              // href={`/biochemistry-tests/${toSlug(item)}`}
              className="block px-4 py-3 hover:bg-[var(--brandColorLight)] text-[var(--textDark)] transition"
            >
              {item}
            </p>
          ))}

          {filtered.length === 0 && (
            <p className="p-4 text-[var(--textLight)]">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
