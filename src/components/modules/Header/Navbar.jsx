"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavButton from "./NavButton";

// =============================================
//        DATA ARRAYS
// =============================================
const testItems = [
  "Allergies", "Allergy Test Library", "Allergy Profiles",
  "Individual Allergen Tests", "Allergen components", "Cross Reactivity",
  "Pollen Calendar", "Andrology", "Pathology and Services",
  "Oxidative Stress in Semen", "Sperm DNA fragmentation",
  "New High Dose Antibiotic Susceptibility Category",
  "Trace metals in blood", "Trace metals in urine",
  "Tests for specific exposure", "Reproductive health",
  "Reproductive health tests", "Rapid Xpert HIV-1", "Sperm aneuploidy",
  "Antibiotic assays", "Biochemistry tests", "Cervical screening",
  "HPV tests", "STI Screening from Hologic ThinPrep Vials",
  "ThinPrep PAP Test Cervex Brush Protocol",
  "WCC Self-Collection HPV Test", "Cytology (Non-Gynaecological)",
  "Infection", "Lifestyle / Environment", "Chromosomes / genetics",
  "Unexplained infertility / implantation failure / recurrent miscarriage",
  "Sexually transmitted infections", "Sexual health tests",
  "FAST sexual health screening tests", "Drugs of abuse / Alcohol",
  "Endocrinology", "WCC Genetics", "Non-invasive prenatal testing",
  "Cytogenetics", "Molecular Genetics", "Array CGH testing",
  "NIPT via the Fetal Aneuploidy Screening Programme",
  "NIPT via the National Genomics Test Directory",
  "Immunology", "Therapeutic drug assays", "Tumour markers tests",
  "Immune status", "Hepatitis tests", "Hormones",
  "Tropical and travel related immunology tests", "Coeliac disease update",
  "In-vivo tests", "Medical microbiology",
  "Urine culture processing and results", "Red-topped boric acid containers",
  "Stool test codes", "Fungal detection",
  "Mycobacterial and respiratory investigation",
  "Swabs: Types and codes", "HIV testing", "Virology tests",
  "Virology screens by blood", "Virology screens by PCR",
  "Nutrition and Lifestyle", "Vitamin tests",
];

const doctorDepartments = [
  "Neurology", "Cardiology", "Orthopedics", "Pediatrics", "Gastroenterology",
  "Dermatology", "Psychiatry", "ENT", "Oncology", "Gynecology", "Urology",
  "Dental", "Radiology", "Nephrology", "Physiotherapy",
];

const articleCategories = [
  "Cardiology", "Neurology", "Mental Health", "Nutrition",
  "Fitness", "Heart", "Skin", "Women Health", "Men Health", "Children Health",
  "General Wellness",
];

const patientMenuItems = [
  "Home Visits", "Patient Reception", "Sample Collection Guide",
];

// ⭐ NEW DROPDOWN ITEMS
const orderKitsDropdown = [
  "Self Collect Kits"
  // { label: "Registration For Online Order", href: "/order-kits/registration" },
];

const testMegaMenu = [
  "Special Instructions",
  "Test A–Z",
  "Helpful Information",
  "Specimens",
  "Discounted Tests",
  "Sample Requirements",
  "WCC News"
];

// ⭐ ADDED dropdown: "orderkits"
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Specialties", href: "/specialties", mega: "specialties" },
  { label: "Social Media", href: "/social" },
  { label: "Order Kits", href: "/order-kits", dropdown: "orderkits" }, // ⭐ NEW
  { label: "Top Services", href: "/topservices" },
  { label: "Test", href: "/test", mega: "test" },
  { label: "Doctors", href: "/doctors", mega: "doctors" },
  { label: "Patients", href: "/patients", mega: "patients" },
  { label: "News", href: "/articles", mega: "articles" },
  { label: "Dashboard", href: "/dashboard" },
];

