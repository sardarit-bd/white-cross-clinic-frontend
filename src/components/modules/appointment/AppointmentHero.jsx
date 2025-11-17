"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AppointmentHero() {
  return (
    <section className="relative overflow-hidden  py-20 pt-48">

      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10 relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Schedule Your <span className="text-[var(--brandAccent)]">Appointment</span>
          </h1>
          <p className="mt-6 text-lg">
            Get professional medical care from trusted doctors. Select your department, choose your doctor, and confirm your slot — all in a few clicks.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 flex justify-center"
        >
          <Image
            src="/images/appointment-hero.png"
            alt="Doctor consultation"
            width={550}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
