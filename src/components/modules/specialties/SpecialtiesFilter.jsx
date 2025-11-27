"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
    {
        title: "Allergies",
        children: [
            "Allergy Test Library",
            "Allergy Profiles",
            "Individual Allergen Tests",
            "Allergen Components Testing",
            "Cross Reactivity",
            "Pollen Calendar"
        ]
    },
    {
        title: "Andrology",
        children: [
            "Andrology: Pathology And Services",
            "Oxidative Stress In Semen",
            "Sperm DNA Fragmentation",
            "Sperm Aneuploidy",
        ]
    },
    { title: "Antibiotic Assays" },
    { title: "Biochemistry Tests" },
    {
        title: "Cervical Screening",
        children: [
            "HPV Tests",
            "STI Screening From Hologic ThinPrep Vials",
            "ThinPrep® PAP Test Cervex Brush Protocol",
            "WCC Self-Collection HPV Test",
        ]
    },
    { title: "Cytology (Non-Gynaecological)" },
    { title: "Drugs Of Abuse / Alcohol" },
    { title: "Endocrinology" },
    {
        title: "WCC Genetics",
        children: [
            "Non-Invasive Prenatal Testing",
            "Molecular Genetics",
            "Cytogenetics",
            "Array CGH Testing",
            "NIPT Via The Fetal Aneuploidy Screening Programme",
            "NIPT Via The National Genomics Test Directory"
        ]
    },
    {
        title: "Immunology",
        children: [
            // "Tropical And Travel Related Immunology Tests",
            "Coeliac Disease Update",
        ]
    },
    {
        title: "In Vivo Tests"
    },
    {
        title: "Medical Microbiology",
        children: [
            "Urine Culture Processing And Results",
            "Red Topped Boric Acid Containers",
            "Stool Test Codes",
            "Fungal Detection",
            "Swabs: Types And Codes",
            "Mycobacterial And Respiratory Investigation",
            "New High Dose Antibiotic Susceptibility Category"
        ]
    },
    {
        title: "Occupational Health",
        children: [
            "Trace Metals In Blood",
            "Trace Metals In Urine",
            "Tests For Specific Exposure"
        ]
    },
    {
        title: "Reproductive Health",
        children: [
            "Reproductive Health Tests",
            "Chromosomes/Genetics",
            "Hormones",
            "Infection",
            "Lifestyle/Environment",
            "Unexplained Infertility/Implantation Failure/Recurrent Miscarriage"
        ]
    },
    {
        title: "Sexual Health",
        children: [
            "Sexual Health Tests",
            "Sexually Transmitted Infections",
            "FAST Sexual Health Screening Tests",
            "Rapid Xpert HIV-1"
        ],
        link: "#"
    },
    {
        title: "Therapeutic Drug Assays",
        children: [
            "Therapeutic Drug Assay Tests"
        ]
    },
    {
        title: "Tumour Markers",
        children: [
            // "Tumour Marker And Sites",
            "Tumour Markers Tests"
        ],
        link: "#"
    },
    {
        title: "Virology",
        children: [
            "Immune Status",
            "HIV Testing",
            "Hepatitis Tests",
            "Virology Tests",
            "Virology Screens By Blood",
            "Virology Screens By PCR"
        ],
        link: "#"
    },
    {
        title: "Vitamins, Nutrition And Lifestyle",
        children: [
            "Vitamin Tests",
            "Nutrition And Lifestyle"
        ],
        link: "#"
    }
];

function slugify(str) {
    return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export default function SpecialitiesFilter() {
    const pathname = usePathname(); // Get current route
    const [open, setOpen] = useState(null);

    return (
        <aside className="md:w-[500px] w-full bg-white border border-[var(--borderLight)] rounded-xl shadow-[var(--shadowCard)] p-4 h-max sticky md:top-32 top-22">
            <h2 className="font-bold text-xl text-[var(--textDark)] mb-4">Specialties</h2>

            {sidebarItems.map((item, index) => {
                const parentSlug = item?.link || `/specialties/${slugify(item.title)}`;
                const isParentActive = pathname === parentSlug;

                return (
                    <div key={index} className="mb-2">
                        <button
                            className={`flex justify-between items-center w-full font-medium p-3 rounded-lg transition
                                ${isParentActive
                                    ? "bg-[var(--brandColor)] text-white"
                                    : "bg-[var(--brandColorLight)] text-[var(--textDark)] hover:bg-[var(--brandColor)] hover:text-white"}
                            `}
                            onClick={() => item.children && setOpen(open === index ? null : index)}
                        >
                            <Link href={parentSlug}>
                                {item.title}
                            </Link>

                            {item.children && (
                                <ChevronDown
                                    size={18}
                                    className={`transition-transform ${open === index ? "rotate-180" : ""}`}
                                />
                            )}
                        </button>

                        {/* Child links */}
                        {open === index && item.children && (
                            <div className="ml-2 mt-2 space-y-2">
                                {item.children.map((child, i) => {
                                    const childSlug = `/specialties/${slugify(child)}`;
                                    const isChildActive = pathname === childSlug;

                                    return (
                                        <Link
                                            key={i}
                                            href={childSlug}
                                            className={`block text-sm px-2 py-1 rounded-md transition
                                                ${isChildActive
                                                    ? "bg-[var(--brandColorLight)] text-[var(--brandColor)] font-semibold"
                                                    : "text-[var(--textLight)] hover:text-[var(--brandColor)]"}
                                            `}
                                        >
                                            {child}
                                        </Link>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                );
            })}
        </aside>
    );
}
