"use client";

import { Code2, ExternalLink, LayoutGrid, LayoutList } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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
    const [layout, setLayout] = useState<"grid" | "side">("grid");

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
                        <div className="flex items-center justify-between flex-wrap gap-4">
                            <p className="max-w-[600px] text-muted-foreground text-base md:text-lg leading-relaxed">
                                Algunos de los proyectos en los que he trabajado. Cada uno fue un reto diferente y aprendí algo nuevo en el proceso.
                            </p>
                            {/* Layout toggle — solo visible en desktop */}
                            <div className="hidden md:flex items-center gap-1 p-1 rounded-xl border border-border bg-muted/30">
                                <button
                                    onClick={() => setLayout("grid")}
                                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${layout === "grid" ? "bg-background shadow text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                                >
                                    <LayoutGrid className="h-4 w-4" /> Grid
                                </button>
                                <button
                                    onClick={() => setLayout("side")}
                                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${layout === "side" ? "bg-background shadow text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                                >
                                    <LayoutList className="h-4 w-4" /> Lado a lado
                                </button>
                            </div>
                        </div>
                    </SlideUp>
                </div>

                {/* ── MOBILE: siempre vertical ── */}
                <div className="md:hidden space-y-6">
                    {projects.map((project, index) => {
                        const Icon = getIcon(project.mainIcon);
                        return (
                            <SlideUp key={index} delay={0.1 * index}>
                                <div className="rounded-2xl glass border border-border/50 hover:border-primary/30 transition-all duration-300 group overflow-hidden">
                                    {project.previewSrc && (
                                        <div className="relative w-full h-56 overflow-hidden">
                                            <Image
                                                src={project.previewSrc}
                                                alt={`Preview de ${project.title}`}
                                                fill
                                                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                                sizes="100vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
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

                {/* ── DESKTOP: OPCIÓN A — Grid 2 columnas ── */}
                {layout === "grid" && (
                    <div className="hidden md:grid md:grid-cols-2 gap-6">
                        {projects.map((project, index) => {
                            const Icon = getIcon(project.mainIcon);
                            return (
                                <SlideUp key={index} delay={0.1 * index}>
                                    <div className="rounded-2xl glass border border-border/50 hover:border-primary/30 transition-all duration-300 group overflow-hidden h-full flex flex-col">
                                        {project.previewSrc && (
                                            <div className="relative w-full h-56 overflow-hidden">
                                                <Image
                                                    src={project.previewSrc}
                                                    alt={`Preview de ${project.title}`}
                                                    fill
                                                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                                    sizes="50vw"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
                                            </div>
                                        )}
                                        <div className="p-6 flex items-start gap-4 flex-1">
                                            <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 overflow-hidden">
                                                {project.logoSrc ? (
                                                    <Image src={project.logoSrc} alt={project.title} width={56} height={56} className="w-full h-full object-contain" />
                                                ) : (
                                                    <Icon className="h-7 w-7 group-hover:scale-110 transition-transform duration-300" />
                                                )}
                                            </div>
                                            <div className="space-y-3 flex-1">
                                                <div>
                                                    <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{project.description}</p>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tags.map(tag => (
                                                        <Badge key={tag} className="bg-primary/5 text-primary border-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
                                                            {tag}
                                                        </Badge>
                                                    ))}
                                                </div>
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
                                </SlideUp>
                            );
                        })}
                    </div>
                )}

                {/* ── DESKTOP: OPCIÓN B — Imagen izquierda, info derecha ── */}
                {layout === "side" && (
                    <div className="hidden md:flex flex-col gap-6">
                        {projects.map((project, index) => {
                            const Icon = getIcon(project.mainIcon);
                            return (
                                <SlideUp key={index} delay={0.1 * index}>
                                    <div className="rounded-2xl glass border border-border/50 hover:border-primary/30 transition-all duration-300 group overflow-hidden">
                                        <div className="flex flex-row h-64">
                                            {/* Imagen izquierda */}
                                            {project.previewSrc && (
                                                <div className="relative w-1/2 shrink-0 overflow-hidden">
                                                    <Image
                                                        src={project.previewSrc}
                                                        alt={`Preview de ${project.title}`}
                                                        fill
                                                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                                        sizes="40vw"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20 pointer-events-none" />
                                                </div>
                                            )}
                                            {/* Info derecha */}
                                            <div className="flex-1 p-8 flex flex-col justify-between">
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-3">
                                                        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 overflow-hidden">
                                                            {project.logoSrc ? (
                                                                <Image src={project.logoSrc} alt={project.title} width={48} height={48} className="w-full h-full object-contain" />
                                                            ) : (
                                                                <Icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                                                            )}
                                                        </div>
                                                        <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                                                            {project.title}
                                                        </h3>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.tags.map(tag => (
                                                            <Badge key={tag} className="bg-primary/5 text-primary border-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
                                                                {tag}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                                {project.demoUrl && (
                                                    <Button size="sm" className="w-fit h-9 px-5 rounded-full gap-2 text-xs font-bold shadow-md hover:shadow-accent/30 hover:scale-105 transition-all duration-300 bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                                                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                                            <ExternalLink className="h-3.5 w-3.5" /> Sitio Web
                                                        </a>
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </SlideUp>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}
