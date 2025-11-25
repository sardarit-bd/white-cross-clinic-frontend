"use client";

import React from "react";

export default function MycobacterialRespiratoryInvestigation() {
  const tests = [
    "Sputum for TB Culture (AFB)",
    "TB (Pleural Fluid)",
    "TB Culture",
    "TB Culture (Urine)",
    "TB Slopes – Confirmation and Sensitivity",
    "TB PCR",
    "TB NAT Molecular Test",
    "Respiratory Culture",
    "Legionella Antigen",
    "Chlamydia PCR",
  ];

  return (
    <div className="w-full bg-[#f5f7fa] py-10">
      <div className="max-w-5xl mx-auto bg-white shadow rounded-lg p-6 md:p-10">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-4">
          Mycobacterial And Respiratory Investigation
        </h1>

        <p className="text-[var(--textDark)] font-semibold mb-6">
          Susceptible - Increased Exposure Replaces Intermediate Result
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Housed in our state-of-the-art containment level 3 laboratories, the
          CL3 service offers a comprehensive Mycobacterial diagnostics service.
        </p>

        {/* Content Section */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Our service includes auramine smear microscopy, with a 24-hour
            turnaround from the time the sample arrives at the Halo, and rapid
            PCR testing to detect <i>M. tuberculosis</i> complex and Rifampicin
            resistance.
          </p>

          <p>
            The mainstay of detection is mycobacterial culture, from specimens
            including blood, tissue, early morning urine (EMU; minimum 60ml) and
            respiratory samples. Mycobacteria isolates are first examined with
            MPT64 rapid antigen testing for the preliminary identification of
            MTB; isolates are then referred to the Mycobacterial Reference
            Laboratory (MRL) for full identification and susceptibility testing.
          </p>

          <p>
            Routine culture of specimens is primarily carried out using MGIT
            liquid broth automated culture. After careful review, the laboratory
            has discontinued Löwenstein–Jensen (LJ) agar slope for routine use.
          </p>

          <p>
            The following specimens will have LJ agar slope culture in addition
            to MGIT:
          </p>

          {/* Bullets */}
          <ul className="list-disc ml-6 space-y-2">
            <li>All skin biopsies</li>
            <li>
              Any specimen where clinical details indicate possible{" "}
              <i>M. marinum</i> infection
            </li>
            <li>
              Specimens positive on <i>M. tuberculosis</i> PCR direct from sample
            </li>
            <li>
              Specimens positive on auramine stain direct from specimen
            </li>
            <li>All lung and pleural biopsies</li>
          </ul>

          <p>
            Negative cultures are reported after 6 weeks. Routine respiratory
            culture is performed for detection of respiratory pathogens and PCR
            for atypical pathogens (<i>Legionella</i>, <i>Mycoplasma</i>,
            <i>Chlamydia</i>).
          </p>
        </div>

        {/* Tests Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-[var(--textDark)] mb-4">
            Tests
          </h2>

          <div className="border rounded-lg overflow-hidden">
            <div className="bg-[#062849] text-white px-4 py-3 font-medium">
              Test Name
            </div>

            <div className="divide-y">
              {tests.map((t, idx) => (
                <div
                  key={idx}
                  className="px-4 py-3 hover:bg-gray-100 text-gray-800 cursor-pointer"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
