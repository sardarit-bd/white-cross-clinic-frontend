"use client";

export default function MolecularGeneticsPage() {
  return (
    <div className="min-h-screen bg-[var(--bgLight)] py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-xl p-8 md:p-12">

        {/* PAGE TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-6">
          Molecular Genetics
        </h1>

        <p className="text-[var(--textLight)] text-lg mb-10">
          Sample requirements, clinical details, and referral tests.
        </p>

        {/* SECTION: Molecular Genetic Samples */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[var(--textDark)] mb-4">
            Molecular Genetic Samples
          </h2>

          <p className="text-[var(--textLight)] leading-relaxed">
            Whole blood collected in EDTA should be sent to the laboratory
            between 4–28°C within 48 hours. Long term storage should be at
            2–8°C. Extracted DNA samples should be sent to the laboratory between
            4–28°C.
          </p>
        </section>

        {/* SECTION: Clinical Details */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[var(--textDark)] mb-4">
            Clinical Details
          </h2>

          <p className="text-[var(--textLight)] leading-relaxed">
            Clinical details can be extremely important for clinical
            interpretation of a molecular genetic test. For example, the clinical
            comments accompanying a cystic fibrosis screening report will vary
            depending on whether the patient is a potential gamete donor or a
            person exhibiting a cystic fibrosis phenotype. It may also be
            crucial, where a mutation has already been shown to be segregating in
            a family, to be provided with information concerning the mutation and
            a family pedigree to ensure the correct analysis is performed and
            reliable risk figures calculated.
          </p>
        </section>

        {/* SECTION: Referral Tests */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-[var(--textDark)] mb-4">
            Referral Tests
          </h2>

          <p className="text-[var(--textLight)] leading-relaxed mb-4">
            To meet the increasing range and complexity of genetic testing, we
            have developed an excellent collaboration with other specialist
            laboratories.
          </p>

          <p className="text-[var(--textLight)] leading-relaxed mb-4">
            Tests marked GENE in the A–Z test directory are sent to these
            laboratories within our network and have a fixed price.
          </p>

          <p className="text-[var(--textLight)] leading-relaxed">
            GENE panel composition may change throughout the year to reflect new
            and improved developments. Turnaround times may be longer if
            follow-up studies are required.
          </p>
        </section>
      </div>
    </div>
  );
}
