"use client";

export default function CytogeneticsPage() {
  return (
    <div className="min-h-screen bg-[var(--bgLight)] pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">

        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold text-[var(--brandColor)] mb-4">
          Cytogenetics
        </h1>

        <p className="text-[var(--textDark)] mb-10 font-medium">
          Postnatal diagnosis (blood culture), prenatal diagnosis; solid tissue, FISH, and cell line karyology.
        </p>

        {/* SECTION */}
        <Section
          title="Clinical Details"
          paragraphs={[
            `Clinical details are very important when providing genetic analysis. 
             The more clinical information that is available (e.g. details of ultrasound information, phenotypic features or family history), 
             the better the service we can provide.`,
            `Failure to provide this information for cytogenetic studies may result in an inaccurate analysis.`,
            `Clinical details inform the investigation at all stages:`,
            `Prior to analysis, clinical details may indicate, for example, that procedures such as chromosome breakage 
             or leukaemic studies are required, which must be referred to the oncogenomic department or specialist centre.`,
            `During analysis, they may indicate that extra cells should be screened to investigate the possibility of mosaicism 
             or that particular chromosomes must be targeted for high-resolution study.`,
            `When clinical details are not available, a routine analysis will be performed and a conditional report issued.`
          ]}
        />

        <Section
          title="Cytogenetic Sample Stability"
          paragraphs={[
            `Cytogenetic studies require living cells. Please ensure that samples reach the laboratory as soon as possible.`,
            `If a delay before dispatch is unavoidable, samples may be stored in a refrigerator (4°C) but must not be frozen.`,
            `Samples stored more than 48 hours, or kept at temperatures below 4°C and greater than 38°C, may have inhibited growth.`,
          ]}
        />

        {/* SECTION */}
        <Section
          title="Postnatal Diagnosis (Blood Culture)"
          paragraphs={[
            `Chromosome studies are requested where problems that may have a cytogenetic basis are suspected: 
            babies with birth defects; developmental delays; fertility issues; or screening prospective gamete donors.`,
            `Sample requirements: Lithium heparin whole blood specimens, gently mixed to prevent clotting — must not be frozen.`,
            `Turnaround time: Usually 2–3 weeks, with rapid PCR available for urgent suspected trisomy cases.`
          ]}
          list={[
            "Rarely, blood samples fail to culture (<1%).",
            "Chromosomes may be of insufficient quality; repeat studies may be required.",
            "Inform the laboratory if the patient recently received a blood transfusion.",
            "Inform the laboratory if the patient has EVER had a bone marrow transplant.",
            "Biological sex must be included on the request form."
          ]}
        />

        {/* SECTION */}
        <Section
          title="Prenatal Diagnosis"
          paragraphs={[
            `Chromosome studies are requested where pregnancies are at increased risk of a cytogenetic abnormality, 
             such as advanced maternal age, abnormal ultrasound findings, or high-risk NIPT results.`
          ]}
          list={[
            "Amniotic fluid — 10 mL+ in sterile leak-proof container. Must not be frozen.",
            "Chorionic villus — 5mg+ in sterile transport medium. Must not be frozen.",
            "Fetal blood — 1–2 mL lithium heparin whole blood. Must not be frozen."
          ]}
          extraSection={{
            subtitle: "Turnaround Time",
            text: `Around 2 weeks, depending on cell growth. Early/late gestations, insufficient samples, 
                   or add-on karyotyping may extend the timeline.`
          }}
        />

        {/* SECTION */}
        <Section
          title="Solid Tissue"
          paragraphs={[
            `Fibroblast cultures may be used for miscarriage investigations, stillbirths, or when blood samples cannot be obtained.`,
            `Samples must be placed in sterile containers with transport medium — not formaldehyde, not frozen.`
          ]}
          extraSection={{
            subtitle: "Turnaround Time",
            text: "Approximately 4 weeks, depending on cell growth."
          }}
          list={[
            "Miscarriage samples have ~20% culture failure rate.",
            "Alternative methods may be used when culture fails.",
            "If no villi or fetal parts are found, maternal tissue may have been cultured.",
            "Patients may collect remaining tissues after testing if consented.",
            "Non-viable tissue is disposed of sensitively; records are maintained."
          ]}
        />

        {/* SECTION */}
        <Section
          title="Fluorescence In Situ Hybridisation (FISH)"
          paragraphs={[
            `FISH is used for detecting specific microdeletion syndromes and must be requested explicitly.`,
            `Rapid aneuploidy FISH has been largely replaced by multiplex-PCR and Array CGH technologies.`
          ]}
        />

      </div>
    </div>
  );
}

// ---------------- COMPONENT ---------------- //

function Section({ title, paragraphs = [], list = [], extraSection }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 md:p-10 mb-10">

      {/* Title */}
      <h2 className="text-2xl font-semibold text-[var(--brandColor)] mb-4">
        {title}
      </h2>

      {/* Paragraphs */}
      {paragraphs.map((p, i) => (
        <p
          key={i}
          className="text-[var(--textDark)] leading-relaxed mb-4"
        >
          {p}
        </p>
      ))}

      {/* List */}
      {list.length > 0 && (
        <ul className="list-disc pl-6 space-y-2 text-[var(--textDark)]">
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}

      {/* Extra subsection */}
      {extraSection && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-[var(--brandColor)] mb-2">
            {extraSection.subtitle}
          </h3>
          <p className="text-[var(--textDark)] leading-relaxed">
            {extraSection.text}
          </p>
        </div>
      )}
    </div>
  );
}
