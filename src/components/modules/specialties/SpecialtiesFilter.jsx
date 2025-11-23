"use client"

import { useState } from "react";

const { ChevronDown } = require("lucide-react");
const { default: Link } = require("next/link");

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
  {
    title: "Antibiotic Assays",
  },
  {
    title:  "Biochemistry Tests"
  },
  {
    title: "Cervical Screening",
    children: [
      "HPV Tests",
      "STI Screening From Hologic ThinPrep Vials",
      "ThinPrep® PAP Test Cervex Brush Protocol",
      "WCC Self-Collection HPV Test",
      "Cytology (Non-Gynaecological)",
      "Drugs Of Abuse / Alcohol",
      "Endocrinology"
    ]
  },
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
      "Tropical And Travel Related Immunology Tests",
      "Coeliac Disease Update",
      "In Vivo Tests"
    ]
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
  }
];


export default function SpecialitiesFilter() {
    const [open, setOpen] = useState(null);

    return (<aside className="md:w-[500px] w-full bg-white border border-[var(--borderLight)] rounded-xl shadow-[var(--shadowCard)] p-4 h-max sticky md:top-32 top-22">
        <h2 className="font-bold text-xl text-[var(--textDark)] mb-4">Specialties</h2>

        {sidebarItems.map((item, index) => (
            <div key={index} className="mb-2">
                <button
                    className="flex justify-between items-center w-full font-medium text-[var(--textDark)] p-3 rounded-lg bg-[var(--brandColorLight)] hover:bg-[var(--brandColor)] hover:text-white transition"
                    onClick={() => item.children && setOpen(open === index ? null : index)}
                >
                    {item.title}
                    {item.children && <ChevronDown
                        size={18}
                        className={`transition-transform ${open === index ? "rotate-180" : ""}`}
                    />}
                </button>

                {/* Dropdown */}
                {open === index && (
                    <div className="ml-2 mt-2 space-y-2">
                        {item.children.map((child, i) => (
                            <Link
                                key={i}
                                href={`/specialties/${child.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") }`}
                                className="block text-sm text-[var(--textLight)] hover:text-[var(--brandColor)] px-2 py-1"
                            >
                                {child}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        ))}
    </aside>)
}