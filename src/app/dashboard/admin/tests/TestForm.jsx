"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ClipboardList } from "lucide-react";
import toast from "react-hot-toast";
import { useAuth } from "@/hooks/useAuth";

export default function TestForm({ onSubmit, initialData }) {
    const { user } = useAuth()
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        title: initialData?.title || "",
        code: initialData?.code || "",
        sampleReqs: initialData?.sampleReqs || "",
        turnaround: initialData?.turnaround || "",
        specialInstructions: initialData?.specialInstructions || "",
        selfCollectKit: initialData?.selfCollectKit || "",
        sampleGuide: initialData?.sampleGuide || [{ code: "", value: "" }],
        profileDetails: initialData?.profileDetails || [""],
        note: initialData?.note || "",
        price: initialData?.price ?? "",
        phlebotomyFee: initialData?.phlebotomyFee ?? "",
        testDuration: initialData?.testDuration || "",
        lab: initialData?.lab || "",
        subtitle: initialData?.subtitle || "",
        category: initialData?.category || "",
        aboutText: initialData?.aboutText || "",
        faqs: initialData?.faqs?.length ? initialData.faqs : [{ question: "", answer: "" }],
    });

    useEffect(() => {
        if (initialData) {
            setForm({
                title: initialData.title || "",
                code: initialData.code || "",
                sampleReqs: initialData.sampleReqs || "",
                turnaround: initialData.turnaround || "",
                specialInstructions: initialData.specialInstructions || "",
                selfCollectKit: initialData.selfCollectKit || "",
                sampleGuide: initialData.sampleGuide?.length
                    ? initialData.sampleGuide
                    : [{ code: "", value: "" }],
                profileDetails: initialData.profileDetails?.length
                    ? initialData.profileDetails
                    : [""],
                note: initialData?.note || "",
                price: initialData?.price ?? "",
                phlebotomyFee: initialData?.phlebotomyFee ?? "",
                testDuration: initialData?.testDuration || "",
                lab: initialData?.lab || "",
                subtitle: initialData?.subtitle || "",
                category: initialData?.category || "",
                aboutText: initialData?.aboutText || "",
                faqs: initialData?.faqs?.length
                    ? initialData.faqs
                    : [{ question: "", answer: "" }],
            });
        }
    }, [initialData]);
    const handleSubmit = async () => {
        try {
            if (!form.title || !form.code) {
                toast.error("Title and Code are required");
                return;
            }
            setLoading(true)
            const payload = {
                title: form.title,
                code: form.code,
                sampleReqs: form.sampleReqs,
                turnaround: form.turnaround,
                specialInstructions: form.specialInstructions,
                selfCollectKit: form.selfCollectKit,
                sampleGuide: form.sampleGuide,
                profileDetails: form.profileDetails,
                note: form.note,
                price: form.price === "" ? null : Number(form.price),
                phlebotomyFee: form.phlebotomyFee === "" ? null : Number(form.phlebotomyFee),
                testDuration: form.testDuration,
                lab: form.lab,
                subtitle: form.subtitle,
                category: form.category,
                aboutText: form.aboutText,
                faqs: form.faqs
                    .filter((f) => f.question?.trim() || f.answer?.trim())
                    .map((f) => ({ question: f.question, answer: f.answer })),
            };

            const res = await onSubmit?.(payload);
            console.log(res)
            setForm({
                title: "",
                code: "",
                sampleReqs: "",
                turnaround: "",
                specialInstructions: "",
                selfCollectKit: "",
                sampleGuide: [{ code: "", value: "" }],
                profileDetails: [""],
                note: "",
                price: "",
                phlebotomyFee: "",
                testDuration: "",
                lab: "",
                subtitle: "",
                category: "",
                aboutText: "",
                faqs: [{ question: "", answer: "" }],
            });
            toast.success("Test saved successfully");
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
            <h2 className="text-xl font-semibold flex items-center gap-2 text-(--brandColor)">
                <ClipboardList size={20} />
                {initialData ? "Edit Test" : "Create Test"}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Title */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Test Title *
                    </label>
                    <input
                        value={form.title}
                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50"
                    />
                </div>

                {/* Code */}
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

                {/* Sample Requirements */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Sample Requirements
                    </label>
                    <input
                        value={form.sampleReqs}
                        onChange={(e) =>
                            setForm({ ...form, sampleReqs: e.target.value })
                        }
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50"
                    />
                </div>

                {/* Turnaround */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Turnaround
                    </label>
                    <input
                        value={form.turnaround}
                        onChange={(e) =>
                            setForm({ ...form, turnaround: e.target.value })
                        }
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50"
                    />
                </div>

                {/* Self Collect Kit */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Self Collect Kit
                    </label>
                    <input
                        value={form.selfCollectKit}
                        onChange={(e) =>
                            setForm({ ...form, selfCollectKit: e.target.value })
                        }
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50"
                    />
                </div>

                {/* Subtitle */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subtitle
                    </label>
                    <input
                        value={form.subtitle}
                        onChange={(e) =>
                            setForm({ ...form, subtitle: e.target.value })
                        }
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50"
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category (badge)
                    </label>
                    <input
                        value={form.category}
                        onChange={(e) =>
                            setForm({ ...form, category: e.target.value })
                        }
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50"
                    />
                </div>

                {/* Price */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Price (£)
                    </label>
                    <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={form.price}
                        onChange={(e) => setForm({ ...form, price: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50"
                    />
                </div>

                {/* Phlebotomy Fee */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phlebotomy Fee (£)
                    </label>
                    <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={form.phlebotomyFee}
                        onChange={(e) =>
                            setForm({ ...form, phlebotomyFee: e.target.value })
                        }
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50"
                    />
                </div>

                {/* Test Duration */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Test Duration
                    </label>
                    <input
                        value={form.testDuration}
                        onChange={(e) =>
                            setForm({ ...form, testDuration: e.target.value })
                        }
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50"
                    />
                </div>

                {/* Lab */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Lab
                    </label>
                    <input
                        value={form.lab}
                        onChange={(e) => setForm({ ...form, lab: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50"
                    />
                </div>
            </div>

            {/* Special Instructions */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 mt-2">
                    Special Instructions
                </label>
                <textarea
                    value={form.specialInstructions}
                    onChange={(e) =>
                        setForm({ ...form, specialInstructions: e.target.value })
                    }
                    rows="4"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 resize-none"
                />
            </div>

            {/* Sample Type Guide */}
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sample Type Guide
                </label>

                {form.sampleGuide.map((item, i) => (
                    <div key={i} className="flex gap-2 mb-2">
                        <input
                            placeholder="Code (B)"
                            value={item.code}
                            onChange={(e) => {
                                const sg = [...form.sampleGuide];
                                sg[i].code = e.target.value;
                                setForm({ ...form, sampleGuide: sg });
                            }}
                            className="w-1/4 border rounded-xl px-3 py-2"
                        />

                        <input
                            placeholder="Description"
                            value={item.value}
                            onChange={(e) => {
                                const sg = [...form.sampleGuide];
                                sg[i].value = e.target.value;
                                setForm({ ...form, sampleGuide: sg });
                            }}
                            className="flex-1 border rounded-xl px-3 py-2"
                        />
                    </div>
                ))}

                <button
                    type="button"
                    onClick={() =>
                        setForm({
                            ...form,
                            sampleGuide: [...form.sampleGuide, { code: "", value: "" }],
                        })
                    }
                    className="text-(--brandColor) text-sm"
                >
                    + Add Guide
                </button>
            </div>

            {/* Profile Details */}
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Profile Details (shown as "About This Test")
                </label>

                {form.profileDetails.map((item, i) => (
                    <div key={i} className="flex gap-2 mb-2">
                        <input
                            value={item}
                            onChange={(e) => {
                                const updated = [...form.profileDetails];
                                updated[i] = e.target.value;
                                setForm({ ...form, profileDetails: updated });
                            }}
                            className="flex-1 border rounded-xl px-3 py-2"
                        />
                    </div>
                ))}

                <button
                    type="button"
                    onClick={() =>
                        setForm({
                            ...form,
                            profileDetails: [...form.profileDetails, ""],
                        })
                    }
                    className="text-(--brandColor) text-sm"
                >
                    + Add Detail
                </button>
            </div>

            {/* About Text */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 mt-2">
                    About This Testing (paragraph)
                </label>
                <textarea
                    value={form.aboutText}
                    onChange={(e) =>
                        setForm({ ...form, aboutText: e.target.value })
                    }
                    rows="4"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 resize-none"
                />
            </div>

            {/* FAQs */}
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Frequently Asked Questions
                </label>

                {form.faqs.map((item, i) => (
                    <div key={i} className="mb-3 space-y-2">
                        <input
                            placeholder="Question"
                            value={item.question}
                            onChange={(e) => {
                                const updated = form.faqs.map((f, idx) =>
                                    idx === i ? { ...f, question: e.target.value } : f
                                );
                                setForm({ ...form, faqs: updated });
                            }}
                            className="w-full border rounded-xl px-3 py-2"
                        />
                        <textarea
                            placeholder="Answer"
                            value={item.answer}
                            onChange={(e) => {
                                const updated = form.faqs.map((f, idx) =>
                                    idx === i ? { ...f, answer: e.target.value } : f
                                );
                                setForm({ ...form, faqs: updated });
                            }}
                            rows="3"
                            className="w-full border rounded-xl px-3 py-2 resize-none"
                        />
                    </div>
                ))}

                <button
                    type="button"
                    onClick={() =>
                        setForm({
                            ...form,
                            faqs: [...form.faqs, { question: "", answer: "" }],
                        })
                    }
                    className="text-(--brandColor) text-sm"
                >
                    + Add FAQ
                </button>
            </div>


            {/* Extra Note */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 mt-2">
                    Extra Note
                </label>
                <textarea
                    value={form.note}
                    onChange={(e) =>
                        setForm({ ...form, note: e.target.value })
                    }
                    rows="4"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 resize-none"
                />
            </div>
            {/* Submit */}
            <button
                onClick={handleSubmit}
                className={`bg-(--brandColor) text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition cursor-auto ${loading && 'opacity-50 cursor-not-allowed'}`}
            >
                {loading ? "Saving..." : initialData ? "Update Test" : "Create Test"}
            </button>
        </motion.div>
    );
}