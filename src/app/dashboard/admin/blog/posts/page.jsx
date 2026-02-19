"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";
import NewsForm from "./NewsForm";
import NewsList from "./NewsList";
import { useCategory } from "@/hooks/useCategory";
import { useNews } from "@/hooks/useNews";

export default function NewsManagerPage() {
  
  const [editingNews, setEditingNews] = useState(null);
  const {categories, subcategories} = useCategory()
  const {news, createNews, updateNews, deleteNews} = useNews()

  return (
    <div className="0 py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-[var(--textDark)] mb-2 flex items-center gap-3">
            <Newspaper size={36} className="text-[var(--brandColor)]" />
            News Management
          </h1>
          <p className="text-gray-600">
            Create and manage your news articles with categories and tags
          </p>
        </motion.div>

        {/* News Form */}
        <NewsForm
          categories={categories}
          subcategories={subcategories}
          createNews={createNews}
          updateNews={updateNews}
          initialData={editingNews}
          onFinish={() => setEditingNews(null)}
        />

        {/* News List */}
        <NewsList
          news={news}
          onEdit={setEditingNews}
          deleteNews={deleteNews}
        />

      </div>
    </div>
  );
}