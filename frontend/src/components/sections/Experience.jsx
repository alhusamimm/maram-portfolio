import { motion } from "framer-motion";
import { Briefcase, Check, FileText } from "lucide-react";
import SectionHeading from "@/components/sections/SectionHeading";
import PDFViewer from "@/components/PDFViewer";
import { EXPERIENCE } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="py-24 sm:py-32 bg-[#00132d]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          kicker="experience"
          title="Roles where I built real systems."
          subtitle="Internships across AI, web platforms, and mobile — shipping production work across multiple companies."
        />

        <div className="relative">
          {/* Vertical gradient line */}
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#002d67] via-[#00377e] to-[#00D1FF]" />

          <div className="space-y-10 sm:space-y-16">
            {EXPERIENCE.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={exp.role + exp.company}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative grid grid-cols-1 sm:grid-cols-2 sm:gap-12 items-start"
                  data-testid={`experience-item-${idx}`}
                >
                  {/* Timeline dot */}
                  <span className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-6 w-4 h-4 rounded-full bg-[#00D1FF] border-2 border-[#00132d] dot-pulse z-10" />

                  {/* Card */}
                  <div
                    className={`pl-12 sm:pl-0 ${
                      isLeft
                        ? "sm:col-start-1 sm:pr-12"
                        : "sm:col-start-2 sm:pl-12"
                    }`}
                  >
                    <div className="glass-card p-6 sm:p-7 w-full">
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <div className="inline-flex items-center gap-2 text-[#00D1FF] font-mono-acc text-[10px] tracking-widest">
                          <Briefcase size={14} style={{ color: "#00D1FF" }} />
                          {exp.period}
                        </div>
                        <span className="font-mono-acc text-[10px] tracking-widest text-[#7dd3fc]">
                          0{idx + 1}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-xl text-[#E5E7EB]">
                        {exp.role}
                      </h3>
                      <div className="mt-1 text-sm font-medium text-[#7dd3fc]">
                        {exp.company}
                      </div>
                      <ul className="mt-4 space-y-2">
                        {exp.bullets.map((b, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-sm text-[#9CA3AF] leading-relaxed"
                          >
                            <Check
                              size={16}
                              style={{ color: "#00D1FF" }}
                              className="mt-0.5 flex-shrink-0"
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      {exp.certificate && (
                        <div className="mt-5 pt-5 border-t border-[#7dd3fc]/15">
                          <PDFViewer
                            url={exp.certificate.url}
                            title={exp.certificate.title}
                            subtitle={exp.company}
                            testIdPrefix={`exp-cert-${idx}`}
                            trigger={
                              <button
                                type="button"
                                data-testid={`experience-view-cert-${idx}`}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border border-[#7dd3fc]/30 text-[#bae6fd] hover:border-[#00D1FF]/60 hover:text-[#00D1FF] hover:shadow-[0_0_18px_rgba(0,209,255,0.2)] transition-all"
                              >
                                <FileText size={14} style={{ color: "#00D1FF" }} />
                                View Certificate
                              </button>
                            }
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
