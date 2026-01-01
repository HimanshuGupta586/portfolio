"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import type { ReactNode } from "react";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 pt-14 pb-10 mt-28 px-6">

      {/* Top Section */}
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">

        {/* Branding */}
        <h3 className="text-xl font-semibold tracking-tight">
          Himanshu Gupta <span className="text-primary">• Developer</span>
        </h3>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <FooterLink href="#about">About</FooterLink>
          <FooterLink href="#projects">Projects</FooterLink>
          <FooterLink href="#skills">Skills</FooterLink>
          <FooterLink href="#services">Services</FooterLink>
          <FooterLink href="#timeline">Journey</FooterLink>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4 mt-2">
          <Social
            href="https://github.com/HimanshuGupta586"
            icon={<Github size={18} />}
          />
          <Social
            href="https://linkedin.com/in/himanshugupta586"
            icon={<Linkedin size={18} />}
          />
          <Social
            href="mailto:programmerhg001@email.com"
            icon={<Mail size={18} />}
          />
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-10">
        <p className="text-xs text-muted-foreground/80 tracking-wide">
          © {new Date().getFullYear()} Himanshu Gupta — Crafted with precision & passion.
        </p>
      </div>
    </footer>
  );
}

/* ----------------------------- */
/* Mini Components */
/* ----------------------------- */

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="font-medium transition-colors hover:text-primary"
    >
      {children}
    </a>
  );
}

function Social({
  href,
  icon,
}: {
  href: string;
  icon: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        p-2 rounded-full border border-border
        flex items-center justify-center
        transition-all duration-200
        hover:border-primary/70 hover:text-primary
        hover:scale-110
        active:scale-95
      "
    >
      {icon}
    </a>
  );
}
