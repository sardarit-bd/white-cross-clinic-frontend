"use client";

import { useState } from "react";
import Link from "next/link";

export default function DrugsOfAbuseAlcohol() {
  const [search, setSearch] = useState("");

  const tests = [
    "Alcohol Profile",
    "Alcohol Profile 2",
    "Amphetamines – Blood",
    "Cannabinoids (Urine) Screen",
    "Cocaine (Urine) Screen",
    "Drugs of Abuse from Blood without Chain of Custody",
    "Drugs of Abuse Profile – Random Urine Sample/No Chain of Custody",
    "Drugs of Abuse Profile – Random Urine Sample/No Chain of Custody Plus Alcohol",
    "Drugs of Abuse Profile – With Chain of Custody",
    "Ketamine Screen",
    "LSD",
    "Opiate Screen (Urine)",
    "PEth (Phosphatidylethanol) (Self-collect)",
    "PEth (Phosphatidylethanol) (Venous / Self-collect)",
    "Urine EtG (Ethyl glucuronide)"
  ];

  const filtered = tests.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full bg-[var(--bgLight)]">
      <div className="max-w-6xl mx-auto p-5 md:p-10">

        {/* PAGE TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-4">
          Drugs of abuse / Alcohol
        </h1>

        {/* PAGE INTRO */}
        <p className="text-[var(--textLight)] leading-relaxed mb-6">
          WCC offers a number of profiles for drugs of abuse and alcohol, as well as
          testing for individual drugs.
        </p>

        {/* SECTION */}
        <h2 className="text-xl font-semibold text-[var(--textDark)] mb-2">
          Testing process
        </h2>
        <p className="text-[var(--textLight)] leading-relaxed mb-6">
          Samples submitted for analysis will undergo initial screening. Urinary
          creatinine is routinely measured during testing to verify the validity of the
          sample submitted. Creatinine levels below normal occur when the urine has
          been diluted, either directly or by drinking large amounts of water before
          providing the urine sample. Chain of custody containers, forms, seals and
          barcodes are provided by WCC on request.
        </p>

        <p className="text-[var(--textLight)] leading-relaxed mb-6">
          All Chain of Custody, and non-chain, samples with positive findings will
          proceed to identification/confirmation by Gas Chromatography/Mass Spectrometry.
        </p>

        {/* SECTION */}
        <h2 className="text-xl font-semibold text-[var(--textDark)] mb-2">
          Chain of custody
        </h2>
        <p className="text-[var(--textLight)] leading-relaxed mb-6">
          Chain of custody refers to the system of controls governing the entire urine
          collection, processing and storage of the sample. It ensures that a particular
          urine specimen originated from a particular individual, and that the reported
          results relate, beyond doubt, to that specimen.
        </p>

        <p className="text-[var(--textLight)] leading-relaxed mb-10">
          Chain of custody requires attention to detail so that it is possible to prove
          that there has been no opportunity for the sample to be accidentally or
          maliciously adulterated. Sample collection should be undertaken by collectors
          who are well versed in the protocols of chain of custody.
        </p>

        {/* SEARCH BAR */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="border border-[var(--borderLight)] rounded-md px-3 py-2 w-full md:w-80 bg-white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* TABLE HEADER */}
        <div className="bg-[var(--brandColorDark)] text-white font-semibold px-4 py-3 rounded-t-md">
          Test Name
        </div>

        {/* TEST LIST */}
        <div className="border border-[var(--borderLight)] border-t-0 rounded-b-md">
          {filtered.map((item, i) => (
            <Link
              key={i}
              href="#"
              className="block px-4 py-3 border-b border-[var(--borderLight)] 
              hover:bg-[var(--brandColorLight)] text-[var(--brandColor)] hover:underline"
            >
              {item}
            </Link>
          ))}

          {filtered.length === 0 && (
            <div className="px-4 py-4 text-[var(--textLight)] italic">
              No matching test found.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
