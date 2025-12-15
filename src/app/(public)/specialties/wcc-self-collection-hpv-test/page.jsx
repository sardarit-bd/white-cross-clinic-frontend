"use client";

import Link from "next/link";

export default function WCCSelfCollectionHPVTest() {
  return (
    <div className="w-full bg-[var(--bgLight)] py-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* PAGE TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-4">
          WCC Self-Collection HPV Test
        </h1>

        {/* INTRO */}
        <p className="text-[var(--textDark)] mb-6 leading-relaxed">
          <strong>
            The Self Collection HPV Test provides women with the option to self-collect a vaginal specimen
            that is then sent to the laboratory for testing.
          </strong>{" "}
          There is a well-documented high level of concordance between the HPV DNA results from self-collected
          and clinician-collected specimens.
        </p>

        {/* SECTION TEXT */}
        <div className="space-y-5 text-[var(--textDark)] leading-relaxed">

          <p>
            Human Papillomavirus (HPV) is the primary cause of nearly all cervical cancer. In most cases, 
            the HPV virus is harmless and causes no symptoms. Most women who acquire HPV are able to clear 
            the infection through their own immune systems. Persistent presence of high-risk types of HPV 
            can cause cervical lesions, which over time may develop into cancer if untreated. Testing for 
            HPV determines the presence, or absence, of HPV and will determine whether the HPV type present 
            is high risk for CIN and cervical cancer.
          </p>

          <p>
            The Self-Collection HPV Test is validated using a CE-marked sample collection device for vaginal 
            cell collection. This sample is then sent to the laboratory for processing for 19 high-risk HPV 
            DNA subtypes.
          </p>

          {/* Bullet list */}
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>A negative result</strong> means that these high-risk subtypes were not detected and 
              the patient is at extremely low risk of developing high-grade cervical disease/CIN2+ before 
              their next routine visit.
            </li>
            <li>
              <strong>A positive HPV result</strong> might indicate an increased risk of developing CIN/cervical 
              cancer, and the report from the laboratory will provide a clear recommendation for follow-up/colposcopy.
            </li>
          </ul>

          <p>
            The value of HPV DNA testing in cervical cancer screening and disease detection has been proven 
            over and over again. Self-collection of specimens for HPV testing is not intended to replace 
            existing patient management pathways but allows for:
          </p>

          {/* Another bullet list */}
          <ul className="list-disc ml-6 space-y-2">
            <li>Those who wish to test following a change of sexual partner</li>
            <li>Option for identifying individual high-risk DNA subtypes</li>
            <li>Personal preference to self-collect vaginal samples</li>
            <li>An acceptable option for women who avoid having regular cervical smears</li>
            <li>
              Self-collection for HPV increases acceptability and coverage rate of cervical cancer prevention
            </li>
          </ul>
        </div>

        {/* TWO CARDS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

          {/* HPVY CARD */}
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-[var(--brandColor)]">
            <h3 className="text-xl font-semibold text-[var(--textDark)] mb-2">HPVY</h3>
            <p className="text-[var(--textDark)] mb-4">
              Self-Collected HPV DNA incorporating of high-risk subtypes.
            </p>
            <button
              className="text-[var(--brandColor)] font-medium hover:underline"
            >
              <Link href='/specialties/andrology-pathology-and-services'>
                Read More →
              </Link>
            </button>
          </div>

          {/* HPVZ CARD */}
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-[var(--brandColor)]">
            <h3 className="text-xl font-semibold text-[var(--textDark)] mb-2">HPVZ</h3>
            <p className="text-[var(--textDark)] mb-4">
              Self-Collected HPV DNA with individual reporting of all High-Risk subtypes 
              (16, 18, 31, 33, 45, 35, 39, 51, 52, 56, 58, 59, 66, 68, 26, 53, 69, 73, 82).
            </p>
            <button
              className="text-[var(--brandColor)] font-medium hover:underline"
            >
              <Link href='/specialties/oxidative-stress-in-semen'>
                Read More →
              </Link> 
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
