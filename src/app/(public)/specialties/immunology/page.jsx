"use client";

export default function ImmunologyPage() {
  return (
    <div className="min-h-screen bg-[var(--bgLight)] pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8">

        {/* PAGE TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-4">
          Immunology
        </h1>

        {/* INTRO DESCRIPTION */}
        <p className="text-[var(--textDark)] leading-relaxed font-medium mb-6">
          WCC’s Immunology department provides a comprehensive testing service for
          immunological and allergic conditions, using the latest available ELISA
          platforms, immunofluorescent digital microscopy, ISAC and blot techniques.
        </p>

        {/* MAIN CONTENT */}
        <div className="space-y-6 text-[var(--textDark)] leading-relaxed">
          <p>
            A semen analysis, which provides information about sperm count, motility
            and morphology, has classically been used as the marker of male fertility
            potential. However, there are other parameters given in a semen analysis
            that are often neglected or overlooked; these may indicate important
            pathologies, such as infection, prostatic disease, immunological
            infertility, retrograde ejaculation, malformation or obstruction of the
            genital tract, tumor, and congenital or endocrine disorders.
          </p>

          <p>
            Early diagnosis of the male factor is important in order to detect any
            underlying pathology, to determine the extent of infertility, and to
            ensure appropriate treatment. It may also avoid unnecessary
            investigations for the female partner, particularly if her age is a
            limiting factor.
          </p>

          <p>
            For men who have had a vasectomy, clearance should only be given when
            there is no evidence of presence of sperm in two consecutive semen
            samples. It is therefore vital to ensure that results are reported
            according to best practice guidelines. Special clearance may be given at
            the doctor’s discretion when there are persistent non-motile sperm
            present.
          </p>
        </div>

        {/* CARDS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">

          {/* CARD 1 */}
          <div className="bg-white rounded-xl shadow-[var(--shadowCard)] p-6 border border-[var(--borderLight)]">
            <h2 className="text-xl font-semibold text-[var(--textDark)] mb-2">
              Tropical And Travel Related Immunology Tests
            </h2>

            <p className="text-[var(--textLight)] mb-4">
              Full A–Z listings.
            </p>

            <a
              href="#"
              className="text-[var(--brandColor)] font-medium hover:underline"
            >
              Read More →
            </a>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-xl shadow-[var(--shadowCard)] p-6 border border-[var(--borderLight)]">
            <h2 className="text-xl font-semibold text-[var(--textDark)] mb-2">
              Coeliac Disease Update
            </h2>

            <p className="text-[var(--textLight)] mb-4">
              Tests and profiles.
            </p>

            <a
              href="#"
              className="text-[var(--brandColor)] font-medium hover:underline"
            >
              Read More →
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
