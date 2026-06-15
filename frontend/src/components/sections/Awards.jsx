import { motion } from "framer-motion";
import { Trophy, FileText, Award, BadgeCheck, Calendar, Building2, Eye, Sparkles } from "lucide-react";
import SectionHeading from "@/components/sections/SectionHeading";
import PDFViewer from "@/components/PDFViewer";
import AwardDetailModal from "@/components/AwardDetailModal";
import { AWARDS, CERTIFICATIONS } from "@/data/portfolio";

export default function Awards() {
  return (
    <section
      id="awards"
      data-testid="awards-section"
      className="py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          kicker="recognition"
          title="Awards & Certifications"
          subtitle="Recognition from academic competitions and professional certifications."
        />

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass-card p-7 sm:p-8 mb-8"
          data-testid="awards-card"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#00132d]/70 border border-[#00D1FF]/30">
              <Trophy size={20} style={{ color: "#00D1FF" }} />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#E5E7EB]">Awards</h3>
          </div>

          <ul className="grid sm:grid-cols-3 gap-3">
            {AWARDS.map((a, i) => {
              const isUgrf = a.title.includes("Undergraduate Research Forum");
              const isGermanDay = a.title.includes("German Day");
              const isGold = isUgrf || isGermanDay;
              const awardId = isUgrf ? "ugrf" : isGermanDay ? "germanDay" : null;

              const inner = (
                <>
                  {isGold ? (
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#C68B00] to-[#FFD966] shadow-[0_0_14px_rgba(255,184,0,0.45)] flex-shrink-0">
                      <Trophy size={16} className="text-[#00132d]" />
                    </div>
                  ) : (
                    <Award size={18} style={{ color: "#00D1FF" }} className="mt-0.5 flex-shrink-0" />
                  )}
                  <div className="min-w-0 text-left">
                    <div className={`font-semibold text-sm leading-snug ${isGold ? "text-[#FFD966]" : "text-[#E5E7EB]"}`}>
                      {a.title}
                    </div>
                    <div className={`text-[10px] font-mono-acc tracking-widest mt-1.5 ${isGold ? "text-[#FFD966]/80" : "text-[#7dd3fc]"}`}>
                      {a.year}
                    </div>
                    {isGold && (
                      <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-mono-acc tracking-widest text-[#FFD966]/80">
                        <Sparkles size={10} className="text-[#FFD966]" />
                        VIEW DETAILS
                      </div>
                    )}
                  </div>
                </>
              );

              if (isGold && awardId) {
                return (
                  <li key={a.title + i} data-testid={`award-item-${i}`}>
                    <AwardDetailModal
                      awardId={awardId}
                      trigger={
                        <button
                          type="button"
                          data-testid={`award-item-trigger-${i}`}
                          className="w-full flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-[#FFD966]/10 via-[#00132d]/50 to-[#00132d]/50 border border-[#FFD966]/40 hover:border-[#FFD966]/80 hover:shadow-[0_0_22px_rgba(255,184,0,0.25)] transition-all text-left"
                        >
                          {inner}
                        </button>
                      }
                    />
                  </li>
                );
              }
              return (
                <li
                  key={a.title + i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#00132d]/50 border border-[#7dd3fc]/15 hover:border-[#00D1FF]/40 transition-colors"
                  data-testid={`award-item-${i}`}
                >
                  {inner}
                </li>
              );
            })}
          </ul>
        </motion.div>

        {/* Certifications header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#00132d]/70 border border-[#00D1FF]/30">
              <BadgeCheck size={20} style={{ color: "#00D1FF" }} />
            </div>
            <h3 className="font-heading font-bold text-2xl text-[#E5E7EB]">Certifications</h3>
          </div>
          <span className="hidden sm:inline-flex font-mono-acc text-[10px] tracking-widest text-[#7dd3fc] px-3 py-1.5 rounded-full border border-[#7dd3fc]/20 bg-[#001e45]/40">
            {CERTIFICATIONS.length} CERTIFICATES
          </span>
        </div>

        {/* Certification cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((c, i) => (
            <motion.div
              key={c.title + i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-7 sm:p-8 relative overflow-hidden flex flex-col"
              data-testid={`cert-card-${i}`}
            >
              {/* Decorative gradient */}
              <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-[#00377e]/15 blur-[80px] pointer-events-none" />

              <div className="relative flex items-start justify-between gap-3 mb-5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#002d67] to-[#00377e] border border-[#7dd3fc]/40 shadow-[0_0_20px_rgba(157,78,221,0.35)]">
                  <BadgeCheck size={22} className="text-white" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-mono-acc tracking-widest border border-[#00D1FF]/30 bg-[#00132d]/60 text-[#00D1FF]">
                  {c.tag || "Certificate"}
                </span>
              </div>

              <h4 className="relative font-heading font-bold text-lg sm:text-xl text-[#E5E7EB] leading-snug">
                {c.title}
              </h4>

              <div className="relative mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#9CA3AF]">
                <span className="inline-flex items-center gap-1.5">
                  <Building2 size={13} style={{ color: "#00D1FF" }} />
                  <span className="text-[#bae6fd] font-medium">{c.organization}</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={13} style={{ color: "#00D1FF" }} />
                  <span className="font-mono-acc tracking-widest">{c.date}</span>
                </span>
              </div>

              <p className="relative mt-4 text-sm text-[#9CA3AF] leading-relaxed flex-1">
                {c.description}
              </p>

              <div className="relative mt-6 pt-5 border-t border-[#7dd3fc]/15">
                <PDFViewer
                  url={c.url}
                  title={c.title}
                  subtitle={`${c.organization} • ${c.date}`}
                  testIdPrefix={`cert-${i}`}
                  trigger={
                    <button
                      type="button"
                      data-testid={`cert-view-btn-${i}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-[#002d67] to-[#00377e] text-white border border-transparent hover:border-[#00D1FF] hover:shadow-[0_0_22px_rgba(0,209,255,0.4)] transition-all group"
                    >
                      <Eye size={15} className="text-white" />
                      View Certificate
                      <span className="ml-0.5 text-white/70 group-hover:text-white transition-colors">→</span>
                    </button>
                  }
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
