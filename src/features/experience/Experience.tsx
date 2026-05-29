"use client";

import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { experience } from "@/data/cv-data";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { Briefcase, Calendar, Building2 } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="py-24 relative overflow-hidden flex flex-col items-center justify-center scroll-mt-24">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(#c9a84c15_1px,transparent_1px)] bg-size-[24px_24px]"></div>
             {/* Timeline background decor */}
             <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-border/50 to-transparent -translate-x-1/2 hidden md:block"></div>

            <div className="container px-4 md:px-8">
                <div className="flex flex-col mb-16 space-y-4">
                    <FadeIn>
                        <SectionTitle>
                            Trayectoria Profesional
                        </SectionTitle>
                    </FadeIn>
                    <SlideUp delay={0.2}>
                        <p className="max-w-[800px] text-muted-foreground text-base md:text-lg leading-relaxed">
                            Mi evolución en el mundo laboral, adaptándome a diferentes roles y optimizando procesos en cada paso.
                        </p>
                    </SlideUp>
                </div>

                <div className="relative space-y-12">
                    <StaggerContainer className="grid gap-12 lg:grid-cols-1 max-w-5xl mx-auto">
                        {experience.map((job, index) => (
                            <StaggerItem key={index} className="group relative">
                                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-12">
                                    {/* Date Column */}
                                    <div className="flex flex-row md:flex-col items-center md:items-end justify-start md:justify-start gap-3 md:pt-2">
                                        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary md:hidden">
                                            <Calendar className="h-5 w-5" />
                                        </div>
                                        <span className="text-lg font-black text-foreground/40 group-hover:text-primary transition-colors duration-300">
                                            {job.endDate}
                                        </span>
                                        <div className="h-px w-8 bg-border md:hidden"></div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
                                            {job.startDate}
                                        </span>
                                    </div>

                                    {/* Content Column */}
                                    <div className="relative pl-0 md:pl-12 border-l-0 md:border-l border-border/40 group-last:border-l-transparent">
                                        {/* Dot on timeline (Desktop) */}
                                        <div className="absolute left-0 top-3 -translate-x-1/2 h-5 w-5 rounded-full bg-background border-4 border-primary shadow-[0_0_15px_-3px_rgba(var(--primary),0.5)] z-10 hidden md:block"></div>

                                        <div className="p-6 rounded-3xl glass border border-border/50 shadow-xl group-hover:border-primary/30 group-hover:shadow-primary/5 transition-all duration-500 overflow-hidden relative">
                                            {/* Subtle background icon */}
                                            <Briefcase className="absolute -right-8 -bottom-8 h-40 w-40 text-muted-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                            <div className="relative z-10 space-y-5">
                                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                                    <div className="space-y-1">
                                                        <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                                                            {job.position}
                                                        </h3>
                                                        <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-wide uppercase">
                                                            <Building2 className="h-4 w-4" /> {job.company}
                                                        </div>
                                                    </div>
                                                </div>

                                                <p className="text-muted-foreground text-base leading-relaxed">
                                                    {job.description}
                                                </p>

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
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </div>
        </section>
    );
}
