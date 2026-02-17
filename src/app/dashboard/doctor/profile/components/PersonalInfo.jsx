"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { 
    User, 
    MapPin, 
    Phone, 
    Mail,
    Save,
    Camera
} from "lucide-react";
import Image from "next/image";

export default function PersonalInfo({ doctorData, onUpdate }) {
    const [formData, setFormData] = useState({
        name: doctorData?.user?.name || "",
        phone: doctorData?.phone || "",
        address: doctorData?.address || "",
        avatar: doctorData?.user?.avatar || "",
    });
    const [loading, setLoading] = useState(false);
    const [avatarFile, setAvatarFile] = useState(null);
    const [avatarPreview, setAvatarPreview] = useState(doctorData?.user?.avatar || "");

    const handleAvatarChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            toast.error("Please upload an image file");
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            toast.error("Image size should be less than 2MB");
            return;
        }

        setAvatarFile(file);
        setAvatarPreview(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formDataToSend = new FormData();
            formDataToSend.append("name", formData.name);
            formDataToSend.append("phone", formData.phone);
            formDataToSend.append("address", formData.address);
            if (avatarFile) {
                formDataToSend.append("avatar", avatarFile);
            }

            const res = await fetch('/api/doctor/profile', {
                method: 'PUT',
                body: formDataToSend
            });

            const data = await res.json();
            if (data.success) {
                toast.success("Profile updated successfully");
                onUpdate();
            } else {
                toast.error(data.message || "Update failed");
            }
        } catch (error) {
            toast.error("Failed to update profile");
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
                    <User size={20} />
                    Personal Information
                </h2>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Avatar Upload Section */}
                    <div className="md:w-1/3">
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                            Profile Photo
                        </label>
                        <div className="relative group w-40 h-40 mx-auto">
                            <div className="w-40 h-40 rounded-2xl overflow-hidden bg-gray-100 border-2 border-gray-200">
                                {avatarPreview ? (
                                    <img 
                                        src={avatarPreview} 
                                        alt="Avatar" 
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <User size={48} className="text-gray-400" />
                                    </div>
                                )}
                            </div>
                            <label 
                                htmlFor="avatar-upload"
                                className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl cursor-pointer"
                            >
                                <Camera size={24} className="text-white" />
                            </label>
                            <input
                                type="file"
                                id="avatar-upload"
                                accept="image/*"
                                onChange={handleAvatarChange}
                                className="hidden"
                            />
                        </div>
                        <p className="text-xs text-gray-400 text-center mt-2">
                            Click to upload (max 2MB)
                        </p>
                    </div>

                    {/* Form Fields */}
                    <div className="flex-1 space-y-4">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="Dr. John Doe"
                                required
                            />
                        </div>

                        {/* Email (Read-only) */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    value={doctorData?.user?.email || ""}
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 text-gray-500"
                                    readOnly
                                    disabled
                                />
                                <Mail size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>
                            <p className="text-xs text-gray-400 mt-1">Email cannot be changed</p>
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="+1 234 567 8900"
                            />
                        </div>

                        {/* Address */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Address
                            </label>
                            <textarea
                                value={formData.address}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                rows="3"
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                placeholder="Your full address"
                            />
                        </div>
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
                                <span>Save Changes</span>
                            </>
                        )}
                    </button>
                </div>
            </form>
        </motion.div>
    );
}