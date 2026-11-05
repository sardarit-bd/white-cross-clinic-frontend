"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavButton from "./NavButton";
import { useCategory } from "@/hooks/useCategory";
import { dripGroups, allServices } from "@/lib/dripsAndBoosters";

function groupByAlphabet(items) {
  const groups = {};

  items.forEach((item) => {
    const letter = item[0].toUpperCase();
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(item);
  });

  return groups;
}
const testItems = [
  "Allergies",
  "Allergen components",
  "Allergy Profiles",
  "Allergy Test Library",
  "Andrology",
  "Antibiotic assays",
  "Array CGH testing",
  "Biochemistry tests",
  "Chromosomes / genetics",
  "Coeliac disease update",
  "Cervical screening",
  "Cytogenetics",
  "Cytology (Non-Gynaecological)",
  "Drugs of abuse / Alcohol",
  "Endocrinology",
  "FAST sexual health screening tests",
  "Fungal detection",
  "Hepatitis tests",
  "Hormones",
  "HPV tests",
  "HIV testing",
  "Immune status",
  "Immunology",
  "In-vivo tests",
  "Individual Allergen Tests",
  "Infection",
  "Lifestyle / Environment",
  "Medical microbiology",
  "Molecular Genetics",
  "Mycobacterial and respiratory investigation",
  "New High Dose Antibiotic Susceptibility Category",
  "NIPT via the Fetal Aneuploidy Screening Programme",
  "NIPT via the National Genomics Test Directory",
  "Non-invasive prenatal testing",
  "Nutrition and Lifestyle",
  "Oxidative Stress in Semen",
  "Pathology and Services",
  "Pollen Calendar",
  "Rapid Xpert HIV-1",
  "Red-topped boric acid containers",
  "Reproductive health",
  "Reproductive health tests",
  "Sperm aneuploidy",
  "Sexual health tests",
  "Sexually transmitted infections",
  "Sperm DNA fragmentation",
  "Stool test codes",
  "Swabs: Types and codes",
  "Tests for specific exposure",
  "Therapeutic drug assays",
  "ThinPrep PAP Test Cervex Brush Protocol",
  "Trace metals in blood",
  "Trace metals in urine",
  "Tropical and travel related immunology tests",
  "Tumour markers tests",
  "Unexplained infertility / implantation failure / recurrent miscarriage",
  "Urine culture processing and results",
  "Virology screens by blood",
  "Virology screens by PCR",
  "Virology tests",
  "Vitamin tests",
  "WCC Genetics",
  "WCC Self-Collection HPV Test",
];
const groupedTestItems = groupByAlphabet(testItems);
const doctorDepartments = [
  "Cardiology",
  "Dental",
  "Dermatology",
  "ENT",
  "Gastroenterology",
  "Gynecology",
  "Nephrology",
  "Neurology",
  "Oncology",
  "Orthopedics",
  "Pediatrics",
  "Physiotherapy",
  "Psychiatry",
  "Radiology",
  "Urology",
];

const articleCategories = [
  "Cardiology",
  "Children Health",
  "Fitness",
  "General Wellness",
  "Heart",
  "Men Health",
  "Mental Health",
  "Neurology",
  "Nutrition",
  "Skin",
  "Women Health",
];

const patientMenuItems = [
  "Home Visits",
  "Patient Reception",
  "Sample Collection Guide",
];

const orderKitsDropdown = [
  "Self Collect Kits",
  // { label: "Registration For Online Order", href: "/order-kits/registration" },
];

