"use client";

import Link from "next/link";

const allergyCards = [
  {
    title: "Allergy Test Library",
    desc: "Our allergy profiles, individual allergen tests, and allergen component tests.",
    link: "/specialties/allergy-test-library",
  },
  {
    title: "Allergy Profiles",
    desc: "Our allergy profiles group common allergen tests. They include profiles based on geography, food types, inhalants, antibiotics, eczema, gluten and rhinitis.",
    link: "/specialties/allergy-profiles",
  },
  {
    title: "Individual Allergen Tests",
    desc: "We offer tests for more than 600 individual allergens, measuring specific IgE antibody blood levels. Allergens, when requested individually are priced as single tests, sample 1 x B (up to 5 allergens). Protein allergens are manufactured by Thermofisher (Phadia) and are IgE specific.",
    link: "/specialties/individual-allergen-tests",
  },
  {
    title: "Allergen Components Testing",
    desc: "A more precise and detailed picture of a patient’s sensitisation pattern can be obtained by measuring IgE to potentially allergenic components of an allergen.",
    link: "/specialties/allergen-components-testing",
  },
  {
    title: "Cross Reactivity",
    desc: "Individuals who react to specific allergens to foods, inhalants or substances can develop an allergy to others.",
    link: "/specialties/cross-reactivity",
  },
  {
    title: "Pollen Calendar",
    desc: "An overview of when potentially allergenic plants are in flower.",
    link: "/specialties/pollen-calendar",
  },
];

export default function AllergyOverview() {
  return (
    <div className="container mx-auto">

      {/* Header Card */}
      <div className="bg-white border border-gray-100 p-4 md:p-6 mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-4">
          Allergy
        </h1>

        <p className="text-[var(--textLight)] leading-relaxed text-base md:text-lg">
          Allergy, asthma and autoimmune diseases are increasing around the world, especially in industrialized
          countries, and affect all ages. We offer allergy profiles, which group the most common tests, as well as
          tests for individual allergens and allergen components.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {allergyCards.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 p-6 flex flex-col"
          >
            <h2 className="text-xl font-bold text-[var(--textDark)] mb-3">
              {item.title}
            </h2>

            <p className="text-[var(--textLight)] text-base leading-relaxed flex-grow">
              {item.desc}
            </p>

            <Link
              href={item.link}
              className="mt-4 inline-block font-semibold text-[var(--brandColor)] hover:underline"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
