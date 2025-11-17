"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// 🩵 Mock Department Data
const doctorCategories = [
  {
    name: "Cardiology",
    slug: "cardiology",
    description: "Heart and vascular health specialists focused on prevention, diagnosis, and treatment.",
    image: "/images/cardiology.jpg",
  },
  {
    name: "Neurology",
    slug: "neurology",
    description: "Experts in brain, spinal, and nervous system conditions, from migraines to movement disorders.",
    image: "/images/neurology.jpg",
  },
  {
    name: "Pediatrics",
    slug: "pediatrics",
    description: "Compassionate care for children, infants, and adolescents with a focus on lifelong wellness.",
    image: "/images/pediatrics.jpg",
  },
  {
    name: "Orthopedics",
    slug: "orthopedics",
    description: "Specialists in bones, joints, and muscular health to restore movement and strength.",
    image: "/images/ophthalmology.jpg",
  },
  {
    name: "Endocrinology",
    slug: "endocrinology",
    description: "Hormone and metabolism experts managing diabetes, thyroid, and other gland disorders.",
    image: "/images/hepatology.jpg",
  },
];

export default function DoctorCategoriesPage() {
  return (
    <section className="py-20 pt-48 bg-[var(--bgLight)] min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-[var(--textDark)]"
          >
            Our Medical Departments
          </motion.h1>
          <p className="text-[var(--textLight)] mt-3 max-w-3xl mx-auto">
            Explore our expert departments and meet doctors who provide advanced, patient-focused care.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctorCategories.map((dept, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-[var(--borderLight)] hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={dept.image}
                  alt={dept.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[var(--textDark)] mb-2">
                  {dept.name}
                </h3>
                <p className="text-[var(--textLight)] text-sm mb-5 line-clamp-3">
                  {dept.description}
                </p>
                <Link
                  href={`/doctors/${dept.slug}`}
                  className="inline-block text-[var(--brandColor)] font-medium hover:underline"
                >
                  Explore Doctors →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
