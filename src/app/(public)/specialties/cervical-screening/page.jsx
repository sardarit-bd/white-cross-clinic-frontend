"use client";

import Link from "next/link";

const cards = [
  {
    title: "HPV Tests",
    desc: "Further details on how requests for HPV testing are processed.",
    href: "/cervical-screening/hpv-tests",
  },
  {
    title: "STI Screening From Hologic ThinPrep Vials",
    desc: "In addition to HPV, other STIs can be tested from the same Thin Prep vial.",
    href: "/cervical-screening/sti-screening-hologic",
  },
  {
    title: "ThinPrep® PAP Test Cervex Brush Protocol",
    desc: "DOs, DON’Ts.",
    href: "/cervical-screening/thinprep-protocol",
  },
  {
    title: "TDL Self-Collection HPV Test",
    desc: "The Self Collection HPV Test provides women with the option to self-collect a vaginal specimen.",
    href: "/cervical-screening/self-collection-hpv",
  },
];

export default function CervicalScreening() {
  return (
    <div className="container mx-auto px-6 md:px-10 py-10">

      {/* TOP SECTION */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-md p-6 md:p-10 mb-10">
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-4">
          Cervical screening
        </h1>

        {/* Subtitle */}
        <p className="text-[var(--textDark)] font-medium leading-relaxed mb-6">
          WCC’s Cytology Laboratory provides a rapid service for liquid based cervical samples from all sectors of 
          practice – health screening, occupational Health, GPs, consultants, colposcopy units, clinics, hospitals 
          and other laboratories.
        </p>

        {/* Paragraph Block */}
        <p className="text-[var(--textDark)] leading-relaxed mb-6">
          Since 2019, testing for high-risk subtypes of human papillomavirus (HR-HPV) has replaced cervical cytology 
          as the first (primary test) in cervical screening. Cytology is undertaken as a triage if HPV is detected.
        </p>

        {/* Subheading */}
        <p className="font-semibold text-[var(--textDark)] mb-4">
          HPV testing is therefore carried out as a single, first line test, with a single result reported as Detected/Not Detected.
        </p>

        {/* Bullet Section */}
        <ul className="list-disc pl-6 space-y-3 text-[var(--textDark)] leading-relaxed mb-8">
          <li>
            If HR-HPV is Negative (Not Detected) – no further testing is needed for your patient: she returns to Routine Recall.
          </li>
          <li>
            If HR-HPV is Positive (Detected) – Cytology will be processed from the same ThinPrep Vial. A further specimen is not required.
          </li>
          <li>
            If Cytology result is HR-HPV Not Detected – the patient Recall is determined by screening history OR a repeat HR-HPV test in 12 months.
          </li>
          <li>
            If Cytology result is Abnormal, the recommendation is referral for Colposcopy.
          </li>
        </ul>

        {/* Subsection */}
        <p className="text-[var(--textDark)] leading-relaxed mb-4">
          Since 1st January 2019 all WCC requests for HPV have been processed as follows:
        </p>

        <ul className="list-disc pl-6 space-y-3 text-[var(--textDark)] leading-relaxed mb-4">
          <li>
            If HPV is requested as a single test and result is Negative/Not Detected, cervical cytology (PAPT) will be processed ONLY if specifically requested.
          </li>
          <li>
            If HPV result is Detected, cervical cytology (PAPT) will be processed automatically.
          </li>
          <li>
            If cervical cytology is requested, HPV will always be processed with it.
          </li>
        </ul>
      </div>

      {/* GRID CARDS */}
      <div className="grid md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-sm rounded-md p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-[var(--textDark)] mb-2">
                {card.title}
              </h3>
              <p className="text-[var(--textLight)] leading-relaxed mb-6">
                {card.desc}
              </p>
            </div>
            <Link
              href={card.href}
              className="text-[var(--brandColor)] font-semibold hover:underline mt-auto"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
}
