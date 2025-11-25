"use client";

export default function PatientReception() {
  return (
    <div className="w-full bg-[#f7f9fc] py-12">
      <div className="max-w-6xl mx-auto px-4">

        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--textDark)] mb-6">
          Patient Reception
        </h1>

        {/* Intro Text */}
        <p className="text-[var(--textLight)] leading-relaxed mb-8">
          Our Patient Reception provides a sample collection service for patients attending at the 
          request of their doctor/clinic.
        </p>

        {/* Section: Main Details */}
        <div className="space-y-6 text-[var(--textDark)] leading-relaxed">
          <p>
            Patients, of all ages, are welcome to attend Patient Reception, for their samples to be taken.
            Patients need to be referred by their clinic or doctor and are required to bring a request form 
            or letter of referral.
          </p>

          <p>
            Appointments are only necessary if a patient needs specialised investigations or care.
            Instructions can be telephoned or emailed ahead of the patient’s attendance, if this is more
            convenient.
          </p>

          <p>
            Sample-taking is undertaken by qualified phlebotomy staff for which a standard sample-taking 
            fee is charged to patients. Doctors and clinics are charged for each patient. Sample-taking 
            services for Extended Tests and Drugs of Abuse with Chain of Custody, and semen analysis 
            are routinely available.
          </p>

          <p>
            Cervical cytology, HVS and cervical swabs are not taken at Patient Reception.
          </p>

          <p>
            Patient Reception sample-taking services are not available in Manchester.
          </p>
        </div>

        {/* Opening Hours */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--textDark)] mb-4">
            Opening hours
          </h2>

          <div className="bg-white rounded-lg shadow p-6 space-y-2">
            <p>Monday to Friday: <strong>9.00am – 10.00pm</strong></p>
            <p>Saturday: <strong>10.00am – 6.00pm</strong></p>
            <p>Closed Sunday and public holidays</p>
          </div>

          <p className="mt-4 text-[var(--textLight)]">
            Out of hours samples can be dropped off at this location. Phlebotomy Services are only 
            available at this location. Patients’ samples cannot be taken at The Halo Building or 
            WCC Manchester.
          </p>
        </div>

        {/* Appointments */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--textDark)] mb-4">Appointments</h2>

          <ul className="list-disc pl-6 space-y-3 text-[var(--textDark)]">
            <li>No appointment is required for routine tests (a doctor or clinic’s request form or referral
                letter is required)</li>

            <li>
              Appointments can be made for special/extended tests (glucose tolerance tests, drugs of abuse, 
              etc.) – please telephone <strong>07785235269</strong> or email{" "}
              <a href="mailto:info@whitecrosspolyclinics.com" className="text-[var(--brandColor)] underline">
                info@whitecrosspolyclinics.com
              </a>
            </li>

            <li>
              Semen analysis must always be by appointment, call <strong>07785235269</strong>
            </li>
          </ul>
        </div>

        {/* Home Visits */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--textDark)] mb-4">Home visits</h2>

          <p className="text-[var(--textDark)] leading-relaxed">
            A Home Visiting service is available within the M25. Please telephone <strong>07785235269</strong> 
            or email{" "}
            <a href="mailto:info@whitecrosspolyclinics.com" className="text-[var(--brandColor)] underline">
              info@whitecrosspolyclinics.com
            </a>{" "}
            to arrange a home visit.
          </p>
        </div>

        {/* Location */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--textDark)] mb-4">Location</h2>

          <div className="bg-white rounded-lg shadow p-6 space-y-2">
            <p className="font-semibold">Patient Reception</p>
            <p>52 Stepney Greed, Tower Hamlet,</p>
            <p>Whitechapel East London Postcode E1 3JJ</p>

            <p className="mt-2">
              Tel: <strong>07785235269</strong>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:info@whitecrosspolyclinics.com" className="text-[var(--brandColor)] underline">
                info@whitecrosspolyclinics.com
              </a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
