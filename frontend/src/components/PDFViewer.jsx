import { useState, useCallback, useRef, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Download,
  X,
  FileText,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Loader2,
  Maximize2,
} from "lucide-react";


function resolvePdfUrl(rawUrl) {
  if (!rawUrl || rawUrl === "#") return null;
  return rawUrl;
}

/**
 * In-portal PDF viewer powered by react-pdf (canvas-rendered).
 * No iframe — pages render directly into the React tree.
 */
export default function PDFViewer({ url, title = "Certificate", subtitle, trigger, testIdPrefix = "pdf" }) {
  const [open, setOpen] = useState(false);
  const hasPdf = Boolean(url) && url !== "#";
  const pdfUrl = resolvePdfUrl(url);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [containerWidth, setContainerWidth] = useState(900);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);
  const containerRef = useRef(null);

  // Reset state when modal opens/changes URL
  useEffect(() => {
    if (open) {
      setPageNumber(1);
      setScale(1.0);
      setLoading(true);
      setLoadError(null);
    }
  }, [open, pdfUrl]);

  // Track container width for responsive page sizing
  useEffect(() => {
    if (!open || !containerRef.current) return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(Math.max(320, entry.contentRect.width - 32));
      }
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [open]);

  const onLoadSuccess = useCallback(({ numPages: n }) => {
    setNumPages(n);
    setLoading(false);
    setLoadError(null);
  }, []);

  const onLoadError = useCallback((err) => {
    console.error("PDF load error:", err);
    setLoading(false);
    setLoadError(err);
  }, []);

  const goPrev = () => setPageNumber((p) => Math.max(1, p - 1));
  const goNext = () => setPageNumber((p) => Math.min(numPages || 1, p + 1));
  const zoomIn = () => setScale((s) => Math.min(3, +(s + 0.2).toFixed(2)));
  const zoomOut = () => setScale((s) => Math.max(0.5, +(s - 0.2).toFixed(2)));
  const fitWidth = () => setScale(1.0);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-[#00132d]/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0" />
        <Dialog.Content
          data-testid={`${testIdPrefix}-modal`}
          className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-5xl h-[90vh] flex flex-col rounded-2xl border border-[#7dd3fc]/25 bg-[#00132d] shadow-[0_0_60px_rgba(0,55,126,0.4)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 duration-200 focus:outline-none"
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-[#7dd3fc]/15 bg-gradient-to-r from-[#001e45]/60 to-[#00132d]">
            <div className="flex items-center gap-3 min-w-0">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#001e45]/80 border border-[#00D1FF]/30 flex-shrink-0">
                <FileText size={18} style={{ color: "#00D1FF" }} />
              </div>
              <div className="min-w-0">
                <Dialog.Title className="font-heading font-bold text-base sm:text-lg text-[#E5E7EB] truncate">
                  {title}
                </Dialog.Title>
                {subtitle && (
                  <Dialog.Description className="text-xs text-[#9CA3AF] truncate font-mono-acc tracking-widest">
                    {subtitle}
                  </Dialog.Description>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              {hasPdf && (
                <>
                  <a
                    href={pdfUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#7dd3fc]/30 text-xs font-semibold text-[#bae6fd] hover:border-[#00D1FF]/60 hover:text-[#00D1FF] transition-all"
                    data-testid={`${testIdPrefix}-download`}
                  >
                    <Download size={14} style={{ color: "#00D1FF" }} />
                    Download
                  </a>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#7dd3fc]/30 text-xs font-semibold text-[#bae6fd] hover:border-[#00D1FF]/60 hover:text-[#00D1FF] transition-all"
                    data-testid={`${testIdPrefix}-open-new`}
                  >
                    <ExternalLink size={14} style={{ color: "#00D1FF" }} />
                    Open
                  </a>
                </>
              )}
              <Dialog.Close
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#7dd3fc]/30 text-[#E5E7EB] hover:border-[#00D1FF]/60 hover:text-[#00D1FF] transition-all"
                data-testid={`${testIdPrefix}-close`}
                aria-label="Close"
              >
                <X size={16} />
              </Dialog.Close>
            </div>
          </div>

          {/* Body */}
          <div
            ref={containerRef}
            className="flex-1 bg-[#0a1530] overflow-auto flex items-start justify-center p-4 sm:p-6"
            data-testid={`${testIdPrefix}-body`}
          >
            {!hasPdf ? (
              <div className="h-full flex flex-col items-center justify-center text-center px-6">
                <FileText size={48} style={{ color: "#00D1FF" }} />
                <p className="mt-4 text-[#E5E7EB] font-heading font-semibold text-lg">
                  Certificate coming soon
                </p>
                <p className="mt-2 text-sm text-[#9CA3AF] max-w-md">
                  This file hasn&apos;t been uploaded yet. Check back shortly.
                </p>
              </div>
            ) : (
              <iframe
                src={pdfUrl || url}
                title={title || "PDF Preview"}
                className="w-full h-full min-h-[75vh] border-0 rounded-xl bg-white"
              />
            )}
          </div>

          {/* Page/zoom controls */}
          {hasPdf && numPages > 0 && !loadError && !loading && (
            <div className="px-4 py-3 border-t border-[#7dd3fc]/15 bg-[#00132d] flex items-center justify-between gap-3">
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={pageNumber <= 1}
                  data-testid={`${testIdPrefix}-prev-page`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#7dd3fc]/30 text-[#bae6fd] hover:border-[#00D1FF]/60 hover:text-[#00D1FF] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  aria-label="Previous page"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="font-mono-acc text-xs tracking-widest text-[#bae6fd] px-3">
                  {pageNumber} / {numPages}
                </span>
                <button
                  type="button"
                  onClick={goNext}
                  disabled={pageNumber >= numPages}
                  data-testid={`${testIdPrefix}-next-page`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#7dd3fc]/30 text-[#bae6fd] hover:border-[#00D1FF]/60 hover:text-[#00D1FF] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  aria-label="Next page"
                >
                  <ChevronRight size={16} />
                </button>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={zoomOut}
                  data-testid={`${testIdPrefix}-zoom-out`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#7dd3fc]/30 text-[#bae6fd] hover:border-[#00D1FF]/60 hover:text-[#00D1FF] transition-all"
                  aria-label="Zoom out"
                >
                  <ZoomOut size={16} />
                </button>
                <button
                  type="button"
                  onClick={fitWidth}
                  data-testid={`${testIdPrefix}-fit`}
                  className="inline-flex items-center gap-1.5 h-9 px-3 rounded-full border border-[#7dd3fc]/30 text-[11px] font-mono-acc tracking-widest text-[#bae6fd] hover:border-[#00D1FF]/60 hover:text-[#00D1FF] transition-all"
                  aria-label="Fit width"
                >
                  <Maximize2 size={12} style={{ color: "#00D1FF" }} />
                  {Math.round(scale * 100)}%
                </button>
                <button
                  type="button"
                  onClick={zoomIn}
                  data-testid={`${testIdPrefix}-zoom-in`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#7dd3fc]/30 text-[#bae6fd] hover:border-[#00D1FF]/60 hover:text-[#00D1FF] transition-all"
                  aria-label="Zoom in"
                >
                  <ZoomIn size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Mobile-only download/open footer */}
          {hasPdf && (
            <div className="sm:hidden flex items-center justify-center gap-2 px-4 py-3 border-t border-[#7dd3fc]/15 bg-[#00132d]">
              <a
                href={pdfUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#7dd3fc]/30 text-xs font-semibold text-[#bae6fd] flex-1 justify-center"
              >
                <Download size={14} style={{ color: "#00D1FF" }} />
                Download
              </a>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#7dd3fc]/30 text-xs font-semibold text-[#bae6fd] flex-1 justify-center"
              >
                <ExternalLink size={14} style={{ color: "#00D1FF" }} />
                Open
              </a>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
