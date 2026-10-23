"use client";

import { useState } from "react";
import { memberGroups } from "@/data/members";
import MemberAccordion from "./MemberAccordion";

export default function MembersDirectory() {
  // Multi-open accordion state: Senior Associate Members open by default
  const [openGroupIds, setOpenGroupIds] = useState<Set<string>>(
    () => new Set(["senior-associates"])
  );

  // Track open session generation per group to reset card flip state on reopen
  const [groupSessions, setGroupSessions] = useState<Record<string, number>>({});

  const toggleGroup = (groupId: string) => {
    setOpenGroupIds((prev) => {
      const next = new Set(prev);
      if (next.has(groupId)) {
        next.delete(groupId);
      } else {
        next.add(groupId);
        // Increment session key when opening so cards reset to front face
        setGroupSessions((s) => ({
          ...s,
          [groupId]: (s[groupId] || 0) + 1,
        }));
      }
      return next;
    });
  };

  return (
    <section
      id="members-directory"
      className="relative z-10 w-full pt-2 pb-24 sm:pb-32 [overflow-anchor:none]"
      aria-labelledby="directory-heading"
    >
      {/* Section Header / Eyebrow (no badge and no border line below) */}
      <div className="mb-6">
        <h2
          id="directory-heading"
          className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-ces-gold"
        >
          Members Directory
        </h2>
      </div>

      {/* Directory Accordion Rows */}
      <div className="[overflow-anchor:none]">
        {memberGroups.map((group) => (
          <MemberAccordion
            key={group.id}
            group={group}
            isOpen={openGroupIds.has(group.id)}
            sessionKey={groupSessions[group.id] || 0}
            onToggle={() => toggleGroup(group.id)}
          />
        ))}
      </div>
    </section>
  );
}
