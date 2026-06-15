import { motion } from "framer-motion";
import { ExternalLink, Globe, Wrench } from "lucide-react";
import SectionHeading from "@/components/sections/SectionHeading";
import { LIVE_PROJECTS } from "@/data/portfolio";

export default function LiveProjects() {
  return (
    <section
      id="live"
      data-testid="live-projects-section"
      className="py-24 sm:py-32 bg-[#00132d]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          kicker="live_projects"
          title="Deployed Systems"
          subtitle="Projects developed and deployed during my internships — currently live and accessible, plus selected work-in-progress builds."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {LIVE_PROJECTS.map((p, i) => {
            const isDev = !!p.inDevelopment;
            const isLink = !isDev && !!p.url;
            const Wrapper = isLink ? motion.a : motion.div;
            const wrapperProps = isLink
              ? { href: p.url, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <Wrapper
                key={p.title}
                {...wrapperProps}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`glass-card p-7 group relative overflow-hidden block ${
                  isDev ? "cursor-default" : "cursor-pointer"
                }`}
                data-testid={`live-project-card-${i}`}
              >
                {/* Accent gradient strip */}
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${p.accent}`} />

                {/* Status pill */}
                <div className="flex items-center justify-between mb-5">
                  {isDev ? (
                    <div
                      className="inline-flex items-center gap-2 text-[10px] tracking-widest font-mono-acc text-[#bae6fd]"
                      data-testid={`live-project-status-dev-${i}`}
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[#bae6fd] opacity-75 animate-ping" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#bae6fd]" />
                      </span>
                      IN DEV
                    </div>
                  ) : (
                    <div
                      className="inline-flex items-center gap-2 text-[10px] tracking-widest font-mono-acc text-[#00D1FF]"
                      data-testid={`live-project-status-live-${i}`}
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[#00D1FF] opacity-75 animate-ping" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00D1FF]" />
                      </span>
                      LIVE
                    </div>
                  )}
                  {isDev ? (
                    <Wrench size={18} style={{ color: "#00D1FF" }} />
                  ) : (
                    <Globe size={18} style={{ color: "#00D1FF" }} />
                  )}
                </div>

                <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#E5E7EB] group-hover:text-[#bae6fd] transition-colors">
                  {p.title}
                </h3>
                <div className="mt-1 text-sm text-[#7dd3fc] font-medium">{p.subtitle}</div>
                <p className="mt-3 text-sm text-[#9CA3AF] leading-relaxed">{p.description}</p>

                <div className="mt-5 flex items-center justify-between pt-5 border-t border-[#7dd3fc]/15">
                  <div className="text-xs text-[#9CA3AF]">
                    <span className="font-mono-acc tracking-widest text-[#00D1FF]">ROLE:</span>{" "}
                    <span className="text-[#E5E7EB] font-medium">{p.role}</span>
                  </div>
                  {isDev ? (
                    <span
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#bae6fd]"
                      data-testid={`live-project-cta-dev-${i}`}
                    >
                      <Wrench size={13} style={{ color: "#00D1FF" }} />
                      In Development
                    </span>
                  ) : (
                    <span
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#bae6fd] group-hover:text-[#00D1FF] transition-colors"
                      data-testid={`live-project-cta-visit-${i}`}
                    >
                      Visit
                      <ExternalLink size={14} />
                    </span>
                  )}
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
