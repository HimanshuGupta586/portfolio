"use client";

import { MessageSquareQuote } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Testimonials
          </h2>
        </header>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS_DATA.map((item, i) => (
            <TestimonialCard
              key={i}
              name={item.name}
              text={item.text}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ------------------ Testimonial Card ------------------ */

function TestimonialCard({
  name,
  text,
}: {
  name: string;
  text: string;
}) {
  return (
    <article
      className="
        p-6 rounded-xl border border-border bg-card
        transition-all duration-200
        hover:scale-[1.02]
        hover:shadow-md hover:shadow-primary/5
        active:scale-[0.98]
      "
    >
      <div className="flex justify-center mb-4">
        <MessageSquareQuote
          className="text-primary"
          size={26}
          aria-hidden
        />
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4 text-center">
        “{text}”
      </p>

      <p className="text-sm font-medium text-center">
        — {name}
      </p>
    </article>
  );
}
