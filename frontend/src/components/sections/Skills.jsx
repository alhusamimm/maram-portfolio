import { motion } from "framer-motion";
import { Terminal, Globe2, Brain, Wrench } from "lucide-react";
import SectionHeading from "@/components/sections/SectionHeading";
import { SKILLS } from "@/data/portfolio";

const ICONS = {
  Programming: Terminal,
  Web: Globe2,
  "AI & Data": Brain,
  Tools: Wrench,
};

export default function Skills() {
  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="py-24 sm:py-32 bg-[#00132d]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          kicker="tech_stack"
          title="Skills & Toolkit"
          subtitle="A pragmatic mix of languages, frameworks, and tooling shaped by AI, web, and security work."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((s, i) => {
            const Icon = ICONS[s.group] || Terminal;
            return (
              <motion.div
                key={s.group}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card p-6"
                data-testid={`skills-group-${i}`}
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#00132d]/70 border border-[#00D1FF]/30">
                  <Icon size={18} style={{ color: "#00D1FF" }} />
                </div>
                <div className="mt-4 font-heading font-bold text-[#E5E7EB]">{s.group}</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full text-xs font-medium border border-[#7dd3fc]/30 bg-[#001e45]/50 text-[#bae6fd] hover:border-[#00D1FF]/60 hover:text-[#00D1FF] transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
