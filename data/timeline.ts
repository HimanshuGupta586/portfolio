// /data/timeline.ts

export interface TimelineItem {
  year: string;
  title: string;
  desc: string;
}

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: "2021",
    title: "First Steps Into Web Development",
    desc: "Started programming with HTML & CSS, exploring basic layouts and web fundamentals.",
  },
  {
    year: "2022",
    title: "Built Small Projects & Learned Python",
    desc: "Created simple webpages and learned Python, strengthening logic and problem-solving basics.",
  },
  {
    year: "2023",
    title: "Mastered MERN Stack",
    desc: "Learned MongoDB, Express, React, and Node.js while building multiple real projects.",
  },
  {
    year: "2024",
    title: "Diving Into Next.js",
    desc: "Focused on modern app architecture, performance, routing & building UI-rich applications.",
  },
  {
    year: "2025",
    title: "Full-Stack Projects & DSA",
    desc: "Building production-ready full-stack apps using Next.js while learning Data Structures & Algorithms in C.",
  },
];
