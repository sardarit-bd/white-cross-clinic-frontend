"use client";

export default function SpermDNAFragmentation() {
  return (
    <div className="bg-white border border-gray-100 container mx-auto p-6">
      <div className="">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-4">
          Sperm DNA Fragmentation
        </h1>

        {/* Intro Paragraph */}
        <p className="text-[var(--textLight)] text-lg leading-relaxed mb-6">
          High sperm DNA fragmentation is associated with reduced natural pregnancy rates and assisted conception
          pregnancy rates as well as live birth rates. Sperm DNA fragmentation also leads to higher miscarriage rates, as
          published in the ESHRE Recurrent Pregnancy Loss 2017 Guideline. High levels of DNA fragmentation may be
          reduced by considering varicocele repair, treatment of underlying infections or inflammation, changes in
          lifestyle, or with antioxidant supplements.
        </p>

        <p className="text-[var(--textLight)] text-lg leading-relaxed mb-10">
          When requesting Sperm DNA Fragmentation there are two options. Please specify whether the request is for sperm
          DNA fragmentation by SCSA or COMET.
        </p>

        {/* Section 1: SCSA */}
        <h2 className="text-2xl font-bold text-[var(--textDark)] mb-2">
          Sperm Chromatin Structure Assay (SCSA®) [SEXT]
        </h2>

        <p className="text-[var(--textLight)] leading-relaxed text-base md:text-lg mb-6">
          This test has the ability to measure large numbers of cells (between 5,000 and 10,000 sperm), rapidly in an
          ejaculate. The SCSA® test monitors the changes in fluorescence of a probe, acridine orange, to detect both
          single and double DNA strand breaks using flow cytometry.
        </p>

        <p className="text-[var(--textLight)] leading-relaxed text-base md:text-lg mb-6">
          It has been developed using human and animal models over the last 35 years and is one of the most statistically
          robust tests available for sperm DNA fragmentation. It is a standardized, validated CLIA approved test with
          high reproducibility and low variability. The test requires a minimum sperm count of approximately 0.1
          million/ml.
        </p>

        {/* Section 2: COMET */}
        <h2 className="text-2xl font-bold text-[var(--textDark)] mb-2">
          Sperm COMET® Assay [CMET]
        </h2>

        <p className="text-[var(--textLight)] leading-relaxed text-base md:text-lg mb-6">
          Exact® tests, powered by SpermComet® technology measure sperm DNA damage. The Exact range of tests are
          available via healthcare professionals only. Sperm DNA can be damaged when sperm are being made in the testes
          or as they mature before ejaculation. This damage breaks the DNA into fragments, so sperm DNA tests are also
          known as sperm DNA fragmentation tests. Men with high levels of sperm DNA damage are less likely to get their
          partner pregnant and have increased risk of miscarriage. Even if semen analysis results are ‘normal’, the sperm
          DNA could be damaged and therefore poor quality. Sperm DNA damage can reduce your chances of having a baby. The
          Comet® assay can measure both single and double strand breaks. Only a small number of sperm (a minimum of
          5,000) sperm are required to perform the assay.
        </p>

        {/* Section 3: Instructions */}
        <h2 className="text-2xl font-bold text-[var(--textDark)] mb-2">
          Instructions for collection of sperm DNA specimens
        </h2>

        <p className="text-[var(--textLight)] leading-relaxed text-base md:text-lg mb-6">
          Sperm DNA Fragmentation is not part of the Comprehensive Semen Analysis, and needs to be requested as a
          separate test, test code SEXT. Semen samples ideally need to be frozen as soon as possible after liquefaction,
          but not longer than 60 minutes post-ejaculation. Samples must be snap-frozen for Sperm DNA Fragmentation
          testing.
        </p>

        <p className="text-[var(--textLight)] leading-relaxed text-base md:text-lg">
          If samples are prepared by another laboratory, two cryovials containing not less than 0.25 ml of semen are
          required. Frozen samples can be sent to WCC, or collected by WCC by arrangement, and must be accompanied with
          relevant patient details, the sperm count and a GDPR consent form.
        </p>

      </div>
    </div>
  );
}
