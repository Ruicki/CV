"use client";

import { Code2, ExternalLink } from "lucide-react";
import Image from "next/image";

import { FadeIn, SlideUp } from "@/components/ui/motion";
import { projects } from "@/data/cv-data";
import { Icons } from "@/components/ui/icons";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/button";

const getIcon = (iconName?: string) => {
    switch (iconName) {
        case "Nextjs": return Icons.Nextjs;
        case "React": return Icons.React;
        case "Node": return Icons.Node;
        case "TypeScript": return Icons.TypeScript;
        case "JavaScript": return Icons.JavaScript;
        default: return Code2;
    }
};

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative overflow-hidden flex flex-col items-center justify-center scroll-mt-24">
             <div className="absolute inset-0 -z-10 bg-[radial-gradient(#c9a84c1a_1px,transparent_1px)] bg-size-[32px_32px]"></div>

            <div className="container px-4 md:px-8">
                <div className="flex flex-col mb-16 space-y-4">
                    <FadeIn>
                        <SectionTitle>
                            Proyectos Destacados
                        </SectionTitle>
                    </FadeIn>
                    <SlideUp delay={0.2}>
                        <p className="max-w-[700px] text-muted-foreground text-base md:text-lg leading-relaxed">
                            Una selección curada de trabajos que demuestran mi pasión por el desarrollo y mi capacidad para resolver problemas complejos.
                        </p>
                    </SlideUp>
                </div>

                <div className="space-y-6">
                    {projects.map((project, index) => {
                        const Icon = getIcon(project.mainIcon);
                        return (
                            <SlideUp key={index} delay={0.1 * index}>
                                <div className="p-6 rounded-2xl glass border border-border/50 hover:border-primary/30 transition-all duration-300 group">
                                    <div className="flex items-start gap-4">
                                        <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 overflow-hidden">
                                            {project.logoSrc ? (
                                                <Image src={project.logoSrc} alt={project.title} width={56} height={56} className="w-full h-full object-contain" />
                                            ) : (
                                                <Icon className="h-7 w-7 group-hover:scale-110 transition-transform duration-300" />
                                            )}
                                        </div>
                                        <div className="space-y-3 flex-1">
                                            <div>
                                                <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                                                    {project.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                                                    {project.description}
                                                </p>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map(tag => (
                                                    <Badge key={tag} className="bg-primary/5 text-primary border-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <div className="flex gap-3 pt-2">
                                                {project.demoUrl && (
                                                    <Button size="sm" className="h-9 px-5 rounded-full gap-2 text-xs font-bold shadow-md hover:shadow-accent/30 hover:scale-105 transition-all duration-300 bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                                                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                                            <ExternalLink className="h-3.5 w-3.5" /> Sitio Web
                                                        </a>
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SlideUp>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}