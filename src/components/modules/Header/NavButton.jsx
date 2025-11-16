"use client";

import { motion } from "framer-motion";

export default function NavButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-5 py-2 rounded-md text-white font-medium shadow-md bg-[var(--brandColor)]"
    >
      Make an Appointment
    </motion.button>
  );
}
