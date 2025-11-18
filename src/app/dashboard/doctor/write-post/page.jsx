"use client";

import { Suspense } from "react";
import PostForm from "@/components/modules/dashboard/doctor/posts/PostForm";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function WritePostContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [allPosts, setAllPosts] = useState([
    {
      id: 1,
      title: "Understanding Heart Failure",
      category: "Cardiology",
      subCategory: "Heart Failure",
      thumbnail: "/articles/heart.webp",
      tags: ["Heart", "Health"],
      content: "Long content goes here..."
    }
  ]);

  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    if (id) {
      const found = allPosts.find((p) => p.id == parseInt(id));
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setEditingPost(found || null);
    }
  }, [id]);

  const handleSubmitPost = (formData) => {
    if (editingPost) {
      console.log("Updating post:", formData);
    } else {
      console.log("Creating post:", formData);
    }
  };

  return (
    <div className="p-6 pb-20">
      <h1 className="text-2xl font-bold mb-6 text-[var(--textDark)]">
        {editingPost ? "Edit Post" : "Write New Post"}
      </h1>

      <div className="bg-white shadow-[var(--shadowCard)] rounded-xl p-6">
        <PostForm post={editingPost} onSubmit={handleSubmitPost} />
      </div>
    </div>
  );
}

export default function WritePostPage() {
  return (
    <Suspense fallback={<div className="p-6">Loading...</div>}>
      <WritePostContent />
    </Suspense>
  );
}
