import { useState } from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  ShieldCheck,
  Cpu,
  FileText,
  Image as ImageIcon,
  Sparkles,
  MapPin,
  Search,
  Users,
  Layers,
  BarChart3,
  CheckCircle2,
  Building2,
} from "lucide-react";
import SectionHeading from "@/components/sections/SectionHeading";
import PDFViewer from "@/components/PDFViewer";
import Lightbox from "@/components/Lightbox";
import AwardDetailModal from "@/components/AwardDetailModal";
import {
  MUSEUM_GALLERY,
  SMART_CITY_PAPER_URL,
  VR_PAPER_URL,
  RESEARCH_JOURNEY,
} from "@/data/research";

const JOURNEY_ICONS = [Search, MapPin, Users, Layers, BarChart3, CheckCircle2];

function SmartCityCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl border border-[#FFD966]/35 bg-gradient-to-br from-[#00132d] via-[#001e45] to-[#00132d] p-7 sm:p-9 shadow-[0_0_45px_rgba(255,184,0,0.12)]"
      data-testid="research-card-smart-cities"
    >
      {/* Gold accent strip */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#C68B00] via-[#FFD966] to-[#C68B00]" />
      <div className="absolute -top-20 -right-16 w-64 h-64 rounded-full bg-[#FFD966]/10 blur-[100px] pointer-events-none" />

      <div className="relative grid lg:grid-cols-[1fr_auto] gap-6 items-start">
        <div>
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold border border-[#FFD966]/40 bg-[#FFD966]/10 text-[#FFD966]">
              <Trophy size={12} className="text-[#FFD966]" />
              First Place Winner
              <span aria-hidden="true">🥇</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono-acc tracking-widest border border-[#FFD966]/25 bg-[#00132d]/60 text-[#FFD966]/90">
              UNDERGRAD RESEARCH FORUM 2024
            </span>
          </div>

          <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#E5E7EB] leading-snug">
            Analyzing Security Threats and Vulnerabilities in IoT Systems within Smart Cities
          </h3>

          <p className="mt-4 text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
            A research study analyzing cybersecurity threats and vulnerabilities affecting IoT
            systems in smart cities, identifying critical risks and proposing recommendations for
            resilient urban infrastructures.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {["IoT Security", "Smart Cities", "Threat Analysis", "Cybersecurity"].map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-full text-[11px] font-medium border border-[#FFD966]/25 bg-[#00132d]/50 text-[#FFD966]/90"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            <PDFViewer
              url={SMART_CITY_PAPER_URL}
              title="Analyzing Security Threats and Vulnerabilities in IoT Systems within Smart Cities"
              subtitle="1st Place – Undergraduate Research Forum 2024"
              testIdPrefix="research-smart-city-paper"
              trigger={
                <button
                  type="button"
                  data-testid="research-smart-city-view-paper"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-[#002d67] to-[#00377e] text-white border border-transparent hover:border-[#00D1FF] hover:shadow-[0_0_22px_rgba(0,209,255,0.35)] transition-all"
                >
                  <FileText size={15} />
                  View Research Paper
                </button>
              }
            />
            <AwardDetailModal
              awardId="ugrf"
              trigger={
                <button
                  type="button"
                  data-testid="research-smart-cities-view-award"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-[#FFD966]/40 text-[#FFD966] hover:bg-[#FFD966]/10 transition-all"
                >
                  <Trophy size={15} className="text-[#FFD966]" />
                  View Award
                </button>
              }
            />
          </div>
        </div>

        {/* Visual cover */}
        <div className="hidden lg:flex w-56 h-72 rounded-xl overflow-hidden border border-[#FFD966]/30 bg-gradient-to-br from-[#001e45] to-[#00132d] items-center justify-center relative">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative flex flex-col items-center gap-4 p-6 text-center">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C68B00] to-[#FFD966] shadow-[0_0_22px_rgba(255,184,0,0.45)]">
              <ShieldCheck size={26} className="text-[#00132d]" />
            </div>
            <div className="font-mono-acc text-[10px] tracking-widest text-[#FFD966]">
              IOT · SMART CITY
            </div>
            <div className="text-xs text-[#9CA3AF] leading-relaxed">
              Cybersecurity threat surface analysis for urban infrastructures
            </div>
            <Cpu size={16} className="text-[#FFD966]/60" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function VRCard() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIdx, setGalleryIdx] = useState(0);

  const openGalleryAt = (i) => {
    setGalleryIdx(i);
    setGalleryOpen(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative overflow-hidden rounded-2xl border border-[#7dd3fc]/25 bg-[#001e45]/40 backdrop-blur-md p-7 sm:p-9"
      data-testid="research-card-vr-museums"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#002d67] via-[#00377e] to-[#00D1FF]" />
      <div className="absolute -top-24 -right-16 w-72 h-72 rounded-full bg-[#00377e]/25 blur-[110px] pointer-events-none" />

      <div className="relative">
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold border border-[#7dd3fc]/30 bg-[#00132d]/50 text-[#bae6fd]">
            <Sparkles size={12} style={{ color: "#00D1FF" }} />
            Academic Research
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold border border-[#7dd3fc]/30 bg-[#00132d]/50 text-[#bae6fd]">
            <Users size={12} style={{ color: "#00D1FF" }} />
            Stakeholder Collaboration
          </span>
        </div>

        <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#E5E7EB] leading-snug">
          Virtual Reality in Museums: Analyzing and Selecting the Best Technologies for Saudi
          Arabian Museums
        </h3>

        <p className="mt-4 text-sm sm:text-base text-[#9CA3AF] leading-relaxed max-w-4xl">
          A research project evaluating global virtual reality technologies and selecting the
          most suitable solutions for Saudi Arabian museums to improve visitor engagement,
          learning experiences, and cultural preservation.
        </p>

        {/* Stakeholder highlight */}
        <div className="mt-7 rounded-2xl border border-[#7dd3fc]/25 bg-gradient-to-br from-[#00132d]/80 to-[#001e45]/40 p-5 sm:p-6 relative overflow-hidden">
          <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-[#00D1FF]/12 blur-[80px] pointer-events-none" />
          <div className="relative flex items-start gap-4">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#002d67] to-[#0E7490] border border-[#00D1FF]/40 flex-shrink-0">
              <Building2 size={20} className="text-white" />
            </div>
            <div>
              <div className="font-mono-acc text-[10px] tracking-widest text-[#00D1FF] mb-1">
                // highlight
              </div>
              <h4 className="font-heading font-bold text-base sm:text-lg text-[#E5E7EB]">
                Real-World Stakeholder Engagement
              </h4>
              <p className="mt-2 text-sm text-[#9CA3AF] leading-relaxed">
                The project involved visiting Al Taybat Museum in Jeddah, discussing requirements
                with museum representatives, exploring on-site implementation opportunities, and
                gathering real stakeholder feedback to ground the technology recommendations in
                actual operational constraints.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-7">
          <div className="flex items-center justify-between mb-3">
            <div className="font-mono-acc text-[11px] tracking-widest text-[#00D1FF]">
              // museum_visit_gallery
            </div>
            <span className="text-[10px] font-mono-acc tracking-widest text-[#7dd3fc]">
              {MUSEUM_GALLERY.length} PHOTOS
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {MUSEUM_GALLERY.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => openGalleryAt(i)}
                data-testid={`vr-gallery-thumb-${i}`}
                className="group relative aspect-square rounded-xl overflow-hidden border border-[#7dd3fc]/25 bg-[#00132d]/40 hover:border-[#00D1FF]/60 transition-all"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00132d]/95 via-[#00132d]/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-2 sm:p-3 text-left">
                  <div className="font-mono-acc text-[9px] tracking-widest text-[#00D1FF] mb-0.5">
                    0{i + 1}
                  </div>
                  <div className="text-xs font-semibold text-[#E5E7EB] line-clamp-1">
                    {img.label}
                  </div>
                </div>
                <div className="absolute top-2 right-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#00132d]/80 border border-[#00D1FF]/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ImageIcon size={12} style={{ color: "#00D1FF" }} />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Project journey timeline */}
        <div className="mt-8">
          <div className="font-mono-acc text-[11px] tracking-widest text-[#00D1FF] mb-3">
            // project_journey
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-5 left-5 right-5 h-px bg-gradient-to-r from-[#002d67] via-[#00377e] to-[#00D1FF]" />
            <ol className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 relative">
              {RESEARCH_JOURNEY.map((j, i) => {
                const Icon = JOURNEY_ICONS[i] || Search;
                return (
                  <li
                    key={j.step}
                    className="rounded-xl border border-[#7dd3fc]/20 bg-[#00132d]/50 p-3 sm:p-4"
                    data-testid={`vr-journey-step-${i}`}
                  >
                    <div className="inline-flex items-center gap-2 mb-2">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#002d67] to-[#0E7490] border border-[#00D1FF]/40 text-[10px] font-bold text-white">
                        {i + 1}
                      </span>
                      <Icon size={14} style={{ color: "#00D1FF" }} />
                    </div>
                    <div className="font-heading font-semibold text-[13px] text-[#E5E7EB] leading-snug">
                      {j.step}
                    </div>
                    <p className="mt-1.5 text-[11px] text-[#9CA3AF] leading-relaxed">
                      {j.desc}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-7 flex flex-wrap gap-3">
          <PDFViewer
            url={VR_PAPER_URL}
            title="Virtual Reality in Museums"
            subtitle="Saudi Arabian Museums — Technology Analysis"
            testIdPrefix="research-vr-paper"
            trigger={
              <button
                type="button"
                data-testid="research-vr-view-paper"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-[#002d67] to-[#00377e] text-white border border-transparent hover:border-[#00D1FF] hover:shadow-[0_0_22px_rgba(0,209,255,0.35)] transition-all"
              >
                <FileText size={15} />
                View Presentation
              </button>
            }
          />
          <button
            type="button"
            onClick={() => openGalleryAt(0)}
            data-testid="research-vr-view-gallery"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-[#7dd3fc]/30 text-[#bae6fd] hover:border-[#00D1FF]/60 hover:text-[#00D1FF] transition-all"
          >
            <ImageIcon size={15} style={{ color: "#00D1FF" }} />
            View Gallery
          </button>
        </div>
      </div>

      <Lightbox
        images={MUSEUM_GALLERY}
        open={galleryOpen}
        initialIndex={galleryIdx}
        onOpenChange={setGalleryOpen}
        testIdPrefix="vr-gallery"
      />
    </motion.div>
  );
}

export default function Research() {
  return (
    <section
      id="research"
      data-testid="research-section"
      className="py-24 sm:py-32 bg-[#00132d]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          kicker="research_publications"
          title="Research & Publications"
          subtitle="Academic research projects exploring cybersecurity, smart cities, and the future of cultural technology — including award-winning work and real-world stakeholder collaboration."
        />

        <div className="space-y-8">
          <SmartCityCard />
          <VRCard />
        </div>
      </div>
    </section>
  );
}
