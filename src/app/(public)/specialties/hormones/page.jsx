export default function Hormones() {
  const femaleTests = [
    "FSH – day 2/3",
    "LH",
    "Oestradiol",
    "Antimullerian Hormone (AMH)",
    "Progesterone – day 21",
    "Female Hormone Profile",
    "Prolactin",
  ];

  const maleTests = [
    "Testosterone/Prolactin/FSH/LH",
    "Sex Hormone Binding Globulin",
    "Inhibin B (male)",
    "Male Hormone Profile",
    "Andropause Profile",
    "Insulin Resistance",
    "Erectile Dysfunction",
    "Impotence Profile",
  ];

  return (
    <div className="w-full bg-[var(--bgLight)] py-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* ================================
            PAGE HEADER
        ================================= */}
        <div className="bg-[var(--bgWhite)] shadow-[var(--shadowCard)] rounded-[var(--radius-lg)] p-6 mb-6">
          <h2 className="text-[var(--textDark)] text-2xl font-bold">
            Hormones
          </h2>
        </div>

        {/* ================================
            MAIN CONTENT
        ================================= */}
        <div className="bg-[var(--bgWhite)] shadow-[var(--shadowCard)] rounded-[var(--radius-lg)] p-6">

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* FEMALE TABLE */}
            <div>
              <h3 className="text-[var(--textDark)] text-xl font-bold mb-4">Female</h3>

              <table className="w-full border border-[var(--borderLight)]">
                <thead>
                  <tr className="bg-[var(--brandColorDark)] text-[var(--textWhite)]">
                    <th className="p-3 font-semibold text-left">Test Name</th>
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

            {/* MALE TABLE */}
            <div>
              <h3 className="text-[var(--textDark)] text-xl font-bold mb-4">Male</h3>

              <table className="w-full border border-[var(--borderLight)]">
                <thead>
                  <tr className="bg-[var(--brandColorDark)] text-[var(--textWhite)]">
                    <th className="p-3 font-semibold text-left">Test Name</th>
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
