"use client";
import { Accessibility, Heart, HeartPulse, Stethoscope, Users } from "lucide-react";
import { motion } from "framer-motion";

const missions = [
  {
    icon: <HeartPulse size={28} />,
    title: "Comprehensive Care Under One Roof",
    desc: "From routine checkups to advanced treatments, we provide all essential healthcare services in a single, convenient location.",
  },
  {
    icon: <Stethoscope size={28} />,
    title: "Same / Next-Day Appointments",
    desc: "We prioritize timely access to care with flexible scheduling designed to support your health without long waiting periods.",
  },
  {
    icon: <Users size={28} />,
    title: "In-Clinic, Virtual, or Mobile Visits",
    desc: "Choose the care experience that fits your lifestyle — visit our clinic, connect virtually, or request optional mobile services.",
  },
  {
    icon: <Heart size={28} />,
    title: "Preventative Care Focus",
    desc: "Our approach emphasizes early detection, long-term wellness, and proactive care to help you stay healthy year-round.",
  },
  {
    icon: <Accessibility size={28} />,
    title: "Inclusive & Accessible for Everyone",
    desc: "We welcome individuals from all backgrounds with affordable, barrier-free healthcare designed to serve our entire community.",
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
