// /data/services.ts
export interface ServiceItem {
  icon: "code" | "layers" | "globe";
  title: string;
  desc: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    icon: "code",
    title: "Full-Stack Web Development",
    desc: "End-to-end development using MERN & Next.js — building structured, scalable and feature-rich applications with clean code practices."
  },
  {
    icon: "layers",
    title: "Frontend Engineering & UI Crafting",
    desc: "Creating modern, responsive and animation-rich interfaces with TailwindCSS, Shadcn UI and React — focused on smooth UX and clarity."
  },
  {
    icon: "globe",
    title: "Deployment, Performance & SEO",
    desc: "Deploying apps on Vercel with optimized performance, analytics integration, SEO improvements and real-world production readiness."
  }
];
