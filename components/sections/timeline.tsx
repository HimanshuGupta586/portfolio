"use client";

import { motion, easeOut } from "framer-motion";
import { TIMELINE_DATA } from "@/data/timeline";

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-28 px-6 max-w-5xl mx-auto">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: easeOut }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-20"
      >
        My <span className="text-primary">Journey</span>
      </motion.h2>

      <div className="relative pl-12 md:pl-16">

        {/* ✨ Neon Vertical Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            absolute left-[22px] md:left-7 top-0 bottom-0
            w-[3px] bg-primary/40 
            shadow-[0_0_12px_var(--primary)]
            rounded-full
          "
        />

        {/* Timeline Cards */}
        <div className="space-y-16 relative">
          {TIMELINE_DATA.map((item, index) => (
            <TimelineCard
              key={index}
              index={index}
              year={item.year}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ---------------- CARD COMPONENT ---------------- */

function TimelineCard({
  index,
  year,
  title,
  desc,
}: {
  index: number;
  year: string;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: easeOut, delay: index * 0.08 }}
      viewport={{ once: true }}

      whileHover={{
        scale: 1.045,
        boxShadow: "0 0 8px var(--primary)",
        transition: {
          duration: 0.18,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      whileTap={{ scale: 0.97 }}

      className="
        relative p-6 rounded-xl border border-border bg-card
        shadow-sm cursor-pointer select-none
        transition-transform duration-0
      "
      style={{ willChange: "transform, box-shadow" }}
    >

      {/* Neon Marker Dot */}
      <div
        className="
          absolute -left-[34px] top-[26px]
          w-4 h-4 rounded-full bg-primary
          shadow-[0_0_12px_var(--primary)]
        "
      />

      {/* Year */}
      <div className="text-primary font-extrabold text-xl mb-2 tracking-tight">
        {year}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-1">{title}</h3>

      {/* Description */}
      <p className="text-muted-foreground text-[0.95rem] leading-relaxed">
        {desc}
      </p>

    </motion.div>
  );
}
