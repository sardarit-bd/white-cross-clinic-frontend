"use client";

import Link from "next/link";

const assays = [
  "Amikacin Level (State dose)",
  "Gentamicin Assay",
  "Metronidazole Level",
  "Teicoplanin Assay",
  "Tobramycin Assay (Provide Clinical Details)",
  "Vancomycin Hydrochloride",
];

// slug generator
const toSlug = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function AntibioticAssays() {
  return (
    <div className="container mx-auto px-6 md:px-10 py-10">

      {/* TOP CARD */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-md p-6 md:p-10 mb-10">
        
        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-3">
          Antibiotic Assays
        </h1>

        {/* DESCRIPTION */}
        <p className="text-[var(--textDark)] font-medium text-lg leading-relaxed">
          Our antibiotic assay tests enable the serum concentrations of certain antibiotics to be monitored. 
          This helps to ensure adequate dosing for efficacy, and to avoid risks associated with potentially toxic levels.
        </p>
      </div>

      {/* TABLE */}
      <div className="border border-gray-200 rounded-md overflow-hidden">

        {/* HEADER */}
        <div className="bg-[var(--brandColor)] text-white px-4 py-3 font-semibold">
          Assay Name
        </div>

        {/* LIST */}
        <div className="divide-y">
          {assays.map((item, i) => (
            <div
              key={i}
              className="block px-4 py-3 hover:bg-[var(--brandColorLight)] text-[var(--textDark)] transition"
            >
              {item}
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
