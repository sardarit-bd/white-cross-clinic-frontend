import axios from "axios";
import Link from "next/link";
import TestHero from "@/components/modules/testDetails/TestHero";
import BookingSidebar from "@/components/modules/testDetails/BookingSidebar";
import FaqSection from "@/components/modules/testDetails/FaqSection";
import SectionCard from "@/components/modules/testDetails/SectionCard";

const BASE = process.env.NEXT_PUBLIC_BACKEND_URL;

export default async function page({ params }) {
  const { slug } = await params;
  const res = await axios.get(`${BASE}/api/tests/single/${slug}`, {
    withCredentials: true,
  });
  const data = res.data.data;

  return (
    <div className="w-full py-10 pt-48">
      <div className="container mx-auto px-4">
        <nav className="mb-4 flex flex-wrap items-center gap-2 text-xs text-(--textLight)">
          <Link href="/" className="hover:text-(--brandColor)">
            Home
          </Link>
          <span>/</span>
          <Link href="/test/test-a-z" className="hover:text-(--brandColor)">
            Tests
          </Link>
          <span>/</span>
          <span className="font-semibold text-(--textDark)">{data?.title}</span>
        </nav>
        <TestHero
          slug={slug}
          title={data?.title}
          subtitle={data?.subtitle}
          category={data?.category}
          price={data?.price}
          phlebotomyFee={data?.phlebotomyFee}
          turnaround={data?.turnaround}
          testDuration={data?.testDuration}
          lab={data?.lab}
        />

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="space-y-6">
            {data?.profileDetails?.length > 0 && (
              <SectionCard title="About This Test">
                <ul className="list-disc space-y-2 pl-6 text-(--textDark)">
                  {data.profileDetails.map((pd, i) => (
                    <li key={i}>{pd || "N/A"}</li>
                  ))}
                </ul>
              </SectionCard>
            )}
            {data?.aboutText && (
              <SectionCard title={`About ${data?.title}`}>
                <p className="whitespace-pre-line text-sm text-(--textLight)">
                  {data.aboutText}
                </p>
              </SectionCard>
            )}

            <SectionCard title="Test Information">
              <div className="space-y-6 text-(--textDark)">
                <div className="grid gap-x-12 gap-y-4 md:grid-cols-2">
                  <div className="font-semibold">Code</div>
                  <div>{data?.code}</div>

                  <div className="font-semibold">Sample Reqs</div>
                  <div>{data?.sampleReqs}</div>

                  <div className="font-semibold">Turnaround</div>
                  <div>{data?.turnaround}</div>
                </div>

                {data?.specialInstructions && (
                  <div className="space-y-2">
                    <h3 className="font-semibold">Special Instructions</h3>
                    <p>{data.specialInstructions}</p>
                  </div>
                )}
                {data?.sampleGuide?.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="font-semibold">Sample Type Guide</h3>
                    {data.sampleGuide.map((sg) => (
                      <p key={sg._id}>
                        <span className="font-semibold">{sg.code}</span> —{" "}
                        {sg.value}
                      </p>
                    ))}
                  </div>
                )}

                <p className="font-semibold">
                  All Tests Can Be Requested Individually
                </p>
              </div>
            </SectionCard>
            <FaqSection faqs={data?.faqs} />
            <SectionCard>
              <div className="space-y-6 text-(--textDark)">
                <div className="space-y-2">
                  <h3 className="font-semibold">Related Specialities</h3>
                  <ul className="list-disc pl-6">
                    <li>
                      <Link
                        href="/specialties/vitamin-tests"
                        className="text-(--brandColor) hover:underline"
                      >
                        Vitamins
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Additional Information</h3>
                  <ul className="list-disc pl-6">
                    <li>
                      <Link
                        href="/test/request-forms"
                        className="text-(--brandColor) hover:underline"
                      >
                        Request forms
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/test/specimens"
                        className="text-(--brandColor) hover:underline"
                      >
                        Specimens: collection, packaging, transport, rejection
                        criteria
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/test/discontinued-tests"
                        className="text-(--brandColor) hover:underline"
                      >
                        Discontinued tests
                      </Link>
                    </li>
                  </ul>
                </div>
                {data?.note && (
                  <div className="space-y-2">
                    <h3 className="font-semibold">Note</h3>
                    <p>{data.note}</p>
                  </div>
                )}
              </div>
            </SectionCard>
          </div>
          <BookingSidebar
            slug={slug}
            price={data?.price}
            phlebotomyFee={data?.phlebotomyFee}
          />
        </div>
      </div>
    </div>
  );
}