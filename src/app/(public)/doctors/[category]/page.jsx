"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useParams } from "next/navigation";

/* ----------------------------------------------
   🔹 Mock Data (Replace with API Later)
---------------------------------------------- */
const doctorsByCategory = {
  cardiology: {
    subcategories: [
      {
        name: "General Cardiology",
        doctors: [
          {
            id: 1,
            slug: "alice-johnson",
            name: "Dr. Alice Johnson",
            title: "Senior Cardiologist",
            experience: "15 years",
            image: "/images/doctor1.jpg",
            description:
              "Specializes in preventive cardiology and cardiac imaging with a focus on patient well-being.",
          },
          {
            id: 2,
            slug: "martin-silva",
            name: "Dr. Martin Silva",
            title: "Cardiac Surgeon",
            experience: "12 years",
            image: "/images/doctor2.jpg",
            description:
              "Expert in minimally invasive and robotic-assisted cardiac surgeries.",
          },
        ],
      },
      {
        name: "Pediatric Cardiology",
        doctors: [
          {
            id: 3,
            slug: "sarah-bennett",
            name: "Dr. Sarah Bennett",
            title: "Pediatric Cardiologist",
            experience: "10 years",
            image: "/images/doctor2.jpg",
            description:
              "Provides specialized care for congenital and acquired heart conditions in children.",
          },
        ],
      },
    ],
  },

  neurology: {
    subcategories: [
      {
        name: "Clinical Neurology",
        doctors: [
          {
            id: 4,
            slug: "noah-collins",
            name: "Dr. Noah Collins",
            title: "Consultant Neurologist",
            experience: "10 years",
            image: "/images/doctor3.jpg",
            description:
              "Focused on brain disorders, migraines, and neuro-rehabilitation with a holistic approach.",
          },
        ],
      },
      {
        name: "Neurosurgery",
        doctors: [
          {
            id: 5,
            slug: "olivia-carter",
            name: "Dr. Olivia Carter",
            title: "Neurosurgeon",
            experience: "8 years",
            image: "/images/doctor4.jpg",
            description:
              "Performs advanced microsurgeries for epilepsy and Parkinson’s patients.",
          },
        ],
      },
    ],
  },
};

/* ----------------------------------------------
   🔹 Page Component
---------------------------------------------- */
export default function DoctorsByCategoryPage() {
  const params = useParams();
  const category = params?.category || "cardiology";
  const { subcategories = [] } = doctorsByCategory[category] || {};

  const [selectedSub, setSelectedSub] = useState(subcategories[0]?.name || "");
  const activeSubcategory =
    subcategories.find((s) => s.name === selectedSub) || subcategories[0];

  const categoryTitle =
    category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

  return (
    <section className="py-20 pt-48 bg-[var(--bgLight)] min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[var(--textLight)] mb-8">
          <Link href="/doctors" className="hover:text-[var(--brandColor)]">
            Doctors
          </Link>
          <ChevronRight size={16} />
          <span className="text-[var(--brandColor)] font-medium">
            {categoryTitle}
          </span>
        </nav>

        {/* Header */}
        <div className="text-center mb-10">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-5xl font-bold text-[var(--textDark)]"
          >
            {categoryTitle} Specialists
          </motion.h1>
          <p className="text-[var(--textLight)] mt-3 max-w-3xl mx-auto">
            Meet our dedicated {categoryTitle.toLowerCase()} doctors who combine
            expertise and compassion to deliver exceptional care.
          </p>
        </div>

        {/* Main Layout */}
        <div className="mt-10 grid lg:grid-cols-[280px_1fr] gap-10">
          {/* LEFT SIDEBAR */}
          <aside className="hidden lg:block sticky top-28 h-fit bg-white border border-[var(--borderLight)] rounded-2xl shadow-sm p-4">
            <h3 className="text-lg font-semibold text-[var(--textDark)] mb-4">
              Sub-Specialties
            </h3>
            <ul className="space-y-2">
              {subcategories.map((sub, i) => (
                <li key={i}>
                  <button
                    onClick={() => setSelectedSub(sub.name)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                      selectedSub === sub.name
                        ? "bg-[var(--brandColor)] text-white font-medium"
                        : "hover:bg-[var(--brandColorLight)] text-[var(--textDark)]"
                    }`}
                  >
                    {sub.name}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* RIGHT: DOCTOR CARDS */}
          <div>
            <motion.h2
              key={activeSubcategory?.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-2xl font-semibold mb-6 text-[var(--brandColor)]"
            >
              {activeSubcategory?.name}
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeSubcategory?.doctors?.map((doc) => (
                <motion.div
                  key={doc.id}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl overflow-hidden border border-[var(--borderLight)] shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="relative h-60">
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-[var(--textDark)]">
                      {doc.name}
                    </h3>
                    <p className="text-[var(--brandColor)] font-medium text-sm">
                      {doc.title}
                    </p>
                    <p className="text-[var(--textLight)] text-sm mt-1">
                      {doc.experience} experience
                    </p>
                    <p className="text-[var(--textLight)] text-sm mt-3 line-clamp-3">
                      {doc.description}
                    </p>
                    <Link
                      href={`/doctors/${category}/${doc.slug}`}
                      className="mt-5 inline-block px-6 py-2 rounded-full bg-[var(--brandColor)] text-white font-medium hover:bg-[var(--brandColorDark)] transition-all"
                    >
                      View Profile
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
