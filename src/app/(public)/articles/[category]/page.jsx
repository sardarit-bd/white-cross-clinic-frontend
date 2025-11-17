"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ArticleSearchBar from "@/components/modules/articles/ArticleSearchBar";
import { useParams } from "next/navigation";

const subcategoriesData = {
  cardiology: [
    {
      name: "Heart Health",
      description: "Everything you need to know about maintaining a healthy heart.",
      image: "/articles/heart.webp",
    },
    {
      name: "Cardiac Surgery",
      description: "Learn about modern heart surgery techniques and recovery.",
      image: "/images/cardiology.jpg",
    },
    {
      name: "Blood Pressure",
      description: "Understand causes, symptoms, and management of hypertension.",
      image: "/images/hepatology.jpg",
    },
  ],
  neurology: [
    {
      name: "Brain Disorders",
      description: "Explore neurological conditions and their modern treatments.",
      image: "/images/neurology.jpg",
    },
    {
      name: "Cognitive Health",
      description: "Learn about memory, mental clarity, and brain exercises.",
      image: "/images/pediatrics.jpg",
    },
  ],
  endocrinology: [
    {
      name: "Diabetes",
      description: "Manage blood sugar and learn modern insulin approaches.",
      image: "/images/cardiology.jpg",
    },
    {
      name: "Hormonal Balance",
      description: "Understand hormones and how they affect your body.",
      image: "/images/pediatrics.jpg",
    },
  ],
};

export default function SubcategoryPage() {
  
  const params = useParams()
  const category = params?.category || "";
  const subcategories = subcategoriesData[category.toLowerCase()] || [];

  const categoryTitle =
    category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredSubs = subcategories.filter((sub) =>
    sub.name.toLowerCase().includes(searchTerm.toLowerCase())
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
            Choose a topic below to explore expert-written guides and insights
            in the {categoryTitle} field.
          </p>
        </div>

        {/* Search */}
        <ArticleSearchBar onSearch={setSearchTerm} />

        {/* Subcategory Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredSubs.length > 0 ? (
            filteredSubs.map((sub, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="bg-white shadow-md rounded-2xl overflow-hidden border border-[var(--borderLight)] hover:shadow-lg"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${sub.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[var(--textDark)] mb-2">
                    {sub.name}
                  </h3>
                  <p className="text-[var(--textLight)] text-sm mb-4">
                    {sub.description}
                  </p>
                  <Link
                    href={`/articles/${category}/${sub.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="inline-block text-[var(--brandColor)] font-medium hover:underline"
                  >
                    Explore {sub.name}
                  </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-[var(--textLight)] col-span-full">
              No subcategories found for this search.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
