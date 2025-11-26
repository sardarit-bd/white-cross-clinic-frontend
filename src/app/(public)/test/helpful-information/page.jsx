"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function HelpfulInformation() {
  const [openModal, setOpenModal] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const items = [
    {
      title: "Laboratory Times",
      content: `
        Our laboratories operate Monday to Friday 9AM – 10PM,
        Saturday 10AM – 6PM. Closed on Sundays and holidays.
      `,
    },
    {
      title: "Patient Reception Times",
      content: `
        Patients may attend the reception for sample collection
        during normal operating hours. No appointment needed.
      `,
    },
    {
      title: "Semen Analysis",
      content: `
        Semen analysis must be booked in advance. Follow the 
        pre-sample preparation instructions strictly.
      `,
    },
    {
      title: "Patient Request Form",
      content: `
        Download, complete, and bring the patient request form
        signed by your GP or consultant.
      `,
    },
    {
      title: "Emailed Requests For Add Ons",
      content: `
        Add-on requests should be sent to the laboratory email
        along with patient details and sample ID.
      `,
    },
    {
      title: "Home Visits",
      content: `
        Home visits available within the M25. Contact reception
        to arrange a suitable appointment.
      `,
    },
    {
      title: "Sample Packing",
      content: `
        Follow proper packing procedures to ensure safe 
        transport of biological samples.
      `,
    },
    {
      title: "Packaging Requirements",
      content: `
        Triple packaging is required for most types of 
        biological sample transport.
      `,
    },
    {
      title: "Postal Pathology",
      content: `
        Postal pathology is available for selected tests. 
        Follow packaging guidelines carefully.
      `,
    },
    {
      title: "Pathology Consumables / Request Forms / Postal Packs",
      content: `
        Clinics may request sample tubes, consumables, and 
        postal packs by emailing the pathology department.
      `,
    },
    {
      title: "Requesting And Reporting Options",
      content: `
        Test requests and reports are available via email or 
        our online clinician portal.
      `,
    },
    {
      title: "Protection Of Personally Identifiable Information",
      content: `
        All patient information is handled according to GDPR 
        and strict confidentiality guidelines.
      `,
    },
    {
      title: "Fees For Pathology",
      content: `
        Fees vary by sample type, test category and urgency.
        Please contact us for quotations.
      `,
    },
    {
      title: "DX System",
      content: `
        The DX system may be used by clinics for secure 
        sample transport and delivery.
      `,
    },
  ];

  const handleOpen = (item) => {
    setActiveItem(item);
    setOpenModal(true);
  };

  return (
    <div className="w-full py-10 container mx-auto pt-48">
      {/* HEADER */}
      <div className=" p-8 rounded-xl shadow-sm">
        <h2 className="text-3xl font-bold text-[var(--brandColor)] mb-4">
          Helpful Information
        </h2>
        <p className="text-[var(--textLight)] leading-relaxed">
          If you are not able to find details for tests and services on our
          website, please contact the laboratory.  
          We continue to develop a wide range of test and patient services.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => handleOpen(item)}
            className="cursor-pointer p-6 bg-[var(--brandColorLight)] hover:bg-[var(--brandColor)] hover:text-white
                       transition-all border border-[var(--borderLight)] rounded-xl shadow-sm"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
              onClick={() => setOpenModal(false)}
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4 text-[var(--brandColor)]">
              {activeItem?.title}
            </h2>

            <p className="text-[var(--textDark)] whitespace-pre-line leading-relaxed">
              {activeItem?.content}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
