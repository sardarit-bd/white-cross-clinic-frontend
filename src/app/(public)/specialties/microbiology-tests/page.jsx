"use client";

import { useState } from "react";

// ===============================
//  SWABS DYNAMIC DATA
// ===============================
const swabList = [
    "Acacia, black",
    "Alder, common",
    "Alfalfa, lucerne",
    "Amaranth, coarse-haired",
    "Ash, common",
    "Barley",
    "Beech, common",
    "Bermuda grass",
    "Birch, weeping",
    "Blue grass, Kentucky",
    "Chestnut, sweet",
    "Cob, hazel",
    "Cocksfoot",
    "Common bent",
    "Couch grass",
    "Creeping bent",
    "Cypress, Italian",
    "Daisy, moon",
    "Dandelion",
    "Dock, curly, sorrel, garden, sheep's",
    "Elder, common",
    "Elm, Scotch",
    "False oat grass",
    "Geranium, bedding",
    "Golden wattle, Sydney",
    "Goose-foot",
    "Hornbeam, common",
    "Hyacinth",
    "Johnson grass (Sudan grass)",
    "Lent lily",
    "Lilac, common",
    "Meadow fescue",
    "Meadow foxtail",
    "Nettle, stinging",
    "Oak, English",
    "Oats, common",
    "Olive",
    "Orach",
    "Parietaria",
    "Pellitory of the wall",
    "Pine, black, Scots and Eastern white",
    "Plane, oriental",
    "Plantain, English",
    "Poplar, white",
    "Primrose",
    "Privet, common",
    "Pussywillow",
    "Rape, oilseed",
    "Red Fescue",
    "Rose, Japanese",
    "Rye-grass",
    "Ryegrass, perennial",
    "Sabine",
    "Spruce, common",
    "Sweet mock orange",
    "Timothy",
    "Vernal grass, scented",
    "Wheat, common",
    "Wild rye",
    "Yorkshire fog"
];

export default function microbiologyTestPage() {
    const [search, setSearch] = useState("");

    const filtered = swabList.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container mx-auto px-4 py-10">

            {/* PAGE TITLE */}
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-2">
                Microbiology tests
            </h1>

            <p className="mb-4 text-[var(--textDark)]/80">
                Please use the search box below to filter this list.
            </p>

            {/* SEARCH INPUT */}
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full max-w-xs px-4 py-2 border border-[var(--borderLight)] rounded-md mb-6
                   focus:outline-none focus:ring-2 focus:ring-[var(--brandColor)]"
            />

            {/* TABLE */}
            <div className="overflow-hidden rounded-md border border-[var(--borderLight)]">
                {/* TABLE HEADER */}
                <div className="bg-[var(--brandColor)] text-white font-semibold px-4 py-3">
                   Test Name
                </div>

                {/* LIST */}
                <div className="divide-y divide-gray-200 bg-white">
                    {filtered.map((item, i) => (
                        <button
                            key={i}
                            className="w-full text-left px-4 py-3 hover:bg-[var(--brandColorLight)]
                         transition cursor-pointer text-[var(--textDark)]"
                        >
                            {item}
                        </button>
                    ))}

                    {filtered.length === 0 && (
                        <p className="px-4 py-4 text-gray-500 italic">No results found.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
