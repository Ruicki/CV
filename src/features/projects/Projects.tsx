"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Code2, ExternalLink, Github, Lock, Maximize2, Pause, Play, X } from "lucide-react";
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
    "h-11 w-11 rounded-full glass border border-border/60 flex items-center justify-center text-foreground hover:border-primary/50 hover:text-primary transition-colors";

/** Tiempo que cada proyecto queda en pantalla antes de pasar al siguiente. */
const AUTOPLAY_MS = 7000;

const pad = (n: number) => String(n).padStart(2, "0");

// ── Captura dentro del escenario ──────────────────────────────────────────────

function ScreenshotFrame({ shot, title }: { shot: ProjectScreenshot; title: string }) {
    const alt = `Captura de ${title}${shot.label ? ` (${shot.label})` : ""}`;

    if (shot.kind === "mobile") {
        return (
            <div className="relative h-full aspect-[390/800] rounded-[1.8rem] overflow-hidden border-[6px] border-black/70 bg-black shadow-2xl">
                <Image src={shot.src} alt={alt} fill sizes="320px" className="object-cover object-top" />
            </div>
        );
    }

    return (
        <div className="relative w-full h-full">
            <Image src={shot.src} alt={alt} fill sizes="(min-width: 1024px) 60vw, 95vw" className="object-contain drop-shadow-2xl" priority={false} />
        </div>
    );
}

