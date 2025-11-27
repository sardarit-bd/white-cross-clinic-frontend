"use client";

import { useState } from "react";

export default function ImmuneStatus() {
  const tests = [
    "Hepatitis A Immunity (IgG/IgM)",
    "Hepatitis B Immunity (IgG) (Self-collect)",
    "Hepatitis B Immunity (IgG) (Venous / Self-collect)",
    "Measles Antibodies (IgG) Immunity",
    "Measles Antibodies (IgM)",
    "Measles, Mumps, Rubella (MMR)",
    "Mumps Antibodies (IgG)",
    "Mumps Antibodies (IgM)",
    "Rubella PCR",
    "Pertussis (Whooping Cough) Antibodies",
    "Pneumococcal Antibody Screen",
    "Rabies Antibody",
    "Rubella Antibody (IgG)",
    "Rubella Antibody (IgM)",
    "Rubella PCR",
    "Tetanus Antibody",
    "Varicella zoster Antibodies (IgG)",
    "Varicella zoster Antibodies (IgM)",
  ];

  const [search, setSearch] = useState("");

  const filtered = tests.filter((t) =>
    t.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full bg-[var(--bgLight)] py-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* ================================
             HEADER
        ================================= */}
        <div className="bg-[var(--bgWhite)] p-6 rounded-[var(--radius-lg)] shadow-[var(--shadowCard)] mb-6">
          <h1 className="text-[var(--textDark)] text-3xl font-bold mb-2">
            Immune Status
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
              outline-none
              focus:border-[var(--brandColor)]
              transition-all
            "
          />
        </div>

        {/* ================================
             TABLE
        ================================= */}
        <div className="bg-[var(--bgWhite)] p-6 rounded-[var(--radius-lg)] shadow-[var(--shadowCard)]">
          <table className="w-full border border-[var(--borderLight)]">
            <thead>
              <tr className="bg-[var(--brandColorDark)] text-[var(--textWhite)]">
                <th className="p-3 text-left font-semibold">Test Name</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-b border-[var(--borderLight)]"
                >
                  <td className="p-3">
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
                      {item}
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
  );
}
