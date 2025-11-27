"use client";

import { useState } from "react";

export default function FastSexualHealthTests() {
  const allTests = [
    "FAST Chlamydia – PCR Swab",
    "FAST Chlamydia – Urine",
    "FAST CT/GC – PCR Swab",
    "FAST CT/GC – Rectal PCR Swab",
    "FAST CT/GC – Throat PCR Swab",
    "FAST CT/GC – Urine",
    "FAST Screen SHORT with Swab",
    "FAST Screen SHORT with Urine",
    "FAST Screen with Swab",
    "FAST Screen with Urine",
  ];

  const [search, setSearch] = useState("");

  const filteredTests = allTests.filter((test) =>
    test.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full bg-[var(--bgLight)] py-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* ==================================
            PAGE HEADER
        =================================== */}
        <div className="bg-[var(--bgWhite)] p-6 shadow-[var(--shadowCard)] rounded-[var(--radius-lg)] mb-6">
          <h1 className="text-[var(--textDark)] text-3xl font-bold mb-2">
            FAST Sexual Health Screening Tests
          </h1>

          <p className="text-[var(--textLight)]">
            Please use the search box below to filter this list
          </p>

          {/* SEARCH BOX */}
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              mt-4
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

        {/* ==================================
            TABLE SECTION
        =================================== */}
        <div className="bg-[var(--bgWhite)] p-6 shadow-[var(--shadowCard)] rounded-[var(--radius-lg)]">
          <table className="w-full border border-[var(--borderLight)]">
            <thead>
              <tr className="bg-[var(--brandColorDark)] text-[var(--textWhite)]">
                <th className="p-3 text-left font-semibold">Test Name</th>
              </tr>
            </thead>

            <tbody>
              {filteredTests.map((test, i) => (
                <tr key={i} className="border-b border-[var(--borderLight)]">
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
                      {test}
                    </a>
                  </td>
                </tr>
              ))}

              {filteredTests.length === 0 && (
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
