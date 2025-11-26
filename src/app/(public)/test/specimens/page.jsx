"use client";
import Link from "next/link";

export default function SpecimensPage() {
  return (
    <div className="w-full py-10 pt-48">
      {/* Top Section */}
      <div className="container mx-auto bg-white p-8 rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold mb-4" style={{ color: "var(--brandColor)" }}>
          Specimens
        </h1>

        <p className="text-[15.5px] font-semibold mb-4" style={{ color: "var(--textDark)" }}>
          Guidance on specimen collection, packaging and transport, and rejection criteria.
        </p>

        <p className="text-[15px] text-gray-700 mb-3">
          A properly collected specimen is critical to quality test results. Ensure that:
        </p>

        <ul className="text-[15px] text-gray-700 space-y-2 mb-6 list-disc pl-6">
          <li>The correct specimen type is collected.</li>
          <li>The correct amount is collected.</li>
          <li>The specimen is collected in the right container with any necessary additives.</li>
          <li>The specimens are collected following safe working practices.</li>
          <li>
            Ensure that there is no contamination from external sources when collecting
            microbiology and virology samples.
          </li>
          <li>
            Clean surgical instruments and surgical trays must be used when collecting
            Histopathology samples.
          </li>
          <li>The container is securely sealed and labelled.</li>
        </ul>
      </div>

      {/* Card Sections */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {/* Card 1 */}
        <div className="border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "var(--brandColor)" }}>
            Specimen Collection
          </h2>
          <p className="text-[15px] text-gray-700 mb-4">
            Guides and protocols.
          </p>
          <Link
            href="specimens/collection"
            className="text-sm font-medium"
            style={{ color: "var(--brandColorDark)" }}
          >
            Read More →
          </Link>
        </div>

        {/* Card 2 */}
        <div className="border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "var(--brandColor)" }}>
            Specimen Packaging
          </h2>
          <p className="text-[15px] text-gray-700 mb-4">
            Samples need to be collected and packed into appropriate sample containers to ensure
            integrity during transport.
          </p>
          <Link
            href="specimens/packaging"
            className="text-sm font-medium"
            style={{ color: "var(--brandColorDark)" }}
          >
            Read More →
          </Link>
        </div>

        {/* Card 3 */}
        <div className="border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "var(--brandColor)" }}>
            Specimen Transport
          </h2>
          <p className="text-[15px] text-gray-700 mb-4">
            Samples need to be transported for subsequent processing and testing using various
            transport systems.
          </p>
          <Link
            href="specimens/transport"
            className="text-sm font-medium"
            style={{ color: "var(--brandColorDark)" }}
          >
            Read More →
          </Link>
        </div>

        {/* Card 4 */}
        <div className="border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "var(--brandColor)" }}>
            Specimen Rejection Criteria
          </h2>
          <p className="text-[15px] text-gray-700 mb-4">
            Sometimes samples fail to meet quality or eligibility criteria and must be rejected.
          </p>
          <Link
            href="specimens/rejection-criteria"
            className="text-sm font-medium"
            style={{ color: "var(--brandColorDark)" }}
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}
