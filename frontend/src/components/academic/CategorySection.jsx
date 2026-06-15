import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Download, Eye, FileText, FileCode2, FileArchive, Database } from "lucide-react";
import PDFViewer from "@/components/PDFViewer";
import { fileUrl } from "@/data/academic";

const KIND_ICONS = {
  notebook: FileCode2,
  dataset: Database,
  archive: FileArchive,
  pdf: FileText,
};

function ItemIcon({ item }) {
  if (item.pdf) return <FileText size={18} style={{ color: "#00D1FF" }} />;
  if (item.notebook) return <FileCode2 size={18} style={{ color: "#00D1FF" }} />;
  if (item.archive) return <FileArchive size={18} style={{ color: "#00D1FF" }} />;
  return <FileText size={18} style={{ color: "#00D1FF" }} />;
}

function ItemActions({ item, idx, categoryKey }) {
  const pdfPath = item.pdf || null;
  const nbPath = item.notebook || null;
  const archPath = item.archive || null;

  const pdfHref = pdfPath ? fileUrl(pdfPath) : null;
  const nbHref = nbPath ? fileUrl(nbPath) : null;
  const archHref = archPath ? fileUrl(archPath) : null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {pdfHref && (
        <PDFViewer
          url={pdfHref}
          title={item.title}
          subtitle={item.description}
          testIdPrefix={`acw-${categoryKey}-${idx}`}
          trigger={
            <button
              type="button"
              data-testid={`acw-${categoryKey}-${idx}-preview`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-[#002d67] to-[#00377e] text-white border border-transparent hover:border-[#00D1FF] hover:shadow-[0_0_16px_rgba(0,209,255,0.3)] transition-all"
            >
              <Eye size={13} className="text-white" />
              Preview
            </button>
          }
        />
      )}
      {pdfHref && (
        <a
          href={pdfHref}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold border border-[#7dd3fc]/30 text-[#bae6fd] hover:border-[#00D1FF]/60 hover:text-[#00D1FF] transition-all"
          data-testid={`acw-${categoryKey}-${idx}-download`}
        >
          <Download size={13} style={{ color: "#00D1FF" }} />
          PDF
        </a>
      )}
      {nbHref && (
        <a
          href={nbHref}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold border border-[#7dd3fc]/30 text-[#bae6fd] hover:border-[#00D1FF]/60 hover:text-[#00D1FF] transition-all"
          data-testid={`acw-${categoryKey}-${idx}-notebook`}
        >
          <FileCode2 size={13} style={{ color: "#00D1FF" }} />
          Notebook
        </a>
      )}
      {archHref && (
        <a
          href={archHref}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold border border-[#7dd3fc]/30 text-[#bae6fd] hover:border-[#00D1FF]/60 hover:text-[#00D1FF] transition-all"
          data-testid={`acw-${categoryKey}-${idx}-archive`}
        >
          <FileArchive size={13} style={{ color: "#00D1FF" }} />
          Code (.zip)
        </a>
      )}

      {/* Extras (e.g. attached notebooks / datasets alongside a PDF assignment) */}
      {Array.isArray(item.extras) &&
        item.extras.map((ex, j) => {
          const ExtraIcon = KIND_ICONS[ex.kind] || FileCode2;
          return (
            <a
              key={j}
              href={fileUrl(ex.path)}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold border border-[#7dd3fc]/30 text-[#bae6fd] hover:border-[#00D1FF]/60 hover:text-[#00D1FF] transition-all"
              data-testid={`acw-${categoryKey}-${idx}-extra-${j}`}
            >
              <ExtraIcon size={13} style={{ color: "#00D1FF" }} />
              {ex.title.length > 32 ? ex.title.slice(0, 32) + "…" : ex.title}
            </a>
          );
        })}
    </div>
  );
}

export default function CategorySection({ categoryKey, meta, items, IconComponent, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const count = items.length;

  return (
    <div
      className="glass-card overflow-hidden"
      data-testid={`acw-category-${categoryKey}`}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors"
        data-testid={`acw-toggle-${categoryKey}`}
        aria-expanded={open}
      >
        <div className="flex items-center gap-4 min-w-0">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#00132d]/70 border border-[#00D1FF]/30 flex-shrink-0">
            <IconComponent size={18} style={{ color: "#00D1FF" }} />
          </div>
          <div className="min-w-0">
            <h3 className="font-heading font-bold text-lg text-[#E5E7EB] truncate">
              {meta.label}
            </h3>
            <div className="text-xs font-mono-acc tracking-widest text-[#7dd3fc] mt-0.5">
              {count} {count === 1 ? "item" : "items"}
            </div>
          </div>
        </div>
        <ChevronDown
          size={20}
          style={{ color: "#00D1FF" }}
          className={`transition-transform duration-300 flex-shrink-0 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-6 grid sm:grid-cols-2 gap-4">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-[#00132d]/50 border border-[#7dd3fc]/15 p-5 hover:border-[#00D1FF]/40 transition-colors"
                  data-testid={`acw-item-${categoryKey}-${idx}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#001e45]/80 border border-[#00D1FF]/25 flex-shrink-0">
                      <ItemIcon item={item} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-heading font-semibold text-sm text-[#E5E7EB] leading-snug">
                        {item.title}
                      </h4>
                      {item.organization && (
                        <div className="text-[10px] font-mono-acc tracking-widest text-[#7dd3fc] mt-1">
                          {item.organization}
                        </div>
                      )}
                      {item.description && (
                        <p className="mt-2 text-xs text-[#9CA3AF] leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#7dd3fc]/10">
                    <ItemActions item={item} idx={idx} categoryKey={categoryKey} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
