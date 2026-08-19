"use client";

export default function OxidativeStressInSemen() {
  return (
    <div className="bg-white border border-gray-100 container mx-auto p-6">

      <div className="">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-4">
          Oxidative Stress In Semen
        </h1>

        {/* Intro Paragraph */}
        <p className="text-[var(--textDark)] font-medium text-lg leading-relaxed mb-6">
          There is growing evidence to support a link between oxidative stress and male infertility.
        </p>

        {/* Paragraph 1 */}
        <p className="text-[var(--textLight)] leading-relaxed text-base md:text-lg mb-6">
          It is the underlying cause of sperm DNA damage and impairs semen parameters and fertilization, adversely
          affects embryo development and is associated with reduced pregnancy rates. It may also increase the risk
          of miscarriage. High levels of ROS may be reduced by considering varicocele repair, treatment of underlying
          infections or inflammation, changes in lifestyle or with antioxidant supplements.
        </p>

        {/* Paragraph 2 */}
        <p className="text-[var(--textLight)] leading-relaxed text-base md:text-lg mb-6">
          WCC provides a comprehensive assessment of oxidative stress by combined measurement of Reactive Oxygen
          Species and Redox Potential. Please request as oxidative stress test (code ROS).
        </p>

        {/* Paragraph 3 */}
        <p className="text-[var(--textLight)] leading-relaxed text-base md:text-lg mb-10">
          The test includes combined testing for:
        </p>

        {/* Subsection 1 */}
        <h2 className="text-xl font-bold text-[var(--textDark)] mb-1">
          Chemiluminescence Assay for Reactive Oxygen Species
        </h2>
        <p className="text-[var(--textLight)] leading-relaxed text-base md:text-lg mb-6">
          Reactive Oxidative stress may be measured by a simple chemiluminescence test in semen, which measures the
          level of reactive oxygen species.
        </p>

        {/* Subsection 2 */}
        <h2 className="text-xl font-bold text-[var(--textDark)] mb-1">
          MIOXSYS Electrochemical Assay for Redox Potential
        </h2>
        <p className="text-[var(--textLight)] leading-relaxed text-base md:text-lg">
          Oxidative stress may be determined by an electrochemical assay which measures the redox potential in semen.
          This test measures the overall difference between total oxidants and antioxidants in the system.
        </p>

      </div>

    </div>
  );
}
