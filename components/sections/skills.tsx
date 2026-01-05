"use client";

import { SKILLS_DATA } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {SKILLS_DATA.items.map((skill, i) => {
            const Icon = skill.icon;

            return (
              <div
                key={i}
                className="
                  p-6 rounded-xl border border-border bg-card
                  transition-all duration-200
                  hover:scale-[1.02]
                  hover:shadow-md hover:shadow-primary/5
                  active:scale-[0.98]
                "
              >
                <div className="text-3xl text-primary mb-3">
                  <Icon aria-hidden />
                </div>
                <p className="text-sm font-medium">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
