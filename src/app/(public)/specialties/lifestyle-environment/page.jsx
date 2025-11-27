"use client";

export default function LifestyleEnvironment() {
  const femaleTests = [
    "Well Person Profile DL6",
    "Zinc, Lead",
    "Trace Metal Profile (blood)",
    "Antioxidant Activity",
    "Thyroid Profiles",
    "Vitamin Profiles",
    "Vitamin D (25 OH)",
    "Folate",
    "Selenium",
    "Omega 3/Omega 6",
  ];

  const maleTests = [
    "Fit for Fertility Male Profile",
    "Well Person Profile DL6",
    "Trace Metal Profile (blood)",
    "Antioxidant Activity",
    "Thyroid Profiles",
    "Vitamin Profiles",
    "Vitamin D (25 OH)",
    "Folate",
    "Selenium",
    "Zinc",
    "Omega 3/Omega 6",
    "Oxidative Stress (ROS) in Semen",
  ];

  return (
    <div className="w-full bg-[var(--bgLight)] py-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* ================================
            PAGE HEADER
        ================================= */}
        <div className="bg-[var(--bgWhite)] shadow-[var(--shadowCard)] rounded-[var(--radius-lg)] p-6 mb-6">
          <h2 className="text-[var(--textDark)] text-2xl font-bold">
            Lifestyle/Environment
          </h2>
        </div>

        {/* ================================
            MAIN CARD CONTENT
        ================================= */}
        <div className="bg-[var(--bgWhite)] shadow-[var(--shadowCard)] rounded-[var(--radius-lg)] p-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* FEMALE COLUMN */}
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
                    <th className="p-3 font-semibold text-left">Test Name</th>
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
