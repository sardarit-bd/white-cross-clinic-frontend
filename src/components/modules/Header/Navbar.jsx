"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import NavButton from "./NavButton";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  // { label: "Services", href: "#" },
  // { label: "Departments", href: "#" },
  { label: "Doctors", href: "/doctors" },
  {
    label: "Dropdown",
    dropdown: ["Option 1", "Option 2", "Option 3"],
  },
  { label: "Contact", href: "/contact" },
  { label: "Articles", href: "/articles" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="relative bg-white w-full border-b border-gray-100">
      <div className="container mx-auto flex justify-between items-center px-6 lg:px-12 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href='/'>
            <Image src="/logos/headLogo.png" alt="MedEase Logo" width={70} height={70} />
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((item, idx) =>
            item.dropdown ? (
              <div key={idx} className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1 text-gray-700 hover:text-[var(--brandColor)] font-medium"
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${dropdownOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-8 left-0 bg-white rounded-md shadow-md w-40 overflow-hidden border border-gray-100"
                    >
                      {item.dropdown.map((opt, i) => (
                        <Link
                          key={i}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          {opt}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={idx}
                href={item.href}
                className="text-gray-700 hover:text-[var(--brandColor)] font-medium"
              >
                {item.label}
              </Link>
            )
          )}

          <NavButton />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white shadow-md border-t border-gray-100 px-6 py-4 space-y-3"
          >
            {navLinks.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="block text-gray-700 hover:text-[var(--brandColor)]"
              >
                {item.label}
              </Link>
            ))}
            <NavButton />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
