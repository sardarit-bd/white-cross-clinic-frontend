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
    Edit2,
    FolderTree
} from "lucide-react";
import { useProfile } from "@/hooks/useUser";
import { useCategory } from "@/hooks/useCategory";

export default function ProfessionalInfo({ doctorData, onUpdate }) {
    const [formData, setFormData] = useState({
        designation: doctorData?.doctorInfo?.designation || "",
        yearsOfExperience: doctorData?.doctorInfo?.yearsOfExperience || "",
        education: doctorData?.doctorInfo?.education || "",
        expertices: doctorData?.doctorInfo?.expertices || "",
        intro: doctorData?.doctorInfo?.intro || "",
        category: doctorData?.doctorInfo?.department || '',
        subcategory: doctorData?.doctorInfo?.subDepartment || ''
    });
    const { categories, subcategories } = useCategory()
    const [loading, setLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const { updateProfile } = useProfile();
    
    const filteredSubs = subcategories?.filter(
        (s) => s.category?._id === formData.category
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const payload = {
                designation: formData.designation,
                yearsOfExperience: formData.yearsOfExperience,
                education: formData.education,
                expertices: formData.expertices,
                intro: formData.intro,
                department: formData.category,
                subDepartment: formData.subcategory
            };
            
            const data = await updateProfile.mutateAsync(payload);

            if (data?.data?.success) {
                toast.success("Professional info updated successfully");
                setIsEditing(false);
            } else {
                toast.error(data.message || "Update failed");
            }
        } catch (error) {
            toast.error("Failed to update professional info");
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setFormData({
            designation: doctorData?.doctorInfo?.designation || "",
            yearsOfExperience: doctorData?.doctorInfo?.yearsOfExperience || "",
            education: doctorData?.doctorInfo?.education || "",
            expertices: doctorData?.doctorInfo?.expertices || "",
            intro: doctorData?.doctorInfo?.intro || "",
            category: doctorData?.doctorInfo?.department || '',
            subcategory: doctorData?.doctorInfo?.subDepartment || ''
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
            <div className="bg-[var(--brandColor)] px-6 py-4 flex justify-between items-center">
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                    <Briefcase size={20} />
                    Professional Information
                </h2>
                {!isEditing && (
                    <button
                        onClick={handleEditClick}
                        className="flex items-center gap-2 px-4 py-2 bg-white text-[var(--brandColor)] rounded-lg hover:bg-gray-100 transition-all text-sm font-medium"
                    >
                        <Edit2 size={16} />
                        Edit Professional Info
                    </button>
                )}
            </div>

            <form onSubmit={handleSubmit} className="p-6">
                <div className="space-y-6">
                    {/* First Row - Designation and Years of Experience */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Designation */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                                <Award size={16} className="text-[var(--brandColor)]" />
                                Designation / Title
                            </label>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={formData.designation}
                                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--brandColor)] focus:border-transparent transition-all"
                                    placeholder="e.g., Senior Cardiologist"
                                />
                            ) : (
                                <div className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50">
                                    {formData.designation || "Not provided"}
                                </div>
                            )}
                        </div>

                        {/* Years of Experience */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                                <Star size={16} className="text-[var(--brandColor)]" />
                                Years of Experience
                            </label>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={formData.yearsOfExperience}
                                    onChange={(e) => setFormData({ ...formData, yearsOfExperience: e.target.value })}
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--brandColor)] focus:border-transparent transition-all"
                                    placeholder="e.g., 10+ years"
                                />
                            ) : (
                                <div className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50">
                                    {formData.yearsOfExperience || "Not provided"}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Second Row - Category and Subcategory */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Category Select */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                                <FolderTree size={16} className="text-[var(--brandColor)]" />
                                Category <span className="text-red-500">*</span>
                            </label>
                            {isEditing ? (
                                <select
                                    value={formData.category}
                                    onChange={(e) => {
                                        setFormData({ ...formData, category: e.target.value, subcategory: "" });
                                    }}
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--brandColor)] focus:border-transparent transition-all"
                                >
                                    <option value="">Select Category</option>
                                    {categories?.map((c) => (
                                        <option key={c._id} value={c._id}>{c.name}</option>
                                    ))}
                                </select>
                            ) : (
                                <div className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50">
                                    {categories?.find(c => c._id === formData.category)?.name || "Not provided"}
                                </div>
                            )}
                        </div>

                        {/* Subcategory Select */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                                <FolderTree size={16} className="text-[var(--brandColor)]" />
                                Subcategory <span className="text-gray-400 text-xs">(optional)</span>
                            </label>
                            {isEditing ? (
                                <select
                                    value={formData.subcategory}
                                    onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--brandColor)] focus:border-transparent transition-all"
                                    disabled={!formData.category}
                                >
                                    <option value="">Select Subcategory</option>
                                    {filteredSubs?.map((s) => (
                                        <option key={s._id} value={s._id}>{s.name}</option>
                                    ))}
                                </select>
                            ) : (
                                <div className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50">
                                    {subcategories?.find(s => s._id === formData.subcategory)?.name || "Not provided"}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Third Row - Education and Expertise */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Education */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                                <GraduationCap size={16} className="text-[var(--brandColor)]" />
                                Education
                            </label>
                            {isEditing ? (
                                <textarea
                                    value={formData.education}
                                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                                    rows="3"
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--brandColor)] focus:border-transparent transition-all resize-none"
                                    placeholder="MBBS, MD, PhD - Enter your educational qualifications"
                                />
                            ) : (
                                <div className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 min-h-[80px]">
                                    {formData.education || "Not provided"}
                                </div>
                            )}
                        </div>

                        {/* Expertise */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                                <BookOpen size={16} className="text-[var(--brandColor)]" />
                                Expertise / Specialization
                            </label>
                            {isEditing ? (
                                <>
                                    <textarea
                                        value={formData.expertices}
                                        onChange={(e) => setFormData({ ...formData, expertices: e.target.value })}
                                        rows="3"
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--brandColor)] focus:border-transparent transition-all resize-none"
                                        placeholder="Cardiology, Internal Medicine, etc."
                                    />
                                    <p className="text-xs text-gray-400 mt-1">
                                        Separate multiple expertise with commas
                                    </p>
                                </>
                            ) : (
                                <div className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 min-h-[80px]">
                                    {formData.expertices || "Not provided"}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Introduction - Full Width */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Professional Introduction
                        </label>
                        {isEditing ? (
                            <textarea
                                value={formData.intro}
                                onChange={(e) => setFormData({ ...formData, intro: e.target.value })}
                                rows="4"
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--brandColor)] focus:border-transparent transition-all resize-none"
                                placeholder="Write a brief introduction about yourself and your practice..."
                            />
                        ) : (
                            <div className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 min-h-[100px]">
                                {formData.intro || "Not provided"}
                            </div>
                        )}
                    </div>
                </div>

                {/* Action Buttons */}
                {isEditing && (
                    <div className="mt-8 flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all"
                        >
                            Cancel
                        </button>
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
                )}
            </form>
        </motion.div>
    );
}