import { FadeIn, SlideUp } from "@/components/ui/motion";
import { personalInfo, education } from "@/data/cv-data";
import { GraduationCap } from "lucide-react";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function About() {
    return (
        <section id="about" className="py-24 bg-muted/50">
            <div className="container px-4 md:px-6">
                <FadeIn>
                    <SectionTitle className="mb-8">
                        ¿Quien Soy?
                    </SectionTitle>
                </FadeIn>
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                    <SlideUp delay={0.2} className="space-y-4 text-muted-foreground">
                        <p className="text-lg whitespace-pre-line leading-relaxed">
                            {personalInfo.about}
                        </p>

                        <div className="mt-8">
                            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                                <GraduationCap className="h-5 w-5" /> Educación
                            </h3>
                            <div className="space-y-4">
                                {education.map((edu, index) => (
                                    <div key={index} className="border-l-2 border-primary/20 pl-4">
                                        <h4 className="font-medium text-foreground">{edu.degree}</h4>
                                        <p className="text-sm">{edu.institution}</p>
                                        <p className="text-xs text-muted-foreground">{edu.startDate} - {edu.endDate}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </SlideUp>
                    <SlideUp delay={0.4} className="mx-auto w-full max-w-[400px] aspect-square rounded-xl bg-muted border-2 border-dashed border-muted-foreground/25 flex items-center justify-center relative overflow-hidden shadow-xl">
                        {/* User Avatar */}
                        <div className="absolute inset-0 w-full h-full">
                            <Image
                                src={personalInfo.avatar}
                                alt={personalInfo.name}
                                fill
                                className="object-cover transition-transform hover:scale-105 duration-500"
                                priority
                            />
                        </div>
                    </SlideUp>
                </div>
            </div>
        </section>
    );
}
