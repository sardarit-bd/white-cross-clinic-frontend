"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useParams } from "next/navigation";
import ArticleSearchBar from "@/components/modules/articles/ArticleSearchBar";
import AlphabetFilter from "@/components/shared/AlphabetFilter";

// ✅ Mock Data (subcategory + articles combined)
const categoryData = {
  cardiology: {
    subcategories: [
      {
        name: "Heart Health",
        description: "Learn about maintaining a healthy heart.",
        image: "/articles/heart.webp",
        articles: [
          {
            title: "10 Habits for a Stronger Heart",
            slug: "10-habits-for-a-stronger-heart",
            author: "Dr. Alice Johnson",
            date: "2025-11-05",
            readTime: "5 min read",
            description:
              "Learn key daily habits and diet tips that help maintain a healthy cardiovascular system.",
            image: "/articles/heart.webp",
          },
          {
            title: "Recognizing Early Signs of Heart Disease",
            slug: "recognizing-early-signs-of-heart-disease",
            author: "Dr. Martin Silva",
            date: "2025-10-22",
            readTime: "6 min read",
            description:
              "Spotting early symptoms could save lives. Here’s how to recognize them and act fast.",
            image: "/articles/mental.jpg",
          },
        ],
      },
      {
        name: "Cardiac Surgery",
        description: "Explore surgical innovations for the heart.",
        image: "/images/cardiology.jpg",
        articles: [
          {
            title: "Modern Advances in Cardiac Surgery",
            slug: "modern-advances-in-cardiac-surgery",
            author: "Dr. Emily Carter",
            date: "2025-09-12",
            readTime: "7 min read",
            description:
              "Explore the latest techniques and technologies transforming cardiac surgery.",
            image: "/images/cardiology.jpg",
          },
        ],
      },
      {
        name: "Blood Pressure",
        description: "Understand causes and treatments of hypertension.",
        image: "/images/hepatology.jpg",
        articles: [
          {
            title: "Managing High Blood Pressure Naturally",
            slug: "managing-high-blood-pressure-naturally",
            author: "Dr. Sarah Green",
            date: "2025-09-10",
            readTime: "6 min read",
            description:
              "Learn effective methods to lower blood pressure naturally and safely.",
            image: "/images/hepatology.jpg",
          },
        ],
      },
    ],
  },
};

export default function CategoryArticlesPage() {
  const params = useParams();
  const category = params?.category || "cardiology";
  const { subcategories } = categoryData[category] || { subcategories: [] };

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState(
    subcategories[0]?.name || ""
  );

  const filteredSubs = subcategories.filter((sub) =>
    sub.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeSubcategory =
    subcategories.find((sub) => sub.name === selectedSubcategory) ||
    subcategories[0];

  const categoryTitle =
    category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

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
                    className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                      selectedSubcategory === sub.name
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
              <AlphabetFilter />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeSubcategory?.articles.map((article, i) => (
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
                      <span>{article.author}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <Link
                      href={`/articles/${category}/${activeSubcategory.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}/${article.slug}`}
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
