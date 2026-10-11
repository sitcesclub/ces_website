import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { getYouTubeWatchUrl, gradTalks } from "@/data/talks";
import YouTubeEmbed from "@/components/talks/YouTubeEmbed";
import ShareTalkButton from "@/components/talks/ShareTalkButton";

export default function GradTalks() {
  const talk = gradTalks[0];

  return (
    <section id="grad-talks" className="relative w-full border-t border-white/[0.04] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[3px] text-[#7D89B5] sm:text-xs">Alumni Series · Season 1</p>
            <h2 className="text-4xl font-semibold tracking-tight text-[#f5f4fb] sm:text-5xl">Grad <span className="text-[#7a8cff]">Talks</span></h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#a49fc9] sm:text-base">Conversations with CES alumni about their paths from campus to career.</p>
          </div>
          <Link href="/talks" className="group inline-flex w-fit items-center gap-2 rounded-full border border-[#7a8cff]/30 bg-[#7a8cff]/[0.08] px-5 py-3 text-sm font-medium text-[#b8c3ff] transition hover:border-[#7a8cff]/60 hover:bg-[#7a8cff]/[0.14]">
            View all Talks <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <article className="grid overflow-hidden rounded-3xl border border-white/[0.08] bg-[#111621]/90 shadow-[0_28px_80px_-48px_rgba(122,140,255,0.5)] lg:grid-cols-[280px_minmax(0,1fr)]">
          <div className="flex flex-col items-center justify-center gap-4 border-b border-white/[0.08] bg-[radial-gradient(ellipse_at_center,rgba(30,59,92,0.85),rgba(10,15,46,0.55)_55%,transparent)] px-7 py-9 text-center lg:border-r lg:border-b-0">
            <span className="rounded-md border border-white/10 bg-white/[0.06] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[#d6dcf0]">Featured alum</span>
            <div>
              <h3 className="text-2xl font-semibold text-white">{talk.name}</h3>
              <p className="mt-1 text-sm text-[#a49fc9]">CSE · Class of {talk.classYear}</p>
            </div>
          </div>

          <div className="min-w-0 p-5 sm:p-8 lg:p-9">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[1.5px] text-[#7a8cff] sm:text-xs">{talk.role}</p>
            <h3 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight text-[#f5f4fb] sm:text-3xl">{talk.title}</h3>
            <div className="mt-6"><YouTubeEmbed talk={talk} loading="eager" /></div>
            <p className="mt-4 max-w-4xl text-sm leading-6 text-[#a49fc9]">{talk.description}</p>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#919caf]">{talk.season} · {talk.duration}</span>
              <div className="flex flex-wrap items-center gap-4">
                <a href={getYouTubeWatchUrl(talk)} className="inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-[#7a8cff] underline decoration-[#7a8cff]/40 underline-offset-4 transition hover:text-[#bac4ff]">Watch on YouTube <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" /></a>
                <ShareTalkButton talk={talk} />
                <Link href="/talks" className="text-sm font-semibold text-[#a49fc9] transition hover:text-white">Explore all talks</Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
