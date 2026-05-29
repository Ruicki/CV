"use client";

import { Code2 } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { FadeIn, SlideUp } from "@/components/ui/motion";
import { skills } from "@/data/cv-data";
import { Icons } from "@/components/ui/icons";
import { SectionTitle } from "@/components/ui/SectionTitle";

const getIcon = (iconName?: string) => {
    switch (iconName) {
        case "Html5": return Icons.Html5;
        case "Css3": return Icons.Css3;
        case "JavaScript": return Icons.JavaScript;
        case "TypeScript": return Icons.TypeScript;
        case "React": return Icons.React;
        case "Nextjs": return Icons.Nextjs;
        case "Tailwind": return Icons.Tailwind;
        case "Vite": return Icons.Vite;
        case "Router": return Icons.Router;
        case "Node": return Icons.Node;
        case "Express": return Icons.Express;
        case "Postman": return Icons.Postman;
        case "Git": return Icons.Git;
        case "Vercel": return Icons.Vercel;
        case "Eslint": return Icons.Eslint;
        case "Prettier": return Icons.Prettier;
        case "Notion": return Icons.Notion;
        default: return Code2;
    }
};

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section id="skills" className="py-24 relative flex flex-col items-center justify-center overflow-hidden scroll-mt-24">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(#c9a84c18_1px,transparent_1px)] bg-size-[24px_24px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>

            <div className="container px-4 md:px-8">
                <div className="flex flex-col mb-16 space-y-4">
                    <FadeIn>
                        <SectionTitle>
                            Habilidades Técnicas
                        </SectionTitle>
                    </FadeIn>
                    <SlideUp delay={0.2}>
                        <p className="max-w-[800px] text-muted-foreground text-base md:text-lg leading-relaxed">
                            Mi stack tecnológico base. Siempre explorando nuevas herramientas para construir soluciones web de primer nivel.
                        </p>
                    </SlideUp>
                </div>

                <div ref={ref} className="relative [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
                    <motion.div
                        className="flex gap-6 w-max"
                        animate={isInView ? { x: ["0%", "-50%"] } : { x: "0%" }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 40,
                                ease: "linear",
                            },
                        }}
                    >
                        {[...skills, ...skills].map((skill, idx) => {
                            const Icon = getIcon(skill.icon);
                            return (
                                <div
                                    key={idx}
                                    className="flex items-center gap-4 px-6 py-4 rounded-2xl border border-border/60 bg-background/80 backdrop-blur-sm shadow-sm hover:border-primary/40 hover:bg-primary/5 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 cursor-default shrink-0 hover:-translate-y-1"
                                >
                                    <Icon className="h-7 w-7 shrink-0" />
                                    <span className="text-base font-bold text-foreground whitespace-nowrap">{skill.name}</span>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}