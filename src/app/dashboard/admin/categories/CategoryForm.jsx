"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import {
    UploadCloud,
    Tag,
    X,
    Image as ImageIcon,
    Edit2,
    FileText,
    AlertCircle,
    CheckCircle,
    Trash2
} from "lucide-react";
import api from "@/lib/api";

export default function CategoryForm({
    createCategory,
    updateCategory,
    initialData = null
}) {
    const fileInputRef = useRef(null);
    const [form, setForm] = useState({
        name: "",
        description: "",
        imageFile: null,
        preview: "",
    });

    const [editingId, setEditingId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [dragActive, setDragActive] = useState(false);
    const [errors, setErrors] = useState({});

    // Initialize form with initial data if provided (for editing)
    console.log(initialData)
    useEffect(() => {
        if (initialData) {
            setForm({
                name: initialData.name || "",
                description: initialData.description || "",
                imageFile: null,
                preview: initialData.thumbnail || "",
            });
            setEditingId(initialData._id || null);
        }
    }, [initialData]);

    // Cleanup preview URL on unmount
    useEffect(() => {
        return () => {
            if (form.preview && form.preview.startsWith('blob:')) {
                URL.revokeObjectURL(form.preview);
            }
        };
    }, [form.preview]);

    const validateForm = () => {
        const newErrors = {};

        if (!form.name.trim()) {
            newErrors.name = "Category name is required";
        } else if (form.name.length < 2) {
            newErrors.name = "Name must be at least 2 characters";
        } else if (form.name.length > 50) {
            newErrors.name = "Name must be less than 50 characters";
        }

        if (form.description && form.description.length > 500) {
            newErrors.description = "Description must be less than 500 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleImage = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Validate file type
        if (!file.type.startsWith('image/')) {
            toast.error("Please upload an image file");
            return;
        }

        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            toast.error("Image size should be less than 5MB");
            return;
        }

        // Clean up previous preview URL if it exists
        if (form.preview && form.preview.startsWith('blob:')) {
            URL.revokeObjectURL(form.preview);
        }

        setForm({
            ...form,
            imageFile: file,
            preview: URL.createObjectURL(file),
        });

        // Clear any image errors
        if (errors.image) {
            setErrors({ ...errors, image: null });
        }
    };

    const removeImage = () => {
        if (form.preview && form.preview.startsWith('blob:')) {
            URL.revokeObjectURL(form.preview);
        }
        setForm({
            ...form,
            imageFile: null,
            preview: "",
        });
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleSubmit = async () => {
        if (!validateForm()) {
            toast.error("Please fix the errors in the form");
            return;
        }

        const formData = new FormData();
        let imgUrl = ''

        if (form.imageFile) {
            formData.append("image", form.imageFile);
            const res = await api.post("/upload/image", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            imgUrl = res.data?.data?.url;
        }

        const payload = {
            name: form.name,
            description: form.description,
            thumbnail: imgUrl
        }
        setLoading(true);
        console.log(payload)
        try {
            const res = editingId
                ? await updateCategory.mutateAsync({ id: editingId, ...payload })
                : await createCategory.mutateAsync(payload);


            if (res?.data?.success) {
                toast.success(
                    <div className="flex items-center gap-2">
                        <CheckCircle size={20} />
                        <span>{editingId ? "Category updated successfully!" : "Category created successfully!"}</span>
                    </div>,
                    { duration: 3000 }
                );

                // Reset form
                setForm({ name: "", description: "", imageFile: null, preview: "" });
                setEditingId(null);
                setErrors({});

                // Clear file input
                if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                }

            } else {
                console.log(res)
                toast.error(res?.message || "Failed to process category");
            }
        } catch (error) {
            toast.error("An unexpected error occurred");
            console.error("Category form error:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        // Clean up preview
        if (form.preview && form.preview.startsWith('blob:')) {
            URL.revokeObjectURL(form.preview);
        }

        setForm({ name: "", description: "", imageFile: null, preview: "" });
        setEditingId(null);
        setErrors({});
        onCancel();
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-10"
        >
            {/* Header with gradient */}
            <div className="bg-[var(--brandColor)] px-6 py-4">
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                    {editingId ? <Edit2 size={20} /> : <Tag size={20} />}
                    {editingId ? "Edit Category" : "Create New Category"}
                </h2>
                {editingId && (
                    <p className="text-blue-100 text-sm mt-1">
                        Update the category details below
                    </p>
                )}
            </div>

            <div className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column - Form Fields */}
                    <div className="space-y-5">
                        {/* Category Name Field */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Category Name <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="e.g., Electronics, Clothing, Books"
                                    value={form.name}
                                    onChange={(e) => {
                                        setForm({ ...form, name: e.target.value });
                                        if (errors.name) {
                                            setErrors({ ...errors, name: null });
                                        }
                                    }}
                                    className={`w-full border ${errors.name ? 'border-red-300' : 'border-gray-200'
                                        } rounded-xl px-4 py-3.5 pl-11 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white focus:bg-white`}
                                />
                                <Tag size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>
                            <AnimatePresence>
                                {errors.name && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="text-red-500 text-xs mt-1 flex items-center gap-1"
                                    >
                                        <AlertCircle size={12} />
                                        {errors.name}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                            <p className="text-xs text-gray-400 mt-1">
                                {form.name.length}/50 characters
                            </p>
                        </div>

                        {/* Description Field */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Description <span className="text-gray-400 text-xs">(optional)</span>
                            </label>
                            <div className="relative">
                                <textarea
                                    placeholder="Brief description of the category..."
                                    value={form.description}
                                    onChange={(e) => {
                                        setForm({ ...form, description: e.target.value });
                                        if (errors.description) {
                                            setErrors({ ...errors, description: null });
                                        }
                                    }}
                                    rows="4"
                                    className={`w-full border ${errors.description ? 'border-red-300' : 'border-gray-200'
                                        } rounded-xl px-4 py-3 pl-11 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none bg-gray-50 hover:bg-white focus:bg-white`}
                                />
                                <FileText size={18} className="absolute left-4 top-4 text-gray-400" />
                            </div>
                            <AnimatePresence>
                                {errors.description && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="text-red-500 text-xs mt-1 flex items-center gap-1"
                                    >
                                        <AlertCircle size={12} />
                                        {errors.description}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                            <p className="text-xs text-gray-400 mt-1">
                                {form.description.length}/500 characters
                            </p>
                        </div>

                        {/* Form Actions */}
                        <div className="flex items-center gap-3 pt-4">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleSubmit}
                                disabled={loading}
                                className="flex-1 bg-[var(--brandColor)] text-white font-semibold py-3.5 px-6 rounded-xl hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        <span>{editingId ? "Updating..." : "Creating..."}</span>
                                    </>
                                ) : (
                                    <>
                                        {editingId ? <Edit2 size={18} /> : <Tag size={18} />}
                                        <span>{editingId ? "Update Category" : "Create Category"}</span>
                                    </>
                                )}
                            </motion.button>

                            {editingId && (
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleCancel}
                                    className="px-6 py-3.5 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200"
                                >
                                    Cancel
                                </motion.button>
                            )}
                        </div>
                    </div>

                    {/* Right Column - Image Upload */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Category Image <span className="text-gray-400 text-xs">(optional)</span>
                        </label>

                        <div
                            className={`relative border-2 border-dashed rounded-xl transition-all ${dragActive
                                ? 'border-blue-500 bg-blue-50'
                                : form.preview
                                    ? 'border-transparent'
                                    : 'border-gray-300 hover:border-blue-400'
                                }`}
                        >
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                onChange={handleImage}
                                className="hidden"
                            />

                            {form.preview ? (
                                <div className="relative group">
                                    <img
                                        src={form.preview}
                                        alt="Category preview"
                                        className="w-full h-72 object-contain rounded-xl"
                                    />

                                    {/* Overlay with actions */}
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center gap-3">
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => fileInputRef.current?.click()}
                                            className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
                                            title="Change image"
                                        >
                                            <UploadCloud size={20} className="text-gray-700" />
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={removeImage}
                                            className="p-3 bg-white rounded-full hover:bg-red-100 transition-colors"
                                            title="Remove image"
                                        >
                                            <Trash2 size={20} className="text-red-600" />
                                        </motion.button>
                                    </div>

                                    {/* Image size badge */}
                                    {form.imageFile && (
                                        <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded-lg">
                                            {(form.imageFile.size / 1024 / 1024).toFixed(2)} MB
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div
                                    onClick={() => fileInputRef.current?.click()}
                                    className="cursor-pointer py-10 px-4 text-center"
                                >
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                                            <UploadCloud className="h-8 w-8 text-blue-500" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-700">
                                                Click to upload or drag and drop
                                            </p>
                                            <p className="text-xs text-gray-500 mt-1">
                                                SVG, PNG, JPG or GIF (max. 5MB)
                                            </p>
                                        </div>
                                        <div className="flex gap-2 mt-2">
                                            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                                16:9 recommended
                                            </span>
                                            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                                Min 400x400
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Image preview info */}
                        {form.preview && !form.imageFile && editingId && (
                            <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                                <ImageIcon size={12} />
                                Current image will be kept if no new image is uploaded
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}