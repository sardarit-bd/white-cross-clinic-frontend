"use client";

import { useState } from "react";
import Link from "next/link";

const tests = [
    "11 Deoxycorticosterone",
    "11 Deoxycortisol",
    "17 Hydroxyprogesterone",
    "ACTH (Adrenocorticotropic Hormone)",
    "Aldosterone",
    "Aldosterone (Urine)",
    "Alpha-Fetoprotein",
    "Amenorrhoea Profile (LH, FSH, PROL, TEST, TOES, SHBG, FAI) (Self-collect) CHANGE",
    "Amenorrhoea Profile (Venous / Self-collect) CHANGE",
    "Andropause Profile",
    "Androstenedione",
    "Antidiuretic Hormone",
    "Antimullerian Hormone (AMH) (Self-collect)",
    "Antimullerian Hormone (AMH) (Venous / Self-collect)",
    "BNP (NT-pro BNP)",
    "C Peptide",
    "Calcitonin",
    "Catecholamines (Plasma)",
];

function slugify(str) {
    return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export default function EndocrinologyPage() {
    const [search, setSearch] = useState("");

    const filtered = tests.filter((t) =>
        t.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="w-full bg-white p-6 md:p-10 rounded-xl shadow-[var(--shadowCard)] border border-[var(--borderLight)]">
            
            {/* Page Title */}
            <h1 className="text-3xl font-bold text-[var(--textDark)] mb-3">
                Endocrinology
            </h1>

            <p className="text-[var(--textLight)] mb-6 max-w-3xl">
                WCC offers an extensive range of diagnostic tests that can be used 
                to determine problems in the endocrine system.
            </p>

            {/* Search Bar */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full md:w-64 px-4 py-2 border border-[var(--borderLight)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--brandColor)]"
                />
            </div>

            {/* Table Header */}
            <div className="bg-[var(--brandColor)] text-white py-3 px-4 font-semibold rounded-t-md">
                Profile/Test Name
            </div>

            {/* Test List */}
            <div className="border border-[var(--borderLight)] border-t-0 rounded-b-md divide-y divide-[var(--borderLight)]">
                {filtered.map((test, i) => (
                    <Link
                        key={i}
                        href={`/specialties/${slugify(test)}`}
                        className="block px-4 py-3 hover:bg-[var(--brandColorLight)] text-[var(--textDark)] transition"
                    >
                        {test}
                    </Link>
                ))}
            </div>

        </div>
    );
}
