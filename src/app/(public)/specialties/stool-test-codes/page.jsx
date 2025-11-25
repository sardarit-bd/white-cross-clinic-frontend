"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stoolTestsData = [
  {
    title: "Stool OCP and Culture",
    rows: {
      Code: "Please request as PENT",
      "Sample type": "Stool",
      Details:
        "Serosep EntericBio PCR Bacteria/Bacterial Toxins: Salmonella, Campylobacter, Shigella, VTEC Parasites: Cryptosporidium, Giardia",
      Comments:
        "All stool samples will be tested for UK Pathogens. Overseas pathogens will only be tested if specifically requested and travel history and clinical details are provided. Samples that are positive for the bacterial pathogens will be cultured to provide sensitivities and, if indicated, for PHE referral. Samples will be kept for 7 days after receipt to allow for additional testing if required.",
    },
  },
  {
    title: "Stool for OCP",
    rows: {
      Code: "Please request as OCP",
      "Sample type": "Stool",
      Details:
        "Requests for OCP only will include testing for cryptosporidium and giardia by PCR.",
      Comments:
        "Overseas pathogens will only be tested if requested and travel history and clinical details are provided.",
    },
  },
  {
    title: "C. Difficile detection",
    rows: {
      Code: "Please request as CLOS",
      "Sample type": "Stool",
      Details: "Serosep Enteric Bio PCR Alere Techlab EIA (Toxin)",
      Comments:
        "Change to PCR and Elisa methods. Two tier PCR & Toxin c. diff screening based on PHE guidance. Improved sensitivity and specificity for both targets tested. Primary c. diff gene screening using Enteric Bio PCR. Secondary sequential testing using Alere EIA to confirm Toxin.",
    },
  },
];

export default function StoolTestCodesPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="w-full bg-[var(--bgLight)] py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-6">
          Stool test codes
        </h1>

        <p className="text-[var(--textLight)] max-w-4xl mb-10">
          Traditional culture methods have been replaced by Real Time PCR for
          enteric pathogen testing. The benefits are increased sensitivity and a
          higher detection rate. Once received and processed in the microbiology
          laboratory, negative results will be available within 24 hours.
          Positive results will be followed up with culture and sensitivities
          for final reporting.
        </p>

        {/* Loader */}
        {loading ? (
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white shadow rounded-lg animate-pulse p-6 space-y-4"
              >
                <div className="h-5 w-40 bg-gray-300 rounded" />
                <div className="h-4 w-full bg-gray-200 rounded" />
                <div className="h-4 w-3/4 bg-gray-200 rounded" />
                <div className="h-4 w-2/3 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        ) : (
          /* Main Data Rendering */
          <div className="space-y-10">
            {stoolTestsData.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white shadow-sm rounded-lg p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <h2 className="text-2xl font-semibold text-[var(--brandColor)] mb-4">
                  {section.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-3">
                  {Object.entries(section.rows).map(([label, value]) => (
                    <div key={label}>
                      <p className="text-sm text-[var(--textLight)] font-medium uppercase tracking-wide mb-1">
                        {label}
                      </p>
                      <p className="text-[var(--textDark)]">{value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
