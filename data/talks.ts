export type GradTalk = {
  name: string;
  classYear: string;
  role: string;
  title: string;
  description: string;
  duration: string;
  season: "Season 1" | "Season 2";
  videoId: string;
  startSeconds: number;
};

export const gradTalks: GradTalk[] = [
  {
    name: "Rajiv Chowdhury",
    classYear: "2019",
    role: "3D Animator • Rockstar Games",
    title: "From campus to creating worlds at Rockstar Games",
    description:
      "Mr. Rajiv shares his journey from CES to 3D animation at Rockstar Games, with practical advice on career transitions, overcoming setbacks, building skills, and finding your path in a changing industry.",
    duration: "56 min",
    season: "Season 1",
    videoId: "Jhwgpgsej_U",
    startSeconds: 6,
  },
  {
    name: "Mriganka Roy",
    classYear: "2018",
    role: "Site Reliability Engineer • Eviden UK",
    title: "Building reliable systems in the cloud",
    description:
      "Mr. Mriganka talks about moving from college into site reliability engineering, working with cloud infrastructure, and the skills and decisions that shaped his career.",
    duration: "1 hr 15 min",
    season: "Season 1",
    videoId: "JmlJf6-V71o",
    startSeconds: 6,
  },
  {
    name: "Swarnava Mukherjee",
    classYear: "2018",
    role: "Senior Full Stack Engineer • Nielsen",
    title: "Growing as a full stack engineer",
    description:
      "Mr. Swarnava reflects on his path from CES to senior engineering, the skills that matter on the job, and how to keep learning as technology changes.",
    duration: "1 hr 13 min",
    season: "Season 1",
    videoId: "zwvDlQok-L0",
    startSeconds: 0,
  },
  {
    name: "Subham Sarda",
    classYear: "2019",
    role: "Hardware Security Validation Engineer • Google",
    title: "From CSE to hardware security at Google",
    description:
      "Mr. Subham shares his route into hardware security validation, with takeaways on college life, technical foundations, interviews, internships, and career growth.",
    duration: "1 hr 3 min",
    season: "Season 1",
    videoId: "wbhOcaTb674",
    startSeconds: 4,
  },
  {
    name: "Bishal Das",
    classYear: "2020",
    role: "Software Developer • Accenture",
    title: "Lessons from the journey after college",
    description:
      "Mr. Bishal joins the Grad Talks alumni series to share experiences and advice from his journey after graduating from CSE at SIT.",
    duration: "1 hr 5 min",
    season: "Season 2",
    videoId: "Kq3KHdlvFMY",
    startSeconds: 3,
  },
];

export function getYouTubeEmbedUrl(talk: GradTalk) {
  const params = new URLSearchParams({ playsinline: "1", rel: "0" });
  if (talk.startSeconds) params.set("start", String(talk.startSeconds));
  return `https://www.youtube.com/embed/${talk.videoId}?${params.toString()}`;
}

export function getYouTubeWatchUrl(talk: GradTalk) {
  const start = talk.startSeconds ? `&t=${talk.startSeconds}s` : "";
  return `https://www.youtube.com/watch?v=${talk.videoId}${start}`;
}
