"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// -------------------------
// Mega Menu Data
// -------------------------
const doctorDepartments = [
  "Neurology",
  "Cardiology",
  "Orthopedics",
  "Pediatrics",
  "Gastroenterology",
  "Dermatology",
  "Psychiatry",
  "ENT",
  "Oncology",
  "Gynecology",
  "Urology",
  "Dental",
];

const articleCategories = [
  "Heart Health",
  "Brain Health",
  "Mental Wellness",
  "Nutrition",
  "Children's Health",
  "Women’s Health",
  "Chronic Illness",
  "Fitness",
  "Sleep",
  "Skin Care",
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Doctors", href: "/doctors", mega: "doctors" },
  { label: "Articles", href: "/articles", mega: "articles" },
  { label: "Dashboard", href: "/dashboard" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const pathname = usePathname();
  const firstSegment = pathname.split("/")[1] || "";

  const isActive = (href) => {
    if (href === "/") return firstSegment === "";
    return firstSegment === href.replace("/", "");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 border-b shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-6 lg:px-12 py-3">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logos/headLogo.png" width={70} height={70} alt="logo" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 relative">
          {navLinks.map((item, idx) => (
            <div
              key={idx}
              className="relative"
              onMouseEnter={() => item.mega && setHoveredMenu(item.mega)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <Link
                href={item.href}
                className={`relative pb-1 font-medium ${
                  isActive(item.href)
                    ? "text-[var(--brandColor)] font-semibold"
                    : "text-gray-700 hover:text-[var(--brandColor)]"
                }`}
              >
                {item.label}
              </Link>

              {/* Mega Menu */}
              <AnimatePresence>
                {hoveredMenu === item.mega && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute top-full right-0 mt-3 bg-white border shadow-lg rounded-xl p-6 grid grid-cols-3 gap-6 w-[650px]"
                  >
                    {/* Doctors Mega Menu */}
                    {item.mega === "doctors" &&
                      doctorDepartments.map((d, i) => (
                        <Link
                          key={i}
                          href={`/doctors/${d}`}
                          className="text-gray-700 hover:text-[var(--brandColor)] transition text-sm"
                        >
                          {d}
                        </Link>
                      ))}

                    {/* Articles Mega Menu */}
                    {item.mega === "articles" &&
                      articleCategories.map((c, i) => (
                        <Link
                          key={i}
                          href={`/articles?category=${c}`}
                          className="text-gray-700 hover:text-[var(--brandColor)] transition text-sm"
                        >
                          {c}
                        </Link>
                      ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Login & Button */}
          <button className="px-5 py-2 rounded-lg bg-[var(--brandColor)] text-white hover:bg-[var(--brandColorDark)]">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden px-6 py-4 space-y-4 bg-white shadow-md"
          >
            {navLinks.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block text-lg ${
                  isActive(item.href)
                    ? "text-[var(--brandColor)] font-semibold"
                    : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
