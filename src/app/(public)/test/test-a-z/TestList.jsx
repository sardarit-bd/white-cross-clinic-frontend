"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import TestCard from "@/components/shared/TestCard";

const alphabets = [
  "All",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export default function TestList({ allTests, setTest, selectedTest }) {
  return (
    <div className="w-full py-10">
      <div className="container mx-auto px-4">
        {/* Sticky Alphabet Filter */}
        <div className="z-20 bg-[var(--bgLight)] py-3 px-3 shadow-sm">
          <div className="flex flex-wrap gap-3 text-base font-medium">
            {alphabets.map((letter, index) => {
              const active = selectedTest === letter;

              return (
                <button
                  key={letter}
                  onClick={() => setTest(letter)}
                  className={`
                    px-4 py-2 rounded-lg transition-all duration-200
                    ${
                      active
                        ? "bg-[var(--brandColor)] text-white shadow-md"
                        : "bg-white text-[var(--textDark)] border border-[var(--borderLight)] hover:bg-[var(--brandColorLight)]"
                    }
                  `}
                >
                  {letter}
                </button>
              );
            })}

            <Link
              href="/test/profiles"
              className="px-4 py-2 rounded-lg bg-white border border-[var(--borderLight)] text-[var(--brandColorDark)] hover:bg-[var(--brandColorLight)] transition"
            >
              Profiles
            </Link>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-[var(--textDark)] mt-8 mb-3">
          Tests Starting with “{selectedTest}”
        </h1>

        <p className="text-[var(--textLight)] mb-6 text-sm">
          Filter tests by alphabet. Select a letter above to instantly filter
          results.
        </p>

        {/* Filtered Results */}
        {allTests?.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allTests.map((item, index) => (
              <TestCard
                key={item?.slug || index}
                title={item?.title}
                slug={item?.slug}
                turnaround={item?.turnaround}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-[var(--borderLight)] bg-white px-4 py-4 text-[var(--textLight)] shadow-sm">
            No tests found for this letter.
          </div>
        )}
      </div>
    </div>
  );
}
