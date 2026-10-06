"use client";

import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { experience, otherExperience } from "@/data/cv-data";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="py-24 relative overflow-hidden flex flex-col items-center justify-center scroll-mt-24">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(#c9a84c15_1px,transparent_1px)] bg-size-[24px_24px]"></div>

            <div className="container px-4 md:px-8">
                <div className="flex flex-col mb-16 space-y-4">
                    <FadeIn>
                        <SectionTitle>
                            Trayectoria profesional
                        </SectionTitle>
                    </FadeIn>
                    <SlideUp delay={0.2}>
                        <p className="max-w-[800px] text-muted-foreground text-base md:text-lg leading-relaxed">
                            Mi experiencia en desarrollo de software y mi otra experiencia laboral.
                        </p>
                    </SlideUp>
                </div>

                <div className="relative space-y-12">
                    <StaggerContainer className="grid gap-12 max-w-5xl mx-auto">
                        {experience.map((job) => (
                            <StaggerItem key={job.position} className="group relative">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-5">
                                    Desarrollo de software
                                </h3>
                                <div className="p-6 md:p-8 rounded-3xl glass border border-border/50 shadow-xl group-hover:border-primary/30 group-hover:shadow-primary/5 transition-all duration-500 overflow-hidden relative">
                                    {/* Subtle background icon */}
                                    <Briefcase className="absolute -right-8 -bottom-8 h-40 w-40 text-muted-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    <div className="relative z-10 space-y-6">
                                        {/* Cargo, empresa y periodo */}
                                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                                            <div className="space-y-1">
                                                <h4 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                                                    {job.position}
                                                </h4>
                                                <p className="flex items-center gap-1.5 text-sm text-muted-foreground font-medium">
                                                    <MapPin className="h-3.5 w-3.5 shrink-0" /> {job.company} · {job.location}
                                                </p>
                                            </div>
                                            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shrink-0">
                                                <Calendar className="h-3.5 w-3.5" /> {job.startDate} – {job.endDate}
                                            </span>
                                        </div>

                                        <p className="text-muted-foreground text-base leading-relaxed">
                                            {job.description}
                                        </p>

                                        {/* Proyectos dentro del puesto */}
                                        {job.highlights && (
                                            <ul className="space-y-4">
                                                {job.highlights.map((item) => (
                                                    <li key={item.title} className="border-l-2 border-primary/40 pl-4 space-y-1">
                                                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4">
                                                            <span className="font-semibold text-foreground">{item.title}</span>
                                                            {item.period && (
                                                                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70 shrink-0">
                                                                    {item.period}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.detail}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {job.technologies && (
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {job.technologies.map((tech) => (
                                                    <Badge key={tech} className="bg-secondary/80 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-none font-bold">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>

                    {/* Otra experiencia laboral: bloque compacto, sin tags */}
                    <SlideUp className="max-w-5xl mx-auto">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-5">
                            Otra experiencia laboral
                        </h3>
                        <div className="p-6 md:p-8 rounded-3xl glass border border-border/50">
                            <ul className="divide-y divide-border/40">
                                {otherExperience.map((job) => (
                                    <li key={job.company} className="py-3 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4">
                                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/70 md:w-44 shrink-0">
                                            {job.startDate} – {job.endDate}
                                        </span>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            <span className="font-semibold text-foreground">{job.position}</span>
                                            {" · "}{job.company}, {job.location}
                                            {job.description && <>. {job.description}</>}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </SlideUp>
                </div>
            </div>
        </section>
    );
}
