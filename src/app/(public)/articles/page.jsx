"use client";
import ArticleSearchBar from "@/components/modules/articles/ArticleSearchBar";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const categories = [
  {
    name: "Cardiology",
    description: "Learn about heart conditions, treatments, and prevention.",
    image: "/images/cardiology.jpg",
  },
  {
    name: "Neurology",
    description: "Discover insights into brain health, disorders, and care.",
    image: "/images/neurology.jpg",
  },
  {
    name: "Endocrinology",
    description: "Understand hormones, metabolism, and diabetes management.",
    image: "/images/ophthalmology.jpg",
  },
  {
    name: "Psychology",
    description: "Explore mental health, emotional well-being, and therapy.",
    image: "/images/pediatrics.jpg",
  },
];

export default function ArticlesPage() {
  const [filtered, setFiltered] = useState(categories);

  const handleSearch = (query) => {
    if (!query.trim()) return setFiltered(categories);
    const results = categories.filter(
      (cat) =>
        cat.name.toLowerCase().includes(query) ||
        cat.description.toLowerCase().includes(query)
    );
    setFiltered(results);
  };

  return (
    <section className="py-20 pt-48 bg-[var(--bgLight)]">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-5xl font-bold text-[var(--textDark)]"
          >
            Medical Knowledge Hub
          </motion.h1>
          <p className="text-[var(--textLight)] mt-3 max-w-3xl mx-auto">
            Browse through our medical resources organized by specialty.
          </p>
        </div>

        {/* 🔍 Search */}
        <ArticleSearchBar
          placeholder="Search categories..."
          onSearch={handleSearch}
        />

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.length > 0 ? (
            filtered.map((cat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="bg-white shadow-md rounded-2xl overflow-hidden border border-[var(--borderLight)] hover:shadow-lg"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${cat.image})` }}
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-[var(--textDark)] mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-[var(--textLight)] text-sm mb-4">
                    {cat.description}
                  </p>
                  <Link
                    href={`/articles/${cat.name.toLowerCase()}`}
                    className="inline-block text-[var(--brandColor)] font-medium hover:underline"
                  >
                    Explore {cat.name}
                  </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-[var(--textLight)] mt-8 col-span-full">
              No categories found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
