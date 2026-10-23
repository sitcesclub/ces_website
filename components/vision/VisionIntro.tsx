import MascotCard from "./MascotCard";
import { visionContent } from "@/data/vision";

export default function VisionIntro() {
  return (
    <section className="relative overflow-hidden">
      <div className="ces-ambient-glow" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 sm:pb-14 sm:pt-12 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
          <div className="max-w-3xl">
            <p className="text-[10px] font-medium uppercase tracking-[3px] text-[#7D89B5] sm:text-xs sm:tracking-[4px]">
              {visionContent.kicker}
            </p>

            <h1 className="mt-3 text-[34px] font-medium leading-[1.08] tracking-[-1.5px] text-[#E8EEFF] sm:text-[46px] lg:text-[54px]">
              {visionContent.headline}
            </h1>

            <div className="accent-stripe mt-5 h-px w-24" aria-hidden="true" />

            <div className="mt-6 max-w-3xl space-y-4">
              {visionContent.statement.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-[15px] leading-[1.75] text-[#a49fc9] sm:text-[16px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <MascotCard />
        </div>
      </div>
    </section>
  );
}
