"use client";

const data = [
  { name: "Out of hours services", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Strains and sprains", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "X-rays and referrals", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Minor head injuries", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Bites and stings", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Mild burns", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Skin problems and rashes", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Abdominal pains", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Urine infections", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Eye infections", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Wound dressings", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Sutures and staples removals", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Emergency Contraception", perDose: "£0", doses: "0 per dose", price: "£0" },
  { name: "Ear, nose and throat infections", perDose: "£0", doses: "0 per dose", price: "£0" },
];

export default function VaccinePricingTable({ data }) {
  return (
    <section className="py-12 bg-[var(--bgLight)]">
      <div className="container mx-auto px-6">

        <h2 className="text-2xl md:text-3xl font-bold text-[var(--textDark)] mb-8">
          Treatment & Service Charges
        </h2>

        <div className="overflow-x-auto border border-[var(--borderLight)]">
          <table className="w-full border-collapse">

            {/* TABLE HEADER */}
            <thead>
              <tr className="bg-[var(--brandColor)] text-white">
                <th className="py-4 px-6 text-left font-semibold">Vaccine</th>
                <th className="py-4 px-6 text-left font-semibold">Per Dose</th>
                <th className="py-4 px-6 text-left font-semibold">Doses Per Course</th>
                <th className="py-4 px-6 text-left font-semibold">Price Per Course</th>
              </tr>
            </thead>

            {/* TABLE BODY */}
            <tbody className="text-[var(--textMedium)]">
              {data.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-[var(--borderLight)] ${index % 2 === 0 ? "bg-[var(--bgWhite)]" : "bg-[var(--bgSoft)]"
                    }`}
                >
                  <td className="py-4 px-6">{row.name}</td>
                  <td className="py-4 px-6 font-medium">{row.perDose}</td>
                  <td className="py-4 px-6">{row.doses}</td>
                  <td className="py-4 px-6 font-semibold text-[var(--brandColor)]">
                    {row.price}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </section>
  );
}
