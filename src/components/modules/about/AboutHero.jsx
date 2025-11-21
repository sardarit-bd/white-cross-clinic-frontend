"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative py- pt-48 overflow-hidden bg-[var(--bgLight)] py-10">
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            About <span className="text-[var(--brandAccent)]">White Cross Clinic</span>
          </h1>
          <p className="mt-6 text-lg">
            At White Cross Clinic, our team of experienced and caring healthcare professionals is dedicated to providing you with the best possible care. Our team includes:

            <ul className="my-5">
              <li>General Practitioners (GPs)</li>
              <li>Specialist Doctors</li>
              <li>Nurses and Healthcare Assistants</li>
              <li>Administrative and Support Staff</li>
            </ul>
            Our team is passionate about delivering high-quality, patient-centered care, and we’re committed to ongoing training and professional development to ensure we stay up-to-date with the latest medical knowledge and techniques.
          </p>
          {/* <button className="mt-8 bg-white text-[var(--brandColor)] px-6 py-3 rounded-full font-medium shadow hover:bg-[var(--brandColorLight)] transition">
            <Link href="/appointment">Learn More</Link>
          </button> */}
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <Image
            src="/images/about-hero.png"
            alt="About White Cross Clinic"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
