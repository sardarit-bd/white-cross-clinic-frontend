"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: "/icons/mobile.webp",
    title: "Offering Mobile Clinics",
    desc: "Convenient healthcare delivered to your doorstep.",
  },
  {
    icon: "/icons/clock.webp",
    title: "Out Of Hours Services",
    desc: "Medical services available beyond regular clinic hours.",
  },
  {
    icon: "/icons/shield.webp",
    title: "Immunisation",
    desc: "Protecting against diseases through vaccination services.",
  },
  {
    icon: "/icons/travel.webp",
    title: "Travel Health",
    desc: "Preparing for safe and healthy travel experiences abroad.",
  },
  {
    icon: "/icons/family.webp",
    title: "Family Planning Services",
    desc: "Comprehensive reproductive health and contraceptive options.",
  },
  {
    icon: "/icons/wound.webp",
    title: "Wound Care",
    desc: "Professional treatment and management of various types of wounds.",
  },
  {
    icon: "/icons/vein.webp",
    title: "Deep Vein Thrombosis Testing",
    desc: "Screening for deep vein thrombosis to prevent complications.",
  },
  {
    icon: "/icons/skincare.webp",
    title: "Skin Care Services",
    desc: "Services tailored to enhance skin health and appearance.",
  },
  {
    icon: "/icons/facial.webp",
    title: "Facial Services",
    desc: "Revitalize your skin with specialized facial rejuvenation services.",
  },
  {
    icon: "/icons/xray.webp",
    title: "X Rays, MRI Scans, Ultrasound",
    desc: "X-rays, MRI scans, and ultrasounds for clear diagnosis.",
  },
  {
    icon: "/icons/hair.webp",
    title: "Permanent Hair Removal",
    desc: "Long-lasting solutions for unwanted hair removal.",
  },
  {
    icon: "/icons/physio.webp",
    title: "Physiotherapy Services",
    desc: "Rehabilitation and pain management through specialized exercises.",
  },
  {
    icon: "/icons/injury.webp",
    title: "Minor Injuries",
    desc: "Treatment for cuts, strains & non-life-threatening injuries.",
  },
  {
    icon: "/icons/gyno.webp",
    title: "Gynecologists, Gastroenterologists",
    desc: "Access to gynecology, gastroenterology, and more.",
  },
  {
    icon: "/icons/surgeon.webp",
    title: "General Surgeon",
    desc: "Surgical solutions for various medical conditions.",
  },
  {
    icon: "/icons/psychology.webp",
    title: "Psychiatrist",
    desc: "Mental health assessments and treatments by trained professionals.",
  },
  {
    icon: "/icons/foot.webp",
    title: "Private Podiatric Services",
    desc: "Specialized care for disorders in joints & feet.",
  },
  {
    icon: "/icons/skin.webp",
    title: "Hair Removal And Skin Treatment",
    desc: "Hair removal and skin treatments for advanced appearance.",
  },
  {
    icon: "/icons/bloodtest.webp",
    title: "Blood Test",
    desc: "Comprehensive laboratory tests for various health indicators.",
  },
];

export default function ServicesGrid() {
  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/serviceGridBanner.webp')" }} // Replace with your bg image
    >
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

      <div className="relative container mx-auto px-4">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((srv, index) => (
            <Link
              key={index}
              href="/topservices/sdsd"
              className="bg-[#0C2A5A] text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={srv.icon}
                  alt={srv.title}
                  width={50}
                  height={50}
                />
              </div>

              <h3 className="text-lg font-semibold text-center mb-2">
                {srv.title}
              </h3>

              <p className="text-sm text-center opacity-90 leading-relaxed">
                {srv.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
