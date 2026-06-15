import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import FeaturedProject from "@/components/sections/FeaturedProject";
import LiveProjects from "@/components/sections/LiveProjects";
import OtherProjects from "@/components/sections/OtherProjects";
import Skills from "@/components/sections/Skills";
import Awards from "@/components/sections/Awards";
import Research from "@/components/sections/Research";
import Courses from "@/components/sections/Courses";
import Interests from "@/components/sections/Interests";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Portfolio() {
  return (
    <div className="bg-[#00132d] text-[#E5E7EB] min-h-screen" data-testid="portfolio-root">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <FeaturedProject />
        <LiveProjects />
        <OtherProjects />
        <Skills />
        <Awards />
        <Research />
        <Courses />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
