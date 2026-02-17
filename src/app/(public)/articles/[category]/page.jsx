"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useParams } from "next/navigation";
import ArticleSearchBar from "@/components/modules/articles/ArticleSearchBar";
import AlphabetFilter from "@/components/shared/AlphabetFilter";
import { useCategory } from "@/hooks/useCategory";
import { useNews, useNewsBySubCategory } from "@/hooks/useNews";


export default function CategoryArticlesPage() {
  const params = useParams();

  const { subcategories } = useCategory();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [filteredNews, setFilteredNews] = useState([])
  const [activeLetter, setActiveLetter] = useState('A')

  const category = params?.category || "cardiology";

  // Filter subcategories by category slug
  const filteredSubs = useMemo(() => {
    return subcategories.filter(
      (sub) => sub?.category?.slug === category
    );
  }, [subcategories, category]);

  // Set default selected subcategory AFTER data loads
  useEffect(() => {
    if (filteredSubs.length && !selectedSubcategory) {
      setSelectedSubcategory(filteredSubs[0].name);
    }
  }, [filteredSubs, selectedSubcategory]);

  // Get active subcategory
  const activeSubcategory = useMemo(() => {
    return (
      filteredSubs.find((sub) => sub.name === selectedSubcategory) ||
      filteredSubs[0]
    );
  }, [filteredSubs, selectedSubcategory]);

  const { data: news = [], isLoading } = useNewsBySubCategory(activeSubcategory?._id);

  const categoryTitle =
    category.charAt(0).toUpperCase() +
    category.slice(1).toLowerCase();

  useEffect(() => {
    const filtrNews = news?.filter(n => n?.title?.charAt(0)?.toLowerCase() == activeLetter.toLowerCase())
    setFilteredNews(filtrNews)
  }, [activeLetter, activeSubcategory])

  if (filteredSubs?.length === 0) {
    return (
      <div className="flex mt-30 flex-col items-center justify-center py-16 px-6 bg-gray-50 rounded-2xl border border-dashed border-gray-300 text-center">

        {/* Icon */}
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow">
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 7h18M5 7v10a2 2 0 002 2h10a2 2 0 002-2V7M9 11h6"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="mt-4 text-lg font-semibold text-gray-800">
          No Subcategories Found
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-500 max-w-sm">
          This category doesn’t have any subcategories yet.
        </p>
      </div>
    );
  }

  return (
    <section className="py-20 pt-48 bg-[var(--bgLight)] min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[var(--textLight)] mb-8">
          <Link href="/articles" className="hover:text-[var(--brandColor)]">
            Articles
          </Link>
          <ChevronRight size={16} />
          <span className="text-[var(--brandColor)] font-medium">
            {categoryTitle}
          </span>
        </nav>

        {/* Header */}
        <div className="text-center mb-10">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-5xl font-bold text-[var(--textDark)]"
          >
            {categoryTitle} Articles
          </motion.h1>
          <p className="text-[var(--textLight)] mt-3 max-w-3xl mx-auto">
            Browse medical guides, expert insights, and wellness advice by
            category and topic.
          </p>
        </div>

        {/* Search */}
        <ArticleSearchBar onSearch={setSearchTerm} />

        {/* Main Layout */}
        <div className="mt-10 grid lg:grid-cols-[280px_1fr] gap-10">
          {/* === LEFT: Subcategory Sidebar === */}
          <aside className="hidden lg:block sticky top-36 h-fit bg-white border border-[var(--borderLight)] rounded-2xl shadow-sm p-4">
            <h3 className="text-lg font-semibold text-[var(--textDark)] mb-4">
              Subcategories
            </h3>
            <ul className="space-y-2">
              {filteredSubs.map((sub, i) => (
                <li key={i}>
                  <button
                    onClick={() => setSelectedSubcategory(sub.name)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${selectedSubcategory === sub.name
                      ? "bg-[var(--brandColor)] text-white font-medium"
                      : "hover:bg-[var(--brandColorLight)] text-[var(--textDark)]"
                      }`}
                  >
                    {sub.name}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* === RIGHT: Articles === */}
          <div>
            <motion.h2
              key={activeSubcategory?.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-2xl font-semibold mb-6 text-[var(--brandColor)]"
            >
              {activeSubcategory?.name}
            </motion.h2>
            <AlphabetFilter onSelect={setActiveLetter} active={activeLetter} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews?.map((article, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl overflow-hidden border border-[var(--borderLight)] shadow-sm hover:shadow-lg transition-all"
                >
                  <div
                    className="h-44 bg-cover bg-center"
                    style={{ backgroundImage: `url(${article.image})` }}
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[var(--textDark)] mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-[var(--textLight)] text-sm line-clamp-3 mb-4">
                      {article.description}
                    </p>
                    <div className="flex justify-between items-center text-xs text-[var(--textLight)]">
                      <span>{article?.user?.name}</span>
                    </div>
                    <Link
                      href={`/news?slug=${article.slug}`}
                      className="block mt-4 text-[var(--brandColor)] font-medium hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
