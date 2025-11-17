"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    id: "heart-health-tips",
    title: "Top 10 Heart Health Tips from Our Specialists",
    excerpt:
      "Learn the most effective daily habits to maintain a healthy heart — from nutrition and exercise to routine check-ups.",
    category: "Cardiology",
    subcategory: "Lifestyle",
    image: "/articles/heart.webp",
    date: "Nov 15, 2025",
  },
  {
    id: "stress-management",
    title: "Managing Stress for Better Mental Health",
    excerpt:
      "Our psychology experts share simple and proven ways to reduce stress and improve your mental well-being.",
    category: "Psychology",
    subcategory: "Wellness",
    image: "/articles/mental.jpg",
    date: "Nov 10, 2025",
  },
  {
    id: "child-nutrition-guide",
    title: "Essential Nutrition Guide for Growing Children",
    excerpt:
      "Pediatric specialists explain how balanced nutrition can support healthy growth and immunity for children.",
    category: "Pediatrics",
    subcategory: "Nutrition",
    image: "/articles/child.jpg",
    date: "Nov 5, 2025",
  },
];

export default function ArticlesPreviewSection() {
  return (
    <section className="py-20 bg-[var(--bgLight)]">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--textDark)]">
            Latest Medical Articles
          </h2>
          <div className="w-16 h-[3px] mx-auto mt-3 bg-[var(--brandAccent)] rounded-full" />
          <p className="text-[var(--textLight)] mt-4 max-w-2xl mx-auto">
            Stay informed with the latest insights, research, and health advice
            from our medical professionals.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={500}
                  height={320}
                  className="object-cover w-full h-[220px] group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-[var(--brandAccent)] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {article.category}
                </span>
              </div>

              <div className="p-6">
                <Link
                  href={`/articles/${article.id}`}
                  className="text-lg font-semibold text-[var(--textDark)] hover:text-[var(--brandColor)] transition-colors"
                >
                  {article.title}
                </Link>
                <p className="text-[var(--textLight)] text-sm mt-3 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="mt-5 flex items-center justify-between text-sm text-[var(--textMuted)]">
                  <span>{article.date}</span>
                  <Link
                    href={`/articles/${article.category.toLowerCase()}/${article.id}`}
                    className="font-medium text-[var(--brandColor)] hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/articles"
            className="inline-block px-8 py-3 bg-[var(--brandColor)] hover:bg-[var(--brandColorDark)] text-white font-medium rounded-full shadow-md transition-all"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