// =============================================
//                NAVBAR COMPONENT
// =============================================
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);

  const [isMegaHovered, setIsMegaHovered] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);

  const [mobileDropdown, setMobileDropdown] = useState(null);
  const hoverTimeout = useRef(null);

  const pathname = usePathname();
  const firstSegment = pathname.split("/")[1] || "";

  const isActive = (href) =>
    href === "/" ? firstSegment === "" : firstSegment === href.replace("/", "");

  const closeAllMenus = () => {
    setHoveredMenu(null);
    setHoveredDropdown(null);
    setIsMegaHovered(false);
    setIsDropdownHovered(false);
  };

  return (
    <nav className="fixed md:top-8 top-0 left-0 w-full z-50 bg-white shadow-md">

      {/* HEADER */}
      <div className="h-[90px] flex items-center">
        <div className="container mx-auto flex justify-between items-center px-6 lg:px-12">

          {/* LOGO */}
          <Link href="/" className="flex items-center" onClick={closeAllMenus}>
            <Image src="/logos/headLogo.png" width={75} height={75} alt="logo" />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-4 text-[16px] relative">

            {navLinks.map((item, idx) => (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => {
                  clearTimeout(hoverTimeout.current);

                  if (item.mega) {
                    setHoveredMenu(item.mega);
                    setHoveredDropdown(null);
                  }

                  if (item.dropdown) {
                    setHoveredDropdown(item.dropdown);
                    setHoveredMenu(null);
                  }
                }}
                onMouseLeave={() => {
                  hoverTimeout.current = setTimeout(() => {
                    if (!isMegaHovered && !isDropdownHovered) closeAllMenus();
                  }, 200);
                }}
              >
                <Link
                  href={item.href}
                  onClick={closeAllMenus}
                  className={`pb-1 flex items-center gap-1 font-medium transition ${isActive(item.href)
                    ? "text-[var(--brandColor)] font-semibold"
                    : "text-gray-700 hover:text-[var(--brandColor)]"
                    }`}
                >
                  {item.label}
                  {(item.mega || item.dropdown) && <ChevronDown size={16} />}
                </Link>
                {/* ====================================== */}
                {/*            NORMAL DROPDOWN             */}
                {/* ====================================== */}
                {item.dropdown && <AnimatePresence>
                  {hoveredDropdown === "orderkits" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      onMouseEnter={() => setIsDropdownHovered(true)}
                      onMouseLeave={() => {
                        setIsDropdownHovered(false);
                        setTimeout(() => setHoveredDropdown(null), 150);
                      }}
                      className="
              hidden md:block absolute z-[999]
              bg-white shadow-lg border border-gray-200
              rounded-lg py-3 w-64
              left-0 top-14
            "
                    >
                      {orderKitsDropdown.map((item, i) => (
                        <Link
                          key={i}
                          href={item.href}
                          onClick={closeAllMenus}
                          className="
                  block px-4 py-2 text-[var(--textDark)]
                  hover:bg-[var(--brandColorLight)]
                  hover:text-[var(--brandColor)]
                  transition
                "
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>}
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
      {/*         DESKTOP MEGA MENU              */}
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
              hoverTimeout.current = setTimeout(() => closeAllMenus(), 200);
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
            <div className="container mx-auto px-12 grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6 gap-y-1">

              {hoveredMenu === "doctors" &&
                doctorDepartments.map((dept, i) => (
                  <Link
                    key={i}
                    onClick={closeAllMenus}
                    href={`/doctors/${dept.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    className="
                      flex items-center gap-2 p-1 text-[var(--textDark)]
                      hover:text-[var(--brandColor)]
                      hover:underline underline-offset-2 transition text-md
                    "
                  >
                    {dept}
                  </Link>
                ))}

              {hoveredMenu === "specialties" &&
                testItems.map((dept, i) => (
                  <Link
                    key={i}
                    onClick={closeAllMenus}
                    href={`/specialties/${dept.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    className="
                      flex items-center gap-2 p-1 text-[var(--textDark)]
                      hover:text-[var(--brandColor)]
                      hover:underline underline-offset-2 transition text-md
                    "
                  >
                    {dept}
                  </Link>
                ))}

              {hoveredMenu === "articles" &&
                articleCategories.map((cat, i) => (
                  <Link
                    key={i}
                    onClick={closeAllMenus}
                    href={`/articles/${cat.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    className="
                      flex items-center gap-2 p-1 text-[var(--textDark)]
                      hover:text-[var(--brandColor)]
                      hover:underline underline-offset-2 transition text-md
                    "
                  >
                    {cat}
                  </Link>
                ))}

              {hoveredMenu === "test" &&
                testMegaMenu.map((cat, i) => (
                  <Link
                    key={i}
                    onClick={closeAllMenus}
                    href={`/test/${cat.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    className="
                      flex items-center gap-2 p-1 text-[var(--textDark)]
                      hover:text-[var(--brandColor)]
                      hover:underline underline-offset-2 transition text-md
                    "
                  >
                    {cat}
                  </Link>
                ))}

              {hoveredMenu === "patients" &&
                patientMenuItems.map((item, i) => (
                  <Link
                    key={i}
                    href={`/specialties/${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    className="
                      flex items-center gap-2 p-1 text-[var(--textDark)]
                      hover:text-[var(--brandColor)]
                      hover:underline underline-offset-2 transition text-md
                    "
                  >
                    {item}
                  </Link>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>



      {/* ====================================== */}
      {/*            MOBILE MENU                 */}
      {/* ====================================== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4"
          >

            {navLinks.map((item, idx) => {
              const slugify = (str) =>
                str.toLowerCase().replace(/[^a-z0-9]+/g, "-");

              return (
                <div key={idx}>

                  <div
                    onClick={() =>
                      item.mega || item.dropdown
                        ? setMobileDropdown(
                          mobileDropdown === item.label ? null : item.label
                        )
                        : setIsOpen(false)
                    }
                    className={`flex justify-between items-center text-lg font-medium ${isActive(item.href)
                      ? "text-[var(--brandColor)]"
                      : "text-gray-700"
                      }`}
                  >
                    <Link
                      href={item.href}
                      onClick={() => {
                        closeAllMenus();
                        setIsOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>

                    {(item.mega || item.dropdown) && <ChevronDown size={18} />}
                  </div>

                  {mobileDropdown === item.label && (
                    <div className="ml-4 mt-2 space-y-2 max-h-64 overflow-y-auto pr-2">

                      {(
                        item.mega === "doctors"
                          ? doctorDepartments
                          : item.mega === "specialties"
                            ? testItems
                            : item.mega === "articles"
                              ? articleCategories
                              : item.mega === "patients"
                                ? patientMenuItems
                                : item.mega === "test"
                                  ? testMegaMenu
                                  : item.dropdown === 'orderkits' ? orderKitsDropdown : []
                      ).map((sub, i) =>
                        typeof sub === "string" ? (
                          <Link
                            key={i}
                            href={`/${item.mega}/${slugify(sub)}`}
                            onClick={() => {
                              closeAllMenus();
                              setIsOpen(false);
                            }}
                            className="block text-gray-600 text-sm py-1"
                          >
                            {sub}
                          </Link>
                        ) : null
                      )}

                    </div>
                  )}
                </div>
              );
            })}

            <NavButton />
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}
