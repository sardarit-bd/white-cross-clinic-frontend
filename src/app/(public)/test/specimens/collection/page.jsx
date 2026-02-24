"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const items = [
  {
    title: "Gynae Cytology: ThinPrep® PAP Test Cervex Brush Protocol",
    href: "/sample-collection/gynae-cytology",
  },
  {
    title: "Non-Gynae Cytology: Urines, Sputum, Fluids And CSF",
    href: "/sample-collection/non-gynae-cytology",
  },
  {
    title: "Genetics: Cytogenetics And Molecular",
    href: "/sample-collection/genetics",
  },
  {
    title: "Microbiology",
    href: "/sample-collection/microbiology",
  },
  {
    title: "24 Hour Urines: Information Leaflets",
    href: "/sample-collection/24h-urines",
  },
  {
    title: "WCC Sample Collection Guide",
    href: "/sample-collection/wcc-guide",
  },
];

export default function SampleCollectionCategories() {
  return (
    <div className="w-full py-10 pt-48">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-md shadow-sm hover:shadow-md transition bg-[var(--brandColorLight)]"
          >
            <h3
              className="text-xl font-semibold leading-snug mb-6"
              style={{ color: "var(--brandColor)" }}
            >
              {item.title}
            </h3>

            <div className="flex items-center text-[var(--brandColor)] hover:translate-x-1 transition">
              <ArrowRight size={20} strokeWidth={1.8} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
