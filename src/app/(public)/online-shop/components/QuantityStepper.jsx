"use client";

import { Minus, Plus } from "lucide-react";

export default function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = 99,
  className = "",
}) {
  return (
    <div
      className={`flex h-10 items-center justify-between border border-[var(--borderSoft)] bg-white px-3 ${className}`}
    >
      <button
        type="button"
        aria-label="Decrease quantity"
        disabled={value <= min}
        onClick={() => onChange(value - 1)}
        className="text-[var(--textDark)] disabled:cursor-not-allowed disabled:opacity-30"
      >
        <Minus size={16} />
      </button>
      <span className="text-sm font-semibold text-[var(--textDark)]">{value}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        disabled={value >= max}
        onClick={() => onChange(value + 1)}
        className="text-[var(--textDark)] disabled:cursor-not-allowed disabled:opacity-30"
      >
        <Plus size={16} />
      </button>
    </div>
  );
}