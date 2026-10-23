import { gradTalks } from "@/data/talks";
import YouTubeEmbed from "@/components/talks/YouTubeEmbed";

export default function TalksPage() {
  return (
    <main className="min-h-screen bg-[#08090d] px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Page header */}
        <header className="mb-14 sm:mb-20">
          <div className="mb-7 flex items-center justify-between border-b border-white/[0.07] pb-4 font-mono text-[9px] font-bold uppercase tracking-[1.5px] text-[#687087] sm:text-xs sm:tracking-[2px]">
            <span>Computer Engineers’ Society, SIT</span>
            <span className="text-[#7a8cff]">Alumni Series</span>
          </div>

          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[2.5px] text-[#7d89b5] sm:text-xs">
              Conversations · Season 1
            </p>

            <h1 className="text-[clamp(3rem,7vw,6rem)] font-medium leading-[0.95] tracking-[-0.055em] text-[#f4f3f8]">
              Grad <span className="text-[#7a8cff]">Talks</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#9198ad] sm:text-lg">
              Conversations with CES alumni about their paths from campus to
              career.
            </p>
          </div>
        </header>

        {/* Gallery */}
        <section aria-label="CES Grad Talks">
          <div className="grid gap-x-8 gap-y-14 sm:gap-y-16 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-20">
            {gradTalks.map((talk, index) => (
              <article
                key={talk.videoId}
                className="group min-w-0"
              >
                {/* Video */}
                <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d1017] transition-colors duration-300 group-hover:border-[#7a8cff]/25">
                  <YouTubeEmbed talk={talk} />
                </div>

                {/* Meta */}
                <div className="mt-5">
                  <div className="flex items-center gap-3 font-mono text-[9px] font-bold uppercase tracking-[1.6px] text-[#69728a] sm:text-[10px]">
                    <span className="text-[#7a8cff]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="h-px w-4 bg-white/15" />

                    <span>{talk.season}</span>
                  </div>

                  {/* Person */}
                  <div className="mt-4">
                    <h2 className="text-xl font-semibold tracking-[-0.015em] text-[#f4f3f8] sm:text-2xl">
                      {talk.name}
                    </h2>

                    <p className="mt-1.5 text-sm text-[#727b91]">
                      CSE · Class of {talk.classYear}
                    </p>

                    <p className="mt-2 text-sm font-medium text-[#9299ad]">
                      {talk.role}
                    </p>
                  </div>

                  {/* Talk */}
                  <h3 className="mt-5 max-w-2xl text-xl font-medium leading-tight tracking-[-0.02em] text-[#e4e5ea] sm:text-2xl">
                    {talk.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-[#858da2]">
                    {talk.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}