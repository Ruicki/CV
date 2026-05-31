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
    const p0 = projects[0];
    const p1 = projects[1];

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

                {/* ── MOBILE + TABLET: vertical (hasta lg) ── */}
                <div className="lg:hidden space-y-6">
                    {projects.map((project, index) => {
                        const Icon = getIcon(project.mainIcon);
                        return (
                            <SlideUp key={index} delay={0.1 * index}>
                                <div className="rounded-2xl glass border border-border/50 hover:border-primary/30 transition-all duration-300 group overflow-hidden">
                                    {project.previewSrc && (
                                        <div className="w-full overflow-hidden h-56">
                                            <img
                                                src={project.previewSrc}
                                                alt={`Preview de ${project.title}`}
                                                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                    )}
                                    <div className="p-5 flex items-start gap-4">
                                        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 overflow-hidden">
                                            {project.logoSrc ? (
                                                <Image src={project.logoSrc} alt={project.title} width={48} height={48} className="w-full h-full object-contain" />
                                            ) : (
                                                <Icon className="h-6 w-6" />
                                            )}
                                        </div>
                                        <div className="space-y-2 flex-1">
                                            <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                                            <div className="flex flex-wrap gap-1.5 pt-1">
                                                {project.tags.map(tag => (
                                                    <Badge key={tag} className="bg-primary/5 text-primary border-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                            {project.demoUrl && (
                                                <div className="pt-2">
                                                    <Button size="sm" className="h-8 px-4 rounded-full gap-2 text-xs font-bold bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                                                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                                            <ExternalLink className="h-3 w-3" /> Sitio Web
                                                        </a>
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </SlideUp>
                        );
                    })}
                </div>

                {/* ── DESKTOP (lg+): Bento Grid ── */}
                <div className="hidden lg:grid grid-cols-3 gap-4" style={{ gridTemplateRows: "280px 280px" }}>

                    {/* Celda grande — proyecto 0, ocupa 2 cols x 2 rows */}
                    {p0 && (() => {
                        const Icon = getIcon(p0.mainIcon);
                        return (
                            <div className="col-span-2 row-span-2">
                                <SlideUp delay={0.1} className="h-full">
                                    <div className="h-full rounded-3xl glass border border-border/50 hover:border-primary/30 transition-all duration-300 group overflow-hidden flex flex-col">
                                        {p0.previewSrc && (
                                            <div className="flex-1 min-h-0 overflow-hidden">
                                                <img
                                                    src={p0.previewSrc}
                                                    alt={`Preview de ${p0.title}`}
                                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                                />
                                            </div>
                                        )}
                                        <div className="p-7 flex items-start gap-4 shrink-0 bg-background/60 backdrop-blur-sm border-t border-border/30">
                                            <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 overflow-hidden">
                                                {p0.logoSrc ? (
                                                    <Image src={p0.logoSrc} alt={p0.title} width={56} height={56} className="w-full h-full object-contain" />
                                                ) : (
                                                    <Icon className="h-7 w-7 group-hover:scale-110 transition-transform duration-300" />
                                                )}
                                            </div>
                                            <div className="space-y-2 flex-1">
                                                <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                                                    {p0.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">{p0.description}</p>
                                                <div className="flex flex-wrap items-center gap-2 pt-1">
                                                    {p0.tags.map(tag => (
                                                        <Badge key={tag} className="bg-primary/5 text-primary border-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
                                                            {tag}
                                                        </Badge>
                                                    ))}
                                                    {p0.demoUrl && (
                                                        <Button size="sm" className="ml-auto h-9 px-5 rounded-full gap-2 text-xs font-bold shadow-md hover:shadow-accent/30 hover:scale-105 transition-all duration-300 bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                                                            <a href={p0.demoUrl} target="_blank" rel="noopener noreferrer">
                                                                <ExternalLink className="h-3.5 w-3.5" /> Sitio Web
                                                            </a>
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SlideUp>
                            </div>
                        );
                    })()}

                    {/* Celda arriba derecha — proyecto 1 preview */}
                    {p1 && (
                        <div className="col-span-1 row-span-1">
                            <SlideUp delay={0.2} className="h-full">
                                <div className="h-full rounded-3xl glass border border-border/50 hover:border-primary/30 transition-all duration-300 group overflow-hidden relative">
                                    {p1.previewSrc && (
                                        <img
                                            src={p1.previewSrc}
                                            alt={`Preview de ${p1.title}`}
                                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex flex-col justify-end p-5">
                                        <span className="text-xs font-bold uppercase tracking-widest text-primary/80 mb-1">Preview</span>
                                        <h3 className="text-lg font-bold text-foreground">{p1.title}</h3>
                                    </div>
                                </div>
                            </SlideUp>
                        </div>
                    )}

                    {/* Celda abajo derecha — proyecto 1 info */}
                    {p1 && (() => {
                        const Icon = getIcon(p1.mainIcon);
                        return (
                            <div className="col-span-1 row-span-1">
                                <SlideUp delay={0.3} className="h-full">
                                    <div className="h-full rounded-3xl glass border border-border/50 hover:border-primary/30 transition-all duration-300 group overflow-hidden flex flex-col justify-between p-6">
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3">
                                                <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 overflow-hidden">
                                                    {p1.logoSrc ? (
                                                        <Image src={p1.logoSrc} alt={p1.title} width={44} height={44} className="w-full h-full object-contain" />
                                                    ) : (
                                                        <Icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                                                    )}
                                                </div>
                                                <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                                                    {p1.title}
                                                </h3>
                                            </div>
                                            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{p1.description}</p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {p1.tags.map(tag => (
                                                    <Badge key={tag} className="bg-primary/5 text-primary border-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                        {p1.demoUrl && (
                                            <Button size="sm" className="w-full h-9 rounded-full gap-2 text-xs font-bold shadow-md hover:shadow-accent/30 hover:scale-105 transition-all duration-300 bg-accent text-accent-foreground hover:bg-accent/90 mt-3" asChild>
                                                <a href={p1.demoUrl} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="h-3.5 w-3.5" /> Sitio Web
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </SlideUp>
                            </div>
                        );
                    })()}

                </div>
            </div>
        </section>
    );
}
