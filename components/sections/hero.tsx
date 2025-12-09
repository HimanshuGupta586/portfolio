"use client";

import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { motion, easeOut } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import { HERO_DATA } from "@/data/hero";

const NeuralCanvas = dynamic(() => import("@/components/3d/NeuralCanvas"), { ssr: false });

// Animation presets
const smoothFadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
};

const smoothSlide = {
  hidden: { opacity: 0, x: 35 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: easeOut } },
};

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  // rotate typewriter words
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((i) => (i + 1) % HERO_DATA.words.length),
      2600
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute -top-24 left-4 rounded-full blur-[110px] 
                      ${HERO_DATA.glow.topLeft.color}`}
          style={{
            width: HERO_DATA.glow.topLeft.size,
            height: HERO_DATA.glow.topLeft.size,
          }}
        />

        <div
          className={`absolute bottom-0 right-4 rounded-full blur-[110px]
                      ${HERO_DATA.glow.bottomRight.color}`}
          style={{
            width: HERO_DATA.glow.bottomRight.size,
            height: HERO_DATA.glow.bottomRight.size,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Block */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={smoothFadeUp}
          className="flex flex-col gap-6 text-center md:text-left"
        >
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-semibold leading-tight">
            {HERO_DATA.title.split("interactive").map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <span className="text-primary font-bold">interactive</span>
                )}
              </span>
            ))}

          </h1>

          {/* Intro Paragraph with Typewriter */}
          <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto md:mx-0">
            {HERO_DATA.introPrefix}{" "}
            <span
              className="text-primary font-medium inline-block"
              style={{ minWidth: "260px" }}
            >
              <Typewriter
                key={index}
                words={[HERO_DATA.words[index]]}
                cursor
                cursorStyle="|"
                typeSpeed={55}
                deleteSpeed={45}
                delaySpeed={1100}
              />
            </span>
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="rounded-full w-full sm:w-auto cursor-pointer" size="lg">
              <a href={HERO_DATA.links.primary}  className="w-full h-full flex items-center justify-center">
                {HERO_DATA.buttons.primary}
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-full w-full sm:w-auto dark:text-white cursor-pointer"
            >
              <a href={HERO_DATA.links.secondary} target="_blank" className="w-full h-full flex items-center justify-center">
                {HERO_DATA.buttons.secondary}
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Right Block — 3D Canvas */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={smoothSlide}
          className="glass rounded-2xl shadow-lg overflow-hidden w-full h-[260px] sm:h-[330px] md:h-[380px] lg:h-[420px] flex items-center justify-center"
        >
          <Suspense fallback={<p className="text-muted-foreground">Loading 3D…</p>}>
            <NeuralCanvas />
          </Suspense>
        </motion.div>
      </div>
    </section>
  );
}
