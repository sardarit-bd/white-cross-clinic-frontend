"use client";

export default function NIPTTestDirectoryPage() {
  return (
    <div className="bg-[var(--bgLight)] min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-sm rounded-xl p-8 md:p-12">
        
        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--brandColor)] mb-6">
          NIPT via the National Genomics Test Directory
        </h1>

        {/* INTRO */}
        <p className="text-[var(--textDark)] leading-relaxed mb-6">
          The NHS is offering NIPT testing for women with a confirmed previous 
          affected pregnancy with any full trisomy for chromosome 21, 18 or 13 
          via the National Genomic Test Directory under referral code R445.
        </p>

        {/* INCLUSION CRITERIA */}
        <h2 className="text-2xl font-bold text-[var(--brandColor)] mb-3">
          Inclusion criteria
        </h2>

        <ul className="space-y-2 mb-8 text-[var(--textDark)] leading-relaxed list-disc pl-6">
          <li>
            All women with a history of pregnancy with a full trisomy of 
            T21, T18 or T13 should be offered NIPT in any subsequent pregnancy.
          </li>
          <li>
            R445 is offered from 10+0 to 21+6 weeks inclusive, confirmed 
            by ultrasound scan (USS), to both singleton and twin pregnancies.
          </li>
          <li>
            Eligibility for R445 should be established prior to offering the  
            test. See the R445 test entry within the NGTD for latest eligibility 
            and exclusion criteria.
          </li>
          <li>
            It is recommended that the report from the previous affected pregnancy 
            is reviewed to confirm full trisomy of T21, T18 or T13 prior to offering 
            R445. However, R445 can still be offered even if the previous report is 
            unavailable or obtaining it will cause a delay in screening. 
            In such cases it should be explained to the woman that R445 is being 
            performed based on clinical history.
          </li>
        </ul>

        {/* EXCLUSIONS */}
        <h2 className="text-2xl font-bold text-[var(--brandColor)] mb-3">
          Exclusions
        </h2>

        <ul className="space-y-2 mb-4 text-[var(--textDark)] leading-relaxed list-disc pl-6">
          <li>
            Existing NHS FASP exclusions: vanished twin pregnancy, current maternal cancer, 
            balanced translocation (T21, T18, T13), maternal T21, bone marrow/organ transplant, 
            blood transfusion in the last 4 months.
          </li>
          <li>
            Previous pregnancy was a trisomy involving chromosomes other than T21, T18 or T13.
          </li>
          <li>
            Previous pregnancy was not a full trisomy (e.g. mosaicism, translocation, partial 
            trisomy of T21, T18 or T13).
          </li>
          <li>
            One of the parents has a Robertsonian or balanced translocation involving 
            chromosome T21, T18 or T13.
          </li>
          <li>
            Donor egg used in current pregnancy — referral to genetic counselling 
            or fetal medicine should be offered.
          </li>
        </ul>
      </div>
    </div>
  );
}
