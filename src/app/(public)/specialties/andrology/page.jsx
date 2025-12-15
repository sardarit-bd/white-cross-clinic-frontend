"use client";

import Link from "next/link";

export default function AndrologyPage() {
  return (
    <div className="container mx-auto px-6 md:px-10 py-10">
      
      {/* Main info card */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-md p-6 md:p-10 mb-10">
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-4">
          Andrology
        </h1>

        {/* Subheading */}
        <p className="text-[var(--textDark)] font-medium text-lg leading-relaxed mb-6">
          WCC Andrology division focuses on the single most important factor determining a man’s fertility potential – 
          the production of healthy sperm.
        </p>

        {/* Paragraph 1 */}
        <p className="text-[var(--textLight)] leading-relaxed text-base md:text-lg mb-6">
          A semen analysis, which provides information about sperm count, motility and morphology, 
          has classically been used as the marker of male fertility potential. However, there are other 
          parameters given in a semen analysis that are often neglected or overlooked; these may indicate 
          important pathologies, such as infection, prostatic disease, immunological infertility, retrograde ejaculation, 
          malformation or obstruction of the genital tract, tumour, and congenital or endocrine disorders.
        </p>

        {/* Paragraph 2 */}
        <p className="text-[var(--textLight)] leading-relaxed text-base md:text-lg mb-6">
          Early diagnosis of the male factor is important in order to detect any underlying pathology, to determine 
          the extent of infertility, and to ensure appropriate treatment. It may also avoid unnecessary investigations 
          for the female partner, particularly if her age is a limiting factor.
        </p>

        {/* Paragraph 3 */}
        <p className="text-[var(--textLight)] leading-relaxed text-base md:text-lg mb-6">
          For men who have had a vasectomy, clearance should only be given when there is no evidence of presence of 
          sperm in two consecutive semen samples. It is therefore vital to ensure that results are reported according to 
          best practice guidelines. Special clearance may be given at the doctor’s discretion when there are persistent 
          non-motile sperm present.
        </p>

        {/* Section 2 Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--textDark)] mt-10 mb-4">
          Guidelines for Producing Samples
        </h2>

        {/* Paragraph 4 */}
        <p className="text-[var(--textLight)] leading-relaxed text-base md:text-lg mb-6">
          Ideally semen samples should be produced on-site at WCC’s Patient Reception at 76 Wimpole Street, London. 
          Patients should abstain from ejaculation for 2–3 days before the test (but no less than 2 days and no longer 
          than 5 days).
        </p>

        {/* Paragraph 5 */}
        <p className="text-[var(--textLight)] leading-relaxed text-base md:text-lg mb-6">
          This requirement is important for semen analyses and post-vasectomy analyses to ensure reliability of results. 
          It is possible that samples that do not comply with guidelines for abstinence and collection may not be able 
          to be processed. All semen samples must be produced directly into the sterile containers provided by WCC. 
          All containers are weighed and batch tested for sperm cytotoxicity. In exceptional circumstances when semen 
          samples are produced off-site, they can only be accepted by the Andrology Department in sample containers 
          provided by WCC.
        </p>

        {/* Paragraph 6 */}
        <p className="text-[var(--textLight)] leading-relaxed text-base md:text-lg">
          WHO 2010 guidelines state that two semen analyses should be performed before any diagnosis is confirmed. 
          This may require requests for two (separate) semen analyses.
        </p>

      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 1 */}
        <div className="bg-white border border-gray-200 rounded-md p-6 shadow-sm flex flex-col">
          <h3 className="text-xl font-bold text-[var(--textDark)] mb-3">
            Andrology: Pathology And Services
          </h3>

          <p className="text-[var(--textLight)] text-base leading-relaxed flex-grow">
            Routine tests, and tests by special arrangement.
          </p>

          <Link
            href="/specialties/andrology-pathology-and-services"
            className="mt-4 inline-block font-semibold text-[var(--brandColor)] hover:underline"
          >
            Read More →
          </Link>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-gray-200 rounded-md p-6 shadow-sm flex flex-col">
          <h3 className="text-xl font-bold text-[var(--textDark)] mb-3">
            Oxidative Stress In Semen
          </h3>

          <p className="text-[var(--textLight)] text-base leading-relaxed flex-grow">
            There is growing evidence to support a link between oxidative stress and male infertility.
          </p>

          <Link
            href="/specialties/oxidative-stress-in-semen"
            className="mt-4 inline-block font-semibold text-[var(--brandColor)] hover:underline"
          >
            Read More →
          </Link>
        </div>

      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        
        {/* Card 1 */}
        <div className="bg-white border border-gray-200 rounded-md p-6 shadow-sm flex flex-col">
          <h3 className="text-xl font-bold text-[var(--textDark)] mb-3">
            Sperm DNA fragmentation
          </h3>

          <p className="text-[var(--textLight)] text-base leading-relaxed flex-grow">
            High sperm DNA fragmentation is associated with reduced natural pregnancy rates and assisted conception pregnancy rates as well as live birth rates.
          </p>

          <Link
            href="/specialties/sperm-dna-fragmentation"
            className="mt-4 inline-block font-semibold text-[var(--brandColor)] hover:underline"
          >
            Read More →
          </Link>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-gray-200 rounded-md p-6 shadow-sm flex flex-col">
          <h3 className="text-xl font-bold text-[var(--textDark)] mb-3">
           Sperm aneuploidy
          </h3>

          <p className="text-[var(--textLight)] text-base leading-relaxed flex-grow">
            Sperm with a high rate of aneuploidy have a negative impact on pregnancy rate and are associated with recurrent pregnancy loss.
          </p>

          <Link
            href="/specialties/sperm-aneuploidy"
            className="mt-4 inline-block font-semibold text-[var(--brandColor)] hover:underline"
          >
            Read More →
          </Link>
        </div>

      </div>
    </div>
  );
}
