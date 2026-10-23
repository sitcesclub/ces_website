"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import type { GalleryPhoto } from "@/data/gallery";

interface PhotoLightboxModalProps {
  photo: GalleryPhoto;
  eventTitle: string;
  currentIndex: number;
  totalPhotos: number;
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
}

export default function PhotoLightboxModal({
  photo,
  eventTitle,
  currentIndex,
  totalPhotos,
  onPrev,
  onNext,
  onClose,
}: PhotoLightboxModalProps) {
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX - touchEndX;
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        onNext();
      } else {
        onPrev();
      }
    }
    setTouchStartX(null);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Photo from ${eventTitle}`}
      className="fixed inset-0 z-50 flex flex-col justify-between bg-black/94 p-4 sm:p-6 backdrop-blur-xl select-none"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top HUD Controls */}
      <div className="relative z-10 flex w-full items-center justify-between">
        <button
          type="button"
          onClick={onClose}
          aria-label="Back to Gallery"
          className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 font-mono text-xs text-white transition-colors hover:bg-white/20 cursor-pointer"
        >
          <span>←</span>
          <span>Back to Gallery</span>
        </button>

        {/* Counter: e.g. "2 of 23" */}
        <div className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[var(--ces-gold)]">
          {currentIndex + 1} of {totalPhotos}
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition-colors hover:bg-white/20 cursor-pointer"
        >
          ✕
        </button>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex flex-1 items-center justify-center py-4">
        {/* Previous Button */}
        {totalPhotos > 1 && (
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous photo"
            className="absolute left-2 sm:left-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-gray-950 shadow-2xl transition-all hover:bg-white hover:scale-110 active:scale-95 cursor-pointer"
          >
            <span className="text-lg font-bold">←</span>
          </button>
        )}

        {/* Photo Box */}
        <div className="relative max-h-[75vh] max-w-[92vw] sm:max-w-5xl w-full h-[68vh] flex items-center justify-center">
          <Image
            src={photo.src}
            alt={photo.caption || eventTitle}
            fill
            sizes="(max-width: 768px) 95vw, 1200px"
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>

        {/* Next Button */}
        {totalPhotos > 1 && (
          <button
            type="button"
            onClick={onNext}
            aria-label="Next photo"
            className="absolute right-2 sm:right-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-gray-950 shadow-2xl transition-all hover:bg-white hover:scale-110 active:scale-95 cursor-pointer"
          >
            <span className="text-lg font-bold">→</span>
          </button>
        )}
      </div>

      {/* Bottom Caption HUD */}
      <div className="relative z-10 mx-auto max-w-xl text-center">
        <h3 className="font-serif text-lg sm:text-xl font-medium text-white">
          {eventTitle}
        </h3>
        {photo.caption && (
          <p className="mt-1.5 text-xs sm:text-sm text-[var(--ces-text-secondary)]">
            {photo.caption}
          </p>
        )}
      </div>
    </div>
  );
}

