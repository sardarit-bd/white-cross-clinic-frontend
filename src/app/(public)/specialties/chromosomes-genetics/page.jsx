"use client";

export default function ChromosomesGenetics() {
  const femaleTests = [
    "Chromosome/Karyotype (parental)",
    "Fragile X (female)",
    "Cystic Fibrosis Screen",
    "Tay Sachs",
    "Jewish Carrier Profile",
    "Inherited disorders (specific)",
  ];

  const maleTests = [
    "Chromosome/Karyotype (parental)",
    "Male Hormone Profile",
    "Y-Chromosome microdeletion",
    "Fragile X Male",
    "Cystic Fibrosis Screen",
    "Tay Sachs",
    "Jewish Carrier Profile",
    "Inherited disorders (specific)",
  ];

  return (
    <div className="w-full bg-[var(--bgLight)] py-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* ================================
            PAGE HEADER
        ================================= */}
        <div className="bg-[var(--bgWhite)] shadow-[var(--shadowCard)] rounded-[var(--radius-lg)] p-6 mb-6">
          <h2 className="text-[var(--textDark)] text-2xl font-bold">
            Chromosomes/Genetics
          </h2>
        </div>

        {/* ================================
            MAIN CONTENT
        ================================= */}
        <div className="bg-[var(--bgWhite)] shadow-[var(--shadowCard)] rounded-[var(--radius-lg)] p-6">

          {/* Grid Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* ============ FEMALE ============ */}
            <div>
              <h3 className="text-[var(--textDark)] text-xl font-bold mb-4">Female</h3>

              <table className="w-full border border-[var(--borderLight)]">
                <thead>
                  <tr className="bg-[var(--brandColorDark)] text-[var(--textWhite)] text-left">
                    <th className="p-3 font-semibold">Test Name</th>
                  </tr>
                </thead>

                <tbody>
                  {femaleTests.map((test, i) => (
                    <tr key={i} className="border-b border-[var(--borderLight)]">
                      <td className="p-3">
                        <a
                          href="#"
                          className="text-[var(--textDark)] hover:text-[var(--brandColor)] underline-offset-2 hover:underline transition-all"
                        >
                          {test}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ============ MALE ============ */}
            <div>
              <h3 className="text-[var(--textDark)] text-xl font-bold mb-4">Male</h3>

              <table className="w-full border border-[var(--borderLight)]">
                <thead>
                  <tr className="bg-[var(--brandColorDark)] text-[var(--textWhite)] text-left">
                    <th className="p-3 font-semibold">Test Name</th>
                  </tr>
                </thead>

                <tbody>
                  {maleTests.map((test, i) => (
                    <tr key={i} className="border-b border-[var(--borderLight)]">
                      <td className="p-3">
                        <a
                          href="#"
                          className="text-[var(--textDark)] hover:text-[var(--brandColor)] underline-offset-2 hover:underline transition-all"
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
