"use client";

import { motion } from "framer-motion";
import { FaHeartbeat } from "react-icons/fa";

export default function SiteInitialLoader() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo/Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <div className="w-20 h-20 mx-auto bg-[var(--brandColor)] rounded-2xl flex items-center justify-center shadow-lg">
            <FaHeartbeat className="text-4xl text-white animate-pulse" />
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl font-semibold text-[var(--textDark)] mb-2"
        >
          Loading...
        </motion.h2>

        {/* Loading Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ delay: 0.4, duration: 1.5, repeat: Infinity }}
          className="h-1 bg-[var(--brandGradient)] rounded-full mx-auto"
        />
      </div>
    </div>
  );
}