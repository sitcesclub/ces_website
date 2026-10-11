"use client";

import type { BookCategory } from "@/data/gallery";
import GalleryBook from "./GalleryBook";

interface BookshelfStageProps {
  categories: BookCategory[];
  selectedCategoryId: string | null;
  onSelectCategory: (category: BookCategory) => void;
}

export default function BookshelfStage({
  categories,
  selectedCategoryId,
  onSelectCategory,
}: BookshelfStageProps) {
  return (
    <div className="relative mx-auto w-full max-w-6xl py-6 sm:py-10">
      {/* 3D Perspective Stage Container */}
      <div
        className="relative flex justify-center [perspective:1200px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Desktop / Tablet Books Container */}
        <div className="hidden md:flex items-end justify-center gap-6 lg:gap-10 pb-2">
          {categories.map((category, index) => {
            const isSelected = selectedCategoryId === category.id;
            const isDimmed = Boolean(selectedCategoryId && !isSelected);

            return (
              <GalleryBook
                key={category.id}
                category={category}
                index={index}
                isSelected={isSelected}
                isDimmed={isDimmed}
                onSelect={onSelectCategory}
              />
            );
          })}
        </div>

        {/* Mobile Horizontal Snap-Scroll Carousel */}
        <div className="flex md:hidden w-full overflow-x-auto px-4 pb-6 snap-x snap-mandatory gap-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((category, index) => {
            const isSelected = selectedCategoryId === category.id;
            const isDimmed = Boolean(selectedCategoryId && !isSelected);

            return (
              <div
                key={category.id}
                className="shrink-0 snap-center first:pl-2 last:pr-2"
              >
                <GalleryBook
                  category={category}
                  index={index}
                  isSelected={isSelected}
                  isDimmed={isDimmed}
                  onSelect={onSelectCategory}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Architectural Shelf Ledge */}
      <div className="relative mt-[-4px] sm:mt-[-6px] w-full px-2 sm:px-6">
        {/* Top Shelf Edge Highlight */}
        <div className="h-3 w-full rounded-t-[3px] border-t border-white/20 bg-gradient-to-r from-white/[0.06] via-white/[0.14] to-white/[0.06]" />

        {/* Front Shelf Drop Face with Ambient Shadow */}
        <div className="h-6 sm:h-7 w-full border-t border-white/[0.06] bg-gradient-to-b from-[#161a2b] to-[#090b14] shadow-[0_24px_45px_-8px_rgba(0,0,0,0.85)]" />

        {/* Ambient Ground Occlusion Glow */}
        <div className="pointer-events-none mx-auto -mt-3 h-6 w-5/6 rounded-full bg-black/60 blur-xl" />
      </div>

      {/* Collections Subtitle Below Shelf */}
      <div className="mt-7 flex flex-col items-center justify-center text-center">
        <p className="font-mono text-xs tracking-wider text-[var(--ces-text-secondary)]">
          Four collections of moments from CES, 2024–2026
        </p>

        {/* Mobile hint */}
        <div className="mt-1.5 flex items-center gap-1.5 md:hidden text-[10px] font-mono text-[var(--ces-text-muted)]">
          <span>Swipe sideways to see more</span>
          <span>→</span>
        </div>
      </div>
    </div>
  );
}
