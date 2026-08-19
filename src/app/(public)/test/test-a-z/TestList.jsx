"use client";

import Link from "next/link";

const alphabets = [
  "All", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

export default function TestList({ allTests, setTest, selectedTest }) {

  return (
    <div className="w-full py-10">
      <div className="container mx-auto px-4">

        {/* Sticky Alphabet Filter */}
        <div className="z-20 bg-[var(--bgLight)] py-3 border border-gray-100 px-3">
          <div className="flex flex-wrap gap-3 text-base font-medium">

            {alphabets.map((letter, index) => {
              const active = selectedTest === letter;

              return (
                <button
                  key={letter}
                  onClick={() => setTest(letter)}
                  className={`
                    px-4 py-2 cursor-pointer transition-all duration-200
                    ${active
                      ? "bg-[var(--brandColor)] text-white"
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
              className="px-4 py-2 cursor-pointer bg-white border border-[var(--borderLight)] text-[var(--brandColorDark)] hover:bg-[var(--brandColorLight)] transition"
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
          Filter tests by alphabet. Select a letter above to instantly filter results.
        </p>

        {/* Table Header */}
        <div className="bg-[var(--brandColorDark)] text-white font-semibold px-4 py-3">
          Test Name
        </div>

        {/* Filtered Results */}
        <div className="border border-[var(--borderLight)] divide-y divide-[var(--borderLight)] bg-white">
          {allTests?.length > 0 ? (
            allTests.map((item, index) => {
              const slug = item?.slug

              return (
                <Link
                  key={index}
                  href={`/test/test-a-z/${slug}`}
                  className="block px-4 py-3 hover:bg-[var(--brandColorLight)] hover:text-[var(--brandColorDark)] transition-all"
                >
                  {item?.title}
                </Link>
              );
            })
          ) : (
            <div className="px-4 py-4 text-[var(--textLight)]">
              No tests found for this letter.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
