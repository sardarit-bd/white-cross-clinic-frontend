"use client";

import Link from "next/link";

export default function DrugsOfAbuseChainOfCustody() {
  return (
    <div className="w-full py-10 pt-48">
      <div className="container mx-auto">
        <div className="bg-white shadow-sm rounded-lg p-8 md:p-10 border border-[var(--borderLight)] space-y-8">

          {/* Title */}
          <h1 className="text-3xl font-bold" style={{ color: "var(--brandColor)" }}>
            Drugs of Abuse Profile – With Chain of Custody*
          </h1>

          <hr className="border-[var(--borderLight)]" />

          {/* Key Info */}
          <div className="grid md:grid-cols-2 gap-y-4 gap-x-12 text-[var(--textDark)]">
            <div className="font-semibold">Code</div>
            <div>DOAL</div>

            <div className="font-semibold">Sample Reqs</div>
            <div>RU/CoC Collection Containers [1] [2]</div>

            <div className="font-semibold">Turnaround</div>
            <div>2 days (5 days with LC-MS/MS confirmation)</div>

            <div className="font-semibold">Special instructions</div>
            <div>
              [1] Contact the laboratory for special sample tubes/containers/instructions. <br />
              [2] Confirmation of not negative drug screens by LC-MS/MS may take up to 5 days. <br />
              *Appointment required at 76 Wimpole Street and Photo ID to be shown.
            </div>
          </div>

          <hr className="border-[var(--borderLight)]" />

          {/* Sample Type Guide */}
          <div className="space-y-2 text-[var(--textDark)]">
            <h3 className="font-semibold">Sample type guide</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>RU &nbsp;&nbsp; Random Urine</li>
            </ul>
          </div>

          <hr className="border-[var(--borderLight)]" />

          {/* Profile Details */}
          <div className="space-y-2 text-[var(--textDark)]">
            <h3 className="font-semibold">Profile details</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Alcohol</li>
              <li>Amphetamines</li>
              <li>Barbiturates</li>
              <li>Benzodiazepine</li>
              <li>Cannabinoids</li>
              <li>Cocaine</li>
              <li>Codeine – opiate</li>
              <li>Dihydrocodeine – opiate</li>
              <li>Ketamine</li>
              <li>LSD</li>
              <li>MDMA</li>
              <li>Methadone</li>
              <li>Methaqualone</li>
              <li>Morphine – opiate</li>
              <li>Phencyclidine</li>
              <li>Propoxyphene</li>
            </ul>
          </div>

          <hr className="border-[var(--borderLight)]" />

          {/* Related Specialties */}
          <div className="space-y-2 text-[var(--textDark)]">
            <h3 className="font-semibold">Related specialties</h3>
            <ul className="list-disc pl-6">
              <li>
                <Link href="/specialties/vitamin-tests" className="text-[var(--brandColor)] hover:underline">
                  Vitamins
                </Link>
              </li>
            </ul>
          </div>

          {/* Additional Information */}
          <div className="space-y-2 text-[var(--textDark)]">
            <h3 className="font-semibold">Additional information</h3>
            <ul className="list-disc pl-6">
              <li>
                <Link href="/test/request-forms" className="text-[var(--brandColor)] hover:underline">
                  Request forms
                </Link>
              </li>
              <li>
                <Link href="/test/specimens" className="text-[var(--brandColor)] hover:underline">
                  Specimens: collection, packaging, transport, rejection criteria
                </Link>
              </li>
              <li>
                <Link href="/test/discontinued-tests" className="text-[var(--brandColor)] hover:underline">
                  Discontinued tests
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}