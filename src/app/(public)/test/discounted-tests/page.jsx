"use client";

import React from "react";

export default function DiscontinuedTests() {
  const discontinuedTests = [
    {
      test: "Alpha Fetoprotein on Amniotic fluid",
      code: "AFPA",
      comments: "Effective 03/11/23",
    },
    { test: "Arabinose", code: "ARBN", comments: "Effective 23/04/23" },

    {
      test: "Calreticulin – CALR exon 9 variant screen",
      code: "CALR",
      comments:
        "16/6/23: Included in ALRP (Leukaemia Rapid Acute DNA and RNA NGS Panel) and MPNS (Myeloproliferative Neoplasm NGS Screening Panel)",
    },

    { test: "Cartilage Antibody", code: "ACA", comments: "Effective 23/04/23" },

    {
      test: "Collagen Type 1 Cross-Linked N-Telopeptide – NTX",
      code: "NTX",
      comments: "Effective 17/11/23",
    },

    {
      test: "Collagen (Type I, II, IV) Antibodies",
      code: "COAB",
      comments: "Test no longer available. Effective 01/03/24",
    },

    {
      test: "Coxsackie IgM or Enterovirus IgM",
      code: "COXM",
      comments: "Effective 26/05/23",
    },

    {
      test: "Endometrial Immune Profiling Biopsy RNA",
      code: "23RF",
      comments:
        "Effective 01/02/24. Alternative test DS (Decidualization Score) available from same sample type",
    },

    {
      test: "Functional Vitamin B Profile (B1, B2, B6)",
      code: "BIOF",
      comments: "Effective 23/04/23",
    },

    { test: "Glutathione – Red Cell", code: "GLUR", comments: "Effective 23/04/23" },

    { test: "Glutathione Reductase", code: "GRED", comments: "Effective 23/04/23" },

    {
      test: "Gut Permeability Profile (With PEG 400)",
      code: "GPP",
      comments: "Effective 23/04/23",
    },

    { test: "Hair Mineral Analysis", code: "HMA", comments: "Effective 23/04/23" },

    { test: "Hepcidin", code: "HPDN", comments: "Effective 17/05/23" },

    {
      test: "Human Anti-Mouse Ab’s",
      code: "HAMA",
      comments: "Effective 23/04/23",
    },

    { test: "Inner Ear Antigen", code: "IEA", comments: "Effective 27/10/23" },

    {
      test: "NPM1 mutascreen assay",
      code: "NPM",
      comments:
        "Included in ALRP (Leukaemia Rapid Acute DNA and RNA NGS Panel) and MPNS NGS Panel",
    },

    {
      test: "Pethidine - Urine",
      code: "UPET",
      comments: "Effective 23/04/23",
    },

    {
      test: "Poliovirus Antibodies By Neutralization",
      code: "POLO",
      comments: "Effective 17/05/23",
    },

    {
      test: "Small Intestinal Bacterial Overgrowth Test",
      code: "SIBO",
      comments: "Effective 23/04/23",
    },

    {
      test: "T-SPOT® COVID",
      code: "TCEL",
      comments: "Effective 04/12/23",
    },

    {
      test: "Vitamin D2/D3",
      code: "D2D3",
      comments: "Effective 23/04/23",
    },

    {
      test: "Ziwig Endotest",
      code: "ENDT",
      comments: "Temporarily suspended until further notice. 27/10/23",
    },
  ];

  return (
    <div className="w-full pt-48 bg-[var(--bgLight)] py-10">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <h1 className="text-3xl font-bold text-[var(--textDark)] mb-5">
          Discontinued Tests
        </h1>

        <p className="text-[var(--textLight)] mb-6 leading-relaxed">
          Tests may be discontinued at short notice for various reasons such as
          reagent changes, analyser developments, supply chain issues, or regulatory
          review. Where possible, samples received by WCC will be referred to a
          similar service.
        </p>

        {/* TABLE */}
        <div className="overflow-x-auto rounded-lg shadow-[var(--shadowCard)]">
          <table className="w-full min-w-[800px] border border-[var(--borderLight)]">
            <thead className="bg-[var(--brandColor)] text-white">
              <tr>
                <th className="p-3 text-left font-semibold">Test</th>
                <th className="p-3 text-left font-semibold">Code</th>
                <th className="p-3 text-left font-semibold">Comments</th>
              </tr>
            </thead>

            <tbody>
              {discontinuedTests.map((item, i) => (
                <tr
                  key={i}
                  className={`border-b border-[var(--borderLight)] ${
                    i % 2 === 0 ? "bg-white" : "bg-[var(--brandColorLight)]"
                  }`}
                >
                  <td className="p-3 text-[var(--textDark)]">{item.test}</td>
                  <td className="p-3 font-medium text-[var(--brandColor)]">
                    {item.code}
                  </td>
                  <td className="p-3 text-[var(--textLight)]">{item.comments}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
