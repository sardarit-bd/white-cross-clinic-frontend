"use client";

export default function WCCGenetics() {
    return (
        <section className="w-full bg-white p-6 md:p-10 rounded-xl border border-[var(--borderLight)] shadow-[var(--shadowCard)]">
            
            {/* TITLE */}
            <h1 className="text-3xl font-bold text-[var(--textDark)] mb-6">
                WCC Genetics
            </h1>

            {/* INTRO */}
            <p className="text-[var(--textLight)] mb-4">
                WCC Genetics is a consultant-led service with extensive expertise in the testing, 
                diagnosis and genetic counseling of inherited disorders.
            </p>

            <p className="text-[var(--textLight)] mb-4">
                Genetic tests are performed on DNA for molecular genetic analysis and on whole chromosomes 
                for cytogenetic analysis. Some tests are part of profiles that can be linked with assays 
                from other WCC disciplines, such as biochemistry and hematology, to give more comprehensive 
                results for the patient.
            </p>

            {/* AVAILABLE TESTS */}
            <div className="mt-6">
                <h2 className="text-xl font-semibold text-[var(--textDark)] mb-3">Genetic tests are available for:</h2>

                <ul className="list-disc ml-6 space-y-2 text-[var(--textLight)]">
                    <li>Prenatal diagnosis and rapid trisomy screening by Amnio-PCR</li>
                    <li>Carrier screening</li>
                    <li>Newborn chromosome analysis</li>
                    <li>Confirmation of symptomatic individuals and pre-symptomatic testing</li>
                    <li>Genetic variation that influences risk of disease</li>
                    <li>Identity studies (paternity, zygosity, tissue typing)</li>
                    <li>Fertility studies</li>
                    <li>Products of conception</li>
                    <li>Cancer</li>
                </ul>
            </div>

            {/* BOTTOM SECTION */}
            <div className="mt-8 text-[var(--textLight)] space-y-4 leading-relaxed">
                <p>
                    Genetic testing is sometimes complex, and tests will vary in their ability to detect 
                    mutations or to detect all patients who have, or will develop, a disease. Some tests 
                    are diagnostic for a condition, while others are indicative or are associated with an 
                    altered risk for a condition. Results can affect the lives of individuals and have 
                    implications for their family, for insurance and employment.
                </p>

                <p>
                    Where testing will predict the inheritance of a disease in a healthy person, counseling 
                    and consent are mandatory. For these tests, please complete the Genetic Request form. 
                    Our service provides result interpretation and risk assessment to patients and their 
                    family members. Genetic counseling can be arranged by WCC’s Consultant Clinical Geneticist.
                </p>
            </div>
        </section>
    );
}
