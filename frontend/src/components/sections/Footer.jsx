import { PERSONAL } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="border-t border-[#001e45] bg-[#00132d] py-10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#002d67] to-[#00377e] font-heading font-black text-sm text-white border border-[#7dd3fc]/40">
            {PERSONAL.initials}
          </span>
          <span className="text-sm text-[#9CA3AF]">
            © {new Date().getFullYear()} {PERSONAL.name}. 
          </span>
        </div>
        <div className="text-xs font-mono-acc tracking-widest text-[#7dd3fc]">
          ai × cybersecurity 
        </div>
      </div>
    </footer>
  );
}
