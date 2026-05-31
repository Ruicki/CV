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

                {/* ── DESKTOP (lg+): Bento Grid dinámico ── */}
                <div className="hidden lg:block space-y-4">

                    {/* Proyecto destacado — ancho completo */}
                    {featured && (() => {
                        const Icon = getIcon(featured.mainIcon);
                        return (
                            <SlideUp delay={0.1}>
                                <div className="rounded-3xl glass border border-border/50 hover:border-primary/30 transition-all duration-300 group overflow-hidden flex flex-row h-72">
                                    {/* Imagen izquierda */}
                                    {featured.previewSrc && (
                                        <div className="w-1/2 shrink-0 overflow-hidden">
                                            <img
                                                src={featured.previewSrc}
                                                alt={`Preview de ${featured.title}`}
                                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                    )}
                                    {/* Info derecha */}
                                    <div className="flex-1 p-8 flex flex-col justify-between bg-background/60 backdrop-blur-sm">
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-4">
                                                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 overflow-hidden">
                                                    {featured.logoSrc ? (
                                                        <Image src={featured.logoSrc} alt={featured.title} width={56} height={56} className="w-full h-full object-contain" />
                                                    ) : (
                                                        <Icon className="h-7 w-7 group-hover:scale-110 transition-transform duration-300" />
                                                    )}
                                                </div>
                                                <div>
                                                    <span className="text-xs font-bold uppercase tracking-widest text-primary/70">Proyecto Destacado</span>
                                                    <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                                                        {featured.title}
                                                    </h3>
                                                </div>
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{featured.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {featured.tags.map(tag => (
                                                    <Badge key={tag} className="bg-primary/5 text-primary border-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                        {featured.demoUrl && (
                                            <Button size="sm" className="w-fit h-9 px-5 rounded-full gap-2 text-xs font-bold shadow-md hover:shadow-accent/30 hover:scale-105 transition-all duration-300 bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                                                <a href={featured.demoUrl} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="h-3.5 w-3.5" /> Sitio Web
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </SlideUp>
                        );
                    })()}

                    {/* Resto de proyectos — grid de 3 columnas, escala automáticamente */}
                    {rest.length > 0 && (
                        <div className="grid grid-cols-3 gap-4">
                            {rest.map((project, index) => {
                                const Icon = getIcon(project.mainIcon);
                                return (
                                    <SlideUp key={index} delay={0.15 * (index + 1)}>
                                        <div className="rounded-3xl glass border border-border/50 hover:border-primary/30 transition-all duration-300 group overflow-hidden flex flex-col h-72">
                                            {project.previewSrc && (
                                                <div className="w-full overflow-hidden h-36 shrink-0">
                                                    <img
                                                        src={project.previewSrc}
                                                        alt={`Preview de ${project.title}`}
                                                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                                    />
                                                </div>
                                            )}
                                            <div className="flex-1 p-5 flex flex-col justify-between">
                                                <div className="space-y-2">
                                                    <div className="flex items-center gap-3">
                                                        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 overflow-hidden">
                                                            {project.logoSrc ? (
                                                                <Image src={project.logoSrc} alt={project.title} width={40} height={40} className="w-full h-full object-contain" />
                                                            ) : (
                                                                <Icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                                                            )}
                                                        </div>
                                                        <h3 className="text-base font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                                                            {project.title}
                                                        </h3>
                                                    </div>
                                                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{project.description}</p>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {project.tags.map(tag => (
                                                            <Badge key={tag} className="bg-primary/5 text-primary border-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                                                                {tag}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                                {project.demoUrl && (
                                                    <Button size="sm" className="w-full h-8 rounded-full gap-2 text-xs font-bold bg-accent text-accent-foreground hover:bg-accent/90 mt-2" asChild>
                                                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                                            <ExternalLink className="h-3 w-3" /> Sitio Web
                                                        </a>
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </SlideUp>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
