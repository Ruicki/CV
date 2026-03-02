import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { experience } from "@/data/resume";

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-muted/30 flex flex-col items-center justify-center">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <FadeIn>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Experiencia Laboral
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl">
                            Mi trayectoria profesional y aprendizajes clave.
                        </p>
                    </FadeIn>
                </div>

                <div className="relative max-w-3xl mx-auto pl-6 md:pl-0">
                    {/* Vertical Line */}
                    <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-px bg-border -translate-x-1/2 md:block hidden" />
                    <div className="absolute left-0 top-4 bottom-4 w-px bg-border md:hidden block" />

                    <StaggerContainer className="space-y-12">
                        {experience.map((job, index) => (
                            <StaggerItem key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Timeline Dot */}
                                <div className="absolute left-[-24px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-background border-2 border-primary -translate-x-1/2 z-10" />

                                {/* Date (Desktop) */}
                                <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'text-left pl-8' : 'text-right pr-8'} pt-0`}>
                                    <span className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-semibold">
                                        {job.startDate} - {job.endDate}
                                    </span>
                                </div>

                                {/* Content Card */}
                                <div className="md:w-1/2 flex flex-col gap-2">
                                    <div className="md:hidden mb-2">
                                        <span className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-semibold">
                                            {job.startDate} - {job.endDate}
                                        </span>
                                    </div>
                                    <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                                        <h3 className="text-xl font-bold">{job.position}</h3>
                                        <div className="text-primary font-medium mb-2">{job.company}</div>
                                        <p className="text-muted-foreground text-sm mb-4">
                                            {job.description}
                                        </p>
                                        {job.technologies && (
                                            <div className="flex flex-wrap gap-2">
                                                {job.technologies.map((tech) => (
                                                    <span key={tech} className="text-xs px-2 py-1 bg-secondary rounded-md text-secondary-foreground font-mono">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
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
