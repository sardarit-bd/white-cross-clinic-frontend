import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  ChevronRight,
  ClipboardList,
  Clock,
  MapPin,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { allServices, getService } from "@/lib/dripsAndBoosters";
const STEPS = [
  {
    icon: CalendarCheck,
    title: "Book your visit",
    text: "Choose Book Now and pick a time that suits you.",
  },
  {
    icon: ClipboardList,
    title: "Quick check",
    text: "A clinician confirms the treatment is suitable for you.",
  },
  {
    icon: Stethoscope,
    title: "Your treatment",
    text: "Your treatment is given by a qualified clinician.",
  },
];

const CARD =
  "rounded-[var(--radius-xl)] border border-[var(--borderLight)] bg-white p-6 shadow-[var(--shadowCard)] md:p-8";

function SectionCard({ title, children }) {
  return (
    <section className={CARD}>
      <h2 className="text-xl font-extrabold text-(--textDark)">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export function generateStaticParams() {
  return allServices.map((s) => ({ slug: s.slug }));
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const priceLabel =
    service.price != null ? `£${service.price.toFixed(2)}` : "Price on request";

  const paragraphs = service.description.length
    ? service.description
    : ["Details for this service will be added soon."];

  const related = allServices
    .filter((s) => s.type === service.type && s.slug !== service.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[var(--bgLight)] pb-24">
      {/* HERO */}
      <div className="relative overflow-hidden bg-[var(--brandColor)] px-4 pt-40 pb-24">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

        <div className="relative container mx-auto">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link href="/drips-and-boosters" className="hover:text-white">
              Drips and Boosters
            </Link>
            <ChevronRight size={14} />
            <span className="text-white">{service.name}</span>
          </nav>

          <span className="inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
            {service.type}
          </span>
          <h1 className="mt-4 text-4xl font-extrabold text-white md:text-6xl">
            {service.name}
          </h1>
          {service.subtitle && (
            <p className="mt-4 max-w-3xl text-base text-white/85 md:text-lg">
              {service.subtitle}
            </p>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="rounded-full bg-white px-6 py-3 text-sm font-extrabold text-[var(--brandColor)]">
              {priceLabel}
            </span>
            {service.duration && (
              <span className="flex items-center gap-2 text-sm font-semibold text-white">
                <Clock size={18} />
                {service.duration}
              </span>
            )}
            <Link
              href="/appointment"
              className="flex items-center gap-2 rounded-full border border-white px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-[var(--brandColor)]"
            >
              Book Now
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="relative z-10 container mx-auto -mt-10 grid gap-8 px-4 lg:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          <SectionCard title="Overview">
            <div className="space-y-4 text-sm leading-7 text-[var(--textDark)]">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </SectionCard>

          {service.includes.length > 0 && (
            <SectionCard title="What's included">
              <div className="flex flex-wrap gap-3">
                {service.includes.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--borderSoft)] bg-[var(--bgLight)] px-4 py-2 text-sm font-semibold text-[var(--textDark)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </SectionCard>
          )}

          {service.benefits.length > 0 && (
            <SectionCard title="Key benefits">
              <ul className="grid gap-4 sm:grid-cols-2">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-[var(--textDark)]">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brandColorLight)] text-[var(--brandColor)]">
                      <Check size={14} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </SectionCard>
          )}

          <SectionCard title="How it works">
            <div className="grid gap-6 md:grid-cols-3">
              {STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.title}>
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brandColorLight)] text-[var(--brandColor)]">
                        <Icon size={22} />
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest text-[var(--textMuted)]">
                        Step {i + 1}
                      </span>
                    </div>
                    <p className="mt-3 text-sm font-bold text-[var(--textDark)]">
                      {step.title}
                    </p>
                    <p className="mt-1 text-sm text-[var(--textLight)]">{step.text}</p>
                  </div>
                );
              })}
            </div>
          </SectionCard>

          <SectionCard title="Frequently asked questions">
            <div className="divide-y divide-[var(--borderSoft)] border-y border-[var(--borderSoft)]">
              {service.faqs.map((faq) => (
                <details key={faq.q} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-[var(--textDark)] [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <ChevronRight
                      size={18}
                      className="shrink-0 text-[var(--textMuted)] transition-transform group-open:rotate-90"
                    />
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-[var(--textLight)]">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Cancellation policy">
            <p className="text-sm text-[var(--textDark)]">{service.cancellation}</p>
          </SectionCard>
        </div>

        {/* STICKY BOOKING CARD */}
        <aside className="h-fit lg:sticky lg:top-36">
          <div className={CARD}>
            <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--textMuted)]">
              Price
            </p>
            <p className="mt-1 text-3xl font-extrabold text-[var(--textDark)]">
              {priceLabel}
            </p>

            <div className="mt-6 border-t border-[var(--borderSoft)] pt-6">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-[var(--textMuted)]">
                Available as
              </p>
              <ul className="space-y-2">
                {service.locations.map((loc) => (
                  <li key={loc} className="flex items-center gap-3 text-sm text-[var(--textDark)]">
                    <MapPin size={16} className="text-[var(--brandColor)]" />
                    {loc}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/appointment"
              className="mt-6 block rounded-lg bg-[var(--brandColor)] py-3 text-center text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              Book Now
            </Link>

            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-[var(--textLight)]">
              <ShieldCheck size={14} className="text-[var(--brandColor)]" />
              {service.cancellation}
            </p>
          </div>
        </aside>
      </div>

      {/* RELATED */}
      {related.length > 0 && (
        <div className="container mx-auto mt-16 px-4">
          <h2 className="mb-5 text-2xl font-extrabold text-[var(--textDark)]">
            More {service.type}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/drips-and-boosters/${s.slug}`}
                className="group flex items-center justify-between gap-3 rounded-xl border border-[var(--borderSoft)] bg-white p-5 transition-colors hover:border-[var(--brandColor)]"
              >
                <div>
                  <p className="text-sm font-bold text-[var(--textDark)] group-hover:text-[var(--brandColor)]">
                    {s.name}
                  </p>
                  <p className="mt-1 text-xs text-[var(--textLight)]">
                    {s.price != null ? `£${s.price.toFixed(2)}` : "Price on request"}
                  </p>
                </div>
                <ArrowRight
                  size={16}
                  className="shrink-0 text-[var(--textMuted)] group-hover:text-[var(--brandColor)]"
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}