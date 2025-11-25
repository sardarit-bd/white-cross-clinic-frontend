"use client";

export default function RedToppedBoricAcidPage() {
  return (
    <div className="min-h-screen bg-[var(--bgLight)] py-16">
      <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-sm">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--brandColor)] mb-6">
          Red topped boric acid containers
        </h1>

        {/* INTRO */}
        <p className="text-[var(--textDark)] mb-6 leading-relaxed">
          The preservative reduces the overgrowth of organisms and, to a lesser extent,
          reduces the degradation of white cells during transit leading to a more accurate
          laboratory result for both microscopy and culture.
        </p>

        {/* SUBTITLE */}
        <h2 className="text-xl font-semibold text-[var(--textDark)] mb-4">
          Red Topped Boric Acid Containers Are For Requests For Urine Microscopy
          And Culture (MC&S) ONLY. Boric Acid Container Should NOT Be Used For:
        </h2>

        {/* LIST */}
        <ul className="list-disc pl-6 space-y-2 text-[var(--textDark)] mb-8">
          <li>Other urine microbiology tests (e.g. investigations for Chlamydia, Mycobacterium,
              Schistosomiasis, urinary antigen testing)</li>
          <li>Urine samples being analyzed by PCR methodology</li>
          <li>Urine samples for non-microbiology tests (e.g. biochemistry, virology, pregnancy testing)</li>
          <li>Very small urine volumes (&lt;20ml) e.g. neonates</li>
          <li>
            Use of urinary dipsticks: boric acid may inhibit leukocyte esterase dipstick readings;
            dipstick testing performed on a sample in a boric acid container should be interpreted with caution.
          </li>
        </ul>

        {/* SECTION BLOCK */}
        <p className="text-[var(--textDark)] mb-6 leading-relaxed">
          If additional tests are required in addition to urine microscopy and culture,
          an additional sample in a white-topped universal container should be sent. In this case,
          it is advised that the mid-stream clean catch urine is collected in a sterile bowl and then transferred
          to the necessary specimen containers.
        </p>

        <p className="text-[var(--textDark)] leading-relaxed">
          If, despite these measures, a patient has recurrent mixed growth reports from multiple urines,
          it may suggest that your patient has abnormal urinary tract architecture, immunosuppression or
          other non-infective cause that requires different laboratory investigations or referral to a specialist.
          If further information is required, please telephone the laboratory and ask to discuss the case with one
          of our consultant Microbiologists.
        </p>

      </div>
    </div>
  );
}
