"use client";

import Link from "next/link";

export default function CalprotectinQFITProfile() {
  return (
    <div className="w-full py-10 pt-48">
      <div className="container mx-auto">
        <div className="bg-white shadow-sm rounded-lg p-8 md:p-10 border border-[var(--borderLight)] space-y-8">

          {/* Title */}
          <h1 className="text-3xl font-bold" style={{ color: "var(--brandColor)" }}>
            Calprotectin/QFIT Profile (Combined)
          </h1>

          <hr className="border-[var(--borderLight)]" />

          {/* Key Info */}
          <div className="grid md:grid-cols-2 gap-y-4 gap-x-12 text-[var(--textDark)]">
            <div className="font-semibold">Code</div>
            <div>QCAL</div>

            <div className="font-semibold">Sample Reqs</div>
            <div>QFIT / QFIT sample collection device</div>

            <div className="font-semibold">Turnaround</div>
            <div>5 days</div>

            <div className="font-semibold">Special instructions</div>
            <div>
              Please post self-collected samples on the same day they are taken,
              avoid posting over weekends and bank holidays.
            </div>
          </div>

          <hr className="border-[var(--borderLight)]" />

          {/* Sample Type Guide */}
          <div className="space-y-2 text-[var(--textDark)]">
            <h3 className="font-semibold">Sample type guide</h3>
            <p>No additional sample type instructions provided.</p>
          </div>

          <hr className="border-[var(--borderLight)]" />

          {/* Profile Details */}
          <div className="space-y-2 text-[var(--textDark)]">
            <h3 className="font-semibold">Profile details</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Calprotectin</li>
              <li>Quantitative Faecal Immunochemical Test (QFIT)</li>
              <li>
                If CALP &lt; 50ug/g then the below comment will be appended:
                <br />
                Calprotectin: &lt; 50 ug/g - Not indicative of GI inflammation. Consider IBS, or quiescent IBD if this is a known patient.
              </li>
              <li>
                If CALP = 50 ug/g or higher, then the below comment will be appended: 
                <br />
                Calprotectin: 50-150 ug/g repeat calprotectin in 2 weeks (Also consider other potential causes (infection, NSAIDS, GI malignancy) depending on the magnitude of the result and clinical context.)
              </li>
              <li>Repeated Calprotectin result: 100–250 ug/g routine referral to gastroenterology.</li>
              <li>Calprotectin: &gt;250 ug/g urgent referral to gastroenterology.</li>
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