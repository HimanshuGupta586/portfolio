// src/components/Navbar.tsx
"use client"

import { useEffect, useState } from "react"
import ModeToggle from "@/components/themeToggle"
import Link from "next/link"
import { Menu, X } from "lucide-react"

// sections
const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "timeline", label: "Timeline" },
  { id: "testimonials", label: "Testimonials" },
]

export default function Navbar() {
  const [active, setActive] = useState("hero")
  const [open, setOpen] = useState(false)

  // track section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.4 }
    )

    sections.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // smoother scroll
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setOpen(false)
  }

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-30 
                         border-b border-border bg-background">
        <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="font-semibold tracking-tight text-lg">
            <span className="text-primary">Himanshu</span>.dev
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-sm items-center">
            {sections.map(s => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`relative px-2 py-1 font-medium transition-colors
                  ${active === s.id ? "text-primary" : "text-muted-foreground"}
                  hover:text-foreground`}
              >
                {s.label}

                {active === s.id && (
                  <span
                    className="absolute left-0 right-0 -bottom-1 h-0.5 
                               bg-primary rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <ModeToggle />

            {/* Mobile Menu Toggle */}
            <button onClick={() => setOpen(true)} className="md:hidden">
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/40">

          {/* Drawer Panel */}
          <div
            className="absolute right-0 top-0 w-64 h-full bg-background
                       border-l border-border p-6 flex flex-col"
          >
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
                    ${active === s.id ? "text-primary" : "text-muted-foreground"}
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
  )
}
