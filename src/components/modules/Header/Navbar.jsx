"use client";

import { useCategory } from "@/hooks/useCategory";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

/* -----------------------------
      GROUP SPECIALTIES (A–Z)
------------------------------ */

function groupByAlphabet(items) {
  const groups = {};

  items.forEach((item) => {
    const letter = item[0].toUpperCase();
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(item);
  });

  return groups;
}

// =============================================
//        DATA ARRAYS
// =============================================
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
  "WCC Self-Collection HPV Test"
];
const groupedTestItems = groupByAlphabet(testItems);

const patientMenuItems = [
  {
    label: "Home Visits",
    href: "/patients/homevisit"
  },
  {
    label: "Patient Reception",
    href: "/patients/patientreception"
  },
  {
    label: "Sample Collection Guide",
    href: "/patients/samplecollectionguide"
  }
];

const orderKitsDropdown = [
  "Self Collect Kits",
  "Self Collect Kits",
  "Self Collect Kits",
  "Self Collect Kits"
];

const testMegaMenu = [
  { label: "Profiles", href: "/test/profiles" },
  { label: "Sample Requirements", href: "/test/sample-requirements" },
  { label: "Specimens", href: "/test/specimens" },
  { label: "Test A–Z", href: "/test/test-a-z" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Specialties", href: "/specialties", mega: "specialties" },
  { label: "Online Shop", href: "/onlineshop", mega: "onlineshop" },
  { label: "Top Services", href: "/topservices" },
  { label: "Health Hub", href: "/healthhub", mega: "healthhub" },
  { label: "Test", href: "/test", mega: "test" },
  { label: "Doctors", href: "/doctors", mega: "doctors" },
  { label: "Patients", href: "/patients", mega: "patients" },
  { label: "Contact Us", href: "/contact-us" },
];


const healthHubItem = [
  "Annual Health Report",
  "Biomarkers",
  "Blood testing",
  "Fertility",
  "General Health",
  "Hormone Health",
  "Longevity",
  "Menopause",
  "Men's Health",
  "Mental Health",
  "Nutrition",
  "PCOS",
  "Skin Health",
  "Sports Perfomance",
  "Testosterone",
  "Thyroid",
  "Vitamin D",
  "Vitamin Index",
  "Weight Loss",
  "Womens' Health",
  "All Health Articles"

]



const onlineShopMenuItems = [
  {
    label: "Blood Testing",
    other: [
      {
        label: "Clinical Landing",
        other: [
          {
            label: "Private Blood Tests",
            href: "/onlineshop/bloodtesting",
          },
          {
            label: "Compare Blood Packages",
            href: "/onlineshop/bloodtesting/compare",
          },
        ]
      },
      {
        label: "Top Profiles",
        other: [
          {
            label: "Diabetes Testing",
            href: "/onlineshop/bloodtesting/diabetes",
          },
          {
            label: "Kidney Function",
            href: "/onlineshop/bloodtesting/kidney",
          },
          {
            label: "Liver Function",
            href: "/onlineshop/bloodtesting/liver",
          },
          {
            label: "Cholesterol Test",
            href: "/onlineshop/bloodtesting/cholesterol",
          },
        ]
      },
      {
        label: "Wellness & Vitamins",
        other: [
          {
            label: "Vitamin D",
            href: "/onlineshop/bloodtesting/vitamind",
          },
          {
            label: "Vitamin B12",
            href: "/onlineshop/bloodtesting/vitaminb12",
          },
          {
            label: "Thyroid Function",
            href: "/onlineshop/bloodtesting/thyroidfunction",
          },
          {
            label: "Allergies Test",
            href: "/onlineshop/bloodtesting/allergy",
          },
        ]
      }
    ]
  },
  {
    label: "Health Screening",
    other: [
      {
        label: "Complete Health Screening",
        other: [
          {
            label: "Full Body Health Screening",
            href: "/onlineshop/healthscreening/fullbody",
          },
          {
            label: "Compare MOT Packages",
            href: "/onlineshop/healthscreening/compare",
          },
          {
            label: "Well Woman Screen",
            href: "/onlineshop/healthscreening/wellwoman",
          },
          {
            label: "Well Man Screen",
            href: "/onlineshop/healthscreening/wellman",
          },
          {
            label: "Comprehensive Elite",
            href: "/onlineshop/healthscreening/elite",
          },
        ]
      },
      {
        label: "Compare MOT Packages",
        other: [
          {
            label: "Cardiac Screening",
            href: "/onlineshop/healthscreening/cardiac",
          },
          {
            label: "Metabolic Profile",
            href: "/onlineshop/healthscreening/metabolic",
          },
          {
            label: "Hormonal Analysis",
            href: "/onlineshop/healthscreening/hormonal",
          },
          {
            label: "Digestive Gut Health",
            href: "/onlineshop/healthscreening/digestive",
          },
        ]
      }
    ]
  },
  {
    label: "Sexual Health",
    other: [
      {
        label: "Most Popular Tests",
        other: [
          {
            label: "Sexual Health",
            href: "/onlineshop/sexualhealth/sexualhealth",
          },
          {
            label: "Compare STI Packages",
            href: "/onlineshop/tsexualhealth/comparestipackage",
          },
          {
            label: "HIV 1&2 p24",
            href: "/onlineshop/sexualhealth/hiv12p24",
          },
          {
            label: "Chlamydia & Gonorrhoea",
            href: "/onlineshop/sexualhealth/chlamydia_gonorrhoea",
          },
          {
            label: "Genital Herpes",
            href: "/onlineshop/sexualhealth/genitalherpes",
          },
        ]
      },
      {
        label: "Additional Screening",
        other: [
          {
            label: "Hepatitis B/C",
            href: "/onlineshop/sexualhealth/hepatitisb_c",
          },
          {
            label: "HPV Genotyping",
            href: "/onlineshop/sexualhealth/hpvgenotyping",
          },
          {
            label: "Trichomoniasis",
            href: "/onlineshop/sexualhealth/trichomoniasis",
          }
        ]
      }
    ]
  },
  {
    label: "Drips and Boosters",
    other: [
      {
        label: "IV Drips",
        other: [
          {
            label: "Myers Cocktail",
            href: "/onlineshop/dripandboosters/ivdrips/myerscocktail",
          },
          {
            label: "Anti-Ageing Drip",
            href: "/onlineshop/dripandboosters/ivdrips/antiageingdrip",
          },
          {
            label: "Immunity Drip",
            href: "/onlineshop/dripandboosters/ivdrips/immunitydrip",
          },
          {
            label: "Vitamic C",
            href: "/onlineshop/dripandboosters/ivdrips/vitamicc",
          },
          {
            label: "Menopause",
            href: "/onlineshop/dripandboosters/ivdrips/menopause",
          },
          {
            label: "Iron Infusion",
            href: "/onlineshop/dripandboosters/ivdrips/ironinfusion",
          },
          {
            label: "Antioxiant",
            href: "/onlineshop/dripandboosters/ivdrips/antioxiant",
          },
          {
            label: "Multivitamin/Wellness",
            href: "/onlineshop/dripandboosters/ivdrips/multivitamin",
          },
          {
            label: "Hangover",
            href: "/onlineshop/dripandboosters/ivdrips/hangover",
          },
          {
            label: "Fitness Drip",
            href: "/onlineshop/dripandboosters/ivdrips/fitnessdrip",
          },
          {
            label: "Skin Health",
            href: "/onlineshop/dripandboosters/ivdrips/skinhealth",
          },
          {
            label: "Detox Drip",
            href: "/onlineshop/dripandboosters/ivdrips/detoxdrip",
          },
          {
            label: "Energy Drip",
            href: "/onlineshop/dripandboosters/ivdrips/energydrip",
          },
          {
            label: "Elite Infusion",
            href: "/onlineshop/dripandboosters/ivdrips/eliteinfusion",
          },
          {
            label: "NAD+",
            href: "/onlineshop/dripandboosters/ivdrips/nadplus",
          },
          {
            label: "Hydration Drip",
            href: "/onlineshop/dripandboosters/ivdrips/hydrationdrip",
          },
          {
            label: "Hair Health Drip",
            href: "/onlineshop/dripandboosters/ivdrips/hairhealthdrip",
          }
        ]
      },
      {
        label: "Boosters",
        other: [
          {
            label: "Boitin",
            href: "/onlineshop/dripandboosters/boosters/boitin",
          },
          {
            label: "Hayfever Consultation",
            href: "/onlineshop/dripandboosters/boosters/hayfeverconsultation",
          },
          {
            label: "Vitamin B12",
            href: "/onlineshop/dripandboosters/boosters/vitaminb12",
          },
          {
            label: "Glutathionce",
            href: "/onlineshop/dripandboosters/boosters/glutathionce",
          },
          {
            label: "Magnesium",
            href: "/onlineshop/dripandboosters/boosters/magnesium",
          },
          {
            label: "Vitamin D",
            href: "/onlineshop/dripandboosters/boosters/vitamind",
          }
        ]
      }
    ]
  },
  {
    label: "Kits",
    other: [
      {
        label: "All Kits",
        other: [
          {
            label: "Self Collect kits",
            href: "/onlineshop/order-kits/self-collect-kits",
          },
          {
            label: "Others kits",
            href: "/onlineshop/order-kits/self-collect-kits",
          }
        ]
      }
    ]
  }
];

// =============================================
//                NAVBAR COMPONENT
// =============================================
export default function Navbar({ mobileMenuOpen, setMobileMenuOpen, isSticky }) {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const { subcategories } = useCategory();
  const doctorDepartments = subcategories?.map((cat) => ({
    name: cat.name,
    slug: cat?.category?.slug,
  }));
  const articleCategories = [...(doctorDepartments || [])];

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
    <nav
      className={`w-full transition-all duration-300 ${isSticky
        ? "fixed top-0 left-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/90 shadow-md"
        : "bg-white border-t border-b border-gray-100 relative"
        }`}
    >
      {/* DESKTOP NAVIGATION BAR (ROW 2 - DYNAMICALLY STICKY) */}
      <div className="hidden lg:flex items-center justify-center container mx-auto px-4 lg:px-8 py-2">
        {/* NAV LINKS WITH ACTIVE INDICATOR */}
        <div className="flex items-center gap-1 xl:gap-2 relative">
          {navLinks.map((item, idx) => {
            const active = isActive(item.href);

            return (
              <div
                key={idx}
                className="relative py-1.5 px-2.5"
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
                  className={`flex items-center gap-1 text-[14px] xl:text-[15px] font-medium transition-colors ${active
                    ? "text-[var(--brandColor)] font-semibold"
                    : "text-gray-700 hover:text-[var(--brandColor)]"
                    }`}
                >
                  <span>{item.label}</span>
                  {(item.mega || item.dropdown) && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${hoveredMenu === item.mega || hoveredDropdown === item.dropdown
                        ? "rotate-180 text-[var(--brandColor)]"
                        : "text-gray-400"
                        }`}
                    />
                  )}
                </Link>

                {/* ACTIVE MENU UNDERLINE INDICATOR */}
                {active && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-2.5 right-2.5 h-[3px] bg-[var(--brandColor)] shadow-xs"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

              </div>
            );
          })}
        </div>
      </div>

      {/* DESKTOP MEGA MENU */}
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
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="hidden lg:block absolute left-0 top-full w-full bg-white border-t border-b border-gray-100 py-8 shadow-xl max-h-[70vh] overflow-y-auto z-50"
          >
            <div className="container mx-auto px-8 flex gap-10 flex-wrap">
              {hoveredMenu === "doctors" &&
                doctorDepartments?.map((dept, i) => (
                  <Link
                    key={i}
                    onClick={closeAllMenus}
                    href={`/doctors/${dept?.slug}`}
                    className="flex items-center gap-2 p-1 text-gray-700 hover:text-[var(--brandColor)] hover:underline underline-offset-4 transition-colors text-sm font-medium"
                  >
                    <div className="h-3 w-3 bg-[var(--brandColor)] rounded-full"></div>
                    <span className="hover:underline font-bold"> {dept?.name}</span>
                  </Link>
                ))}

              {hoveredMenu === "specialties" &&
                Object.keys(groupedTestItems)
                  .sort()
                  .map((letter, index) => (
                    <div key={index} className="min-w-[140px]">
                      <div className="text-base font-extrabold mb-2 text-[var(--brandColor)] border-b border-gray-100 pb-1">
                        {letter}
                      </div>
                      {groupedTestItems[letter].map((dept, i) => (
                        <Link
                          key={i}
                          onClick={closeAllMenus}
                          href={`/specialties/${dept
                            .toLowerCase()
                            .replace(/[^a-z0-9]+/g, "-")
                            .replace(/^-|-$/g, "")}`}
                          className="block py-1 text-gray-700 hover:text-[var(--brandColor)] hover:underline underline-offset-4 transition-colors text-sm"
                        >
                          <span className="font-bold">{dept}</span>
                        </Link>
                      ))}
                    </div>
                  ))}

              {hoveredMenu === "articles" &&
                articleCategories?.map((cat, i) => (
                  <Link
                    key={i}
                    onClick={closeAllMenus}
                    href={`/articles/${cat?.slug}`}
                    className="flex items-center gap-2 p-1 text-gray-700 hover:text-[var(--brandColor)] hover:underline underline-offset-4 transition-colors text-sm font-medium"
                  >
                    {cat?.name}
                  </Link>
                ))}

              {hoveredMenu === "test" &&
                testMegaMenu.map((cat, i) => (
                  <Link
                    key={i}
                    onClick={closeAllMenus}
                    href={cat?.href}
                    className="flex items-center gap-2 p-1 text-gray-700 hover:text-[var(--brandColor)] hover:underline underline-offset-4 transition-colors text-sm font-medium"
                  >
                    <div className="h-3 w-3 bg-[var(--brandColor)] rounded-full"></div>
                    <span className="hover:underline font-bold">{cat?.label}</span>
                  </Link>
                ))}

              {hoveredMenu === "patients" &&
                patientMenuItems.map((item, i) => (
                  <Link
                    key={i}
                    onClick={closeAllMenus}
                    href={item?.href}
                    className="flex items-center gap-2 p-1 text-gray-700 hover:text-[var(--brandColor)] hover:underline underline-offset-4 transition-colors text-sm font-medium"
                  >
                    <div className="h-3 w-3 bg-[var(--brandColor)] rounded-full"></div>
                    <span className="hover:underline font-bold">{item?.label}</span>
                  </Link>
                ))}

              {hoveredMenu === "onlineshop" &&
                onlineShopMenuItems.map((item, i) => (
                  <div key={i} className="flex flex-col items-start gap-3 p-2 min-w-[220px]">
                    <span className="text-lg font-bold text-gray-900 border-b-2 border-[var(--brandColor)] pb-1">
                      {item?.label}
                    </span>
                    <div className="flex flex-col gap-4 pt-1 w-full">
                      {item?.other?.map((subGroup, index) => (
                        <div className="text-sm font-semibold text-[var(--brandColor)] flex flex-col gap-1" key={index}>
                          {subGroup?.label}
                          {subGroup?.other?.map((it, indx) => (
                            <Link
                              href={it?.href}
                              onClick={closeAllMenus}
                              className="text-sm font-normal text-gray-600 hover:text-[var(--brandColor)] hover:underline underline-offset-2 transition-colors pl-2"
                              key={indx}
                            >
                              {it?.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}


              {
                hoveredMenu === "healthhub" && (
                  <>
                    {
                      healthHubItem?.map((item, index) => {
                        return (
                          <ul key={index} className="text-sm font-semibold text-black flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-[var(--brandColor)]"></div>
                            <li>{item}</li>
                          </ul>
                        )
                      })
                    }
                  </>
                )
              }


            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE NAVIGATION DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-b border-gray-200 px-6 py-5 space-y-4 shadow-2xl max-h-[80vh] overflow-y-auto"
          >
            {navLinks.map((item, idx) => {
              const slugify = (str) =>
                str.toLowerCase().replace(/[^a-z0-9]+/g, "-");
              const active = isActive(item.href);

              return (
                <div key={idx} className="border-b border-gray-100 pb-3">
                  <div
                    onClick={() =>
                      item.mega || item.dropdown
                        ? setMobileDropdown(
                          mobileDropdown === item.label ? null : item.label
                        )
                        : setMobileMenuOpen(false)
                    }
                    className={`flex justify-between items-center text-base font-semibold ${active ? "text-[var(--brandColor)]" : "text-gray-800"
                      }`}
                  >
                    <Link
                      href={item.href}
                      onClick={() => {
                        closeAllMenus();
                        setMobileMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>

                    {(item.mega || item.dropdown) && (
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${mobileDropdown === item.label ? "rotate-180 text-[var(--brandColor)]" : "text-gray-400"
                          }`}
                      />
                    )}
                  </div>

                  {mobileDropdown === item.label && (
                    <div className="ml-3 mt-3 space-y-2 max-h-[60vh] overflow-y-auto pr-2 border-l-2 border-[var(--brandColorLight)] pl-3">
                      {item.mega === "onlineshop" &&
                        onlineShopMenuItems.map((category, ci) => (
                          <div key={ci} className="mb-3">
                            <p className="text-sm font-bold text-gray-900 mb-1">{category.label}</p>
                            {category.other?.map((group, gi) => (
                              <div key={gi} className="mb-2 ml-2">
                                <p className="text-xs font-semibold text-[var(--brandColor)] mb-1">
                                  {group.label}
                                </p>
                                {group.other?.map((link, li) => (
                                  <Link
                                    key={li}
                                    href={link.href}
                                    onClick={() => {
                                      closeAllMenus();
                                      setMobileMenuOpen(false);
                                    }}
                                    className="block text-gray-600 text-xs py-1 hover:text-[var(--brandColor)] transition-colors"
                                  >
                                    {link.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        ))}

                      {item.mega !== "onlineshop" &&
                        (item.mega === "doctors"
                          ? doctorDepartments || []
                          : item.mega === "specialties"
                            ? testItems
                            : item.mega === "articles"
                              ? articleCategories || []
                              : item.mega === "patients"
                                ? patientMenuItems
                                : item.mega === "test"
                                  ? testMegaMenu
                                  : item.dropdown === "orderkits"
                                    ? orderKitsDropdown
                                    : []
                        ).map((sub, i) =>
                          typeof sub === "string" ? (
                            <Link
                              key={i}
                              href={`/${item.mega || "order-kits"}/${slugify(sub)}`}
                              onClick={() => {
                                closeAllMenus();
                                setMobileMenuOpen(false);
                              }}
                              className="block text-gray-600 text-sm py-1 hover:text-[var(--brandColor)] transition-colors"
                            >
                              {sub}
                            </Link>
                          ) : sub?.name ? (
                            <Link
                              key={i}
                              href={`/${item.mega}/${sub.slug}`}
                              onClick={() => {
                                closeAllMenus();
                                setMobileMenuOpen(false);
                              }}
                              className="block text-gray-600 text-sm py-1 hover:text-[var(--brandColor)] transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ) : null
                        )}
                    </div>
                  )}
                </div>
              );
            })}

            {/* MOBILE BOOK A TEST CTA */}
            <div className="pt-2">
              <Link
                href="/get-book"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[var(--brandColor)] hover:bg-[var(--brandColorDark)] text-white text-center font-semibold py-3 flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <span>Book a Test</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
