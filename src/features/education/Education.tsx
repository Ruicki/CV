"use client";

import { FadeIn, SlideUp } from "@/components/ui/motion";
import { education } from "@/data/cv-data";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GraduationCap, Calendar } from "lucide-react";

export default function EducationSection() {
    return (
        <section id="education" className="py-24 relative overflow-hidden flex flex-col items-center justify-center scroll-mt-24">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(#c9a84c10_1px,transparent_1px)] bg-size-[32px_32px]"></div>

            <div className="container px-4 md:px-8">
                <div className="flex flex-col mb-16 space-y-4">
                    <FadeIn>
                        <SectionTitle>
                            Educación
                        </SectionTitle>
                    </FadeIn>
                    <SlideUp delay={0.2}>
                        <p className="max-w-[700px] text-muted-foreground text-base md:text-lg leading-relaxed">
                            Mi formación académica y base de conocimiento.
                        </p>
                    </SlideUp>
                </div>

                <div className="max-w-3xl mx-auto space-y-6">
                    {education.map((edu, index) => (
                        <SlideUp key={index} delay={0.1 * index}>
                            <div className="group p-6 md:p-8 rounded-3xl glass border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                                <div className="flex items-start gap-5">
                                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <GraduationCap className="h-6 w-6" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                                            {edu.degree}
                                        </h3>
                                        <p className="text-sm font-medium text-muted-foreground">
                                            {edu.institution}
                                        </p>
                                        <div className="flex items-center gap-2 text-xs font-mono text-primary/60">
                                            <Calendar className="h-3.5 w-3.5" />
                                            {edu.startDate} — {edu.endDate}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideUp>
                    ))}
                </div>
            </div>
        </section>
    );
}