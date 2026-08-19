"use client";

import { useState } from "react";

// Extracted from your screenshot
const testItems = [
  "Individual Semen Parameters***",
  "Oxidative Stress in Semen (ROS + MIOXSYS)",
  "Individual Semen Parameters***",
  "Oxidative Stress in Semen (ROS + MIOXSYS)",
  "Retrograde Ejaculation",
  "Semen Analysis, Comprehensive*",
  "Semen Analysis, Post-Vasectomy**",
  "Semen Analysis, Vasectomy Reversal*",
  "Semen Culture",
  "Semen Fructose",
  "Semen Leucocytes",
  "Semen Zinc",
  "Sperm Aneuploidy",
  "Sperm Antibodies (Serum)",
  "Sperm Antibodies/MAR Test (Semen)†",
  "Sperm Comet®",
  "Sperm Count (Post-Vasectomy)",
  "Sperm DNA Fragmentation (SCSA)",
  "Sperm Morphology (Kruger strict criteria)",
];

const specialArrangement = [
  "Sperm swim test",
  "Sperm preparation for overnight survival",
  "Sperm motility and vitality testing for epididymal toxicity",
  "Sperm retrieval procedures (biopsy, PESA, MESA)",
  "Sperm cryopreservation and storage (undertaken by Andrology Solutions – HFEA licensed)"
];

const toSlug = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function AndrologyPathology() {
  const [search, setSearch] = useState("");

  const filteredTests = testItems.filter((t) =>
    t.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white border border-gray-100 container mx-auto p-6">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--textDark)]">
          Andrology: Pathology And Services
        </h1>

        <p className="mt-3 text-[var(--textDark)] font-medium">
          Routine tests, and tests by special arrangement.
        </p>

        <p className="mt-2 text-[var(--textLight)]">
          Please use the search box below to filter this list
        </p>

        {/* SEARCH BOX */}
        <div className="mt-5 max-w-md">
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

        {/* TABLE HEADER */}
        <div className="bg-[var(--brandColor)] text-white px-4 py-3 font-semibold">
          Test Name
        </div>

        {/* ITEMS */}
        <div className="divide-y divide-gray-200">
          {filteredTests.map((item, index) => (
            <p
              key={index}
              // href={`/andrology-tests/${toSlug(item)}`}
              className="block px-4 py-3 hover:bg-[var(--brandColorLight)] text-[var(--textDark)] transition"
            >
              {item}
            </p>
          ))}

          {filteredTests.length === 0 && (
            <p className="p-4 text-[var(--textLight)]">No results found.</p>
          )}
        </div>
      </div>

      {/* SPECIAL ARRANGEMENT */}
      <div className="mt-10 bg-white border border-gray-200 p-3 md:p-5">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--textDark)] mb-4">
          By Special Arrangement
        </h2>

        <ul className="list-disc ml-6 space-y-2 text-[var(--textLight)] leading-relaxed">
          {specialArrangement.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <p className="mt-4 text-[var(--textLight)]">All men who store sperm must be screened for HIV 1&2, Hepatitis B, Hepatitis C and HTLV. Under HFEA regulations, sperm can be stored for an initial period of 10 years with formal consent. All patients are offered counseling prior to sperm cryopreservation</p>
      </div>

    </div>
  );
}
