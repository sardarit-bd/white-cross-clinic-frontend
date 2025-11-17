"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const departments = [
  {
    id: "cardiology",
    name: "Cardiology",
    short:
      "We specialize in the prevention, diagnosis, and treatment of heart and vascular diseases.",
    long: "Our cardiology department provides advanced diagnostics, non-invasive imaging, and expert care for all heart conditions. Our focus is on improving cardiac health through personalized treatment plans and preventive strategies.",
    image: "/images/cardiology.jpg",
  },
  {
    id: "neurology",
    name: "Neurology",
    short:
      "Comprehensive care for disorders affecting the brain, spinal cord, and nerves.",
    long: "Our neurologists offer expert diagnosis and management of conditions such as stroke, epilepsy, and multiple sclerosis. We combine cutting-edge neuroimaging with compassionate, multidisciplinary care.",
    image: "/images/neurology.jpg",
  },
  {
    id: "hepatology",
    name: "Hepatology",
    short:
      "Dedicated to liver and digestive system care with state-of-the-art facilities.",
    long: "Our hepatology team manages all liver-related diseases, including hepatitis, cirrhosis, and metabolic disorders. We focus on early detection, patient education, and tailored treatments for each individual.",
    image: "/images/hepatology.jpg",
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    short:
      "Caring for children’s health from newborns to adolescents with compassion and expertise.",
    long: "Our pediatric department provides preventive care, vaccinations, and treatment for a wide range of childhood illnesses. We focus on nurturing health, growth, and development in every stage of childhood.",
    image: "/images/pediatrics.jpg",
  },
  {
    id: "ophthalmology",
    name: "Ophthalmologists",
    short: "Complete eye care services with precision diagnostics and surgery.",
    long: "Our ophthalmology specialists offer treatments for cataracts, glaucoma, and vision correction using the latest technologies. We’re committed to helping patients see the world clearly and comfortably.",
    image: "/images/ophthalmology.jpg",
  },
];

export default function DepartmentsSection() {
  const [activeDept, setActiveDept] = useState(departments[0]);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate departments every 6 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveDept((prev) => {
        const currentIndex = departments.findIndex((d) => d.id === prev.id);
        const nextIndex = (currentIndex + 1) % departments.length;
        return departments[nextIndex];
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleClick = (dept) => {
    setActiveDept(dept);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000); // Resume auto after 10s
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-3">
            Departments
          </h2>
          <div className="h-[4px] w-[120px] bg-[var(--brandGradient)] mx-auto rounded-full mb-4"></div>
          <p className="text-[var(--textLight)] max-w-2xl mx-auto">
            Our departments are designed to provide specialized medical care
            that combines expertise, innovation, and compassion.
          </p>
        </div>

        {/* Layout */}
        <div className="grid md:grid-cols-[250px_1fr_400px] gap-8 items-start">
          {/* Sidebar Menu */}
          <div className="flex flex-col gap-4">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => handleClick(dept)}
                className={`text-left font-semibold transition-all duration-300 ${
                  activeDept.id === dept.id
                    ? "text-[var(--brandColor)] border-l-4 border-[var(--brandColor)] pl-3"
                    : "text-[var(--textDark)] hover:text-[var(--brandColor)] pl-3"
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>

          {/* Department Content */}
          <div className="border-l border-[var(--borderLight)] pl-6 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDept.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-2xl font-semibold text-[var(--textDark)] mb-3">
                  {activeDept.name}
                </h3>
                <p className="italic text-[var(--textLight)] mb-3">
                  {activeDept.short}
                </p>
                <p className="text-[var(--textDark)] leading-relaxed">
                  {activeDept.long}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDept.image}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="hidden md:block"
            >
              <Image
                src={activeDept.image}
                alt={activeDept.name}
                width={500}
                height={350}
                className="rounded-xl shadow-md object-cover w-full h-[280px]"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
