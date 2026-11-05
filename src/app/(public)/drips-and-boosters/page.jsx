import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { dripGroups } from "@/lib/dripsAndBoosters";

export const metadata = { title: "Drips and Boosters" };

export default function DripsAndBoostersPage() {
  return (
    <div className="min-h-screen bg-[var(--bgLight)] pb-24">
      <div className="bg-[var(--brandColor)] px-4 pt-40 pb-12">
        <div className="container mx-auto">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            Drips and Boosters
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white/80 md:text-base">
            Browse our IV drips and vitamin boosters.
          </p>
        </div>
      </div>

      <div className="container mx-auto space-y-12 px-4 pt-10">
        {dripGroups.map((group) => (
          <section key={group.title}>
            <h2 className="mb-4 text-[11px] font-bold uppercase tracking-widest text-[var(--textMuted)]">
              {group.title}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {group.items.map((service) => (
                <Link
                  key={service.slug}
                  href={`/drips-and-boosters/${service.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-[var(--borderSoft)] bg-white p-5 transition-colors hover:border-[var(--brandColor)]"
                >
                  <p className="text-sm font-bold text-[var(--textDark)] group-hover:text-[var(--brandColor)]">
                    {service.name}
                  </p>
                  <ArrowRight
                    size={16}
                    className="shrink-0 text-[var(--textMuted)] group-hover:text-[var(--brandColor)]"
                  />
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}