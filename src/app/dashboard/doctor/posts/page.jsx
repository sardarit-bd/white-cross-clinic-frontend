"use client";

import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

export default function DoctorPostsPage() {
  // DEMO POSTS
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Understanding Heart Failure",
      category: "Cardiology",
      subCategory: "Heart Failure",
      thumbnail: "/articles/heart.webp",
      tags: ["Heart", "Health"],
      content: "Long content goes here..."
    },
    {
      id: 2,
      title: "Managing Type II Diabetes",
      category: "Diabetology",
      subCategory: "Type II",
      thumbnail: "/articles/mental.jpg",
      tags: ["Sugar", "Medicine"],
      content: "This is the content..."
    },
  ]);

  const deletePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  return (
    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-bold text-[var(--textDark)]">My Posts</h1>

      {/* POSTS LIST */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-[var(--shadowCard)] overflow-hidden"
          >
            <img
              src={post.thumbnail}
              className="w-full h-40 object-cover"
              alt=""
            />

            <div className="p-4">
              <h3 className="font-semibold text-[var(--textDark)]">{post.title}</h3>
              <p className="text-sm text-[var(--textLight)] mt-1">
                {post.category} → {post.subCategory}
              </p>

              <div className="flex gap-2 mt-2 flex-wrap">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-[var(--brandColorLight)] text-[var(--brandColor)] rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between mt-4">
                {/* EDIT — Redirect to write page with ID */}
                <Link
                  href={`/dashboard/doctor/write-post?id=${post.id}`}
                  className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200"
                >
                  <Pencil size={18} />
                </Link>

                {/* DELETE */}
                <button
                  className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
                  onClick={() => deletePost(post.id)}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
