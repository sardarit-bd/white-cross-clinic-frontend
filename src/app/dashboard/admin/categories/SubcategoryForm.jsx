"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FolderPlus } from "lucide-react";

export default function SubcategoryForm({
  categories,
  createSubcategory,
  updateSubCategory, 
  initialData = null
}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [isEdit, setIsEdit] = useState(false)

  // ✅ Auto-fill when editing
  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setCategory(initialData.category?._id || "");
      setIsEdit(true)
    }
  }, [initialData]);

  const handleSubmit = async () => {
    if (!name || !category)
      return toast.error("Select category & name");

    try {
      let res;

      if (isEdit) {
        res = await updateSubCategory.mutateAsync({
          id: initialData._id,
          name,
          category
        });

        if (res?.data?.success) {
          toast.success("Subcategory updated");
          setIsEdit(false)
        }
      }
      else {
        res = await createSubcategory.mutateAsync({
          name,
          category
        });

        if (res?.success) {
          toast.success("Subcategory created");
        }
      }
      setName("");
      setCategory("");

    } catch (err) {
      toast.error(err?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow mb-8">

      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <FolderPlus size={20} />
        {isEdit ? "Edit Subcategory" : "Create Subcategory"}
      </h2>

      <div className="flex flex-col md:flex-row gap-3">

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border px-4 py-2 rounded-lg"
        >
          <option value="">Select Category</option>
          {categories?.map((c) => (
            <option key={c._id} value={c._id}>
              {c.name}
            </option>
          ))}
        </select>

        <input
          placeholder="Subcategory name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-4 py-2 rounded-lg flex-1"
        />

        <button
          onClick={handleSubmit}
          className="bg-[var(--brandColor)] text-white px-5 py-2 rounded-lg"
        >
          {isEdit ? "Update" : "Add"}
        </button>

      </div>
    </div>
  );
}
