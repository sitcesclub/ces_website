"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import type { BookCategory, GalleryPhoto } from "@/data/gallery";

export interface CategoryPhotoItem {
  photo: GalleryPhoto;
  eventId: string;
  eventTitle: string;
  eventDate: string;
}

interface CategoryPhotoGalleryProps {
  category: BookCategory;
  allCategories: BookCategory[];
  onReturnToGallery: () => void;
  onSelectCategory: (category: BookCategory) => void;
  onPhotoClick: (
    photo: GalleryPhoto,
    index: number,
    eventTitle: string,
    activeItems: CategoryPhotoItem[]
  ) => void;
}

export default function CategoryPhotoGallery({
  category,
  allCategories,
  onReturnToGallery,
  onSelectCategory,
  onPhotoClick,
}: CategoryPhotoGalleryProps) {
  const [selectedEventId, setSelectedEventId] = useState<string>("all");

  // Flatten all photos from all events in this category
  const allPhotoItems: CategoryPhotoItem[] = useMemo(() => {
    const items: CategoryPhotoItem[] = [];
    category.events.forEach((evt) => {
      evt.photos.forEach((ph) => {
        items.push({
          photo: ph,
          eventId: evt.id,
          eventTitle: evt.title,
          eventDate: evt.date,
        });
      });
    });
    return items;
  }, [category]);

  // Filter photos by selected event tab
  const visiblePhotoItems = useMemo(() => {
    if (selectedEventId === "all") return allPhotoItems;
    return allPhotoItems.filter((item) => item.eventId === selectedEventId);
  }, [allPhotoItems, selectedEventId]);

  return (
    <div className="w-full space-y-8 animate-fadeIn">
      {/* Navigation Top Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        {/* Left: Back to Gallery Button & Book Title */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={onReturnToGallery}
            className="group flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 font-mono text-xs text-white transition-all hover:border-white/30 hover:bg-white/[0.1] active:scale-95 cursor-pointer"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>
            <span>Back to Gallery</span>
          </button>

          <span className="hidden sm:inline text-white/20 font-light">|</span>

          <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            <span>{category.title}</span>
            <span className="font-mono text-xs font-normal text-[var(--ces-gold)] bg-[var(--ces-gold)]/10 px-2.5 py-1 rounded-full border border-[var(--ces-gold)]/20">
              {allPhotoItems.length} Photos
            </span>
          </h1>
        </div>

        {/* Right: Category Switcher Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {allCategories.map((cat) => {
            const isCurrent = cat.id === category.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  if (!isCurrent) {
                    setSelectedEventId("all");
                    onSelectCategory(cat);
                  }
                }}
                className={`shrink-0 rounded-full px-3.5 py-1.5 font-mono text-xs transition-all cursor-pointer ${
                  isCurrent
                    ? "bg-white text-gray-950 font-semibold shadow-md"
                    : "border border-white/10 bg-white/[0.03] text-white/70 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Sub-Header: Event Filter Tabs (if category has multiple events) */}
      {category.events.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <span className="font-mono text-xs text-[var(--ces-text-muted)] mr-2 shrink-0">
            Filter by Event:
          </span>

          <button
            type="button"
            onClick={() => setSelectedEventId("all")}
            className={`shrink-0 rounded-lg px-3 py-1.5 font-mono text-xs transition-all cursor-pointer ${
              selectedEventId === "all"
                ? "bg-[var(--ces-gold)]/20 text-[var(--ces-gold)] border border-[var(--ces-gold)]/40 font-semibold"
                : "border border-white/10 bg-white/[0.02] text-white/60 hover:bg-white/[0.06] hover:text-white"
            }`}
          >
            All Events ({allPhotoItems.length})
          </button>

          {category.events.map((evt) => {
            const isActive = selectedEventId === evt.id;
            return (
              <button
                key={evt.id}
                type="button"
                onClick={() => setSelectedEventId(evt.id)}
                className={`shrink-0 rounded-lg px-3 py-1.5 font-mono text-xs transition-all cursor-pointer ${
                  isActive
                    ? "bg-[var(--ces-gold)]/20 text-[var(--ces-gold)] border border-[var(--ces-gold)]/40 font-semibold"
                    : "border border-white/10 bg-white/[0.02] text-white/60 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {evt.title} ({evt.photos.length})
              </button>
            );
          })}
        </div>
      )}

      {/* Modern Responsive Masonry Photo Grid */}
      {visiblePhotoItems.length > 0 ? (
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4 lg:gap-5">
          {visiblePhotoItems.map((item, idx) => (
            <div
              key={`${item.photo.id}-${idx}`}
              className="mb-3 sm:mb-4 lg:mb-5 break-inside-avoid relative group overflow-hidden rounded-xl bg-[#121520] border border-white/[0.08] hover:border-white/25 transition-all duration-300 cursor-pointer shadow-md hover:shadow-2xl"
              onClick={() =>
                onPhotoClick(item.photo, idx, item.eventTitle, visiblePhotoItems)
              }
            >
              {/* Natural Aspect Ratio Photo Rendering */}
              <Image
                src={item.photo.src}
                alt={item.photo.caption || `${item.eventTitle} photo ${idx + 1}`}
                width={800}
                height={600}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                style={{ width: "100%", height: "auto" }}
                className="block rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />

              {/* Minimal Hover Overlay showing Event Title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-3 sm:p-4 pointer-events-none">
                <div className="flex flex-col gap-0.5">
                  <span className="font-mono text-[11px] sm:text-xs font-semibold text-white tracking-wide drop-shadow-md">
                    {item.eventTitle}
                  </span>
                  {item.eventDate && (
                    <span className="font-mono text-[10px] text-white/70">
                      {item.eventDate}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center font-mono text-sm text-[var(--ces-text-muted)]">
          No photos found for this selection.
        </div>
      )}
    </div>
  );
}
