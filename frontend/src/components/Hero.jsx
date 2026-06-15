import { motion } from "framer-motion";
import { ArrowRight, Mail, Shield, Cpu } from "lucide-react";
import ParticleSphere from "@/components/ParticleSphere";
import { PERSONAL } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg pt-24 pb-16"
    >
      {/* Background sphere */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[90vw] max-w-[900px] h-[90vw] max-h-[900px] opacity-90">
          <ParticleSphere />
        </div>
      </div>

      {/* Soft radial overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#002d67]/30 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-[#00D1FF]/10 blur-[140px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full grid lg:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          {/* Avatar pill */}
          <div className="inline-flex items-center gap-3 mb-8">
            <span
              data-testid="hero-avatar"
              className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#002d67] to-[#00377e] font-heading font-black text-base text-white border border-[#7dd3fc]/50 pulse-ring"
            >
              {PERSONAL.initials}
            </span>
            <span className="section-title-mono">cs-2026 // Jeddah</span>
          </div>

          <h1
            data-testid="hero-name"
            className="font-heading font-black text-4xl sm:text-5xl lg:text-7xl tracking-tighter leading-[1.05]"
          >
            <span className="gradient-text">{PERSONAL.name}</span>
          </h1>

          <p
            data-testid="hero-title"
            className="mt-6 font-body text-base sm:text-lg lg:text-xl text-[#bae6fd] font-light flex flex-wrap items-center gap-x-3 gap-y-2"
          >
            <span className="inline-flex items-center gap-2">
              <Cpu size={18} style={{ color: "#00D1FF" }} />
              AI
            </span>
            <span className="text-[#9CA3AF]">&</span>
            <span className="inline-flex items-center gap-2">
              <Shield size={18} style={{ color: "#00D1FF" }} />
              Cybersecurity Specialist
            </span>
            <span className="text-[#9CA3AF]">|</span>
            <span>Computer Science Student</span>
          </p>

          <p className="mt-6 text-base sm:text-lg text-[#9CA3AF] max-w-2xl leading-relaxed">
            {PERSONAL.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              data-testid="hero-view-work-cta"
              className="glow-button"
            >
              View My Work
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              data-testid="hero-contact-cta"
              className="ghost-button"
            >
              <Mail size={16} style={{ color: "#00D1FF" }} />
              Contact Me
            </a>
          </div>

          {/* Mini stats */}
          <div className="mt-14 grid grid-cols-3 max-w-md gap-6">
            <div data-testid="hero-stat-gpa">
              <div className="font-heading text-2xl font-bold text-[#E5E7EB]">3.96</div>
              <div className="text-xs uppercase tracking-widest text-[#9CA3AF] mt-1">GPA</div>
            </div>
            <div data-testid="hero-stat-projects">
              <div className="font-heading text-2xl font-bold text-[#E5E7EB]">7+</div>
              <div className="text-xs uppercase tracking-widest text-[#9CA3AF] mt-1">Projects</div>
            </div>
            <div data-testid="hero-stat-internships">
              <div className="font-heading text-2xl font-bold text-[#E5E7EB]">3</div>
              <div className="text-xs uppercase tracking-widest text-[#9CA3AF] mt-1">Internships</div>
            </div>
          </div>
        </motion.div>

        {/* Right-side info card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="glass-card p-7 max-w-md ml-auto floaty">
            <div className="flex items-center gap-2 text-[#00D1FF] font-mono-acc text-xs tracking-widest mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-[#00D1FF] dot-pulse"></span>
              CURRENTLY_ONLINE
            </div>
            <p className="text-[#E5E7EB] text-sm leading-relaxed">
              Designing intelligent systems at the intersection of{" "}
              <span className="text-[#7dd3fc] font-semibold">AI</span> and{" "}
              <span className="text-[#00D1FF] font-semibold">cybersecurity</span> — from
              deepfake detection to secure web platforms in production.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {["Python", "ML/NLP", "Flutter", "Frappe"].map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono-acc text-[#bae6fd] px-3 py-1.5 rounded-full border border-[#7dd3fc]/25 bg-[#00132d]/60 text-center"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-[#9CA3AF] text-[10px] tracking-[0.3em] uppercase font-mono-acc">
        <span>scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-[#7dd3fc] to-transparent" />
      </div>
    </section>
  );
}
