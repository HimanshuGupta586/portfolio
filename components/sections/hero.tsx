"use client";

import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import { HERO_DATA } from "@/data/hero";

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

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-6">
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

        {/* Typewriter Line (SEPARATE) */}
        <div className="text-lg sm:text-xl font-medium text-primary h-[1.6em]">
          <Typewriter
            key={index}
            words={HERO_DATA.words}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={45}
            delaySpeed={1200}
          />
        </div>

        {/* Supporting Paragraph */}
        <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
          {HERO_DATA.introPrefix}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
          <Button size="lg" className="rounded-full w-full sm:w-auto">
            <a
              href={HERO_DATA.links.primary}
              className="w-full h-full flex items-center justify-center"
            >
              {HERO_DATA.buttons.primary}
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="rounded-full w-full sm:w-auto dark:text-white"
          >
            <a
              href={HERO_DATA.links.secondary}
              target="_blank"
              className="w-full h-full flex items-center justify-center"
            >
              {HERO_DATA.buttons.secondary}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
