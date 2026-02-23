"use client";

import { useState } from "react";

export default function TraceMetalsInUrine() {
  const [search, setSearch] = useState("");

  const tests = [
    "Aluminium (Urine)",
    "Arsenic (Urine)",
    "Cadmium (Urine)",
    "Chromium (Urine)",
    "Cobalt (Urine)",
    "Copper (Urine)",
    "Lead (Urine)",
    "Mercury (Urine)",
    "Nickel (Urine)",
    "Silver (Urine)",
    "Zinc (Urine)",
  ];

  const filtered = tests.filter(t =>
    t.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full bg-[var(--bgLight)] py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-md p-6 md:p-10">

        {/* PAGE TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-6">
          Trace Metals In Urine
        </h1>

        <p className="text-[var(--textLight)] mb-6">
          Please use the search box below to filter this list.
        </p>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-[var(--borderLight)] rounded-md px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-[var(--brandColor)]"
        />

        {/* TABLE */}
        <div className="overflow-x-auto border rounded-md">
          <table className="w-full border-collapse">
            <thead className="bg-[var(--brandColor)] text-white">
              <tr>
                <th className="text-left px-4 py-3 text-sm font-semibold">
                  Test Name
                </th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((item, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-[var(--brandColorLight)] transition"
                >
                  <td className="px-4 py-3 text-[var(--textDark)]">
                    <div
                      className="hover:text-[var(--brandColor)] underline underline-offset-2"
                    >
                      {item}
                    </div>
                  </td>
                </tr>
              ))}

              {/* No Results */}
              {filtered.length === 0 && (
                <tr>
                  <td className="px-4 py-3 text-gray-500 italic">
                    No matching test found.
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
