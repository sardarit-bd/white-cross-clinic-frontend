"use client";

export default function CrossReactivity() {
  return (
    <div className="container mx-auto">
      <div className="bg-white border border-gray-100 rounded-md p-6">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-4">
          Cross Reactivity
        </h1>

        {/* Subheading */}
        <p className="text-[var(--textDark)] font-medium text-lg mb-6">
          Individuals who react to specific food allergens, inhalants or substances can develop an allergy to others.
          Such reactions may be to different foods containing the same allergen, or to an allergen with a very similar
          protein structure. Reactions can be either light or heavy and are known as allergic cross-reactivity.
        </p>

        {/* Paragraph 1 */}
        <p className="text-[var(--textLight)] leading-relaxed text-base md:text-lg mb-6">
          This means that someone may suffer an allergic reaction even when avoiding the foods they know they are allergic
          to. If someone is allergic to peanuts, for example, they might react to soya, peas, lentils or beans – food items
          in the same biological family (legume).
        </p>

        {/* Paragraph 2 */}
        <p className="text-[var(--textLight)] leading-relaxed text-base md:text-lg mb-6">
          Allergic cross-reactions can also happen between certain fruit or vegetables and latex (known as latex-food
          syndrome), or the pollens that cause hay fever. If a person has a measurable reaction to a certain food with
          clinical diagnosis, avoiding similar foods that could trigger this reaction may be helpful.
        </p>

        {/* Paragraph 3 */}
        <p className="text-[var(--textLight)] leading-relaxed text-base md:text-lg">
          The most well-documented cross-reactivity occurs between apple and birch pollen; however, individuals who are
          allergic to apple are not necessarily allergic to birch pollen. Cross-reactivity should not be assumed, and
          important foods should not be eliminated from the diet without appropriate testing and clinical diagnosis.
        </p>

      </div>
    </div>
  );
}
