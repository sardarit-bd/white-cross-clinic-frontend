"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import NavButton from "./NavButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Doctors", href: "/doctors" },
  { label: "Articles", href: "/articles" },
  {label: "Dashboard", href: "/dashboard"}
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // ✅ Detect first segment after the domain
  const firstSegment = pathname.split("/")[1] || "";

  const isActive = (href) => {
    if (href === "/") return firstSegment === "";
    const segment = href.replace("/", "");
    return firstSegment === segment;
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-6 lg:px-12 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logos/headLogo.png"
            alt="White Cross Clinic Logo"
            width={70}
            height={70}
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className={`relative font-medium transition-all duration-200 pb-1 
                ${isActive(item.href)
                  ? "text-[var(--brandColor)] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[var(--brandColor)]"
                  : "text-gray-700 hover:text-[var(--brandColor)]"
                }`}
            >
              {item.label}
            </Link>
          ))}
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
                onClick={() => setIsOpen(false)}
                className={`block font-medium transition-all duration-200 
                  ${isActive(item.href)
                    ? "text-[var(--brandColor)] font-semibold"
                    : "text-gray-700 hover:text-[var(--brandColor)]"
                  }`}
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
