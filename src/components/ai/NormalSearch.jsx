"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useAiSearchDoctorAndArticles } from "@/hooks/useUser";

export default function NormalSearch() {
  const params = useSearchParams().get('q')
  const [query, setQuery] = useState(params || '');

  const { data: results, isLoading } = useAiSearchDoctorAndArticles(false, query)

  // ⭐ Merge local & AI results
  const localDoctors = results?.localSearch?.doctors || [];
  const localArticls = results?.localSearch?.articles || [];

  return (
    <div className="container mx-auto px-4 py-10">

      {/* SEARCH BAR */}
      <div className="max-w-2xl mx-auto mb-10 flex items-center gap-3 bg-white shadow-md p-4 rounded-xl">
        <input
          type="text"
          placeholder="Search doctors or articles..."
          className="w-full font-bold outline-none text-[var(--textDark)]"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* <button
          onClick={handleSearch}
          className="px-6 py-2 rounded-lg text-white"
          style={{ background: "var(--brandGradient)" }}
        >
          Search
        </button> */}
      </div>

      {isLoading && (
        <p className="text-center text-lg text-gray-500">Searching...</p>
      )}

      {!isLoading && (localDoctors.length > 0 || localArticls.length > 0) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT SIDE — DOCTORS */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--textDark)] mb-4">
              Doctors
            </h2>

            <div className="space-y-6 grid grid-cols-1 lg:grid-cols-2 gap-2">
              {localDoctors.map((doc, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-md overflow-hidden"
                >

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[var(--textDark)]">
                      {doc?.doctorInfo?.name}
                    </h3>
                    <p className="text-[var(--brandColor)] text-sm">
                      {doc.designation}
                    </p>

                    <Link
                      href={`/doctors/missing/${doc?.doctorInfo?._id}`}
                      className="block w-fit mt-5 px-6 py-2 bg-[var(--brandColor)] text-white rounded-full"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              ))}

              {localDoctors.length === 0 && (
                <p className="text-gray-500">No doctor found.</p>
              )}
            </div>
          </div>

          {/* RIGHT SIDE — ARTICLES */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--textDark)] mb-4">
              Articles
            </h2>

            <div className="space-y-6 grid grid-cols-1 lg:grid-cols-2 gap-2">
              {localArticls.map((art, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-md overflow-hidden"
                >

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[var(--textDark)]">
                      {art.title}
                    </h3>

                    <p className="text-gray-600 mt-2">
                      {art.description?.slice(0, 120)}...
                    </p>

                    <Link
                      href={`/news?slug=${art?.slug}`}
                      className="block mt-4 text-[var(--brandColor)] font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}

              {localArticls.length === 0 && (
                <p className="text-gray-500">No article found.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
