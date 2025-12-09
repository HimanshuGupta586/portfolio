"use client";

import { motion, easeOut } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

import { PROJECTS_DATA } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: easeOut }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        Featured <span className="text-primary">Projects</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PROJECTS_DATA.map((project, i) => (
          <SmoothProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

/* --------------------------------------------- */
/*  PERFECT SMOOTH GLOW PROJECT CARD  */
/* --------------------------------------------- */

function SmoothProjectCard({ project: p, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: easeOut, delay: index * 0.08 }}

      whileHover={{
        scale: 1.045,
        "--glow": "1",
        transition: { duration: 0.12 }
      }}
      whileTap={{ scale: 0.97 }}

      className="
        relative p-6 rounded-xl border border-border bg-card shadow-sm
        cursor-pointer select-none
        transition-transform duration-0
      "
      style={{ willChange: "transform" }}
    >
      {/* Glow Layer */}
      <div
        className="absolute inset-0 pointer-events-none rounded-xl transition-shadow duration-0"
        style={{
          boxShadow: "0 0 calc(var(--glow) * 12px) var(--primary)",
        }}
      />

      {/* Thumbnail */}
      <motion.div
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.12, ease: [0.22, 1, 0.36, 1] }
        }}
        className="relative w-full h-44 rounded-xl overflow-hidden mb-4"
      >
        <Image src={p.img} alt={p.title} fill className="object-cover" />
      </motion.div>

      {/* Text */}
      <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
      <p className="text-sm text-muted-foreground mb-3">{p.description}</p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2 mb-4 text-[0.70rem] font-medium">
        {p.tech.map((t: string, i: number) => (
          <span key={i} className="px-2 py-1 rounded-md bg-primary/10 text-primary">
            {t}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center">

        {/* GitHub */}
        <a
          href={p.github}
          target="_blank"
          className="
            px-3 py-2 rounded-lg border border-border text-sm 
            flex items-center gap-2
            hover:border-primary/70 hover:text-primary
            transition-all duration-200
          "
        >
          <Github size={16} /> Code
        </a>

        {/* Live */}
        {p.link && (
          <a
            href={p.link}
            target="_blank"
            className="
              px-3 py-2 rounded-lg border border-border text-sm 
              flex items-center gap-2
              hover:border-primary/70 hover:text-primary
              transition-all duration-200
            "
          >
            <ExternalLink size={16} /> Live
          </a>
        )}
      </div>
    </motion.div>
  );
}
