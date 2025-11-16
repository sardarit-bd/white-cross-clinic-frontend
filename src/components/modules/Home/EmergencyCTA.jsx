"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function EmergencyCTA() {
  return (
    <section
      className="relative py-20 text-center text-white overflow-hidden"
      style={{
        background: "var(--brandGradient)", // uses your brand gradient: blue → green
      }}
    >
      {/* Animated Background Overlay (optional soft motion) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-white mix-blend-overlay"
      ></motion.div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-semibold mb-4"
        >
          In an emergency? <span className="font-bold">Need help now?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base md:text-lg text-white/90 mb-8 leading-relaxed"
        >
          Our medical team is available 24/7 to assist you in emergencies. Whether
          it’s a sudden illness, injury, or critical condition — help is just a click away.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            href="/appointments"
            className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[var(--brandColor)] transition-all duration-300"
          >
            Make an Appointment
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
