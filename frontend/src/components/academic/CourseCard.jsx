import { Link } from "react-router-dom";
import {
  Brain,
  BrainCircuit,
  ShieldCheck,
  Cog,
  MessageSquareText,
  BookOpen,
  ArrowRight,
  FileSpreadsheet,
  FlaskConical,
  FolderGit2,
  FileText,
  Image as ImageIcon,
  Presentation,
  BadgeCheck,
} from "lucide-react";

const ICONS = {
  Brain,
  BrainCircuit,
  ShieldCheck,
  Cog,
  MessageSquareText,
  BookOpen,
};

const STAT_DEFS = [
  { key: "assignments", label: "Assignments", icon: FileSpreadsheet },
  { key: "labs", label: "Labs", icon: FlaskConical },
  { key: "projects", label: "Projects", icon: FolderGit2 },
  { key: "papers", label: "Papers", icon: FileText },
  { key: "posters", label: "Posters", icon: ImageIcon },
  { key: "presentations", label: "Presentations", icon: Presentation },
  { key: "certificates", label: "Certificates", icon: BadgeCheck },
];

export default function CourseCard({ course, index = 0 }) {
  const Icon = ICONS[course.icon] || BookOpen;
  const stats = course.stats || {};
  const activeStats = STAT_DEFS.filter((s) => (stats[s.key] || 0) > 0);
  const isPlaceholder = course.placeholder;

  return (
    <div
      className="glass-card p-6 sm:p-7 relative overflow-hidden flex flex-col h-full group"
      data-testid={`course-card-${course.slug}`}
    >
      {/* Decorative gradient */}
      <div
        className={`absolute -top-16 -right-16 w-44 h-44 rounded-full blur-[80px] opacity-50 bg-gradient-to-br ${course.accent}`}
        aria-hidden="true"
      />

      {/* Header */}
      <div className="relative flex items-start justify-between gap-3 mb-4">
        <div
          className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${course.accent} border border-[#7dd3fc]/30 shadow-[0_0_18px_rgba(0,55,126,0.35)]`}
        >
          <Icon size={22} className="text-white" />
        </div>
        <div className="text-right">
          <div className="font-mono-acc text-[10px] tracking-widest text-[#00D1FF]">
            {course.code}
          </div>
          {course.term && (
            <div className="font-mono-acc text-[10px] tracking-widest text-[#9CA3AF] mt-1">
              {course.term}
            </div>
          )}
        </div>
      </div>

      <h3 className="relative font-heading font-bold text-lg sm:text-xl text-[#E5E7EB] leading-snug">
        {course.name}
      </h3>
      <p className="relative mt-2 text-sm text-[#9CA3AF] leading-relaxed flex-1">
        {course.description}
      </p>

      {/* Stats grid */}
      {!isPlaceholder && activeStats.length > 0 && (
        <ul className="relative mt-5 grid grid-cols-2 gap-2">
          {activeStats.map((s) => (
            <li
              key={s.key}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#00132d]/50 border border-[#7dd3fc]/15 text-xs text-[#bae6fd]"
              data-testid={`course-${course.slug}-stat-${s.key}`}
            >
              <s.icon size={13} style={{ color: "#00D1FF" }} />
              <span className="font-semibold text-[#E5E7EB]">{stats[s.key]}</span>
              <span className="text-[#9CA3AF]">{s.label}</span>
            </li>
          ))}
        </ul>
      )}

      {isPlaceholder && (
        <div className="relative mt-5 text-xs font-mono-acc tracking-widest text-[#9CA3AF] uppercase">
          // materials coming soon
        </div>
      )}

      {/* CTA */}
      <Link
        to={`/academic/${course.slug}`}
        data-testid={`course-${course.slug}-explore`}
        className="relative mt-6 inline-flex items-center justify-between px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-[#002d67] to-[#00377e] text-white border border-transparent hover:border-[#00D1FF] hover:shadow-[0_0_22px_rgba(0,209,255,0.35)] transition-all"
      >
        <span>Explore Course</span>
        <ArrowRight size={15} className="text-white group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
