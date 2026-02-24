"use client";

import { useState } from "react";

export default function VitaminTests() {
  const tests = [
    "1,25 Vitamin D",
    "Beta Carotene",
    "Biotin CHANGE",
    "Carotenes",
    "Vitamin A (Retinol)",
    "Vitamin B (Functional)",
    "Vitamin B Profile",
    "Vitamin B1 (Thiamine)",
    "Vitamin B2 (Riboflavin)",
    "Vitamin B3 (Nicotinamide)",
    "Vitamin B5 (Pantothenic Acid)",
    "Vitamin B6 (Pyridoxine)",
    "Vitamin B7 (Biotin) CHANGE",
    "Vitamin B9 (Folic acid) – Red cell",
    "Vitamin B12 (Active) (Self-collect)",
    "Vitamin B12 (Active) (Venous / Self-collect)",
    "Vitamin B12 (Active)/Red Cell Folate",
    "Vitamin C (Active)",
    "Vitamin D (1, 25 Dihydroxy)",
    "Vitamin D (25-OH) (Self-collect)",
    "Vitamin D (25-OH) (Venous / Self-collect)",
    "Vitamin E (Alpha Tocopherol)",
    "Vitamin K (Nutritional)",
    "Vitamin Profile 1",
    "Vitamin Profile 2",
  ];

  const [search, setSearch] = useState("");

  const filtered = tests.filter((test) =>
    test.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full bg-[var(--bgLight)] py-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* ================================
            HEADER
        ================================= */}
        <div className="bg-[var(--bgWhite)] p-6 rounded-[var(--radius-lg)] shadow-[var(--shadowCard)] mb-6">
          <h1 className="text-[var(--textDark)] text-3xl font-bold mb-2">
            Vitamin Tests
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
            TABLE
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
                {filtered.map((test, i) => (
                  <tr key={i} className="border-b border-[var(--borderLight)]">
                    <td className="p-3 whitespace-nowrap">
                      <span
                        className="
                          text-[var(--textDark)]
                          hover:text-[var(--brandColor)]
                          hover:underline
                          underline-offset-2
                          transition-all
                        "
                      >
                        {test}
                      </span>
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
