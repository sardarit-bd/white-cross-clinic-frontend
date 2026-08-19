"use client";

import { useState } from "react";

const testData = [
    "Amoebic (E. histolytica) Antibodies",
    "Amoebic (E. histolytica) PCR",
    "Bancroftia/Oncerciasis/Filarial Antibodies",
    "Bilharzia (Schistosome) Antibody Screen",
    "Bilharzia (Urine)",
    "Borrelia Antibodies (Lyme Disease) IgG, IgM",
    "Borrelia Confirmation (Immunoblot)",
    "Cryptosporidium Detection by PCR",
    "Dengue Virus Serology",
    "DVT/Pre-travel Screen",
    "Echinococcus (Hydatid) Antibodies",
    "Enteric Organism Rapid Detection (RF / Self-collect)",
    "Filaria (Lymphatic and Non-Lymphatic) Antibodies",
    "Gastrointestinal Pathogen PCR (Self-collect)",
    "Insect/Worm/Ova/Cysts",
    "Leishmania Antibodies",
    "Malarial Antibodies (Pl. falciparum)",
    "Malarial Antibodies (species specific)",
    "Post-Travel Screen 1 (Prior to 6 weeks)",
    "Post-Travel Screen 2 (Prior to 6 weeks)",
    "Pre-Travel Screen (DVT)",
    "Rickettsial Species Antibody Profile",
    "Schistosome (Bilharzia) Antibodies",
    "Toxoplasma Antibodies (IgG, IgM)",
    "Tropical Screen (from 6 weeks post-travel)",
    "Zika Abs IgM and IgG – Antibody detection from 15 days",
    "Zika RNA by PCR in Semen",
    "Zika RT PCR – Window of detection from 1-7 days from onset of symptoms"
];

export default function page() {
    const [search, setSearch] = useState("");

    const filtered = testData.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="w-full bg-white p-6 border border-gray-100">
            <div className="">

                {/* Title */}
                <h1 className="text-3xl font-bold text-[var(--textDark)]">
                    Tropical and travel related immunology tests
                </h1>

                <p className="mt-3 text-[var(--textLight)] leading-relaxed">
                    Please use the search box below to filter this list
                </p>

                {/* Search Box */}
                <div className="mt-6">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="
              w-full md:w-96 
              px-4 py-2
              border border-[var(--borderLight)] 
              focus:outline-none 
              focus:ring-2 focus:ring-[var(--brandColor)]
            "
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* Table */}
                <div className="mt-8 border border-gray-100 overflow-hidden">
                    {/* Table Header */}
                    <div className="bg-[var(--brandColor)] text-white px-4 py-3 font-semibold flex justify-between">
                        <span>Test Name</span>
                        <span>▾</span>
                    </div>

                    {/* Table Rows */}
                    <div className="divide-y divide-[var(--borderLight)]">
                        {filtered.length === 0 ? (
                            <p className="p-4 text-[var(--textLight)] text-sm">
                                No matching tests found.
                            </p>
                        ) : (
                            filtered.map((name, i) => (
                                <div
                                    key={i}
                                    className="
                    px-4 py-3 
                    text-[var(--brandColor)] 
                    hover:bg-[var(--brandColorLight)] 
                    hover:text-[var(--brandColorDark)] 
                    transition
                  "
                                >
                                    {name}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}