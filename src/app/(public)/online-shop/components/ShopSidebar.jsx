"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { formatPrice } from "../utils";

const THUMB =
  "pointer-events-none absolute inset-0 h-4 w-full appearance-none bg-transparent " +
  "[&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 " +
  "[&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full " +
  "[&::-webkit-slider-thumb]:bg-[var(--brandColor)] " +
  "[&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 " +
  "[&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 " +
  "[&::-moz-range-thumb]:bg-[var(--brandColor)]";

function FilterSection({ title, children }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-t border-[var(--borderSoft)] py-4">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-sm text-[var(--textDark)]"
      >
        {title}
        {open ? <Minus size={14} /> : <Plus size={14} />}
      </button>
      {open && <div className="mt-4">{children}</div>}
    </div>
  );
}

export default function ShopSidebar({
  bounds,
  price,
  onPriceChange,
  kitTypes,
  selectedTypes,
  onToggleType,
  onReset,
}) {
  const span = bounds.max - bounds.min || 1;
  const left = ((price.min - bounds.min) / span) * 100;
  const right = ((price.max - bounds.min) / span) * 100;

  return (
    <aside>
      <h2 className="text-xl text-[var(--textDark)]">Browse by</h2>
      <div className="mt-4 border-t border-[var(--borderSoft)] pt-4">
        <button
          type="button"
          onClick={onReset}
          className="text-sm text-[var(--brandColor)] underline"
        >
          All Products
        </button>
      </div>

      <h2 className="mt-10 mb-4 text-xl text-[var(--textDark)]">Filter by</h2>

      <FilterSection title="Price">
        <div className="relative h-4">
          <div className="absolute top-1/2 h-0.5 w-full -translate-y-1/2 bg-[var(--borderSoft)]" />
          <div
            className="absolute top-1/2 h-0.5 -translate-y-1/2 bg-[var(--brandColor)]"
            style={{ left: `${left}%`, right: `${100 - right}%` }}
          />
          <input
            type="range"
            aria-label="Minimum price"
            min={bounds.min}
            max={bounds.max}
            value={price.min}
            onChange={(e) =>
              onPriceChange({
                min: Math.min(Number(e.target.value), price.max),
                max: price.max,
              })
            }
            className={THUMB}
            style={{ zIndex: left > 90 ? 5 : 3 }}
          />
          <input
            type="range"
            aria-label="Maximum price"
            min={bounds.min}
            max={bounds.max}
            value={price.max}
            onChange={(e) =>
              onPriceChange({
                min: price.min,
                max: Math.max(Number(e.target.value), price.min),
              })
            }
            className={THUMB}
            style={{ zIndex: 4 }}
          />
        </div>
        <div className="mt-3 flex justify-between text-sm text-[var(--textLight)]">
          <span>{formatPrice(price.min).replace(".00", "")}</span>
          <span>{formatPrice(price.max).replace(".00", "")}</span>
        </div>
      </FilterSection>

      <FilterSection title="Collection Kit Type">
        <div className="space-y-3">
          {kitTypes.map((type) => (
            <label
              key={type}
              className="flex cursor-pointer items-center gap-3 text-sm text-[var(--textDark)]"
            >
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => onToggleType(type)}
                className="h-4 w-4 accent-[var(--brandColor)]"
              />
              {type}
            </label>
          ))}
        </div>
      </FilterSection>

      <div className="border-t border-[var(--borderSoft)]" />
    </aside>
  );
}