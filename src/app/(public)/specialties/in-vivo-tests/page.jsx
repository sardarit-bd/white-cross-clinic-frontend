/* eslint-disable react-hooks/static-components */
"use client";

import { useState } from "react";
import Link from "next/link";

export default function InVivoTestsPage() {
  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState("");
  const [search3, setSearch3] = useState("");

  const glucoseTests = [
    "Glucose Challenge Test/Mini-GTT",
    "Glucose Tolerance Test (Extended Plus)",
    "Glucose Tolerance Test (Extended)",
    "Glucose Tolerance Test (Short)",
    "Glucose Tolerance Test/OGTT",
    "Glucose Tolerance with Growth Hormone",
  ];

  const extendedTests = [
    "Lactose Tolerance Test",
    "Synacthen Stimulation Test",
  ];

  const antibioticAssays = [
    "Amikacin Level (State dose)",
    "Gentamicin Assay",
    "Glucose Tolerance with Insulin",
    "Metronidazole Level",
    "Teicoplanin Assay",
    "Tobramycin Assay (Provide Clinical Details)",
    "Vancomycin Hydrochloride",
  ];

  const microbiologyTests = [
    "16S rRNA Bacterial Gene",
    "18S rRNA Fungal Gene",
    "Aspergillus Precipitins",
    "Beta D Glucan",
    "Blood Culture#",
    "Campylobacter Jejuni Antibodies",
    "Candida (Culture)",
    "Candida Antibodies",
    "Carbapenemase producing organism screen",
    "Clostridium Difficile Toxin by PCR",
    "Cryptococcal Antigen",
    "Cryptosporidium",
    "CSF for Microscopy and Culture",
    "Culture (Any site)",
    "Fluid Culture",
    "Fluid for Crystals + Culture",
    "Fungal ID + Sens",
    "Fungal investigations (non-superficial extended culture)",
    "Fungal investigations (superficial/dermatophyte PCR test)",
    "Galactomannan (Aspergillus Antigen)",
    "Gonorrhoea – Culture",
    "Group B Strep – Vaginal and Rectal (Self-collect)",
    "H. pylori Antigen – Stool (RF / Self-collect)",
    "H. pylori Antigen – Stool (Self-collect)",
    "H. pylori Culture",
    "HVS",
    "IUCD for Culture",
    "Legionella Urine Antigen",
    "MRSA (Rapid PCR) one swab per site",
    "MRSA Culture one swab per site",
    "MRSA Culture (Self-collect) – Nose/Groin",
  ];

  const filter = (list, search) =>
    list.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );

  const SectionBox = ({ title, search, setSearch, list }) => (
    <div className="mt-10 w-full bg-white rounded-lg shadow-[var(--shadowCard)] p-6">
      <h2 className="text-2xl font-semibold text-[var(--textDark)] mb-4">
        {title}
      </h2>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="w-full border border-[var(--borderLight)] px-3 py-2 rounded-md focus:outline-none focus:border-[var(--brandColor)]"
      />

      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-[var(--textDark)] text-white">
              <th className="text-left px-4 py-3 font-medium">Type</th>
            </tr>
          </thead>

          <tbody>
            {filter(list, search).map((item, idx) => (
              <tr
                key={idx}
                className="border-b hover:bg-[var(--brandColorLight)] transition cursor-pointer"
              >
                <td className="px-4 py-3">
                  <Link
                    href={`/tests/${item
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/^-+|-+$/g, "")}`}
                    className="text-[var(--brandColor)] hover:underline"
                  >
                    {item}
                  </Link>
                </td>
              </tr>
            ))}

            {filter(list, search).length === 0 && (
              <tr>
                <td className="px-4 py-3 text-gray-500">No results found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-32 pb-20 bg-[var(--bgLight)]">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* PAGE TITLE */}
        <h1 className="text-3xl font-bold text-[var(--textDark)]">
          In-Vivo Tests
        </h1>

        <p className="mt-3 text-[var(--textLight)] font-medium">
          These tests, ideally, must be carried out by appointment. Please telephone 
          <span className="text-[var(--brandColor)] font-semibold"> 07785235269 </span>
          for details, patient preparation, and appointment times. Sample-taking fees for 
          Extended tests are charged per visit.
        </p>

        <p className="mt-6 text-[var(--textLight)]">
          Please use the search boxes below to filter this list.
        </p>

        {/* Extended Testing Info Block */}
        <div className="mt-10 bg-white rounded-lg shadow-[var(--shadowCard)] p-6">
          <h2 className="text-2xl font-semibold text-[var(--textDark)]">
            Extended Testing
          </h2>
          <p className="mt-3 text-[var(--textLight)] leading-relaxed">
            50g liquid glucose is consumed for the glucose challenge test/Mini-GTT.  
            75g liquid glucose is consumed for all other glucose tests.  
            Each sample tube must be labeled with time of collection.
          </p>
        </div>

        {/* Sections */}
        <SectionBox
          title="Glucose Tolerance Tests"
          search={search1}
          setSearch={setSearch1}
          list={glucoseTests}
        />

        <SectionBox
          title="Extended Tests"
          search={search2}
          setSearch={setSearch2}
          list={extendedTests}
        />

        <SectionBox
          title="Antibiotic Assays"
          search={search3}
          setSearch={setSearch3}
          list={antibioticAssays}
        />

        <SectionBox
          title="Microbiology Tests"
          search={search1}
          setSearch={setSearch1}
          list={microbiologyTests}
        />

      </div>
    </div>
  );
}
