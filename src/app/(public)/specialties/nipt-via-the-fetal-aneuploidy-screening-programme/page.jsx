"use client";

export default function NIPTPage() {
  return (
    <div className="min-h-screen bg-[var(--bgLight)] py-16">
      <div className="container mx-auto px-4">

        {/* ================= HEADER SECTION ================= */}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-6">
          NIPT Via The Fetal Aneuploidy Screening Programme
        </h1>

        <p className="text-[var(--textLight)] leading-relaxed mb-4">
          NIPT has been added to the existing NHS screening pathway for Down syndrome,
          Edwards syndrome and Patau syndrome as part of an evaluative rollout.
        </p>

        <p className="text-[var(--textLight)] leading-relaxed mb-4">
          NIPT is now offered following a higher chance result (between 1 in 2 and 1 in 150)
          from either the NHS combined or NHS quadruple test in both singleton and twin pregnancies.
        </p>

        <p className="text-[var(--textLight)] leading-relaxed mb-4">
          WCC Genetics perform this testing within Health Services Laboratories (HSL) who are part
          of the North Thames Genomic Laboratory Hub (GLH).
        </p>

        <p className="text-[var(--textLight)] leading-relaxed mb-10">
          The following information is provided for midwives and healthcare professionals within
          the geographical region assigned to HSL.
        </p>

        {/* ================= NHS FASP PATHWAY ================= */}
        <h2 className="text-2xl font-bold text-[var(--textDark)] mb-4">
          NHS FASP Pathway
        </h2>

        <p className="text-[var(--textLight)] leading-relaxed mb-4">
          Following a higher chance result from the NHS combined or NHS quadruple test, women must
          have a discussion with a healthcare professional about their results. Women can choose to have:
        </p>

        <ul className="list-disc list-inside text-[var(--textLight)] mb-6 space-y-2">
          <li>no further testing</li>
          <li>NIPT screening</li>
          <li>
            prenatal diagnosis (PND), such as chorionic villus sampling (CVS) or amniocentesis
          </li>
        </ul>

        <p className="text-[var(--textLight)] leading-relaxed mb-6">
          For women choosing to have NIPT, the options available to screen for are:
        </p>

        <ul className="list-disc list-inside text-[var(--textLight)] mb-10 space-y-2">
          <li>T21, T18 and T13</li>
          <li>T21 only</li>
          <li>T18 and T13 only</li>
        </ul>

        {/* ================= ELIGIBILITY ================= */}
        <h2 className="text-2xl font-bold text-[var(--textDark)] mb-4">
          Eligibility
        </h2>

        <h3 className="text-xl font-semibold text-[var(--textDark)] mb-2">
          Inclusions
        </h3>

        <ul className="list-disc list-inside text-[var(--textLight)] space-y-2 mb-8">
          <li>
            higher chance result for T21 or joint higher chance result for T18/T13 from the NHS combined test
          </li>
          <li>higher chance result for T21 from the NHS quadruple test</li>
          <li>singleton and twin pregnancies</li>
          <li>up to 21 weeks + 6 days of pregnancy</li>
        </ul>

        <p className="text-[var(--textLight)] mb-10">
          Women with IVF or donor egg pregnancies are eligible for NIPT. The relevant details must be
          recorded accurately on the request form.
        </p>

        {/* ================= EXCLUSIONS ================= */}
        <h3 className="text-xl font-semibold text-[var(--textDark)] mb-3">
          Exclusions
        </h3>

        <ul className="list-disc list-inside text-[var(--textLight)] space-y-2 mb-8">
          <li>
            lower chance result for T21, T18 or T13 from NHS combined or quadruple test
          </li>
          <li>higher multiple pregnancies (triplets or more)</li>
          <li>after 21+6 weeks of pregnancy</li>
        </ul>

        <p className="text-[var(--textLight)] mb-6 font-semibold">
          NIPT cannot be offered when a pregnant woman has:
        </p>

        <ul className="list-disc list-inside text-[var(--textLight)] space-y-2 mb-10">
          <li>cancer unless in remission</li>
          <li>blood transfusion within last 4 months</li>
          <li>bone marrow or organ transplant</li>
          <li>immunotherapy in pregnancy</li>
          <li>stem cell therapy</li>
          <li>vanished twin pregnancy</li>
          <li>
            Down’s syndrome OR balanced translocation/mosaicism of T21/T18/T13
          </li>
        </ul>

        {/* ================= BLOOD SAMPLING ================= */}
        <h2 className="text-2xl font-bold text-[var(--textDark)] mb-4">
          Blood Sampling And Transport
        </h2>

        <h3 className="text-xl font-semibold text-[var(--textDark)] mb-2">
          Blood Sampling
        </h3>

        <p className="text-[var(--textLight)] leading-relaxed mb-4">
          The process for obtaining an NIPT blood sample is as outlined below:
        </p>

        <ol className="list-decimal list-inside text-[var(--textLight)] space-y-2 mb-8">
          <li>Take blood using stabilising tube provided by laboratory.</li>
          <li>Invert immediately at least 10 times.</li>
          <li>Restart if a full sample cannot be obtained.</li>
          <li>Contact the lab after two failed attempts.</li>
          <li>A minimum of 7ml is required.</li>
        </ol>

        <p className="text-[var(--textLight)] mb-10">NIPT samples must not be refrigerated.</p>

        {/* ================= REPORTING RESULTS ================= */}
        <h2 className="text-2xl font-bold text-[var(--textDark)] mb-4">
          Reporting NIPT Results
        </h2>

        <p className="text-[var(--textLight)] mb-6">
          Women who receive a higher chance NIPT result must be offered:
        </p>

        <ul className="list-disc list-inside text-[var(--textLight)] space-y-2 mb-8">
          <li>PND</li>
          <li>no further testing</li>
        </ul>

        <p className="text-[var(--textLight)] leading-relaxed mb-6">
          In some cases, NIPT may fail to give a result. Providers must then offer:
        </p>

        <ul className="list-disc list-inside text-[var(--textLight)] space-y-2 mb-10">
          <li>one further sample</li>
          <li>PND</li>
          <li>no further testing</li>
        </ul>

        {/* ================= NIPT RESULTS ================= */}
        <h2 className="text-2xl font-bold text-[var(--textDark)] mb-4">
          NIPT Results
        </h2>

        <p className="text-[var(--textLight)] mb-6">
          NIPT results are reported as lower chance or higher chance. Results depend solely on the
          conditions selected for screening.
        </p>

        <ul className="list-disc list-inside text-[var(--textLight)] space-y-2 mb-8">
          <li>T21, T18 and T13</li>
          <li>T21 only</li>
          <li>T18 and T13 only</li>
        </ul>

        <p className="text-[var(--textLight)] leading-relaxed">
          In twin pregnancies, the higher chance result report will state that one or both babies may
          have the screened condition.
        </p>

      </div>
    </div>
  );
}
