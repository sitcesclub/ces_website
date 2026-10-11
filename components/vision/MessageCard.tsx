import { Play } from "lucide-react";
import type { LeaderMessage } from "@/data/vision";

export default function MessageCard({ leader }: { leader: LeaderMessage }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d1017] transition-colors duration-300 hover:border-[#7a8cff]/25">
      <div className="relative aspect-video w-full bg-gradient-to-br from-[#0a0f2e] via-[#0a0f2e] to-[#050408]">
        {leader.videoId ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${leader.videoId}`}
            title={`${leader.role} message — ${leader.name}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-[#7a8cff] transition-colors duration-300 group-hover:border-[#7a8cff]/50 group-hover:bg-[#7a8cff]/10">
              <Play className="h-5 w-5 translate-x-0.5" aria-hidden="true" />
            </span>
            <p className="text-[13px] text-[#8F9CC2]">
              Video message coming soon
            </p>
          </div>
        )}

        <span className="absolute left-3 top-3 rounded-full border border-[#c9a24a]/40 bg-[#050408]/85 px-3 py-1 text-[10px] font-medium uppercase tracking-[2px] text-[#c9a24a]">
          {leader.role}
        </span>
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="text-[18px] font-medium leading-snug text-[#E8EEFF] sm:text-[20px]">
          {leader.name}
        </h3>
        <p className="mt-1 text-[13px] text-[#8F9CC2]">{leader.designation}</p>
      </div>
    </article>
  );
}
