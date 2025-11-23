"use client";

export default function IndividualAllergenTests() {
  return (
    <div className="container mx-auto px-6 md:px-10 py-10">
      <div className="bg-white shadow-sm border border-gray-200 rounded-md p-6 md:p-10">
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-4">
          Individual Allergen Tests
        </h1>

        {/* Subheading */}
        <p className="text-[var(--textDark)] font-medium text-lg mb-6">
          We offer tests for more than 600 individual allergens, measuring specific IgE antibody blood levels.
        </p>

        {/* Description */}
        <p className="text-[var(--textLight)] leading-relaxed text-base md:text-lg">
          Allergens, when requested individually are priced as single tests, sample 1 x B (up to 5 allergens). 
          Protein allergens are manufactured by Thermofisher (Phadia) and are IgE specific.
        </p>

      </div>
    </div>
  );
}
