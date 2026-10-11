import { journey } from "@/data/vision";

export default function JourneySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 pt-14 sm:px-6 sm:pt-16 lg:px-8">
      <div className="mb-8 sm:mb-10">
        <p className="mb-2 text-[10px] font-medium uppercase tracking-[3px] text-[#7D89B5] sm:text-xs sm:tracking-[4px]">
          Since 2017
        </p>

        <h2 className="text-[28px] font-medium leading-[1.05] tracking-[-1px] text-[#E8EEFF] sm:text-[36px] lg:text-[40px]">
          Our journey through time
        </h2>

        <div className="mt-3 h-px w-16 bg-[#B8C5E3]/50 sm:w-20" />
      </div>

      <ol className="relative space-y-8 border-l border-white/[0.1] pl-6 sm:space-y-10 sm:pl-10">
        {journey.map((entry) => (
          <li key={entry.year} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full bg-[#c9a24a] shadow-[0_0_12px_rgba(201,162,74,0.7)] sm:-left-[46px]"
            />

            <p className="text-[13px] font-medium uppercase tracking-[2px] text-[#c9a24a] sm:text-sm">
              {entry.year}
            </p>

            <h3 className="mt-1.5 text-[17px] font-medium tracking-[-0.3px] text-[#E8EEFF] sm:text-[19px]">
              {entry.title}
            </h3>

            <p className="mt-2 max-w-2xl text-[14px] leading-[1.7] text-[#8F9CC2] sm:text-[15px]">
              {entry.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
