"use client";

import { useState } from "react";

export default function SexualHealthTests() {
  const allTests = [
    "7 STI Profile by PCR (7 tests from 1 Sample)",
    "7 STI Profile by PCR (7 tests from 1 Sample) (Self-collect)",
    "Chlamydia – PCR swab",
    "Chlamydia – Urine",
    "Chlamydia/Gonorrhoea – PCR Swab",
    "Chlamydia/Gonorrhoea – Vaginal (Self-collect)",
    "CT/GC/Trichomonas/Mgen – PCR Swab",
    "DL12 7 STI Profile by PCR (7 PCR tests from 1 Sample) (Self-collect)",
    "FAST CT/GC – PCR Swab",
    "FAST CT/GC – Urine",
    "FAST Gonorrhoea – PCR Swab",
    "FAST Screen SHORT with Swab",
    "FAST Screen with Urine",
    "Gardnerella vaginalis by PCR",
    "Gonorrhoea – Urine",
    "Haemophilus ducreyi by PCR",
    "Hepatitis A Profile",
    "Herpes Simplex (HSV) 1 & 2 – Genital lesion (Self-collect)",
    "HIV 1 & 2 Abs/p24Ag (Self-collect)",
    "HPV (DNA and reflexed mRNA)",
    "HIV Rapid RNA HIV-1 QUANTITATIVE",
    "Lymphogranuloma Venereum (LGV) (PCR)",
    "Macrolide Resistance Test (Mgen)",
    "Mycoplasma genitalium Detection – Urine or Vaginal (Self-collect)",
    "N. gonorrhoea",
    "Rapid Xpert HIV-1 RNA Qualitative – Early Detection from 10 days",
    "STD1 M/F STD Quad (Urine and Serology)",
    "STD2 M/F STI Profile Plus (Urine and Serology)",
    "TPPA",
    "Trichomonas vaginalis (TV) – Urine or Vaginal (Self-collect)",
    "Ureaplasma urealyticum by PCR",
    "Vaginitis/BV Profile (Culture & PCR / Self-collect)",
    "Vaginitis/BV Profile using Culture & PCR Swab (Self-collect)",
  ];

  const [search, setSearch] = useState("");

  const filteredTests = allTests.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full bg-[var(--bgLight)] py-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* ===========================
            PAGE HEADING
        ============================ */}
        <div className="bg-[var(--bgWhite)] shadow-[var(--shadowCard)] p-6 rounded-[var(--radius-lg)] mb-6">
          <h2 className="text-[var(--textDark)] text-2xl font-bold">
            Sexual Health Tests
          </h2>

          <p className="text-[var(--textLight)] mt-2">
            Please use the search box below to filter this list
          </p>

          {/* Search Box */}
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              mt-4 w-full max-w-sm
              p-2
              border border-[var(--borderLight)]
              rounded-[var(--radius-md)]
              outline-none
              focus:border-[var(--brandColor)]
              transition-all
            "
          />
        </div>

        {/* ===========================
            TABLE SECTION
        ============================ */}
        <div className="bg-[var(--bgWhite)] shadow-[var(--shadowCard)] rounded-[var(--radius-lg)] p-6">
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
                    No tests found.
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
