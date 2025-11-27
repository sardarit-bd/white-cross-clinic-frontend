"use client";

export default function UnexplainedInfertility() {
  const femaleTests = [
    "Recurrent Miscarriage Profile",
    "Reproductive Immunophenotyping (CD 3/4/8, CD 5/19, CD 56/57)",
    "NK Cell Profile",
    "Antiphospholipid Antibodies",
    "Lupus anticoagulant and Anticardiolipin antibodies",
    "Thrombotic Profile",
    "Antinuclear antibodies",
    "Anti-Thyroglobulin antibodies",
    "Chromosome/Karyotype (parental)",
    "Infection screening (See Infection)",
  ];

  const maleTests = [
    "Chromosome/Karyotype (parental)",
    "Y-Chromosome microdeletion",
    "Sperm DNA Fragmentation",
    "Sperm aneuploidy",
    "Infection screening (See Infection)",
    "Heavy Metals (Blood)",
    "Male Recurrent Miscarriage Profile",
    "Oxidative Stress in Semen (Reactive Oxygen Species)",
  ];

  return (
    <div className="w-full bg-[var(--bgLight)] py-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* PAGE HEADER */}
        <div className="bg-[var(--bgWhite)] shadow-[var(--shadowCard)] rounded-[var(--radius-lg)] p-6 mb-6">
          <h2 className="text-[var(--textDark)] text-2xl font-bold leading-snug">
            Unexplained Infertility/Implantation<br />
            Failure/Recurrent Miscarriage
          </h2>
        </div>

        {/* MAIN CONTENT */}
        <div className="bg-[var(--bgWhite)] shadow-[var(--shadowCard)] rounded-[var(--radius-lg)] p-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* ========= FEMALE ========= */}
            <div>
              <h3 className="text-[var(--textDark)] text-xl font-bold mb-4">Female</h3>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] border border-[var(--borderLight)]">
                  <thead>
                    <tr className="bg-[var(--brandColorDark)] text-[var(--textWhite)]">
                      <th className="p-3 text-left font-semibold">Test Name</th>
                    </tr>
                  </thead>

                  <tbody>
                    {femaleTests.map((test, i) => (
                      <tr key={i} className="border-b border-[var(--borderLight)]">
                        <td className="p-3">
                          <a
                            href="#"
                            className="
                              text-[var(--textDark)]
                              hover:text-[var(--brandColor)]
                              hover:underline
                              underline-offset-2
                              transition-all
                            "
                          >
                            {test}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ========= MALE ========= */}
            <div>
              <h3 className="text-[var(--textDark)] text-xl font-bold mb-4">Male</h3>

              <table className="w-full border border-[var(--borderLight)]">
                <thead>
                  <tr className="bg-[var(--brandColorDark)] text-[var(--textWhite)]">
                    <th className="p-3 text-left font-semibold">Test Name</th>
                  </tr>
                </thead>

                <tbody>
                  {maleTests.map((test, i) => (
                    <tr key={i} className="border-b border-[var(--borderLight)]">
                      <td className="p-3">
                        <a
                          href="#"
                          className="
                            text-[var(--textDark)]
                            hover:text-[var(--brandColor)]
                            hover:underline
                            underline-offset-2
                            transition-all
                          "
                        >
                          {test}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
