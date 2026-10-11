"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { BookCategory } from "@/data/gallery";

interface BookPreviewModalProps {
  category: BookCategory;
  onOpenBook: (category: BookCategory) => void;
  onDismiss: () => void;
}

export default function BookPreviewModal({
  category,
  onOpenBook,
  onDismiss,
}: BookPreviewModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Esc key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onDismiss();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onDismiss]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Preview of ${category.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6 backdrop-blur-md transition-all duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onDismiss();
      }}
    >
      <div
        ref={containerRef}
        className="relative mx-auto flex w-full max-w-3xl flex-col items-center gap-7 rounded-2xl border border-white/15 bg-[#0f1422] p-6 sm:p-10 shadow-2xl md:flex-row md:items-stretch lg:gap-10"
      >
        {/* Top Dismiss Button */}
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-[var(--ces-text-muted)] transition-colors hover:bg-white/15 hover:text-white cursor-pointer"
        >
          ✕
        </button>

        {/* Left: Selected Book Visual */}
        <div className="flex shrink-0 items-center justify-center">
          <div
            className="relative flex flex-col justify-between w-[190px] h-[270px] sm:w-[215px] sm:h-[305px] p-6 rounded-r-md rounded-l-xs border border-white/20 shadow-2xl"
            style={{
              backgroundColor: category.coverColor,
              backgroundImage: `linear-gradient(150deg, ${category.coverColor} 0%, ${category.coverColorDark} 100%)`,
            }}
          >
            {/* Physical Book Material Texture: Faint Cloth/Paper Weave Overlay */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay rounded-r-md rounded-l-xs"
              style={{
                backgroundImage: `radial-gradient(rgba(255,255,255,0.9) 0.5px, transparent 0.5px), radial-gradient(rgba(0,0,0,0.8) 0.5px, transparent 0.5px)`,
                backgroundSize: "4px 4px",
                backgroundPosition: "0 0, 2px 2px",
              }}
            />

            {/* Surface Material Highlight */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-r-md rounded-l-xs bg-gradient-to-br from-white/[0.06] via-transparent to-black/25"
            />

            {/* Spine Crease */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-3 rounded-l-xs bg-gradient-to-r from-black/55 via-black/20 to-transparent"
            />
            {/* Border frame */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-3 rounded-xs border border-white/25"
            />

            {/* Book Stamping */}
            <div className="relative z-10 pl-1">
              <span className="font-mono text-[10px] tracking-wider uppercase text-white/70">
                PHOTO ALBUM
              </span>
              <h3 className="mt-2 font-serif text-2xl font-medium tracking-wide text-white leading-tight">
                {category.title}
              </h3>
            </div>

            {/* Center Photo Plate with Letter Overlay */}
            <div className="relative z-10 my-auto flex justify-center pl-1">
              <div className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center overflow-hidden rounded-xs border border-white/30 bg-black/30 shadow-inner">
                {category.coverPhoto && (
                  <Image
                    src={category.coverPhoto}
                    alt=""
                    fill
                    sizes="100px"
                    className="object-cover opacity-75 contrast-125"
                  />
                )}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"
                />
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="relative z-10 pl-1 flex items-center justify-between font-mono text-xs text-white/90">
              <span>{category.yearRange}</span>
              <span className="text-white/60">{category.events.length} events</span>
            </div>
          </div>
        </div>

        {/* Right: Book Details & Action */}
        <div className="flex flex-1 flex-col justify-between text-left">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--ces-gold)]">
              {category.events.length} events · {category.yearRange}
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl font-medium text-[var(--ces-text-primary)]">
              {category.title}
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[var(--ces-text-secondary)]">
              {category.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 pt-4 border-t border-white/[0.08]">
            {/* IMPORTANT: Light/white background and dark text in normal state, dark on hover */}
            <button
              type="button"
              onClick={() => onOpenBook(category)}
              className="flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-gray-900 shadow-md transition-all duration-200 hover:bg-[#151c30] hover:text-white hover:border hover:border-white/30 active:scale-95 cursor-pointer"
            >
              <span>Open Book</span>
              <span className="font-bold">→</span>
            </button>

            <button
              type="button"
              onClick={onDismiss}
              className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-[var(--ces-text-secondary)] transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
            >
              Back to Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
