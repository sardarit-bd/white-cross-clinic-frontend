"use client";

export default function SpermAneuploidy() {
  return (
    <div className="bg-white border border-gray-100 container mx-auto p-6">
      <div className="">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-4">
          Sperm Aneuploidy
        </h1>

        {/* Subheading */}
        <p className="text-[var(--textDark)] font-medium text-lg leading-relaxed mb-6">
          Sperms with a high rate of aneuploidy have a negative impact on pregnancy rate and are associated
          with recurrent pregnancy loss.
        </p>

        {/* Paragraph 1 */}
        <p className="text-[var(--textLight)] leading-relaxed text-base md:text-lg mb-6">
          Chromosomal abnormalities may be somatic in origin, in which case they can be detected by a simple blood
          karyotype analysis. However, most sperm chromosome anomalies arise as a result of errors during meiosis,
          which cannot be detected by a blood karyotype analysis. These anomalies can only be detected by looking at
          the sperm chromosomes directly. Studies have shown that sperm with a high rate of aneuploidy have a
          negative impact on pregnancy rate and are associated with recurrent pregnancy loss.
        </p>

        {/* Paragraph 2 */}
        <p className="text-[var(--textLight)] leading-relaxed text-base md:text-lg mb-6">
          This test uses fluorescent in situ hybridisation (FISH) to label individual chromosomes with specific probes.
          Hundreds of sperm are assessed from one ejaculate. There are limitations to the test as only 5 probes are
          currently used routinely for analysis (three of the 22 autosomes: chromosomes 13, 18 and 21, and the sex
          chromosomes, X and Y), although others are available upon specific request. The results are reported showing
          incidence of disomy or nullisomy for each of the autosomes and for both sex chromosomes. A sex chromosome
          ratio is also reported. It is CE marked.
        </p>

        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--textDark)] mt-10 mb-4">
          Instructions For Collection Of Sperm Aneuploidy Specimens
        </h2>

        {/* Paragraph 3 */}
        <p className="text-[var(--textLight)] leading-relaxed text-base md:text-lg mb-6">
          Sperm Aneuploidy testing is not part of the Comprehensive Semen Analysis and needs to be requested as a
          separate test, test code SPPL. Semen samples ideally need to be frozen as soon as possible after liquefaction,
          but not longer than 60 minutes post ejaculation. Samples must be cryopreserved in TYB for Sperm Aneuploidy.
        </p>

        {/* Paragraph 4 */}
        <p className="text-[var(--textLight)] leading-relaxed text-base md:text-lg mb-6">
          If samples are prepared by another laboratory, two cryovials containing not less than 0.25 ml of semen are
          required. Frozen samples can be sent to WCC, or collected by WCC by arrangement, and must be accompanied with
          relevant patient details, the sperm count and a GDPR consent form.
        </p>

        {/* Paragraph 5 */}
        <p className="text-[var(--textLight)] leading-relaxed text-base md:text-lg">
          A count of a minimum 1 million/ml is required for accurate DNA and aneuploidy reporting.
        </p>

      </div>
    </div>
  );
}
