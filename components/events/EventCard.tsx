import Image from "next/image";
import Link from "next/link";
import { categoryColors, type EventItem } from "@/data/events";
import { mouseGlow, glowOverlay } from "@/lib/mouseGlow";

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5 shrink-0 text-[#6F7DA8]"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5 shrink-0 text-[#6F7DA8]"
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function EventCard({
  event,
  index,
}: {
  event: EventItem;
  index: number;
}) {
  const color = categoryColors[event.category];
  const number = String(index + 1).padStart(2, "0");
  const cover = event.cover ?? event.gallery[0];

  return (
    <article
      id={event.id}
      onMouseMove={mouseGlow}
      className="group relative flex scroll-mt-28 flex-col overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.015] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#6FA8FF]/55 hover:bg-white/[0.025] hover:shadow-[0_24px_60px_-24px_rgba(111,168,255,0.45)]"
    >
      <div className="relative h-36 overflow-hidden border-b border-white/[0.04] sm:h-44">
        {cover ? (
          <>
            <Image
              src={cover}
              alt={`${event.title} — event photo`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="absolute bottom-1 left-4 select-none text-[60px] font-medium leading-none tracking-[-5px] text-white/[0.035] sm:bottom-3 sm:left-6 sm:text-[80px]">
              {number}
            </div>
            <div className="absolute right-4 top-4 sm:right-6 sm:top-6">
              <span className="font-mono text-[9px] tracking-[2px] text-[#6F7DA8] sm:text-[10px]">
                CES / {number}
              </span>
            </div>
          </>
        )}

        <span
          className="absolute left-3 top-3 rounded-full border px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[1.5px] backdrop-blur-sm sm:left-4 sm:top-4 sm:text-[10px]"
          style={{
            color,
            borderColor: `${color}55`,
            backgroundColor: "rgba(5,4,8,0.7)",
          }}
        >
          {event.categoryLabel}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <h3 className="text-[18px] font-medium leading-tight tracking-[-0.3px] text-[#E8EEFF] transition-colors group-hover:text-[#C9D8FF] sm:text-[20px]">
          {event.title}
        </h3>

        <p
          className="mt-1 text-[11px] font-medium sm:text-[12px]"
          style={{ color }}
        >
          {event.subtitle}
        </p>

        <div className="mt-3 space-y-1.5">
          <div className="flex items-center gap-2 text-[11px] text-[#8F9CC2] sm:text-[12px]">
            <CalendarIcon />
            <span>{event.date}</span>
          </div>

          {event.location && (
            <div className="flex items-center gap-2 text-[11px] text-[#8F9CC2] sm:text-[12px]">
              <MapPinIcon />
              <span>{event.location}</span>
            </div>
          )}
        </div>

        <p className="mt-3 line-clamp-3 text-[12px] leading-[1.6] text-[#8F9CC2] sm:text-[13px]">
          {event.description}
        </p>

        <div className="mt-auto flex items-center gap-2 pt-4 text-[12px] font-medium text-[#9AA9D6] transition-colors group-hover:text-[#E8EEFF] sm:text-[13px]">
          View Details
          <ArrowRight />
        </div>
      </div>

      {/* Cursor spotlight */}
      <div className={glowOverlay} />


      {/* Whole card opens the event's mini page */}
      <Link
        href={`/events/${event.id}`}
        aria-label={`View details: ${event.title}`}
        className="absolute inset-0 z-30 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6FA8FF]"
      />
    </article>
  );
}
