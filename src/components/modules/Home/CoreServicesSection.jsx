"use client";

import { motion } from "framer-motion";
import { CalendarClock, ChevronsRight, MonitorSmartphone, Stethoscope } from "lucide-react";

const services = [
  {
    id: 1,
    icon: Stethoscope,
    title: "Clinical Safety & Governance",
    description: [
      "Our doctors must understand your medical history, current symptoms, and clinical risk level.",
      "We conduct a full clinical examination and arrange initial investigations (blood tests, ECG, imaging, etc.).",
      "We determine whether specialist referral is necessary, appropriate, and urgent."
    ]
  },
  {
    id: 2,
    icon: CalendarClock,
    title: "Referral Quality",
    description: [
      "Our doctors prepare a comprehensive clinical report summarising your condition, investigations, and referral justification",
      "This ensures specialists receive clear, structured information, enabling faster diagnosis and treatment."
    ]
  },
  {
    id: 3,
    icon: MonitorSmartphone,
    title: "Continuity of Care",
    description: [
      "White Cross Clinic continues to monitor your progress, review specialist reports, and manage ongoing health needs.",
      "We act as your clinical advocate, liaising with specialists on your behalf."
    ]
  }
];

const leftColumn = {
  title: "The Benefits of Private Medical Services",
  items: [
    "Excellent Service – Our Commitment to You",
    "WCPC Collect Online Booking",
    "Cost Management and Quality Assurance – Value for Money",
  ],
};

const rightColumn = {
  title: "Accessible Healthcare Services – Anytime, Anywhere",
  items: [
    "Personalised Care – Tailored to Your Needs",
    "Confidentiality and Discretion – Your Trust is Our Priority",
    "State-of-the-Art Facilities – Exceptional Care in Comfortable Surroundings",
  ],
};

export default function CoreServicesSection() {
  return (
    <section className="py-20 bg-gray-200/60">
      <div className="container mx-auto px-6 text-center">

        {/* ===========================
            SECTION HEADER
        ============================ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-3">
            Why Patients Must Register with {" "}
            <br />
            <span className="text-[var(--brandColor)]">White Cross Clinic First</span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "450px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-[4px] mx-auto rounded-full relative overflow-hidden"
          >
            <div
              className="absolute inset-0 animate-gradient-move bg-[length:200%_200%]"
              style={{
                background:
                  "linear-gradient(90deg, var(--brandColor), var(--brandAccent), var(--brandColor))",
              }}
            />
          </motion.div>

          <p className="text-[var(--textLight)] max-w-3xl mx-auto mt-6">
            Experience healthcare that combines compassion, innovation, and
            precision. At White Cross Clinic, your well-being is our priority.
          </p>
        </motion.div>

        {/* ===========================
            SERVICES CARDS
        ============================ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="relative p-8 bg-white border border-gray-100 cursor-default transition-all duration-500 hover:shadow-lg"
              >
                <div className="flex justify-start mb-8 text-[var(--brandColor)]">
                  <Icon size={56} />
                </div>

                <h3 className="text-2xl text-left font-semibold text-[var(--textDark)] mb-10">
                  {item.title}
                </h3>

                <div className="text-sm text-[var(--textLight)] leading-relaxed text-left">
                  {item.description.map((item, i) => (
                    <div key={i} className="flex item-center gap-2 mb-5">
                      <div className="w-7 h-6 rounded-full bg-[var(--brandColor)] text-white flex items-center justify-center text-sm">
                        {i + 1}
                      </div>
                      <span className="text-lg w-full">{item}</span>
                    </div>

                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ===========================
            NEW TWO-COLUMN SECTION
        ============================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 hidden">

          {/* LEFT COLUMN */}
          <div className="bg-[var(--brandColorDark)] text-white">
            <h3 className="text-lg font-semibold px-6 py-4 border-b border-white/20">
              {leftColumn.title}
            </h3>

            {leftColumn.items.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-6 py-3 border-b border-white/20"
              >
                <ChevronsRight size={18} className="text-white" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="bg-[var(--brandColorDark)] text-white">
            <h3 className="text-lg font-semibold px-6 py-4 border-b border-white/20">
              {rightColumn.title}
            </h3>

            {rightColumn.items.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-6 py-3 border-b border-white/20"
              >
                <ChevronsRight size={18} className="text-white" />
                <span>{item}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
