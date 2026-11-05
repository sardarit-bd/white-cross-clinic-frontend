"use client";

import { useAuth } from "@/hooks/useAuth";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NavButton() {
  const { user, loading } = useAuth();
  return (
    <div className="flex items-center gap-3">
      {loading ? (
        <></>
      ) : user ? (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-2 rounded-md font-medium border border-(--brandColor) text-(--brandColor) bg-white shadow-sm hover:bg-[var(--brandColorLight)] transition"
        >
          <Link href="/dashboard">Dashboard</Link>
        </motion.button>
      ) : (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-2 rounded-md font-medium border border-(--brandColor) text-(--brandColor) bg-white shadow-sm hover:bg-[var(--brandColorLight)] transition"
        >
          <Link href="/login">Login</Link>
        </motion.button>
      )}
    </div>
  );
}