const testMegaMenu = [
  "Blood Test",
  "Health Screening",
  "Sexual Test",
  "Discontinued Tests",
  "Helpful Information",
  "Profiles",
  "Sample Requirements",
  "Request Forms",
  "Specimens",
  "Special Instructions",
  "Test A–Z",
  "WCC News",
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Specialties", href: "/specialties", mega: "specialties" },
  { label: "Top Services", href: "/topservices" },
  { label: "Test", href: "/test", mega: "test" },
  { label: "Resource", href: "/resource" },
  { label: "Medical Topics", href: "/articles", mega: "articles" },
  // { label: "Doctor", href: "/doctors", mega: "doctors" },
  {
    label: "Drips and Boosters",
    href: "/drips-and-boosters",
    mega: "drips-and-boosters",
  },
  // { label: "Order Kit", href: "/order-kits", dropdown: "orderkits" },
  { label: "Online Shop", href: "/online-shop" },
  { label: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const { subcategories } = useCategory();
  const doctorDepartments = subcategories?.map((cat) => {
    return {
      name: cat.name,
      slug: cat?.category?.slug,
    };
  });
  const articleCategories = [...doctorDepartments];

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
      <div className="h-[90px] flex items-center">
        <div className="container mx-auto flex justify-between items-center px-6 lg:px-12">
          <Link href="/" className="flex items-center" onClick={closeAllMenus}>
            <Image src="/logos/navLogo.png" width={75} height={75} alt="logo" />
          </Link>
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
                  className={`pb-1 flex items-center gap-1 font-medium transition ${
                    isActive(item.href)
                      ? "text-[var(--brandColor)] font-semibold"
                      : "text-gray-700 hover:text-[var(--brandColor)]"
                  }`}
                >
                  {item.label}
                  {(item.mega || item.dropdown) && <ChevronDown size={16} />}
                </Link>
                {item.dropdown && (
                  <AnimatePresence>
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
                        {orderKitsDropdown?.map((item, i) => (
                          <Link
                            key={i}
                            href={`/order-kits/${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                            onClick={closeAllMenus}
                            className="
                  block px-4 py-2 text-[var(--textDark)]
                  hover:bg-[var(--brandColorLight)]
                  hover:text-[var(--brandColor)]
                  transition
                "
                          >
                            {item}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            <NavButton />
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

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
              py-10 shadow-lg max-h-[80vh] overflow-y-auto
            "
          >
            <div className="container mx-auto px-12 columns-2 md:columns-5 lg:columns-5 gap-4">
              {hoveredMenu === "doctors" &&
                doctorDepartments.map((dept, i) => (
                  <Link
                    key={i}
                    onClick={closeAllMenus}
                    href={`/doctors/${dept?.slug}`}
                    className="
                      flex items-center gap-2 p-1 text-[var(--textDark)]
                      hover:text-[var(--brandColor)]
                      hover:underline underline-offset-2 transition text-md
                    "
                  >
                    {dept?.name}
                  </Link>
                ))}

              {hoveredMenu === "specialties" &&
                Object.keys(groupedTestItems)
                  .sort()
                  .map((letter, index) => (
                    <div key={index}>
                      {/* Letter header */}
                      <div className="text-lg font-semibold mb-2 text-[var(--brandColor)]">
                        {letter}
                      </div>

                      {/* Items under this letter */}
                      {groupedTestItems[letter].map((dept, i) => (
                        <Link
                          key={i}
                          onClick={closeAllMenus}
                          href={`/specialties/${dept
                            .toLowerCase()
                            .replace(/[^a-z0-9]+/g, "-")
                            .replace(/^-|-$/g, "")}`}
                          className="
                            block p-1 text-[var(--textDark)]
                            hover:text-[var(--brandColor)]
                            hover:underline underline-offset-2 transition text-md
                          "
                        >
                          {dept}
                        </Link>
                      ))}
                    </div>
                  ))}

              {hoveredMenu === "articles" &&
                articleCategories.map((cat, i) => (
                  <Link
                    key={i}
                    onClick={closeAllMenus}
                    href={`/articles/${cat?.slug}`}
                    className="
                      flex items-center gap-2 p-1 text-[var(--textDark)]
                      hover:text-[var(--brandColor)]
                      hover:underline underline-offset-2 transition text-md
                    "
                  >
                    {cat?.name}
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
              {hoveredMenu === "drips-and-boosters" && (
                <div className="[column-span:all]">
                  {dripGroups.map((group) => (
                    <div key={group.title} className="mb-4">
                      <div className="text-lg font-semibold mb-2 text-[var(--brandColor)]">
                        {group.title}
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4">
                        {group.items.map((service) => (
                          <Link
                            key={service.slug}
                            onClick={closeAllMenus}
                            href={`/drips-and-boosters/${service.slug}`}
                            className="
                              block p-1 text-[var(--textDark)]
                              hover:text-[var(--brandColor)]
                              hover:underline underline-offset-2 transition text-md
                            "
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
                            mobileDropdown === item.label ? null : item.label,
                          )
                        : setIsOpen(false)
                    }
                    className={`flex justify-between items-center text-lg font-medium ${
                      isActive(item.href)
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
                      {(item.mega === "doctors"
                        ? doctorDepartments
                        : item.mega === "specialties"
                          ? testItems
                          : item.mega === "articles"
                            ? articleCategories
                            : item.mega === "patients"
                              ? patientMenuItems
                              : item.mega === "test"
                                ? testMegaMenu
                                : item.mega === "drips-and-boosters"
                                  ? allServices.map((s) => s.name)
                                  : item.dropdown === "orderkits"
                                    ? orderKitsDropdown
                                    : []
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
                        ) : null,
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
