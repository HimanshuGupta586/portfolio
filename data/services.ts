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
    desc: "Building end-to-end web applications using MERN and Next.js, with a focus on clean architecture, scalability, and maintainable code."
  },
  {
    icon: "layers",
    title: "Frontend Engineering",
    desc: "Developing responsive and user-friendly interfaces using React, Tailwind CSS, and shadcn/ui, prioritizing clarity and usability."
  },
  {
    icon: "globe",
    title: "Deployment & Optimization",
    desc: "Deploying applications on modern platforms with attention to performance, basic SEO practices, and production readiness."
  }
];
