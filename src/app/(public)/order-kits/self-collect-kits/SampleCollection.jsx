"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function SampleCollection() {
  const sidebarLinks = [
    { label: "Self-Collect kits", href: "#" },
    { label: "Order Self-Collect kits", href: "#" },
    { label: "WCPC Self-Collect kits", href: "#" },
    { label: "Kit-certified tests", href: "#" },
    { label: "About our kits", href: "#" },
  ];

  const cards = [
    {
      title: "Order kits",
      desc: "How to order kits for your practice.",
      href: "#",
    },
    {
      title: "Range of Self-Collect",
      desc: "WCPC TinyTM capillary blood and WCPC Self-Collect sample kits.",
      href: "#",
    },
    {
      title: "Kit-certified",
      desc: "Tests with available UKCA-marked kits.",
      href: "#",
    },
    {
      title: "About our kits",
      desc: "Quality, distribution and sustainability.",
      href: "#",
    },
  ];

  return (
    <section className="bg-[var(--bgLight)] py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6 md:px-12">

        {/* LEFT SIDEBAR */}
        <div className="md:col-span-1 space-y-0">
          {sidebarLinks.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="
                block w-full px-6 py-4
                border-b border-[var(--borderLight)]
                bg-[var(--brandColorDark)]
                text-white font-medium
                hover:bg-[var(--brandColor)]
                transition-all
              "
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:col-span-3 space-y-10">

          {/* Heading Section */}
          <div className="bg-white p-8 rounded-xl shadow-[var(--shadowCard)]">
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-4">
              Sample collection
            </h1>

            <p className="text-[var(--textDark)] font-medium leading-relaxed mb-4">
              WC Polyclinic sample collection kits – the TinyTM capillary blood
              and Self-Collect sample kits – cover a wide range of diagnostic and
              screening tests. Blood, stool, urine, and swabs, in various
              combinations, enable patients’ samples to be collected safely at
              home and sent to the laboratory for testing.
            </p>

            <p className="text-[var(--textLight)] leading-relaxed">
              Self-collect samples are returned to accredited WCPC laboratories
              that undertake the required testing. Results are returned directly
              to the healthcare organization, doctor, or managing healthcare
              professional, not to the patient.
            </p>
          </div>

          {/* GRID CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((card, i) => (
              <div
                key={i}
                className="
                  bg-white p-8 rounded-xl shadow-[var(--shadowCard)]
                  border-l-4 border-[var(--brandColorDark)]
                  flex flex-col justify-between
                "
              >
                <h3 className="text-xl font-semibold text-[var(--textDark)] mb-3">
                  {card.title}
                </h3>

                <p className="text-[var(--textLight)] mb-6 leading-relaxed">
                  {card.desc}
                </p>

                <Link
                  href={card.href}
                  className="
                    inline-flex items-center gap-2
                    bg-[var(--brandColorLight)] text-[var(--textDark)]
                    px-5 py-2 rounded-full font-medium
                    hover:bg-[var(--brandColor)] hover:text-white
                    transition-all
                  "
                >
                  Read more <ChevronRight size={18} />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
