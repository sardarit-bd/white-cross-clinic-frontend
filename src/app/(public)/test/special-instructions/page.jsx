"use client";
import { useState } from "react";

export const specialInstructions = [
  { code: 1, instruction: "Contact the laboratory for special sample tubes/containers/instructions." },
  { code: 2, instruction: "Confirmation of not negative drug screens by LC-MS/MS may take up to 5 days." },
  { code: 3, instruction: "Clinical history essential and protect from light." },
  { code: 4, instruction: "Send to the laboratory same day." },
  { code: 5, instruction: "Do not send sample to the laboratory between Friday noon and Monday morning." },
  { code: 6, instruction: "Contact the Referrals Department before taking and sending sample to the laboratory." },
  { code: 7, instruction: "Sample should be separated and frozen if sending overnight." },
  { code: 8, instruction: "DRP Form required. DRP Form can be found at the back of the guide." },
  { code: 9, instruction: "Clinical history must be provided." },
  { code: 10, instruction: "Contact the laboratory for special stability tubes for lymphocyte subsets – or take an EDTA sample and ensure same day delivery to the laboratory, Monday to Friday noon (do not send sample between Friday noon and Monday morning)." },
  { code: 11, instruction: "Patient consent required. See Request forms." },
  { code: 12, instruction: "Please provide one sample for each person being tested." },
  { code: 13, instruction: "Protect from light." },
  { code: 14, instruction: "Provide details of travel history." },
  {
    code: 15,
    instruction:
      "Ammonia — Sample: EDTA plasma only. Full tubes and tightly stoppered. On ice, centrifuged and analysed 20–30 mins post venepuncture (or plasma can be frozen). If haemolysed gives falsely high results. Patient: Fasting. Avoid smoking."
  },
  {
    code: 16,
    instruction:
      "Lactate — Sample: Fluoride oxalate plasma only. On ice and separate from cells 15–30 mins, analyse promptly. Handle with care as sweat contains large amounts of lactate. No tourniquet. Patient: Rest 30 mins prior to test."
  },
  { code: 17, instruction: "Homocysteine — Should be spun and separated within 1 hour of venepuncture." },
  {
    code: 18,
    instruction:
      "Citrate Samples — Samples should be double spun and separated and frozen within 4–8 hours. If transportation delay is expected, samples must be transported frozen."
  },
  { code: 19, instruction: "Must include patient’s age, height and weight." },
  { code: 20, instruction: "Sample types: FCRU or PCR swab or TPV or Semen." },
  { code: 21, instruction: "Urine cytology container, ideally first catch, mid-morning specimen." },
  { code: 22, instruction: "Must be fresh." },
  { code: 23, instruction: "For Fabry’s Syndrome." },
  { code: 24, instruction: "Anti-malarial drug." },
  { code: 25, instruction: "Includes: potassium, magnesium, calcium, zinc, copper, selenium." },
  { code: 26, instruction: "Tests for active metabolite 10-Hydroxycarbazepine." },
  { code: 27, instruction: "Hereditary Neuropathy." },
  { code: 28, instruction: "VDRL and VDRL/TPHA have now been replaced by Syphilis IgG/IgM." },
  { code: 29, instruction: "Optional PAP Smear as additional test." },
  { code: 30, instruction: "Collect sample at end of exposure." },
  { code: 31, instruction: "At end of shift." },
  { code: 32, instruction: "Avoid seafood and fish for 2–3 days before collection." },
  {
    code: 33,
    instruction:
      "Sample must be labelled by hand with first name, family name, gender and date of birth detailed on sample and form. Do not use labels other than the tube label."
  },
  {
    code: 34,
    instruction:
      "Samples must arrive in the laboratory on the same day of sample taking or contact the laboratory."
  },
  {
    code: 35,
    instruction:
      "Patient should be fasting and resting for 30 mins before sample taking. Samples need urgent handling."
  },
  {
    code: 36,
    instruction:
      "Renin — Sample collected either upright/active or resting/supine (3 hours lying). EDTA Plasma must be frozen within 2 hours."
  },
  { code: 37, instruction: "Provide sample time and date of collection." },
  { code: 38, instruction: "EDTA sample should not be separated: send whole blood." },
  {
    code: 39,
    instruction:
      "Urgent samples have a 3-day TAT if genotype is required for prenatal diagnosis or two weeks if urgent for other factors."
  },
  { code: 40, instruction: "Informed Consent is required for these tests." },
  {
    code: 41,
    instruction:
      "Recommendation for patient to attend Patient Reception for sample taking."
  },
  {
    code: 42,
    instruction:
      "LGV can be added to a positive chlamydia sample using the same swab if requested within 4 days of receipt of result."
  },
  {
    code: 43,
    instruction:
      "Please contact info@whitecrossclinics.com for details for referring samples to the laboratory for sequencing testing."
  }
];

export default function SpecialInstructionsPage() {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const openModal = (item) => {
    setActiveItem(item);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setActiveItem(null);
  };

  return (
    <div className="container mx-auto pt-48 py-12 px-4 md:px-10 bg-[var(--bgLight)]">
      <h1 className="text-3xl font-bold text-[var(--textDark)] mb-6">
        Special Instructions
      </h1>

      <p className="text-[var(--textLight)] mb-8 max-w-3xl">
        Tests displayed on this website may display numbers in square brackets
        after the sample type required. These numbers relate to special
        instructions. Below is the complete list.
      </p>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow-[var(--shadowCard)] overflow-hidden border border-[var(--borderLight)]">
        <table className="w-full text-left">
          <thead className="bg-[var(--brandColor)] text-white">
            <tr>
              <th className="py-3 px-4 text-sm font-semibold">Code</th>
              <th className="py-3 px-4 text-sm font-semibold">Instructions</th>
            </tr>
          </thead>

          <tbody>
            {specialInstructions.map((item) => (
              <tr
                key={item.code}
                className="border-b hover:bg-[var(--brandColorLight)] cursor-pointer transition"
                onClick={() => openModal(item)}
              >
                <td className="py-3 px-4 font-medium text-[var(--textDark)] w-20">
                  {item.code}
                </td>

                <td className="py-3 px-4 text-[var(--textDark)]">
                  {item.instruction.length > 70
                    ? item.instruction.slice(0, 70) + "..."
                    : item.instruction}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {open && activeItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white max-w-lg w-full rounded-xl shadow-xl p-6 relative">
            <h2 className="text-xl font-semibold text-[var(--textDark)] mb-4">
              Instruction #{activeItem.code}
            </h2>

            <p className="text-[var(--textDark)] leading-relaxed mb-6">
              {activeItem.instruction}
            </p>

            <button
              className="px-5 py-2 rounded-lg bg-[var(--brandColor)] text-white hover:bg-[var(--brandColorDark)] transition"
              onClick={closeModal}
            >
              Close
            </button>

            <button
              className="absolute top-3 right-3 text-[var(--textDark)] hover:text-[var(--brandColor)]"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
