// app/page.tsx
"use client"

import { motion } from "framer-motion"
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
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="min-h-screen"
      >
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <TimelineSection />
        <TestimonialsSection />
        <Footer />
      </motion.main>
    </>
  )
}
