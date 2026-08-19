"use client";

export default function HPVTestsPage() {
  return (
    <div className="min-h-screen bg-white p-6 border border-gray-100">
      <div className="container mx-auto">

        {/* PAGE TITLE */}
        <div className="bg-white mb-8">
          <h1 className="text-3xl font-bold text-[var(--textDark)] mb-3">
            HPV Tests
          </h1>
          <p className="text-[var(--textLight)] leading-relaxed">
            How requests for HPV testing are processed.
          </p>
        </div>


        {/* INTRODUCTION SECTION */}
        <SectionCard title="How Requests for HPV Testing Are Processed">
          <p>
            The benefit of a negative HPV result is its negative predictive
            value – meaning that a negative HPV result indicates that a patient
            is at very low risk of developing cervical disease. However, neither
            HPV testing nor negative cervical cytology are able to reduce the
            risk to zero. The negative predictive value of both DNA and mRNA
            testing is the same. DNA tests detect the presence of viruses only.
            A mRNA test detects the presence of viral oncogenic expression.
          </p>

          <p className="mt-4">
            <strong>
              Requests for Cervical Cytology (PAPT) only will no longer be
              processed without HPV. HPV testing will be charged.
            </strong>
          </p>
        </SectionCard>


        {/* SECTION: Cervical Cytology */}
        <SectionCard title="Cervical Cytology">
          <InfoRow label="Code" value="PAPT will include HPVH" />
          <InfoRow label="Sample Reqs" value="TPV" />
          <InfoRow label="Turnaround" value="3 days" />

          <div className="mt-4">
            <strong>Special Instructions:</strong>
            <p>
              If PAPT is requested as a single test, HR-HPV will be undertaken
              additionally, and a combined report will be issued. PAPT and HPVH
              will be charged.
            </p>
          </div>
        </SectionCard>


        {/* SECTION: PAPT & HPVH */}
        <SectionCard title="PAPT and HPVH">
          <InfoRow label="Code" value="PAPT will include HPVH" />
          <InfoRow label="Sample Reqs" value="TPV" />
          <InfoRow label="Turnaround" value="3 days" />

          <div className="mt-4">
            <strong>Special Instructions:</strong>
            <p>
              If PAPT and HPVH are requested together, results will be given as
              a combined report, and both tests will be charged.
            </p>
          </div>
        </SectionCard>


        {/* SECTION: HPV mRNA */}
        <SectionCard title="HPV mRNA (All High Risk Subtypes)">
          <InfoRow label="Code" value="HPVH" />
          <InfoRow label="Sample Reqs" value="TPV" />
          <InfoRow label="Turnaround" value="3 days" />

          <div className="mt-4">
            <strong>Special Instructions:</strong>
            <p>
              If HR-HPV is DETECTED/POSITIVE, cervical cytology (PAPT) will be
              processed without charge using the same vial.
            </p>
          </div>
        </SectionCard>


        {/* SECTION: HPV DNA Subtypes */}
        <SectionCard title="HPV (Individual low & high risk DNA subtypes)">
          <InfoRow label="Code" value="HP20" />
          <InfoRow label="Sample Reqs" value="TPV / PCR Swab" />
          <InfoRow label="Turnaround" value="3 days" />

          <div className="mt-4">
            <strong>Special Instructions:</strong>
            <p>
              HPV low and high risk DNA subtypes will be reported individually.
              If High Risk DNA types are positive, cervical cytology (PAPT)
              using the same vial will be processed without charge.
            </p>
          </div>
        </SectionCard>


        {/* SECTION: HPV DNA + reflexed mRNA */}
        <SectionCard title="HPV (DNA and reflexed mRNA)">
          <InfoRow label="Code" value="HPVT" />
          <InfoRow label="Sample Reqs" value="TPV" />
          <InfoRow label="Turnaround" value="3 days" />

          <div className="mt-4">
            <strong>Special Instructions:</strong>
            <p>
              If DNA types 16, 18, 31, 33, 45 are DETECTED/POSITIVE, reflex
              testing for E6/E7 oncogenes will be performed. Cervical cytology
              (PAPT) will be processed without charge using the same vial.
            </p>
          </div>
        </SectionCard>


        {/* SECTION: More Details */}
        <SectionCard title="More Details">
          <p>
            See the Sample Requirements page for an explanation of the sample
            code listed above.
          </p>
          <p className="mt-2">
            See the Special Instructions Legend page for a full list of special
            instructions.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            <em>Last updated: 22/01/2022</em>
          </p>
        </SectionCard>


        {/* SECTION: Combined Report */}
        <SectionCard title="HPV/PAPT Combined Report">
          <p>
            Where HPV result is reported with Cervical Cytology, a recommendation
            for patient management will be provided based on combined findings.
          </p>

          <p className="mt-3">
            Turnaround times are based on receipt of sample in the Cervical
            Cytology laboratory.
          </p>
        </SectionCard>
      </div>
    </div>
  );
}


/* ---------------------------------------- */
/* COMPONENTS */
/* ---------------------------------------- */

function SectionCard({ title, children }) {
  return (
    <div className="bg-white p-6 mb-10 border border-[var(--borderLight)]">
      <h2 className="text-2xl font-semibold text-[var(--textDark)] mb-4">
        {title}
      </h2>
      <div className="text-[var(--textLight)] leading-relaxed space-y-3 text-[15px]">
        {children}
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="grid grid-cols-2 bg-[var(--brandColorLight)] p-3 rounded-md mb-2">
      <span className="font-medium text-[var(--textDark)]">{label}</span>
      <span className="text-[var(--textDark)]">{value}</span>
    </div>
  );
}
