"use client";

export default function TherapeuticDrugAssays() {
  return (
    <div className="w-full bg-[var(--bgLight)] py-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* MAIN CONTENT BOX */}
        <div className="bg-[var(--bgWhite)] p-6 rounded-[var(--radius-lg)] shadow-[var(--shadowCard)] mb-8">

          <h1 className="text-[var(--textDark)] text-3xl font-bold mb-4">
            Therapeutic Drug Assays
          </h1>

          <p className="text-[var(--textLight)] leading-relaxed mb-6">
            WCC’s therapeutic drug assays measure the serum level of a drug to ensure its concentration 
            is within the therapeutic range.
          </p>

          {/* First bullet group */}
          <p className="text-[var(--textDark)] font-semibold mb-3">
            There are three different collection times for Therapeutic Drug Monitoring:
          </p>

          <ul className="list-disc pl-6 text-[var(--textLight)] space-y-2 mb-6">
            <li>
              <strong className="text-[var(--textDark)]">Trough Level:</strong> Blood should be collected
              just before the next dose. Trough Levels check that the appropriate drug concentration is being maintained.
            </li>
            <li>
              <strong className="text-[var(--textDark)]">Peak Levels:</strong> Sample collection time is dependent
              on specific drug type and method of administration. Peak levels check that the drug level is not in the toxic range.
            </li>
            <li>
              <strong className="text-[var(--textDark)]">Suspected Toxicity:</strong> Blood can be collected any time.
            </li>
          </ul>

          {/* Second bullet group */}
          <p className="text-[var(--textDark)] font-semibold mb-3">
            All collections should have the following noted on the request form:
          </p>

          <ul className="list-disc pl-6 text-[var(--textLight)] space-y-2">
            <li>Dosage schedule including the amount and frequency and time of the last dose</li>
            <li>Time of specimen collection</li>
            <li>Clinical status of patient (e.g. routine, suspected toxicity)</li>
            <li>Name(s) of other drugs being taken by the patient</li>
          </ul>

        </div>

        {/* BOTTOM INFO CARD */}
        <div className="max-w-sm bg-[var(--bgWhite)] shadow-[var(--shadowCard)] p-5 rounded-[var(--radius-lg)]">
          <h3 className="text-[var(--textDark)] text-xl font-semibold mb-2">
            Therapeutic Drug Assay Tests
          </h3>

          <p className="text-[var(--textLight)] mb-4">
            Test codes, sample types, and turn-around times.
          </p>

          <a
            href="#"
            className="
              text-[var(--brandColor)]
              hover:text-[var(--brandColorDark)]
              font-medium
              transition-all
              flex items-center gap-1
            "
          >
            Read More →
          </a>
        </div>

      </div>
    </div>
  );
}
