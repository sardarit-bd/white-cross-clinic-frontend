"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Edit2, Trash2, ChevronRight, Package } from "lucide-react";
import { useState } from "react";

export default function SubcategoryList({
    subs,
    deleteSubcategory,
    onEditSubcategory,
    categoryName
}) {
    const [expandedSubs, setExpandedSubs] = useState([]);

    if (!subs?.length) {
        return (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-8"
            >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Package size={24} className="text-gray-400" />
                </div>
                <p className="text-gray-500 text-sm">No subcategories yet</p>
                <p className="text-gray-400 text-xs mt-1">
                    Add subcategories to organize {categoryName || 'this category'} further
                </p>
            </motion.div>
        );
    }

    return (
        <div className="space-y-2">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-medium text-gray-600 flex items-center gap-2">
                    <Package size={16} className="text-blue-500" />
                    Subcategories ({subs.length})
                </h4>
                <span className="text-xs text-gray-400">
                    Click to expand
                </span>
            </div>

            {/* Subcategories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {subs.map((sub, index) => {
                    const isExpanded = expandedSubs.includes(sub._id);

                    return (
                        <motion.div
                            key={sub._id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative"
                        >
                            {/* Main Subcategory Card */}
                            <div 
                                onClick={() => {
                                    if (isExpanded) {
                                        setExpandedSubs(prev => prev.filter(id => id !== sub._id));
                                    } else {
                                        setExpandedSubs(prev => [...prev, sub._id]);
                                    }
                                }}
                                className="bg-white border border-gray-200 rounded-lg p-3 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 flex-1 min-w-0">
                                        <ChevronRight 
                                            size={14} 
                                            className={`text-gray-400 transition-transform duration-200 ${
                                                isExpanded ? 'rotate-90' : ''
                                            }`}
                                        />
                                        <span className="text-sm font-medium text-gray-700 truncate">
                                            {sub.name}
                                        </span>
                                    </div>
                                    
                                    {/* Action Buttons */}
                                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onEditSubcategory(sub);
                                            }}
                                            className="p-1.5 hover:bg-blue-50 rounded-lg transition-colors"
                                            title="Edit subcategory"
                                        >
                                            <Edit2 size={14} className="text-blue-600" />
                                        </button>
                                        
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                if (window.confirm('Delete this subcategory?')) {
                                                    deleteSubcategory.mutateAsync(sub._id);
                                                }
                                            }}
                                            className="p-1.5 hover:bg-red-50 rounded-lg transition-colors"
                                            title="Delete subcategory"
                                        >
                                            <Trash2 size={14} className="text-red-600" />
                                        </button>
                                    </div>
                                </div>

                                {/* Expanded Content */}
                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-3 mt-2 border-t border-gray-100">
                                                <div className="text-xs text-gray-500 space-y-1">
                                                    <p className="flex items-center gap-2">
                                                        <span className="font-medium text-gray-600">ID:</span>
                                                        <span className="font-mono">{sub._id.slice(-8)}</span>
                                                    </p>
                                                    <p className="flex items-center gap-2">
                                                        <span className="font-medium text-gray-600">Created:</span>
                                                        <span>
                                                            {sub.createdAt 
                                                                ? new Date(sub.createdAt).toLocaleDateString()
                                                                : 'N/A'
                                                            }
                                                        </span>
                                                    </p>
                                                    {sub.productCount !== undefined && (
                                                        <p className="flex items-center gap-2">
                                                            <span className="font-medium text-gray-600">Products:</span>
                                                            <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                                                                {sub.productCount}
                                                            </span>
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Quick Stats Footer */}
            <div className="mt-4 pt-3 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>Total: {subs.length} subcategories</span>
                    <span>Click on any subcategory for details</span>
                </div>
            </div>
        </div>
    );
}