"use client";
import { HeartPulse, Stethoscope, Users } from "lucide-react";
import { motion } from "framer-motion";

const missions = [
  {
    icon: <HeartPulse size={28} />,
    title: "Patient First",
    desc: "Every decision we make revolves around one goal — improving patient health and satisfaction.",
  },
  {
    icon: <Stethoscope size={28} />,
    title: "Medical Excellence",
    desc: "We uphold the highest standards in healthcare, supported by modern technology and expertise.",
  },
  {
    icon: <Users size={28} />,
    title: "Collaborative Care",
    desc: "Our multidisciplinary team ensures holistic, continuous support for every individual we serve.",
  },
];

export default function MissionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-4">
          Our Mission
        </h2>
        <p className="text-[var(--textLight)] mb-12 max-w-3xl mx-auto">
          To make quality healthcare accessible, compassionate, and reliable for every person we serve.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {missions.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="p-8 rounded-xl shadow-md hover:shadow-lg bg-[var(--bgLight)] border border-[var(--borderLight)]"
            >
              <div className="text-[var(--brandColor)] mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg text-[var(--textDark)] mb-2">
                {item.title}
              </h3>
              <p className="text-[var(--textLight)]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
