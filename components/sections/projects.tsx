"use client";

import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { PROJECTS_DATA } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Featured <span className="text-primary">Projects</span>
          </h2>
        </header>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS_DATA.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------- */
/* Project Card                                  */
/* --------------------------------------------- */

function ProjectCard({ project: p }: { project: any }) {
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
      {/* Thumbnail */}
      <div className="relative w-full h-44 rounded-lg overflow-hidden mb-4">
        <Image
          src={p.img}
          alt={p.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold mb-1">{p.title}</h3>

      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {p.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-5 text-[0.70rem] font-medium">
        {p.tech.map((t: string, i: number) => (
          <span
            key={i}
            className="px-2 py-1 rounded-md bg-muted text-foreground"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
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
    </article>
  );
}
