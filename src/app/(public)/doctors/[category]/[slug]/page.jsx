"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ChevronRight, Calendar, Mail, Phone, MapPin, Sun, Moon } from "lucide-react";
import { useSingleUserById } from "@/hooks/useUser";


export default function DoctorProfilePage() {
  const { category, slug } = useParams();
  const { data: doctor } = useSingleUserById(slug)
  console.log(doctor)
  const router = useRouter();

  if (!doctor)
    return (
      <div className="min-h-screen flex items-center justify-center text-[var(--textLight)]">
        Doctor not found.
      </div>
    );

  // 🔹 Handle Appointment Redirect
  const handleBookAppointment = () => {
    const query = new URLSearchParams({
      department: doctor?.doctorInfo?.department,
      doctor: slug,
    }).toString();
    router.push(`/appointment?${query}`);
  };


  return (
    <section className="py-20 pt-48 bg-[var(--bgLight)] min-h-screen">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-[2fr_1fr] gap-10">
        {/* === MAIN CONTENT === */}
        <div>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[var(--textLight)] mb-6">
            <Link href="/doctors" className="hover:text-[var(--brandColor)]">
              Doctors
            </Link>
            <ChevronRight size={14} />
            <Link href={`/doctors/${category}`} className="hover:text-[var(--brandColor)]">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
            <ChevronRight size={14} />
            <span className="text-[var(--brandColor)] font-medium truncate">{doctor.name}</span>
          </nav>

          {/* Doctor Header */}
          <div className="bg-white rounded-2xl shadow-md border border-[var(--borderLight)] p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
              <Image src={doctor?.avatar} alt={doctor?.name} fill className="object-cover" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-[var(--textDark)]">
                {doctor?.name}
              </h1>
              <p className="text-[var(--brandColor)] font-medium mt-1">{doctor?.doctorInfo?.designation}</p>
              <p className="text-[var(--textLight)] text-sm mt-1">{doctor?.doctorInfo?.yearsOfExperience} of experience</p>
              <p className="text-[var(--textLight)] mt-2 italic">{doctor?.doctorInfo?.education}</p>

              {/* Specialties */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                {doctor?.specialties?.map((spec, i) => (
                  <span
                    key={i}
                    className="bg-[var(--brandColorLight)] text-[var(--brandColor)] text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-10 bg-white rounded-2xl shadow-md border border-[var(--borderLight)] p-6 md:p-10"
          >
            <h2 className="text-xl font-semibold text-[var(--textDark)] mb-4">About</h2>
            <p className="text-[var(--textLight)] leading-relaxed whitespace-pre-line">
              {doctor?.doctorInfo?.intro}
            </p>
          </motion.div>

        </div>

        {/* === STICKY SIDEBAR === */}
        <aside className="hidden mt-10 lg:flex flex-col gap-8 sticky self-start top-36 h-fit">
          {/* Contact Info */}
          <div className="bg-white shadow-md rounded-2xl p-6 border border-[var(--borderLight)]">
            <h3 className="text-lg font-semibold text-[var(--textDark)] mb-4">Contact Info</h3>
            <ul className="space-y-3 text-[var(--textLight)] text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[var(--brandColor)]" /> {doctor?.doctorInfo?.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[var(--brandColor)]" /> {doctor?.email}
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-[var(--brandColor)] mt-0.5" />
                <span>{doctor?.doctorInfo?.address}</span>
              </li>
            </ul>
          </div>

          {/* Availability Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-10 bg-white rounded-2xl shadow-md border border-[var(--borderLight)] p-6 md:p-10"
          >
            <h2 className="text-xl font-semibold text-[var(--textDark)] mb-4">Availability</h2>
         
              <div className="grid grid-cols-1 gap-4">
                <AnimatePresence>
                  {doctor?.doctorInfo?.available?.map((s) => (
                    <motion.div
                      key={s.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="group relative bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all duration-200"
                    >
                      {/* Status Indicator */}
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#0076BC] rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div className="flex justify-between flex-col gap-4">
                        {/* Left Side - Schedule Info */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-[#0076BC]/10 rounded-lg">
                              <Calendar size={18} className="text-[#0076BC]" />
                            </div>
                            <h4 className="text-lg font-semibold text-gray-800">{s.day}</h4>
                            <span className={`px-3 py-1 text-xs font-medium rounded-full flex items-center gap-1 ${s.shift === "morning"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-blue-100 text-blue-700"
                              }`}>
                              {s.shift === "morning" ? <Sun size={12} /> : <Moon size={12} />}
                              {s.shift.charAt(0).toUpperCase() + s.shift.slice(1)}
                            </span>
                          </div>

                          <div className="flex items-center gap-4 text-gray-600">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full" />
                              <span className="text-sm font-medium">Start: {s.from}</span>
                            </div>
                            <div className="w-4 h-[1px] bg-gray-300" />
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full" />
                              <span className="text-sm font-medium">End: {s.to}</span>
                            </div>
                          </div>
                        </div>

                       
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
      

            <button
              onClick={handleBookAppointment}
              className="mt-6 w-full md:w-auto px-8 py-3 bg-[var(--brandColor)] text-white font-medium rounded-full hover:bg-[var(--brandColorDark)] transition-all flex items-center justify-center gap-2"
            >
              <Calendar size={18} /> Book Appointment
            </button>
          </motion.div>
        </aside>
      </div>
    </section>
  );
}
