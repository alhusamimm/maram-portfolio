import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  X,
  Trophy,
  GraduationCap,
  Calendar,
  Sparkles,
  FileText,
  Image as ImageIcon,
} from "lucide-react";
import PDFViewer from "@/components/PDFViewer";
import Lightbox from "@/components/Lightbox";
import { AWARDS_DETAIL } from "@/data/research";

/**
 * Premium gold-accented modal for winning awards.
 * Pass `award` prop directly OR `awardId` to lookup from AWARDS_DETAIL.
 */
export default function AwardDetailModal({ trigger, award, awardId }) {
  const data = award || (awardId ? AWARDS_DETAIL[awardId] : AWARDS_DETAIL.ugrf);
  const [open, setOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIdx, setGalleryIdx] = useState(0);

  if (!data) return null;
  const hero = data.gallery?.[0];
  const galleryCount = data.gallery?.length || 0;

  const openGalleryAt = (i) => {
    setGalleryIdx(i);
    setGalleryOpen(true);
  };

  return (
    <>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-[#00132d]/85 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0" />
          <Dialog.Content
            data-testid={`award-detail-modal-${data.id}`}
            className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl border border-[#FFD966]/40 bg-gradient-to-br from-[#00132d] via-[#001e45] to-[#00132d] shadow-[0_0_60px_rgba(255,184,0,0.25)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 duration-200 focus:outline-none"
          >
            <div className="h-1 bg-gradient-to-r from-[#C68B00] via-[#FFD966] to-[#C68B00]" />

            <Dialog.Close
              className="absolute top-4 right-4 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#FFD966]/30 bg-[#00132d]/70 text-[#FFD966] hover:border-[#FFD966]/70 hover:bg-[#FFD966]/10 transition-all"
              aria-label="Close"
              data-testid={`award-modal-close-${data.id}`}
            >
              <X size={16} />
            </Dialog.Close>

            <div className="p-6 sm:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#C68B00] to-[#FFD966] shadow-[0_0_22px_rgba(255,184,0,0.45)]">
                  <Trophy size={22} className="text-[#00132d]" />
                </div>
                <div>
                  <div className="font-mono-acc text-[10px] tracking-widest text-[#FFD966]">
                    // first_place_award
                  </div>
                  <div className="text-xs font-mono-acc tracking-widest text-[#9CA3AF] mt-0.5">
                    {data.institution?.toUpperCase()} · {data.year}
                  </div>
                </div>
              </div>

              <Dialog.Title className="font-heading font-bold text-2xl sm:text-3xl text-[#E5E7EB] leading-tight">
                {data.modalTitle}
              </Dialog.Title>
              <Dialog.Description className="sr-only">
                Award details and related materials.
              </Dialog.Description>

              {/* Hero image */}
              {hero && (
                <button
                  type="button"
                  onClick={() => openGalleryAt(0)}
                  data-testid={`award-modal-hero-image-${data.id}`}
                  className="mt-6 block w-full rounded-2xl overflow-hidden border border-[#FFD966]/30 bg-[#001e45]/40 hover:border-[#FFD966]/70 transition-all group relative"
                >
                  <img
                    src={hero.src}
                    alt={hero.label || data.modalTitle}
                    className="w-full max-h-[420px] object-contain bg-[#00132d]"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#00132d]/95 to-transparent flex items-center justify-center gap-2 text-xs font-mono-acc tracking-widest text-[#FFD966] opacity-0 group-hover:opacity-100 transition-opacity">
                    <ImageIcon size={13} />
                    {galleryCount > 1 ? `VIEW GALLERY (${galleryCount})` : "CLICK TO ENLARGE"}
                  </div>
                </button>
              )}

              {/* Extra thumbnails (only if more than 1 image) */}
              {galleryCount > 1 && (
                <div className="mt-3 grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {data.gallery.slice(1).map((img, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => openGalleryAt(i + 1)}
                      data-testid={`award-modal-thumb-${data.id}-${i + 1}`}
                      className="aspect-square rounded-lg overflow-hidden border border-[#FFD966]/25 bg-[#00132d]/60 hover:border-[#FFD966]/70 transition-all group"
                    >
                      <img
                        src={img.src}
                        alt={img.label || ""}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Meta */}
              <div className="mt-6 grid sm:grid-cols-3 gap-3">
                {data.track && (
                  <div className="rounded-xl border border-[#FFD966]/20 bg-[#00132d]/50 p-4">
                    <div className="flex items-center gap-2 text-[10px] font-mono-acc tracking-widest text-[#FFD966] mb-1.5">
                      <Sparkles size={12} className="text-[#FFD966]" />
                      TRACK
                    </div>
                    <div className="text-sm text-[#E5E7EB] font-medium">{data.track}</div>
                  </div>
                )}
                {data.institution && (
                  <div className="rounded-xl border border-[#FFD966]/20 bg-[#00132d]/50 p-4">
                    <div className="flex items-center gap-2 text-[10px] font-mono-acc tracking-widest text-[#FFD966] mb-1.5">
                      <GraduationCap size={12} className="text-[#FFD966]" />
                      INSTITUTION
                    </div>
                    <div className="text-sm text-[#E5E7EB] font-medium">{data.institution}</div>
                  </div>
                )}
                {data.date && (
                  <div className="rounded-xl border border-[#FFD966]/20 bg-[#00132d]/50 p-4">
                    <div className="flex items-center gap-2 text-[10px] font-mono-acc tracking-widest text-[#FFD966] mb-1.5">
                      <Calendar size={12} className="text-[#FFD966]" />
                      DATE
                    </div>
                    <div className="text-sm text-[#E5E7EB] font-medium">{data.date}</div>
                  </div>
                )}
              </div>

              <p className="mt-6 text-base text-[#9CA3AF] leading-relaxed">{data.description}</p>

              {data.relatedResearch && (
                <div className="mt-6 rounded-xl border border-[#FFD966]/20 bg-[#00132d]/40 p-5">
                  <div className="text-[10px] font-mono-acc tracking-widest text-[#FFD966] mb-2">
                    RELATED RESEARCH
                  </div>
                  <div className="font-heading font-semibold text-[#E5E7EB] leading-snug">
                    &ldquo;{data.relatedResearch}&rdquo;
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="mt-7 flex flex-wrap gap-3">
                {data.paperUrl && (
                  <PDFViewer
                    url={data.paperUrl}
                    title={data.relatedResearch || data.modalTitle}
                    subtitle={`${data.institution} · ${data.date}`}
                    testIdPrefix={`award-paper-${data.id}`}
                    trigger={
                      <button
                        type="button"
                        data-testid={`award-modal-view-paper-${data.id}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-[#C68B00] to-[#FFD966] text-[#00132d] border border-transparent hover:shadow-[0_0_24px_rgba(255,184,0,0.5)] transition-all"
                      >
                        <FileText size={15} />
                        View Research Paper
                      </button>
                    }
                  />
                )}
                {galleryCount > 0 && (
                  <button
                    type="button"
                    onClick={() => openGalleryAt(0)}
                    data-testid={`award-modal-view-gallery-${data.id}`}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                      data.paperUrl
                        ? "border border-[#FFD966]/40 text-[#FFD966] hover:bg-[#FFD966]/10"
                        : "bg-gradient-to-r from-[#C68B00] to-[#FFD966] text-[#00132d] border border-transparent hover:shadow-[0_0_24px_rgba(255,184,0,0.5)]"
                    }`}
                  >
                    <ImageIcon size={15} className={data.paperUrl ? "text-[#FFD966]" : "text-[#00132d]"} />
                    {galleryCount > 1 ? `View Gallery (${galleryCount})` : "View Award Gallery"}
                  </button>
                )}
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <Lightbox
        images={data.gallery || []}
        open={galleryOpen}
        initialIndex={galleryIdx}
        onOpenChange={setGalleryOpen}
        testIdPrefix={`award-gallery-${data.id}`}
      />
    </>
  );
}
