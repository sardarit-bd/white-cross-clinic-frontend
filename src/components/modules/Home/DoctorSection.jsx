"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const doctors = [
  {
    id: "walter-white",
    name: "Dr. Walter White",
    title: "Chief Medical Officer",
    image: "/images/doctor1.jpg",
  },
  {
    id: "sarah-johnson",
    name: "Dr. Sarah Johnson",
    title: "Anesthesiologist",
    image: "/images/doctor2.jpg",
  },
  {
    id: "william-anderson",
    name: "Dr. William Anderson",
    title: "Cardiologist",
    image: "/images/doctor3.jpg",
  },
  {
    id: "amanda-jepson",
    name: "Dr. Amanda Jepson",
    title: "Neurosurgeon",
    image: "/images/doctor4.jpg",
  },
];

export default function DoctorsSection() {
  return (
    <section className="py-20 bg-[var(--bgLight)]">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--textDark)]">
            Doctors
          </h2>
          <div className="w-16 h-[3px] mx-auto mt-3 bg-[var(--brandAccent)] rounded-full" />
          <p className="text-[var(--textLight)] mt-4 max-w-2xl mx-auto">
            Our medical specialists combine experience, empathy, and innovation
            to deliver trusted care for every patient.
          </p>
        </motion.div>

        {/* Doctor Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doc, i) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden group transition-all duration-500 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  width={400}
                  height={400}
                  className="object-cover w-full h-[300px] transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover Social Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-[rgba(0,118,188,0.15)] opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {[Twitter, Facebook, Instagram, Linkedin].map((Icon, idx) => (
                    <button
                      key={idx}
                      className="p-2 bg-white text-[var(--brandColor)] rounded-full shadow-md hover:bg-[var(--brandColor)] hover:text-white transition-all"
                    >
                      <Icon size={18} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Doctor Info */}
              <div className="p-6 text-left">
                <Link
                  href={`/images/${doc.id}`}
                  className="text-lg font-semibold text-[var(--textDark)] hover:text-[var(--brandColor)] transition-all"
                >
                  {doc.name}
                </Link>
                <p className="text-[var(--textLight)] text-sm mt-1">
                  {doc.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
