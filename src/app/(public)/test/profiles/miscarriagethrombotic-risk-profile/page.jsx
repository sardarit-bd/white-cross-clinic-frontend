"use client";

import Link from "next/link";

export default function MiscarriageThromboticProfile() {
  return (
    <div className="w-full py-10 pt-48">
      <div className="container mx-auto">
        <div className="bg-white shadow-sm rounded-lg p-8 md:p-10 border border-[var(--borderLight)] space-y-8">

          {/* Title */}
          <h1 className="text-3xl font-bold" style={{ color: "var(--brandColor)" }}>
            Miscarriage/Thrombotic Risk Profile
          </h1>

          <hr className="border-[var(--borderLight)]" />

          {/* Key Info */}
          <div className="grid md:grid-cols-2 gap-y-4 gap-x-12 text-[var(--textDark)]">
            <div className="font-semibold">Code</div>
            <div>PROP</div>

            <div className="font-semibold">Sample Reqs</div>
            <div>AABCCC [18]</div>

            <div className="font-semibold">Turnaround</div>
            <div>5 days</div>

            <div className="font-semibold">Special instructions</div>
            <div>
              [18] Citrate Samples. Samples should be double spun and separated and frozen within 4-8 hours of sample taking, 
              if a delay is expected with transportation to the laboratory, samples must be transported as frozen.
            </div>
          </div>

          <hr className="border-[var(--borderLight)]" />

          {/* Sample Type Guide */}
          <div className="space-y-2 text-[var(--textDark)]">
            <h3 className="font-semibold">Sample type guide</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>A – Lavender Vacutainer, EDTA anticoagulant, 4ml/6ml (6ml EDTA tubes are used for specific PCR assays)</li>
              <li>B – Gold Vacutainer, SST/Gel anticoagulant, 5ml</li>
              <li>C – Light blue Vacutainer, Citrate anticoagulant, 4.5ml</li>
            </ul>
          </div>

          <hr className="border-[var(--borderLight)]" />

          {/* Profile Details */}
          <div className="space-y-2 text-[var(--textDark)]">
            <h3 className="font-semibold">Profile details</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Full Blood Count (FBC)</li>
              <li>Coagulation Profile 1</li>
              <li>Antithrombin III</li>
              <li>Factor V Leiden – G1691A Variant</li>
              <li>Factor II Prothrombin – G20210A Variant</li>
              <li>MTHFR – common C677T + A1298C variants</li>
              <li>Lupus Anticoagulant</li>
              <li>Protein C</li>
              <li>Free Protein S Ag</li>
              <li>Cardiolipin Antibodies (IgG+IgM)</li>
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