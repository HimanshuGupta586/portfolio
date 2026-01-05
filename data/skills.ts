import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiShadcnui,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiC,
  SiGit,
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

    // Frameworks & Runtime
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },

    // Database
    { name: "MongoDB", icon: SiMongodb },

    // Styling & UI
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "shadcn/ui", icon: SiShadcnui },

    // Tools
    { name: "Git & GitHub", icon: SiGit },
  ],
};
