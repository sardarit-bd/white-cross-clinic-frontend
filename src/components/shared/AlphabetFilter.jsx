"use client";

import React from "react";

export default function AlphabetFilter({ onSelect, active }) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-2 py-4">
      {letters.map((letter, index) => (
        <button
          key={letter}
          onClick={() => onSelect(letter)}
          className={`
            text-sm md:text-base font-medium px-1
            transition-all duration-200
            ${active === letter ? "text-[var(--brandColor)] font-bold" : "text-blue-600 hover:text-[var(--brandColorDark)]"}
          `}
        >
          {letter}
          {/* Add divider except after last letter */}
          {index !== letters.length - 1 && (
            <span className="mx-2 text-gray-400">|</span>
          )}
        </button>
      ))}
    </div>
  );
}
