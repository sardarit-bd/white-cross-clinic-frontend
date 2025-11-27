"use client";

export default function SexuallyTransmittedInfections() {
  return (
    <div className="w-full bg-[var(--bgLight)] py-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* =============================
            PAGE HEADER
        ============================== */}
        <h1 className="text-[var(--textDark)] text-3xl font-bold mb-4">
          Sexually transmitted infections
        </h1>

        {/* =============================
            CHLAMYDIA SECTION
        ============================== */}
        <section className="mb-12 bg-[var(--bgWhite)] p-6 rounded-[var(--radius-lg)] shadow-[var(--shadowCard)]">

          <h2 className="text-[var(--textDark)] text-2xl font-bold mb-3">
            Chlamydia
          </h2>

          <p className="text-[var(--textLight)] leading-relaxed mb-4">
            Chlamydia is the most common curable STI diagnosed in the UK. Often asymptomatic,
            anyone who is sexually active is considered to be at increased risk of chlamydia
            infection. It is the most commonly recognised, screened and treated of all STIs.
          </p>

          <p className="text-[var(--textDark)] font-semibold mb-6">
            Allow 6 weeks before re-testing to avoid picking up the DNA from a previous infection.
          </p>

          {/* ================== CT Panel ================== */}
          <InfoCard
            title="Chlamydia CT"
            type="Bacterial"
            incubation="1–3 weeks, up to 6 weeks"
            sample="Urine; Cervix/Vagina; Cervix/Vagina"
          />

          <InfoCard
            title="CT/GC Combined"
            type="Bacterial"
            incubation="1–3 weeks, up to 6 weeks"
            sample="Urine; Cervix/Vagina; Cervix/Vagina; Rectum; Throat"
          />
        </section>

        {/* =============================
            GONORRHOEA SECTION
        ============================== */}
        <section className="mb-12 bg-[var(--bgWhite)] p-6 rounded-[var(--radius-lg)] shadow-[var(--shadowCard)]">
          <h2 className="text-[var(--textDark)] text-2xl font-bold mb-3">
            Gonorrhoea
          </h2>

          <p className="text-[var(--textLight)] leading-relaxed mb-6">
            Gonorrhoea is caused by the bacterium <em>Neisseria gonorrhoeae</em>,
            which multiplies easily in the mucous membranes...
          </p>

          {/* Gonorrhoea GC */}
          <InfoCard
            title="Gonorrhoea GC"
            type="Bacterial"
            incubation="2–7 days, up to 1 month"
            sample="Urine; Cervix/Vagina; Cervix/Vagina"
          />

          {/* CT/GC combined */}
          <InfoCard
            title="CT/GC Combined"
            type="Bacterial"
            incubation="1–3 weeks, up to 6 weeks"
            sample="Urine; Cervix/Vagina; Cervix/Vagina; Rectum; Throat"
          />
        </section>

        {/* =============================
            MYCOPLASMA GENITALIUM
        ============================== */}
        <section className="mb-12 bg-[var(--bgWhite)] p-6 rounded-[var(--radius-lg)] shadow-[var(--shadowCard)]">
          <h2 className="text-[var(--textDark)] text-2xl font-bold mb-3">
            Mycoplasma genitalium (M.gen)
          </h2>

          <p className="text-[var(--textLight)] leading-relaxed mb-6">
            <em>Mycoplasma genitalium</em> (M.gen) is an important sexually transmitted pathogen…
          </p>

          <InfoCard
            title="Mycoplasma Genitalium"
            type="Bacterial"
            incubation="Symptoms develop at 1–3 weeks"
            sample="Urine; GU Site; Cervix/Vagina"
          />
        </section>

        {/* =============================
            MACROLIDE RESISTANCE TESTING
        ============================== */}
        <section className="mb-12 bg-[var(--bgWhite)] p-6 rounded-[var(--radius-lg)] shadow-[var(--shadowCard)]">
          <h2 className="text-[var(--textDark)] text-2xl font-bold mb-3">
            Macrolide Resistance Testing (M.gen)
          </h2>

          <p className="text-[var(--textLight)] leading-relaxed mb-6">
            Prevalence of <em>Mycoplasma genitalium</em> in men and women…
          </p>
        </section>

        {/* =============================
            UREAPLASMA
        ============================== */}
        <section className="mb-12 bg-[var(--bgWhite)] p-6 rounded-[var(--radius-lg)] shadow-[var(--shadowCard)]">
          <h2 className="text-[var(--textDark)] text-2xl font-bold mb-3">
            Ureaplasma
          </h2>

          <p className="text-[var(--textLight)] leading-relaxed mb-6">
            <em>U. urealyticum</em> and <em>parvum</em> are strains of bacteria…
          </p>

          <InfoCard
            title="Ureaplasma Urealyticum"
            type="Bacterial"
            incubation="Symptoms develop at 1–3 weeks"
            sample="Urine; GU Site; Cervix/Vagina"
          />
        </section>

        {/* =============================
            TRICHOMONIASIS
        ============================== */}
        <section className="mb-12 bg-[var(--bgWhite)] p-6 rounded-[var(--radius-lg)] shadow-[var(--shadowCard)]">
          <h2 className="text-[var(--textDark)] text-2xl font-bold mb-3">
            Trichomoniasis
          </h2>

          <p className="text-[var(--textLight)] leading-relaxed mb-6">
            Trichomoniasis is caused by a tiny parasite called <em>Trichomonas vaginalis</em>…
          </p>

          <InfoCard
            title="Trichomonas Vaginalis"
            type="Parasitic"
            incubation="4–28 days, many patients are asymptomatic carriers"
            sample="Urine; GU Site; Cervix/Vagina"
          />
        </section>

        {/* =============================
            GARDNERELLA
        ============================== */}
        <section className="mb-12 bg-[var(--bgWhite)] p-6 rounded-[var(--radius-lg)] shadow-[var(--shadowCard)]">
          <h2 className="text-[var(--textDark)] text-2xl font-bold mb-3">
            Gardnerella vaginalis
          </h2>

          <p className="text-[var(--textLight)] leading-relaxed mb-6">
            <em>Gardnerella vaginalis</em> is a bacterium rather than a sexually transmitted infection…
          </p>

          <InfoCard
            title="Gardnerella Vaginalis"
            type="Bacterial"
            incubation="Imbalance of normal flora"
            sample="Urine; GU Site; Cervix/Vagina"
          />
        </section>

        {/* =============================
            HERPES HSV
        ============================== */}
        <section className="mb-12 bg-[var(--bgWhite)] p-6 rounded-[var(--radius-lg)] shadow-[var(--shadowCard)]">
          <h2 className="text-[var(--textDark)] text-2xl font-bold mb-3">
            Herpes/Herpes Simplex Virus I/II
          </h2>

          <p className="text-[var(--textLight)] leading-relaxed mb-6">
            Genital herpes caused by HSV…
          </p>

          <InfoCard
            title="Herpes Simplex Virus I/II"
            type="Viral"
            incubation="2–14 days. Testing recommended for symptomatic lesions"
            sample="Herpes lesion"
          />
        </section>

        {/* =============================
            LYMPHOGRANULOMA VENEREUM LGV
        ============================== */}
        <section className="mb-12 bg-[var(--bgWhite)] p-6 rounded-[var(--radius-lg)] shadow-[var(--shadowCard)]">
          <h2 className="text-[var(--textDark)] text-2xl font-bold mb-3">
            Lymphogranuloma venereum (LGV)
          </h2>

          <p className="text-[var(--textLight)] leading-relaxed">
            LGV is a type of chlamydia bacteria that attacks the lymph nodes…
          </p>
        </section>

      </div>
    </div>
  );
}

/* Reusable Info Card Component */
function InfoCard({ title, type, incubation, sample }) {
  return (
    <div className="mt-6 border border-[var(--borderLight)] rounded-[var(--radius-md)]">
      <div className="bg-[var(--brandColorDark)] text-[var(--textWhite)] p-3 font-semibold">
        {title}
      </div>
      <div className="p-4 text-[var(--textDark)] space-y-3">
        <p><strong>Type:</strong> {type}</p>
        <p><strong>Incubation period:</strong> {incubation}</p>
        <p><strong>Sample site:</strong> {sample}</p>
      </div>
    </div>
  );
}
