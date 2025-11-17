"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative bg-[var(--brandGradient)] text-white py- pt-48 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--brandColor)]/40" />
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-12">
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
          <p className="mt-6 text-lg text-white/90">
            Compassionate care, cutting-edge medicine, and a commitment to your well-being — that’s the White Cross way.
          </p>
          <button className="mt-8 bg-white text-[var(--brandColor)] px-6 py-3 rounded-full font-medium shadow hover:bg-[var(--brandColorLight)] transition">
            Learn More
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <Image
            src="/images/about-hero.jpg"
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
