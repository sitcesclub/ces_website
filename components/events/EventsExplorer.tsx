"use client";

import { useState } from "react";
import EventCard from "./EventCard";
import { mouseGlow, glowOverlay } from "@/lib/mouseGlow";
import type { EventItem } from "@/data/events";

function SectionHeader({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-8 sm:mb-10">
      <p className="mb-2 text-[10px] font-medium uppercase tracking-[3px] text-[#7D89B5] sm:text-xs sm:tracking-[4px]">
        {kicker}
      </p>

      <h2 className="text-[28px] font-medium leading-[1.05] tracking-[-1px] text-[#E8EEFF] sm:text-[36px] lg:text-[40px]">
        {title}
      </h2>

      <div className="mt-3 h-px w-16 bg-[#B8C5E3]/50 sm:w-20" />

      <p className="mt-4 max-w-xl text-[12px] leading-[1.6] text-[#8F9CC2] sm:text-[13px]">
        {subtitle}
      </p>
    </div>
  );
}

function EventGrid({
  events,
  emptyMessage,
}: {
  events: EventItem[];
  emptyMessage: string;
}) {
  if (events.length === 0) {
    return (
      <div
        onMouseMove={mouseGlow}
        className="group relative overflow-hidden rounded-xl border border-dashed border-white/[0.08] transition-all duration-300 hover:border-[#6FA8FF]/40 hover:bg-white/[0.02]"
      >
        <div className={glowOverlay} />

        <p className="relative px-4 py-10 text-center text-[13px] text-[#6F7DA8] transition-colors duration-300 group-hover:text-[#8F9CC2]">
          {emptyMessage}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event, index) => (
        <EventCard key={event.id} event={event} index={index} />
      ))}
    </div>
  );
}

export default function EventsExplorer({
  categories,
  upcoming,
  past,
}: {
  categories: { key: string; label: string }[];
  upcoming: EventItem[];
  past: EventItem[];
}) {
  const [active, setActive] = useState("all");

  const filteredUpcoming =
    active === "all" ? upcoming : upcoming.filter((e) => e.category === active);
  const filteredPast =
    active === "all" ? past : past.filter((e) => e.category === active);

  return (
    <>
      {/* ============================================================
          CATEGORY FILTERS
      ============================================================ */}
      <div
        id="filters"
        className="scroll-mt-28 border-y border-white/[0.06] bg-white/[0.015]"
      >
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-4 sm:gap-3 sm:px-6 sm:py-5 lg:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActive(cat.key)}
              aria-pressed={active === cat.key}
              className={`
                shrink-0 rounded-full border px-4 py-2
                text-[11px] font-medium tracking-[0.5px] sm:text-[12px]
                transition-all duration-200
                ${
                  active === cat.key
                    ? "border-transparent bg-[#6FA8FF] text-[#050408] shadow-[0_8px_24px_-10px_rgba(111,168,255,0.65)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-10px_rgba(111,168,255,0.8)]"
                    : "border-white/[0.10] bg-white/[0.03] text-[#8F9CC2] hover:-translate-y-0.5 hover:border-[#6FA8FF]/55 hover:bg-white/[0.07] hover:text-[#E8EEFF] hover:shadow-[0_8px_22px_-10px_rgba(111,168,255,0.55)]"
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* ============================================================
          UPCOMING EVENTS
      ============================================================ */}
      <section
        id="upcoming"
        className="relative z-10 scroll-mt-28 border-b border-white/[0.03] px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker={"WHAT'S NEXT"}
            title="Upcoming Events"
            subtitle="New editions are on the horizon — stay tuned."
          />

          <EventGrid
            events={filteredUpcoming}
            emptyMessage="No upcoming events right now — stay tuned for the next edition."
          />
        </div>
      </section>

      {/* ============================================================
          PAST EVENTS
      ============================================================ */}
      <section
        id="past"
        className="relative z-10 scroll-mt-28 px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="THE ARCHIVE"
            title="Past Events"
            subtitle="Relive the highlights, view scoreboards and explore records of our previous activities."
          />

          <EventGrid
            events={filteredPast}
            emptyMessage="No past events in this category yet."
          />
        </div>
      </section>
    </>
  );
}
