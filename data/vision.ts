export interface LeaderMessage {
  id: string;
  role: string;
  name: string;
  designation: string;
  videoId?: string;
  photo?: string;
}

export interface JourneyEntry {
  year: string;
  title: string;
  description: string;
}

export const visionContent = {
  kicker: "Our Vision",
  headline: "Inspiring engineers who build with purpose, creativity, and code.",
  statement: [
    "CES empowers students to transform academic learning into practical skills through workshops, events, competitions, and collaborative projects. It fosters innovation, leadership, teamwork, and problem-solving while encouraging students to explore emerging technologies.",
    "By providing a platform to learn, build, and lead, CES bridges the gap between academics and industry, inspiring students to create meaningful solutions and shape the technology of tomorrow.",
  ],
};

export const mascotContent = {
  kicker: "Meet our mascot",
  paragraphs: [
    "Hi! I am Cubo, the mascot of CES, representing curiosity, creativity, and innovation. Always eager to explore, learn, and experiment, I embody the spirit of young computer engineers who transform challenges into opportunities and ideas into reality every day.",
    "I turn curiosity into ideas, ideas into innovation, and innovation into impact.",
  ],
};

export const aboutContent = {
  kicker: "About Us",
  title: "The Computer Engineers' Society",
  paragraphs: [
    "The Computer Engineers' Society (CES) is the official departmental club of the Department of Computer Science and Engineering (CSE), Siliguri Institute of Technology (SIT), established in 2017. Since its inception, CES has been fostering technical excellence, creativity, collaboration, and innovation among students.",
    "CES empowers students to develop technical, creative, and leadership skills through workshops, seminars, competitions, and collaborative projects. With the guidance of faculty mentors, CES bridges academic learning with real-world applications, fostering innovation, teamwork, and problem-solving.",
  ],
};

export const journey: JourneyEntry[] = [
  {
    year: "2017",
    title: "The Beginning",
    description:
      "The Computer Engineers' Society (CES) was established as the official departmental club of the Department of Computer Science and Engineering at Siliguri Institute of Technology.",
  },
  {
    year: "2018–2019",
    title: "Building the Foundation",
    description:
      "CES began establishing its presence through engaging technical and recreational activities, including Sudoku, Quiz, Code Bites, and Robo Soccer, creating a platform for students to learn, compete, and collaborate.",
  },
  {
    year: "2022–2023",
    title: "A New Identity",
    description:
      "CES resumed activities with renewed enthusiasm. Cubo, the official mascot of CES, was born in 2022, marking an important milestone in the club's identity. This period also saw the introduction of the new CES logo featuring Cubo.",
  },
  {
    year: "2024–2025",
    title: "A New Chapter",
    description:
      "CES reopened with fresh energy, new ideas, and a new generation of members. The year featured Quiz-o-Mania, Code Bites 4.0, Grad Talks, C Programming Challenge, 45 Days DSA Challenge 1.0, Roadmap to Programming, International Industry Induced Workshop, SIT Hackaverse 2025, Industry Connect: Campus 2 Corporate, and several technical webinars and sessions.",
  },
  {
    year: "2026",
    title: "Moving Forward",
    description:
      "With a growing community and a stronger vision, CES continues to expand its horizons through technical events, industry interactions, hackathons, workshops, challenges, and collaborative initiatives, empowering students to learn, innovate, and create an impact beyond the classroom.",
  },
];

export const leaderMessages: LeaderMessage[] = [
  {
    id: "principal",
    role: "Principal",
    name: "Dr. Joydeep Dutta",
    designation: "Principal",
    videoId: "p33gWUCOvV4",
  },
  {
    id: "hod",
    role: "Head of Department",
    name: "Dr. Anupam Mukherjee",
    designation: "Professor & Head, Department of Computer Science & Engineering",
    videoId: "bpLzStjr4TU",
  },
];
