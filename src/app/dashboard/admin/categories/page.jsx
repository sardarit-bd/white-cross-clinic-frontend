"use client";

import CategoryForm from "./CategoryForm";
import SubcategoryForm from "./SubcategoryForm";
import CategoryList from "./CategoryList";
import { useCategory } from "@/hooks/useCategory";
import { useState } from "react";

export default function CategoryManagerPage() {
  const categoryHook = useCategory();
  const [editingCategory, setEditingCategory] = useState(null);
  const [editingSubcategory, setEditingSubcategory] = useState(null);

  return (
    <div className="px-6 py-10">
      <div className="container mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          Category Management
        </h1>

        <CategoryForm {...categoryHook} initialData={editingCategory} />

        <SubcategoryForm {...categoryHook} initialData={editingSubcategory}/>

        <CategoryList {...categoryHook} onEditCategory={setEditingCategory} onEditSubCategory={setEditingSubcategory} />

      </div>
    </div>
  );
}
