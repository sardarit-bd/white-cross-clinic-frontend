// Cards without their own href use this. Replace per item when real pages exist.
export const DEFAULT_ITEM_HREF = "/test/test-a-z";

export const testCategories = {
  "blood-test": {
    title: "Blood Test",
    description:
      "Browse private blood tests, top health profiles and wellness checks.",
    groups: [
      {
        title: "Clinical Landing",
        items: [
          {
            title: "Private Blood Tests",
            subtitle: "Complete London Diagnostic Hub",
          },
          {
            title: "Compare Blood Packages",
            subtitle: "Bronze, Silver, Gold, Platinum",
          },
        ],
      },
      {
        title: "Top Profiles",
        items: [
          { title: "Diabetes Testing", subtitle: "HbA1c & Glucose" },
          { title: "Kidney Function", subtitle: "U&E and eGFR" },
          { title: "Liver Function", subtitle: "Hepatic Profiles" },
          { title: "Cholesterol Test", subtitle: "Lipid Heart Health" },
        ],
      },
      {
        title: "Wellness & Vitamins",
        items: [
          { title: "Vitamin D", subtitle: "25-OH Sunshine Vitamin" },
          { title: "Vitamin B12", subtitle: "Active B12 Assessment" },
          { title: "Thyroid Function", subtitle: "TSH / T4 / T3 Endocrine" },
          { title: "Allergies Test", subtitle: "IgE Sensitivity Profile" },
        ],
      },
    ],
  },

  "health-screening": {
    title: "Health Screening",
    description:
      "Full body health checks and targeted screening for your specific needs.",
    groups: [
      {
        title: "Full Body MOTs",
        items: [
          {
            title: "Full Body Health Screening",
            subtitle: "Essential baseline screening",
          },
          {
            title: "Compare MOT Packages",
            subtitle: "Basic, Advanced, Platinum",
          },
          {
            title: "Well Woman Screen",
            subtitle: "Focused female health profiles",
          },
          {
            title: "Well Man Screen",
            subtitle: "Specialised male health markers",
          },
          {
            title: "Comprehensive Elite",
            subtitle: "Platinum-level diagnostic MOT",
          },
        ],
      },
      {
        title: "Targeted Health",
        items: [
          { title: "Cardiac Screening", subtitle: "Heart risk & Lipids" },
          { title: "Metabolic Profile", subtitle: "Diabetes & Weight Check" },
          {
            title: "Hormonal Analysis",
            subtitle: "PCOS / Testosterone / Menopause",
          },
          {
            title: "Digestive Gut Health",
            subtitle: "Celiac / Gut Biome / H. pylori",
          },
        ],
      },
    ],
  },

  "sexual-test": {
    title: "Sexual Test",
    description:
      "Confidential sexual health testing, from popular screens to additional checks.",
    groups: [
      {
        title: "Most Popular Tests",
        items: [
          { title: "Sexual Health", subtitle: "Browse Bronze to Platinum" },
          {
            title: "Compare STI Packages",
            subtitle: "Bronze, Silver, Gold, Platinum",
          },
          { title: "HIV 1&2 p24", subtitle: "4th Gen Antigen/Antibody" },
          { title: "Chlamydia & Gonorrhoea", subtitle: "PCR High Sensitivity" },
          { title: "Genital Herpes", subtitle: "HSV-1 & HSV-2 Testing" },
        ],
      },
      {
        title: "Additional Screening",
        items: [
          { title: "Hepatitis B/C", subtitle: "Complete Viral Screen" },
          { title: "HPV Genotyping", subtitle: "High-Risk Strain Detection" },
          { title: "Trichomoniasis", subtitle: "Parasitic PCR Analysis" },
        ],
      },
    ],
  },
};
