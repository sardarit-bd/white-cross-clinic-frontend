"use client";

import Link from "next/link";

export default function EntericOrganismRapidDetection() {
  return (
    <div className="w-full py-10 pt-48">
      <div className="container mx-auto">
        <div className="bg-white shadow-sm rounded-lg p-8 md:p-10 border border-[var(--borderLight)] space-y-8">

          {/* Title */}
          <h1
            className="text-3xl font-bold"
            style={{ color: "var(--brandColor)" }}
          >
            Enteric Organism Rapid Detection (RF / Self-collect)
          </h1>

          <hr className="border-[var(--borderLight)]" />

          {/* Key Info */}
          <div className="grid md:grid-cols-2 gap-y-4 gap-x-12 text-[var(--textDark)]">
            <div className="font-semibold">Code</div>
            <div>EORD</div>

            <div className="font-semibold">Sample Reqs</div>
            <div>RF / Stool/faecal container</div>

            <div className="font-semibold">Turnaround</div>
            <div>2 days</div>
          </div>

          {/* Special Instructions */}
          <div className="space-y-2 text-[var(--textDark)]">
            <h3 className="font-semibold">Special instructions</h3>
            <p>No special instructions</p>
            <p><span className="font-semibold">Self-collect kit:</span> Provided</p>
          </div>

          <hr className="border-[var(--borderLight)]" />

          {/* Sample Type Guide */}
          <div className="space-y-4 text-[var(--textDark)]">
            <h3 className="font-semibold">Sample type guide</h3>
            <p>RF / Stool/faecal container</p>
          </div>

          <hr className="border-[var(--borderLight)]" />

          {/* Profile Details */}
          <div className="space-y-2 text-[var(--textDark)]">
            <h3 className="font-semibold">Profile details</h3>
            <p>Detection of Bacterial, Viral and Parasitic Infection by Multiplex Real-Time PCR</p>

            <ul className="list-disc pl-6 space-y-1">
              <li><span className="font-semibold">Bacteria and Bacterial Toxins:</span> C. difficile Toxin A/B gene, Campylobacter spp., Enteroaggregative E.coli (EAEC), Enteroinvasive E.coli (EIEC)/Shigella, Enterotoxigenic E.coli (ETEC), Enteropathogenic E.coli (EPEC), Plesiomonas shigelloides, Salmonella, Shiga-toxin producing E.coli (STEC) stx1/stx2, Shiga-toxin producing E.coli (STEC) O157:H7, Vibrio cholerae, Vibrio parahaemolyticus, Vibrio vulnificus, Yersinia enterocolitica</li>
              <li><span className="font-semibold">Viruses:</span> Adenovirus 40/41, Astrovirus, Norovirus GI, Norovirus GII, Rotavirus A, Sapovirus (I, II, IV, V)</li>
              <li><span className="font-semibold">Parasites:</span> Cyclospora cayetanensis, Cryptosporidium spp., Entamoeba histolytica, Gardia lamblia</li>
            </ul>

            <p className="mt-2 text-[var(--textDark)] italic">
              This does NOT include stool for m/c/s – this needs to be requested as a separate test. Please provide two samples if this is required.
            </p>
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