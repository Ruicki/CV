"use client";

import { Code2, ExternalLink, Github, Lock } from "lucide-react";
import Image from "next/image";

import { FadeIn, SlideUp } from "@/components/ui/motion";
import { projects } from "@/data/cv-data";
import { Icons } from "@/components/ui/icons";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { Project, ProjectStatus } from "@/types";

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

const STATUS: Record<ProjectStatus, { label: string; className: string }> = {
    cliente: { label: "Cliente", className: "bg-accent/15 text-accent border-accent/30" },
    propio: { label: "Propio", className: "bg-primary/10 text-primary border-primary/20" },
    "en-desarrollo": { label: "En desarrollo", className: "bg-muted text-muted-foreground border-border" },
};

const linkClass =
    "w-fit inline-flex flex-row items-center gap-2 h-9 px-5 rounded-full text-xs font-bold border border-primary/50 bg-transparent text-primary hover:bg-primary/10 transition-all duration-300";

function ProjectPreview({ project }: { project: Project }) {
    const { desktop, mobile } = project.images ?? {};
    const height = "h-52";

    if (desktop) {
        return (
            <div className={cn("relative w-full overflow-hidden shrink-0", height)}>
                <Image
                    src={desktop}
                    alt={`Captura de ${project.title} en escritorio`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {mobile && (
                    <div className="absolute bottom-3 right-3 hidden md:block h-[70%] aspect-[390/844] rounded-xl overflow-hidden border-2 border-background shadow-xl">
                        <Image src={mobile} alt={`Captura de ${project.title} en móvil`} fill sizes="160px" className="object-cover object-top" />
                    </div>
                )}
            </div>
        );
    }

    if (mobile) {
        return (
            <div className={cn("relative w-full overflow-hidden shrink-0 bg-linear-to-br from-primary/10 to-accent/10 flex justify-center pt-4", height)}>
                <div className="relative h-full aspect-[390/844] rounded-t-2xl overflow-hidden border-2 border-b-0 border-background shadow-xl">
                    <Image src={mobile} alt={`Captura de ${project.title} en móvil`} fill sizes="200px" className="object-cover object-top" />
                </div>
            </div>
        );
    }

    // Sin captura todavía: panel neutro con el icono del proyecto.
    return (
        <div className={cn("w-full shrink-0 flex items-center justify-center bg-linear-to-br from-primary/10 via-background to-accent/10", height)}>
            <ProjectIcon name={project.mainIcon} className="h-14 w-14 opacity-40" />
        </div>
    );
}

function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
    const status = STATUS[project.status];

    return (
        <SlideUp delay={delay} className="h-full">
            <article className="rounded-2xl glass border border-border/50 hover:border-primary/30 transition-all duration-300 group overflow-hidden flex flex-col h-full">
                <ProjectPreview project={project} />

                <div className="p-5 md:p-6 flex flex-col flex-1 gap-3">
                    <div className="flex items-start gap-3">
                        <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 overflow-hidden">
                            {project.logoSrc ? (
                                <Image src={project.logoSrc} alt="" width={44} height={44} className="w-full h-full object-contain" />
                            ) : (
                                <ProjectIcon name={project.mainIcon} className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                            )}
                        </div>
                        <div className="flex-1 min-w-0 space-y-1">
                            <Badge className={cn("inline-block border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider", status.className)}>
                                {status.label}
                            </Badge>
                            <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                        </div>
                    </div>

                    {project.metric && (
                        <p className="text-sm text-muted-foreground">
                            <span className="text-lg font-black text-accent">{project.metric.value}</span> {project.metric.label.toLowerCase()}
                        </p>
                    )}

                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.description}</p>

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
        </SlideUp>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative overflow-hidden flex flex-col items-center justify-center scroll-mt-24">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(#c9a84c1a_1px,transparent_1px)] bg-size-[32px_32px]"></div>

            <div className="container px-4 md:px-8">
                <div className="flex flex-col mb-16 space-y-4">
                    <FadeIn>
                        <SectionTitle>Proyectos</SectionTitle>
                    </FadeIn>
                    <SlideUp delay={0.2}>
                        <p className="max-w-[600px] text-muted-foreground text-base md:text-lg leading-relaxed">
                            Proyectos para clientes y proyectos propios, de principio a fin.
                        </p>
                    </SlideUp>
                </div>

                {/* Una sola lista: el grid se adapta por breakpoint, sin duplicar contenido. */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.slug} project={project} delay={0.1 * index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
