"use client";

import { useState } from "react";

export default function TumourMarkersTests() {
  const allTests = [
    "Alpha-Fetoprotein",
    "Breast Cancer NGS Panel",
    "CA 15-3",
    "CA 125 (Self-collect)",
    "CA 125 (Venous / Self-collect)",
    "CA 19-9",
    "CA 50",
    "CA 72-4",
    "Carcino Embryonic Antigen",
    "Complex PSA (Prostate Specific Ag)",
    "Cyfra 21-1",
    "HCG (Oncology)",
    "HE4 + ROMA (Earlier Detection of Ovarian Tumour)",
    "Neurone Specific Enolase",
    "Osteocalcin",
    "Prostate Profile (Total & Free PSA)",
    "Prostate Specific Antigen (Total) (Self-collect)",
    "Prostate Specific Antigen (Total) (Venous / Self-collect)",
    "Pyruvate Kinase (M2-PK)",
    "S100 Malignant Melanoma",
    "Squamous Cell Carcinoma",
    "Stockholm3 NEW",
    "Testicular Tumour Profile (LDH, AFP, HCG)",
    "Urinary Bladder Cancer Antigen",
  ];

  const [search, setSearch] = useState("");

  const filtered = allTests.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full bg-[var(--bgLight)] py-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* HEADER SECTION */}
        <div className="bg-[var(--bgWhite)] p-6 rounded-[var(--radius-lg)] shadow-[var(--shadowCard)] mb-6">
          <h1 className="text-[var(--textDark)] text-3xl font-bold mb-2">
            Tumour Markers Tests
          </h1>

          <p className="text-[var(--textLight)] mb-4">
            Please use the search box below to filter this list
          </p>

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full max-w-sm
              p-2 border border-[var(--borderLight)]
              rounded-[var(--radius-md)]
              outline-none
              focus:border-[var(--brandColor)]
              transition-all
            "
          />
        </div>

        {/* TABLE SECTION */}
        <div className="bg-[var(--bgWhite)] p-6 rounded-[var(--radius-lg)] shadow-[var(--shadowCard)]">
          <table className="w-full border border-[var(--borderLight)]">
            <thead>
              <tr className="bg-[var(--brandColorDark)] text-[var(--textWhite)]">
                <th className="p-3 text-left font-semibold">Test Name</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((test, i) => (
                <tr key={i} className="border-b border-[var(--borderLight)]">
                  <td className="p-3">
                    <a
                      href="#"
                      className="
                        text-[var(--textDark)]
                        hover:text-[var(--brandColor)]
                        hover:underline underline-offset-2
                        transition-all
                      "
                    >
                      {test}
                    </a>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td className="p-4 text-center text-[var(--textLight)]">
                    No matching tests found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
