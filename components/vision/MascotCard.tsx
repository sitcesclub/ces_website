import Image from "next/image";
import { mascotContent } from "@/data/vision";

export default function MascotCard() {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-5 sm:p-6">
      <p className="text-[10px] font-medium uppercase tracking-[3px] text-[#c9a24a] sm:text-xs sm:tracking-[4px]">
        {mascotContent.kicker}
      </p>

      <div className="mt-4 space-y-3">
        {mascotContent.paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="text-[14px] italic leading-[1.7] text-[#a49fc9]"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="relative mx-auto mt-5 w-fit max-w-[240px] sm:max-w-[280px]">
        <span className="absolute -top-1 left-0 z-10 rounded-2xl border border-[#c9a24a]/40 bg-[#0a0f2e] px-3 py-1.5 text-[11px] font-medium text-[#E8EEFF] shadow-lg">
          Hi, my name is <span className="text-[#c9a24a]">CUBO</span>
        </span>

        <Image
          src="/mascot.png"
          alt="Cubo, the mascot of the Computer Engineers' Society"
          width={1312}
          height={1199}
          className="h-auto w-full drop-shadow-[0_10px_30px_rgba(122,140,255,0.25)]"
        />
      </div>
    </article>
  );
}
