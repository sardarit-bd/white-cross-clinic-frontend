"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

export default function ArticleSearchBar({ placeholder, onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value.toLowerCase());
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-3xl mx-auto mb-10"
    >
      <div className="flex items-center bg-white shadow-md rounded-full overflow-hidden border border-[var(--borderLight)] px-4 py-2">
        <Search size={20} className="text-[var(--textLight)]" />
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder={placeholder || "Search..."}
          className="flex-1 bg-transparent outline-none px-3 py-2 text-[var(--textDark)]"
        />
      </div>
    </motion.div>
  );
}
