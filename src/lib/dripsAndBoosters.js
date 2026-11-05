export const slugify = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// Placeholders until the real clinic locations are confirmed.
const DEFAULT_LOCATIONS = ["Home Visit", "Clinic Visit"];
const DEFAULT_CANCELLATION = "Contact us to reschedule";

// Placeholder FAQs. Replace with your real answers.
const DEFAULT_FAQS = [
  {
    q: "How do I book?",
    a: "Select Book Now to open our appointment page and choose a time that suits you.",
  },
  {
    q: "Is this treatment suitable for me?",
    a: "Suitability depends on your health and medical history. Our clinicians will advise you before treatment. If you are unsure, contact us first.",
  },
  {
    q: "Can I reschedule my appointment?",
    a: "Yes. Contact us to reschedule.",
  },
];

const IV_DRIPS = [
  "Myers Cocktail",
  "Anti-Ageing Drip",
  "Immunity Drip",
  "Vitamin C",
  "Menopause",
  "Iron Infusion",
  "Antioxidant",
  "Multivitamin/ Wellness",
  "Hangover",
  "Fitness Drip",
  "Skin Health",
  "Detox Drip",
  "Energy Drip",
  "Elite Infusion",
  "NAD+",
  "Hydration Drip",
  "Hair Health Drip",
];

const BOOSTERS = [
  "Biotin",
  "Hayfever Consultation",
  "Vitamin B12",
  "Glutathione",
  "Magnesium",
  "Vitamin D",
];

// Real content per service, keyed by slug. Anything missing uses the defaults.
// Optional fields: subtitle, price, duration, includes[], benefits[],
// description[], cancellation, locations[], faqs[]
const DETAILS = {
  "fitness-drip": {
    subtitle: "Basic Hydration, B Complex (B1, B2, B3, B5 & B6) & L-carnitine (1g)",
    price: 224.95,
    includes: [
      "Basic Hydration",
      "B Complex (B1, B2, B3, B5 & B6)",
      "L-carnitine (1g)",
    ],
    benefits: [
      "Helps convert food into energy",
      "Supports muscle function",
      "Aids protein metabolism",
      "May assist endurance and performance",
      "May contribute to quicker post-exercise recovery",
      "L-carnitine supports fat metabolism and energy levels",
    ],
    description: [
      "Basic Hydration, B Complex (B1, B2, B3, B5 & B6) & L-carnitine (1g)",
      "B complex vitamins help convert food into energy, support muscle function, and aid in protein metabolism. This may assist with endurance, performance, and post-exercise recovery. L-Carnitine supports fat metabolism, energy levels, and endurance and may contribute to quicker recovery after exercise.",
    ],
  },
};

const toService = (name, type) => {
  const slug = slugify(name);
  return {
    slug,
    name,
    type,
    subtitle: "",
    price: null,
    duration: null,
    includes: [],
    benefits: [],
    locations: DEFAULT_LOCATIONS,
    description: [],
    cancellation: DEFAULT_CANCELLATION,
    faqs: DEFAULT_FAQS,
    ...DETAILS[slug],
  };
};

export const dripGroups = [
  { title: "IV Drips", items: IV_DRIPS.map((n) => toService(n, "IV Drips")) },
  { title: "Boosters", items: BOOSTERS.map((n) => toService(n, "Boosters")) },
];

export const allServices = dripGroups.flatMap((g) => g.items);

export const getService = (slug) => {
  const clean = String(slug || "").replace(/^-+|-+$/g, "");
  return allServices.find((s) => s.slug === clean);
};