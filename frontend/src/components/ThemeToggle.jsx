import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      data-testid="theme-toggle"
      className={`relative inline-flex items-center h-9 w-16 rounded-full border border-[#7dd3fc]/25 bg-[#001e45]/60 transition-all duration-300 hover:border-[#00D1FF]/60 ${className}`}
    >
      {/* Track icons */}
      <span className="absolute left-2 inline-flex items-center justify-center">
        <Sun
          size={13}
          className={`transition-opacity duration-300 ${isDark ? "opacity-40" : "opacity-100"}`}
          style={{ color: isDark ? "#7dd3fc" : "#0E7490" }}
        />
      </span>
      <span className="absolute right-2 inline-flex items-center justify-center">
        <Moon
          size={13}
          className={`transition-opacity duration-300 ${isDark ? "opacity-100" : "opacity-40"}`}
          style={{ color: "#00D1FF" }}
        />
      </span>

      {/* Thumb */}
      <span
        className={`relative z-10 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#002d67] to-[#00377e] shadow-[0_0_12px_rgba(0,209,255,0.35)] border border-[#7dd3fc]/40 transition-transform duration-300 ${
          isDark ? "translate-x-[34px]" : "translate-x-[2px]"
        }`}
      >
        {isDark ? (
          <Moon size={13} className="text-white" />
        ) : (
          <Sun size={13} className="text-white" />
        )}
      </span>
    </button>
  );
}
