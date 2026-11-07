"use client";

export default function AllergyComponentTesting() {
  return (
    <div className="container mx-auto px-0 lg:px-10 py-0 lg:py-10">
      <div className="bg-white shadow-sm border border-gray-200 rounded-md p-5 sm:p-6 md:p-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-(--textDark) mb-4">
          Allergy Component Testing
        </h1>
        <p className="text-(--textDark) font-medium text-base sm:text-lg mb-6">
          A more precise and detailed picture of a patient’s sensitisation
          pattern can be obtained by measuring IgE to potentially allergenic
          components of an allergen.
        </p>
        <p className="text-(--textLight) leading-relaxed text-base md:text-lg mb-6">
          Allergens, such as a species of pollen, a mite or a food, are composed
          of a number of different ‘potential’ allergenic molecules that may
          cause sensitisation. Measuring IgE to the components can give more
          information for the management of an allergen-sensitized individual.
          It can indicate, for example, whether symptoms are likely to be
          severe.
        </p>
        <p className="text-(--textLight) leading-relaxed text-base md:text-lg">
          Testing for allergen components has a wide variety of uses – from the
          diagnosis and management of allergic patients to the selection of
          patients suitable for specific immunotherapy. Use of Component
          Resolved Diagnostics (CRD) has become an interesting and probably
          essential part of allergy diagnostics.
        </p>
      </div>
    </div>
  );
}
