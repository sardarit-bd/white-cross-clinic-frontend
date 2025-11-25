"use client";

export default function FungalTestCodes() {
  return (
    <div className="w-full bg-[var(--bgLight)] py-10">
      <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-[var(--shadowCard)]">

        {/* Title */}
        <h1 className="text-3xl font-bold text-[var(--textDark)] mb-6">
          Fungal test codes
        </h1>

        {/* Intro */}
        <p className="text-[var(--textLight)] mb-8 leading-relaxed">
          PCR methods for the detection of dermatophyte fungal cultures use 
          high-sensitivity PCR testing. This reduces the overall turnaround 
          time by up to 3 weeks, and increases the detection of fungal 
          infection compared to combined microscopy and culture. The specific 
          targeting of pathogens associated with superficial fungal infection 
          is also increased, preventing over-reporting of insignificant fungi 
          that are contaminants.
        </p>

        {/* Section Title */}
        <h2 className="text-2xl font-bold text-[var(--textDark)] mb-4">
          Fungal test codes
        </h2>

        {/* ----------- Superficial Infection ----------- */}
        <h3 className="text-xl font-semibold text-[var(--textDark)] mt-8 mb-3">
          Investigation of superficial fungal infection
        </h3>

        <div className="border-t pt-4 space-y-4">

          <div className="flex gap-4">
            <span className="font-semibold w-32 text-[var(--textDark)]">Code</span>
            <span className="text-[var(--textLight)]">DERM</span>
          </div>

          <div className="flex gap-4">
            <span className="font-semibold w-32 text-[var(--textDark)]">
              Sample type
            </span>
            <span className="text-[var(--textLight)]">Nail, Hair, Skin.</span>
          </div>

          <div className="flex gap-4">
            <span className="font-semibold w-32 text-[var(--textDark)]">
              Turnaround
            </span>
            <span className="text-[var(--textLight)] leading-relaxed">
              72 hours for interim PCR report, and 7 days for final culture 
              (unless extended for significant growth).
            </span>
          </div>

          <div className="flex gap-4">
            <span className="font-semibold w-32 text-[var(--textDark)]">
              Notes
            </span>
            <ul className="text-[var(--textLight)] list-disc ml-6 space-y-2">
              <li>Dermatophyte PCR replaces microscopy for Nails, Hair, and Skin (72-hour TAT).</li>
              <li>Non-dermatophyte culture needs 7 days instead of 3 weeks.</li>
              <li>Microscopy confirms significance of rare fungi.</li>
              <li>No change in test price.</li>
            </ul>
          </div>
        </div>

        {/* ----------- Non-superficial Infection ----------- */}
        <h3 className="text-xl font-semibold text-[var(--textDark)] mt-10 mb-3">
          Investigation of non-superficial fungal infection
        </h3>

        <div className="border-t pt-4 space-y-4">

          <div className="flex gap-4">
            <span className="font-semibold w-32 text-[var(--textDark)]">Code</span>
            <span className="text-[var(--textLight)]">FUN</span>
          </div>

          <div className="flex gap-4">
            <span className="font-semibold w-32 text-[var(--textDark)]">
              Sample type
            </span>
            <span className="text-[var(--textLight)]">
              All specimens except Skin, Hair, and Nail.
            </span>
          </div>

          <div className="flex gap-4">
            <span className="font-semibold w-32 text-[var(--textDark)]">
              Details
            </span>
            <span className="text-[var(--textLight)] leading-relaxed">
              7 days (non-sterile e.g., ear swab) and 3 weeks (sterile e.g., CSF).
            </span>
          </div>

          <div className="flex gap-4">
            <span className="font-semibold w-32 text-[var(--textDark)]">
              Comments
            </span>
            <ul className="text-[var(--textLight)] list-disc ml-6 space-y-2">
              <li>
                Non-sterile cultures are performed on Sabouraud’s agar plates for 7 days with no microscopy.
              </li>
              <li>
                Sterile samples have microscopy (Calcofluor) reported on the day of processing and culture 
                incubated for 21 days.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
