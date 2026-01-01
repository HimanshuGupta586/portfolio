"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme mode"
      className="
        relative w-14 h-7 rounded-full
        flex items-center px-1
        border border-border
        bg-muted
        transition-colors duration-200
      "
    >
      {/* Sliding Knob */}
      <span
        className={`
          absolute w-6 h-6 rounded-full
          flex items-center justify-center
          border border-border
          transition-transform duration-300 ease-[0.22,1,0.36,1]
          ${isDark 
            ? "translate-x-0 bg-primary text-primary-foreground" 
            : "translate-x-7 bg-yellow-400 text-white"
          }
        `}
      >
        {isDark ? (
          <Moon className="w-3.5 h-3.5" />
        ) : (
          <Sun className="w-3.5 h-3.5" />
        )}
      </span>
    </button>
  );
}
