"use client";

import { useState } from "react";

const testData = [
  "ALEX² Allergy Test (Self-collect)",
  "ALEX² Allergy Test (Venous / Self-collect)",
  "Allergic Rhinitis/Asthma Profile",
  "Allergy – Individual Allergens",
  "Allergy – 5 x Single Individual Allergens",
  "Allergy – 10 x Single Individual Allergens",
  "Allergy Profile 1 (Food & Inhalants)",
  "Allergy Profile 2 (UK Aero Allergens)",
  "Allergy Profile 3 (Food)",
  "Allergy Profile 4 (Nuts & Seeds)",
  "Allergy Profile 5 (Children's Panel)",
  "Allergy Profile 6 (Shellfish)",
  "Allergy Profile 7 (Finfish)",
  "Allergy Profile 8 (Cereal – singles)",
  "Allergy Profile 9 (Antibiotics)",
  "Allergy Profile 10 (Insects)",
  "Allergy Profile 11 (Combined Shellfish/Finfish)",
  "Allergy Profile 12 (Milk & Milk Proteins)",
  "Allergy Profile 13 (Stone fruit/Rosaceae family)",
  "Alpha Gal Components (related to red meat)",
  "Alternaria Components",
  "Apple Components",
  "Aspergillus Components",
  "Atopic Dermatitis/Eczema Profile (14 allergens)",
  "Birch Components",
  "Brazil Components",
  "Cashew Components",
  "Cat Components",
  "Celery Components",
  "Cow's Milk Components",
  "Dog Components",
  "Egg Components",
  "Fish Components",
  "Gluten Sensitivity Profile",
  "Glycan Determinants",
  "Hazelnut Components",
  "Histamine Releasing Urticaria Test",
  "ISAC Panel (Self-collect)",
  "ISAC Panel (Venous / Self-collect)",
  "Kiwi Components",
  "Latex Components",
  "Lipid Transfer Proteins",
  "Lipocalins",
  "Olive Components",
  "Parvalbumins",
  "Peach Components",
  "Peanut Components",
  "Polcalcins",
  "PR-10 Proteins",
  "Prealbumin",
  "Profilins",
  "Seed Storage Proteins",
  "Serum Albumins",
  "Sesame Components",
  "Shrimp Components",
  "Soybean Components",
  "Timothy Grass Components",
  "Total IgE",
  "Tropomyosins",
  "Tryptase",
  "Venom Components",
  "Wall Pellitory Components",
  "Walnut Components",
  "Wheat Components"
];

export default function SpecialList() {
  const [search, setSearch] = useState("");

  const filtered = testData.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="w-full bg-white py-6 border border-gray-100">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h1 className="text-3xl font-bold text-[var(--textDark)]">
          Allergy Test Library
        </h1>

        <p className="mt-3 text-[var(--textLight)] leading-relaxed">
          Our allergy profiles, individual allergen tests, and allergen
          component tests. Please use the search box below to filter this list.
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
        <div className="mt-8 border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="bg-[var(--brandColor)] text-white px-4 py-3 font-semibold flex justify-between">
            <span>Test Name</span>
            <span>▾</span>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-gray-200">
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
                    transition cursor-pointer
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
