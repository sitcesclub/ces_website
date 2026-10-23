import MessageCard from "./MessageCard";
import { leaderMessages } from "@/data/vision";

export default function LeadershipMessages() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 sm:pb-24 sm:pt-8 lg:px-8">
      <div className="mb-8 sm:mb-10">
        <p className="mb-2 text-[10px] font-medium uppercase tracking-[3px] text-[#7D89B5] sm:text-xs sm:tracking-[4px]">
          Leadership Messages
        </p>

        <h2 className="text-[28px] font-medium leading-[1.05] tracking-[-1px] text-[#E8EEFF] sm:text-[36px] lg:text-[40px]">
          Words from our leadership
        </h2>

        <div className="mt-3 h-px w-16 bg-[#B8C5E3]/50 sm:w-20" />

        <p className="mt-4 max-w-xl text-[12px] leading-[1.6] text-[#8F9CC2] sm:text-[13px]">
          Messages from the Principal, the Head of the Department, and future
          faculty voices of the Computer Engineers&apos; Society.
        </p>
      </div>

      <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
        {leaderMessages.map((leader) => (
          <MessageCard key={leader.id} leader={leader} />
        ))}
      </div>
    </section>
  );
}
