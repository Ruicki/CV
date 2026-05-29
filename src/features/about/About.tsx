"use client";

import { FadeIn, SlideUp } from "@/components/ui/motion";
import { personalInfo } from "@/data/cv-data";
import { MapPin, Mail, Code } from "lucide-react";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden flex flex-col items-center justify-center scroll-mt-24">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(#c9a84c18_1px,transparent_1px)] bg-size-[24px_24px]"></div>

            <div className="container px-4 md:px-8">
                <div className="flex flex-col mb-16 space-y-4">
                    <FadeIn>
                        <SectionTitle>
                            Sobre Mí
                        </SectionTitle>
                    </FadeIn>
                    <SlideUp delay={0.2}>
                        <p className="max-w-[700px] text-muted-foreground text-base md:text-lg leading-relaxed">
                            Conoce más sobre mi trayectoria, experiencia y lo que me motiva.
                        </p>
                    </SlideUp>
                </div>

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
                    <SlideUp delay={0.2} className="space-y-6">
                        <div className="p-1 rounded-2xl bg-linear-to-br from-primary/10 to-accent/10 border border-border/50 shadow-inner">
                            <div className="p-6 md:p-8 rounded-2xl bg-background/50 backdrop-blur-sm space-y-6 leading-relaxed">
                                <p className="text-lg md:text-xl text-foreground font-medium whitespace-pre-line">
                                    {personalInfo.about}
                                </p>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border/40">
                                    <div className="flex items-center gap-3 text-muted-foreground">
                                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <MapPin className="h-5 w-5" />
                                        </div>
                                        <span className="text-sm font-medium">{personalInfo.location}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-muted-foreground">
                                        <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <span className="text-sm font-medium">{personalInfo.email}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SlideUp>

                    <SlideUp delay={0.4} className="relative group mx-auto max-w-[450px]">
                        <div className="absolute -inset-4 rounded-3xl bg-linear-to-tr from-primary/20 via-accent/20 to-primary/20 blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60"></div>
                        <div className="rounded-2xl overflow-hidden glass border-2 border-white/20 dark:border-white/10 shadow-2xl">
                            <Image
                                src={personalInfo.avatar}
                                alt={personalInfo.name}
                                width={400}
                                height={500}
                                className="w-full h-auto transition-transform group-hover:scale-110 duration-700 ease-out"
                                priority
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        
                        <div className="absolute -bottom-4 -right-10 hidden sm:block p-5 glass border rounded-2xl shadow-xl">
                            <div className="flex items-center gap-3">
                                <Code className="h-5 w-5 text-primary" />
                                <div className="text-[10px] leading-tight font-bold uppercase tracking-widest text-muted-foreground">
                                    Full Stack <br /> Developer
                                </div>
                            </div>
                        </div>
                    </SlideUp>
                </div>
            </div>
        </section>
    );
}
