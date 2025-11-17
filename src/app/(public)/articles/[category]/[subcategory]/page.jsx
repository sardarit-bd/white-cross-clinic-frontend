"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ArticleSearchBar from "@/components/modules/articles/ArticleSearchBar";
import { useParams } from "next/navigation";


// Example static data (replace later with API or DB data)
const articlesData = {
  cardiology: {
    "heart-health": [
      {
        title: "10 Habits for a Stronger Heart",
        author: "Dr. Alice Johnson",
        date: "Nov 5, 2025",
        readTime: "5 min read",
        description:
          "Learn key daily habits and diet tips that help maintain a healthy cardiovascular system.",
        image: "/articles/heart.webp",
      },
      {
        title: "Recognizing Early Signs of Heart Disease",
        author: "Dr. Martin Silva",
        date: "Oct 22, 2025",
        readTime: "6 min read",
        description:
          "Spotting early symptoms could save lives. Here’s how to recognize them and act fast.",
        image: "/articles/mental.jpg",
      },
    ],
    "cardiac-surgery": [
      {
        title: "Modern Advances in Cardiac Surgery",
        author: "Dr. Emily Carter",
        date: "Sep 12, 2025",
        readTime: "7 min read",
        description:
          "Explore the latest techniques and technologies transforming cardiac surgery.",
        image: "/images/cardiology.jpg",
      },
    ],
  },
  neurology: {
    "brain-disorders": [
      {
        title: "Understanding Common Brain Disorders",
        author: "Dr. Noah Collins",
        date: "Oct 10, 2025",
        readTime: "8 min read",
        description:
          "From migraines to Alzheimer’s, a deep dive into how brain disorders impact daily life.",
        image: "/images/pediatrics.jpg",
      },
    ],
  },
};

export default function ArticleListPage() {
  const { category, subcategory } = useParams();
  const articles =
    articlesData[category]?.[subcategory] ||
    [];

  const subTitle = subcategory
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
  const categoryTitle =
    category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = articles.filter((a) =>
    a.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 pt-48 bg-[var(--bgLight)] min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[var(--textLight)] mb-8">
          <Link href="/articles" className="hover:text-[var(--brandColor)]">
            Articles
          </Link>
          <ChevronRight size={16} />
          <Link
            href={`/articles/${category}`}
            className="hover:text-[var(--brandColor)]"
          >
            {categoryTitle}
          </Link>
          <ChevronRight size={16} />
          <span className="text-[var(--brandColor)] font-medium">{subTitle}</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-10">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-5xl font-bold text-[var(--textDark)]"
          >
            {subTitle}
          </motion.h1>
          <p className="text-[var(--textLight)] mt-3 max-w-3xl mx-auto">
            Explore expert-written medical articles, patient guides, and the
            latest healthcare insights.
          </p>
        </div>

        {/* Search */}
        <ArticleSearchBar onSearch={setSearchTerm} />

        {/* Articles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-[var(--borderLight)] hover:shadow-lg"
              >
                <div
                  className="h-52 bg-cover bg-center"
                  style={{ backgroundImage: `url(${article.image})` }}
                ></div>
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--textDark)] mb-2">
                      {article.title}
                    </h3>
                    <p className="text-[var(--textLight)] text-sm mb-4 line-clamp-3">
                      {article.description}
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="text-xs text-[var(--textLight)] mb-2">
                      {article.date} • {article.readTime}
                    </p>
                    <p className="text-xs text-[var(--textLight)] italic mb-4">
                      By {article.author}
                    </p>
                    <Link
                      href={`/articles/${category}/${subcategory}/${article.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="text-[var(--brandColor)] font-medium hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-[var(--textLight)] col-span-full">
              No articles found for this subcategory.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
