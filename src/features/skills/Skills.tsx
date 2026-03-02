"use client";

import { Code2, Database, BrainCircuit, Languages } from "lucide-react";

import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { skills } from "@/data/cv-data";
import { Icons } from "@/components/ui/icons";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";

// Helper to map string icon names to components
const getIcon = (iconName?: string) => {
    switch (iconName) {
        case "JavaScript":
            return Icons.JavaScript;
        case "TypeScript":
            return Icons.TypeScript;
        case "React":
            return Icons.React;
        case "Node":
            return Icons.Node;
        case "Data":
            return Database;
        case "Problem":
            return BrainCircuit;
        case "Spanish":
        case "English":
            return Languages;
        default:
            return Code2;
    }
};

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-background flex flex-col items-center justify-center">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <FadeIn>
                        <SectionTitle>
                            Habilidades Técnicas
                        </SectionTitle>
                    </FadeIn>
                    <SlideUp delay={0.2}>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                            Tecnologías y herramientas con las que trabajo diariamente.
                        </p>
                    </SlideUp>
                </div>

                <StaggerContainer className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {skills.map((skill, index) => {
                        const Icon = getIcon(skill.icon);
                        return (
                            <StaggerItem key={index}>
                                <Badge className="px-5 py-3 bg-secondary/50 border border-secondary transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary flex items-center gap-2 text-sm sm:text-base">
                                    <Icon className="h-4 w-4" />
                                    {skill.name}
                                </Badge>
                            </StaggerItem>
                        )
                    })}
                </StaggerContainer>
            </div>
        </section>
    );
}
