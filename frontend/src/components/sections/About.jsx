import { motion } from "framer-motion";
import { ShieldHalf, Sparkles, GraduationCap, Trophy } from "lucide-react";
import SectionHeading from "@/components/sections/SectionHeading";
import { ABOUT } from "@/data/portfolio";

const highlights = [
  { icon: GraduationCap, label: "GPA 3.96", desc: "Top academic performance" },
  { icon: ShieldHalf, label: "AI & Cybersecurity", desc: "Specialized academic track" },
  { icon: Sparkles, label: "Builder", desc: "Real-world deployed systems" },
  { icon: Trophy, label: "Research", desc: "Award-winning student research" },
];

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 sm:py-32"
    >
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-[#00377e]/15 blur-[140px]" />
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            kicker="about_me"
            title="At the intersection of intelligence and security."
          />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 glass-card p-8 sm:p-10"
            data-testid="about-text-card"
          >
            <p className="text-lg leading-relaxed text-[#E5E7EB]">{ABOUT}</p>
            <div className="mt-8 pt-8 border-t border-[#7dd3fc]/15">
              <div className="font-mono-acc text-xs tracking-widest text-[#00D1FF] mb-4">
                // current_focus
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Deepfake detection",
                  "Secure web platforms",
                  "Automation pipelines",
                  "Cloud integration",
                ].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-full text-xs font-medium border border-[#7dd3fc]/30 bg-[#00132d]/60 text-[#bae6fd]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card p-5"
                data-testid={`about-highlight-${i}`}
              >
                <h.icon size={22} style={{ color: "#00D1FF" }} />
                <div className="mt-3 font-heading font-bold text-[#E5E7EB]">{h.label}</div>
                <div className="text-xs text-[#9CA3AF] mt-1">{h.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
