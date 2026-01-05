"use client";

import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import { HERO_DATA } from "@/data/hero";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-24 left-4 w-[320px] h-[320px]
                     rounded-full bg-primary/30 blur-[110px]"
        />
        <div
          className="absolute bottom-0 right-4 w-[300px] h-[300px]
                     rounded-full bg-accent/30 blur-[110px]"
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

        {/* Typewriter */}
        <div className="text-lg sm:text-xl font-medium text-primary h-[1.6em]">
          <Typewriter
            words={HERO_DATA.words}
            loop={0} // infinite loop
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={45}
            delaySpeed={1200}
          />
        </div>

        {/* Intro */}
        <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
          {HERO_DATA.intro}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
          <Button size="lg" className="rounded-full w-full sm:w-auto">
            <a
              href={HERO_DATA.buttons.primary.href}
              className="w-full h-full flex items-center justify-center"
            >
              {HERO_DATA.buttons.primary.label}
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="rounded-full w-full sm:w-auto dark:text-white"
          >
            <a
              href={HERO_DATA.buttons.secondary.href}
              target={
                HERO_DATA.buttons.secondary.external ? "_blank" : undefined
              }
              rel={
                HERO_DATA.buttons.secondary.external
                  ? "noopener noreferrer"
                  : undefined
              }
              className="w-full h-full flex items-center justify-center"
            >
              {HERO_DATA.buttons.secondary.label}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
