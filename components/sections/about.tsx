"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { ABOUT_DATA } from "@/data/about";

const iconMap: Record<string, ReactNode> = {
  github: <Github size={20} />,
  linkedin: <Linkedin size={20} />,
  mail: <Mail size={20} />,
};

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">

        {/* Heading */}
        <div className="flex items-center gap-4">
          <span className="text-3xl md:text-4xl font-semibold">
            {ABOUT_DATA.heading}
          </span>

          <div className="h-[3px] w-[28%] bg-primary rounded-full" />
        </div>

        {/* Bio */}
        <p className="max-w-3xl text-muted-foreground md:text-lg text-[0.94rem] leading-relaxed">
          {ABOUT_DATA.bio}
        </p>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {ABOUT_DATA.infoCards.map((card, i) => (
            <InfoCard key={i} title={card.title} text={card.text} />
          ))}
        </div>

        {/* Stats + Buttons + Socials */}
        <div className="flex flex-col gap-8">

          {/* Stats */}
          <div className="grid grid-cols-3 max-w-md">
            {ABOUT_DATA.stats.map((s, i) => (
              <Stat key={i} number={s.number} label={s.label} />
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button className="rounded-full px-6 flex items-center gap-2">
              <a
                href={ABOUT_DATA.buttons.resume.link}
                className="w-full h-full flex items-center justify-center"
              >
                {ABOUT_DATA.buttons.resume.label}
              </a>
              <ArrowRight size={17} />
            </Button>

            <Button
              variant="outline"
              className="rounded-full dark:text-white"
            >
              <a
                href={ABOUT_DATA.buttons.contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex items-center justify-center"
              >
                {ABOUT_DATA.buttons.contact.label}
              </a>
            </Button>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            {ABOUT_DATA.socials.map((s, i) => (
              <Social key={i} icon={iconMap[s.icon]} link={s.link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Components ---------------- */

function InfoCard({ title, text }: { title: string; text: string }) {
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
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {text}
      </p>
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-2xl font-bold">{number}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function Social({ icon, link }: { icon: ReactNode; link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        p-2 rounded-md border border-border
        transition-colors duration-200
        hover:border-primary
        hover:text-primary
        active:scale-95
      "
    >
      {icon}
    </a>
  );
}
