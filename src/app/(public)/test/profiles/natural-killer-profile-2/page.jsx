"use client";

import Link from "next/link";

export default function NaturalKillerProfile2() {
  return (
    <div className="w-full py-10 pt-48">
      <div className="container mx-auto">
        <div className="bg-white shadow-sm rounded-lg p-8 md:p-10 border border-[var(--borderLight)] space-y-8">

          {/* Title */}
          <h1 className="text-3xl font-bold" style={{ color: "var(--brandColor)" }}>
            Natural Killer Profile 2
          </h1>

          <hr className="border-[var(--borderLight)]" />

          {/* Key Info */}
          <div className="grid md:grid-cols-2 gap-y-4 gap-x-12 text-[var(--textDark)]">
            <div className="font-semibold">Code</div>
            <div>NKP2</div>

            <div className="font-semibold">Sample Reqs</div>
            <div>10</div>

            <div className="font-semibold">Turnaround</div>
            <div>2 days</div>

            <div className="font-semibold">Special instructions</div>
            <div>
              Contact the laboratory for special stability tubes for lymphocyte subsets – or take an EDTA sample and ensure same day delivery to the laboratory, Monday to Friday noon (do not send sample between Friday noon and Monday morning).
            </div>
          </div>

          <hr className="border-[var(--borderLight)]" />

          {/* Sample Type Guide */}
          <div className="space-y-2 text-[var(--textDark)]">
            <h3 className="font-semibold">Sample type guide</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Lavender Vacutainer, EDTA anticoagulant, 4ml/6ml (6ml EDTA tubes are used for specific PCR assays)
              </li>
            </ul>
          </div>

          <hr className="border-[var(--borderLight)]" />

          {/* Related Specialties */}
          <div className="space-y-2 text-[var(--textDark)]">
            <h3 className="font-semibold">Related specialties</h3>
            <ul className="list-disc pl-6">
              <li>
                <Link
                  href="/specialties/vitamin-tests"
                  className="text-[var(--brandColor)] hover:underline"
                >
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
                <Link
                  href="/test/request-forms"
                  className="text-[var(--brandColor)] hover:underline"
                >
                  Request forms
                </Link>
              </li>
              <li>
                <Link
                  href="/test/specimens"
                  className="text-[var(--brandColor)] hover:underline"
                >
                  Specimens: collection, packaging, transport, rejection criteria
                </Link>
              </li>
              <li>
                <Link
                  href="/test/discontinued-tests"
                  className="text-[var(--brandColor)] hover:underline"
                >
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