"use client";
import React from "react";

export default function ThinPrepBrushProtocol() {
  return (
    <div className="min-h-screen bg-[var(--bgLight)] py-10">
      <div className="container mx-auto px-6 lg:px-10">

        {/* PAGE HEADER */}
        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[var(--brandColor)] mb-10">
          <h1 className="text-3xl font-bold text-[var(--textDark)] mb-3">
            ThinPrep® PAP Test Cervex Brush Protocol
          </h1>

          <h2 className="text-[var(--textDark)] font-semibold uppercase text-sm tracking-wide mb-4">
            Prepare all equipment before starting the procedure
          </h2>

          <ul className="list-disc pl-5 text-[var(--textLight)] leading-relaxed space-y-2">
            <li>Note expiry date on sample collection vial. Do not use expired vials.</li>
            <li>Ensure the entire plastic seal is removed from the lid of the vial and discarded.</li>
            <li>
              Complete patient details on both the request form and the vial. Specimens may be
              returned or discarded if details are missing.
            </li>
            <li>Remove the lid from the vial before taking the sample.</li>
            <li>Use of lubricant is not recommended.</li>
          </ul>
        </div>

        {/* DO / DONT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* DO CARD */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-[var(--borderLight)]">
            <h2 className="text-2xl font-semibold text-[var(--brandColor)] mb-4">
              Do
            </h2>

            <ul className="list-disc pl-5 text-[var(--textLight)] leading-relaxed space-y-2">
              <li>If excessive mucus is present, this should be gently removed before sampling.</li>
              <li>
                Use either the Cervex Brush (broom-like device) on its own or a Plastic spatula +
                endocervical brush combination.
              </li>
              <li>
                Rotate the Cervex Brush 5 times clockwise. Rotate the Plastic spatula 360 degrees and
                the endocervical brush through one quarter to one half turn.
              </li>
              <li>Immediately rinse the collected material into the vial.</li>
              <li>
                Replace the lid and tighten so the black torque line on the cap passes the black torque
                line on the vial to avoid leakage.
              </li>
              <li>
                Keep the unlabelled portion of the sample vial free of labels so content can be seen.
              </li>
              <li>If barcoded labels are used they must be applied horizontally around the vial.</li>
              <li>Samples should be sent to the laboratory without delay.</li>
            </ul>
          </div>

          {/* DONT CARD */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-[var(--borderLight)]">
            <h2 className="text-2xl font-semibold text-red-600 mb-4">
              Don’t
            </h2>

            <ul className="list-disc pl-5 text-[var(--textLight)] leading-relaxed space-y-2">
              <li>DO NOT leave the head of the Cervex Brush in the vial.</li>
              <li>DO NOT routinely clean the cervix or take a cervical swab before sampling.</li>
              <li>An endocervical brush should never be used alone.</li>
              <li>DO NOT use a wooden spatula under any circumstances.</li>
              <li>DO NOT leave the collection device sitting in the vial whilst dealing with the patient.</li>
              <li>DO NOT over-tighten the lid.</li>
              <li>DO NOT place multiple labels vertically on the vial.</li>
              <li>DO NOT use expired vials.</li>
              <li>
                DO NOT delay sending vials to the laboratory. The sample needs to be processed within
                3 weeks of collection.
              </li>
              <li>
                DO NOT use excessive lubricant – avoid if possible.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
