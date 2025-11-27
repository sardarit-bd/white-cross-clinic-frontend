"use client";

export default function Infection() {
  const femaleTests = [
    "High Vaginal swab",
    "Cervical swab",
    "Bacterial Vaginosis screen",
    "Toxoplasma",
    "Chlamydia/Gonorrhoea",
    "CMV",
    "Hep B sAg/Hep B Core Abs/Hep C/HIV 1&2",
    "Herpes Simplex I/II by PCR",
    "STI Profiles",
    "Infection screening by PCR",
  ];

  const maleTests = [
    "Investigations for prostatitis/urethritis",
    "Mycoplasma Genitalium",
    "Ureaplasma",
    "Chlamydia/Gonorrhoea",
    "Chlamydia in Semen",
    "Hep B sAg/Hep B Core Abs/Hep C/HIV 1&2",
    "Herpes Simplex I/II by PCR",
    "Semen culture",
    "Syphilis",
    "STI Profiles",
    "Infection screening by PCR",
  ];

  return (
    <div className="w-full bg-[var(--bgLight)] py-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* ================================
            PAGE HEADER
        ================================= */}
        <div className="bg-[var(--bgWhite)] shadow-[var(--shadowCard)] rounded-[var(--radius-lg)] p-6 mb-6">
          <h2 className="text-[var(--textDark)] text-2xl font-bold">
            Infection
          </h2>
        </div>

        {/* ================================
            MAIN CONTENT CARD
        ================================= */}
        <div className="bg-[var(--bgWhite)] shadow-[var(--shadowCard)] rounded-[var(--radius-lg)] p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* FEMALE COLUMN */}
            <div>
              <h3 className="text-[var(--textDark)] text-xl font-bold mb-4">Female</h3>

              <table className="w-full border border-[var(--borderLight)]">
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

            {/* MALE COLUMN */}
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
