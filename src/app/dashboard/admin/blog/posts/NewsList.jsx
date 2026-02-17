"use client";

import { motion } from "framer-motion";
import { 
  Newspaper, 
  Edit2, 
  Trash2, 
  Calendar,
  Tag,
  FolderOpen,
  Image as ImageIcon
} from "lucide-react";

export default function NewsList({
  news,
  onEdit,
  deleteNews,
}) {
  if (!news?.length) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-xl p-12 text-center"
      >
        <div className="w-24 h-24 bg-[var(--brandColor)] rounded-full flex items-center justify-center mx-auto mb-6">
          <Newspaper size={40} className="text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">No News Articles</h3>
        <p className="text-gray-500">Create your first news article to get started</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <Newspaper size={20} className="text-[var(--brandColor)]" />
            News Articles
          </h2>
          <span className="bg-[var(--brandColor)]/10 text-[var(--brandColor)] px-3 py-1 rounded-full text-sm font-medium">
            {news?.length} {news?.length === 1 ? 'Article' : 'Articles'}
          </span>
        </div>
      </div>

      {/* News Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {news?.map((item, index) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[var(--brandColor)] hover:shadow-lg transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ImageIcon size={48} className="text-gray-400" />
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-[var(--brandColor)]/90 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                    {item.category?.name || 'Uncategorized'}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => onEdit(item)}
                    className="p-2 bg-white rounded-lg hover:bg-[var(--brandColor)] hover:text-white transition-colors shadow-lg"
                    title="Edit article"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm('Delete this news article?')) {
                        deleteNews.mutate(item._id);
                      }
                    }}
                    className="p-2 bg-white rounded-lg hover:bg-red-500 hover:text-white transition-colors shadow-lg"
                    title="Delete article"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-[var(--brandColor)] transition-colors">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                    {item.description}
                  </p>
                )}

                {/* Metadata */}
                <div className="space-y-2">
                  {/* Category & Subcategory */}
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <FolderOpen size={14} className="text-gray-400" />
                    <span>
                      {item.category?.name || 'No category'}
                      {item.subcategory?.name && ` → ${item.subcategory.name}`}
                    </span>
                  </div>

                  {/* Tags */}
                  {item.tags && (
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Tag size={14} className="text-gray-400" />
                      <div className="flex flex-wrap gap-1">
                        {item.tags?.split(',').map((tag, i) => (
                          <span 
                            key={i}
                            className="bg-gray-100 px-2 py-0.5 rounded-full text-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Date */}
                  {item.createdAt && (
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar size={14} className="text-gray-400" />
                      <span>
                        {new Date(item.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}