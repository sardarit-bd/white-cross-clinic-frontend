"use client";

import Image from "next/image";
import Link from "next/link";

export default function PatientsBanner() {
  return (
    <section className="relative w-full pt-48">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={`/images/servicesBanner.webp`} // put your banner image here
          alt="Patients Banner"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      <div className="container mx-auto px-4 py-20">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Patients
        </h1>

        {/* Description */}
        <p className="text-white max-w-3xl text-lg md:text-xl font-medium">
          We provide a Patient Reception in London for our customers,
          and can also arrange home visits for most tests.
        </p>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-3">Patient Reception</h3>
            <p className="text-gray-700 mb-5">
              Our Patient Reception provides a sample collection service for our customers’ patients.
            </p>
            <Link href="/patients/patient-reception" className="text-blue-600 font-semibold flex items-center hover:underline">
              Read more <span className="ml-1">›</span>
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-3">
              Sample Collection Guide
            </h3>
            <p className="text-gray-700 mb-5">
              A reference for clinicians and patients who are preparing to collect samples requiring special instructions.
            </p>
            <Link href="/patients/sample-collection-guide" className="text-blue-600 font-semibold flex items-center hover:underline">
              Read more <span className="ml-1">›</span>
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-3">Home Visits</h3>
            <p className="text-gray-700 mb-5">
              Sample taking for most tests can be undertaken on Home Visits.
            </p>
            <Link href="/patients/home-visits" className="text-blue-600 font-semibold flex items-center hover:underline">
              Read more <span className="ml-1">›</span>
            </Link>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-3">Andrology services</h3>
            <p className="text-gray-700 mb-5">
              Your doctor may refer you to WCC Andrology if you are seeking treatment for male infertility.
            </p>
            <Link href="/patients/andrology-services" className="text-blue-600 font-semibold flex items-center hover:underline">
              Read more <span className="ml-1">›</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
