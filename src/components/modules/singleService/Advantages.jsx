"use client";
import { motion } from "framer-motion";


export default function ClinicAdvantages({advantages, title}) {
  return (
    <section className="container mx-auto px-4 py-20">

      {/* Subtitle */}
      <p className="text-center text-sm text-[var(--textMuted)] uppercase tracking-wide">
        What You Will Get
      </p>

      {/* Title */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[var(--textDark)] mt-2 mb-12">
       {title}
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {advantages.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[var(--brandColor)] text-[var(--textWhite)] p-6 rounded-xl shadow-[var(--shadowCard)] hover:shadow-[var(--shadowHover)] transition-shadow"
          >
            <h3 className="text-lg font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-white/90">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}