"use client";

import { useState } from "react";

export default function RapidXpertHIV() {
  const tests = [
    "Rapid Xpert HIV-1 RNA Qualitative – Early Detection from 10 days",
    "Rapid Xpert HIV-1 RNS Viral Load – Rapid Testing for HIV-Positive Patient Prognosis and Response To Antiretroviral Therapy",
  ];

  const [search, setSearch] = useState("");

  const filteredTests = tests.filter((t) =>
    t.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full bg-[var(--bgLight)] py-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* =====================================================
            PAGE CONTENT BOX
        ===================================================== */}
        <div className="bg-[var(--bgWhite)] p-6 rounded-[var(--radius-lg)] shadow-[var(--shadowCard)]">

          <h1 className="text-[var(--textDark)] text-3xl font-bold mb-4">
            Rapid Xpert HIV-1
          </h1>

          <p className="text-[var(--textLight)] leading-relaxed mb-6">
            For some patients earlier diagnosis of HIV infection is important.{" "}
            <strong className="text-[var(--textDark)]">Xpert HIV-1 Qual</strong> is a qualitative
            test that provides on-demand molecular testing for early diagnosis (from 10 days).
          </p>

          {/* =====================================================
              SUB HEADING
          ===================================================== */}
          <h2 className="text-[var(--textDark)] text-2xl font-bold mb-3">
            For Patient On Treatment For HIV
          </h2>

          <p className="text-[var(--textLight)] leading-relaxed mb-4">
            <strong className="text-[var(--textDark)]">Xpert HIV-1 Viral Load</strong> accommodates
            on demand testing and measurement of blood plasma HIV-1 RNA concentration… It is a strong
            predictor of the rate of disease progression and has great prognostic value.
          </p>

          {/* Bullet Points */}
          <ul className="list-disc pl-6 text-[var(--textDark)] space-y-1 mb-6">
            <li>Improve Patient Care: Same day results support better clinical decisions</li>
            <li>Increase Efficiency: Rapid results enable earlier adjustments to appropriate therapy</li>
            <li>Strengthen Communities: Quick decisions can help reduce drug resistance</li>
          </ul>

          <p className="text-[var(--textLight)] mb-4">
            Please use the search box below to filter this list
          </p>

          {/* =====================================================
              SEARCH BOX
          ===================================================== */}
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
              mb-6
            "
          />

          {/* =====================================================
              TABLE WRAPPER (SCROLL HORIZONTAL)
          ===================================================== */}
          <div className="overflow-x-auto">
            <table className="min-w-[700px] w-full border border-[var(--borderLight)]">
              <thead>
                <tr className="bg-[var(--brandColorDark)] text-[var(--textWhite)]">
                  <th className="p-3 text-left font-semibold">Test Name</th>
                </tr>
              </thead>

              <tbody>
                {filteredTests.map((test, i) => (
                  <tr key={i} className="border-b border-[var(--borderLight)]">
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

                {filteredTests.length === 0 && (
                  <tr>
                    <td className="p-3 text-center text-[var(--textLight)]">
                      No matching tests found.
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
