const IMAGES = ["/images/kit1.webp", "/images/kit2.webp", "/images/kit3.webp"];

const INTRO =
  "Our at-home test kits are a great way to test specific biomarkers and functions within your body without a full blood draw. The kits are easy to use and require a few drops of blood from a finger prick or a pain-free automated collection device. Simply receive your test, collect your sample and pop it in a post box with the provided label. Your results will usually be returned in a few days once received by the lab.";

export const MORE_INFO =
  "Each kit includes full instructions, a sample collection device and the return label. Results are shared securely once the lab has processed your sample.";

const kit = (tests) => `${INTRO} Tests included in this kit: ${tests}.`;

const RAW = [
  {
    slug: "female-hormone-home-test-kit",
    name: "Female Hormone Home Test Kit",
    price: 74.99,
    isNew: true,
    kitType: "Home Test Kit",
    description: kit(
      "FSH Follicle Stimulating Hormone, FAI Free Androgen Index, LH Luteinising Hormone, EST Oestradiol, PROG Progesterone, PRL Prolactin, SHBG Sex Hormone Binding Globulin, TEST Testosterone",
    ),
  },
  {
    slug: "heart-health-home-test-kit",
    name: "Heart Health Home Test Kit",
    price: 94.99,
    isNew: true,
    kitType: "Home Test Kit",
    description: kit("Cholesterol, HDL, LDL, Triglycerides, HbA1c"),
  },
  {
    slug: "iron-status-home-test-kit",
    name: "Iron Status Home Test Kit",
    price: 84.99,
    isNew: true,
    kitType: "Home Test Kit",
    description: kit("Ferritin, Iron, Transferrin, TIBC"),
  },
  {
    slug: "kidney-health-home-test-kit",
    name: "Kidney Health Home Test Kit",
    price: 64.99,
    isNew: true,
    kitType: "Home Test Kit",
    description: kit("Creatinine, eGFR, Urea"),
  },
  {
    slug: "nad-smart-strips",
    name: "NAD Smart Strips",
    price: 69.0,
    isNew: false,
    kitType: "Smart Strips",
    description:
      "Smart strips for checking your NAD+ levels at home. Full product details to be added.",
  },
  {
    slug: "nad-booster-duo",
    name: "NAD+ Booster Duo",
    price: 149.0,
    isNew: false,
    kitType: "Supplement",
    description:
      "A two-bottle NAD+ supplement set. Full product details to be added.",
  },
  {
    slug: "nad-starter-pack",
    name: "NAD Starter Pack",
    price: 280.0,
    isNew: true,
    kitType: "Smart Strips",
    description:
      "A starter pack with smart strips and a carry case. Full product details to be added.",
  },
  {
    slug: "testosterone-home-test-kit",
    name: "Testosterone Home Test Kit",
    price: 79.99,
    isNew: true,
    kitType: "Home Test Kit",
    description: kit("Total Testosterone, SHBG, Free Androgen Index"),
  },
  {
    slug: "thyroid-function-home-test-kit",
    name: "Thyroid Function Home Test Kit",
    price: 89.99,
    isNew: true,
    kitType: "Home Test Kit",
    description: kit("TSH, Free T4, Free T3"),
  },
  {
    slug: "total-prostate-specific-antigen-home-test-kit",
    name: "Total Prostate Specific Antigen Home Test Kit",
    price: 64.0,
    isNew: true,
    kitType: "Home Test Kit",
    description: kit("Total PSA"),
  },
  {
    slug: "vitamin-d-home-test-kit",
    name: "Vitamin D Home Test Kit",
    price: 69.99,
    isNew: false,
    kitType: "Home Test Kit",
    description: kit("25-OH Vitamin D"),
  },
  {
    slug: "cholesterol-home-test-kit",
    name: "Cholesterol Home Test Kit",
    price: 79.99,
    isNew: false,
    kitType: "Home Test Kit",
    description: kit("Total Cholesterol, HDL, LDL, Triglycerides"),
  },
];

export const products = RAW.map((p, i) => ({
  id: i + 1,
  image: IMAGES[i % IMAGES.length],
  ...p,
}));

export const KIT_TYPES = [...new Set(products.map((p) => p.kitType))];

const prices = products.map((p) => p.price);
export const PRICE_BOUNDS = {
  min: Math.floor(Math.min(...prices)),
  max: Math.ceil(Math.max(...prices)),
};