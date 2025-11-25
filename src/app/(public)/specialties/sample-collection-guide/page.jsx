"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const urineTests = [
  "24 Hour Urine Sample",
  "24 Hour Urine for Creatinine Clearance Collection",
  "24 Hour Urine sample for Serotonin",
  "24 Hour Urine sample for Urinary 5HIAA",
  "24 Hour Urine sample for Urinary Catecholamines",
  "24 Hour Urine Sample for Urinary Metanephrines",
  "24 Hour Urine sample for Urinary Oxalate",
  "24 Hour Urine sample for Urinary Prostaglandin D2",
  "Urine Collection for Children (Using U-Bag®)",
];

export default function UrineCollection() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-12">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-6">
        24 Hour Urine Collection
      </h1>

      {/* Subtext */}
      <p className="text-[var(--textLight)] mb-8">
        Please click on the links below to download a patient information sheet.
      </p>

      {/* List */}
      <div className="space-y-4">
        {urineTests.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Link
              href="#"
              className="block text-[var(--textDark)] hover:text-[var(--brandColor)] 
              font-medium transition-all duration-200"
            >
              {item}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
