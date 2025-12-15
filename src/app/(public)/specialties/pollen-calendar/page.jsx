"use client";

import { useState } from "react";
import Link from "next/link";

const pollenTypes = [
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

// Slug generator
const toSlug = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function PollenCalendar() {
  const [search, setSearch] = useState("");

  const filtered = pollenTypes.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-6 md:px-10 py-10">
      
      {/* Header */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-md p-6 md:p-10 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--textDark)]">
          Pollen Calendar
        </h1>

        <p className="mt-3 text-[var(--textLight)] leading-relaxed text-lg">
          An overview of when potentially allergenic plants are in flower.
        </p>

        <p className="text-[var(--textLight)] mt-2">
          Please use the search box below to filter this list
        </p>

        {/* Search Box */}
        <div className="mt-6 max-w-md">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-[var(--brandColor)] outline-none"
          />
        </div>
      </div>

      {/* Table */}
      <div className="border rounded-md overflow-hidden">
        
        {/* Table Header */}
        <div className="bg-[var(--brandColor)] text-white px-4 py-3 font-semibold">
          Type
        </div>

        {/* Rows */}
        <div className="divide-y">
          {filtered.map((item, i) => (
            <Link
              key={i}
              href={`/pollen/${toSlug(item)}`}
              className="block px-4 py-3 hover:bg-[var(--brandColorLight)] text-[var(--textDark)] transition"
            >
              {item}
            </Link>
          ))}

          {filtered.length === 0 && (
            <p className="p-4 text-[var(--textLight)]">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
