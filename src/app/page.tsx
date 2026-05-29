import Navbar from "@/components/layout/Navbar";
import Hero from "@/features/hero/Hero";
import About from "@/features/about/About";
import Projects from "@/features/projects/Projects";
import Skills from "@/features/skills/Skills";
import Experience from "@/features/experience/Experience";
import EducationSection from "@/features/education/Education";
import Contact from "@/features/contact/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <EducationSection />
      <Contact />

      <footer className="py-6 items-center text-center border-t border-border bg-background">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ricardo Pinzón.
        </p>
      </footer>
    </main>
  );
}
