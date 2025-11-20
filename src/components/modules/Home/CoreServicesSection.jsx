"use client";

import { motion } from "framer-motion";
import { HeartPulse, Pill, Syringe, Dna } from "lucide-react";

const services = [
  {
    id: 1,
    icon: HeartPulse,
    title: "Comprehensive Patient Care",
    description:
      "From diagnosis to recovery, we ensure a seamless healthcare journey built on compassion and precision.",
  },
  {
    id: 2,
    icon: Pill,
    title: "Advanced Treatments",
    description:
      "Our modern medical technology and expert specialists deliver world-class care and faster healing.",
  },
  {
    id: 3,
    icon: Syringe,
    title: "Preventive Healthcare",
    description:
      "Early detection and regular check-ups to keep you ahead of potential health issues.",
  },
  {
    id: 4,
    icon: Dna,
    title: "Precision Diagnostics",
    description:
      "Our lab and imaging facilities provide reliable, data-driven insights for personalized treatments.",
  },
];

export default function CoreServicesSection() {
  return (
    <section className="py-20 bg-[var(--bgLight)]">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-3">
            Why Choose{" "}
            <span className="text-[var(--brandColor)]">White Cross Clinic</span>
          </h2>

          {/* Animated Gradient Underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1, ease: "easeInOut" }}
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

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.5 }}
                // whileHover={{ scale: 1.03 }}
                className="relative p-8 bg-white rounded-xl shadow-md cursor-default transition-all duration-500 overflow-hidden hover:shadow-lg"
              >

                {/* Icon */}
                <div className="relative z-10 flex justify-center items-center mb-4 text-[var(--brandColor)]">
                  <Icon size={38} />
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-lg font-semibold text-[var(--textDark)] mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-sm text-[var(--textLight)] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
