"use client";

import Link from "next/link";

export default function DL9MSeniorMaleProfile() {
  return (
    <div className="w-full py-10 pt-48">
      <div className="container mx-auto">
        <div className="bg-white shadow-sm rounded-lg p-8 md:p-10 border border-[var(--borderLight)] space-y-8">

          {/* Title */}
          <h1 className="text-3xl font-bold" style={{ color: "var(--brandColor)" }}>
            DL9M Senior Male Profile 60+
          </h1>

          <hr className="border-[var(--borderLight)]" />

          {/* Key Info */}
          <div className="grid md:grid-cols-2 gap-y-4 gap-x-12 text-[var(--textDark)]">
            <div className="font-semibold">Code</div>
            <div>DL9M</div>

            <div className="font-semibold">Sample Reqs</div>
            <div>ABBG RU</div>

            <div className="font-semibold">Turnaround</div>
            <div>2 days</div>
          </div>

          {/* Special Instructions */}
          <div className="space-y-2 text-[var(--textDark)]">
            <h3 className="font-semibold">Special instructions</h3>
            <p>[4] Send to the laboratory same day.</p>
          </div>

          <hr className="border-[var(--borderLight)]" />

          {/* Sample Type Guide */}
          <div className="space-y-4 text-[var(--textDark)]">
            <h3 className="font-semibold">Sample type guide</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <span className="font-semibold">A:</span> Lavender Vacutainer, EDTA anticoagulant, 4ml/6ml (6ml EDTA tubes are used for specific PCR assays)
              </li>
              <li>
                <span className="font-semibold">B:</span> Gold Vacutainer, SST/Gel anticoagulant, 5ml
              </li>
              <li>
                <span className="font-semibold">G:</span> Grey Vacutainer, Fluoride oxalate anticoagulant, 2ml/4ml
              </li>
              <li>
                <span className="font-semibold">RU:</span> Random Urine
              </li>
            </ul>
          </div>

          <hr className="border-[var(--borderLight)]" />

          {/* Profile Details */}
          <div className="space-y-2 text-[var(--textDark)]">
            <h3 className="font-semibold">Profile details</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>DL2 Biochemistry & Haematology Profile</li>
              <li>HDL / LDL Cholesterol</li>
              <li>HbA1C</li>
              <li>Free T4 / TSH</li>
              <li>Prostate Profile</li>
              <li>C Reactive Protein (CRP)</li>
              <li>Ferritin</li>
              <li>MSU</li>
              <li>Vitamin D (25-OH)</li>
              <li>Lp-PLA2 (PLAC) Test</li>
            </ul>
          </div>

          <hr className="border-[var(--borderLight)]" />

          {/* Related Specialities */}
          <div className="space-y-2 text-[var(--textDark)]">
            <h3 className="font-semibold">Related Specialities</h3>
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
            <h3 className="font-semibold">Additional Information</h3>
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