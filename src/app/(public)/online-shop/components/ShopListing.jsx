"use client";

import { useMemo, useState } from "react";
import { products, KIT_TYPES, PRICE_BOUNDS } from "../data/products";
import ProductCard from "./ProductCard";
import ShopSidebar from "./ShopSidebar";
import CartLink from "./CartLink";

const SORTS = {
  "name-asc": { label: "Name A-Z", fn: (a, b) => a.name.localeCompare(b.name) },
  "name-desc": { label: "Name Z-A", fn: (a, b) => b.name.localeCompare(a.name) },
  "price-asc": { label: "Price: Low to High", fn: (a, b) => a.price - b.price },
  "price-desc": { label: "Price: High to Low", fn: (a, b) => b.price - a.price },
  newest: { label: "Newest", fn: (a, b) => Number(b.isNew) - Number(a.isNew) },
};

export default function ShopListing() {
  const [price, setPrice] = useState(PRICE_BOUNDS);
  const [types, setTypes] = useState([]);
  const [sort, setSort] = useState("name-asc");

  const filtered = useMemo(
    () =>
      products
        .filter((p) => p.price >= price.min && p.price <= price.max)
        .filter((p) => types.length === 0 || types.includes(p.kitType))
        .sort(SORTS[sort].fn),
    [price, types, sort],
  );

  const reset = () => {
    setPrice(PRICE_BOUNDS);
    setTypes([]);
  };

  const toggleType = (type) =>
    setTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );

  return (
    <div className="min-h-screen bg-white px-4 pt-48 pb-24">
      <div className="container mx-auto grid gap-10 lg:grid-cols-[220px_1fr]">
        <ShopSidebar
          bounds={PRICE_BOUNDS}
          price={price}
          onPriceChange={setPrice}
          kitTypes={KIT_TYPES}
          selectedTypes={types}
          onToggleType={toggleType}
          onReset={reset}
        />

        <div>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-[var(--textLight)]">
              {filtered.length} products
            </p>
            <div className="flex items-center gap-6">
              <CartLink />
              <label className="flex items-center gap-2 text-sm text-[var(--textDark)]">
                Sort by:
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="cursor-pointer bg-transparent outline-none"
                >
                  {Object.entries(SORTS).map(([key, { label }]) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-[var(--borderSoft)] bg-[var(--bgLight)] p-10 text-center">
              <p className="text-[var(--textDark)]">
                No products match your filters.
              </p>
              <button
                type="button"
                onClick={reset}
                className="mt-4 font-semibold text-[var(--brandColor)] hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}