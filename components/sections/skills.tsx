"use client";

import { motion, easeOut } from "framer-motion";
import { SKILLS_DATA } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-28 px-6 max-w-6xl mx-auto">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: easeOut }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        {SKILLS_DATA.heading.split("Technologies")[0]}
        <span className="text-primary">Technologies</span>
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

        {SKILLS_DATA.items.map((skill, i) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: easeOut }}
              viewport={{ once: true }}

              whileHover={{
                scale: 1.045,
                boxShadow: "0 0 8px var(--primary)",
                transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] },
              }}

              whileTap={{ scale: 0.97 }}

              className="
                p-6 rounded-xl border border-border bg-card 
                shadow-sm cursor-pointer select-none 
                transition-transform duration-0 
              "
              style={{ willChange: "transform, box-shadow" }}
            >
              <div className="text-4xl text-primary">
                <Icon />
              </div>
              <p className="font-medium">{skill.name}</p>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}
