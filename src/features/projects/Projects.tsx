"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Code2, ExternalLink, Github, Lock, Maximize2, X } from "lucide-react";
import Image from "next/image";

import { FadeIn, SlideUp } from "@/components/ui/motion";
import { projects } from "@/data/cv-data";
import { Icons } from "@/components/ui/icons";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { Project, ProjectScreenshot } from "@/types";

function ProjectIcon({ name, className }: { name?: string; className?: string }) {
    switch (name) {
        case "Nextjs": return <Icons.Nextjs className={className} />;
        case "React": return <Icons.React className={className} />;
        case "Node": return <Icons.Node className={className} />;
        case "TypeScript": return <Icons.TypeScript className={className} />;
        case "JavaScript": return <Icons.JavaScript className={className} />;
        default: return <Code2 className={className} />;
    }
}

const linkClass =
    "w-fit inline-flex flex-row items-center gap-2 h-9 px-5 rounded-full text-xs font-bold border border-primary/50 bg-transparent text-primary hover:bg-primary/10 transition-all duration-300";

const arrowClass =
    "h-11 w-11 rounded-full glass border border-border/60 flex items-center justify-center text-foreground hover:border-primary/50 hover:text-primary transition-colors disabled:opacity-30 disabled:pointer-events-none";

// ── Galería de capturas de un proyecto ────────────────────────────────────────

function ScreenshotFrame({ shot, title, sizes }: { shot: ProjectScreenshot; title: string; sizes: string }) {
    const alt = `Captura de ${title}${shot.label ? ` (${shot.label})` : ""}`;

    if (shot.kind === "mobile") {
        return (
            <div className="relative h-full aspect-[390/800] rounded-[1.6rem] overflow-hidden border-[5px] border-foreground/15 bg-black shadow-2xl">
                <Image src={shot.src} alt={alt} fill sizes="320px" className="object-cover object-top" />
            </div>
        );
    }

    return (
        <div className="relative w-full h-full">
            <Image src={shot.src} alt={alt} fill sizes={sizes} className="object-contain drop-shadow-2xl" />
        </div>
    );
}

