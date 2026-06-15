import { useEffect, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Brain,
  BrainCircuit,
  ShieldCheck,
  Cog,
  MessageSquareText,
  BookOpen,
  FileSpreadsheet,
  FlaskConical,
  FolderGit2,
  FileText,
  Image as ImageIcon,
  Presentation,
  BadgeCheck,
  Inbox,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import CategorySection from "@/components/academic/CategorySection";
import { getCourse, CATEGORY_META } from "@/data/academic";

const COURSE_ICONS = {
  Brain,
  BrainCircuit,
  ShieldCheck,
  Cog,
  MessageSquareText,
  BookOpen,
};

const CATEGORY_ICONS = {
  FileSpreadsheet,
  FlaskConical,
  FolderGit2,
  FileText,
  Image: ImageIcon,
  Presentation,
  BadgeCheck,
};

const CATEGORY_ORDER = [
  "assignments",
  "labs",
  "projects",
  "papers",
  "posters",
  "presentations",
  "certificates",
];

export default function CoursePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const course = getCourse(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const presentCategories = useMemo(() => {
    if (!course) return [];
    return CATEGORY_ORDER.filter(
      (k) => Array.isArray(course.categories?.[k]) && course.categories[k].length > 0
    );
  }, [course]);

  if (!course) {
    return (
      <div className="bg-[#00132d] text-[#E5E7EB] min-h-screen">
        <Navbar />
        <main className="pt-32 pb-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h1 className="font-heading text-3xl text-[#E5E7EB]">Course not found</h1>
            <p className="mt-3 text-[#9CA3AF]">The course you&apos;re looking for doesn&apos;t exist.</p>
            <Link to="/academic" className="ghost-button mt-6 inline-flex">
              View all courses
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = COURSE_ICONS[course.icon] || BookOpen;
  const stats = course.stats || {};
  const totalItems = Object.values(stats).reduce((a, b) => a + b, 0);

  return (
    <div className="bg-[#00132d] text-[#E5E7EB] min-h-screen" data-testid={`course-page-${course.slug}`}>
      <Navbar />
      <main className="pt-28 sm:pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <button
            type="button"
            onClick={() => navigate("/academic")}
            data-testid="course-back"
            className="inline-flex items-center gap-2 text-sm font-mono-acc tracking-widest text-[#bae6fd] link-glow mb-8"
          >
            <ArrowLeft size={14} style={{ color: "#00D1FF" }} />
            ALL COURSES
          </button>

          {/* Course header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 sm:p-10 relative overflow-hidden mb-10"
            data-testid="course-header"
          >
            <div
              className={`absolute -top-20 -right-20 w-72 h-72 rounded-full blur-[120px] opacity-40 bg-gradient-to-br ${course.accent}`}
              aria-hidden="true"
            />
            <div className="relative grid sm:grid-cols-[auto_1fr] gap-6 items-start">
              <div
                className={`inline-flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${course.accent} border border-[#7dd3fc]/40 shadow-[0_0_28px_rgba(0,55,126,0.45)]`}
              >
                <Icon size={32} className="text-white" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="font-mono-acc text-xs tracking-widest text-[#00D1FF]">
                    {course.code}
                  </span>
                  {course.term && (
                    <span className="font-mono-acc text-xs tracking-widest text-[#9CA3AF]">
                      · {course.term}
                    </span>
                  )}
                </div>
                <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#E5E7EB] leading-tight">
                  {course.name}
                </h1>
                <p className="mt-4 text-base sm:text-lg text-[#9CA3AF] leading-relaxed max-w-3xl">
                  {course.longDescription || course.description}
                </p>

                {totalItems > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {Object.entries(stats)
                      .filter(([, v]) => v > 0)
                      .map(([k, v]) => (
                        <span
                          key={k}
                          className="px-3 py-1.5 rounded-full text-xs font-semibold border border-[#7dd3fc]/25 bg-[#00132d]/60 text-[#bae6fd]"
                          data-testid={`course-${course.slug}-stat-pill-${k}`}
                        >
                          <span className="text-[#E5E7EB]">{v}</span>{" "}
                          <span className="text-[#9CA3AF]">{CATEGORY_META[k]?.label || k}</span>
                        </span>
                      ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Categories */}
          {presentCategories.length > 0 ? (
            <div className="space-y-4">
              {presentCategories.map((catKey, i) => {
                const meta = CATEGORY_META[catKey];
                const IconC = CATEGORY_ICONS[meta?.icon] || FileText;
                return (
                  <motion.div
                    key={catKey}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: i * 0.06 }}
                  >
                    <CategorySection
                      categoryKey={catKey}
                      meta={meta}
                      items={course.categories[catKey]}
                      IconComponent={IconC}
                      defaultOpen={i === 0}
                    />
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div
              className="glass-card p-10 sm:p-14 text-center"
              data-testid="course-empty"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#001e45]/60 border border-[#00D1FF]/25 mb-4">
                <Inbox size={24} style={{ color: "#00D1FF" }} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#E5E7EB]">
                Materials coming soon
              </h3>
              <p className="mt-2 text-sm text-[#9CA3AF] max-w-md mx-auto">
                I&apos;m organizing assignments, labs, projects, and certificates for this course.
                Check back shortly.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
