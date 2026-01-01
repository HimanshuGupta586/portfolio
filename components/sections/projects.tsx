"use client";

import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { PROJECTS_DATA } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">

      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-16">
        Featured <span className="text-primary">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PROJECTS_DATA.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}

/* --------------------------------------------- */
/*  CLEAN PROJECT CARD (GLOW-FREE)                */
/* --------------------------------------------- */

function ProjectCard({ project: p }: any) {
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
      {/* Thumbnail */}
      <div className="relative w-full h-44 rounded-xl overflow-hidden mb-4">
        <Image
          src={p.img}
          alt={p.title}
          fill
          className="object-cover transition-transform duration-200 hover:scale-105"
        />
      </div>

      {/* Text */}
      <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
      <p className="text-sm text-muted-foreground mb-3">
        {p.description}
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2 mb-4 text-[0.70rem] font-medium">
        {p.tech.map((t: string, i: number) => (
          <span
            key={i}
            className="px-2 py-1 rounded-md bg-muted text-foreground"
          >
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
          rel="noopener noreferrer"
          className="
            px-3 py-2 rounded-lg border border-border text-sm
            flex items-center gap-2
            transition-colors duration-200
            hover:border-primary hover:text-primary
          "
        >
          <Github size={16} /> Code
        </a>

        {/* Live */}
        {p.link && (
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-3 py-2 rounded-lg border border-border text-sm
              flex items-center gap-2
              transition-colors duration-200
              hover:border-primary hover:text-primary
            "
          >
            <ExternalLink size={16} /> Live
          </a>
        )}
      </div>
    </div>
  );
}
