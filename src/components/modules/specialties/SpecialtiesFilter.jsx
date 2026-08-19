"use client";

import { ChevronDown, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";


const sidebarItems = [
  {
    title: "Allergies",
    children: [
      "Allergen Components Testing",
      "Allergy Profiles",
      "Allergy Test Library",
      "Cross Reactivity",
      "Individual Allergen Tests",
      "Pollen Calendar"
    ]
  },
  {
    title: "Andrology",
    children: [
      "Andrology: Pathology And Services",
      "Oxidative Stress In Semen",
      "Sperm Aneuploidy",
      "Sperm DNA Fragmentation"
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
      "WCC Self-Collection HPV Test"
    ]
  },
  { title: "Cytology (Non-Gynaecological)" },
  { title: "Drugs Of Abuse / Alcohol" },
  { title: "Endocrinology" },
  {
    title: "Immunology",
    children: [
      "Tropical and travel related immunology tests",
      "Coeliac Disease Update"
    ]
  },
  {
    title: "In Vivo Tests"
  },
  {
    title: "Medical Microbiology",
    children: [
      "Fungal Detection",
      "Mycobacterial And Respiratory Investigation",
      "New High Dose Antibiotic Susceptibility Category",
      "Red Topped Boric Acid Containers",
      "Stool Test Codes",
      "Swabs: Types And Codes",
      "Urine Culture Processing And Results"
    ]
  },
  {
    title: "Occupational Health",
    disabled: true,
    children: [
      "Tests For Specific Exposure",
      "Trace Metals In Blood",
      "Trace Metals In Urine"
    ]
  },
  {
    title: "Reproductive Health",
    children: [
      "Chromosomes/Genetics",
      "Hormones",
      "Infection",
      "Lifestyle/Environment",
      "Reproductive Health Tests",
      "Unexplained Infertility/Implantation Failure/Recurrent Miscarriage"
    ]
  },
  {
    title: "Sexual Health",
    link: "#",
    children: [
      "FAST Sexual Health Screening Tests",
      "Rapid Xpert HIV-1",
      "Sexual Health Tests",
      "Sexually Transmitted Infections"
    ]
  },
  {
    title: "Therapeutic Drug Assays",
    children: [
      "Therapeutic Drug Assay Tests"
    ]
  },
  {
    title: "Tumour Markers",
    link: "#",
    children: [
      "Tumour Markers Tests"
    ]
  },
  {
    title: "Virology",
    link: "#",
    children: [
      "Hepatitis Tests",
      "HIV Testing",
      "Immune Status",
      "Virology Screens By Blood",
      "Virology Screens By PCR",
      "Virology Tests"
    ]
  },
  {
    title: "Vitamins, Nutrition And Lifestyle",
    link: "#",
    children: [
      "Nutrition And Lifestyle",
      "Vitamin Tests"
    ]
  },
  {
    title: "WCC Genetics",
    children: [
      "Array CGH Testing",
      "Cytogenetics",
      "Molecular Genetics",
      "NIPT Via The Fetal Aneuploidy Screening Programme",
      "NIPT Via The National Genomics Test Directory",
      "Non-Invasive Prenatal Testing"
    ]
  }
];

// ---- Slugify function ----
function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export default function SpecialitiesFilter() {
  const pathname = usePathname();
  const [open, setOpen] = useState(null);

  // NEW
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // NEW → Build a searchable flat list
  const searchList = useMemo(() => {
    let list = [];

    sidebarItems.forEach((item) => {
      list.push({
        label: item.title,
        slug: item?.link || `/specialties/${slugify(item.title)}`,
        type: "parent",
      });

      if (item.children) {
        item.children.forEach((child) => {
          list.push({
            label: child,
            slug: `/specialties/${slugify(child)}`,
            type: "child",
            parent: item.title,
          });
        });
      }
    });

    return list;
  }, []);

  // Filter by search input
  const filteredSuggestions = useMemo(() => {
    if (!query.trim()) return [];

    const q = query.toLowerCase();
    return searchList.filter((item) => item.label.toLowerCase().includes(q));
  }, [query, searchList]);

  return (
    <aside className="md:w-[500px] w-full bg-white border border-gray-100 p-4 h-max sticky top-24">

      <h2 className="font-bold text-xl text-[var(--textDark)] mb-4">Specialties</h2>

      {/* 🔍 Search Bar */}
      <div className="relative mb-4">
        <div className="flex items-center gap-2 bg-white px-3 py-2 border border-[var(--borderLight)]">
          <Search size={18} className="text-[var(--textLight)]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowSuggestions(true);
            }}
            placeholder="Search specialties..."
            className="w-full bg-transparent focus:outline-none text-[var(--textDark)]"
          />
        </div>

        {/* 🔽 Auto-suggestions */}
        {showSuggestions && filteredSuggestions.length > 0 && (
          <div className="absolute z-20 bg-white w-full shadow-xl border border-[var(--borderLight)] mt-1 max-h-60 overflow-y-auto">
            {filteredSuggestions.map((item, i) => (
              <Link
                key={i}
                href={item.slug}
                onClick={() => {
                  setShowSuggestions(false);
                  setQuery("");
                }}
                className="block px-3 py-2 hover:bg-[var(--brandColorLight)] transition"
              >
                <div className="text-[var(--textDark)] font-medium">
                  {item.label}
                </div>
                {item.type === "child" && (
                  <div className="text-xs text-[var(--textLight)]">
                    ({item.parent})
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* ---- Sidebar Items ---- */}
      {sidebarItems.map((item, index) => {
        const parentSlug = item?.link || `/specialties/${slugify(item.title)}`;
        const isParentActive = pathname === parentSlug;

        return (
          <div key={index} className="mb-2">
            <button
              className={`flex justify-between items-center w-full font-medium p-3 transition
                ${isParentActive
                  ? "bg-[var(--brandColor)] text-white"
                  : "bg-[var(--brandColorLight)] text-[var(--textDark)] hover:bg-[var(--brandColor)] hover:text-white"}
              `}
              onClick={() => item.children && setOpen(open === index ? null : index)}
            >
              {item?.disabled ? <span>{item.title}</span> : <Link href={parentSlug}>{item.title}</Link>}

              {item.children && (
                <ChevronDown
                  size={18}
                  className={`transition-transform ${open === index ? "rotate-180" : ""}`}
                />
              )}
            </button>

            {open === index && item.children && (
              <div className="ml-2 mt-2 space-y-2">
                {item.children.map((child, i) => {
                  const childSlug = `/specialties/${slugify(child)}`;
                  const isChildActive = pathname === childSlug;

                  return (
                    <Link
                      key={i}
                      href={childSlug}
                      className={`block text-sm px-2 py-1 transition
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
