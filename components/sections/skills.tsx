"use client";

import { SKILLS_DATA } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-28 px-6 max-w-6xl mx-auto">

      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-16">
        {SKILLS_DATA.heading.split("Technologies")[0]}
        <span className="text-primary">Technologies</span>
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {SKILLS_DATA.items.map((skill, i) => {
          const Icon = skill.icon;

          return (
            <div
              key={i}
              className="
                p-6 rounded-xl border border-border bg-card
                cursor-pointer select-none
                transition-transform duration-200
                hover:scale-[1.02]
                active:scale-[0.98]
              "
            >
              <div className="text-4xl text-primary mb-2">
                <Icon />
              </div>
              <p className="font-medium">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
