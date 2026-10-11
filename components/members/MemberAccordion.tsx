"use client";

import { useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import type { MemberGroup } from "@/data/members";
import MemberCard from "./MemberCard";

interface MemberAccordionProps {
  group: MemberGroup;
  isOpen: boolean;
  sessionKey: number;
  onToggle: () => void;
}

export default function MemberAccordion({
  group,
  isOpen,
  sessionKey,
  onToggle,
}: MemberAccordionProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);

  const panelId = `panel-${group.id}`;
  const headerId = `header-${group.id}`;

  useEffect(() => {
    return () => {
      if (animFrameRef.current !== null) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  const handleToggle = () => {
    if (!itemRef.current) {
      onToggle();
      return;
    }

    if (animFrameRef.current !== null) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }

    // Capture the exact viewport position of the accordion header before toggling
    const initialTop = itemRef.current.getBoundingClientRect().top;

    onToggle();

    // Temporarily set scrollBehavior to auto so compensation adjustments are instant
    const originalScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";

    const startTime = performance.now();
    const duration = 350; // covers the 300ms CSS transition

    const keepHeaderAnchored = () => {
      if (!itemRef.current) {
        document.documentElement.style.scrollBehavior = originalScrollBehavior;
        return;
      }

      const currentTop = itemRef.current.getBoundingClientRect().top;
      const diff = currentTop - initialTop;

      // If the browser shifts the viewport (e.g. scroll anchoring to elements below),
      // correct it immediately so the clicked header remains stationary on screen.
      if (Math.abs(diff) > 0.5) {
        window.scrollBy({ top: diff, behavior: "instant" });
      }

      if (performance.now() - startTime < duration) {
        animFrameRef.current = requestAnimationFrame(keepHeaderAnchored);
      } else {
        animFrameRef.current = null;
        document.documentElement.style.scrollBehavior = originalScrollBehavior;
      }
    };

    animFrameRef.current = requestAnimationFrame(keepHeaderAnchored);
  };

  return (
    <div
      ref={itemRef}
      className="border-b border-white/10 transition-colors duration-200 [overflow-anchor:none]"
    >
      {/* Accordion Trigger Button */}
      <h3>
        <button
          id={headerId}
          type="button"
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="group flex min-h-[64px] w-full items-center justify-between py-5 text-left transition-colors duration-200 outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0"
        >
          <div className="flex items-center gap-4 sm:gap-8">
            {/* Numeric Index */}
            <span
              className={`font-mono text-sm sm:text-base transition-colors duration-200 ${
                isOpen ? "text-ces-gold font-semibold" : "text-ces-text-muted group-hover:text-ces-gold"
              }`}
            >
              {group.index}
            </span>

            {/* Group Title */}
            <span
              className={`text-lg sm:text-2xl font-medium tracking-tight transition-colors duration-200 ${
                isOpen ? "text-white" : "text-ces-text-primary group-hover:text-white"
              }`}
            >
              {group.title}
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-6">
            {/* Dynamic member count */}
            <span
              className={`font-mono text-xs sm:text-sm transition-colors ${
                isOpen ? "text-ces-gold/90 font-medium" : "text-ces-text-muted"
              }`}
            >
              {group.members.length} members
            </span>

            {/* Rotating Chevron */}
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
                isOpen
                  ? "rotate-180 border-ces-gold/40 bg-ces-gold/15 text-ces-gold shadow-[0_0_12px_rgba(201,162,74,0.25)]"
                  : "border-white/10 bg-white/[0.03] text-ces-text-muted group-hover:border-white/20 group-hover:text-white"
              }`}
            >
              <ChevronDown className="h-4 w-4" />
            </span>
          </div>
        </button>
      </h3>

      {/* Expandable Panel */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        inert={!isOpen}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out [overflow-anchor:none] ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="py-6 sm:py-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.members.map((member, index) => (
                <MemberCard
                  key={`${member.id || member.name}-${sessionKey}`}
                  member={member}
                  priority={isOpen && index < 3}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
