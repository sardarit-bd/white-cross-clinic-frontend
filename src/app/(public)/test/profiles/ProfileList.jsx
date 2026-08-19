"use client";


import Link from "next/link";

const alphabets = [
    "All", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

export default function ProfileList({ allTests, activeLetter, setActiveLetter }) {
    const selectTest = (letter) => {
        setActiveLetter(letter)
    }
    return (
        <div className="w-full py-5">
            <div className="container mx-auto px-4">

                {/* Sticky Alphabet Filter */}
                <div className="z-20 bg-[var(--bgLight)] py-3 px-3 border border-gray-100">
                    <div className="flex flex-wrap gap-3 text-base font-medium">

                        {alphabets.map((letter, index) => {
                            return (
                                <button
                                    key={letter}
                                    onClick={() => selectTest(letter)}
                                    className={`
                    px-4 py-2 transition-all duration-200 ${activeLetter === letter ? "bg-[var(--brandColor)] text-white" : "bg-white text-[var(--textDark)]"}  border border-[var(--borderLight)] hover:bg-[var(--brandColorLight)]"
                                        }
                  `}
                                >
                                    {letter}
                                </button>
                            );
                        })}

                        {/* <button
                            className="px-4 py-2 bg-white border border-[var(--borderLight)] text-[var(--brandColorDark)] hover:bg-[var(--brandColorLight)] transition"
                        >
                            Profiles
                        </button> */}
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-3xl font-bold text-[var(--textDark)] mt-8 mb-3">
                    Profiles
                </h1>

                <p className="text-[var(--textLight)] mb-6 text-sm text-lg">
                    <b>Details of the tests covered by each profile, plus codes, sample requirements and turnaround times</b>. Please click on a profile name to see more information. For Reference Ranges related to any specific test please email <Link
                        href="mailto:info@whitecrossclinics.com"
                        className="text-[var(--brandColor)] hover:underline"
                    >
                        info@whitecrossclinics.com
                    </Link> See <Link href="/test/discontinued-tests"
                        className="text-[var(--brandColor)] hover:underline">discontinued tests</Link> to find out which tests are no longer available.
                </p>

                {/* Table Header */}
                <div className="bg-[var(--brandColorDark)] text-white font-semibold px-4 py-3 ">
                    Test Name
                </div>

                {/* Filtered Results */}
                <div className="border border-[var(--borderLight)] divide-y divide-[var(--borderLight)] bg-white shadow-sm">
                    {allTests?.length > 0 ? (
                        allTests.map((item, index) => {
                            const slug = item
                                .toLowerCase()
                                .replace(/\s+/g, "-")
                                .replace(/[^\w-]+/g, "");

                            return (
                                <Link
                                    key={index}
                                    href={`/test/profiles/${slug}`}
                                    className="block px-4 py-3 hover:bg-[var(--brandColorLight)] hover:text-[var(--brandColorDark)] transition-all"
                                >
                                    {item}
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
