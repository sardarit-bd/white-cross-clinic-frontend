"use client";

import { motion } from "framer-motion";
import {
    TestTube,
    Edit2,
    Trash2,
    Calendar,
    Tag,
    FolderOpen,
    Image as ImageIcon,
    HandCoins
} from "lucide-react";

export default function CouponList({
    coupons,
    onEdit,
    deleteCoupon,
}) {
    if (!coupons?.length) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-xl p-12 text-center"
            >
                <div className="w-24 h-24 bg-[var(--brandColor)] rounded-full flex items-center justify-center mx-auto mb-6">
                    <HandCoins size={40} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    No Coupon Found
                </h3>

                <p className="text-gray-500">
                    Create your first coupon.
                </p>
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
                        <HandCoins size={20} className="text-[var(--brandColor)]" />
                        Coupons
                    </h2>

                    <span className="bg-[var(--brandColor)]/10 text-[var(--brandColor)] px-3 py-1 rounded-full text-sm font-medium">
                        {coupons?.length} {coupons?.length === 1 ? "Coupon" : "Coupons"}
                    </span>
                </div>
            </div>

            {/* Grid */}
            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {coupons.map((item, index) => (
                        <motion.div
                            key={item._id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="group bg-white border border-gray-200 rounded-xl relative overflow-hidden hover:border-[var(--brandColor)] hover:shadow-lg transition-all duration-300"
                        >

                            {/* Action Buttons */}
                            <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={() => onEdit(item)}
                                    className="p-2 bg-white rounded-lg hover:bg-[var(--brandColor)] hover:text-white transition-colors shadow-lg"
                                    title="Edit Test"
                                >
                                    <Edit2 size={16} />
                                </button>

                                <button
                                    onClick={() => {
                                        if (window.confirm("Are you sure you want to delete this test?")) {
                                            deleteCoupon.mutate(item._id);
                                        }
                                    }}
                                    className="p-2 bg-white rounded-lg hover:bg-red-500 hover:text-white transition-colors shadow-lg"
                                    title="Delete Test"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>


                            {/* Content */}
                            <div className="p-4 space-y-2">
                                <h3 className="font-semibold text-gray-800 mb-1 line-clamp-2 group-hover:text-[var(--brandColor)] transition-colors">
                                    {item.code}
                                </h3>

                                {item?.percentage && (
                                    <div className="text-xs text-gray-500">
                                        <strong>Discount in Percentage:</strong> {item.percentage}
                                    </div>
                                )}

                                {item.amount && (
                                    <div className="text-xs text-gray-500">
                                        <strong>Max Discount:</strong> {item.amount}
                                    </div>
                                )}



                                <div className="flex gap-5 items-center">
                                    {/* Created Date */}
                                    {item.createdAt && (
                                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                                            <Calendar size={14} className="text-gray-400" />
                                            <span>
                                                {new Date(item.createdAt).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric",
                                                })}
                                            </span>
                                        </div>
                                    )}
                                    -
                                    {item.expireDate && (
                                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                                            <Calendar size={14} className="text-gray-400" />
                                            <span>
                                                {new Date(item.expireDate).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric",
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