function ProjectGallery({ project, onOpen }: { project: Project; onOpen: (index: number) => void }) {
    const shots = project.screenshots ?? [];
    const [active, setActive] = useState(0);
    const shot = shots[active];

    return (
        <div className="flex flex-col gap-3">
            <div className="relative h-[300px] sm:h-[380px] lg:h-[440px] rounded-2xl bg-linear-to-br from-primary/10 via-background to-accent/10 border border-border/40 overflow-hidden">
                {shot ? (
                    <button
                        type="button"
                        onClick={() => onOpen(active)}
                        className="group/shot absolute inset-0 flex items-center justify-center p-4 sm:p-6 cursor-zoom-in"
                        aria-label={`Ver captura de ${project.title} en pantalla completa`}
                    >
                        <ScreenshotFrame shot={shot} title={project.title} sizes="(min-width: 1024px) 55vw, 90vw" />
                        <span className="absolute top-3 right-3 h-9 w-9 rounded-full bg-background/70 backdrop-blur flex items-center justify-center text-foreground opacity-80 group-hover/shot:opacity-100 transition-opacity">
                            <Maximize2 className="h-4 w-4" />
                        </span>
                    </button>
                ) : (
                    // Sin captura todavía: panel neutro con el icono del proyecto.
                    <div className="absolute inset-0 flex items-center justify-center">
                        <ProjectIcon name={project.mainIcon} className="h-16 w-16 opacity-40" />
                    </div>
                )}
            </div>

            {shots.length > 1 && (
                <div className="flex flex-wrap gap-2" role="tablist" aria-label={`Capturas de ${project.title}`}>
                    {shots.map((s, i) => (
                        <button
                            key={s.src}
                            type="button"
                            role="tab"
                            aria-selected={i === active}
                            onClick={() => setActive(i)}
                            className={cn(
                                "px-3 py-1.5 rounded-full text-xs font-bold border transition-colors",
                                i === active
                                    ? "bg-primary text-primary-foreground border-primary"
                                    : "border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40"
                            )}
                        >
                            {s.label ?? `Vista ${i + 1}`}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

// ── Vista a pantalla completa ─────────────────────────────────────────────────

function Lightbox({ project, index, onClose, onIndex }: {
    project: Project;
    index: number;
    onClose: () => void;
    onIndex: (index: number) => void;
}) {
    const shots = project.screenshots ?? [];
    const shot = shots[index];
    const prev = useCallback(() => onIndex((index - 1 + shots.length) % shots.length), [index, shots.length, onIndex]);
    const next = useCallback(() => onIndex((index + 1) % shots.length), [index, shots.length, onIndex]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        const overflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = overflow;
            window.removeEventListener("keydown", onKey);
        };
    }, [onClose, prev, next]);

    if (!shot) return null;

    return (
        <div
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label={`Capturas de ${project.title}`}
            onClick={onClose}
        >
            <div className="flex items-center justify-between gap-4 p-4 text-white" onClick={(e) => e.stopPropagation()}>
                <p className="text-sm font-semibold truncate">
                    {project.title}
                    {shot.label && <span className="text-white/60 font-normal"> · {shot.label}</span>}
                    {shots.length > 1 && <span className="text-white/60 font-normal"> · {index + 1}/{shots.length}</span>}
                </p>
                <button type="button" onClick={onClose} className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center shrink-0" aria-label="Cerrar">
                    <X className="h-5 w-5" />
                </button>
            </div>

            <div className="relative flex-1 mx-4 mb-4 sm:mx-16">
                <Image
                    src={shot.src}
                    alt={`Captura de ${project.title}${shot.label ? ` (${shot.label})` : ""}`}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    onClick={(e) => e.stopPropagation()}
                />
            </div>

            {shots.length > 1 && (
                <>
                    <button type="button" onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center" aria-label="Captura anterior">
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button type="button" onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center" aria-label="Captura siguiente">
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </>
            )}
        </div>
    );
}

// ── Diapositiva de un proyecto ────────────────────────────────────────────────

function ProjectSlide({ project, onOpen }: { project: Project; onOpen: (index: number) => void }) {
    return (
        <article className="h-full rounded-3xl glass border border-border/50 p-4 sm:p-6 grid gap-6 lg:grid-cols-[3fr_2fr] lg:items-center">
            <ProjectGallery project={project} onOpen={onOpen} />

            <div className="flex flex-col gap-4 px-1">
                <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 overflow-hidden">
                        {project.logoSrc ? (
                            <Image src={project.logoSrc} alt="" width={48} height={48} className="w-full h-full object-contain" />
                        ) : (
                            <ProjectIcon name={project.mainIcon} className="h-6 w-6" />
                        )}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">{project.title}</h3>
                </div>

                {project.metric && (
                    <p className="text-sm text-muted-foreground">
                        <span className="text-2xl font-black text-accent">{project.metric.value}</span> {project.metric.label.toLowerCase()}
                    </p>
                )}

                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                        <Badge key={tag} className="bg-primary/5 text-primary border border-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                            {tag}
                        </Badge>
                    ))}
                </div>

                {(project.demoUrl || project.repoUrl || project.privateNote) && (
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                        {project.demoUrl && (
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                                <ExternalLink className="h-3.5 w-3.5 shrink-0" /> Sitio Web
                            </a>
                        )}
                        {project.repoUrl && (
                            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                                <Github className="h-3.5 w-3.5 shrink-0" /> Código
                            </a>
                        )}
                        {project.privateNote && (
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                                <Lock className="h-3.5 w-3.5 shrink-0" /> {project.privateNote}
                            </span>
                        )}
                    </div>
                )}
            </div>
        </article>
    );
}

// ── Sección ───────────────────────────────────────────────────────────────────

export default function Projects() {
    const trackRef = useRef<HTMLDivElement>(null);
    const [current, setCurrent] = useState(0);
    const [lightbox, setLightbox] = useState<{ project: Project; index: number } | null>(null);

    const goTo = useCallback((i: number) => {
        const track = trackRef.current;
        const slide = track?.children[i] as HTMLElement | undefined;
        if (!track || !slide) return;
        track.scrollTo({ left: slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2, behavior: "smooth" });
    }, []);

    // Diapositiva activa = la más cercana al centro del carrusel.
    const onScroll = useCallback(() => {
        const track = trackRef.current;
        if (!track) return;
        const center = track.scrollLeft + track.clientWidth / 2;
        let best = 0;
        let bestDistance = Infinity;
        Array.from(track.children).forEach((child, i) => {
            const el = child as HTMLElement;
            const distance = Math.abs(el.offsetLeft + el.clientWidth / 2 - center);
            if (distance < bestDistance) { bestDistance = distance; best = i; }
        });
        setCurrent(best);
    }, []);

    return (
        <section id="projects" className="py-24 relative overflow-hidden flex flex-col items-center justify-center scroll-mt-24">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(#c9a84c1a_1px,transparent_1px)] bg-size-[32px_32px]"></div>

            <div className="container px-4 md:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
                    <div className="space-y-4">
                        <FadeIn>
                            <SectionTitle>Proyectos</SectionTitle>
                        </FadeIn>
                        <SlideUp delay={0.2}>
                            <p className="max-w-[600px] text-muted-foreground text-base md:text-lg leading-relaxed">
                                Proyectos que he desarrollado de principio a fin. Toca una captura para verla en grande.
                            </p>
                        </SlideUp>
                    </div>
                    <div className="hidden sm:flex gap-2 shrink-0">
                        <button type="button" className={arrowClass} onClick={() => goTo(current - 1)} disabled={current === 0} aria-label="Proyecto anterior">
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button type="button" className={arrowClass} onClick={() => goTo(current + 1)} disabled={current === projects.length - 1} aria-label="Proyecto siguiente">
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                <SlideUp delay={0.1}>
                    <div
                        ref={trackRef}
                        onScroll={onScroll}
                        className="relative flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                        aria-roledescription="carrusel"
                        aria-label="Proyectos"
                    >
                        {projects.map((project, i) => (
                            <div
                                key={project.slug}
                                className="snap-center shrink-0 w-[92%] sm:w-[85%] lg:w-[90%]"
                                aria-roledescription="diapositiva"
                                aria-label={`${i + 1} de ${projects.length}: ${project.title}`}
                            >
                                <ProjectSlide project={project} onOpen={(index) => setLightbox({ project, index })} />
                            </div>
                        ))}
                    </div>
                </SlideUp>

                {/* Puntos de navegación + flechas en móvil */}
                <div className="mt-6 flex items-center justify-center gap-4">
                    <button type="button" className={cn(arrowClass, "sm:hidden")} onClick={() => goTo(current - 1)} disabled={current === 0} aria-label="Proyecto anterior">
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <div className="flex items-center gap-2">
                        {projects.map((project, i) => (
                            <button
                                key={project.slug}
                                type="button"
                                onClick={() => goTo(i)}
                                aria-label={`Ir a ${project.title}`}
                                aria-current={i === current}
                                className={cn("h-2.5 rounded-full transition-all", i === current ? "w-8 bg-primary" : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60")}
                            />
                        ))}
                    </div>
                    <button type="button" className={cn(arrowClass, "sm:hidden")} onClick={() => goTo(current + 1)} disabled={current === projects.length - 1} aria-label="Proyecto siguiente">
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </div>

            {lightbox && (
                <Lightbox
                    project={lightbox.project}
                    index={lightbox.index}
                    onClose={() => setLightbox(null)}
                    onIndex={(index) => setLightbox({ project: lightbox.project, index })}
                />
            )}
        </section>
    );
}
