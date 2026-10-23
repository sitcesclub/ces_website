"use client";

import Image from "next/image";
import type { GalleryEvent, GalleryPhoto } from "@/data/gallery";

interface AlbumPageProps {
  event: GalleryEvent;
  photos?: GalleryPhoto[];
  onPhotoClick: (photo: GalleryPhoto, index: number) => void;
  isMobile?: boolean;
}

export default function AlbumEventSpread({
  event,
  photos: photosProp,
  onPhotoClick,
  isMobile = false,
}: AlbumPageProps) {
  const photos = photosProp || event.photos;
  const p1 = photos[0];
  const p2 = photos[1];
  const p3 = photos[2];
  const p4 = photos[3];

  // Mobile Single-Page Album View
  if (isMobile) {
    return (
      <div className="flex flex-col gap-5 text-left p-1">
        {/* Event Header */}
        <div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#8c6b2d]">
            {event.date} {event.location ? `· ${event.location}` : ""}
          </span>
          <h3 className="mt-1 font-serif text-2xl font-medium text-[#1a202c]">
            {event.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#4a5568]">
            {event.description}
          </p>
        </div>

        {/* Photos Grid */}
        <div className="flex flex-col gap-4">
          {photos.map((photo, i) => (
            <div
              key={photo.id}
              onClick={() => onPhotoClick(photo, i)}
              className="group relative cursor-pointer overflow-hidden rounded-md border border-[#dcd4c5] bg-white p-2 shadow-xs transition-transform duration-200 hover:scale-[1.01]"
            >
              <div className="relative h-48 sm:h-52 w-full overflow-hidden rounded-xs bg-[#e8e4dc]">
                <Image
                  src={photo.src}
                  alt={photo.caption || event.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
                  className={photo.objectFit === "contain" ? "object-contain" : "object-cover"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Desktop Two-Page Spread on Warm Paper (#f8f6f0)
  return (
    <div className="grid grid-cols-2 h-full w-full">
      {/* LEFT PAGE: Event Story & Primary Photo */}
      <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-11 border-r border-[#ded5c6]/70 text-left">
        <div>
          {/* Date & Location */}
          <div className="flex items-center gap-2 font-mono text-xs font-medium text-[#8c6b2d]">
            <span>{event.date}</span>
            {event.location && (
              <>
                <span className="text-[#a0aec0]">·</span>
                <span>{event.location}</span>
              </>
            )}
          </div>

          {/* Event Title */}
          <h3 className="mt-2 font-serif text-2xl lg:text-3xl font-medium tracking-tight text-[#1a202c]">
            {event.title}
          </h3>

          {/* Event Description */}
          <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#4a5568] max-w-md">
            {event.description}
          </p>

          {/* Photo 1 (Primary Photo) */}
          {p1 && (
            <div
              onClick={() => onPhotoClick(p1, 0)}
              className="group relative mt-6 cursor-pointer rounded-sm border border-[#dcd4c5] bg-white p-2 shadow-sm transition-all duration-200 hover:shadow-md hover:border-[#b8ad99]"
            >
              <div className="relative h-52 lg:h-56 w-full overflow-hidden rounded-xs bg-[#e8e4dc]">
                <Image
                  src={p1.src}
                  alt={p1.caption || event.title}
                  fill
                  sizes="500px"
                  style={p1.objectPosition ? { objectPosition: p1.objectPosition } : undefined}
                  className={`${p1.objectFit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-300 group-hover:scale-102`}
                />
              </div>
            </div>
          )}
        </div>

        {/* Page Footer */}
        <div className="pt-4 border-t border-[#e2d8c7] font-mono text-[11px] text-[#718096]">
          <span>{event.year} Moments</span>
        </div>
      </div>

      {/* RIGHT PAGE: Secondary Photos (2 to 3 photos) */}
      <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-11 pl-9 lg:pl-11 text-left">
        <div className="flex flex-col gap-4">
          {/* Photo 2 */}
          {p2 && (
            <div
              onClick={() => onPhotoClick(p2, 1)}
              className="group relative cursor-pointer rounded-sm border border-[#dcd4c5] bg-white p-2 shadow-sm transition-all duration-200 hover:shadow-md hover:border-[#b8ad99]"
            >
              <div className="relative h-40 lg:h-44 w-full overflow-hidden rounded-xs bg-[#e8e4dc]">
                <Image
                  src={p2.src}
                  alt={p2.caption || event.title}
                  fill
                  sizes="500px"
                  style={p2.objectPosition ? { objectPosition: p2.objectPosition } : undefined}
                  className={`${p2.objectFit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-300 group-hover:scale-102`}
                />
              </div>
            </div>
          )}

          {/* Photo 3 & Photo 4 Row (or single Photo 3) */}
          <div className={`grid ${p4 ? "grid-cols-2 gap-3" : "grid-cols-1"}`}>
            {p3 && (
              <div
                onClick={() => onPhotoClick(p3, 2)}
                className="group relative cursor-pointer rounded-sm border border-[#dcd4c5] bg-white p-2 shadow-sm transition-all duration-200 hover:shadow-md hover:border-[#b8ad99]"
              >
                <div className="relative h-36 lg:h-40 w-full overflow-hidden rounded-xs bg-[#e8e4dc]">
                  <Image
                    src={p3.src}
                    alt={p3.caption || event.title}
                    fill
                    sizes="350px"
                    style={p3.objectPosition ? { objectPosition: p3.objectPosition } : undefined}
                    className={`${p3.objectFit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-300 group-hover:scale-102`}
                  />
                </div>
              </div>
            )}

            {p4 && (
              <div
                onClick={() => onPhotoClick(p4, 3)}
                className="group relative cursor-pointer rounded-sm border border-[#dcd4c5] bg-white p-2 shadow-sm transition-all duration-200 hover:shadow-md hover:border-[#b8ad99]"
              >
                <div className="relative h-36 lg:h-40 w-full overflow-hidden rounded-xs bg-[#e8e4dc]">
                  <Image
                    src={p4.src}
                    alt={p4.caption || event.title}
                    fill
                    sizes="350px"
                    style={p4.objectPosition ? { objectPosition: p4.objectPosition } : undefined}
                    className={`${p4.objectFit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-300 group-hover:scale-102`}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Page Footer */}
        <div className="pt-4 border-t border-[#e2d8c7] font-mono text-[11px] text-[#718096] text-right">
          <span>{photos.length} Photographs</span>
        </div>
      </div>
    </div>
  );
}
