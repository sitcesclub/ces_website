export type EventCategory =
  | "hackathon"
  | "competition"
  | "workshop"
  | "industry-connect"
  | "quiz";

export type EventItem = {
  id: string;
  title: string;
  category: EventCategory;
  categoryLabel: string;
  subtitle: string;
  date: string;
  location?: string;
  description: string;
  gallery: string[];
  cover?: string;
};

export const categoryColors: Record<EventCategory, string> = {
  hackathon: "#A78BFA",
  competition: "#EAB241",
  workshop: "#6FA8FF",
  "industry-connect": "#34D399",
  quiz: "#F472B6",
};

export const categories: { key: string; label: string }[] = [
  { key: "all", label: "All Events" },
  { key: "hackathon", label: "Hackathons" },
  { key: "competition", label: "Coding Competitions" },
  { key: "workshop", label: "Workshops" },
  { key: "industry-connect", label: "Industry Connect" },
  { key: "quiz", label: "Quizzes" },
];

const gal = (id: string, count: number, ext = "jpg"): string[] =>
  Array.from(
    { length: count },
    (_, i) => `/events/${id}/${String(i + 1).padStart(2, "0")}.${ext}`,
  );

/* Descriptions condensed from SYNAPSE VOLUME 1 ("Our Past Events", pp. 4–7). */

export const upcomingEvents: EventItem[] = [];

export const pastEvents: EventItem[] = [
  {
    id: "code-bites-5",
    title: "Code Bites 5.0",
    category: "competition",
    categoryLabel: "Competition",
    subtitle: "Signature Coding Challenge",
    date: "21–22 MAY 2026",
    location: "CS Lab 1 & 2",
    description:
      "The 5th edition of our signature coding challenge, organised on 21–22 May 2026, brought together 30+ students for an exciting test of problem-solving, logical thinking, and programming skills — a memorable platform to learn, compete, and showcase their passion for coding.",
    gallery: gal("code-bites-5", 13),
  },
  {
    id: "roadmap-2",
    title: "Roadmap to Programming 2.0",
    category: "workshop",
    categoryLabel: "Workshop",
    subtitle: "Alumnus-Led Coding Session",
    date: "26 DEC 2025",
    description:
      "Organised on 26 December 2025, this session guided first-year students into programming through a talk by alumnus Swarnadeep Saha Poddar, combining an engaging session with practical guidance so students could explore, learn, and confidently begin their programming journey.",
    gallery: [],
    cover: "/events/roadmap-2-programming/roadmap-2.png",
  },
  {
    id: "45-days-dsa-2",
    title: "45 Days DSA Challenge 2.0",
    category: "competition",
    categoryLabel: "Coding Challenge",
    subtitle: "Consistent Practice Sprint",
    date: "25 AUG 2025",
    description:
      "Starting 25 August 2025, this 45-day journey encouraged students to strengthen their Data Structures and Algorithms skills through consistent practice and problem-solving. The top five performers were felicitated for their exceptional consistency, dedication, and problem-solving abilities.",
    gallery: gal("45-days-dsa-2", 9),
  },
  {
    id: "campus-2-corporate",
    title: "Campus 2 Corporate",
    category: "industry-connect",
    categoryLabel: "Industry Connect",
    subtitle: "Career Readiness Program",
    date: "18–22 AUG 2025",
    location: "Auditorium",
    description:
      "The flagship Industry Connect Program, held 18–22 August 2025 for 4th-year students. This five-day programme bridged campus and corporate life through CV preparation, group discussions, aptitude rounds, technical interviews, and HR interviews — building confidence and placement readiness.",
    gallery: gal("campus-2-corporate", 7, "png"),
  },
  {
    id: "hack-a-verse-2025",
    title: "SIT Hack-A-Verse 2025",
    category: "hackathon",
    categoryLabel: "Hackathon",
    subtitle: "24-hour Hackathon",
    date: "03–04 APR 2025",
    location: "Sir J. C. Bose Seminar Hall",
    description:
      "Our flagship 24-hour hackathon held on 3–4 April 2025 at the Sir J. C. Bose Seminar Hall. Over 200 students in more than 50 teams tackled 15 challenging problem statements in an intense coding journey of innovation, collaboration, and real-world problem-solving.",
    gallery: gal("hack-a-verse-2025", 6),
  },
  {
    id: "intro-flutter",
    title: "Introduction to Flutter",
    category: "workshop",
    categoryLabel: "Workshop",
    subtitle: "Cross-Platform App Development",
    date: "22 DEC 2024",
    description:
      "Organised on 22 December 2024, this session by alumni Mandir Das (2025 pass-out) introduced students to cross-platform mobile development — covering Flutter fundamentals, its widget-based framework, and the Dart language through practical demonstrations and interactive learning.",
    gallery: [],
    cover: "/events/code-banner.png",
  },
  {
    id: "30-days-challenge",
    title: "30 Days Programming Challenge",
    category: "competition",
    categoryLabel: "Coding Competition",
    subtitle: "Daily Coding Sprint",
    date: "02 OCT 2024",
    description:
      "An initiative for 1st-year B.Tech students (2 October 2024): one question a day for 30 days across different coding topics. Winners were felicitated with mementos and certificates by the Head of the Departments, motivating students to continue their coding journey.",
    gallery: gal("30-days-challenge", 7),
  },
  {
    id: "roadmap-1",
    title: "Roadmap to Programming 1.0",
    category: "workshop",
    categoryLabel: "Workshop",
    subtitle: "Foundational C Workshop",
    date: "29 SEP 2024",
    location: "Online",
    description:
      "An interactive online workshop on 29 September 2024, exclusively for 1st-year B.Tech students — with a hands-on C programming segment, a small giveaway, and e-certificates for all attendees to ignite their enthusiasm for coding.",
    gallery: [],
    cover: "/events/code-banner.png",
  },
  {
    id: "code-bites-4",
    title: "Code Bites 4.0",
    category: "competition",
    categoryLabel: "Competition",
    subtitle: "HackerRank Coding Showdown",
    date: "25 SEP 2024",
    location: "Programming Lab 1",
    description:
      "The 4th edition on 25 September 2024 was hosted on the HackerRank platform from Programming Lab 1, with curated problem statements against a set time limit. The top 10 coders were awarded mementos and certificates; all attendees received participation certificates and goodies.",
    gallery: gal("code-bites-4", 23),
  },
  {
    id: "quiz-o-mania",
    title: "Quiz-O-Mania",
    category: "quiz",
    categoryLabel: "Quiz Competition",
    subtitle: "Technical Quiz Challenge",
    date: "18 SEP 2024",
    location: "CSE Seminar Hall, SIT",
    description:
      "A technical quiz competition on 18 September 2024 at the CSE Seminar Hall. Around 35+ teams from various departments competed across three rounds, graced by the Hon'ble Principal and the Head of the Departments — a grand showcase of technical enthusiasm.",
    gallery: gal("quiz-o-mania", 6),
  },
];
