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

// Tarjeta vertical usada en mobile y en el grid de desktop para proyectos secundarios
function ProjectCard({ project, delay = 0 }: { project: typeof projects[0]; delay?: number }) {
    const Icon = getIcon(project.mainIcon);
    return (
        <SlideUp delay={delay} className="h-full">
            <div className="rounded-2xl glass border border-border/50 hover:border-primary/30 transition-all duration-300 group overflow-hidden flex flex-col h-full">
                {project.previewSrc && (
                    <div className="w-full overflow-hidden h-48 shrink-0">
                        <img
                            src={project.previewSrc}
                            alt={`Preview de ${project.title}`}
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                )}
                <div className="p-5 flex flex-col flex-1 gap-3">
                    <div className="flex items-center gap-3">
                        <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 overflow-hidden">
                            {project.logoSrc ? (
                                <Image src={project.logoSrc} alt={project.title} width={44} height={44} className="w-full h-full object-contain" />
                            ) : (
                                <Icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                            )}
                        </div>
                        <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                        {project.tags.map(tag => (
                            <Badge key={tag} className="bg-primary/5 text-primary border-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-fit inline-flex flex-row items-center gap-2 h-9 px-5 rounded-full text-xs font-bold border border-primary/50 bg-transparent text-primary hover:bg-primary/10 transition-all duration-300"
                        >
                            <ExternalLink className="h-3.5 w-3.5 shrink-0" /> Sitio Web
                        </a>
                    )}
                </div>
            </div>
        </SlideUp>
    );
}

export default function Projects() {
    const [featured, ...rest] = projects;

    return (
        <section id="projects" className="py-24 relative overflow-hidden flex flex-col items-center justify-center scroll-mt-24">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(#c9a84c1a_1px,transparent_1px)] bg-size-[32px_32px]"></div>

            <div className="container px-4 md:px-8">
                <div className="flex flex-col mb-16 space-y-4">
                    <FadeIn>
                        <SectionTitle>Proyectos Destacados</SectionTitle>
                    </FadeIn>
                    <SlideUp delay={0.2}>
                        <p className="max-w-[600px] text-muted-foreground text-base md:text-lg leading-relaxed">
                            Algunos de los proyectos en los que he trabajado. Cada uno fue un reto diferente y aprendí algo nuevo en el proceso.
                        </p>
                    </SlideUp>
                </div>

                {/* ── MOBILE + TABLET ── */}
                <div className="lg:hidden space-y-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} delay={0.1 * index} />
                    ))}
                </div>

                {/* ── DESKTOP (lg+): Bento Grid ── */}
                <div className="hidden lg:grid grid-cols-3 gap-5 items-stretch">

                    {/* Proyecto destacado — ocupa 2 columnas, imagen arriba + info abajo */}
                    {featured && (() => {
                        const Icon = getIcon(featured.mainIcon);
                        return (
                            <SlideUp delay={0.1} className="col-span-2 h-full">
                                <div className="h-full rounded-3xl glass border border-border/50 hover:border-primary/30 transition-all duration-300 group overflow-hidden flex flex-col">
                                    {featured.previewSrc && (
                                        <div className="w-full overflow-hidden h-72 shrink-0">
                                            <img
                                                src={featured.previewSrc}
                                                alt={`Preview de ${featured.title}`}
                                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                    )}
                                    <div className="p-7 flex items-start gap-4 bg-background/60 backdrop-blur-sm border-t border-border/30">
                                        <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 overflow-hidden">
                                            {featured.logoSrc ? (
                                                <Image src={featured.logoSrc} alt={featured.title} width={56} height={56} className="w-full h-full object-contain" />
                                            ) : (
                                                <Icon className="h-7 w-7 group-hover:scale-110 transition-transform duration-300" />
                                            )}
                                        </div>
                                        <div className="space-y-2 flex-1">
                                            <div>
                                                <span className="text-xs font-bold uppercase tracking-widest text-primary/70">Proyecto Destacado</span>
                                                <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                                                    {featured.title}
                                                </h3>
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{featured.description}</p>
                                            <div className="flex flex-wrap items-center gap-2 pt-1">
                                                {featured.tags.map(tag => (
                                                    <Badge key={tag} className="bg-primary/5 text-primary border-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                                {featured.demoUrl && (
                                                    <a
                                                        href={featured.demoUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="ml-auto inline-flex flex-row items-center gap-2 h-9 px-5 rounded-full text-xs font-bold border border-primary/50 bg-transparent text-primary hover:bg-primary/10 transition-all duration-300"
                                                    >
                                                        <ExternalLink className="h-3.5 w-3.5 shrink-0" /> Sitio Web
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SlideUp>
                        );
                    })()}

                    {/* Proyectos secundarios — 1 columna, apilados verticalmente */}
                    <div className="col-span-1 flex flex-col gap-5 h-full">
                        {rest.map((project, index) => (
                            <div key={index} className="flex-1">
                                <ProjectCard project={project} delay={0.2 + 0.1 * index} />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
