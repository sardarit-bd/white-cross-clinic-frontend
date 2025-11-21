"use client";

import { useState } from "react";
import Link from "next/link";

const alphabet = [
  "A","B","C","D","E","F","G","H","I","J","K","L",
  "M","N","O","P","Q","R","S","T","U","V","W","X",
  "Y","Z","#"
];

const sampleTests = {
  A: [
    { title: "Coronary angioplasty and stents" },
    { title: "Ankle surgery" },
    { title: "Coronary angiogram" },
    { title: "General anesthesia" },
    { title: "ANA test" },
  ],
  B: [
    { title: "Blood culture" },
    { title: "Bone density scan" },
  ],
  C: [
    { title: "CT scan" },
    { title: "Cardiac MRI" },
  ],
};

export default function TestsPage() {
  const [selected, setSelected] = useState("A");

  const tests = sampleTests[selected] || [];

  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-48">
      {/* Header */}
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <p className="text-sm text-gray-600 font-medium">
          Drugs and Supplements
        </p>
        <h1 className="text-4xl font-bold text-[var(--textDark)] tracking-tight">
          Tests & Procedures
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
          
          {/* LEFT FILTER BOX */}
          <div className="bg-white border rounded-xl shadow-sm p-5 h-fit">
            <h3 className="font-semibold text-gray-700 mb-4">
              Narrow your search
            </h3>

            <div className="grid grid-cols-6 gap-3">
              {alphabet.map((letter, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(letter)}
                  className={`
                    border rounded-md py-2 text-center text-sm font-medium
                    transition-all
                    ${
                      selected === letter
                        ? "bg-[var(--brandColor)] text-white border-[var(--brandColor)]"
                        : "text-gray-700 hover:bg-gray-100"
                    }
                  `}
                >
                  {letter}
                </button>
              ))}
            </div>

            {/* Ad (Optional) */}
            <div className="text-center text-gray-400 text-sm mt-8">
              Advertisement
            </div>
            <div className="mt-4 bg-gray-200 h-32 rounded-xl"></div>
          </div>

          {/* RIGHT LIST */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6">
              Test {selected}
            </h2>

            <div className="space-y-6">
              {tests.map((test, i) => (
                <div
                  key={i}
                  className="pb-4 border-b last:border-none"
                >
                  <p className="text-lg font-medium text-[var(--textDark)]">
                    {test.title}
                  </p>
                  <p className="text-sm text-[var(--brandColor)] mt-1">
                    <Link href={`/test/${test.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      See This article
                    </Link>
                  </p>
                </div>
              ))}

              {tests.length === 0 && (
                <p className="text-gray-500">No tests available for this letter.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Optional Banner Section */}
      {/* <div className="mt-12 w-full h-64 bg-gray-200"></div> */}
    </div>
  );
}
