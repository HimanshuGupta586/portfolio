"use client";

import { TIMELINE_DATA } from "@/data/timeline";

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <header className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold">
            My <span className="text-primary">Journey</span>
          </h2>
        </header>

        <div className="relative pl-12 md:pl-16">

          {/* Vertical Line */}
          <div
            className="
              absolute left-[22px] md:left-7 top-0 bottom-0
              w-px bg-border
            "
          />

          {/* Timeline */}
          <div className="relative space-y-16">
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
      </div>
    </section>
  );
}

/* ---------------- Timeline Card ---------------- */

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
    <article
      className="
        relative p-6 rounded-xl border border-border bg-card
        transition-all duration-200
        hover:scale-[1.02]
        hover:shadow-md hover:shadow-primary/5
        active:scale-[0.98]
      "
    >
      {/* Marker */}
      <div
        className="
          absolute -left-[34px] top-7
          w-3 h-3 rounded-full bg-primary
        "
        aria-hidden
      />

      {/* Year */}
      <p className="text-primary font-semibold text-sm tracking-wide mb-1">
        {year}
      </p>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-1">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {desc}
      </p>
    </article>
  );
}
