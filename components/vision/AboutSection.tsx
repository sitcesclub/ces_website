import { aboutContent } from "@/data/vision";

export default function AboutSection() {
  return (
    <section className="border-y border-white/[0.06] bg-white/[0.015]">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 sm:py-16 md:grid-cols-3 lg:px-8">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[3px] text-[#7D89B5] sm:text-xs sm:tracking-[4px]">
            {aboutContent.kicker}
          </p>

          <h2 className="mt-2 text-[24px] font-medium leading-[1.1] tracking-[-0.5px] text-[#E8EEFF] sm:text-[30px]">
            {aboutContent.title}
          </h2>

          <div className="accent-stripe mt-4 h-px w-16" aria-hidden="true" />
        </div>

        <div className="space-y-4 md:col-span-2">
          {aboutContent.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-[14px] leading-[1.75] text-[#8F9CC2] sm:text-[15px]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
