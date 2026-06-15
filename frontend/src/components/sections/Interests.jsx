import { motion } from "framer-motion";
import { Heart, Rocket, ShieldCheck, Cloud, BrainCircuit, ScanSearch } from "lucide-react";
import SectionHeading from "@/components/sections/SectionHeading";
import { INTERESTS, LEARNING } from "@/data/portfolio";

const INTEREST_ICONS = [ShieldCheck, Rocket, Heart];
const LEARNING_ICONS = [BrainCircuit, ScanSearch, Cloud];

export default function Interests() {
  return (
    <section
      id="interests"
      data-testid="interests-section"
      className="py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          kicker="curiosity"
          title="What I love & what I'm exploring."
        />

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
            data-testid="interests-card"
          >
            <div className="font-mono-acc text-xs tracking-widest text-[#00D1FF] mb-4">
              // interests
            </div>
            <h3 className="font-heading font-bold text-2xl text-[#E5E7EB] mb-6">Areas I love</h3>
            <ul className="space-y-3">
              {INTERESTS.map((it, i) => {
                const Icon = INTEREST_ICONS[i] || Heart;
                return (
                  <li
                    key={it}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#00132d]/50 border border-[#7dd3fc]/15"
                    data-testid={`interest-${i}`}
                  >
                    <Icon size={20} style={{ color: "#00D1FF" }} />
                    <span className="text-[#E5E7EB] font-medium">{it}</span>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-8"
            data-testid="learning-card"
          >
            <div className="font-mono-acc text-xs tracking-widest text-[#00D1FF] mb-4">
              // currently_learning
            </div>
            <h3 className="font-heading font-bold text-2xl text-[#E5E7EB] mb-6">In the lab</h3>
            <ul className="space-y-3">
              {LEARNING.map((l, i) => {
                const Icon = LEARNING_ICONS[i] || Rocket;
                return (
                  <li
                    key={l}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#00132d]/50 border border-[#7dd3fc]/15"
                    data-testid={`learning-${i}`}
                  >
                    <Icon size={20} style={{ color: "#00D1FF" }} />
                    <span className="text-[#E5E7EB] font-medium">{l}</span>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
