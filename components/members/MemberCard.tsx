"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import type { Member } from "@/data/members";

interface MemberCardProps {
  member: Member;
  priority?: boolean;
}

export default function MemberCard({ member, priority = false }: MemberCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFlip();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`${member.name}${member.role ? `, ${member.role}` : ""}. ${isFlipped
        ? "Viewing back. Click to flip to front."
        : member.skills && member.skills.length > 0
          ? "Viewing front. Click to view skills and links."
          : "Viewing front. Click to view links."
        }`}
      onClick={toggleFlip}
      onKeyDown={handleKeyDown}
      className={`group relative h-[500px] w-full cursor-pointer rounded-2xl [perspective:1000px] focus:outline-none ${isFlipped ? "" : "hover:-translate-y-1"
        } transition-transform duration-300 motion-reduce:transform-none`}
    >
      <div
        className={`relative h-full w-full rounded-2xl transition-transform duration-500 [transform-style:preserve-3d] motion-reduce:transition-none ${isFlipped ? "[transform:rotateY(180deg)]" : ""
          }`}
      >
        {/* ================= Front Face ================= */}
        <div
          inert={isFlipped}
          className="absolute inset-0 flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:border-ces-gold/40 group-hover:shadow-[0_0_18px_rgba(201,162,74,0.15)] [backface-visibility:hidden]"
        >
          {/* Photo container */}
          <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c0d18]">
            {member.photo ? (
              <Image
                src={member.photo}
                alt={member.name}
                fill
                priority={priority}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                style={
                  member.photoPosition
                    ? { objectPosition: member.photoPosition }
                    : undefined
                }
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center bg-white/[0.02] text-ces-text-muted">
                <span className="font-mono text-xs tracking-[0.2em] text-white/40">
                  PHOTO
                </span>
              </div>
            )}
          </div>

          {/* Member Details */}
          <div className="my-auto">
            <h3 className="text-xl font-medium tracking-tight text-ces-text-primary">
              {member.name}
            </h3>
            {member.role && (
              <p className="mt-1 text-sm text-ces-text-muted">
                {member.role}
              </p>
            )}
          </div>

          {/* Flip Indicator */}
          <div className="border-t border-white/[0.06] pt-3">
            <span className="inline-flex items-center gap-1 font-mono text-xs text-ces-gold transition-colors group-hover:text-white">
              Click to flip
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>

        {/* ================= Back Face (Flipped) ================= */}
        <div
          inert={!isFlipped}
          className="absolute inset-0 flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-ces-gold/35 bg-[#0e1124]/95 p-5 shadow-xl backdrop-blur-md transition-all duration-300 group-hover:border-ces-gold/50 group-hover:shadow-[0_0_18px_rgba(201,162,74,0.18)] [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          {/* Back Header */}
          <div className="border-b border-white/10 pb-3">
            <h3 className="text-lg font-medium text-ces-text-primary">
              {member.name}
            </h3>
            {member.role && <p className="text-xs text-ces-text-muted">{member.role}</p>}
          </div>

          {/* Body: Skills & Links */}
          <div className="my-auto flex flex-col gap-4 py-2">
            {/* Skills */}
            {member.skills && member.skills.length > 0 && (
              <div>
                <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-ces-gold">
                  Skills
                </span>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/10 bg-white/[0.05] px-2.5 py-0.5 font-mono text-xs text-ces-text-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            {(member.github || (member.linkedin && member.linkedin.trim() !== "")) && (
              <div>
                <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-ces-gold">
                  {member.skills && member.skills.length > 0 ? "Links" : "Connect"}
                </span>
                <div className="mt-2 flex items-center gap-2">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      onKeyDown={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-ces-text-secondary transition-colors hover:border-ces-gold/40 hover:bg-white/[0.08] hover:text-white focus:outline-none focus:ring-2 focus:ring-ces-gold/50"
                      aria-label={`${member.name}'s GitHub profile`}
                    >
                      <FaGithub className="h-3.5 w-3.5" />
                      <span className="font-mono">GitHub</span>
                      <ArrowUpRight className="h-3 w-3 opacity-60" />
                    </a>
                  )}
                  {member.linkedin && member.linkedin.trim() !== "" && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      onKeyDown={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 rounded-lg border border-[#0077b5]/40 bg-[#0077b5]/15 px-3.5 py-1.5 text-xs text-white transition-all hover:border-[#0077b5] hover:bg-[#0077b5]/25 hover:shadow-[0_0_12px_rgba(0,119,181,0.3)] focus:outline-none focus:ring-2 focus:ring-[#0077b5]/50"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <FaLinkedin className="h-4 w-4 text-[#0077b5]" />
                      <span className="font-mono">LinkedIn</span>
                      <ArrowUpRight className="h-3 w-3 opacity-70" />
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Fallback if no skills and no active links */}
            {!member.github && (!member.linkedin || member.linkedin.trim() === "") && (!member.skills || member.skills.length === 0) && (
              <div className="py-4 text-center">
                <span className="inline-block rounded-full border border-ces-gold/30 bg-ces-gold/10 px-3.5 py-1 font-mono text-[11px] font-medium text-ces-gold">
                  {member.role || "Alumni"}
                </span>
                <p className="mt-2 text-xs text-ces-text-muted">
                  Professional links coming soon
                </p>
              </div>
            )}
          </div>

          {/* Flip back indicator: clicking the card flips back (no separate button) */}
          <div className="border-t border-white/10 pt-3">
            <span className="inline-flex items-center gap-1 font-mono text-xs text-ces-text-muted transition-colors group-hover:text-ces-gold">
              Click to flip back ⤾
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
