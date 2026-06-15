import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import CourseCard from "@/components/academic/CourseCard";
import { COURSES, ALL_COURSE_SLUGS } from "@/data/academic";

export default function AcademicPage() {
  const navigate = useNavigate();
  const courses = ALL_COURSE_SLUGS.map((s) => COURSES[s]);

  return (
    <div className="bg-[#00132d] text-[#E5E7EB] min-h-screen" data-testid="academic-page">
      <Navbar />
      <main className="pt-28 sm:pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <button
            type="button"
            onClick={() => navigate(-1)}
            data-testid="academic-back"
            className="inline-flex items-center gap-2 text-sm font-mono-acc tracking-widest text-[#bae6fd] link-glow mb-8"
          >
            <ArrowLeft size={14} style={{ color: "#00D1FF" }} />
            BACK
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-12"
          >
            <div className="section-title-mono mb-3">// academic_work</div>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tighter text-[#E5E7EB] leading-[1.05]">
              All <span className="gradient-text">Academic</span> Courses
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
              A complete catalog of coursework — assignments, labs, projects, research papers, posters,
              presentations, and certifications. Click any course to explore its materials.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#7dd3fc]/25 bg-[#001e45]/50">
              <GraduationCap size={16} style={{ color: "#00D1FF" }} />
              <span className="text-sm text-[#bae6fd] font-medium">
                {courses.length} courses · {courses.reduce((acc, c) => {
                  const s = c.stats || {};
                  return acc + Object.values(s).reduce((a, b) => a + b, 0);
                }, 0)} items
              </span>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((c, i) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <CourseCard course={c} index={i} />
              </motion.div>
            ))}
          </div>

          <div className="mt-14">
            <Link
              to="/"
              data-testid="academic-back-home"
              className="inline-flex items-center gap-2 ghost-button"
            >
              <BookOpen size={14} style={{ color: "#00D1FF" }} />
              Back to Portfolio
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
