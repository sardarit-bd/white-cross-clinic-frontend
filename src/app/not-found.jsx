"use client";

import { motion } from "framer-motion";
import Link from "next/link";
export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-(--bgLight)">
      <motion.h1
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-4xl md:text-5xl font-bold text-(--brandColor) mb-3"
      >
        Oops! Page Not Found
      </motion.h1>
      <motion.p
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="text-(--textLight) text-lg max-w-xl mb-8"
      >
        The page you’re looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <Link
          href="/"
          className="px-6 py-3 rounded-full bg-(--brandColor) text-white font-medium hover:bg-(--brandColorDark) transition-all"
        >
          Back to Home
        </Link>
      </motion.div>
    </section>
  );
}
