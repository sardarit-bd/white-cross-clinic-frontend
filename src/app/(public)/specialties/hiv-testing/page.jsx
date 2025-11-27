"use client";

import { useState } from "react";

export default function HIVTesting() {
  const tests = [
    "CD3/CD4/CD8",
    "HIV 1 & 2 Abs/p24Ag (Self-collect)",
    "HIV-1 Proviral DNA",
    "HIV-1 RNA Viral Load by PCR",
    "HIV-2 RNA by PCR",
    "HIV Confirmation of Positive Screens (Using 3 methodologies)",
    "HIV/HBV/HCV Screen by PCR/NAAT (10 days post exposure)",
    "HIV Rapid RNA HIV-1 QUALITATIVE",
    "HIV Screening: HIV 1 & 2 Abs/p24 Ag (4th Gen)",
    "HIV Therapeutic Drug Monitoring",
    "HTLV 1 & 2 Abs. (Human T Lymphotropic Virus Type I-II)",
    "HTLV by PCR",
    "Rapid Xpert HIV-1 RNA Qualitative – Early Detection from 10 days",
    "Rapid Xpert HIV-1 RNS Viral Load – Rapid Testing for HIV-Positive Patient Prognosis and Response To Antiretroviral Therapy",
  ];

  const [search, setSearch] = useState("");

  const filtered = tests.filter((t) =>
    t.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full bg-[var(--bgLight)] py-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* ==================================
            HEADER SECTION
        ================================== */}
        <div className="bg-[var(--bgWhite)] p-6 rounded-[var(--radius-lg)] shadow-[var(--shadowCard)] mb-6">
          <h1 className="text-[var(--textDark)] text-3xl font-bold mb-2">
            HIV Testing
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

        {/* ==================================
            TABLE SECTION
        ================================== */}
        <div className="bg-[var(--bgWhite)] p-6 rounded-[var(--radius-lg)] shadow-[var(--shadowCard)]">

          <div className="overflow-x-auto">
            <table className="min-w-[750px] w-full border border-[var(--borderLight)]">
              <thead>
                <tr className="bg-[var(--brandColorDark)] text-[var(--textWhite)]">
                  <th className="p-3 font-semibold text-left">Test Name</th>
                </tr>
              </thead>

              <tbody>
                {filtered.map((test, i) => (
                  <tr key={i} className="border-b border-[var(--borderLight)]">
                    <td className="p-3 whitespace-nowrap">
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
    </div>
  );
}
