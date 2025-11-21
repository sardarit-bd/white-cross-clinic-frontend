"use client";

import { useEffect, useState, useMemo } from "react";
import { Sparkles, Loader2 } from "lucide-react";
import { callMCP } from "@/lib/mcpClient";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function AISearchBox() {
  const params = useSearchParams().get("ai");
  const [query, setQuery] = useState(params || "");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAISearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResults(null);

    try {
      const res = await callMCP(query);
      setResults(res);
    } catch (error) {
      console.error(error);
      setResults({ error: true, message: "Something went wrong." });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (params) handleAISearch();
  }, [params]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleAISearch();
  };

  // ⭐ Merge local & AI results
  const localResults = results?.localResults || [];
  const aiResults = results?.aiResults || [];

  // ⭐ Separate by type
  const doctors = useMemo(() => {
    const all = [...localResults, ...aiResults];
    return all
      .filter((item) => item.type === "doctor")
      .map((item) => ({
        ...item,
        score: item.score || Math.random(),
        link:
          item.link ||
          `/doctors/${item?.department?.toLowerCase() || item?.id || item?.name?.replace(/\s+/g, "-")}`,
      }))
      .sort((a, b) => b.score - a.score);
  }, [results]);

  const articles = useMemo(() => {
    const all = [...localResults, ...aiResults];
    return all
      .filter((item) => item.type === "article")
      .map((item) => ({
        ...item,
        score: item.score || Math.random(),
        link:
          item.link ||
          `/articles/${item.slug || item.id || item.title?.toLowerCase().replace(/\s+/g, "-")}`,
      }))
      .sort((a, b) => b.score - a.score);
  }, [results]);

  return (
    <div className="space-y-8 container mx-auto py-10">
      
      {/* ===================================================== */}
      {/* SEARCH INPUT BOX */}
      {/* ===================================================== */}
      <div className="rounded-xl max-w-3xl mx-auto p-[2px] bg-[var(--brandGradient)] shadow-lg">
        <div className="bg-white rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[var(--brandColorLight)] flex items-center justify-center">
            {loading ? (
              <Loader2 size={20} className="text-[var(--brandColor)] animate-spin" />
            ) : (
              <Sparkles size={20} className="text-[var(--brandColor)]" />
            )}
          </div>

          <input
            type="text"
            placeholder="Ask AI about doctors, diseases or articles..."
            className="w-full text-[var(--textDark)] focus:outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
          />

          <button
            onClick={handleAISearch}
            disabled={loading}
            className="px-4 py-2 bg-[var(--brandColor)] text-white rounded-lg hover:bg-[var(--brandColorDark)] transition"
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
      </div>

      {/* ===================================================== */}
      {/* AI LOADING */}
      {/* ===================================================== */}
      {loading && (
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <Loader2 size={32} className="animate-spin text-[var(--brandColor)] mx-auto" />
          <p className="font-semibold mt-3">AI is analyzing medical sources...</p>
        </div>
      )}

      {/* ===================================================== */}
      {/* TWO-COLUMN AI RESULTS */}
      {/* ===================================================== */}
      {!loading && results && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* ------------------ LEFT COLUMN → DOCTORS ------------------ */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[var(--brandColor)] flex items-center gap-2">
              👨‍⚕️ Doctors ({doctors.length})
            </h3>

            {doctors.length === 0 ? (
              <p className="text-[var(--textLight)]">No doctors found.</p>
            ) : (
              <div className="space-y-4">
                {doctors.map((doc, i) => (
                  <Link
                    href={doc.link}
                    target="_blank"
                    key={i}
                    className="block p-4 bg-gray-50 rounded-xl border-l-4 border-[var(--brandColor)] hover:bg-gray-100 transition"
                  >
                    <p className="font-semibold">{doc.name}</p>
                    <p className="text-sm text-[var(--textLight)]">
                      {doc.department} — {doc.specialization}
                    </p>

                    {/* Score bar */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-20 bg-gray-300 rounded-full h-1.5">
                        <div
                          className="h-1.5 rounded-full bg-[var(--brandColor)]"
                          style={{ width: `${doc.score * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-[var(--textLight)]">
                        {Math.round(doc.score * 100)}% match
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* ------------------ RIGHT COLUMN → ARTICLES ------------------ */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[var(--brandAccent)] flex items-center gap-2">
              📚 Articles ({articles.length})
            </h3>

            {articles.length === 0 ? (
              <p className="text-[var(--textLight)]">No articles found.</p>
            ) : (
              <div className="space-y-4">
                {articles.map((art, i) => (
                  <Link
                    href={art.link}
                    key={i}
                    target="_blank"
                    className="block p-4 bg-gray-50 rounded-xl border-l-4 border-[var(--brandAccent)] hover:bg-gray-100 transition"
                  >
                    <p className="font-semibold">{art.title}</p>
                    <p className="text-sm text-[var(--textLight)] mt-1">
                      {art.excerpt?.slice(0, 140) || ""}...
                    </p>

                    {/* Score bar */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-20 bg-gray-300 rounded-full h-1.5">
                        <div
                          className="h-1.5 rounded-full bg-[var(--brandAccent)]"
                          style={{ width: `${art.score * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-[var(--textLight)]">
                        {Math.round(art.score * 100)}% match
                      </span>
                    </div>
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
