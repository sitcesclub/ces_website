export interface GalleryPhoto {
  id: string;
  src: string;
  caption: string;
  objectPosition?: string;
  objectFit?: "cover" | "contain";
}

export interface GalleryEvent {
  id: string;
  title: string;
  year: number;
  date: string;
  location?: string;
  description: string;
  photos: GalleryPhoto[];
}

export interface BookCategory {
  id: string;
  title: string;
  letter: string;
  coverPhoto?: string;
  description: string;
  coverColor: string; // Lighter, richer book color
  coverColorDark: string;
  textColor: string;
  yearRange: string;
  events: GalleryEvent[];
}

export const galleryCategories: BookCategory[] = [
  // =========================================================================
  // 1. EVENTS (Muted / Light Blue)
  // =========================================================================
  {
    id: "events",
    title: "Events",
    letter: "E",
    coverPhoto: "/events/campus-2-corporate/01.png",
    description:
      "Flagship celebrations, annual welcomes, alumni sessions, and community gatherings across the semesters.",
    coverColor: "#2a4d7d",
    coverColorDark: "#1b3354",
    textColor: "#f0f4fc",
    yearRange: "2024–2026",
    events: [
      {
        id: "quiz-o-mania",
        title: "Quiz-O-Mania",
        year: 2024,
        date: "18 September 2024",
        location: "CSE Seminar Hall, SIT",
        description:
          "A technical quiz competition bringing together around 35+ departmental teams competing across three rounds, graced by the Principal and HODs.",
        photos: [
          { id: "qm-1", src: "/events/quiz-o-mania/01.jpg", caption: "" },
          { id: "qm-2", src: "/events/quiz-o-mania/02.jpg", caption: "" },
          { id: "qm-3", src: "/events/quiz-o-mania/03.jpg", caption: "" },
          { id: "qm-4", src: "/events/quiz-o-mania/04.jpg", caption: "" },
          { id: "qm-5", src: "/events/quiz-o-mania/07.jpg", caption: "" },
          { id: "qm-6", src: "/events/quiz-o-mania/06.jpg", caption: "" },
        ],
      },
      {
        id: "campus-2-corporate",
        title: "Campus 2 Corporate",
        year: 2025,
        date: "18–22 August 2025",
        location: "Main Auditorium",
        description:
          "The flagship Industry Connect Program bridging campus and corporate life through CV preparation, group discussions, aptitude rounds, technical interviews, and HR guidance.",
        photos: [
          { id: "c2c-1", src: "/events/campus-2-corporate/01.png", caption: "" },
          { id: "c2c-2", src: "/events/campus-2-corporate/02.png", caption: "" },
          { id: "c2c-3", src: "/events/campus-2-corporate/03.png", caption: "" },
          { id: "c2c-4", src: "/events/campus-2-corporate/04.png", caption: "" },
          { id: "c2c-5", src: "/events/campus-2-corporate/05.png", caption: "" },
          { id: "c2c-6", src: "/events/campus-2-corporate/06.png", caption: "" },
          { id: "c2c-7", src: "/events/campus-2-corporate/07.png", caption: "" },
          { id: "c2c-8", src: "/campus-2-corporate.png", caption: "" },
        ],
      },
      {
        id: "national-research-awards",
        title: "National Research Excellence Recognition",
        year: 2026,
        date: "February 2026",
        location: "Auditorium",
        description:
          "Celebrating student achievements and research paper awards presented to CES members by institute leadership.",
        photos: [
          { id: "res-1", src: "/research-award-2026.jpg", caption: "" },
          { id: "res-2", src: "/research-award.png", caption: "" },
        ],
      },
    ],
  },

  // =========================================================================
  // 2. WORKSHOPS & SESSIONS (Muted / Light Green)
  // =========================================================================
  {
    id: "workshops",
    title: "Workshops & Sessions",
    letter: "W",
    coverPhoto: "/events/45-days-dsa-2/01.jpg",
    description:
      "Hands-on coding bootcamps, systems deep dives, web development labs, and peer-guided learning circles.",
    coverColor: "#285c44",
    coverColorDark: "#1b3e2e",
    textColor: "#effcf5",
    yearRange: "2024–2026",
    events: [
      {
        id: "30-days-challenge",
        title: "30 Days Programming Challenge",
        year: 2024,
        date: "02 October 2024",
        location: "Department Labs",
        description:
          "An intensive daily coding initiative for 1st-year B.Tech students with questions across core programming topics, culminating in mementos and certificates.",
        photos: [
          { id: "30d-1", src: "/events/30-days-challenge/01.jpg", caption: "" },
          { id: "30d-2", src: "/events/30-days-challenge/02.jpg", caption: "" },
          { id: "30d-3", src: "/events/30-days-challenge/03.jpg", caption: "" },
          { id: "30d-4", src: "/events/30-days-challenge/04.jpg", caption: "" },
          { id: "30d-5", src: "/events/30-days-challenge/05.jpg", caption: "" },
          { id: "30d-6", src: "/events/30-days-challenge/06.jpg", caption: "" },
          { id: "30d-7", src: "/events/30-days-challenge/07.jpg", caption: "" },
        ],
      },
      {
        id: "45-days-dsa-2",
        title: "45 Days DSA Challenge 2.0",
        year: 2025,
        date: "25 August 2025",
        location: "CS Labs",
        description:
          "A 45-day structured problem-solving journey strengthening Data Structures & Algorithms expertise with leaderboard tracking and awards.",
        photos: [
          { id: "dsa-1", src: "/events/45-days-dsa-2/01.jpg", caption: "" },
          { id: "dsa-2", src: "/events/45-days-dsa-2/02.jpg", caption: "" },
          { id: "dsa-3", src: "/events/45-days-dsa-2/03.jpg", caption: "" },
          { id: "dsa-4", src: "/events/45-days-dsa-2/04.jpg", caption: "" },
          { id: "dsa-5", src: "/events/45-days-dsa-2/05.jpg", caption: "" },
          { id: "dsa-7", src: "/events/45-days-dsa-2/10.jpg", caption: "" },
          { id: "dsa-8", src: "/events/45-days-dsa-2/11.jpg", caption: "" },
        ],
      },

    ],
  },

  // =========================================================================
  // 3. HACKATHONS (Warm Brown / Orange)
  // =========================================================================
  {
    id: "hackathons",
    title: "Hackathons",
    letter: "H",
    coverPhoto: "/sit-hack-a-verse.png",
    description:
      "Sleepless 24-hour coding sprints, creative project prototyping, and high-energy team building.",
    coverColor: "#804323",
    coverColorDark: "#5c2e17",
    textColor: "#fdf3ee",
    yearRange: "2024–2026",
    events: [
      {
        id: "cybershield-2025",
        title: "CyberShield National Hackathon 2025",
        year: 2025,
        date: "November 2024",
        location: "Seminar Hall",
        description:
          "An overnight ideation sprint and competition exploring cyber defense models, secure architecture, and network safeguards.",
        photos: [
          { id: "cs-1", src: "/cybershield-finalists-2025.jpg", caption: "" },
        ],
      },
      {
        id: "sih-2025",
        title: "Smart India Hackathon (SIH) 2025",
        year: 2025,
        date: "December 2025",
        location: "National Nodal Center",
        description:
          "CES student teams representing the college at national hackathon grand finals and earning top distinctions including 2nd Runner-Up.",
        photos: [
          { id: "sih-1", src: "/sih-2nd-runnerup-2025.jpg", caption: "" },
          { id: "sih-2", src: "/sih-finalists-2025.jpg", caption: "" },
        ],
      },
      {
        id: "hack-a-verse-2025",
        title: "SIT Hack-A-Verse 2025",
        year: 2025,
        date: "03–04 April 2025",
        location: "Sir J. C. Bose Seminar Hall",
        description:
          "Our premier 24-hour hackathon bringing together over 200 builders across 50+ teams to build software solutions under time pressure.",
        photos: [
          { id: "hav-1", src: "/events/hack-a-verse-2025/01.jpg", caption: "" },
          { id: "hav-2", src: "/events/hack-a-verse-2025/02.jpg", caption: "" },
          { id: "hav-3", src: "/events/hack-a-verse-2025/03.jpg", caption: "" },
          { id: "hav-4", src: "/events/hack-a-verse-2025/04.jpg", caption: "" },
          { id: "hav-5", src: "/events/hack-a-verse-2025/05.jpg", caption: "" },
          { id: "hav-6", src: "/events/hack-a-verse-2025/06.jpg", caption: "" },
        ],
      },
    ],
  },

  // =========================================================================
  // 4. COMPETITIONS (Muted Gold / Olive)
  // =========================================================================
  {
    id: "competitions",
    title: "Competitions",
    letter: "C",
    coverPhoto: "/code-bites-5.jpg",
    description:
      "Signature Code Bites challenges, speed programming duels, and algorithmic showdowns.",
    coverColor: "#6b5a26",
    coverColorDark: "#4a3e19",
    textColor: "#fdfbee",
    yearRange: "2024–2026",
    events: [
      {
        id: "code-bites-4",
        title: "Code Bites 4.0",
        year: 2024,
        date: "25 September 2024",
        location: "Programming Lab 1",
        description:
          "The 4th edition hosted on the HackerRank platform from Programming Lab 1, featuring timed speed rounds, live scoreboards, and awards for top coders.",
        photos: [
          { id: "cb4-1", src: "/events/code-bites-4/17.jpg", caption: "" },
          { id: "cb4-2", src: "/events/code-bites-4/02.jpg", caption: "" },
          { id: "cb4-3", src: "/events/code-bites-4/03.jpg", caption: "" },
          { id: "cb4-4", src: "/events/code-bites-4/04.jpg", caption: "" },
          { id: "cb4-5", src: "/events/code-bites-4/05.jpg", caption: "" },
          { id: "cb4-6", src: "/events/code-bites-4/06.jpg", caption: "" },
          { id: "cb4-7", src: "/events/code-bites-4/07.jpg", caption: "" },
          { id: "cb4-8", src: "/events/code-bites-4/08.jpg", caption: "" },
          { id: "cb4-9", src: "/events/code-bites-4/09.jpg", caption: "" },
          { id: "cb4-10", src: "/events/code-bites-4/10.jpg", caption: "" },
          { id: "cb4-11", src: "/events/code-bites-4/11.jpg", caption: "" },
          { id: "cb4-12", src: "/events/code-bites-4/12.jpg", caption: "" },
          { id: "cb4-13", src: "/events/code-bites-4/13.jpg", caption: "" },
          { id: "cb4-14", src: "/events/code-bites-4/14.jpg", caption: "" },
          { id: "cb4-15", src: "/events/code-bites-4/15.jpg", caption: "" },
          { id: "cb4-16", src: "/events/code-bites-4/16.jpg", caption: "" },
          { id: "cb4-17", src: "/events/code-bites-4/01.jpg", caption: "" },
          { id: "cb4-18", src: "/events/code-bites-4/18.jpg", caption: "" },
          { id: "cb4-19", src: "/events/code-bites-4/19.jpg", caption: "" },
          { id: "cb4-20", src: "/events/code-bites-4/20.jpg", caption: "" },
          { id: "cb4-21", src: "/events/code-bites-4/21.jpg", caption: "" },
          { id: "cb4-22", src: "/events/code-bites-4/22.jpg", caption: "" },
          { id: "cb4-23", src: "/events/code-bites-4/23.jpg", caption: "" },
        ],
      },
      {
        id: "code-bites-5",
        title: "Code Bites 5.0",
        year: 2026,
        date: "21–22 May 2026",
        location: "CS Labs 1 & 2",
        description:
          "The 5th edition of our signature coding challenge, bringing together 30+ students for an exciting test of problem-solving, logical thinking, and programming skills.",
        photos: [
          { id: "cb5-1", src: "/events/code-bites-5/01.jpg", caption: "" },
          { id: "cb5-2", src: "/events/code-bites-5/02.jpg", caption: "" },
          { id: "cb5-3", src: "/events/code-bites-5/03.jpg", caption: "" },
          { id: "cb5-4", src: "/events/code-bites-5/04.jpg", caption: "" },
          { id: "cb5-5", src: "/events/code-bites-5/13.jpg", caption: "" },
          { id: "cb5-6", src: "/events/code-bites-5/05.jpg", caption: "" },
          { id: "cb5-7", src: "/events/code-bites-5/07.jpg", caption: "" },
          { id: "cb5-8", src: "/events/code-bites-5/08.jpg", caption: "" },
          { id: "cb5-9", src: "/events/code-bites-5/09.jpg", caption: "" },
          { id: "cb5-10", src: "/events/code-bites-5/10.jpg", caption: "" },
          { id: "cb5-11", src: "/events/code-bites-5/11.jpg", caption: "" },
          { id: "cb5-12", src: "/events/code-bites-5/12.jpg", caption: "" },
        ],
      },
    ],
  },
];
