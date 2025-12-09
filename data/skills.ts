import {
  SiNextdotjs, SiReact, SiTailwindcss, SiMongodb, SiExpress,
  SiNodedotjs, SiShadcnui, SiTypescript, SiHtml5, SiCss3,
  SiJavascript, SiPython, SiC, SiGit
} from "react-icons/si";

export const SKILLS_DATA = {
  heading: "Skills & Technologies",

  items: [
    // Core Web
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },

    // Languages
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Python", icon: SiPython },
    { name: "C (DSA)", icon: SiC },

    // Core & Frameworks
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React", icon: SiReact },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },

    // Database & Backend
    { name: "MongoDB", icon: SiMongodb },

    // Styling & UI
    { name: "TailwindCSS", icon: SiTailwindcss },
    { name: "Shadcn UI", icon: SiShadcnui },

    // Tools
    { name: "Git & GitHub", icon: SiGit },
  ],
};
