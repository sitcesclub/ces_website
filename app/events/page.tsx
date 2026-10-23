import type { Metadata } from "next";
import EventsExplorer from "@/components/events/EventsExplorer";
import StatsBar from "@/components/events/StatsBar";
import {
  categories,
  pastEvents,
  upcomingEvents,
} from "@/data/events";

export const metadata: Metadata = {
  title: "Events | Computer Engineers' Society",
  description:
    "Explore upcoming and past events by the Computer Engineers' Society at Siliguri Institute of Technology — hackathons, workshops, competitions and more.",
};

export default function Page() {
  return (
    <div className="w-full pt-28 sm:pt-32">
      <EventsExplorer
        categories={categories}
        upcoming={upcomingEvents}
        past={pastEvents}
      />

      <StatsBar />
    </div>
  );
}