/** Lado visual del escenario: captura grande + selector de vistas. */
function StageMedia({ project, onOpen, wasDragged }: {
    project: Project;
    onOpen: (index: number) => void;
    wasDragged: () => boolean;
}) {
    const shots = project.screenshots ?? [];
    const [active, setActive] = useState(0);
    const shot = shots[active];

    return (
        <div
            className="relative h-[300px] sm:h-[400px] lg:h-full lg:min-h-[500px] overflow-hidden"
            style={{ background: `radial-gradient(circle at 50% 45%, ${project.accent}55 0%, ${project.accent}14 45%, transparent 75%)` }}
        >
            {shot ? (
                <button
                    type="button"
                    onClick={() => { if (!wasDragged()) onOpen(active); }}
                    className="group/shot absolute inset-0 flex items-center justify-center px-4 pt-4 pb-14 sm:px-8 sm:pt-8 cursor-zoom-in"
                    aria-label={`Ver captura de ${project.title} en pantalla completa`}
                >
                    <ScreenshotFrame shot={shot} title={project.title} />
                    <span className="absolute top-3 right-3 h-9 w-9 rounded-full bg-background/70 backdrop-blur flex items-center justify-center text-foreground opacity-70 group-hover/shot:opacity-100 transition-opacity">
                        <Maximize2 className="h-4 w-4" />
                    </span>
                </button>
            ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                    <ProjectIcon name={project.mainIcon} className="h-20 w-20 opacity-40" />
                </div>
            )}

            {shots.length > 1 && (
                <div
                    className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 p-1 rounded-full bg-background/70 backdrop-blur border border-border/50 max-w-[calc(100%-1.5rem)] overflow-x-auto [scrollbar-width:none]"
                    role="tablist"
                    aria-label={`Capturas de ${project.title}`}
                >
                    {shots.map((s, i) => (
                        <button
                            key={s.src}
                            type="button"
                            role="tab"
                            aria-selected={i === active}
                            onClick={() => setActive(i)}
                            className={cn(
                                "px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-colors",
                                i === active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
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

// ── Información del proyecto ──────────────────────────────────────────────────

function StageInfo({ project, index }: { project: Project; index: number }) {
    return (
        <div className="flex flex-col justify-center gap-4 p-6 sm:p-8 lg:p-10">
            <p className="text-sm font-black tracking-widest text-muted-foreground">
                <span style={{ color: project.accent }}>{pad(index + 1)}</span> / {pad(projects.length)}
            </p>

            <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 overflow-hidden">
                    {project.logoSrc ? (
                        <Image src={project.logoSrc} alt="" width={48} height={48} className="w-full h-full object-contain" />
                    ) : (
                        <ProjectIcon name={project.mainIcon} className="h-6 w-6" />
                    )}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">{project.title}</h3>
            </div>

            {project.metric && (
                <p className="text-sm text-muted-foreground">
                    <span className="text-3xl font-black" style={{ color: project.accent }}>{project.metric.value}</span>{" "}
                    {project.metric.label.toLowerCase()}
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
    );
}

// ── Sección ───────────────────────────────────────────────────────────────────

export default function Projects() {
    const sectionRef = useRef<HTMLElement>(null);
    const railRef = useRef<HTMLDivElement>(null);
    const draggedRef = useRef(false);
    const swipeStartX = useRef<number | null>(null);
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);
    const [lightbox, setLightbox] = useState<{ project: Project; index: number } | null>(null);
    // Autoplay: el usuario puede detenerlo; también se pausa al pasar el mouse o tocar,
    // fuera de pantalla, con la vista a pantalla completa abierta y con "reducir movimiento".
    const [autoplay, setAutoplay] = useState(true);
    const [hovering, setHovering] = useState(false);
    const [inView, setInView] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);

    const project = projects[current];

    const goTo = useCallback((i: number) => {
        const next = (i + projects.length) % projects.length;
        // Avanzar (o pasar del último al primero) entra desde la derecha; retroceder, desde la izquierda.
        setDirection(next > current || (current === projects.length - 1 && next === 0) ? 1 : -1);
        setCurrent(next);
    }, [current]);

    useEffect(() => {
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        const update = () => setReducedMotion(media.matches);
        update();
        media.addEventListener("change", update);
        return () => media.removeEventListener("change", update);
    }, []);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;
        const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.3 });
        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    const playing = autoplay && !hovering && inView && !lightbox && !reducedMotion;

    // Cada cambio de proyecto (automático o manual) reinicia la cuenta.
    useEffect(() => {
        if (!playing) return;
        const timer = setTimeout(() => goTo(current + 1), AUTOPLAY_MS);
        return () => clearTimeout(timer);
    }, [playing, current, goTo]);

    // En móvil, mantener visible la miniatura activa dentro de la fila.
    useEffect(() => {
        const rail = railRef.current;
        const thumb = rail?.children[current] as HTMLElement | undefined;
        if (!rail || !thumb || rail.scrollWidth <= rail.clientWidth) return;
        rail.scrollTo({ left: thumb.offsetLeft - (rail.clientWidth - thumb.clientWidth) / 2, behavior: "smooth" });
    }, [current]);

    // Deslizar con el dedo o el mouse: más de 60 px cambia de proyecto.
    // Un deslizamiento no debe abrir la captura a pantalla completa (draggedRef).
    const onPointerDown = (e: React.PointerEvent) => {
        swipeStartX.current = e.clientX;
        draggedRef.current = false;
    };
    const onPointerMove = (e: React.PointerEvent) => {
        if (swipeStartX.current !== null && Math.abs(e.clientX - swipeStartX.current) > 10) draggedRef.current = true;
    };
    const onPointerUp = (e: React.PointerEvent) => {
        if (swipeStartX.current === null) return;
        const dx = e.clientX - swipeStartX.current;
        swipeStartX.current = null;
        if (dx < -60) goTo(current + 1);
        else if (dx > 60) goTo(current - 1);
    };

    return (
        <section ref={sectionRef} id="projects" className="py-24 relative overflow-hidden flex flex-col items-center justify-center scroll-mt-24">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(#c9a84c1a_1px,transparent_1px)] bg-size-[32px_32px]"></div>

            <div className="container px-4 md:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
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
                    <div className="flex items-center gap-2 shrink-0">
                        <button
                            type="button"
                            onClick={() => setAutoplay((v) => !v)}
                            className="h-11 w-11 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                            aria-label={autoplay ? "Pausar el carrusel" : "Reanudar el carrusel"}
                        >
                            {autoplay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                        </button>
                        <button type="button" className={arrowClass} onClick={() => goTo(current - 1)} aria-label="Proyecto anterior">
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button type="button" className={arrowClass} onClick={() => goTo(current + 1)} aria-label="Proyecto siguiente">
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* Escenario: un proyecto a la vez */}
                <SlideUp delay={0.1}>
                    <div
                        className="relative rounded-3xl glass border border-border/50 overflow-hidden"
                        onMouseEnter={() => setHovering(true)}
                        onMouseLeave={() => setHovering(false)}
                        onTouchStart={() => setHovering(true)}
                        onTouchEnd={() => setHovering(false)}
                        onPointerDown={onPointerDown}
                        onPointerMove={onPointerMove}
                        onPointerUp={onPointerUp}
                        onPointerCancel={() => { swipeStartX.current = null; }}
                        onDragStart={(e) => e.preventDefault()}
                        aria-roledescription="carrusel"
                        aria-label="Proyectos"
                        aria-live={playing ? "off" : "polite"}
                    >
                        <AnimatePresence mode="wait" initial={false} custom={direction}>
                            <motion.article
                                key={project.slug}
                                custom={direction}
                                initial={{ opacity: 0, x: reducedMotion ? 0 : direction * 60 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: reducedMotion ? 0 : direction * -60 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                className="grid lg:grid-cols-[1.35fr_1fr] lg:min-h-[500px] touch-pan-y select-none"
                                aria-roledescription="diapositiva"
                                aria-label={`${current + 1} de ${projects.length}: ${project.title}`}
                            >
                                <StageMedia
                                    project={project}
                                    onOpen={(index) => setLightbox({ project, index })}
                                    wasDragged={() => draggedRef.current}
                                />
                                <StageInfo project={project} index={current} />
                            </motion.article>
                        </AnimatePresence>
                    </div>
                </SlideUp>

                {/* Fila de miniaturas: navegación + progreso del autoplay */}
                <div
                    ref={railRef}
                    className="mt-5 flex lg:grid lg:grid-cols-5 gap-3 overflow-x-auto snap-x pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {projects.map((p, i) => {
                        const thumb = p.screenshots?.[0];
                        const isActive = i === current;
                        return (
                            <button
                                key={p.slug}
                                type="button"
                                onClick={() => goTo(i)}
                                aria-label={`Ir a ${p.title}`}
                                aria-current={isActive}
                                className={cn(
                                    "snap-start shrink-0 w-[150px] lg:w-auto text-left rounded-2xl border p-2 transition-all",
                                    isActive ? "border-primary/40 bg-primary/5" : "border-border/40 opacity-60 hover:opacity-100"
                                )}
                            >
                                <div className="relative h-16 rounded-xl overflow-hidden" style={{ background: `${p.accent}22` }}>
                                    {thumb ? (
                                        <Image src={thumb.src} alt="" fill sizes="200px" className={cn("object-cover", thumb.kind === "mobile" ? "object-top" : "object-center")} />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <ProjectIcon name={p.mainIcon} className="h-6 w-6 opacity-50" />
                                        </div>
                                    )}
                                </div>
                                <p className="mt-2 text-xs font-bold text-foreground truncate">{p.title}</p>
                                <div className="mt-2 h-1 rounded-full bg-muted-foreground/20 overflow-hidden">
                                    {isActive && (
                                        <span
                                            key={`${current}-${playing}`}
                                            className="block h-full rounded-full"
                                            style={{
                                                background: p.accent,
                                                ...(playing ? { animation: `carousel-progress ${AUTOPLAY_MS}ms linear forwards` } : { width: "100%" }),
                                            }}
                                        />
                                    )}
                                </div>
                            </button>
                        );
                    })}
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
