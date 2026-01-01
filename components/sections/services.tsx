"use client";

import { SERVICES_DATA } from "@/data/services";
import { Code, Layers, Globe } from "lucide-react";

const ICONS = {
  code: <Code size={30} className="text-primary" />,
  layers: <Layers size={30} className="text-primary" />,
  globe: <Globe size={30} className="text-primary" />,
} as const;

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 px-6 max-w-6xl mx-auto">

      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-16">
        What I <span className="text-primary">Do</span>
      </h2>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {SERVICES_DATA.map((s, i) => (
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
            <div className="flex justify-center mb-4">
              {ICONS[s.icon]}
            </div>

            <h3 className="font-semibold text-lg mb-2">
              {s.title}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
