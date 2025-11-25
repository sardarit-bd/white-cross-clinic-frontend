"use client";

export default function UrineCultureProcessing() {
  return (
    <div className="bg-[var(--bgLight)] py-20">
      <div className="container mx-auto px-4 lg:px-10">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-6">
          Urine Culture Processing and Results
        </h1>

        {/* SECTION 1 */}
        <div className="space-y-4 text-[var(--textLight)] leading-relaxed mb-10">
          <p>
            All urine culture testing is performed using manual methods. The culture
            pathway adheres to national guidance and is a fully UKAS-accredited method.
          </p>

          <p>
            Manual testing allows a larger amount of urine to be tested than previous
            automated methods, which enables the laboratory to detect lower bacterial
            counts (as low as 10³ cfu/mL) and also facilitates the follow-up of
            significant organisms grown from mixed cultures.
          </p>

          <p>
            If the culture result is indicative of urinary tract infection, antibiotic
            susceptibilities will be tested from the culture growth and will be
            available 24 hours after the culture result. ‘Direct sensitivities’ are no
            longer performed as this method is not inoculum-controlled and is not
            UKAS-accredited.
          </p>

          <p>
            Culture results should be interpreted alongside the microscopy WBC count
            and clinical signs and symptoms. Significant growth in the absence of
            pyuria may be suggestive of contamination rather than true infection.
            However, WBC degrade rapidly in urine, and delays between collection and
            microscopy may cause falsely low readings.
          </p>
        </div>

        {/* SUBTITLE */}
        <h2 className="text-2xl font-bold text-[var(--textDark)] mb-4">
          What does the result (No significant growth) mean?
        </h2>

        <div className="space-y-4 text-[var(--textLight)] leading-relaxed mb-10">
          <p>
            The amount of growth falls below the threshold for urinary tract infection
            (&lt; 10³ cfu/mL). There is no laboratory evidence of urinary tract
            infection.
          </p>

          <p>
            Occasionally, this may be seen in early infection or partially treated UTI.
            A repeat specimen is advised if symptoms persist.
          </p>
        </div>


        {/* SUBTITLE */}
        <h2 className="text-2xl font-bold text-[var(--textDark)] mb-4">
          What does the result (Mixed growth doubtful significance) mean?
        </h2>

        <div className="space-y-4 text-[var(--textLight)] leading-relaxed mb-10">
          <p>
            This means the culture revealed a heavy growth of at least 3 organisms with
            no predominating organism. This usually represents contamination during
            urine collection.
          </p>

          <p>
            It does not exclude urinary tract infection, but it is not possible to
            determine the causative organism among the mixture.
          </p>

          <p>
            If multiple mixed-growth results are received, consider:
          </p>

          <ul className="list-disc pl-8 space-y-3">
            <li>
              <span className="font-semibold text-[var(--textDark)]">
                Poor collection technique —
              </span>{" "}
              contamination from surrounding flora commonly affects results. Optimal
              mid-stream catch technique is vital.
            </li>
            <li>
              <span className="font-semibold text-[var(--textDark)]">
                Delay between sample collection & lab processing —
              </span>{" "}
              delays allow contaminating organisms to multiply, leading to false
              results.
            </li>
          </ul>
        </div>


        {/* SECTION: RED TOPPED */}

        <div className="bg-white border border-[var(--borderLight)] shadow-sm rounded-lg p-6 md:p-8 mb-10">
          <h2 className="text-2xl font-bold text-[var(--textDark)] mb-4">
            Red Topped Boric Acid Containers
          </h2>

          <p className="text-[var(--textLight)] leading-relaxed mb-4">
            The preservative reduces organism overgrowth and degradation of white cells
            during transit, making culture and microscopy more accurate.
          </p>

          <p className="font-semibold text-[var(--textDark)] mb-2">
            These containers are ONLY for:
          </p>

          <ul className="list-disc pl-8 space-y-2 text-[var(--textLight)]">
            <li>Urine microscopy and culture (MC&S)</li>
          </ul>

          <p className="font-semibold text-[var(--textDark)] mt-6 mb-2">
            These containers must NOT be used for:
          </p>

          <ul className="list-disc pl-8 space-y-2 text-[var(--textLight)]">
            <li>
              Urine tests for Chlamydia, Mycobacterium, Schistosomiasis, or antigen tests
            </li>
            <li>Urine samples analysed by PCR</li>
            <li>Biochemistry, virology, or pregnancy tests</li>
            <li>Very small urine volumes (e.g., neonates)</li>
          </ul>

          <p className="text-[var(--textLight)] leading-relaxed mt-6">
            Boric acid may inhibit leukocyte dipstick readings. Dipstick results from
            these containers should be interpreted with caution.
          </p>
        </div>


        {/* FINAL NOTE */}
        <p className="text-[var(--textLight)] leading-relaxed mb-10">
          If a patient continues to have recurrent mixed growth from multiple urine
          samples, this may suggest underlying urinary tract structural abnormality,
          immunosuppression, or another non-infective cause. Contact the laboratory to
          discuss the case with a consultant Microbiologist if needed.
        </p>
      </div>
    </div>
  );
}
