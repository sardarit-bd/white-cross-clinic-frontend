"use client";

export default function SpecimenRejectionCriteria() {
  return (
    <div className="w-full bg-[var(--bgLight)] py-10 pt-48">
      <div className="container mx-auto bg-white shadow-md p-8 rounded-xl">

        {/* Title */}
        <h1 className="text-3xl font-bold text-[var(--textDark)] mb-3">
          Specimen Rejection Criteria
        </h1>

        <p className="text-[var(--textDark)] mb-6 font-medium">
          Sometimes tests cannot be performed in the laboratory if samples fall short of the quality,
          volume or other eligibility criteria. In these cases, the laboratory may need to reject the
          samples, and not carry out processing.
        </p>

        <p className="text-[var(--textDark)] mb-10">
          Sometimes the laboratory is able to rectify a situation – and although turnaround times may
          be affected, it avoids having to arrange for samples to be taken again.
        </p>

        {/* Summary List */}
        <h2 className="text-2xl font-bold text-[var(--textDark)] mb-4">
          Summary List for Sample Rejection
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-[var(--textLight)]">
          <li>Incorrect sample types received:</li>
          <ul className="list-disc pl-6 space-y-1">
            <li>Basic incorrect blood tube/other sample.</li>
            <li>Samples without the appropriate preservative (e.g. acidified urine samples).</li>
            <li>Samples that are received ambient, when a frozen sample is required.</li>
            <li>
              Samples that are received unprotected from light, when they are required to be covered
              at the point of venepuncture.
            </li>
          </ul>

          <li>
            Samples in incorrect containers (e.g. cervical cytology must be a ThinPrep vial; urine
            cytology must be in a uricyte container).
          </li>
          <li>Insufficient sample received.</li>
          <li>No sample received.</li>
          <li>Labelling or form issues (mislabelled/unlabelled/no forms/no clinical information).</li>
          <li>Clotted/haemolysed/lipaemic/icteric samples.</li>
          <li>Sample is broken or has leaked in transit.</li>
          <li>
            Stability time has been exceeded. Stability time is test-dependent and also refers to
            tests that can only be carried out on certain days of the week.
          </li>
        </ul>

        {/* Quality Assurance */}
        <h2 className="text-2xl font-bold text-[var(--textDark)] my-6">Quality assurance</h2>

        <ul className="list-disc pl-6 space-y-2 text-[var(--textLight)]">
          <li>Sample contamination (e.g. being in the same bag as a leaking sample).</li>
          <li>Samples are high risk or infectious.</li>
          <li>Samples that are received in expired tubes.</li>
        </ul>

        {/* Department-specific */}
        <h2 className="text-2xl font-bold text-[var(--textDark)] my-6">Department-specific</h2>

        <ul className="list-disc pl-6 space-y-2 text-[var(--textLight)]">
          <li>Sample Reception will not accept samples packaged with needles of any kind.</li>
          <li>Haematology cannot accept frozen whole blood for testing.</li>

          <li>Coagulation cannot accept over or under filled samples for testing.</li>
          <li>Coagulation cannot accept previously frozen samples that have thawed in transit.</li>

          <li>Biochemistry cannot accept previously frozen samples that have thawed in transit.</li>
          <li>Biochemistry cannot accept samples that display antibody interference.</li>
          <li>
            Biochemistry cannot accept samples that have had separation delays/un-centrifuged samples
            that have been stored in the fridge.
          </li>
          <li>Biochemistry cannot accept paraprotein resulting in viscous samples.</li>
          <li>Biochemistry cannot accept CSF protein that is blood stained.</li>

          <li>
            Immunology cannot accept TBQ kits that:
            <ul className="list-disc pl-6 space-y-1">
              <li>Do not contain all appropriate tubes.</li>
              <li>Are incubated for more than the specified 16 hours.</li>
              <li>Have passed the incubation time period.</li>
              <li>Are over- or under-filled.</li>
            </ul>
          </li>

          <li>Microbiology cannot accept samples in non-sterile containers or in formalin.</li>

          <li>
            Referrals cannot accept samples without three points of identification for DRP testing.
          </li>
          <li>
            Referrals cannot accept samples that are not labelled by hand for blood group testing.
          </li>

          <li>
            Molecular Pathology cannot accept samples for Haemophilia testing without informed
            consent.
          </li>

          <li>Cervical Cytology cannot accept over or under filled samples for testing.</li>
          <li>
            Cervical Cytology cannot accept samples received within 3 months of the previous test in
            order to allow epithelial cells to regenerate.
          </li>

          <li>
            Urine cytology cannot accept delayed samples unless they have been refrigerated.
          </li>
        </ul>

        <p className="mt-6 text-[var(--textLight)]">
          Samples deemed to be PRECIOUS (e.g. CSF, fluid, tissue, bone marrow and paediatric samples)
          will not be discarded by the laboratory. Results will include a comment relating to the
          condition of the sample (e.g. sample unlabelled).
        </p>
      </div>
    </div>
  );
}
