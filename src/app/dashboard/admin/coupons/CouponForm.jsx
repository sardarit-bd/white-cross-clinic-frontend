"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ClipboardList } from "lucide-react";
import toast from "react-hot-toast";

export default function CouponForm({ onSubmit, initialData }) {
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        code: initialData?.code || "",
        percentage: initialData?.percentage || "",
        amount: initialData?.amount || "",
        expireDate: initialData?.expireDate || "",

    });

    useEffect(() => {
        if (initialData) {
            setForm({
                code: initialData?.code || "",
                percentage: initialData?.percentage || "",
                amount: initialData?.amount || "",
                expireDate: initialData?.expireDate || "",
            });
        }
    }, [initialData]);
    const handleSubmit = async () => {
        try {
            if (!form.code) {
                toast.error("Title and Code are required");
                return;
            }
            setLoading(true)
            const payload = {
                code: form.code,
                percentage: form.percentage || "",
                amount: form.amount || "",
                expireDate: form.expireDate || "",
            };

            const res = await onSubmit?.(payload);
            console.log(res)
            setForm({
                code: "",
                percentage: "",
                amount: "",
                expireDate: "",
            });
            toast.success("Coupon is saved successfully");
            setLoading(false)
        } catch (err) {
            console.log(err)
            toast.error("Something Wrong")
            setLoading(false)
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 space-y-6 mb-5"
        >
            <h2 className="text-xl font-semibold flex items-center gap-2 text-[var(--brandColor)]">
                <ClipboardList size={20} />
                {initialData ? "Edit Coupon" : "Create Coupon"}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Code *
                    </label>
                    <input
                        value={form.code}
                        onChange={(e) => setForm({ ...form, code: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Discount in Percentage(1-100)
                    </label>
                    <input
                        type="number"
                        value={form.percentage}
                        onChange={(e) =>
                            setForm({ ...form, percentage: e.target.value })
                        }
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Discount in Max Amount
                    </label>
                    <input
                        type="number"
                        value={form.amount}
                        onChange={(e) =>
                            setForm({ ...form, amount: e.target.value })
                        }
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                       Expired Date
                    </label>
                    <input
                        value={form.expireDate ? form.expireDate.slice(0, 10) : ""}
                        onChange={(e) =>
                            setForm({ ...form, expireDate: e.target.value })
                        }
                        type="date"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50"
                    />
                </div>
            </div>

            {/* Submit */}
            <button
                onClick={handleSubmit}
                className={`bg-[var(--brandColor)] text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition cursor-auto ${loading && 'opacity-50 cursor-not-allowed'}`}
            >
                {loading ? "Saving..." : initialData ? "Update Coupon" : "Create Coupon"}
            </button>
        </motion.div>
    );
}