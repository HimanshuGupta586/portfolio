"use client";

import { TIMELINE_DATA } from "@/data/timeline";

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-28 px-6 max-w-5xl mx-auto">

      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-20">
        My <span className="text-primary">Journey</span>
      </h2>

      <div className="relative pl-12 md:pl-16">

        {/* Neon Vertical Line */}
        <div
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
  year,
  title,
  desc,
}: {
  year: string;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="
        relative p-6 rounded-xl border border-border bg-card
        shadow-sm cursor-pointer select-none
        transition-all duration-200
        hover:scale-[1.045]
        hover:shadow-[0_0_8px_var(--primary)]
        active:scale-[0.97]
      "
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
      <h3 className="text-lg font-semibold mb-1">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-[0.95rem] leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
