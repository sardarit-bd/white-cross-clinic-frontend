"use client";

export default function SpecimenTransport() {
  return (
    <div className="w-full py-10 pt-48">
      <div className="container mx-auto">
        <div className="bg-white shadow-sm rounded-lg p-8 md:p-10 border border-[var(--borderLight)]">

          {/* Title */}
          <h1
            className="text-3xl font-bold mb-4"
            style={{ color: "var(--brandColor)" }}
          >
            Specimen Transport
          </h1>

          {/* Subtitle */}
          <p className="font-semibold text-[var(--textDark)] mb-6 leading-relaxed">
            Samples need to be transported for subsequent processing and testing. 
            Various transport systems can be used, covering long or short distances.
          </p>

          {/* Intro */}
          <p className="text-[var(--textDark)] leading-relaxed mb-6">
            Clinics, practices and laboratories who are posting or transporting samples 
            by air, sea, rail and road between local, regional and reference laboratories, 
            or between laboratories in other countries, must adhere to a number of 
            regulations. These regulations are designed to deal with transportation 
            accidents and spills, reduce biohazards and keep samples intact for testing.
          </p>

          {/* Regulations section */}
          <p className="text-[var(--textDark)] mb-3 leading-relaxed">
            Regulations are given by several sources, including:
          </p>

          <ul className="list-disc pl-6 text-[var(--textDark)] space-y-2 mb-6">
            <li>National transport regulations</li>
            <li>IATA</li>
            <li>Rail and road traffic agencies</li>
            <li>Postal services</li>
          </ul>

          {/* Compliance */}
          <p className="text-[var(--textDark)] leading-relaxed mb-6">
            Compliance is mandatory in order to reduce risk to couriers, carrier, 
            laboratory staff and passengers.
          </p>

          {/* Sample requirements */}
          <p className="text-[var(--textDark)] leading-relaxed mb-4">
            Sample transport requirements are based on the category of samples being 
            transported. Infectious substances are classified as Category A or Category B.
          </p>

          <p className="text-[var(--textDark)] leading-relaxed mb-4">
            WCC does not arrange for transport of Category A samples 
            (infectious substances capable of causing permanent disability or 
            life-threatening or fatal disease to humans or animals).
          </p>

          <p className="text-[var(--textDark)] leading-relaxed mb-6">
            Instruction and packaging for Category B is provided, covering Biological 
            Substances, UN number UN 3373.
          </p>

          {/* Courier Service */}
          <h2
            className="text-xl font-bold mb-2"
            style={{ color: "var(--brandColorDark)" }}
          >
            WCC Collect: Specimen Collection Services by Courier
          </h2>

          <p className="text-[var(--textDark)] leading-relaxed mb-6">
            WCC operates a dedicated and extensive specimen collection service. 
            WCC Collect provides a 24 hour professional sample collection service 
            on an urgent, regular or random basis. No charge is made for collections 
            from practice within the M25. Sample collection from practices outside 
            the M25 is by arrangement and may incur courier charges.
          </p>

          {/* Postal Pathology */}
          <h2
            className="text-xl font-bold mb-2"
            style={{ color: "var(--brandColorDark)" }}
          >
            WCC Postal Pathology
          </h2>

          <p className="text-[var(--textDark)] leading-relaxed">
            Postal Pathology is a particularly suitable method of transport for 
            occupational health, insurance companies, and general practice.
          </p>

        </div>
      </div>
    </div>
  );
}
