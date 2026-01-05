// /data/timeline.ts

export interface TimelineItem {
  year: string;
  title: string;
  desc: string;
}

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: "2021",
    title: "Started Web Development",
    desc: "Began learning HTML, CSS and JS, exploring basic layouts and core web fundamentals.",
  },
  {
    year: "2022",
    title: "Projects & Python Foundations",
    desc: "Built small projects and learned Python, strengthening logic and problem-solving skills.",
  },
  {
    year: "2023",
    title: "Full-Stack with MERN",
    desc: "Learned MongoDB, Express, React, and Node.js while building full-stack applications.",
  },
  {
    year: "2024",
    title: "Modern Development with Next.js",
    desc: "Focused on application structure, routing, performance, and building modern UIs with Next.js.",
  },
  {
    year: "2025",
    title: "Production Projects & DSA",
    desc: "Building full-stack projects with Next.js while strengthening data structures and algorithms in C.",
  },
];
