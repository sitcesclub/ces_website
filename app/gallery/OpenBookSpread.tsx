"use client";

import { useEffect, useCallback } from "react";
import type { BookCategory, GalleryPhoto } from "@/data/gallery";
import AlbumEventSpread from "./EditorialTemplates";

interface OpenBookSpreadProps {
  category: BookCategory;
  allCategories: BookCategory[];
  currentEventIndex: number;
  onEventChange: (index: number) => void;
  onSelectCategory: (category: BookCategory) => void;
  onReturnToGallery: () => void;
  onPhotoClick: (photo: GalleryPhoto, index: number, eventTitle: string) => void;
}

export default function OpenBookSpread({
  category,
  allCategories,
  currentEventIndex,
  onEventChange,
  onSelectCategory,
  onReturnToGallery,
  onPhotoClick,
}: OpenBookSpreadProps) {
  // Map category events into page spreads (up to 4 photos per spread)
  const spreads = category.events.flatMap((event, eventIndex) => {
    const totalPages = Math.max(1, Math.ceil(event.photos.length / 4));
    return Array.from({ length: totalPages }, (_, pageIndex) => ({
      eventIndex,
      event,
      pageIndex,
      totalPages,
      photos: event.photos.slice(pageIndex * 4, pageIndex * 4 + 4),
      photoStartOffset: pageIndex * 4,
    }));
  });

  const currentSpread = spreads[currentEventIndex] || spreads[0];
  const currentEvent = currentSpread?.event;

  const canGoPrevious = currentEventIndex > 0;
  const canGoNext = currentEventIndex < spreads.length - 1;

  const handlePrevious = useCallback(() => {
    if (canGoPrevious) onEventChange(currentEventIndex - 1);
  }, [canGoPrevious, currentEventIndex, onEventChange]);

  const handleNext = useCallback(() => {
    if (canGoNext) onEventChange(currentEventIndex + 1);
  }, [canGoNext, currentEventIndex, onEventChange]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onReturnToGallery();
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onReturnToGallery, handlePrevious, handleNext]);

  return (
    <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-5 py-2 sm:py-4">
      {/* ===================================================================
          TOP BAR
      =================================================================== */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-2 sm:px-4">
        {/* Back to Gallery */}
        <button
          type="button"
          onClick={onReturnToGallery}
          aria-label="Back to Gallery"
          className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs sm:text-sm font-medium text-white transition-all hover:bg-white/15 hover:border-white/30 cursor-pointer active:scale-95"
        >
          <span>←</span>
          <span>Back to Gallery</span>
        </button>

        {/* Clean Header Indicator: "Code Bites 4.0 · 2024 · Page 1 of 6" */}
        <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 font-mono text-xs sm:text-sm text-[var(--ces-text-primary)]">
          <span className="font-semibold text-white">{currentEvent?.title}</span>
          <span className="mx-2 text-white/30">·</span>
          <span className="text-[var(--ces-gold)]">{currentEvent?.year}</span>
          {currentSpread && currentSpread.totalPages > 1 && (
            <>
              <span className="mx-2 text-white/30">·</span>
              <span className="text-[var(--ces-text-muted)]">
                Page {currentSpread.pageIndex + 1} of {currentSpread.totalPages}
              </span>
            </>
          )}
        </div>

        {/* Quick Category Switcher */}
        <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] p-1">
          {allCategories.map((cat) => {
            const isActive = cat.id === category.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat)}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors cursor-pointer ${
                  isActive
                    ? "bg-white text-gray-900 font-semibold shadow-xs"
                    : "text-[var(--ces-text-muted)] hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: cat.coverColor }}
                />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ===================================================================
          OPEN BOOK CONTAINER
      =================================================================== */}
      <div className="relative mx-auto w-full flex items-center">
        {/* Large Obvious Previous Button (Left Side) */}
        <button
          type="button"
          onClick={handlePrevious}
          disabled={!canGoPrevious}
          aria-label="Previous page spread"
          className={`
            hidden md:flex absolute -left-6 lg:-left-9 z-30
            h-13 w-13 lg:h-14 lg:w-14
            items-center justify-center rounded-full
            shadow-2xl border transition-all duration-200 cursor-pointer
            ${
              canGoPrevious
                ? "bg-white text-gray-900 border-white/40 hover:scale-105 active:scale-95 hover:bg-[#f0f3fa]"
                : "bg-white/10 text-white/25 border-white/5 pointer-events-none opacity-40"
            }
          `}
        >
          <span className="text-xl font-bold">←</span>
        </button>

        {/* Large Obvious Next Button (Right Side) */}
        <button
          type="button"
          onClick={handleNext}
          disabled={!canGoNext}
          aria-label="Next page spread"
          className={`
            hidden md:flex absolute -right-6 lg:-right-9 z-30
            h-13 w-13 lg:h-14 lg:w-14
            items-center justify-center rounded-full
            shadow-2xl border transition-all duration-200 cursor-pointer
            ${
              canGoNext
                ? "bg-white text-gray-900 border-white/40 hover:scale-105 active:scale-95 hover:bg-[#f0f3fa]"
                : "bg-white/10 text-white/25 border-white/5 pointer-events-none opacity-40"
            }
          `}
        >
          <span className="text-xl font-bold">→</span>
        </button>

        {/* Outer Book Cover (Framing the pages with tactile material) */}
        <div
          className="relative w-full rounded-2xl p-2.5 sm:p-5 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95)] border border-white/20"
          style={{
            backgroundColor: category.coverColor,
            backgroundImage: `linear-gradient(150deg, ${category.coverColor} 0%, ${category.coverColorDark} 100%)`,
          }}
        >
          {/* Subtle cloth weave on the visible outer cover trim */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay rounded-2xl"
            style={{
              backgroundImage: `radial-gradient(rgba(255,255,255,0.9) 0.5px, transparent 0.5px), radial-gradient(rgba(0,0,0,0.8) 0.5px, transparent 0.5px)`,
              backgroundSize: "4px 4px",
              backgroundPosition: "0 0, 2px 2px",
            }}
          />

          {/* Inner Warm Paper Pages (#f8f6f0) */}
          <div className="relative w-full rounded-lg bg-[#f8f6f0] border border-[#e5decb] shadow-inner overflow-hidden min-h-[520px] lg:min-h-[580px]">
            {/* Extremely Subtle Paper Grain Texture Overlay */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-multiply z-1"
              style={{
                backgroundImage: `radial-gradient(#7c6b52 0.6px, transparent 0.6px), radial-gradient(#5a4a35 0.6px, transparent 0.6px)`,
                backgroundSize: "6px 6px",
                backgroundPosition: "0 0, 3px 3px",
              }}
            />

            {/* Subtle Page Lighting: Natural ambient highlight towards outer margins */}
            <div
              aria-hidden="true"
              className="hidden md:block pointer-events-none absolute inset-y-0 left-0 w-24 z-1 bg-gradient-to-r from-white/30 to-transparent"
            />
            <div
              aria-hidden="true"
              className="hidden md:block pointer-events-none absolute inset-y-0 right-0 w-24 z-1 bg-gradient-to-l from-white/30 to-transparent"
            />

            {/* Desktop Two-Page Central Spine Crease & Shadow */}
            <div
              aria-hidden="true"
              className="hidden md:block pointer-events-none absolute inset-y-0 left-1/2 w-16 -translate-x-1/2 z-20 bg-gradient-to-r from-transparent via-black/[0.13] to-transparent"
            />
            <div
              aria-hidden="true"
              className="hidden md:block pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 z-20 bg-[#d4c9b6]"
            />

            {/* Desktop Layout */}
            <div className="hidden md:block h-full w-full">
              {currentSpread && (
                <AlbumEventSpread
                  event={currentSpread.event}
                  photos={currentSpread.photos}
                  onPhotoClick={(photo, localIndex) =>
                    onPhotoClick(
                      photo,
                      currentSpread.photoStartOffset + localIndex,
                      currentSpread.event.title
                    )
                  }
                  isMobile={false}
                />
              )}
            </div>

            {/* Mobile Layout */}
            <div className="block md:hidden p-4">
              {currentSpread && (
                <AlbumEventSpread
                  event={currentSpread.event}
                  photos={currentSpread.photos}
                  onPhotoClick={(photo, localIndex) =>
                    onPhotoClick(
                      photo,
                      currentSpread.photoStartOffset + localIndex,
                      currentSpread.event.title
                    )
                  }
                  isMobile={true}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Obvious Prev / Next Buttons */}
      <div className="flex md:hidden items-center justify-between gap-3 px-2 pt-2">
        <button
          type="button"
          disabled={!canGoPrevious}
          onClick={handlePrevious}
          className={`flex-1 flex items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold border ${
            canGoPrevious
              ? "bg-white text-gray-900 border-white"
              : "bg-white/5 text-white/25 border-white/5 pointer-events-none"
          }`}
        >
          <span>←</span>
          <span>Previous</span>
        </button>

        <button
          type="button"
          disabled={!canGoNext}
          onClick={handleNext}
          className={`flex-1 flex items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold border ${
            canGoNext
              ? "bg-white text-gray-900 border-white"
              : "bg-white/5 text-white/25 border-white/5 pointer-events-none"
          }`}
        >
          <span>Next</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
}
