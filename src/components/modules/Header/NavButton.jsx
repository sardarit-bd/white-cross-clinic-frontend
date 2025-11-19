"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NavButton() {
  return (
    <div className="flex items-center gap-3">

      {/* Appointment Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-5 py-2 rounded-md text-white font-medium shadow-md bg-[var(--brandColor)]"
      >
        <Link href="/appointment">Make an Appointment</Link>
      </motion.button>

      {/* Login Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-5 py-2 rounded-md font-medium border border-[var(--brandColor)] text-[var(--brandColor)] bg-white shadow-sm hover:bg-[var(--brandColorLight)] transition"
      >
        <Link href="/login">Login</Link>
      </motion.button>

    </div>
  );
}
