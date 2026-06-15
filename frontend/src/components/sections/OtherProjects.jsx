import { motion } from "framer-motion";
import { Github, Play, Code2 } from "lucide-react";
import SectionHeading from "@/components/sections/SectionHeading";
import { OTHER_PROJECTS } from "@/data/portfolio";

export default function OtherProjects() {
  return (
    <section
      id="projects"
      data-testid="other-projects-section"
      className="py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          kicker="projects"
          title="Projects & Experiments"
          subtitle="A selection of academic and personal builds across ML, NLP, cryptography, and full-stack systems."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {OTHER_PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-7 flex flex-col"
              data-testid={`other-project-card-${i}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#00132d]/70 border border-[#00D1FF]/25">
                  <Code2 size={20} style={{ color: "#00D1FF" }} />
                </div>
                <span className="font-mono-acc text-[10px] tracking-widest text-[#7dd3fc]">
                  0{i + 1}
                </span>
              </div>

              <h3 className="font-heading font-bold text-lg text-[#E5E7EB]">{p.title}</h3>
              <p className="mt-2 text-sm text-[#9CA3AF] leading-relaxed flex-1">
                {p.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full text-[11px] font-medium border border-[#7dd3fc]/25 bg-[#00132d]/60 text-[#bae6fd]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3 pt-5 border-t border-[#7dd3fc]/15">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-[#9CA3AF] link-glow"
                  data-testid={`other-project-github-${i}`}
                >
                  <Github size={14} style={{ color: "#00D1FF" }} />
                  GitHub
                </a>
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-[#9CA3AF] link-glow"
                  data-testid={`other-project-demo-${i}`}
                >
                  <Play size={14} style={{ color: "#00D1FF" }} />
                  Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
