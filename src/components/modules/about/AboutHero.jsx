"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative pt-14 overflow-hidden bg-[var(--bgLight)] py-10 pb-20">
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            About <span className="text-[var(--brandColor)]">White Cross Clinic</span>
          </h1>
          <p className="mt-6 text-lg">
            White Cross Clinic is a modern, patient-centred healthcare provider offering comprehensive
            GP-led care with seamless access to specialist services across the UK. Although White Cross
            Clinic does <b>not provide in-house specialist consultants</b>, we work closely with <b>all major
              medical and surgical specialties</b> to ensure patients receive <b>rapid investigations, timely
                diagnosis, and specialist treatment</b> when required.
          </p>
          <p className="mt-5 text-lg">
            Our clinical team acts as your <b>primary medical home</b>, coordinating every stage of your
            healthcare journey from first assessment to specialist referral, follow-up, and long-term
            management.
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
            width={1000}
            height={400}
            className="shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
