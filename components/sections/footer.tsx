"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import type { ReactNode } from "react";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-28 px-6">
      <div className="max-w-6xl mx-auto py-14 flex flex-col items-center gap-6">

        {/* Branding */}
        <h3 className="text-lg font-semibold tracking-tight">
          Himanshu Gupta <span className="text-primary">• Full-Stack Developer</span>
        </h3>

        {/* Navigation */}
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
        >
          <FooterLink href="#about">About</FooterLink>
          <FooterLink href="#projects">Projects</FooterLink>
          <FooterLink href="#skills">Skills</FooterLink>
          <FooterLink href="#services">Services</FooterLink>
          <FooterLink href="#timeline">Journey</FooterLink>
        </nav>

        {/* Socials */}
        <div className="flex gap-4 mt-2">
          <Social
            href="https://github.com/HimanshuGupta586"
            label="GitHub"
            icon={<Github size={18} />}
          />
          <Social
            href="https://linkedin.com/in/himanshugupta586"
            label="LinkedIn"
            icon={<Linkedin size={18} />}
          />
          <Social
            href="mailto:programmerhg001@email.com"
            label="Email"
            icon={<Mail size={18} />}
          />
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground tracking-wide text-center mt-6">
          © {new Date().getFullYear()} Himanshu Gupta. Built with care and clarity.
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
      className="font-medium transition-colors duration-200 hover:text-primary"
    >
      {children}
    </a>
  );
}

function Social({
  href,
  icon,
  label,
}: {
  href: string;
  icon: ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        p-2 rounded-md border border-border
        transition-all duration-200
        hover:border-primary hover:text-primary
        active:scale-95
      "
    >
      {icon}
    </a>
  );
}
