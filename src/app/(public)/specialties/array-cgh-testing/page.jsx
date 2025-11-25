"use client";

export default function ArrayCGHTestingPage() {
  return (
    <div className="min-h-screen bg-[var(--bgLight)] py-12">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        
        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--brandColor)] mb-6">
          Array CGH Testing
        </h1>

        {/* INTRO PARAGRAPH */}
        <p className="font-semibold text-[var(--textDark)] mb-4">
          Array CGH testing is now considered to be the front line test for patients presenting with 
          developmental delay (motor or growth), autism spectrum disorder, moderate to severe learning 
          difficulties, dysmorphic features, with or without congenital abnormalities.
        </p>

        <p className="text-[var(--textDark)] leading-relaxed mb-6">
          Chromosome abnormalities can be associated with developmental delay, autism spectrum disorder,
          learning difficulties, dysmorphic features and other congenital abnormalities.
        </p>

        {/* SECTION */}
        <Section>
          Array CGH can detect smaller genetic changes than is possible by conventional karyotyping,
          and can provide accurate information on the size and possible consequences of the 
          gains (duplications) or losses (deletions) identified. Multiple studies have shown that 
          Array CGH, when applied to appropriate patients, will detect up to three times more 
          pathogenic chromosome imbalances than karyotyping due to its greater precision and sensitivity.
        </Section>

        <Section>
          Array CGH testing is now considered to be the front line test for patients presenting with 
          developmental delay (motor or growth), autism spectrum disorder, moderate to severe learning 
          difficulties, dysmorphic features, with or without congenital abnormalities. Consortia in the 
          USA and many EU countries have adopted Array CGH as the front line test in this patient cohort.
        </Section>

        <Section>
          Array CGH is now more frequently used for prenatal studies as an adjunct or replacement 
          for conventional cytogenetic studies, particularly where structural fetal abnormalities are 
          seen at ultrasound scan but also at a patient’s or doctor’s request. The technique may also 
          be utilised as a follow up test to characterise anomalies detected by a previous study 
          (e.g., an apparently balanced de novo rearrangement or marker chromosome).
        </Section>

        {/* SUBTITLE */}
        <Subtitle>When To Use Array CGH</Subtitle>

        <p className="text-[var(--textDark)] mb-2">
          In postnatal cases, patients should present with one or more of the following:
        </p>

        <BulletList
          items={[
            "Mental retardation",
            "Autism/autism spectrum disorder",
            "Congenital malformations",
            "Developmental delay",
            "Dysmorphic features"
          ]}
        />

        <p className="text-[var(--textDark)] mt-4 mb-2">
          In prenatal cases, patients may present with:
        </p>

        <BulletList
          items={[
            "Abnormalities or increased nuchal translucency on ultrasound scan which may be associated with a chromosome imbalance."
          ]}
        />

        <Section>
          Approximately 10–20% of results identify extra or missing DNA which may or may not be 
          relevant to the clinical phenotype, and will require further family studies to assist with interpretation.
        </Section>

        {/* SUBTITLE */}
        <Subtitle>What Can Array CGH Detect?</Subtitle>

        <Section>
          Deletions and duplications with greater sensitivity than conventional karyotyping.
        </Section>

        {/* SUBTITLE */}
        <Subtitle>What Does Array CGH Not Detect?</Subtitle>

        <BulletList
          items={[
            "Balanced chromosome rearrangements such as translocations or inversions.",
            "The chromosome location of duplications (this would require additional FISH testing).",
            "Low frequency mosaicism (<30% abnormal cells), some types of polyploidy like triploidy, uniparental disomy (UPD) and Fragile X syndrome, imprinting defects, genetic diseases caused by point mutations or multifactorial inheritance."
          ]}
        />

      </div>
    </div>
  );
}

/* REUSABLE COMPONENTS */
function Section({ children }) {
  return (
    <p className="text-[var(--textDark)] leading-relaxed mb-6">
      {children}
    </p>
  );
}

function Subtitle({ children }) {
  return (
    <h2 className="text-2xl font-bold text-[var(--brandColor)] mt-10 mb-4">
      {children}
    </h2>
  );
}

function BulletList({ items }) {
  return (
    <ul className="list-disc ml-6 text-[var(--textDark)] space-y-2 mb-6">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
