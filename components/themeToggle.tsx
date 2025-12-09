"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme mode"
      className="
        relative w-16 h-8 rounded-full 
        flex items-center px-1
        backdrop-blur-xl 
        border border-border/50 
        bg-white/20 dark:bg-black/20
        shadow-[0_0_15px_rgba(0,0,0,0.15)]
        dark:shadow-[0_0_20px_rgba(0,0,0,0.45)]
        transition-colors duration-300
      "
    >
      {/* Sliding Knob */}
      <span
        className={`
          absolute w-7 h-7 rounded-full flex items-center justify-center
          shadow-[0_0_10px_rgba(0,0,0,0.25)]
          border border-white/30 backdrop-blur-2xl
          transition-all duration-300 ease-[0.22,1,0.36,1]
          ${isDark 
            ? "translate-x-0.5 bg-primary/80 shadow-[0_0_12px_var(--primary)]" 
            : "translate-x-8 bg-yellow-400/90 shadow-[0_0_12px_rgba(255,200,0,0.7)]"
          }
        `}
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-white" />
        ) : (
          <Sun className="w-4 h-4 text-white" />
        )}
      </span>
    </button>
  );
}
