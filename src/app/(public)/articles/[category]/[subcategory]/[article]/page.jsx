"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

// 🩵 Mock Data — Replace later with API
export const articlesData = {
  cardiology: {
    "heart-health": [
      {
        id: 1,
        slug: "10-habits-for-a-stronger-heart",
        title: "10 Habits for a Stronger Heart",
        author: "Dr. Alice Johnson",
        date: "2025-11-05",
        readTime: "5 min read",
        description:
          "Learn key daily habits and diet tips that help maintain a healthy cardiovascular system.",
        tags: ["Cardiology", "Lifestyle", "Heart Health"],
        image: "/articles/heart.webp",
        content: `
          A strong heart begins with consistent lifestyle habits. 
          Regular aerobic exercise such as brisk walking or swimming helps improve blood flow 
          and strengthen the cardiac muscles. Prioritize a balanced diet — fruits, vegetables, 
          lean proteins, and omega-3 rich foods like salmon or flaxseed. 
          
          Limit trans fats, reduce salt intake, and stay hydrated throughout the day. 
          Getting at least 7–8 hours of quality sleep also plays a vital role in maintaining 
          cardiovascular balance. Lastly, manage stress with mindfulness, yoga, or meditation — 
          your heart will thank you.
        `,
      },
      {
        id: 2,
        slug: "recognizing-early-signs-of-heart-disease",
        title: "Recognizing Early Signs of Heart Disease",
        author: "Dr. Martin Silva",
        date: "2025-10-22",
        readTime: "6 min read",
        description:
          "Spotting early symptoms could save lives. Here’s how to recognize them and act fast.",
        tags: ["Cardiology", "Prevention", "Heart Disease"],
        image: "/articles/mental.jpg",
        content: `
          Heart disease often develops silently, with early symptoms overlooked as fatigue 
          or indigestion. However, persistent chest pain, shortness of breath, or palpitations 
          should never be ignored. Swelling in the legs and sudden dizziness can also indicate 
          compromised circulation.

          Regular health check-ups, ECGs, and maintaining a healthy weight can help detect 
          problems early. Immediate lifestyle adjustments — quitting smoking, eating cleaner, 
          and staying active — dramatically reduce risks.
        `,
      },
    ],
    "cardiac-surgery": [
      {
        id: 3,
        slug: "modern-advances-in-cardiac-surgery",
        title: "Modern Advances in Cardiac Surgery",
        author: "Dr. Emily Carter",
        date: "2025-09-12",
        readTime: "7 min read",
        description:
          "Explore the latest techniques and technologies transforming cardiac surgery.",
        tags: ["Cardiology", "Surgery", "Innovation"],
        image: "/images/cardiology.jpg",
        content: `
          Cardiac surgery has evolved beyond open-heart procedures. 
          Today, minimally invasive techniques and robotic-assisted surgeries 
          allow for faster recovery and reduced risk of complications. 

          Advanced imaging systems help surgeons visualize arteries with precision, 
          while AI-driven diagnostics predict post-surgery outcomes. 
          Patients experience less pain, shorter hospital stays, and improved quality of life.
        `,
      },
    ],
  },
};

export default function SingleArticlePage() {
  const { category, subcategory, article: id } = useParams();

  // Find the article by slug
  const articleList = articlesData?.[category]?.[subcategory] || [];
  const article = articleList.find((a) => a.slug === id);

  const formattedCategory =
    category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
  const formattedSubcategory =
    subcategory.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  if (!article)
    return (
      <div className="min-h-screen flex items-center justify-center text-[var(--textLight)]">
        Article not found.
      </div>
    );

  const relatedArticles = articleList.filter((a) => a.id !== article.id);

  return (
    <section className="py-16 pt-48 bg-[var(--bgLight)] min-h-screen">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-3 gap-10 relative">
        {/* ===== Main Article ===== */}
        <div className="lg:col-span-2">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[var(--textLight)] mb-6">
            <Link href="/articles" className="hover:text-[var(--brandColor)]">
              Articles
            </Link>
            <ChevronRight size={14} />
            <Link
              href={`/articles/${category}`}
              className="hover:text-[var(--brandColor)]"
            >
              {formattedCategory}
            </Link>
            <ChevronRight size={14} />
            <Link
              href={`/articles/${category}/${subcategory}`}
              className="hover:text-[var(--brandColor)]"
            >
              {formattedSubcategory}
            </Link>
            <ChevronRight size={14} />
            <span className="text-[var(--brandColor)] font-medium truncate">
              {article.title}
            </span>
          </nav>

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
            <span>👨‍⚕️ {article.author}</span>
            <span>📅 {new Date(article.date).toLocaleDateString()}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {article.tags.map((tag, i) => (
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
            {article.content.split("\n").map((para, idx) => (
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
                <li key={ra.id}>
                  <Link
                    href={`/articles/${category}/${subcategory}/${ra.slug}`}
                    className="text-[var(--brandColor)] hover:underline"
                  >
                    {ra.title}
                  </Link>
                  <p className="text-xs text-[var(--textLight)]">
                    by {ra.author}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest Posts */}
          <div className="bg-white shadow-md rounded-2xl p-6 border border-[var(--borderLight)]">
            <h3 className="text-lg font-semibold text-[var(--textDark)] mb-4">
              Latest Updates
            </h3>
            <ul className="space-y-3 text-[var(--textLight)] text-sm">
              <li>🩺 New Study Reveals Benefits of Omega-3</li>
              <li>❤️ How Exercise Strengthens the Heart</li>
              <li>🧠 Sleep & Brain Health: The Hidden Connection</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
