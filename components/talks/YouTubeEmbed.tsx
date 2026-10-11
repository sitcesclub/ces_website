import { getYouTubeEmbedUrl, type GradTalk } from "@/data/talks";

export default function YouTubeEmbed({ talk, loading = "lazy" }: { talk: GradTalk; loading?: "eager" | "lazy" }) {
  return (
    <div className="relative aspect-video min-h-[202px] w-full overflow-hidden rounded-xl border border-white/[0.1] bg-black">
      <iframe
        className="absolute inset-0 h-full w-full"
        src={getYouTubeEmbedUrl(talk)}
        title={`${talk.name} — CES Grad Talk`}
        loading={loading}
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
