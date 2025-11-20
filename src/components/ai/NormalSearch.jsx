"use client";

import { useEffect, useEffectEvent, useState } from "react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";

export default function NormalSearch() {
    const params = useSearchParams().get('q')
  const [query, setQuery] = useState(params || '');
  const [loading, setLoading] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [articles, setArticles] = useState([]);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SEARCH_API}/search`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();

      setDoctors(data.results.filter((i) => i.type === "doctor"));
      setArticles(data.results.filter((i) => i.type === "article"));
    } catch (err) {
      console.error("Normal search error:", err);
    }

    setLoading(false);
  };

  useEffect(() => {
    if(params) handleSearch(params)
  }, [params])

  // Search on Enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">

      {/* SEARCH BAR */}
      <div className="max-w-2xl mx-auto mb-10 flex items-center gap-3 bg-white shadow-md p-4 rounded-xl">
        <input
          type="text"
          placeholder="Search doctors or articles..."
          className="w-full outline-none text-[var(--textDark)]"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          onClick={handleSearch}
          className="px-6 py-2 rounded-lg text-white"
          style={{ background: "var(--brandGradient)" }}
        >
          Search
        </button>
      </div>

      {loading && (
        <p className="text-center text-lg text-gray-500">Searching...</p>
      )}

      {!loading && (doctors.length > 0 || articles.length > 0) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT SIDE — DOCTORS */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--textDark)] mb-4">
              Doctors
            </h2>

            <div className="space-y-6 grid grid-cols-1 lg:grid-cols-2 gap-2">
              {doctors.map((doc, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-md overflow-hidden"
                >
                  <img
                    src={doc.image || "https://cdn.pixabay.com/photo/2017/01/29/21/16/nurse-2019420_640.jpg"}
                    className="w-full h-64 object-cover"
                    alt={doc.name}
                  />

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[var(--textDark)]">
                      {doc.name}
                    </h3>
                    <p className="text-[var(--brandColor)] text-sm">
                      {doc.specialization}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      {doc.experience}
                    </p>

                    <p className="text-gray-500 mt-3">
                      {doc.focusAreas?.slice(0, 120)}...
                    </p>

                    <Link
                      href={`/doctor/${doc.id}`}
                      className="block w-fit mt-5 px-6 py-2 bg-[var(--brandColor)] text-white rounded-full"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              ))}

              {doctors.length === 0 && (
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
              {articles.map((art, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-md overflow-hidden"
                >
                  <img
                    src={art.image || "https://cdn.pixabay.com/photo/2025/05/29/08/25/doctor-9628974_640.jpg"}
                    className="w-full h-64 object-cover"
                    alt={art.title}
                  />

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[var(--textDark)]">
                      {art.title}
                    </h3>

                    <p className="text-gray-600 mt-2">
                      {art.excerpt?.slice(0, 120)}...
                    </p>

                    <div className="mt-4 flex justify-between text-sm text-gray-500">
                      <span>{art.author || "Unknown Author"}</span>
                      <span>{art.readingTime || "5 min read"}</span>
                    </div>

                    <Link
                      href={`/article/${art.id}`}
                      className="block mt-4 text-[var(--brandColor)] font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}

              {articles.length === 0 && (
                <p className="text-gray-500">No article found.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
