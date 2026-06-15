import { useEffect, useState, useCallback } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Lightbox image gallery with keyboard nav, prev/next, dot indicators.
 *
 * Props:
 *   images: [{ src, caption? }]
 *   open: boolean
 *   initialIndex: number
 *   onOpenChange(open): void
 *   testIdPrefix
 */
export default function Lightbox({ images, open, initialIndex = 0, onOpenChange, testIdPrefix = "lightbox" }) {
  const [idx, setIdx] = useState(initialIndex);

  const handleOpenChange = useCallback(
    (next) => {
      if (next) setIdx(initialIndex);
      onOpenChange?.(next);
    },
    [initialIndex, onOpenChange]
  );

  const prev = useCallback(() => {
    setIdx((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);
  const next = useCallback(() => {
    setIdx((i) => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, prev, next]);

  if (!images || images.length === 0) return null;
  const current = images[idx];

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-[#00132d]/90 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0" />
        <Dialog.Content
          data-testid={`${testIdPrefix}-modal`}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 sm:p-8 focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0"
        >
          <Dialog.Title className="sr-only">Gallery</Dialog.Title>
          <Dialog.Description className="sr-only">Image viewer</Dialog.Description>

          {/* Close */}
          <Dialog.Close
            className="absolute top-5 right-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#7dd3fc]/30 bg-[#001e45]/70 text-[#E5E7EB] hover:border-[#00D1FF]/70 hover:text-[#00D1FF] transition-all z-20"
            aria-label="Close"
            data-testid={`${testIdPrefix}-close`}
          >
            <X size={18} />
          </Dialog.Close>

          {/* Image */}
          <div className="relative w-full max-w-6xl flex-1 flex items-center justify-center">
            {images.length > 1 && (
              <button
                type="button"
                onClick={prev}
                aria-label="Previous"
                data-testid={`${testIdPrefix}-prev`}
                className="absolute left-2 sm:left-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#7dd3fc]/30 bg-[#001e45]/70 text-[#E5E7EB] hover:border-[#00D1FF]/70 hover:text-[#00D1FF] transition-all z-10"
              >
                <ChevronLeft size={22} />
              </button>
            )}

            <img
              src={current.src}
              alt={current.caption || "Gallery image"}
              className="max-h-[78vh] max-w-full w-auto h-auto rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.55)] border border-[#7dd3fc]/15"
              data-testid={`${testIdPrefix}-image`}
            />

            {images.length > 1 && (
              <button
                type="button"
                onClick={next}
                aria-label="Next"
                data-testid={`${testIdPrefix}-next`}
                className="absolute right-2 sm:right-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#7dd3fc]/30 bg-[#001e45]/70 text-[#E5E7EB] hover:border-[#00D1FF]/70 hover:text-[#00D1FF] transition-all z-10"
              >
                <ChevronRight size={22} />
              </button>
            )}
          </div>

          {/* Caption + indicator */}
          <div className="mt-5 flex flex-col items-center gap-3 text-center max-w-3xl">
            {current.caption && (
              <p className="text-sm text-[#E5E7EB] leading-relaxed">{current.caption}</p>
            )}
            <div className="flex items-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIdx(i)}
                  aria-label={`Go to image ${i + 1}`}
                  data-testid={`${testIdPrefix}-dot-${i}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === idx ? "w-8 bg-[#00D1FF]" : "w-1.5 bg-[#7dd3fc]/40 hover:bg-[#7dd3fc]/70"
                  }`}
                />
              ))}
            </div>
            <div className="font-mono-acc text-[10px] tracking-widest text-[#7dd3fc]">
              {idx + 1} / {images.length}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
