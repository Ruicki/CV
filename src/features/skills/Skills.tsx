"use client";

import { Bot, Code2, Container, Database, Github, Layers, Network, Sparkles, Workflow } from "lucide-react";

import { FadeIn, SlideUp } from "@/components/ui/motion";
import { skills, skillCategories } from "@/data/cv-data";
import { Icons } from "@/components/ui/icons";
import { SectionTitle } from "@/components/ui/SectionTitle";

function SkillIcon({ name, className }: { name?: string; className?: string }) {
    switch (name) {
        case "Html5": return <Icons.Html5 className={className} />;
        case "JavaScript": return <Icons.JavaScript className={className} />;
        case "TypeScript": return <Icons.TypeScript className={className} />;
        case "React": return <Icons.React className={className} />;
        case "Nextjs": return <Icons.Nextjs className={className} />;
        case "Tailwind": return <Icons.Tailwind className={className} />;
        case "Vite": return <Icons.Vite className={className} />;
        case "Node": return <Icons.Node className={className} />;
        case "Express": return <Icons.Express className={className} />;
        case "Postman": return <Icons.Postman className={className} />;
        case "Git": return <Icons.Git className={className} />;
        case "Vercel": return <Icons.Vercel className={className} />;
        case "Eslint": return <Icons.Eslint className={className} />;
        case "Prettier": return <Icons.Prettier className={className} />;
        case "Database": return <Database className={className} />;
        case "Container": return <Container className={className} />;
        case "Github": return <Github className={className} />;
        case "Api": return <Network className={className} />;
        case "Layers": return <Layers className={className} />;
        case "Workflow": return <Workflow className={className} />;
        case "Sparkles": return <Sparkles className={className} />;
        case "Bot": return <Bot className={className} />;
        default: return <Code2 className={className} />;
    }
}

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative flex flex-col items-center justify-center overflow-hidden scroll-mt-24">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(#c9a84c18_1px,transparent_1px)] bg-size-[24px_24px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>

            <div className="container px-4 md:px-8">
                <div className="flex flex-col mb-16 space-y-4">
                    <FadeIn>
                        <SectionTitle>
                            Habilidades técnicas
                        </SectionTitle>
                    </FadeIn>
                    <SlideUp delay={0.2}>
                        <p className="max-w-[800px] text-muted-foreground text-base md:text-lg leading-relaxed">
                            Las tecnologías y prácticas con las que trabajo en mis proyectos.
                        </p>
                    </SlideUp>
                </div>

                <div className="space-y-10">
                    {skillCategories.map((category, index) => (
                        <SlideUp key={category.id} delay={0.05 * index}>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
                                {category.label}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skills
                                    .filter((skill) => skill.category === category.id)
                                    .map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-border/60 bg-background/80 backdrop-blur-sm shadow-sm hover:border-primary/40 hover:bg-primary/5 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 cursor-default hover:-translate-y-1"
                                        >
                                            <SkillIcon name={skill.icon} className="h-6 w-6 shrink-0" />
                                            <span className="text-sm md:text-base font-bold text-foreground">{skill.name}</span>
                                        </div>
                                    ))}
                            </div>
                        </SlideUp>
                    ))}
                </div>
            </div>
        </section>
    );
}
