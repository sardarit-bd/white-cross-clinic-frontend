"use client";

export default function TherapeuticDrugAssays() {
  return (
    <div className="w-full bg-[var(--bgLight)] py-10">
      <div className="max-w-6xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-6">
          Therapeutic Drug Assays
        </h1>

        {/* Subtitle */}
        <p className="font-semibold text-[var(--textDark)] mb-4">
          Susceptible - Increased Exposure Replaces Intermediate Result
        </p>

        <p className="text-[var(--textLight)] mb-6 leading-relaxed">
          All clinicians are advised that from 1st June 2021, the new Antimicrobial Susceptibility
          Result definitions recommended by EUCAST (the European Committee on Antimicrobial
          Susceptibility) will apply to all results issued by WCC.
          <br /><br />
          Please note: all UK laboratories are required to implement these changes.
        </p>

        {/* --- 3 Banner Boxes --- */}
        <div className="space-y-6">

          {/* Standard dosing regime */}
          <div className="bg-gray-200 text-center rounded-lg py-6 px-4">
            <h2 className="font-semibold text-lg mb-2">Susceptible, standard dosing regime</h2>
            <p className="text-sm text-gray-700">
              A microorganism is categorised as ‘Susceptible, standard dosing regime’ when there is a
              high likelihood of therapeutic success using a standard dosing regimen of the agent.
            </p>
          </div>

          {/* Increased exposure */}
          <div className="bg-[var(--brandRed)] text-white text-center rounded-lg py-6 px-4">
            <h2 className="font-semibold text-lg mb-2">Susceptible, increased exposure</h2>
            <p className="text-sm">
              A microorganism is categorised as ‘Susceptible, increased exposure’ when there is a high
              likelihood of therapeutic success if exposure to the agent is increased by increasing the
              dosing regimen or by its concentration at the site of infection.
            </p>
          </div>

          {/* Resistant */}
          <div className="bg-gray-300 text-center rounded-lg py-6 px-4">
            <h2 className="font-semibold text-lg mb-2">Resistant</h2>
            <p className="text-sm text-gray-800">
              A microorganism is categorised as ‘Resistant’ when there is a high likelihood of
              therapeutic failure even when there is increased exposure.
            </p>
          </div>
        </div>

        {/* Why changes required */}
        <h2 className="text-2xl font-bold text-[var(--textDark)] mt-10 mb-4">
          Why Are These Changes Required?
        </h2>

        <ul className="list-disc list-inside text-[var(--textLight)] space-y-2 mb-6">
          <li>Increasing levels of antibiotic resistance to standard dosing regimens</li>
          <li>
            Recognition that, for some organisms, low-level resistance can be overcome by increasing
            the dosage of some antibiotics.
          </li>
        </ul>

        {/* Interpretation */}
        <h2 className="text-2xl font-bold text-[var(--textDark)] mt-8 mb-3">
          How Should an I - Susceptible, Increased Exposure Result Be Interpreted And Managed?
        </h2>

        <p className="text-[var(--textLight)] leading-relaxed mb-4">
          If an antibiotic susceptibility result was previously reported as I – Intermediate, the
          clinical tendency was to avoid using this antibiotic agent.
          <br /><br />
          A result now reported as I – Susceptible, increased exposure indicates a high likelihood of
          success if the antibiotic is given at a higher dose, increased frequency or at a higher
          concentration at the site of infection.
        </p>

        <div className="bg-[var(--brandRed)] text-white p-4 rounded-lg mb-6">
          <p className="text-sm leading-relaxed">
            Any antibiotic reported as I – Susceptible, increased exposure can be used to treat an
            infection as long as the recommended higher dosing regimen is followed. Please refer to
            the dosage table accompanying this update.
          </p>
        </div>

        {/* Oral vs IV */}
        <h2 className="text-2xl font-bold text-[var(--textDark)] mb-3">
          Are There Separate Dosing Regimens For Oral And IV Antibiotics?
        </h2>

        <p className="text-[var(--textLight)] leading-relaxed mb-6">
          Oral and IV antibiotics exhibit different bioavailability characteristics. Some bacteria may
          be effectively treated with a standard IV dose but require a high-dose oral equivalent.
          <br /><br />
          Some combinations will list separate results for IV and oral dosing. However, a result now
          reported as I – Susceptible, increased exposure indicates high likelihood of success using a
          high dose.
        </p>

        {/* High dose advice */}
        <h2 className="text-2xl font-bold text-[var(--textDark)] mb-3">
          How Do I Access The High Dose Regimen Advice?
        </h2>

        <ul className="list-disc list-inside text-[var(--textLight)] space-y-2 mb-6">
          <li>Separate document accompanying this communication</li>
          <li>Available on our website</li>
          <li>On the EUCAST website: https://eucast.org/clinical_breakpoints</li>
        </ul>

        {/* Will results take longer */}
        <h2 className="text-2xl font-bold text-[var(--textDark)] mb-3">
          Will Some Results Take Longer Now?
        </h2>

        <p className="text-[var(--textLight)] leading-relaxed mb-6">
          Some samples may show a result in a category known as ‘Area of Technical Uncertainty’. These
          require further testing to identify effective antibiotics and dosage combinations.
        </p>

        <p className="text-[var(--textDark)] font-semibold mt-8">
          Thank you for your attention to these important updates and for supporting our microbiology
          service.
        </p>

      </div>
    </div>
  );
}
