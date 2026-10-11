import type { Metadata } from "next";
import MemberCard from "@/components/members/MemberCard";
import { alumniMembers } from "@/data/members";

export const metadata: Metadata = {
  title: "Alumni | Computer Engineers' Society",
  description:
    "Meet the alumni who continue to build, innovate, and make an impact across the technology industry.",
};

export default function AlumniPage() {
  return (
    <div className="relative min-h-screen w-full px-5 pt-28 pb-20 sm:px-8 sm:pt-36 sm:pb-28 lg:px-12">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute top-12 left-1/2 h-[340px] w-[600px] -translate-x-1/2 rounded-full bg-[#7a8cff]/[0.06] blur-[140px]" />
      <div className="pointer-events-none absolute top-1/2 right-[10%] h-[400px] w-[400px] rounded-full bg-[#c9a24a]/[0.04] blur-[160px]" />

      <section className="relative z-10 mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#c9a24a] sm:text-xs">
            Our Community
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-[#f5f4fb] sm:text-5xl lg:text-6xl">
            Alumni
          </h1>
          <div className="mx-auto mt-5 h-px w-16 bg-[#c9a24a]/50" />
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#8b85b3] sm:text-base">
            Meet the alumni who continue to build, innovate, and make an impact
            across the technology industry.
          </p>
        </div>

        {/* Alumni Grid: 3 cards per row without batch divider */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {alumniMembers.map((person, index) => (
            <MemberCard key={person.id || person.name} member={person} priority={index < 3} />
          ))}
        </div>
      </section>
    </div>
  );
}
