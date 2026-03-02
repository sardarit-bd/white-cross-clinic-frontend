"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useParams } from "next/navigation";
import AlphabetFilter from "@/components/shared/AlphabetFilter";
import { useCategory } from "@/hooks/useCategory";
import { useDoctorsBySubDept } from "@/hooks/useUser";


/* ----------------------------------------------
   🔹 Page Component
---------------------------------------------- */
export default function DoctorsByCategoryPage() {
  const params = useParams();
  const category = params?.category || "cardiology";
  const { subcategories } = useCategory();
  const filteredSubCategory = subcategories.filter(sub => sub?.category?.slug === category)
  const [filteredDoctors, setFilteredDoctors] = useState([])
  const [activeLetter, setActiveLetter] = useState("all")


  const [selectedSub, setSelectedSub] = useState(filteredSubCategory[0]?.name || "");

  const activeSubcategory =
    filteredSubCategory.find((s) => s.name === selectedSub) || subcategories[0];

  const { data: doctors = [] } = useDoctorsBySubDept(activeSubcategory?._id)

  const categoryTitle =
    category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();


  useEffect(() => {
    if (activeLetter?.toLowerCase() === 'all') {
      setFilteredDoctors(doctors)
    } else {
      const filters = doctors?.filter(doc => doc?.user?.name?.charAt(0)?.toLowerCase() === activeLetter?.toLowerCase())
      setFilteredDoctors(filters)
    }
  }, [activeLetter, activeSubcategory, doctors])
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
              {filteredSubCategory.map((sub, i) => (
                <li key={i}>
                  <button
                    onClick={() => setSelectedSub(sub.name)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${selectedSub === sub.name
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
            <AlphabetFilter active={activeLetter} onSelect={setActiveLetter} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDoctors?.map((doc) => (
                <motion.div
                  key={doc.id}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl overflow-hidden border border-[var(--borderLight)] shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="relative h-60">
                    <Image
                      src={doc?.user?.avatar}
                      alt={doc?.user?.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-[var(--textDark)]">
                      {doc?.user?.name}
                    </h3>
                    <p className="text-[var(--brandColor)] font-medium text-sm">
                      {doc?.designation}
                    </p>
                    <p className="text-[var(--textLight)] text-sm mt-1">
                      {doc?.yearsOfExperience} experience
                    </p>
                    <p className="text-[var(--textLight)] text-sm mt-3 line-clamp-3">
                      {doc?.intro}
                    </p>
                    <Link
                      href={`/doctors/${category}/${doc?.user?._id}`}
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
