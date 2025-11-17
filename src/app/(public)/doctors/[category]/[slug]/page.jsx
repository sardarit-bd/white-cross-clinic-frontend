"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ChevronRight, Calendar, Mail, Phone, MapPin } from "lucide-react";

// 🩵 Mock Data
export const doctorProfiles = {
  cardiology: [
    {
      slug: "alice-johnson",
      name: "Dr. Alice Johnson",
      title: "Senior Cardiologist",
      experience: "15 years",
      image: "/images/doctor1.jpg",
      department: "Cardiology",
      qualifications: "MBBS, MD (Cardiology)",
      specialties: [
        "Preventive Cardiology",
        "Echocardiography",
        "Hypertension Management",
      ],
      about: `
        Dr. Alice Johnson is a board-certified cardiologist with over 15 years of experience
        treating heart-related conditions. Her expertise lies in preventive cardiology and 
        cardiac imaging. She focuses on helping patients maintain heart health through lifestyle 
        optimization and evidence-based medicine.
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
    {
      slug: "martin-silva",
      name: "Dr. Martin Silva",
      title: "Cardiac Surgeon",
      experience: "12 years",
      image: "/images/doctor2.jpg",
      department: "Cardiology",
      qualifications: "MBBS, MS (Cardiothoracic Surgery)",
      specialties: [
        "Minimally Invasive Surgery",
        "Coronary Artery Bypass",
        "Valve Replacement",
      ],
      about: `
        Dr. Martin Silva has 12 years of experience performing advanced cardiac surgeries 
        with a focus on minimally invasive techniques. He has successfully completed 
        hundreds of complex procedures, including valve repair and coronary bypass operations.
      `,
      availability: [
        { day: "Tuesday", time: "10:00 AM – 1:00 PM" },
        { day: "Thursday", time: "09:30 AM – 12:30 PM" },
        { day: "Saturday", time: "02:00 PM – 5:00 PM" },
      ],
      contact: {
        phone: "+33 1 56 23 78 90",
        email: "martin.silva@whitecrossclinic.com",
        location: "White Cross Clinic, Paris, France",
      },
    },
    {
      slug: "sarah-bennett",
      name: "Dr. Sarah Bennett",
      title: "Pediatric Cardiologist",
      experience: "10 years",
      image: "/images/doctor3.jpg",
      department: "Pediatric Cardiology",
      qualifications: "MBBS, MD (Pediatrics), DM (Pediatric Cardiology)",
      specialties: [
        "Congenital Heart Defects",
        "Pediatric Echocardiography",
        "Cardiac Catheterization",
      ],
      about: `
        Dr. Sarah Bennett provides compassionate care for children with congenital 
        and acquired heart diseases. She believes in family-centered treatment and 
        promotes early diagnosis to ensure better outcomes for young patients.
      `,
      availability: [
        { day: "Monday", time: "08:30 AM – 11:30 AM" },
        { day: "Wednesday", time: "01:00 PM – 4:00 PM" },
        { day: "Friday", time: "09:00 AM – 12:00 PM" },
      ],
      contact: {
        phone: "+33 1 87 45 90 12",
        email: "sarah.bennett@whitecrossclinic.com",
        location: "White Cross Clinic, Paris, France",
      },
    },
  ],

  neurology: [
    {
      slug: "noah-collins",
      name: "Dr. Noah Collins",
      title: "Consultant Neurologist",
      experience: "10 years",
      image: "/images/doctor4.jpg",
      department: "Neurology",
      qualifications: "MBBS, MD (Neurology)",
      specialties: ["Epilepsy", "Migraines", "Neuro-Rehabilitation"],
      about: `
        Dr. Noah Collins specializes in treating neurological disorders such as epilepsy 
        and migraines. His approach combines accurate diagnostics, modern therapies, and 
        personalized care to enhance neurological function and patient well-being.
      `,
      availability: [
        { day: "Tuesday", time: "09:00 AM – 12:30 PM" },
        { day: "Thursday", time: "01:00 PM – 4:00 PM" },
        { day: "Saturday", time: "09:30 AM – 1:00 PM" },
      ],
      contact: {
        phone: "+33 1 23 67 80 45",
        email: "noah.collins@whitecrossclinic.com",
        location: "White Cross Clinic, Paris, France",
      },
    },
    {
      slug: "isabella-grant",
      name: "Dr. Isabella Grant",
      title: "Neurophysiologist",
      experience: "9 years",
      image: "/images/doctor5.jpg",
      department: "Neurology",
      qualifications: "MBBS, MD (Neurophysiology)",
      specialties: ["EEG Diagnostics", "Cognitive Therapy", "Sleep Disorders"],
      about: `
        Dr. Isabella Grant focuses on EEG diagnostics and cognitive rehabilitation. 
        Her expertise lies in neurophysiology and brain-mapping for disorders like insomnia, 
        epilepsy, and memory dysfunctions.
      `,
      availability: [
        { day: "Monday", time: "09:30 AM – 12:30 PM" },
        { day: "Wednesday", time: "11:00 AM – 2:00 PM" },
      ],
      contact: {
        phone: "+33 1 44 78 32 19",
        email: "isabella.grant@whitecrossclinic.com",
        location: "White Cross Clinic, Paris, France",
      },
    },
    {
      slug: "olivia-carter",
      name: "Dr. Olivia Carter",
      title: "Neurosurgeon",
      experience: "8 years",
      image: "/images/doctor6.jpg",
      department: "Neurosurgery",
      qualifications: "MBBS, MCh (Neurosurgery)",
      specialties: ["Microsurgery", "Epilepsy Surgery", "Brain Tumors"],
      about: `
        Dr. Olivia Carter is a skilled neurosurgeon specializing in microsurgical 
        and minimally invasive brain procedures. Her precise surgical techniques 
        ensure minimal downtime and enhanced recovery.
      `,
      availability: [
        { day: "Monday", time: "10:00 AM – 1:00 PM" },
        { day: "Wednesday", time: "02:00 PM – 5:00 PM" },
        { day: "Friday", time: "09:00 AM – 12:00 PM" },
      ],
      contact: {
        phone: "+33 1 45 67 89 00",
        email: "olivia.carter@whitecrossclinic.com",
        location: "White Cross Clinic, Paris, France",
      },
    },
    {
      slug: "daniel-reed",
      name: "Dr. Daniel Reed",
      title: "Spinal Neurosurgeon",
      experience: "11 years",
      image: "/images/doctor7.jpg",
      department: "Neurosurgery",
      qualifications: "MBBS, DNB (Neurosurgery)",
      specialties: ["Spinal Reconstruction", "Trauma Surgery", "Disc Herniation"],
      about: `
        Dr. Daniel Reed is an expert in spinal neurosurgery and has performed 
        numerous successful spinal deformity corrections. He uses advanced 
        imaging-guided methods for precision results.
      `,
      availability: [
        { day: "Tuesday", time: "09:00 AM – 1:00 PM" },
        { day: "Thursday", time: "10:00 AM – 3:00 PM" },
      ],
      contact: {
        phone: "+33 1 77 33 55 88",
        email: "daniel.reed@whitecrossclinic.com",
        location: "White Cross Clinic, Paris, France",
      },
    },
  ],

  pediatrics: [
    {
      slug: "lina-miah",
      name: "Dr. Lina Miah",
      title: "Pediatrician",
      experience: "10 years",
      image: "/images/doctor8.jpg",
      department: "Pediatrics",
      qualifications: "MBBS, MD (Pediatrics)",
      specialties: ["Child Development", "Immunization", "Nutrition"],
      about: `
        Dr. Lina Miah focuses on holistic care for children and adolescents, 
        ensuring healthy growth through preventive medicine, immunizations, and nutritional guidance.
      `,
      availability: [
        { day: "Monday", time: "09:00 AM – 12:00 PM" },
        { day: "Thursday", time: "10:00 AM – 2:00 PM" },
      ],
      contact: {
        phone: "+33 1 99 22 45 67",
        email: "lina.miah@whitecrossclinic.com",
        location: "White Cross Clinic, Paris, France",
      },
    },
    {
      slug: "rafi-hassan",
      name: "Dr. Rafi Hassan",
      title: "Child Health Specialist",
      experience: "7 years",
      image: "/images/doctor9.jpg",
      department: "Pediatrics",
      qualifications: "MBBS, DCH (Child Health)",
      specialties: ["Pediatric Infections", "Growth Monitoring", "Allergies"],
      about: `
        Dr. Rafi Hassan provides comprehensive care for children, including 
        diagnosis and management of common pediatric illnesses, allergies, and nutrition-related issues.
      `,
      availability: [
        { day: "Wednesday", time: "09:00 AM – 12:00 PM" },
        { day: "Friday", time: "01:00 PM – 4:00 PM" },
      ],
      contact: {
        phone: "+33 1 12 88 34 56",
        email: "rafi.hassan@whitecrossclinic.com",
        location: "White Cross Clinic, Paris, France",
      },
    },
    {
      slug: "emily-rose",
      name: "Dr. Emily Rose",
      title: "Neonatologist",
      experience: "9 years",
      image: "/images/doctor10.jpg",
      department: "Neonatology",
      qualifications: "MBBS, MD (Neonatology)",
      specialties: ["Premature Care", "NICU Management", "Newborn Screening"],
      about: `
        Dr. Emily Rose is a neonatologist experienced in managing high-risk and 
        premature newborns. Her expertise ensures that every newborn receives safe and optimal care.
      `,
      availability: [
        { day: "Monday", time: "08:30 AM – 11:30 AM" },
        { day: "Thursday", time: "01:30 PM – 4:00 PM" },
      ],
      contact: {
        phone: "+33 1 22 45 33 09",
        email: "emily.rose@whitecrossclinic.com",
        location: "White Cross Clinic, Paris, France",
      },
    },
  ],

  orthopedics: [
    {
      slug: "liam-anderson",
      name: "Dr. Liam Anderson",
      title: "Orthopedic Surgeon",
      experience: "14 years",
      image: "/images/doctor11.jpg",
      department: "Orthopedics",
      qualifications: "MBBS, MS (Orthopedics)",
      specialties: ["Joint Replacement", "Trauma Surgery", "Arthroscopy"],
      about: `
        Dr. Liam Anderson has extensive experience in orthopedic surgery, 
        specializing in joint replacement and fracture management. His approach 
        focuses on mobility restoration and long-term recovery.
      `,
      availability: [
        { day: "Tuesday", time: "10:00 AM – 1:00 PM" },
        { day: "Friday", time: "09:00 AM – 12:00 PM" },
      ],
      contact: {
        phone: "+33 1 55 22 33 44",
        email: "liam.anderson@whitecrossclinic.com",
        location: "White Cross Clinic, Paris, France",
      },
    },
    {
      slug: "claire-hudson",
      name: "Dr. Claire Hudson",
      title: "Sports Injury Specialist",
      experience: "9 years",
      image: "/images/doctor12.jpg",
      department: "Orthopedics",
      qualifications: "MBBS, D. Orth",
      specialties: ["Sports Medicine", "Ligament Repair", "Rehabilitation"],
      about: `
        Dr. Claire Hudson helps athletes recover from injuries using advanced 
        arthroscopic and physiotherapy-based approaches. She emphasizes rapid 
        recovery and safe return to sport.
      `,
      availability: [
        { day: "Monday", time: "09:00 AM – 11:30 AM" },
        { day: "Wednesday", time: "01:00 PM – 4:00 PM" },
      ],
      contact: {
        phone: "+33 1 76 88 12 90",
        email: "claire.hudson@whitecrossclinic.com",
        location: "White Cross Clinic, Paris, France",
      },
    },
    {
      slug: "michael-hunt",
      name: "Dr. Michael Hunt",
      title: "Spine and Trauma Surgeon",
      experience: "13 years",
      image: "/images/doctor13.jpg",
      department: "Spine & Trauma",
      qualifications: "MBBS, MS (Ortho)",
      specialties: ["Spinal Surgery", "Fracture Fixation", "Post-Trauma Care"],
      about: `
        Dr. Michael Hunt is an orthopedic specialist handling trauma and spinal 
        deformities. His surgical precision and patient-centered approach 
        deliver reliable, lasting recovery.
      `,
      availability: [
        { day: "Tuesday", time: "02:00 PM – 5:00 PM" },
        { day: "Thursday", time: "09:00 AM – 12:00 PM" },
      ],
      contact: {
        phone: "+33 1 77 44 22 00",
        email: "michael.hunt@whitecrossclinic.com",
        location: "White Cross Clinic, Paris, France",
      },
    },
  ],

  endocrinology: [
    {
      slug: "maria-islam",
      name: "Dr. Maria Islam",
      title: "Endocrinologist",
      experience: "11 years",
      image: "/images/doctor14.jpg",
      department: "Endocrinology",
      qualifications: "MBBS, MD (Endocrinology)",
      specialties: ["Diabetes", "Thyroid Disorders", "Obesity Management"],
      about: `
        Dr. Maria Islam provides specialized care for diabetes and hormonal 
        imbalances. She designs comprehensive treatment plans that combine 
        medical therapy with lifestyle management.
      `,
      availability: [
        { day: "Monday", time: "09:00 AM – 1:00 PM" },
        { day: "Thursday", time: "02:00 PM – 5:00 PM" },
      ],
      contact: {
        phone: "+33 1 90 22 11 33",
        email: "maria.islam@whitecrossclinic.com",
        location: "White Cross Clinic, Paris, France",
      },
    },
    {
      slug: "ethan-jones",
      name: "Dr. Ethan Jones",
      title: "Metabolic Specialist",
      experience: "10 years",
      image: "/images/doctor15.jpg",
      department: "Endocrinology",
      qualifications: "MBBS, DM (Metabolic Medicine)",
      specialties: ["Metabolic Syndrome", "Obesity", "Cholesterol Management"],
      about: `
        Dr. Ethan Jones focuses on metabolic health and chronic lifestyle diseases. 
        He offers personalized guidance on weight control, cholesterol, and 
        long-term prevention of diabetes.
      `,
      availability: [
        { day: "Wednesday", time: "09:00 AM – 12:00 PM" },
        { day: "Friday", time: "01:00 PM – 4:00 PM" },
      ],
      contact: {
        phone: "+33 1 55 77 99 88",
        email: "ethan.jones@whitecrossclinic.com",
        location: "White Cross Clinic, Paris, France",
      },
    },
    {
      slug: "sophia-lee",
      name: "Dr. Sophia Lee",
      title: "Hormone Specialist",
      experience: "8 years",
      image: "/images/doctor16.jpg",
      department: "Endocrinology",
      qualifications: "MBBS, MD (Hormonal Medicine)",
      specialties: [
        "Thyroid Disorders",
        "Reproductive Hormones",
        "Adrenal Health",
      ],
      about: `
        Dr. Sophia Lee specializes in hormonal and metabolic disorders, 
        offering therapies that restore balance and vitality for patients 
        with chronic endocrine conditions.
      `,
      availability: [
        { day: "Tuesday", time: "10:00 AM – 1:00 PM" },
        { day: "Friday", time: "09:00 AM – 11:30 AM" },
      ],
      contact: {
        phone: "+33 1 88 44 99 00",
        email: "sophia.lee@whitecrossclinic.com",
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
