"use client";

export default function SpecimenPackaging() {
  return (
    <div className="w-full py-10 pt-48">
      <div className="container mx-auto">
        <div className="bg-white shadow-sm rounded-lg p-8 md:p-10 border border-[var(--borderLight)]">
          
          {/* Title */}
          <h1
            className="text-3xl font-bold mb-4"
            style={{ color: "var(--brandColor)" }}
          >
            Specimen Packaging
          </h1>

          {/* Intro */}
          <p className="text-[var(--textDark)] leading-relaxed mb-6">
            Samples need to be collected and packed into appropriate sample containers 
            provided by the laboratory in order to maintain integrity of the sample(s). 
            Attention needs to be given to temperature, special transport containers 
            and time limitations.
          </p>

          {/* Paragraph */}
          <p className="mb-6 text-[var(--textDark)] leading-relaxed">
            There are specific packaging instructions and labelling requirements 
            requiring triple packaging:
          </p>

          {/* Ordered List */}
          <ol className="list-decimal pl-6 text-[var(--textDark)] space-y-3 mb-6">
            <li>
              Primary leak-proof container – tube or vial containing the sample
            </li>
            <li>
              Secondary watertight container, with absorbent material, intended to 
              protect the primary container
            </li>
            <li>
              Outer container protects the secondary container
            </li>
          </ol>

          {/* Frozen Samples Note */}
          <p className="mb-6 text-[var(--textDark)] leading-relaxed">
            There are specific packaging instructions for frozen samples requiring 
            shipment using BioFreeze bottles, or Dry Ice.
          </p>

          {/* Contact */}
          <p className="text-[var(--textDark)] leading-relaxed">
            For information please contact the Referrals Dept (
            <a
              href="mailto:info@whitecrossclinics.com"
              className="text-[var(--brandColor)] underline hover:text-[var(--brandColorDark)]"
            >
              info@whitecrossclinics.com
            </a>
            ).
          </p>

        </div>
      </div>
    </div>
  );
}
