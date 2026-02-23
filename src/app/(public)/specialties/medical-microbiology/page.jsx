"use client";

import Link from "next/link";

export default function MedicalMicrobiology() {
  return (
    <section className="bg-[var(--bgLight)] py-16 pt-32">
      <div className="container mx-auto px-4">

        {/* PAGE TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-4">
          Medical microbiology
        </h1>

        <p className="text-[var(--textLight)] leading-relaxed mb-10 max-w-4xl">
          WCC’s Microbiology service is a broad-ranging, clinically-led pathology service.
          In addition to routine microbiology diagnostics, the laboratory includes reference
          and developmental clinical services, with expertise in all areas of conventional
          and molecular microbiology.
        </p>

        {/* TOP FULL-WIDTH CARD */}
        <div className="
          bg-white rounded-xl shadow-[var(--shadowCard)] p-6 md:p-8 mb-12 
          border border-[var(--borderLight)]
        ">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--textDark)] mb-3">
            New High Dose Antibiotic Susceptibility Category
          </h2>

          <p className="text-[var(--textLight)] leading-relaxed mb-4">
            All clinicians are advised that from 1st June 2021, the new Antimicrobial
            Susceptibility Result definitions recommended by EUCAST will apply to all results
            issued by WCC.
          </p>

          <Link
            href="/specialties/new-high-dose-antibiotic-susceptibility-category"
            className="text-[var(--brandColor)] font-medium hover:underline"
          >
            Read More →
          </Link>
        </div>

        {/* GRID CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* CARD */}
          <Card
            title="Microbiology Tests"
            desc="Test codes, sample requirements, and turn-around times."
            link='/specialties/microbiology-tests'
          />

          <Card
            title="Urine Culture Processing And Results"
            desc="Urine culture testing is performed using manual methods."
            link="/specialties/urine-culture-processing-and-results"
          />

          <Card
            title="Stool Test Codes"
            desc="Real-time PCR is used for enteric pathogen testing."
            link='/specialties/stool-test-codes'
          />

          <Card
            title="Fungal Detection"
            desc="PCR methods and test codes."
            link='/specialties/fungal-detection'
          />

          <Card
            title="Mycobacterial Testing"
            desc="We offer a comprehensive Mycobacterial diagnostics service."
            link='/specialties/mycobacterial-and-respiratory-investigation'
          />

          <Card
            title="Swabs"
            desc="Types and codes"
            link='/specialties/swabs-types-and-codes'
          />

        </div>
      </div>
    </section>
  );
}

/* -------------------------- CARD COMPONENT -------------------------- */

function Card({ title, desc, link }) {
  return (
    <div className="
      bg-white border border-[var(--borderLight)]
      rounded-xl p-6 shadow-sm hover:shadow-[0px_8px_20px_rgba(0,118,188,0.15)]
      transition-all duration-300 hover:-translate-y-1
    ">
      <h3 className="text-lg font-semibold text-[var(--textDark)] mb-2">
        {title}
      </h3>

      <p className="text-[var(--textLight)] text-sm leading-relaxed mb-4">
        {desc}
      </p>

      <Link
        href={link}
        className="text-[var(--brandColor)] text-sm font-medium hover:underline"
      >
        Read More →
      </Link>
    </div>
  );
}
