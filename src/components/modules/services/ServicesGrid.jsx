"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: "/icons/mobile.webp",
    title: "Offering Mobile Clinics",
    desc: "Convenient healthcare delivered to your doorstep.",
    link: "mobile-clinics"
  },
  {
    icon: "/icons/clock.webp",
    title: "Out Of Hours Services",
    desc: "Medical services available beyond regular clinic hours.",
    link: "out-of-hours-services"
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
    icon: "/icons/surgeon.png",
    title: "General Surgeon",
    desc: "Surgical solutions for various medical conditions.",
  },
  {
    icon: "/icons/psychology.png",
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
    icon: "/icons/bloodtest.png",
    title: "Blood Test",
    desc: "Comprehensive laboratory tests for various health indicators.",
  },
];

export default function ServicesGrid() {
  return (
    <section
      className="relative py-20 bg-cover bg-center">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

      <div className="relative container mx-auto px-4">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((srv, index) => {
            const slug =
              srv?.link ||
              srv.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-[#0C2A5A] text-white p-6 transition flex flex-col"
              >
                {/* ICON */}
                <div className="flex justify-center mb-4">
                  <Image
                    src={srv.icon}
                    alt={srv.title}
                    width={50}
                    height={50}
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-center mb-2">
                  {srv.title}
                </h3>

                {/* DESC */}
                <p className="text-sm text-center opacity-90 leading-relaxed mb-6 flex-grow">
                  {srv.desc}
                </p>

                {/* BUTTONS */}
                <div className="mt-auto flex gap-3 justify-center">

                  {/* SEE DETAILS */}
                  <Link
                    href={`/topservices/${slug}`}
                    className="text-sm px-4 py-2 cursor-pointer border border-[var(--brandColorLight)] bg-white/10 hover:bg-white/20 transition"
                  >
                    See Details
                  </Link>

                  {/* BOOK NOW */}
                  <Link
                    href={`/get-book?service=${slug}`}
                    className="text-sm px-4 py-2 cursor-pointer bg-[var(--brandColor)] hover:bg-[var(--brandColorDark)] text-white transition"
                  >
                    Book Now
                  </Link>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
