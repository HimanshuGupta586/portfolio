"use client";

import { SERVICES_DATA } from "@/data/services";
import { Code, Layers, Globe } from "lucide-react";

const ICONS = {
  code: <Code size={28} className="text-primary" aria-hidden />,
  layers: <Layers size={28} className="text-primary" aria-hidden />,
  globe: <Globe size={28} className="text-primary" aria-hidden />,
} as const;

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold">
            What I <span className="text-primary">Do</span>
          </h2>
        </header>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {SERVICES_DATA.map((s, i) => (
            <article
              key={i}
              className="
                p-6 rounded-xl border border-border bg-card
                transition-all duration-200
                hover:scale-[1.02]
                hover:shadow-md hover:shadow-primary/5
                active:scale-[0.98]
              "
            >
              <div className="flex justify-center mb-4">
                {ICONS[s.icon]}
              </div>

              <h3 className="text-lg font-semibold mb-2 text-center">
                {s.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed text-center">
                {s.desc}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
