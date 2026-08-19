"use client";

export default function CoeliacDiseaseUpdate() {
  return (
    <div className="min-h-screen bg-white p-6 border border-gray-100">
      <div className="container mx-auto">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-4">
          Coeliac disease update
        </h1>

        <p className="text-[var(--textDark)] font-semibold mb-6">
          Our new pathway reduces the risk of missing IgA-deficient patients.
        </p>

        {/* SECTION */}
        <p className="text-[var(--textLight)] leading-relaxed mb-6">
          Coeliac disease is an immune-mediated disease of the intestines that is triggered by
          the ingestion of gluten in genetically susceptible individuals. Gluten is the major
          protein component of wheat, rye, and barley. Genetic predisposition does play a key
          role in Coeliac disease, and it is well known that Coeliac disease is strongly
          associated with specific HLA class II genes known as HLA-DQ2 and HLA-DQ8.
          Approximately 95% of Coeliac disease patients express HLA-DQ2, and the remaining
          patients are usually HLA-DQ8 positive. The negative predictive value for both tests is
          higher than 99%. However, the HLA-DQ2 allele is common and is carried by approximately
          30% of Caucasian individuals. Thus, HLA-DQ2 or HLA-DQ8 is necessary for disease
          development but is not sufficient for disease development; its estimated risk effect is
          only 36-53%.
        </p>

        <p className="text-[var(--textLight)] leading-relaxed mb-6">
          <b>Note:</b> History taking is important if a patient has been on a gluten-free diet
          for 6–12 months, approximately 80% will lose their antibody response. After 5 years
          this increases to &gt;90%.
        </p>

        {/* NEW PATHWAY */}
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--textDark)] mt-8 mb-4">
          New pathway
        </h2>

        <p className="text-[var(--textLight)] leading-relaxed mb-6">
          To determine the new Coeliac Pathway, a WCC audit of more than 12,000 requests for
          coeliac testing was carried out and results assessed within UKAS current guidelines.
          The purpose of these new guidelines is to reduce the risk of missing IgA deficient
          patients.
        </p>

        <p className="text-[var(--textLight)] leading-relaxed mb-6">
          The new pathway covers this by adding a total IgA to all low Tissue Transglutaminase
          (TGG) IgA results to check for an IgA deficiency. If an IgA deficiency is identified, a
          reflex deamidated gliadin IgG will be carried out to determine whether the patient is
          likely to have coeliac disease with an IgG antibody.
        </p>

        {/* LIST */}
        <ol className="list-decimal list-inside space-y-2 text-[var(--textLight)] mb-6 leading-relaxed">
          <li>Initial TTG IgA samples are received and tested</li>
          <li>
            If TTG IgA is LOW &lt;0.2 U/ml reflex testing for Total IgA will be undertaken
          </li>
          <li>
            If Total IgA is LOW &lt;0.1 g/L then reflex testing for Gliadin IgG test will be
            undertaken
          </li>
          <li>
            If TTG IgA is HIGH (&gt;= 10 U/ml), then reflex testing for Endomysial IgA will be
            undertaken as a confirmatory test.
          </li>
        </ol>

        {/* ENDOMYSIAL SECTION */}
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--textDark)] mb-4">
          Endomysial IgA
        </h2>

        <p className="text-[var(--textLight)] leading-relaxed mb-6">
          This is no longer available as a stand-alone test. If requested the request will
          default to TTG IgA. However, if TTG IgA is positive, endomysial IgA will be carried
          out as a confirmatory test. This only needs to be done once in the patient’s history.
        </p>

        <h3 className="text-xl font-semibold text-[var(--textDark)] mb-2">
          Endomysial IgG requests
        </h3>
        <p className="text-[var(--textLight)] mb-4">No longer available as a single test request.</p>

        <h3 className="text-xl font-semibold text-[var(--textDark)] mb-2">
          Deamidated gliadin IgA requests
        </h3>
        <p className="text-[var(--textLight)] mb-4">
          This is no longer available. If requested, the request will default to TTG IgA.
        </p>

        <h3 className="text-xl font-semibold text-[var(--textDark)] mb-2">
          Deamidated gliadin IgG requests
        </h3>
        <p className="text-[var(--textLight)] mb-6">
          This can be requested as an individual standalone test as well as being incorporated
          into the coeliac pathway. This may be useful when testing children’s samples.
        </p>

        {/* TABLE (Scroll on Mobile) */}
        <div className="overflow-x-auto mt-6 border border-[var(--borderLight)]">
          <table className="min-w-[700px] w-full">
            <thead className="bg-[var(--brandColor)] text-white">
              <tr>
                <th className="p-3 text-left">TTG IgA Result U/ML</th>
                <th className="p-3 text-left">Total IgA Result (g/L)</th>
                <th className="p-3 text-left">Deamidated Gliadin IgG Result U/ML</th>
                <th className="p-3 text-left">Comment</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-3">0.2 to 10</td>
                <td className="p-3">N/A</td>
                <td className="p-3">N/A</td>
                <td className="p-3">
                  Coeliac disease unlikely (please note that if the patient has no dietary gluten…)
                </td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="p-3">&gt;= 10</td>
                <td className="p-3">N/A</td>
                <td className="p-3">N/A</td>
                <td className="p-3">Suggestive of coeliac disease</td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="p-3">&lt;0.2</td>
                <td className="p-3">&gt;= 0.1</td>
                <td className="p-3">N/A</td>
                <td className="p-3">
                  Consistent with coeliac disease in a patient with selective IgA deficiency
                </td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="p-3">&lt;0.2</td>
                <td className="p-3">&lt;0.1</td>
                <td className="p-3">&lt;7</td>
                <td className="p-3">
                  Coeliac disease unlikely (please note that if the patient has no dietary gluten…)
                </td>
              </tr>

              <tr>
                <td className="p-3">&lt;0.2</td>
                <td className="p-3">&lt;0.1</td>
                <td className="p-3">7–10</td>
                <td className="p-3">
                  Result equivocal — suggest referral to gastroenterologist for consideration
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
