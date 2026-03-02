"use client";

import { Button } from "@/components/ui/button";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { projects } from "@/data/cv-data";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-muted/50 flex flex-col items-center justify-center">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <FadeIn>
                        <SectionTitle>
                            Proyectos Destacados
                        </SectionTitle>
                    </FadeIn>
                    <SlideUp delay={0.2}>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Una selección de trabajos recientes que muestran mis habilidades.
                        </p>
                    </SlideUp>
                </div>

                <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
                    {projects.map((project, index) => (
                        <StaggerItem key={index} className="group relative overflow-hidden rounded-xl border bg-background text-card-foreground shadow transition-all hover:shadow-lg flex flex-col">
                            <div className="aspect-video w-full bg-muted flex items-center justify-center text-muted-foreground relative overflow-hidden">
                                {project.imageUrl ? (
                                    <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                                        {/* Placeholder logic until real images are added, or use Image if path is valid */}
                                        <span className="text-4xl">📂</span>
                                    </div>
                                ) : (
                                    <span className="text-4xl">🚧</span>
                                )}
                            </div>
                            <div className="p-6 space-y-4 flex-1 flex flex-col">
                                <div>
                                    <h3 className="text-2xl font-semibold leading-none tracking-tight mb-2">{project.title}</h3>
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {project.tags.map(tag => (
                                            <Badge key={tag}>{tag}</Badge>
                                        ))}
                                    </div>
                                    <p className="text-sm text-muted-foreground line-clamp-3">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="flex gap-2 pt-2 mt-auto">
                                    {project.demoUrl && (
                                        <Button variant="outline" size="sm" className="w-full" asChild>
                                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Demo</a>
                                        </Button>
                                    )}
                                    {project.repoUrl && (
                                        <Button variant="outline" size="sm" className="w-full" asChild>
                                            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
