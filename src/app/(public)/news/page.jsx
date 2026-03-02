"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import { useNewsBySubCategory, useSingleNewsBySlug } from "@/hooks/useNews";


export default function SingleArticlePage() {
  const params = useSearchParams()
  const slug = params.get('slug')
  const {data: article} = useSingleNewsBySlug(slug)
  const {data: relatedArticles = []} = useNewsBySubCategory(article?.subcategory?._id)


  const formattedCategory =
    slug.charAt(0).toUpperCase() + slug.slice(1).toLowerCase();
  const formattedSubcategory =
    slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  if (!article)
    return (
      <div className="min-h-screen flex items-center justify-center text-[var(--textLight)]">
        Article not found.
      </div>
    );

  return (
    <section className="py-16 pt-48 bg-[var(--bgLight)] min-h-screen">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-3 gap-10 relative">
        {/* ===== Main Article ===== */}
        <div className="lg:col-span-2">
          {/* Breadcrumb */}
          {/* <nav className="flex items-center gap-2 text-sm text-[var(--textLight)] mb-6">
            <Link href="/articles" className="hover:text-[var(--brandColor)]">
              Articles
            </Link>
            <ChevronRight size={14} />
            <Link
              href={`/articles/${slug}`}
              className="hover:text-[var(--brandColor)]"
            >
              {formattedCategory}
            </Link>
            <ChevronRight size={14} />
            <Link
              href={`/articles/${slug}`}
              className="hover:text-[var(--brandColor)]"
            >
              {formattedSubcategory}
            </Link>
            <ChevronRight size={14} />
            <span className="text-[var(--brandColor)] font-medium truncate">
              {article.title}
            </span>
          </nav> */}

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl overflow-hidden shadow-lg mb-8"
          >
            <Image
              src={article.image}
              alt={article.title}
              width={1000}
              height={600}
              className="w-full object-cover"
            />
          </motion.div>

          {/* Article Info */}
          <div className="mb-6 flex flex-wrap justify-between text-sm text-[var(--textLight)]">
            <span> {article?.user?.avatar || '👨‍⚕️'}  {article.user?.name}</span>
            <span>📅 {new Date(article.createdDate).toLocaleDateString()}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {article?.tags?.split(',').map((tag, i) => (
              <span
                key={i}
                className="bg-[var(--brandColorLight)] text-[var(--brandColor)] text-xs px-3 py-1 rounded-full font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose max-w-none leading-relaxed text-[var(--textDark)]"
          >
            {article.description?.split("\n").map((para, idx) => (
              <p key={idx} className="mb-4">
                {para}
              </p>
            ))}
          </motion.div>
        </div>

        {/* ===== Sidebar ===== */}
        <aside className="hidden lg:block space-y-8 sticky top-48 self-start h-fit">
          {/* Related Articles */}
          <div className="bg-white shadow-md rounded-2xl p-6 border border-[var(--borderLight)]">
            <h3 className="text-lg font-semibold text-[var(--textDark)] mb-4">
              Related Articles
            </h3>
            <ul className="space-y-4">
              {relatedArticles.map((ra) => (
                <li key={ra.slug}>
                  <Link
                    href={`/news?slug=${ra.slug}`}
                    className="text-[var(--brandColor)] hover:underline"
                  >
                    {ra.title}
                  </Link>
                  <p className="text-xs text-[var(--textLight)]">
                    by {ra.user?.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
