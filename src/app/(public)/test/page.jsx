"use client";

import Link from "next/link";

export default function TestPage() {
  const cards = [
    {
      title: "Tests A-Z",
      desc: "Test codes, sample requirements and turnaround times for our most requested tests.",
      link: "/test/test-a-z",
    },
    {
      title: "Specimens",
      desc: "Guidance on specimen collection, packaging and transport, and rejection criteria.",
      link: "/test/specimens",
    },
    {
      title: "Sample requirements",
      desc: "A quick guide to vacutainer colours, anticoagulants and capacities, and to other sample types.",
      link: "/test/sample-requirements",
    },
    {
      title: "Special instructions",
      desc: "A summary list of special instructions for specimens used in our test lists.",
      link: "/test/special-instructions",
    },
    {
      title: "Request forms",
      desc: "PDF versions of our request forms.",
      link: "/test/request-forms",
    },
    {
      title: "Discontinued tests",
      desc: "Tests may be discontinued at short notice for various reasons.",
      link: "/test/discontinued-tests",
    },
  ];

  return (
    <div className="py-10 px-4 md:px-10 container pt-48 mx-auto">

      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-3">
        Test
      </h1>

      {/* SUBTEXT */}
      <p className="text-[var(--textLight)] mb-6 leading-relaxed">
        We offer an extensive range of pathology profiles and tests. If you are not able to find details 
        for tests and services, please contact the laboratory on 
        <a href="tel:07784732485" className="text-[var(--brandColor)] underline ml-1">
          07784732485
        </a>.
      </p>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

        {cards.map((c, i) => (
          <div
            key={i}
            className="border border-[var(--borderLight)] rounded-xl p-6 bg-white shadow-sm
                       hover:shadow-lg transition-all duration-300 group"
          >
            <h2 className="text-xl font-semibold text-[var(--textDark)] mb-3">{c.title}</h2>

            <p className="text-[var(--textLight)] text-sm leading-relaxed mb-4">
              {c.desc}
            </p>

            <Link
              href={c.link}
              className="inline-block px-4 py-2 rounded-full bg-[var(--brandColor)] text-white text-sm
                         group-hover:bg-[var(--brandColorDark)] transition"
            >
              Click To View →
            </Link>
          </div>
        ))}

      </div>
    </div>
  );
}
