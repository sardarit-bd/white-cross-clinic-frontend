"use client";

import { useState } from "react";

export default function VirologyScreensByBlood() {
  const tests = [
    "Neurological Viral Screen",
    "Pneumonia (Atypical) Screen",
    "Torch Screen",
    "Viral Antibody Screen",
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
            Virology Screens By Blood
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

            <table className="min-w-[600px] w-full border border-[var(--borderLight)]">
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
