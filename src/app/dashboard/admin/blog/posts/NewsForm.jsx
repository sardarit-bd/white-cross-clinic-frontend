"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import {
  Newspaper,
  Tag,
  FileText,
  Image as ImageIcon,
  X,
  UploadCloud,
  AlertCircle,
  CheckCircle
} from "lucide-react";
import api from "@/lib/api";

export default function NewsForm({
  categories,
  subcategories,
  createNews,
  updateNews,
  initialData,
  onFinish,
}) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    subcategory: "",
    tags: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isEdit, setIEdit] = useState(false)

  // Auto-fill when editing
  useEffect(() => {
    if(initialData && !isEdit){
      setIEdit(true)
    }
  }, [initialData])

  useEffect(() => {
    if (initialData) {
      setForm({
        title: initialData.title || "",
        description: initialData.description || "",
        category: initialData.category?._id || "",
        subcategory: initialData.subcategory?._id || "",
        tags: initialData.tags || "",
      });
      if (initialData.image) {
        setImagePreview(initialData.image);
      }
    }
  }, [initialData]);

  // Cleanup preview URL
  useEffect(() => {
    return () => {
      if (imagePreview && imagePreview.startsWith('blob:')) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const filteredSubs = subcategories?.filter(
    (s) => s.category?._id === form.category
  );

  const validateForm = () => {
    const newErrors = {};
    if (!form.title.trim()) newErrors.title = "Title is required";
    if (!form.category) newErrors.category = "Category is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageChange = (e) => {
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

    // Clean up previous preview
    if (imagePreview && imagePreview.startsWith('blob:')) {
      URL.revokeObjectURL(imagePreview);
    }

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const removeImage = () => {
    if (imagePreview && imagePreview.startsWith('blob:')) {
      URL.revokeObjectURL(imagePreview);
    }
    setImageFile(null);
    setImagePreview("");
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (!validateForm()) {
      toast.error("Please fill in all required fields");
      return;
    }

    const formData = new FormData();
    let imgUrl = ''

    if (imageFile) {
      formData.append("image", imageFile);
      const res = await api.post("/upload/image", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      imgUrl = res.data?.data?.url;
    }

    const payload = {
      title : form.title,
      image: imgUrl,
      tags: form.tags,
      description: form.description,
      category: form.category,
      subcategory: form.subcategory
    }

    try {
      let res;

      if (isEdit) {
        payload.id = initialData?._id
        res = await updateNews.mutateAsync(payload);
        toast.success(
          <div className="flex items-center gap-2">
            <CheckCircle size={20} />
            <span>News updated successfully!</span>
          </div>
        );
      } else {
        res = await createNews.mutateAsync(payload);
        toast.success(
          <div className="flex items-center gap-2">
            <CheckCircle size={20} />
            <span>News created successfully!</span>
          </div>
        );
      }

      // Reset form
      setForm({
        title: "",
        description: "",
        category: "",
        subcategory: "",
        tags: "",
      });
      setImageFile(null);
      setImagePreview("");
      setErrors({});

      onFinish?.();

    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-xl mb-8 overflow-hidden border border-gray-100"
    >
      {/* Header with gradient */}
      <div className="bg-[var(--brandColor)] px-6 py-4">
        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
          <Newspaper size={20} />
          {initialData ? "Edit News Article" : "Create New News"}
        </h2>
      </div>

      <div className="p-6">
        <div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Form Fields */}
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Category Select */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={form.category}
                    onChange={(e) => {
                      setForm({ ...form, category: e.target.value, subcategory: "" });
                      if (errors.category) setErrors({ ...errors, category: null });
                    }}
                    className={`w-full border ${errors.category ? 'border-red-300' : 'border-gray-200'
                      } rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--brandColor)] focus:border-transparent transition-all bg-gray-50 hover:bg-white focus:bg-white`}
                  >
                    <option value="">Select Category</option>
                    {categories?.map((c) => (
                      <option key={c._id} value={c._id}>{c.name}</option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.category}
                    </p>
                  )}
                </div>

                {/* Subcategory Select */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subcategory <span className="text-gray-400 text-xs">(optional)</span>
                  </label>
                  <select
                    value={form.subcategory}
                    onChange={(e) => setForm({ ...form, subcategory: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--brandColor)] focus:border-transparent transition-all bg-gray-50 hover:bg-white focus:bg-white"
                    disabled={!form.category}
                  >
                    <option value="">Select Subcategory</option>
                    {filteredSubs?.map((s) => (
                      <option key={s._id} value={s._id}>{s.name}</option>
                    ))}
                  </select>
                  {!form.category && (
                    <p className="text-gray-400 text-xs mt-1">Select a category first</p>
                  )}
                </div>
              </div>
              {/* Title Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter news title"
                    value={form.title}
                    onChange={(e) => {
                      setForm({ ...form, title: e.target.value });
                      if (errors.title) setErrors({ ...errors, title: null });
                    }}
                    className={`w-full border ${errors.title ? 'border-red-300' : 'border-gray-200'
                      } rounded-xl px-4 py-3 pl-11 focus:ring-2 focus:ring-[var(--brandColor)] focus:border-transparent transition-all bg-gray-50 hover:bg-white focus:bg-white`}
                  />
                  <Tag size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
                {errors.title && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.title}
                  </p>
                )}
              </div>

              {/* Tags Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags <span className="text-gray-400 text-xs">(comma separated)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., technology, sports, politics"
                  value={form.tags}
                  onChange={(e) => setForm({ ...form, tags: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--brandColor)] focus:border-transparent transition-all bg-gray-50 hover:bg-white focus:bg-white"
                />
              </div>
            </div>

            {/* Right Column - Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Featured Image <span className="text-gray-400 text-xs">(optional)</span>
              </label>

              <div className="relative border-2 border-dashed border-gray-300 rounded-xl hover:border-[var(--brandColor)] transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="news-image"
                />

                {imagePreview ? (
                  <div className="relative group">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-64 object-cover rounded-xl"
                    />

                    {/* Overlay with actions */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center gap-3">
                      <label
                        htmlFor="news-image"
                        className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                        title="Change image"
                      >
                        <UploadCloud size={20} className="text-gray-700" />
                      </label>
                      <button
                        onClick={removeImage}
                        className="p-3 bg-white rounded-full hover:bg-red-100 transition-colors"
                        title="Remove image"
                      >
                        <X size={20} className="text-red-600" />
                      </button>
                    </div>

                    {/* Image size badge */}
                    {imageFile && (
                      <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded-lg">
                        {(imageFile.size / 1024 / 1024).toFixed(2)} MB
                      </div>
                    )}
                  </div>
                ) : (
                  <label
                    htmlFor="news-image"
                    className="cursor-pointer block py-10 px-4 text-center"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 bg-[var(--brandColor)]/10 rounded-full flex items-center justify-center">
                        <ImageIcon className="h-8 w-8 text-[var(--brandColor)]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          Click to upload image
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          PNG, JPG, GIF up to 5MB
                        </p>
                      </div>
                    </div>
                  </label>
                )}
              </div>

              {/* Image info */}
              {imagePreview && !imageFile && initialData && (
                <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                  <ImageIcon size={12} />
                  Current image will be kept if no new image is uploaded
                </p>
              )}
            </div>
          </div>
          {/* Description Textarea */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 mt-2">
              Description <span className="text-gray-400 text-xs">(optional)</span>
            </label>
            <div className="relative">
              <textarea
                placeholder="Write a brief description..."
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                rows="4"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-11 focus:ring-2 focus:ring-[var(--brandColor)] focus:border-transparent transition-all resize-none bg-gray-50 hover:bg-white focus:bg-white"
              />
              <FileText size={18} className="absolute left-4 top-4 text-gray-400" />
            </div>
          </div>
        </div>
        {/* Submit Button */}
        <div className="mt-6 flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmit}
            disabled={loading}
            className="flex-1 bg-[var(--brandColor)]  text-white font-semibold py-3.5 px-6 rounded-xl hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>{initialData ? "Updating..." : "Creating..."}</span>
              </>
            ) : (
              <>
                <Newspaper size={18} />
                <span>{initialData ? "Update News" : "Create News"}</span>
              </>
            )}
          </motion.button>

          {initialData && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setForm({
                  title: "",
                  description: "",
                  category: "",
                  subcategory: "",
                  tags: "",
                });
                setImageFile(null);
                setImagePreview("");
                setErrors({});
                onFinish?.();
              }}
              className="px-6 py-3.5 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200"
            >
              Cancel
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}