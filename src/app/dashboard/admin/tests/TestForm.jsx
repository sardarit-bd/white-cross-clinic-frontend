"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ClipboardList } from "lucide-react";
import toast from "react-hot-toast";

export default function TestForm({ onSubmit, initialData }) {
    const [form, setForm] = useState({
        title: initialData?.title || "",
        code: initialData?.code || "",
        sampleReqs: initialData?.sampleReqs || "",
        turnaround: initialData?.turnaround || "",
        specialInstructions: initialData?.specialInstructions || "",
        selfCollectKit: initialData?.selfCollectKit || "",
        sampleGuide: initialData?.sampleGuide || [{ code: "", value: "" }],
        profileDetails: initialData?.profileDetails || [""],
        note: initialData?.note || ""
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
                note: initialData?.note || ""
            });
        }
    }, [initialData]);
    const handleSubmit = () => {
        if (!form.title || !form.code) {
            toast.error("Title and Code are required");
            return;
        }

        const payload = {
            title: form.title,
            code: form.code,
            sampleReqs: form.sampleReqs,
            turnaround: form.turnaround,
            specialInstructions: form.specialInstructions,
            selfCollectKit: form.selfCollectKit,
            sampleGuide: form.sampleGuide,
            profileDetails: form.profileDetails,
            note: form.note
        };

        onSubmit?.(payload);
        setForm({
            title: "",
            code: "",
            sampleReqs: "",
            turnaround: "",
            specialInstructions: "",
            selfCollectKit: "",
            sampleGuide: [{ code: "", value: "" }],
            profileDetails: [""],
            note: ""
        });
        toast.success("Test saved successfully");
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 space-y-6 mb-5"
        >
            <h2 className="text-xl font-semibold flex items-center gap-2 text-[var(--brandColor)]">
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
                    className="text-[var(--brandColor)] text-sm"
                >
                    + Add Guide
                </button>
            </div>

            {/* Profile Details */}
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Profile Details
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
                    className="text-[var(--brandColor)] text-sm"
                >
                    + Add Detail
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
                className="bg-[var(--brandColor)] text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
                {initialData ? "Update Test" : "Create Test"}
            </button>
        </motion.div>
    );
}