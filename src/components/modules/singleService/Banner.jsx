"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


export default function MobileClinicIntro({ mobileClinicData }) {
  return (
    <section className="bg-[var(--bgWhite)] py-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16 px-4">

        {/* LEFT SIDE: IMAGE + BLUE BOTTOM BAR */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* Rounded Top Image */}
          <div className="relative shadow-[var(--shadowCard)] max-w-2xl w-full">
            <Image
              src={mobileClinicData.image}
              alt={mobileClinicData.title}
              width={900}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Bottom Blue Section (Rounded Same Width) */}

        </motion.div>

        {/* RIGHT SIDE: TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm tracking-wide text-[var(--brandColorDark)] font-semibold mb-2">
            {mobileClinicData.tag}
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-[var(--textDark)] mb-6 leading-tight">
            {mobileClinicData.title}
          </h2>

          <p className="text-[var(--textMedium)] text-[16px] leading-relaxed max-w-xl">
            {mobileClinicData.description}
          </p>





          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-12"
          >
            <Link
              href="/appointment"
              className="inline-block px-8 py-3 bg-[var(--brandColorDark)] text-lg text-white font-semibold transition-all duration-300"
            >
              Book an Appointment
            </Link>
          </motion.div>





        </motion.div>




      </div>
    </section>
  );
}
