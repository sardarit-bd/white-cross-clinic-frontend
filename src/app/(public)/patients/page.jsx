"use client";

import Link from "next/link";

export default function PatientsBanner() {
  return (
    <section className="bg-gray-200 min-h-screen w-full py-16">

      <div className="container mx-auto px-4">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Patients
        </h1>

        {/* Description */}
        <p className="text-black max-w-3xl text-lg md:text-xl font-medium">
          We provide a Patient Reception in London for our customers,
          and can also arrange home visits for most tests.
        </p>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">


          {/* Card 3 */}
          <div className="bg-white p-8">
            <h3 className="text-xl font-semibold mb-3">Home Visits</h3>
            <p className="text-gray-700 mb-5">
              Sample taking for most tests can be undertaken on Home Visits.
            </p>
            <Link href="/patients/homevisit" className="text-blue-600 font-semibold flex items-center hover:underline">
              Read more <span className="ml-1">›</span>
            </Link>
          </div>


          {/* Card 1 */}
          <div className="bg-white p-8">
            <h3 className="text-xl font-semibold mb-3">Patient Reception</h3>
            <p className="text-gray-700 mb-5">
              Our Patient Reception provides a sample collection service for our customers’ patients.
            </p>
            <Link href="/patients/patientreception" className="text-blue-600 font-semibold flex items-center hover:underline">
              Read more <span className="ml-1">›</span>
            </Link>
          </div>


          {/* Card 2 */}
          <div className="bg-white p-8">
            <h3 className="text-xl font-semibold mb-3">
              Sample Collection Guide
            </h3>
            <p className="text-gray-700 mb-5">
              A reference for clinicians and patients who are preparing to collect samples requiring special instructions.
            </p>
            <Link href="/patients/samplecollectionguide" className="text-blue-600 font-semibold flex items-center hover:underline">
              Read more <span className="ml-1">›</span>
            </Link>
          </div>


        </div>
      </div>
    </section>
  );
}
