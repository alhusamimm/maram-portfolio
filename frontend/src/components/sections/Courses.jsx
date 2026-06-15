import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/sections/SectionHeading";
import CourseCard from "@/components/academic/CourseCard";
import { COURSES, FEATURED_SLUGS } from "@/data/academic";

export default function Courses() {
  const featured = FEATURED_SLUGS.map((s) => COURSES[s]).filter(Boolean);

  return (
    <section
      id="courses"
      data-testid="courses-section"
      className="py-24 sm:py-32 bg-[#00132d]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          kicker="academic_work"
          title="Academic Work"
          subtitle="A curated showcase of coursework — assignments, labs, projects, research papers, posters, presentations, and certifications."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <CourseCard course={c} index={i} />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/academic"
            data-testid="view-all-courses-btn"
            className="glow-button"
          >
            <GraduationCap size={16} style={{ color: "#00D1FF" }} />
            View All Academic Courses
            <ArrowRight size={16} className="text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
}
