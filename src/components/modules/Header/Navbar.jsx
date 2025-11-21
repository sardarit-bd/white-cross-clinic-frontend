"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavButton from "./NavButton";

// Mega Menu Data
const doctorDepartments = [
  "Neurology", "Cardiology", "Orthopedics", "Pediatrics",
  "Gastroenterology", "Dermatology", "Psychiatry",
  "ENT", "Oncology", "Gynecology", "Urology",
  "Dental", "Radiology", "Nephrology", "Physiotherapy",
];

const articleCategories = [
  "Cardiology", "Neurology", "Mental Health", "Nutrition",
  "Fitness", "Heart", "Skin", "Women Health",
  "Men Health", "Children Health", "General Wellness",
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Social Media", href: "/social" },
  { label: "Doctors", href: "/doctors", mega: "doctors" },
  { label: "News", href: "/articles", mega: "articles" },
  { label: "Dashboard", href: "/dashboard" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isMegaHovered, setIsMegaHovered] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const hoverTimeout = useRef(null);
  const pathname = usePathname();
  const firstSegment = pathname.split("/")[1] || "";

  const isActive = (href) =>
    href === "/" ? firstSegment === "" : firstSegment === href.replace("/", "");

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">

      {/* HEADER */}
      <div className="h-[90px] flex items-center">
        <div className="container mx-auto flex justify-between items-center px-6 lg:px-12">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logos/headLogo.png" width={75} height={75} alt="logo" />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-8 relative">

            {navLinks.map((item, idx) => (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => {
                  clearTimeout(hoverTimeout.current);
                  item.mega && setHoveredMenu(item.mega);
                }}
                onMouseLeave={() => {
                  hoverTimeout.current = setTimeout(() => {
                    if (!isMegaHovered) setHoveredMenu(null);
                  }, 240);
                }}
              >
                <Link
                  href={item.href}
                  className={`pb-1 flex items-center gap-1 font-medium transition ${
                    isActive(item.href)
                      ? "text-[var(--brandColor)] font-semibold"
                      : "text-gray-700 hover:text-[var(--brandColor)]"
                  }`}
                >
                  {item.label}
                  {item.mega && <ChevronDown size={16} />}
                </Link>
              </div>
            ))}

            <NavButton />
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* ====================================== */}
      {/*       FULL WIDTH MEGA MENU             */}
      {/* ====================================== */}
      <AnimatePresence>
        {hoveredMenu && (
          <motion.div
            onMouseEnter={() => {
              clearTimeout(hoverTimeout.current);
              setIsMegaHovered(true);
            }}
            onMouseLeave={() => {
              setIsMegaHovered(false);
              hoverTimeout.current = setTimeout(() => setHoveredMenu(null), 200);
            }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="
              hidden md:block absolute left-0 w-full 
              bg-[var(--brandColorLight)] 
              py-10 shadow-lg
            "
          >
            <div className="max-w-7xl mx-auto px-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">

              {/* DOCTORS MEGA MENU */}
              {hoveredMenu === "doctors" &&
                doctorDepartments.map((dept, i) => (
                  <Link
                    key={i}
                    href={`/doctors/${dept.toLowerCase()}`}
                    className="
                      flex items-center gap-2 p-1 text-[var(--textDark)] 
                      hover:text-[var(--brandColor)] 
                      hover:underline underline-offset-2 transition text-sm
                    "
                  >
                    <span className="w-2 h-2 bg-[var(--brandColor)] rounded-full"></span>
                    {dept}
                  </Link>
                ))}

              {/* ARTICLES MEGA MENU */}
              {hoveredMenu === "articles" &&
                articleCategories.map((cat, i) => (
                  <Link
                    key={i}
                    href={`/articles/${cat.toLowerCase()}`}
                    className="
                      flex items-center gap-2 p-1 text-[var(--textDark)]
                      hover:text-[var(--brandAccent)]
                      hover:underline underline-offset-2 transition text-sm
                    "
                  >
                    <span className="w-2 h-2 bg-[var(--brandAccent)] rounded-full"></span>
                    {cat}
                  </Link>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ====================================== */}
      {/*              MOBILE MENU               */}
      {/* ====================================== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4"
          >
            {navLinks.map((item, idx) => (
              <div key={idx}>
                {/* MOBILE MAIN LINK */}
                <div
                  onClick={() =>
                    item.mega
                      ? setMobileDropdown(
                          mobileDropdown === item.mega ? null : item.mega
                        )
                      : setIsOpen(false)
                  }
                  className={`flex justify-between items-center text-lg font-medium ${
                    isActive(item.href)
                      ? "text-[var(--brandColor)]"
                      : "text-gray-700"
                  }`}
                >
                  {item.label}
                  {item.mega && <ChevronDown size={18} />}
                </div>

                {/* MOBILE DROPDOWN */}
                {mobileDropdown === item.mega && (
                  <div className="ml-4 mt-2 space-y-2">
                    {(item.mega === "doctors"
                      ? doctorDepartments
                      : articleCategories
                    ).map((sub, i) => (
                      <Link
                        key={i}
                        href={`/${item.mega}/${sub.toLowerCase()}`}
                        onClick={() => setIsOpen(false)}
                        className="block text-gray-600 text-sm py-1"
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <NavButton />
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}
