import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pastEvents, categoryColors } from "@/data/events";

export function generateStaticParams() {
  return pastEvents.map((event) => ({ id: event.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const event = pastEvents.find((e) => e.id === id);

  if (!event) return { title: "Event not found | Computer Engineers' Society" };

  return {
    title: `${event.title} | Computer Engineers' Society`,
    description: event.description,
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = pastEvents.find((e) => e.id === id);

  if (!event) notFound();

  const color = categoryColors[event.category];

  return (
    <div className="px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Back */}
        <Link
          href="/events"
          className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[3px] text-[#7D89B5] transition-colors hover:text-[#6FA8FF] sm:text-[11px] sm:tracking-[4px]"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          All Events
        </Link>

        {/* Header */}
        <header className="mt-8 sm:mt-10">
          <span
            className="inline-block rounded-full border px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[2px] backdrop-blur-sm"
            style={{
              color,
              borderColor: `${color}55`,
              backgroundColor: "rgba(5,4,8,0.6)",
            }}
          >
            {event.categoryLabel}
          </span>

          <h1 className="mt-5 text-[clamp(1.9rem,4.5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-[#E8EEFF]">
            {event.title}
          </h1>

          <p className="mt-3 text-[14px] font-medium text-[#9AA9D6] sm:text-[15px]">
            {event.subtitle}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[2px] text-[#6F7DA8] sm:text-[12px]">
            <span>{event.date}</span>

            {event.location && (
              <>
                <span className="h-1 w-1 rounded-full bg-[#6F7DA8]/60" />
                <span>{event.location}</span>
              </>
            )}
          </div>

          <div className="mt-6 h-px w-16 bg-[#B8C5E3]/50 sm:w-20" />
        </header>

        {/* Description */}
        <section className="mt-8">
          <p className="max-w-3xl text-[14px] leading-[1.75] text-[#8F9CC2] sm:text-[15px]">
            {event.description}
          </p>
        </section>

        {/* Gallery — only when photos exist */}
        {event.gallery.length > 0 && (
          <section className="mt-12">
            <p className="mb-2 text-[10px] font-medium uppercase tracking-[3px] text-[#7D89B5] sm:text-xs sm:tracking-[4px]">
              Event Gallery
            </p>

            <h2 className="text-[24px] font-medium leading-[1.05] tracking-[-1px] text-[#E8EEFF] sm:text-[30px]">
              {event.title} — Photos
            </h2>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
              {event.gallery.map((src, i) => (
                <div
                  key={src}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.015] transition-all duration-300 hover:-translate-y-1 hover:border-[#6FA8FF]/55 hover:shadow-[0_18px_44px_-20px_rgba(111,168,255,0.4)]"
                >
                  <Image
                    src={src}
                    alt={`${event.title} — photo ${i + 1}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom back link */}
        <div className="mt-14">
          <Link
            href="/events"
            className="group inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.03] px-5 py-2.5 text-[13px] font-medium text-[#8F9CC2] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#6FA8FF]/55 hover:bg-white/[0.07] hover:text-[#E8EEFF] hover:shadow-[0_8px_22px_-10px_rgba(111,168,255,0.55)]"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Browse all events
          </Link>
        </div>
      </div>
    </div>
  );
}
