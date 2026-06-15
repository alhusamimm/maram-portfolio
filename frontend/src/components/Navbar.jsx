import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { NAV_LINKS, PERSONAL } from "@/data/portfolio";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#00132d]/80 border-b border-[#001e45]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <a
          href="#hero"
          data-testid="nav-logo"
          className="flex items-center gap-2 group"
        >
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#002d67] to-[#00377e] font-heading font-black text-sm text-white shadow-[0_0_18px_rgba(157,78,221,0.55)] border border-[#7dd3fc]/40">
            {PERSONAL.initials}
          </span>
          <span className="font-heading font-bold tracking-tight text-[#E5E7EB] hidden sm:inline">
            Maram<span className="text-[#00D1FF]">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                data-testid={`nav-${l.label.toLowerCase()}-link`}
                href={l.href}
                className="text-sm text-[#9CA3AF] link-glow font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          data-testid="nav-cta-button"
          className="hidden lg:inline-flex glow-button text-sm"
        >
          <Sparkles size={16} style={{ color: "#00D1FF" }} />
          Let&apos;s Connect
        </a>

        <div className="hidden lg:inline-flex ml-2">
          <ThemeToggle />
        </div>

        {/* Mobile menu toggle */}
        <button
          data-testid="mobile-menu-toggle"
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-[#7dd3fc]/20 bg-[#001e45]/40 text-[#E5E7EB]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} style={{ color: "#00D1FF" }} /> : <Menu size={18} style={{ color: "#00D1FF" }} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div
          data-testid="mobile-menu"
          className="lg:hidden border-t border-[#001e45] bg-[#00132d]/95 backdrop-blur-xl"
        >
          <ul className="px-6 py-4 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  data-testid={`mobile-nav-${l.label.toLowerCase()}-link`}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-[#E5E7EB] font-medium link-glow"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="glow-button text-sm w-full"
                data-testid="mobile-nav-cta-button"
              >
                Let&apos;s Connect
              </a>
            </li>
            <li className="pt-2 flex items-center justify-between">
              <span className="text-xs font-mono-acc tracking-widest text-[#7dd3fc]">// theme</span>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
