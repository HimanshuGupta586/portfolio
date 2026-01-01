"use client";

import { MessageSquareQuote } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-28 px-6 max-w-6xl mx-auto">

      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-16">
        Testimonials <span className="text-primary">✦</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS_DATA.map((item, i) => (
          <TestimonialCard
            key={i}
            name={item.name}
            text={item.text}
          />
        ))}
      </div>
    </section>
  );
}

/* ------------------ CARD COMPONENT ------------------ */

function TestimonialCard({
  name,
  text,
}: {
  name: string;
  text: string;
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
      {/* Neon Top Strip */}
      <div
        className="
          absolute inset-x-0 top-0 h-[3px]
          bg-primary/60 rounded-t-2xl
          shadow-[0_0_10px_var(--primary)]
        "
      />

      <div className="flex justify-center mb-4">
        <MessageSquareQuote className="text-primary" size={30} />
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4 text-center">
        “{text}”
      </p>

      <h4 className="font-semibold text-center text-[0.95rem] tracking-tight">
        — {name}
      </h4>
    </div>
  );
}
