"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronDown,
    ChevronUp,
    Edit2,
    Trash2,
    FolderOpen,
    Image as ImageIcon,
    MoreVertical,
    Eye,
    EyeOff
} from "lucide-react";
import { useState } from "react";
import SubcategoryList from "./SubcategoryList";

export default function CategoryList({
    categories,
    subcategories,
    deleteCategory,
    deleteSubCategory,
    onEditSubCategory,
    onEditCategory,
}) {
    const [expandedCategories, setExpandedCategories] = useState([]);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleCategoryExpand = (categoryId) => {
        setExpandedCategories(prev =>
            prev.includes(categoryId)
                ? prev.filter(id => id !== categoryId)
                : [...prev, categoryId]
        );
    };

    const toggleDropdown = (categoryId) => {
        setActiveDropdown(activeDropdown === categoryId ? null : categoryId);
    };

    if (!categories?.length) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-xl p-12 text-center"
            >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FolderOpen size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">No Categories Yet</h3>
                <p className="text-gray-500">Create your first category to get started</p>
            </motion.div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                        <FolderOpen size={20} className="text-blue-600" />
                        Category Collection
                    </h2>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {categories?.length} {categories?.length === 1 ? 'Category' : 'Categories'}
                    </span>
                </div>
            </div>

            {/* Categories List */}
            <div className="p-6">
                <div className="space-y-4">
                    {categories?.map((cat, index) => {
                        const relatedSubs = subcategories?.filter(
                            (s) => s?.category?._id === cat._id
                        );
                        const isExpanded = expandedCategories.includes(cat._id);

                        return (
                            <motion.div
                                key={cat._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => toggleCategoryExpand(cat._id)}
                                className="group border border-gray-200 rounded-xl hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                            >
                                {/* Category Card */}
                                <div className="bg-white">
                                    {/* Main Category Row */}
                                    <div className="p-4">
                                        <div className="flex items-start gap-4">
                                            {/* Category Image */}
                                            <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                                                {cat.thumbnail ? (
                                                    <Image
                                                        src={cat.thumbnail}
                                                        alt={cat.name}
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center">
                                                        <ImageIcon size={24} className="text-gray-400" />
                                                    </div>
                                                )}
                                                {/* Image count badge */}
                                                {cat.thumbnail && (
                                                    <div className="absolute bottom-1 right-1 bg-black/50 text-white text-xs px-1.5 py-0.5 rounded">
                                                        1
                                                    </div>
                                                )}
                                            </div>

                                            {/* Category Content */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                                                            {cat.name}
                                                        </h3>
                                                        {cat.description && (
                                                            <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                                                                {cat.description}
                                                            </p>
                                                        )}
                                                    </div>

                                                    {/* Actions Dropdown */}
                                                    <div className="relative flex-shrink-0" onClick={(e) => {
                                                        e.stopPropagation();
                                                        
                                                    }}>
                                                        <button
                                                            onClick={() => toggleDropdown(cat._id)}
                                                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                                        >
                                                            <MoreVertical size={18} className="text-gray-500" />
                                                        </button>

                                                        <AnimatePresence>
                                                            {activeDropdown === cat._id && (
                                                                <>
                                                                    {/* Backdrop to close dropdown */}
                                                                    <div
                                                                        className="fixed inset-0 z-10"
                                                                        onClick={() => setActiveDropdown(null)}
                                                                    />

                                                                    <motion.div
                                                                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                                                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                                                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                                                        className="absolute z-20 right-0 mt-2 w-48 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
                                                                    >
                                                                        <button
                                                                            onClick={() => {
                                                                                onEditCategory(cat);
                                                                                setActiveDropdown(null);
                                                                            }}
                                                                            className="w-full px-4 py-3 text-left text-sm hover:bg-gray-50 flex items-center gap-2 transition-colors"
                                                                        >
                                                                            <Edit2 size={16} className="text-blue-500" />
                                                                            <span>Edit Category</span>
                                                                        </button>

                                                                        <button
                                                                            onClick={() => {
                                                                                toggleCategoryExpand(cat._id);
                                                                                setActiveDropdown(null);
                                                                            }}
                                                                            className="w-full px-4 py-3 text-left text-sm hover:bg-gray-50 flex items-center gap-2 transition-colors border-t border-gray-100"
                                                                        >
                                                                            {isExpanded ? (
                                                                                <>
                                                                                    <EyeOff size={16} className="text-gray-500" />
                                                                                    <span>Hide Subcategories</span>
                                                                                </>
                                                                            ) : (
                                                                                <>
                                                                                    <Eye size={16} className="text-gray-500" />
                                                                                    <span>View Subcategories</span>
                                                                                </>
                                                                            )}
                                                                        </button>

                                                                        <button
                                                                            onClick={() => {
                                                                                if (window.confirm('Are you sure you want to delete this category? All subcategories will also be deleted.')) {
                                                                                    deleteCategory.mutateAsync(cat._id);
                                                                                }
                                                                                setActiveDropdown(null);
                                                                            }}
                                                                            className="w-full px-4 py-3 text-left text-sm hover:bg-red-50 flex items-center gap-2 transition-colors border-t border-gray-100 text-red-600"
                                                                        >
                                                                            <Trash2 size={16} />
                                                                            <span>Delete Category</span>
                                                                        </button>
                                                                    </motion.div>
                                                                </>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                </div>

                                                {/* Category Stats */}
                                                <div className="flex justify-between items-center gap-4 mt-3">
                                                    <div className="flex items-center gap-1 text-xs text-gray-500">
                                                        <FolderOpen size={14} />
                                                        <span>{relatedSubs?.length || 0} Subcategories</span>
                                                    </div>

                                                    {/* Expand/Collapse Button */}
                                                    <button
                                                        className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 transition-colors"
                                                    >
                                                        {isExpanded ? (
                                                            <>
                                                                <ChevronUp size={14} />
                                                                <span>Hide Subcategories</span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <ChevronDown size={14} />
                                                                <span>Show Subcategories</span>
                                                            </>
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Subcategories Section */}
                                    <AnimatePresence>
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="border-t border-gray-100 bg-gray-50/50"
                                            >
                                                <div className="p-4">
                                                    <SubcategoryList
                                                        subs={relatedSubs}
                                                        deleteSubcategory={deleteSubCategory}
                                                        onEditSubcategory={onEditSubCategory}
                                                        categoryName={cat.name}
                                                    />
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}