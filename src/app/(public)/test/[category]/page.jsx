import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight } from "lucide-react";
import { testCategories, DEFAULT_ITEM_HREF } from "./data/categories";

export function generateStaticParams() {
  return Object.keys(testCategories).map((category) => ({ category }));
}

export default async function TestCategoryPage({ params }) {
  const { category } = await params;
  const data = testCategories[category];

  if (!data) notFound();

  return (
    <div className="min-h-screen bg-(--bgLight) pb-24">
      <div className="bg-(--brandColor) px-4 pt-40 pb-12">
        <div className="container mx-auto">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            {data.title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white/80 md:text-base">
            {data.description}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <nav className="flex flex-wrap items-center gap-2 py-8 text-sm text-(--textDark)">
          <Link href="/" className="hover:text-(--brandColor)">
            Home
          </Link>
          <ChevronRight size={14} />
          <Link href="/test" className="hover:text-(--brandColor)">
            Test
          </Link>
          <ChevronRight size={14} />
          <span>{data.title}</span>
        </nav>

        <div className="space-y-12">
          {data.groups.map((group) => (
            <section key={group.title}>
              <h2 className="mb-4 text-[11px] font-bold uppercase tracking-widest text-(--textMuted)">
                {group.title}
              </h2>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {group.items.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href || DEFAULT_ITEM_HREF}
                    className="group flex items-start justify-between gap-3 rounded-xl border border-(--borderSoft) bg-white p-5 transition-colors hover:border-(--brandColor)"
                  >
                    <div>
                      <p className="text-sm font-bold text-(--textDark) group-hover:text-(--brandColor)">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs text-(--textLight)">
                        {item.subtitle}
                      </p>
                    </div>
                    <ArrowRight
                      size={16}
                      className="mt-1 shrink-0 text-(--textMuted) group-hover:text-(--brandColor)"
                    />
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
