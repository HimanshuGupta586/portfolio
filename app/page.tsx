// app/page.tsx
"use client"

import Navbar from "@/components/navbar"
import HeroSection from "@/components/sections/hero"
import AboutSection from "@/components/sections/about"
import SkillsSection from "@/components/sections/skills"
import ProjectsSection from "@/components/sections/projects"
import ServicesSection from "@/components/sections/services"
import TimelineSection from "@/components/sections/timeline"
import TestimonialsSection from "@/components/sections/testimonials"
import Footer from "@/components/sections/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <TimelineSection />
        <TestimonialsSection />
        <Footer />
      </main>
    </>
  )
}
