import Navbar from "@/components/layout/Navbar";
import Hero from "@/features/hero/Hero";
import About from "@/features/about/About";
import Skills from "@/features/skills/Skills";
import Experience from "@/features/experience/Experience";
import Projects from "@/features/projects/Projects";
import Contact from "@/features/contact/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      <footer className="py-6 items-center text-center border-t border-border bg-background">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ricardo Pinzón.
        </p>
      </footer>
    </main>
  );
}
