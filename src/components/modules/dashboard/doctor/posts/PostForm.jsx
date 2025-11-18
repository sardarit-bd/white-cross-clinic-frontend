"use client";

import { useEffect, useState } from "react";
import { Upload, X, Plus, Hash } from "lucide-react";

export default function PostForm({ onSubmit, post }) {
  // ========== FORM STATES ==========
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);

  // ========== UPDATE FORM WHEN POST CHANGES ==========
  useEffect(() => {
    if (post) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTitle(post.title || "");
      setContent(post.content || "");
      setCategory(post.category || "");
      setSubCategory(post.subCategory || "");
      setTags(post.tags || []);
      setThumbnailPreview(post.thumbnail || null);
      setThumbnailFile(null);
    }
  }, [post]);


  // ========== CATEGORY DATA ==========
  const categories = [
    {
      name: "Cardiology",
      subs: ["Heart Failure", "Arrhythmia", "Coronary Artery Disease"],
    },
    {
      name: "Neurology",
      subs: ["Stroke", "Epilepsy", "Parkinson's"],
    },
    {
      name: "Diabetology",
      subs: ["Type I", "Type II", "Gestational Diabetes"],
    },
  ];

  // ========== TAG MANAGEMENT ==========

  const handleAddTag = () => {
    const newTag = tagInput.trim();
    if (!newTag) return;
    if (tags.includes(newTag)) return; // Avoid duplicates
    setTags([...tags, newTag]);
    setTagInput("");
  };

  const handleTagKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  const removeTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  // ========== HANDLE THUMBNAIL ==========
  const handleThumbnail = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setThumbnailFile(file);
    setThumbnailPreview(URL.createObjectURL(file));
  };

  // ========== SUBMIT ==========
  const handleSubmit = () => {
    onSubmit({
      title,
      content,
      category,
      subCategory,
      tags,
      thumbnailFile,
      thumbnailPreview,
    });
  };

  // ================= UI START =================== //

  return (
    <div className="space-y-8">

      {/* TITLE */}
      <div>
        <label className="font-medium text-[var(--textDark)]">Post Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mt-2 p-3 border border-[var(--borderLight)] rounded-lg"
          placeholder="Enter post title..."
        />
      </div>

      {/* CATEGORY SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        <div>
          <label className="font-medium text-[var(--textDark)]">Category</label>
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setSubCategory("");
            }}
            className="w-full mt-2 p-3 border border-[var(--borderLight)] rounded-lg"
          >
            <option value="">Select Category</option>
            {categories.map((c) => (
              <option key={c.name}>{c.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="font-medium text-[var(--textDark)]">Sub Category</label>
          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            disabled={!category}
            className="w-full mt-2 p-3 border border-[var(--borderLight)] rounded-lg"
          >
            <option value="">Select Sub Category</option>

            {categories
              .find((c) => c.name === category)
              ?.subs.map((s) => (
                <option key={s}>{s}</option>
              ))}
          </select>
        </div>
      </div>

      {/* TAG INPUT */}
      <div>
        <label className="font-medium text-[var(--textDark)]">Tags</label>
        
        <div className="flex gap-2 mt-2">
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyPress={handleTagKeyPress}
            className="flex-1 p-3 border border-[var(--borderLight)] rounded-lg"
            placeholder="Type a tag and press Enter..."
          />

          <button
            type="button"
            onClick={handleAddTag}
            className="px-4 py-3 bg-[var(--brandColor)] text-white rounded-lg hover:bg-[var(--brandColorDark)] flex items-center gap-1"
          >
            <Plus size={16} />
            Add
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-[var(--brandColorLight)] text-[var(--brandColor)] rounded-full text-xs flex items-center gap-2"
            >
              <Hash size={12} />
              {tag}
              <button onClick={() => removeTag(tag)}>
                <X size={14} className="text-red-500" />
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* THUMBNAIL SECTION */}
      <div>
        <label className="font-medium text-[var(--textDark)]">Thumbnail</label>

        <div className="w-full border border-[var(--borderLight)] rounded-xl p-4 mt-2 flex flex-col items-center justify-center gap-3 bg-[var(--bgLight)] shadow-sm">
          
          {thumbnailPreview ? (
            <div className="relative w-full max-w-md">
              <img
                src={thumbnailPreview}
                alt="Preview"
                className="w-full h-64 object-cover rounded-xl shadow-md"
              />

              <button
                type="button"
                onClick={() => {
                  setThumbnailPreview(null);
                  setThumbnailFile(null);
                }}
                className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-red-50"
              >
                <X size={16} className="text-red-600" />
              </button>
            </div>
          ) : (
            <label className="cursor-pointer flex flex-col items-center gap-2 text-[var(--brandColor)]">
              <Upload size={30} />
              <span className="text-sm">Click to upload thumbnail</span>
              <input
                type="file"
                className="hidden"
                onChange={handleThumbnail}
              />
            </label>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div>
        <label className="font-medium text-[var(--textDark)]">Content</label>
        <textarea
          rows={8}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full mt-2 p-3 border border-[var(--borderLight)] rounded-lg"
          placeholder="Write your article..."
        />
      </div>

      {/* SUBMIT BUTTON */}
      <button
        onClick={handleSubmit}
        className="px-6 py-3 bg-[var(--brandColor)] hover:bg-[var(--brandColorDark)] text-white rounded-lg font-semibold"
      >
        {post ? "Update Post" : "Publish Post"}
      </button>
    </div>
  );
}
