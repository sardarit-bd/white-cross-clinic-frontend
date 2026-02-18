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
    Camera,
    Edit2
} from "lucide-react";
import Image from "next/image";
import { useProfile } from "@/hooks/useUser";
import api from "@/lib/api";

export default function PersonalInfo({ doctorData, onUpdate }) {
    const [formData, setFormData] = useState({
        name: doctorData?.name || "",
        phone: doctorData?.doctorInfo?.phone || "",
        address: doctorData?.doctorInfo?.address || "",
        avatar: doctorData?.avatar || "",
    });
    const [loading, setLoading] = useState(false);
    const [avatarFile, setAvatarFile] = useState(null);
    const [avatarPreview, setAvatarPreview] = useState(doctorData?.user?.avatar || "");
    const [isEditing, setIsEditing] = useState(false);
    const { updateProfile } = useProfile()

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
            let imgUrl = formData?.avatar
            const ImageformData = new FormData();
            if (avatarFile) {
                ImageformData.append("image", avatarFile);
                const res = await api.post("/upload/image", ImageformData, {
                    headers: { "Content-Type": "multipart/form-data" }
                });
                imgUrl = res.data?.data?.url;
            }

            const payload = {
                name: formData.name,
                phone: formData.phone,
                avatar: imgUrl,
                address: formData.address
            }
            const data = await updateProfile.mutateAsync(payload);
            console.log(data?.data)
            if (data?.data?.success) {
                toast.success("Profile updated successfully");
                setIsEditing(false);
            } else {
                toast.error(data.message || "Update failed");
            }
        } catch (error) {
            toast.error("Failed to update profile");
            console.log(error)
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
            name: doctorData?.name || "",
            phone: doctorData?.doctorInfo?.phone || "",
            address: doctorData?.doctorInfo?.address || "",
            avatar: doctorData?.avatar || "",
        });
        setAvatarPreview(doctorData?.user?.avatar || "");
        setAvatarFile(null);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
            <div className="bg-[var(--brandColor)] px-6 py-4 flex justify-between items-center">
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                    <User size={20} />
                    Personal Information
                </h2>
                {!isEditing && (
                    <button
                        onClick={handleEditClick}
                        className="flex items-center gap-2 px-4 py-2 bg-white text-[var(--brandColor)] rounded-lg hover:bg-gray-100 transition-all text-sm font-medium"
                    >
                        <Edit2 size={16} />
                        Edit Profile
                    </button>
                )}
            </div>

            <form onSubmit={handleSubmit} className="p-6">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Avatar Upload Section */}
                    <div className="md:w-1/3 flex flex-col items-center">
                        <label className="block text-sm font-medium text-gray-700 mb-3 self-start">
                            Profile Photo
                        </label>
                        <div className="relative group">
                            <div className="rounded-2xl overflow-hidden bg-gray-100 border-2 border-gray-200">
                                {avatarPreview || formData?.avatar ? (
                                    <Image
                                        width={400}
                                        height={400}
                                        src={avatarPreview || formData?.avatar}
                                        alt="Avatar"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <User size={40} className="text-gray-400" />
                                    </div>
                                )}
                            </div>
                            {isEditing && (
                                <>
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
                                </>
                            )}
                        </div>
                        {isEditing && (
                            <p className="text-xs text-gray-400 text-center mt-2">
                                Click to upload (max 2MB)
                            </p>
                        )}
                    </div>

                    {/* Form Fields */}
                    <div className="flex-1 space-y-4">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name
                            </label>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="Dr. John Doe"
                                    required
                                />
                            ) : (
                                <div className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50">
                                    {formData.name || "Not provided"}
                                </div>
                            )}
                        </div>


                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Phone Number
                            </label>
                            {isEditing ? (
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="+1 234 567 8900"
                                />
                            ) : (
                                <div className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50">
                                    {formData.phone || "Not provided"}
                                </div>
                            )}
                        </div>

                        {/* Address */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Address
                            </label>
                            {isEditing ? (
                                <textarea
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                    rows="3"
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                    placeholder="Your full address"
                                />
                            ) : (
                                <div className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 min-h-[80px]">
                                    {formData.address || "Not provided"}
                                </div>
                            )}
                        </div>
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
                                    <span>Save Changes</span>
                                </>
                            )}
                        </button>
                    </div>
                )}
            </form>
        </motion.div>
    );
}