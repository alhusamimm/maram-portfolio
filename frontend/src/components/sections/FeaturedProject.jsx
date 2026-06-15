import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, ExternalLink, Target, Lightbulb, Wrench, Trophy, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/sections/SectionHeading";
import { FEATURED_PROJECT } from "@/data/portfolio";

const blocks = [
  { key: "problem", title: "Problem", icon: Target, field: "problem" },
  { key: "solution", title: "Solution", icon: Lightbulb, field: "solution" },
  { key: "outcome", title: "Outcome", icon: Trophy, field: "outcome" },
];

export default function FeaturedProject() {
  return (
    <section
      id="featured"
      data-testid="featured-project-section"
      className="py-24 sm:py-32 relative"
    >
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full radial-glow opacity-60" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          kicker="featured_project"
          title={FEATURED_PROJECT.title}
          subtitle={FEATURED_PROJECT.subtitle}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="glass-card p-6 sm:p-10 relative overflow-hidden"
          data-testid="featured-project-card"
        >
          {/* Decorative gradient */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#00377e]/25 blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#00D1FF]/15 blur-[100px]" />

          <div className="relative grid lg:grid-cols-3 gap-6">
            {blocks.map((b, i) => (
              <motion.div
                key={b.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl bg-[#00132d]/60 border border-[#7dd3fc]/15 p-6"
                data-testid={`featured-block-${b.key}`}
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#001e45]/80 border border-[#00D1FF]/30 mb-4">
                  <b.icon size={18} style={{ color: "#00D1FF" }} />
                </div>
                
                <h4 className="font-heading font-bold text-lg text-[#E5E7EB] mb-2">{b.title}</h4>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">{FEATURED_PROJECT[b.field]}</p>
              </motion.div>
            ))}
          </div>

          {/* Tools row */}
          <div className="relative mt-8 pt-8 border-t border-[#7dd3fc]/15">
            <div className="flex items-center gap-2 mb-4 text-[#00D1FF]">
              <Wrench size={16} style={{ color: "#00D1FF" }} />
              <span className="font-mono-acc text-xs tracking-widest">tools_used</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {FEATURED_PROJECT.tools.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full text-xs font-medium border border-[#7dd3fc]/30 bg-[#001e45]/60 text-[#bae6fd]"
                  data-testid={`featured-tool-${t.toLowerCase()}`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mt-8 flex flex-wrap gap-3">
            <a
              href={FEATURED_PROJECT.demo || "#"}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="featured-live-demo-btn"
              className="glow-button"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
            <Link
              to={`/project/${FEATURED_PROJECT.slug}`}
              data-testid="featured-view-project-btn"
              className="ghost-button"
            >
              View Full Details
              <ArrowRight size={16} style={{ color: "#00D1FF" }} />
            </Link>
            <a
              href={FEATURED_PROJECT.github || "#"}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="featured-github-btn"
              className="ghost-button"
            >
              <Github size={16} style={{ color: "#00D1FF" }} />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
