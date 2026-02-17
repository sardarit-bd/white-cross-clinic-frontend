"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { 
    Briefcase,
    GraduationCap,
    Award,
    BookOpen,
    Star,
    Save,
    Plus,
    X
} from "lucide-react";

export default function ProfessionalInfo({ doctorData, onUpdate }) {
    const [formData, setFormData] = useState({
        designation: doctorData?.designation || "",
        yearsOfExperience: doctorData?.yearsOfExperience || "",
        education: doctorData?.education || "",
        expertices: doctorData?.expertices || "",
        intro: doctorData?.intro || "",
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/doctor/profile/professional', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            if (data.success) {
                toast.success("Professional info updated successfully");
                onUpdate();
            } else {
                toast.error(data.message || "Update failed");
            }
        } catch (error) {
            toast.error("Failed to update professional info");
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
            <div className="bg-[var(--brandColor)] px-6 py-4">
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                    <Briefcase size={20} />
                    Professional Information
                </h2>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
                <div className="space-y-6">
                    {/* Designation */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                            <Award size={16} className="text-[var(--brandColor)]" />
                            Designation / Title
                        </label>
                        <input
                            type="text"
                            value={formData.designation}
                            onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--brandColor)] focus:border-transparent transition-all"
                            placeholder="e.g., Senior Cardiologist, Chief Medical Officer"
                        />
                    </div>

                    {/* Years of Experience */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                            <Star size={16} className="text-[var(--brandColor)]" />
                            Years of Experience
                        </label>
                        <input
                            type="text"
                            value={formData.yearsOfExperience}
                            onChange={(e) => setFormData({ ...formData, yearsOfExperience: e.target.value })}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                            placeholder="e.g., 10+ years"
                        />
                    </div>

                    {/* Education */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                            <GraduationCap size={16} className="text-[var(--brandColor)]" />
                            Education
                        </label>
                        <textarea
                            value={formData.education}
                            onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                            rows="3"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--brandColor)] focus:border-transparent transition-all resize-none"
                            placeholder="MBBS, MD, PhD - Enter your educational qualifications"
                        />
                    </div>

                    {/* Expertise */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                            <BookOpen size={16} className="text-[var(--brandColor)]" />
                            Expertise / Specialization
                        </label>
                        <textarea
                            value={formData.expertices}
                            onChange={(e) => setFormData({ ...formData, expertices: e.target.value })}
                            rows="3"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--brandColor)] focus:border-transparent transition-all resize-none"
                            placeholder="Cardiology, Internal Medicine, etc. (comma separated)"
                        />
                        <p className="text-xs text-gray-400 mt-1">
                            Separate multiple expertise with commas
                        </p>
                    </div>

                    {/* Introduction */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Professional Introduction
                        </label>
                        <textarea
                            value={formData.intro}
                            onChange={(e) => setFormData({ ...formData, intro: e.target.value })}
                            rows="4"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--brandColor)] focus:border-transparent transition-all resize-none"
                            placeholder="Write a brief introduction about yourself and your practice..."
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="mt-8 flex justify-end">
                    <button
                        type="submit"
                        disabled={loading}
                        className="flex items-center gap-2 px-6 py-3 bg-[var(--brandColor)] text-white font-semibold rounded-xl hover:shadow-lg transition-all disabled:opacity-50"
                    >
                        {loading ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                <span>Saving...</span>
                            </>
                        ) : (
                            <>
                                <Save size={18} />
                                <span>Save Professional Info</span>
                            </>
                        )}
                    </button>
                </div>
            </form>
        </motion.div>
    );
}