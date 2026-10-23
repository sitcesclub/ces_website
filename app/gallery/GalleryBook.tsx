"use client";

import Image from "next/image";
import type { BookCategory } from "@/data/gallery";

interface GalleryBookProps {
  category: BookCategory;
  index: number;
  isSelected?: boolean;
  isDimmed?: boolean;
  onSelect: (category: BookCategory) => void;
}

// Subtle resting tilt angles for an organic look
const restingTilts = [
  "-rotate-[1.5deg]",
  "-rotate-[0.5deg]",
  "rotate-[0.8deg]",
  "rotate-[1.8deg]",
];

export default function GalleryBook({
  category,
  index,
  isSelected = false,
  isDimmed = false,
  onSelect,
}: GalleryBookProps) {
  const tiltClass = restingTilts[index % restingTilts.length];

  return (
    <div
      className={`group relative transition-all duration-300 ease-out select-none ${
        isDimmed ? "opacity-25 blur-[1px] pointer-events-none scale-95" : "opacity-100"
      } ${isSelected ? "z-30 scale-105" : "z-10"}`}
    >
      <button
        type="button"
        onClick={() => onSelect(category)}
        aria-label={`Open ${category.title} book`}
        className={`
          relative flex flex-col justify-between
          w-[195px] h-[290px] sm:w-[220px] sm:h-[320px]
          p-5 sm:p-6
          text-left
          rounded-r-md rounded-l-xs
          border border-white/15
          cursor-pointer
          transition-all duration-300 ease-out
          transform-gpu
          ${tiltClass}
          hover:rotate-0 hover:-translate-y-3.5 hover:scale-[1.025] hover:brightness-[1.07]
          shadow-[0_16px_32px_-8px_rgba(0,0,0,0.7)]
          hover:shadow-[0_30px_60px_-10px_rgba(0,0,0,0.92),0_12px_24px_-6px_rgba(0,0,0,0.6)]
        `}
        style={{
          backgroundColor: category.coverColor,
          backgroundImage: `linear-gradient(150deg, ${category.coverColor} 0%, ${category.coverColorDark} 100%)`,
        }}
      >
        {/* Soft, diffuse ambient surface illumination on hover */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-r-md rounded-l-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-transparent via-white/[0.02] to-white/[0.05]"
        />

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

        {/* Surface Material Variation (Subtle diagonal highlight across book cloth) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-r-md rounded-l-xs bg-gradient-to-br from-white/[0.06] via-transparent to-black/25"
        />

        {/* Left Book Spine Binding Crease and Embossed Groove */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-3.5 rounded-l-xs bg-gradient-to-r from-black/55 via-black/20 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-3.5 w-px bg-white/[0.12] shadow-[1px_0_1px_rgba(0,0,0,0.5)]"
        />

        {/* Right Stratified Paper Fore-Edge (simulating 100+ bound physical pages) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-1 -right-[3px] w-[3px] rounded-r-xs bg-gradient-to-b from-[#f5ede2] via-[#e2d6c3] to-[#f5ede2] shadow-[inset_-1px_0_2px_rgba(0,0,0,0.4)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-2 -right-[5px] w-[2px] rounded-r-xs bg-[#ded2bf]"
        />

        {/* Debossed Inset Border Frame */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-3 rounded-xs border border-white/20"
        />

        {/* Book Header: Title */}
        <div className="relative z-10 pl-2">
          <p className="font-mono text-[9px] uppercase tracking-[2px] text-white/70">
            CES Book
          </p>
          <h2 className="mt-1.5 font-serif text-lg sm:text-xl font-medium tracking-wide text-white leading-tight drop-shadow-xs">
            {category.title}
          </h2>
          <div className="mt-1.5 h-0.5 w-7 bg-white/40" />
        </div>

        {/* Center: Photo Placeholder Area with Smooth Monochrome-to-Color Hover & Letter Overlay */}
        <div className="relative z-10 my-auto flex justify-center pl-2">
          <div className="relative flex h-20 w-20 sm:h-22 sm:w-22 items-center justify-center overflow-hidden rounded-xs border border-white/25 bg-black/25 shadow-inner">
            {/* Background Cover Image */}
            {category.coverPhoto && (
              <Image
                src={category.coverPhoto}
                alt=""
                fill
                sizes="90px"
                priority={index < 2}
                className="object-cover grayscale opacity-35 contrast-125 transition-all duration-300 ease-out group-hover:grayscale-0 group-hover:opacity-90"
              />
            )}

            {/* Subtle Vignette on Image */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"
            />
          </div>
        </div>

        {/* Book Footer: Events count and Years */}
        <div className="relative z-10 pl-2 flex items-end justify-between font-mono text-xs text-white/90">
          <div>
            <p className="text-[10px] text-white/60 tracking-wider">
              {category.events.length} Events
            </p>
            <p className="font-semibold text-white tracking-wider">
              {category.yearRange}
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}
