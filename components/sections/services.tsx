"use client"

import { motion, easeOut } from "framer-motion";
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

      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: easeOut }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        What I <span className="text-primary">Do</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {SERVICES_DATA.map((s, i) => (
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
              shadow-sm cursor-pointer select-none transition-transform duration-0
            "
            style={{ willChange: "transform, box-shadow" }}
          >

            <div className="flex justify-center mb-4">
              {ICONS[s.icon]}
            </div>

            <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
