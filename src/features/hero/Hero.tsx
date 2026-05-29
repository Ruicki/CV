"use client";

import { SlideUp, FadeIn } from "@/components/ui/motion";
import { personalInfo } from "@/data/cv-data";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20 md:pt-0"
        >
            {/* Background Decor - Enhancing Aesthetics */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#c9a84c20_1px,transparent_1px)] dark:bg-[radial-gradient(#c9a84c0c_1px,transparent_1px)] bg-size-[16px_16px]"></div>
            
            {/* Glowing Orbs */}
            <div className="absolute left-1/4 top-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-primary/20 opacity-30 blur-[120px] animate-pulse"></div>
            <div className="absolute right-1/4 bottom-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-accent/20 opacity-30 blur-[100px] animate-pulse delay-700"></div>

            <div className="container relative z-10 flex flex-col items-center px-4 text-center md:px-6">
                <div className="space-y-6 max-w-4xl">
                    <FadeIn delay={0.1}>
                        <div className="inline-block rounded-full bg-muted/80 backdrop-blur-sm border border-border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                            {personalInfo.title}
                        </div>
                    </FadeIn>

                    <SlideUp delay={0.2}>
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                            Hola, Soy <span className="text-gradient decoration-4">{personalInfo.name}</span>
                        </h1>
                    </SlideUp>

                    <SlideUp delay={0.3}>
                        <p className="mx-auto max-w-[800px] text-muted-foreground text-base md:text-lg lg:text-xl leading-relaxed">
                            Especializado en <span className="text-foreground font-semibold">JavaScript, TypeScript</span> y el ecosistema <span className="text-foreground font-semibold">React</span>.
                            Diseño y construyo soluciones web de alto rendimiento y estética premium.
                        </p>
                    </SlideUp>
                </div>


            </div>
            
            {/* Subtle Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="h-10 w-6 rounded-full border-2 border-muted-foreground/30 flex justify-center p-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50"></div>
                </div>
            </div>
        </section>
    );
}
