"use client";

import { useState } from "react";

export default function VirologyTests() {
  const tests = [
    "Adenovirus by PCR",
    "Arbovirus Antibodies/Abs",
    "Atypical Pneumonia Screen",
    "BK Polyoma Virus by PCR",
    "Cat Scratch Fever (Bartonella IgG)",
    "CD3/CD4/CD8",
    "COVID-19 (SARS-CoV-2) (PCR / Self-collect)",
    "COVID-19 (SARS-CoV-2) Rapid RNA Sequencing",
    "Dengue Fever PCR",
    "Epstein-Barr Virus Antibodies IgG/IgM",
    "Epstein-Barr Virus PCR",
    "Herpes Simplex (HSV) 1 & 2 – Oral lesion (Self-collect)",
    "Herpes Simplex (HSV) 1 & 2 (PCR / Self-collect) (Oral or Genital)",
    "HIV/HBV/HCV Screen by PCR/NAAT (10 days post exposure)",
    "Human Herpes Virus – 6 by PCR",
    "Human Herpes Virus – 8 (IgG)",
    "JC Polyoma Virus by PCR",
    "Measles Antibodies (IgG) Immunity",
    "Measles PCR",
    "Needle Stick Injury Profile",
    "Neurological Viral Screen",
    "Parvovirus IgG Antibodies",
    "Parvovirus IgG/IgM Abs",
    "Respiratory PCR Panel (COVID-19, Flu A/B and RSV) (PCR / Self-collect)",
    "Respiratory PCR Panel (COVID-19, Flu A/B and RSV) (Self-collect)",
    "Rubella Antibody (IgG)",
    "Rubella Antibody (IgM)",
    "Torch Screen",
    "Varicella zoster – DNA",
    "Varicella zoster Antibodies (IgG)",
    "Varicella zoster Antibodies (IgM)",
    "Viral Eye by PCR",
    "West Nile Virus Abs",
    "Zika Abs IgM and IgG – Antibody detection from 15 days",
    "Zika RNA by PCR in Semen",
  ];

  const [search, setSearch] = useState("");

  const filtered = tests.filter((t) =>
    t.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full bg-[var(--bgLight)] py-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* ================================
            HEADER CARD
        ================================= */}
        <div className="bg-[var(--bgWhite)] p-6 rounded-[var(--radius-lg)] shadow-[var(--shadowCard)] mb-6">
          <h1 className="text-[var(--textDark)] text-3xl font-bold mb-2">
            Virology Tests
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
              p-2
              border border-[var(--borderLight)]
              rounded-[var(--radius-md)]
              focus:border-[var(--brandColor)]
              outline-none
              transition-all
            "
          />
        </div>

        {/* ================================
            TABLE CARD
        ================================= */}
        <div className="bg-[var(--bgWhite)] p-6 rounded-[var(--radius-lg)] shadow-[var(--shadowCard)]">
          <div className="overflow-x-auto">

            <table className="min-w-[750px] w-full border border-[var(--borderLight)]">
              <thead>
                <tr className="bg-[var(--brandColorDark)] text-[var(--textWhite)]">
                  <th className="p-3 text-left font-semibold">Test Name</th>
                </tr>
              </thead>

              <tbody>
                {filtered.map((test, idx) => (
                  <tr key={idx} className="border-b border-[var(--borderLight)]">
                    <td className="p-3 whitespace-nowrap">
                      <a
                        href="#"
                        className="
                          text-[var(--textDark)]
                          hover:text-[var(--brandColor)]
                          hover:underline
                          underline-offset-2
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
                      No matching results found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

          </div>
        </div>

      </div>
    </div>
  );
}
