"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ChevronRight, Calendar, Mail, Phone, MapPin } from "lucide-react";

// 🩵 Mock Data
const doctorProfiles = {
  cardiology: [
    {
      slug: "alice-johnson",
      name: "Dr. Alice Johnson",
      title: "Senior Cardiologist",
      experience: "15 years",
      image: "/images/doctor1.jpg",
      department: "Cardiology",
      qualifications: "MBBS, MD (Cardiology)",
      specialties: ["Preventive Cardiology", "Echocardiography", "Hypertension Management"],
      about: `
        Dr. Alice Johnson is a board-certified cardiologist with over 15 years of experience
        in the diagnosis and treatment of heart-related conditions. Her focus lies in preventive
        cardiology, helping patients manage lifestyle and cardiovascular risks before complications arise.
        
        She believes in a holistic approach to care, integrating modern medical techniques with personalized guidance
        to improve long-term heart health.
      `,
      availability: [
        { day: "Monday", time: "09:00 AM – 12:00 PM" },
        { day: "Wednesday", time: "10:00 AM – 1:00 PM" },
        { day: "Friday", time: "02:00 PM – 5:00 PM" },
      ],
      contact: {
        phone: "+33 1 23 45 67 89",
        email: "alice.johnson@whitecrossclinic.com",
        location: "White Cross Clinic, Paris, France",
      },
    },
  ],
};

export default function DoctorProfilePage() {
  const { category, slug } = useParams();
  const router = useRouter();

  const doctorList = doctorProfiles[category] || [];
  const doctor = doctorList.find((d) => d.slug === slug);

  if (!doctor)
    return (
      <div className="min-h-screen flex items-center justify-center text-[var(--textLight)]">
        Doctor not found.
      </div>
    );

  // 🔹 Handle Appointment Redirect
  const handleBookAppointment = () => {
    const query = new URLSearchParams({
      department: doctor.department,
      doctor: doctor.name,
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
              <Image src={doctor.image} alt={doctor.name} fill className="object-cover" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-[var(--textDark)]">
                {doctor.name}
              </h1>
              <p className="text-[var(--brandColor)] font-medium mt-1">{doctor.title}</p>
              <p className="text-[var(--textLight)] text-sm mt-1">{doctor.experience} of experience</p>
              <p className="text-[var(--textLight)] mt-2 italic">{doctor.qualifications}</p>

              {/* Specialties */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                {doctor.specialties.map((spec, i) => (
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
              {doctor.about}
            </p>
          </motion.div>

          {/* Availability Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-10 bg-white rounded-2xl shadow-md border border-[var(--borderLight)] p-6 md:p-10"
          >
            <h2 className="text-xl font-semibold text-[var(--textDark)] mb-4">Availability</h2>
            <ul className="space-y-2">
              {doctor.availability.map((slot, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between border-b border-[var(--borderLight)] pb-2"
                >
                  <span className="text-[var(--textDark)] font-medium">{slot.day}</span>
                  <span className="text-[var(--textLight)]">{slot.time}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={handleBookAppointment}
              className="mt-6 w-full md:w-auto px-8 py-3 bg-[var(--brandColor)] text-white font-medium rounded-full hover:bg-[var(--brandColorDark)] transition-all flex items-center justify-center gap-2"
            >
              <Calendar size={18} /> Book Appointment
            </button>
          </motion.div>
        </div>

        {/* === STICKY SIDEBAR === */}
        <aside className="hidden mt-10 lg:flex flex-col gap-8 sticky self-start top-36 h-fit">
          {/* Contact Info */}
          <div className="bg-white shadow-md rounded-2xl p-6 border border-[var(--borderLight)]">
            <h3 className="text-lg font-semibold text-[var(--textDark)] mb-4">Contact Info</h3>
            <ul className="space-y-3 text-[var(--textLight)] text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[var(--brandColor)]" /> {doctor.contact.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[var(--brandColor)]" /> {doctor.contact.email}
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-[var(--brandColor)] mt-0.5" />
                <span>{doctor.contact.location}</span>
              </li>
            </ul>
          </div>

          {/* Related Doctors */}
          <div className="bg-white shadow-md rounded-2xl p-6 border border-[var(--borderLight)]">
            <h3 className="text-lg font-semibold text-[var(--textDark)] mb-4">Other Specialists</h3>
            <ul className="space-y-3 text-sm text-[var(--textLight)]">
              <li>
                <Link
                  href="/doctors/cardiology/martin-silva"
                  className="hover:text-[var(--brandColor)] font-medium"
                >
                  Dr. Martin Silva
                </Link>
                <p>Cardiac Surgeon</p>
              </li>
              <li>
                <Link
                  href="/doctors/cardiology/sarah-bennett"
                  className="hover:text-[var(--brandColor)] font-medium"
                >
                  Dr. Sarah Bennett
                </Link>
                <p>Pediatric Cardiologist</p>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
