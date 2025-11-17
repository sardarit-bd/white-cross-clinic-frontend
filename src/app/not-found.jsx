"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[var(--bgLight)]">
      {/* Illustration */}
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-[300px] h-[250px] mb-6"
      >
        <Image
          src="/images/404.svg"
          alt="Page not found illustration"
          fill
          className="object-contain"
          priority
        />
      </motion.div> */}

      {/* Heading */}
      <motion.h1
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-4xl md:text-5xl font-bold text-[var(--brandColor)] mb-3"
      >
        Oops! Page Not Found
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="text-[var(--textLight)] text-lg max-w-xl mb-8"
      >
        The page you’re looking for might have been removed, had its name changed, or is temporarily unavailable.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <Link
          href="/"
          className="px-6 py-3 rounded-full bg-[var(--brandColor)] text-white font-medium hover:bg-[var(--brandColorDark)] transition-all"
        >
          Back to Home
        </Link>
      </motion.div>
    </section>
  );
}
