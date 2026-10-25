
"use client";

import Image from "next/image";
import { useState } from "react";
import { mascotContent } from "@/data/vision";

const HUD_CORNERS = [
  "top-3 left-3 border-t border-l rounded-tl-lg",
  "top-3 right-3 border-t border-r rounded-tr-lg",
  "bottom-3 left-3 border-b border-l rounded-bl-lg",
  "bottom-3 right-3 border-b border-r rounded-br-lg",
];

export default function MascotCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsFlipped((p) => !p)}
      aria-label={isFlipped ? "Show Cubo mascot" : "Reveal information about Cubo"}
      aria-pressed={isFlipped}
      className="group relative block w-full cursor-pointer rounded-2xl text-left
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-[#c9a24a] focus-visible:ring-offset-4
        focus-visible:ring-offset-[#0a0f2e]"
      style={{ perspective: "1400px" }}
    >
      <div
        className="relative w-full rounded-2xl"
        style={{
          aspectRatio: "4 / 5",
          transformStyle: "preserve-3d",
          transition: "transform 800ms cubic-bezier(0.2, 0.7, 0.2, 1)",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl
            bg-[radial-gradient(ellipse_at_50%_40%,#1d2660_0%,#0d1233_55%,#070a1f_100%)]
            shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            containerType: "inline-size",
          }}
        >
          {/* Cubo */}
          <div className="cubo-float absolute inset-0 flex items-center justify-center px-5 pb-[100px] pt-14">
            <div className="relative h-full w-full">
              <Image
                src="/mascot.png"
                alt="Cubo, the mascot of the Computer Engineers' Society"
                fill
                priority
                sizes="(max-width: 640px) 90vw, 45vw"
                className="object-contain object-center p-0 -translate-x-[12%] drop-shadow-[0_10px_30px_rgba(122,140,255,0.25)] drop-shadow-[0_18px_24px_rgba(0,0,0,0.55)] transition-transform duration-500 group-hover:-rotate-2 group-hover:scale-[1.05]"
              />
            </div>
          </div>

          {/* Hint pill */}
          <div className="absolute inset-x-0 bottom-6 flex justify-center">
            <span
              className="rounded-full bg-[#0a0f2e]/70 px-4 py-2 text-xs font-medium text-[#E8EEFF] transition-opacity hover:opacity-80"
            >
              Tap to meet Cubo
            </span>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl
            bg-gradient-to-br from-[#141b45] via-[#0a0f2e] to-[#171333]
            shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="relative flex h-full flex-col overflow-y-auto p-5 sm:p-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#c9a24a]/60" />
              <p className="text-[10px] font-medium uppercase tracking-[3px] text-[#c9a24a] sm:text-xs sm:tracking-[4px]">
                {mascotContent.kicker}
              </p>
            </div>

            <div className="mt-5 space-y-3">
              {mascotContent.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-[14px] italic leading-[1.7] text-[#b3aed6] sm:text-[15px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Footer */}
            <div className="relative mt-auto flex items-end justify-between pt-6">
              <div className="space-y-3">
                <div
                  className="w-fit rounded-2xl rounded-bl-sm
                    bg-[#0a0f2e] px-4 py-2.5 text-[11px] font-medium
                    text-[#c9a24a] shadow-lg sm:text-xs"
                >
                  Hi, my name is <span className="text-[#c9a24a]">CUBO</span>
                </div>
                <p className="text-[10px] tracking-wider text-white/40">
                  TAP TO FLIP BACK
                </p>
              </div>

              <div className="relative h-24 w-24 shrink-0 sm:h-28 sm:w-28">
                <Image
                  src="/mascot.png"
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="112px"
                  className="object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
