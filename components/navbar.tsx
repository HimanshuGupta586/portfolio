"use client";

import { useEffect, useRef, useState } from "react";
import ModeToggle from "@/components/themeToggle";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "timeline", label: "Timeline" },
  { id: "testimonials", label: "Testimonials" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);

  /* Intersection Observer (STABLE VERSION) */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top)
          );

        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-64px 0px 0px 0px",
        threshold: 0.25,
      }
    );

    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* Move indicator smoothly */
  useEffect(() => {
    if (!navRef.current || !indicatorRef.current) return;

    const activeBtn = navRef.current.querySelector(
      `[data-id="${active}"]`
    ) as HTMLElement | null;

    if (!activeBtn) return;

    const { offsetLeft, offsetWidth } = activeBtn;

    indicatorRef.current.style.transform = `translateX(${offsetLeft}px)`;
    indicatorRef.current.style.width = `${offsetWidth}px`;
  }, [active]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-30 border-b border-border bg-background">
        <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="font-semibold tracking-tight text-lg">
            <span className="text-primary">Himanshu</span>.dev
          </Link>

          {/* Desktop Menu */}
          <div
            ref={navRef}
            className="relative hidden md:flex gap-6 text-sm items-center"
          >
            {sections.map(s => (
              <button
                key={s.id}
                data-id={s.id}
                onClick={() => scrollTo(s.id)}
                className={`px-2 py-1 font-medium transition-colors
                  ${
                    active === s.id
                      ? "text-primary"
                      : "text-muted-foreground"
                  }
                  hover:text-foreground`}
              >
                {s.label}
              </button>
            ))}

            {/* Animated Indicator */}
            <span
              ref={indicatorRef}
              className="
                absolute -bottom-1 h-[3px] bg-primary rounded-full
                transition-all duration-300 ease-out
              "
            />
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <ModeToggle />
            <button onClick={() => setOpen(true)} className="md:hidden">
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu (unchanged) */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/40">
          <div className="absolute right-0 top-0 w-64 h-full bg-background border-l border-border p-6 flex flex-col">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-lg font-semibold">Menu</h3>
              <button onClick={() => setOpen(false)}>
                <X size={22} />
              </button>
            </div>

            <div className="flex flex-col gap-5">
              {sections.map(s => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`text-left text-base font-medium transition-colors
                    ${
                      active === s.id
                        ? "text-primary"
                        : "text-muted-foreground"
                    }
                    hover:text-foreground`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
