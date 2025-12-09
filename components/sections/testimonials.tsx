"use client";

import { motion, easeOut } from "framer-motion";
import { MessageSquareQuote } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-28 px-6 max-w-6xl mx-auto">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: easeOut }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        Testimonials <span className="text-primary">✦</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS_DATA.map((item, i) => (
          <SmoothTestimonialCard
            key={i}
            index={i}
            name={item.name}
            text={item.text}
          />
        ))}
      </div>
    </section>
  );
}

/* ------------------ CARD COMPONENT ------------------ */

function SmoothTestimonialCard({
  index,
  name,
  text,
}: {
  index: number;
  name: string;
  text: string;
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
    </motion.div>
  );
}
