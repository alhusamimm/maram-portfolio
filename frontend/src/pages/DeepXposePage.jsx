import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Target,
  Lightbulb,
  Trophy,
  Wrench,
  CheckCircle2,
  ListChecks,
  Layers,
  Cpu,
  Database,
  Eye,
  Server,
  Sparkles,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { FEATURED_PROJECT } from "@/data/portfolio";

const TECH_ICONS = {
  Frontend: Layers,
  Backend: Server,
  "AI & Machine Learning": Cpu,
  "Computer Vision": Eye,
  Database,
  "Data Processing": ListChecks,
  "Hardware Acceleration": Zap,
};

export default function DeepXposePage() {
  const navigate = useNavigate();
  const p = FEATURED_PROJECT;

  return (
    <div className="bg-[#00132d] text-[#E5E7EB] min-h-screen" data-testid="deepxpose-page">
      <Navbar />
      <main className="pt-28 sm:pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <button
            type="button"
            onClick={() => navigate(-1)}
            data-testid="deepxpose-back"
            className="inline-flex items-center gap-2 text-sm font-mono-acc tracking-widest text-[#bae6fd] link-glow mb-8"
          >
            <ArrowLeft size={14} style={{ color: "#00D1FF" }} />
            BACK
          </button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 sm:p-10 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-16 w-72 h-72 rounded-full bg-[#00377e]/30 blur-[110px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-[#00D1FF]/15 blur-[110px] pointer-events-none" />

            <div className="relative">
              <div className="section-title-mono mb-3">// featured_project · case_study</div>
              <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#E5E7EB] leading-tight">
                <span className="gradient-text">{p.title.split(":")[0]}</span>
                <span className="block mt-2 text-xl sm:text-2xl lg:text-3xl text-[#E5E7EB]/90 font-bold">
                  {p.title.split(":").slice(1).join(":").trim()}
                </span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#9CA3AF] leading-relaxed max-w-3xl">
                {p.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="deepxpose-live-demo"
                    className="glow-button"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="deepxpose-github"
                  className="ghost-button"
                >
                  <Github size={16} style={{ color: "#00D1FF" }} />
                  View on GitHub
                </a>
                <Link to="/" data-testid="deepxpose-home-link" className="ghost-button">
                  Back to Portfolio
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Overview */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 glass-card p-7 sm:p-9"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#00132d]/70 border border-[#00D1FF]/30">
                <Sparkles size={18} style={{ color: "#00D1FF" }} />
              </div>
              <h2 className="font-heading font-bold text-2xl text-[#E5E7EB]">Project Overview</h2>
            </div>
            <p className="text-base text-[#9CA3AF] leading-relaxed">{p.overview}</p>
          </motion.section>

          {/* Problem / Solution / Outcome */}
          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Problem", body: p.problem, key: "problem" },
              { icon: Lightbulb, title: "Solution", body: p.solution, key: "solution" },
              { icon: Trophy, title: "Outcome", body: p.outcome, key: "outcome" },
            ].map((b, i) => (
              <motion.div
                key={b.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#001e45]/80 border border-[#00D1FF]/30 mb-4">
                  <b.icon size={18} style={{ color: "#00D1FF" }} />
                </div>
                
                <h3 className="font-heading font-bold text-lg text-[#E5E7EB] mb-2">{b.title}</h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">{b.body}</p>
              </motion.div>
            ))}
          </div>

          {/* Key Features + My Contribution */}
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-7 sm:p-8"
              data-testid="deepxpose-features"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#00132d]/70 border border-[#00D1FF]/30">
                  <ListChecks size={18} style={{ color: "#00D1FF" }} />
                </div>
                <h2 className="font-heading font-bold text-xl text-[#E5E7EB]">Key Features</h2>
              </div>
              <ul className="space-y-2.5">
                {p.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg bg-[#00132d]/40 border border-[#7dd3fc]/15"
                  >
                    <CheckCircle2 size={16} style={{ color: "#00D1FF" }} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#E5E7EB]">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-7 sm:p-8"
              data-testid="deepxpose-contribution"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#002d67] to-[#00377e] border border-[#00D1FF]/40">
                  <Sparkles size={18} className="text-white" />
                </div>
                <h2 className="font-heading font-bold text-xl text-[#E5E7EB]">My Contribution</h2>
              </div>
              <ul className="space-y-2.5">
                {p.contribution.map((c, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg bg-[#00132d]/40 border border-[#7dd3fc]/15"
                  >
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#002d67] to-[#00377e] border border-[#00D1FF]/40 text-[10px] font-bold text-white flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-sm text-[#E5E7EB]">{c}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

          {/* Technologies (grouped) */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 glass-card p-7 sm:p-9"
            data-testid="deepxpose-technologies"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#00132d]/70 border border-[#00D1FF]/30">
                <Wrench size={18} style={{ color: "#00D1FF" }} />
              </div>
              <h2 className="font-heading font-bold text-2xl text-[#E5E7EB]">Technologies</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(p.technologies).map(([group, items]) => {
                const Icon = TECH_ICONS[group] || Wrench;
                return (
                  <div
                    key={group}
                    className="rounded-xl bg-[#00132d]/50 border border-[#7dd3fc]/15 p-5"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Icon size={14} style={{ color: "#00D1FF" }} />
                      <div className="font-mono-acc text-[10px] tracking-widest text-[#00D1FF]">
                        {group.toUpperCase()}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {items.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-full text-[11px] font-medium border border-[#7dd3fc]/25 bg-[#001e45]/60 text-[#bae6fd]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* Tools used (flat list) */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 glass-card p-7 sm:p-9"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#00132d]/70 border border-[#00D1FF]/30">
                <Cpu size={18} style={{ color: "#00D1FF" }} />
              </div>
              <h2 className="font-heading font-bold text-xl text-[#E5E7EB]">Tools Used</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {p.tools.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full text-xs font-medium border border-[#7dd3fc]/30 bg-[#001e45]/50 text-[#bae6fd] hover:border-[#00D1FF]/60 hover:text-[#00D1FF] transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.section>

          {/* CTA */}
          <div className="mt-12 flex flex-wrap gap-3">
            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button"
                data-testid="deepxpose-live-demo-footer"
              >
                <ExternalLink size={16} />
                Open Live Demo
              </a>
            )}
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-button"
              data-testid="deepxpose-github-footer"
            >
              <Github size={16} style={{ color: "#00D1FF" }} />
              Explore the Repository
            </a>
            <Link to="/#projects" className="ghost-button" data-testid="deepxpose-back-projects">
              Back to Projects
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
