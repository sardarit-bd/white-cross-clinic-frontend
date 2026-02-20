"use client";

import { useEffect, useState, useMemo } from "react";
import { Sparkles, Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useAiSearchDoctorAndArticles } from "@/hooks/useUser";

export default function AISearchBox() {
  const params = useSearchParams().get("ai");
  const [query, setQuery] = useState(params || "");
  const { data: results, isLoading } = useAiSearchDoctorAndArticles(true, query)

  // ⭐ Merge local & AI results
  const localDoctors = results?.localSearch?.doctors || [];
  const localArticls = results?.localSearch?.articles || [];

  const webSearch = results?.webSearch;

  console.log(results)
  return (
    <div className="space-y-8 container mx-auto py-10">

      {/* ===================================================== */}
      {/* SEARCH INPUT BOX */}
      {/* ===================================================== */}
      <div className="rounded-xl max-w-3xl mx-auto p-[2px] bg-[var(--brandGradient)] shadow-lg">
        <div className="bg-white rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[var(--brandColorLight)] flex items-center justify-center">
            {isLoading ? (
              <Loader2 size={20} className="text-[var(--brandColor)] animate-spin" />
            ) : (
              <Sparkles size={20} className="text-[var(--brandColor)]" />
            )}
          </div>

          <input
            type="text"
            placeholder="Ask AI about doctors, diseases or articles..."
            className="w-full font-bold text-[var(--textDark)] focus:outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          {/* <button
            onClick={setQuery}
            disabled={loading}
            className="px-4 py-2 bg-[var(--brandColor)] text-white rounded-lg hover:bg-[var(--brandColorDark)] transition"
          >
            {loading ? "Searching..." : "Search"}
          </button> */}
        </div>
      </div>

      {/* ===================================================== */}
      {/* AI LOADING */}
      {/* ===================================================== */}
      {isLoading && (
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <Loader2 size={32} className="animate-spin text-[var(--brandColor)] mx-auto" />
          <p className="font-semibold mt-3">AI is analyzing medical sources...</p>
        </div>
      )}

      {/* ===================================================== */}
      {/* TWO-COLUMN AI RESULTS */}
      {/* ===================================================== */}
      {!isLoading && results && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* ------------------ LEFT COLUMN → DOCTORS ------------------ */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-[var(--brandColor)] flex items-center gap-2">
                Doctors ({localDoctors.length})
              </h3>

              {localDoctors.length === 0 ? (
                <p className="text-[var(--textLight)]">No doctors found.</p>
              ) : (
                <div className="space-y-4">
                  {localDoctors.map((doc, i) => (
                    <Link
                      href={`/doctors/missing/${doc?.doctorInfo?._id}`}
                      target="_blank"
                      key={i}
                      className="block p-4 bg-gray-50 rounded-xl border-l-4 border-[var(--brandColor)] hover:bg-gray-100 transition"
                    >
                      <p className="font-semibold">{doc?.doctorInfo?.name}</p>
                      <p className="text-sm text-[var(--textLight)]">
                        {doc.designation}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* ------------------ RIGHT COLUMN → ARTICLES ------------------ */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-[var(--brandAccent)] flex items-center gap-2">
                Articles ({localArticls.length})
              </h3>

              {localArticls.length === 0 ? (
                <p className="text-[var(--textLight)]">No articles found.</p>
              ) : (
                <div className="space-y-4">
                  {localArticls.map((art, i) => (
                    <Link
                      href={`/news?slug=${art?.slug}`}
                      key={i}
                      target="_blank"
                      className="block p-4 bg-gray-50 rounded-xl border-l-4 border-[var(--brandAccent)] hover:bg-gray-100 transition"
                    >
                      <p className="font-semibold">{art.title}</p>
                      <p className="text-sm text-[var(--textLight)] mt-1">
                        {art.description?.slice(0, 140) || ""}...
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="mt-32">
            <h3 className="text-xl font-bold mb-4 text-[var(--brandAccent)] flex items-center gap-2">
             Google Search ({localArticls.length})
            </h3>

            {webSearch.length === 0 ? (
              <p className="text-[var(--textLight)]">No Result found.</p>
            ) : (
              <div className="space-y-4">
                {webSearch.map((art, i) => (
                  <Link
                    href={art?.url}
                    key={i}
                    target="_blank"
                    className="block p-4 bg-gray-50 rounded-xl border-l-4 border-[var(--brandAccent)] hover:bg-gray-100 transition"
                  >
                    <p className="font-semibold">{art.title}</p>
                    <p className="text-sm text-[var(--textLight)] mt-1">
                      {art.content?.slice(0, 140) || ""}...
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
