"use client";

import { useState } from "react";
import { Check, Share2 } from "lucide-react";
import { getYouTubeWatchUrl, type GradTalk } from "@/data/talks";

export default function ShareTalkButton({ talk }: { talk: GradTalk }) {
  const [status, setStatus] = useState<"idle" | "shared" | "copied" | "manual">("idle");
  const url = getYouTubeWatchUrl(talk);

  async function handleShare() {
    const shareData = {
      title: `${talk.name} — CES Grad Talk`,
      text: `Watch ${talk.name}'s CES Grad Talk`,
      url,
    };

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
        setStatus("shared");
        return;
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return;
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setStatus("copied");
    } catch {
      const input = document.createElement("textarea");
      input.value = url;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      let copied = false;
      try {
        input.select();
        copied = document.execCommand("copy");
      } catch {
        copied = false;
      } finally {
        input.remove();
      }
      setStatus(copied ? "copied" : "manual");
    }
  }

  const label = status === "shared" ? "Shared" : status === "copied" ? "Link copied" : status === "manual" ? "Copy link manually" : "Share";

  return (
    <div className="min-w-0">
      <button
        type="button"
        onClick={handleShare}
        className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-full border border-white/10 px-3 text-sm font-medium text-[#c4c9d8] transition hover:border-[#7a8cff]/50 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7a8cff]"
        aria-label={`${label} ${talk.name}'s Grad Talk`}
      >
        {status === "copied" || status === "shared" ? (
          <Check aria-hidden="true" className="h-4 w-4 text-[#7a8cff]" />
        ) : (
          <Share2 aria-hidden="true" className="h-4 w-4" />
        )}
        {label}
      </button>
      {status === "manual" && (
        <input
          aria-label={`${talk.name}'s video link`}
          className="mt-2 w-full min-w-0 rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs text-[#c4c9d8]"
          onFocus={(event) => event.currentTarget.select()}
          readOnly
          value={url}
        />
      )}
    </div>
  );
}
