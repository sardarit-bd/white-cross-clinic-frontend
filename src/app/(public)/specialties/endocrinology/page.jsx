"use client";

import { useState } from "react";
const tests = [
    "11 Deoxycorticosterone",
    "11 Deoxycortisol",
    "17 Hydroxyprogesterone",
    "ACTH (Adrenocorticotropic Hormone)",
    "Aldosterone",
    "Aldosterone (Urine)",
    "Alpha-Fetoprotein",
    "Amenorrhoea Profile (LH, FSH, PROL, TEST, TOES, SHBG, FAI) (Self-collect)",
    "Amenorrhoea Profile (Venous / Self-collect)",
    "Andropause Profile",
    "Androstenedione",
    "Antidiuretic Hormone",
    "Antimullerian Hormone (AMH) (Self-collect)",
    "Antimullerian Hormone (AMH) (Venous / Self-collect)",
    "BNP (NT-pro BNP)",
    "C Peptide",
    "Calcitonin",
    "Catecholamines (Plasma)",
    "Catecholamines (Urine)",
    "Cortisol (Self-collect)",
    "Cortisol (Urine)",
    "Cortisol (Venous / Self-collect)",
    "DHEA",
    "DHEA – Urine (Dehydroepiandrosterone)",
    "DHEA Sulphate (Venous / Self-collect)",
    "DHEA Sulphate (Self-collect)",
    "Dihydrotestosterone",
    "Down Syndrome Risk Bloods only (Risk to be calculated by clinician)",
    "Down Syndrome Risk Profile (2nd trimester) Quad",
    "Down Syndrome Risk Profile with risk calculation first trimester",
    "Erectile Dysfunction Profile",
    "Fasting Insulin Resistance Index (FIRI)",
    "Female Hormone Profile (LH, FSH, PROL, TOES) (Self-collect)",
    "Female Hormone Profile (Venous / Self-collect)",
    "First Trimester Antenatal Screen",
    "Free T3 (Self-collect)",
    "Free T3 (Venous / Self-collect)",
    "Free T4 (Self-collect)",
    "Free T4 (Venous / Self-collect)",
    "FSH (Self-collect)",
    "FSH (Venous / Self-collect)",
    "Growth Hormone (Fasting)",
    "Gut Hormone Profile",
    "HCG (Quantitative)",
    "Hirsutism Profile",
    "HLA A, B, C",
    "HLA-C",
    "HLA DQ Alpha Antigens",
    "HLA DQ Beta Antigens",
    "HLA DR Antigens",
    "HRT Profile 1",
    "HRT Profile 2",
    "IGF-1 (Somatomedin)",
    "IGF-BP3",
    "Impotence Profile",
    "Inhibin A",
    "Inhibin B",
    "Insulin",
    "KIR (Killer-like Immunoglobulin-like Receptors) Genotyping",
    "Leucocyte Antibody Detection Panel FEMALE",
    "Leucocyte Antibody Detection Panel MALE",
    "Luteinising Hormone (LH) (Self-collect)",
    "Luteinising Hormone (LH) (Venous / Self-collect)",
    "Macroprolactin",
    "Male Hormone Profile",
    "Melatonin (Serum)",
    "Melatonin (Urine)",
    "Menopausal Profile (FSH, LH, TOES, TSH, FT4) (Self-collect)",
    "Menopause Profile (Venous / Self-collect)",
    "Metabolic Syndrome Profile",
    "Metanephrines (Plasma)",
    "Metanephrines (Urine)",
    "NK (CD69) Cell Assay",
    "NK (CD69) and NK Cytotoxicity",
    "NK Assay Follow-Up Panel",
    "NK Assay Panel + Intralipids",
    "NK Assay/Cytotoxicity Panel",
    "NK Cytotoxicity Assay",
    "NK Cytotoxicity with suppression with steroid, IVIg and intralipin, and NK (CD69) cell assay",
    "NK Cytotoxicity with suppression, steroid, IVIg & Intralipin",
    "Oestradiol (Self-collect)",
    "Oestradiol (Venous / Self-collect)",
    "Oestriol (Estriol)",
    "Oestrone",
    "Osteocalcin",
    "PAI-1 4G/5G Polymorphism",
    "Parathyroid Hormone (Whole)",
    "Pituitary Function Profile",
    "Polycystic Ovary Syndrome Profile",
    "Polycystic Ovary Syndrome SHORT",
    "Pregnancy (Serum) [Quantitative]",
    "Pregnenolone",
    "Progesterone (Self-collect)",
    "Progesterone (Venous / Self-collect)",
    "Proinsulin",
    "Prolactin (Macro)",
    "Prolactin (Self-collect)",
    "Prolactin (Venous / Self-collect)",
    "Renin",
    "Reproductive Immunophenotype Panel",
    "Reverse T3",
    "Serotonin",
    "Serotonin (Urine)",
    "Sex Hormone Binding Globulin (Self-collect)",
    "Sex Hormone Binding Globulin (Venous / Self-collect)",
    "Somatomedin (IGF-1)",
    "Suppression with steroid, IVIg and intralipin, NK (CD69) cell assay, TH1/TH2 cytokines",
    "T Regulatory Cells",
    "T3",
    "T3 (Reverse)",
    "Testosterone (Self-collect)",
    "Testosterone (Venous / Self-collect)",
    "Testosterone (Free) (Self-collect)",
    "Testosterone (Free) (Venous / Self-collect)",
    "TH1/TH2 Cytokine Profile",
    "TH1/TH2 Cytokine Ratio",
    "TH1/TH2 Intracellular Cytokine Ratios with IVIG",
    "TH1/TH2 Intracellular Cytokine Ratios with IVIG, Prednisolone",
    "TH1/TH2 Intracellular Cytokine Ratios with Prednisolone",
    "Thyroglobulin Abs",
    "Thyroglobulin Assay",
    "Thyroid Abs (Thyroglobulin + Thyroid Peroxidase Abs) (Self-collect)",
    "Thyroid Abs (Thyroglobulin + Thyroid Peroxidase Abs) (Venous / Self-collect)",
    "Thyroid Peroxidase Antibodies/Anti TPO",
    "Thyroid Profile 1 (FT4/TSH) (Self-collect)",
    "Thyroid Profile 1 (FT4/TSH) (Venous / Self-collect)",
    "Thyroid Profile 2",
    "Thyroid Profile 3 (FT3/FT4/TSH) (Self-collect)",
    "Thyroid Profile 3 (FT3/FT4/TSH) (Venous / Self-collect)",
    "Thyroxine (T4)",
    "Thyroxine Binding Globulin",
    "TSH (Venous / Self-collect)",
    "TSH (Self-collect)",
    "TSH-Receptor Antibodies"
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
        <div className="w-full bg-white p-6 border border-gray-100">

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
                    className="w-full md:w-72 px-4 py-2 border border-[var(--borderLight)] focus:outline-none focus:ring-2 focus:ring-[var(--brandColor)]"
                />
            </div>

            {/* Table Header */}
            <div className="bg-[var(--brandColor)] text-white py-3 px-4 font-semibold">
                Profile/Test Name
            </div>

            {/* Test List */}
            <div className="border border-[var(--borderLight)] border-t-0 rounded-b-md divide-y divide-[var(--borderLight)]">
                {filtered.map((test, i) => (
                    <p
                        key={i}
                        // href={`/specialties/${slugify(test)}`}
                        className="block px-4 py-3 hover:bg-[var(--brandColorLight)] text-[var(--textDark)] transition"
                    >
                        {test}
                    </p>
                ))}
            </div>

        </div>
    );
}
