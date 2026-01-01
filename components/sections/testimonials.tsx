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
        p-6 rounded-xl border border-border bg-card
        cursor-pointer select-none
        transition-transform duration-200
        hover:scale-[1.02]
        active:scale-[0.98]
      "
    >
      <div className="flex justify-center mb-4">
        <MessageSquareQuote className="text-primary" size={28} />
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
