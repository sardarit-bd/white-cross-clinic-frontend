"use client";

import Link from "next/link";

export default function DL12STIProfile() {
  return (
    <div className="w-full py-10 pt-48">
      <div className="container mx-auto">
        <div className="bg-white shadow-sm rounded-lg p-8 md:p-10 border border-[var(--borderLight)] space-y-8">

          {/* Title */}
          <h1 className="text-3xl font-bold" style={{ color: "var(--brandColor)" }}>
            DL12 7 STI Profile by PCR (7 PCR Tests from 1 Sample)
          </h1>

          <hr className="border-[var(--borderLight)]" />

          {/* Key Info */}
          <div className="grid md:grid-cols-2 gap-y-4 gap-x-12 text-[var(--textDark)]">
            <div className="font-semibold">Code</div>
            <div>DL12</div>

            <div className="font-semibold">Sample Reqs</div>
            <div>FCRU / PCR Swab / TPV or Aptima urine / multisite swab</div>

            <div className="font-semibold">Turnaround</div>
            <div>2 days</div>
          </div>

          {/* Special Instructions */}
          <div className="space-y-2 text-[var(--textDark)]">
            <h3 className="font-semibold">Special instructions</h3>
            <p>
              Please post self-collected samples on the same day they are taken, avoid posting over weekends and bank holidays.
            </p>
          </div>

          <hr className="border-[var(--borderLight)]" />

          {/* Sample Type Guide */}
          <div className="space-y-4 text-[var(--textDark)]">
            <h3 className="font-semibold">Sample type guide</h3>
            <p>
              <span className="font-semibold">FCRU</span> — First Catch Random Urine (for DL12/Chlamydia, etc.)
            </p>
          </div>

          <hr className="border-[var(--borderLight)]" />

          {/* Profile Details */}
          <div className="space-y-2 text-[var(--textDark)]">
            <h3 className="font-semibold">Profile details</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Chlamydia trachomatis</li>
              <li>Neisseria gonorrhoea</li>
              <li>Mycoplasma genitalium</li>
              <li>Ureaplasma species</li>
              <li>Trichomonas vaginalis</li>
              <li>Gardnerella vaginalis</li>
              <li>Herpes Simplex I/II</li>
            </ul>
            <p className="italic">All tests can be requested individually</p>
          </div>

          <hr className="border-[var(--borderLight)]" />

          {/* Related Specialities */}
          <div className="space-y-2 text-[var(--textDark)]">
            <h3 className="font-semibold">Related Specialities</h3>
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
            <h3 className="font-semibold">Additional Information</h3>
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