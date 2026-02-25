import axios from "axios";
import Link from "next/link";

const BASE = process.env.NEXT_PUBLIC_BACKEND_URL;

export default async function page({ params }) {
  const { slug } = await params;
  const res = await axios.get(`${BASE}/api/tests/single/${slug}`, {
    withCredentials: true,
  });
  const data = res.data.data;

  return (
    <div className="w-full py-10 pt-48">
      <div className="container mx-auto">
        <div className="bg-white shadow-sm rounded-lg p-8 md:p-10 border border-[var(--borderLight)] space-y-8">
          {/* Title */}
          <h1
            className="text-3xl font-bold"
            style={{ color: "var(--brandColor)" }}
          >
            {data?.title}
          </h1>

          <hr className="border-[var(--borderLight)]" />

          {/* Key Info Grid */}
          <div className="grid md:grid-cols-2 gap-y-4 gap-x-12 text-[var(--textDark)]">
            <div className="font-semibold">Code</div>
            <div>{data?.code}</div>

            <div className="font-semibold">Sample Reqs</div>
            <div>{data?.sampleReqs}</div>

            <div className="font-semibold">Turnaround</div>
            <div>{data?.turnaround}</div>
          </div>

          {/* Special Instructions */}
          {data?.specialInstructions && (
            <div className="space-y-2 text-[var(--textDark)]">
              <h3 className="font-semibold">Special Instructions</h3>
              <p>{data.specialInstructions}</p>
            </div>
          )}

          <hr className="border-[var(--borderLight)]" />

          {/* Sample Type Guide */}
          {data?.sampleGuide?.length > 0 && (
            <div className="space-y-4 text-[var(--textDark)]">
              <h3 className="font-semibold">Sample Type Guide</h3>
              {data.sampleGuide.map((sg) => (
                <p key={sg._id}>
                  <span className="font-semibold">{sg.code}</span> — {sg.value}
                </p>
              ))}
            </div>
          )}

          {/* Profile Details */}
          {data?.profileDetails?.length > 0 && (
            <div className="space-y-3 text-[var(--textDark)]">
              <h3 className="font-semibold">Profile Details</h3>
              <ul className="list-disc pl-6 space-y-1">
                {data.profileDetails.map((pd, i) => (
                  <li key={i}>{pd || "N/A"}</li>
                ))}
              </ul>
            </div>
          )}

          <p className="font-semibold text-[var(--textDark)]">
            All Tests Can Be Requested Individually
          </p>

          <hr className="border-[var(--borderLight)]" />

          {/* Related Specialities */}
          <div className="space-y-2 text-[var(--textDark)]">
            <h3 className="font-semibold">Related Specialities</h3>
            <ul className="list-disc pl-6">
              <li>
                <Link
                  href="/specialties/vitamin-tests"
                  className="text-[var(--brandColor)] hover:underline"
                >
                  Vitamins
                </Link>
              </li>
            </ul>
          </div>

          {/* Additional Information */}
          <div className="space-y-2 text-[var(--textDark)]">
            <h3 className="font-semibold">Additional Information</h3>
            <ul className="list-disc pl-6">
              <li>
                <Link
                  href="/test/request-forms"
                  className="text-[var(--brandColor)] hover:underline"
                >
                  Request forms
                </Link>
              </li>
              <li>
                <Link
                  href="/test/specimens"
                  className="text-[var(--brandColor)] hover:underline"
                >
                  Specimens: collection, packaging, transport, rejection criteria
                </Link>
              </li>
              <li>
                <Link
                  href="/test/discontinued-tests"
                  className="text-[var(--brandColor)] hover:underline"
                >
                  Discontinued tests
                </Link>
              </li>
            </ul>
          </div>

          {/* Note */}
          {data?.note && (
            <div className="space-y-2 text-[var(--textDark)]">
              <h3 className="font-semibold">Note</h3>
              <p>{data.note}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}