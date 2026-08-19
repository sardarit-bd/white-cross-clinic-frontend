"use client";

import { useState } from "react";
import ServiceCard from "./ServiceCard";
import { Search } from "lucide-react";
import { categories } from "../data/services";

export default function ServicesGrid({ services, selectedService, onSelect }) {
  const [activeCategory, setActiveCategory] = useState("All Services");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = services.filter((srv) => {
    const matchesCategory =
      activeCategory === "All Services" || srv.category === activeCategory;
    const matchesSearch =
      srv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-4 w-full">
      {/* SEARCH BAR & CATEGORY TABS */}
      <div className="bg-white border border-gray-200 p-4 space-y-3 shadow-xs">
        {/* Search Input */}
        <div className="flex items-center bg-[#F5F7FA] border border-gray-200 px-3 py-2 focus-within:bg-white focus-within:ring-2 focus-within:ring-[var(--brandColor)]/20 transition-all">
          <Search size={17} className="text-gray-400 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search test name, category, or symptom..."
            className="w-full bg-transparent text-xs sm:text-sm text-gray-800 placeholder-gray-400 outline-none pl-2.5 font-medium"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs text-gray-400 hover:text-gray-600 px-2 cursor-pointer font-bold"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-semibold whitespace-nowrap border transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[var(--brandColor)] text-white border-[var(--brandColor)] shadow-xs"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* SERVICES CARDS GRID */}
      {filteredServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 w-full">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isSelected={selectedService?.id === service.id}
              onSelect={onSelect}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-gray-200 p-8 text-center text-gray-500 space-y-2">
          <p className="text-sm font-semibold text-gray-800">No matching services found</p>
          <p className="text-xs text-gray-400">
            Try adjusting your search query or switching category tabs.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("All Services");
            }}
            className="mt-1 bg-[var(--brandColor)] text-white text-xs font-semibold px-4 py-2 cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
