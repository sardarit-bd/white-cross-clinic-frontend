"use client";
import { useState } from "react";

export default function STIScreeningPage() {
  const [search, setSearch] = useState("");

  const tests = [
    "7 STI Profile by PCR (7 tests from 1 sample)",
    "Chlamydia trachomatis",
    "Chlamydia/Gonorrhoea",
    "Gardnerella vaginalis",
    "Gonorrhoea",
    "Herpes Simplex I/II by PCR",
    "Mycoplasma genitalium",
    "Trichomonas vaginalis",
    "Ureaplasma urealyticum",
  ];

  const filteredTests = tests.filter((t) =>
    t.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white border border-gray-100 p-6">
      <div className="container mx-auto">

        {/* PAGE HEADER */}
        <div className="bg-white mb-10">
          <h1 className="text-3xl font-bold text-[var(--textDark)] mb-3">
            STI Screening From Hologic ThinPrep Vials
          </h1>

          <p className="text-[var(--textLight)] leading-relaxed mb-3">
            In addition to HPV, other STIs can be tested from the same Thin Prep vial.
          </p>

          <p className="text-[var(--textLight)] leading-relaxed">
            Tests are priced individually. Please request tests individually.
            Thin Prep Vials are kept for 21 days after receipt of sample.
            Requests for additional tests from the vial already received in the laboratory
            can be made by contacting the Cytology Department.
          </p>
        </div>

        {/* SEARCH BOX */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-xs p-2 border border-[var(--borderLight)] focus:outline-none focus:ring-2 focus:ring-[var(--brandColor)]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* TABLE */}
        <div className="bg-white border border-[var(--borderLight)] overflow-hidden">

          {/* TABLE HEADER */}
          <div className="bg-[var(--brandColor)] text-white p-3 font-semibold flex justify-between items-center">
            <span>Profiles And Single Tests</span>
            <span>▼</span>
          </div>

          {/* TABLE LIST */}
          <div>
            {filteredTests.map((test, i) => (
              <div
                key={i}
                className="border-b border-[var(--borderLight)] p-3 hover:bg-[var(--brandColorLight)] transition cursor-pointer text-[var(--textDark)]"
              >
                {test}
              </div>
            ))}

            {filteredTests.length === 0 && (
              <div className="p-4 text-center text-[var(--textLight)]">
                No matching tests found.
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
