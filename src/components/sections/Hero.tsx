import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { SlideUp, FadeIn } from "@/components/ui/motion";
import { personalInfo } from "@/data/resume";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-16 md:pt-0"
        >
            {/* Background Decor */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]"></div>
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>

            <div className="container flex flex-col items-center px-4 text-center md:px-6">
                <div className="space-y-4 max-w-3xl">
                    <FadeIn delay={0.1}>
                        <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                            {personalInfo.title}
                        </h2>
                    </FadeIn>
                    <SlideUp delay={0.2}>
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                            Hola, Soy <span className="text-primary">{personalInfo.name}</span>
                        </h1>
                    </SlideUp>
                    <SlideUp delay={0.3}>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                            Especializado en JavaScript, TypeScript y el ecosistema React.
                            Creo soluciones web modernas y eficientes.
                        </p>
                    </SlideUp>
                </div>

                <SlideUp delay={0.4} className="mt-8 flex flex-wrap justify-center gap-4">
                    <Link href="#projects" className={buttonVariants({ size: "lg", className: "rounded-full" })}>
                        Ver Proyectos <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>

                </SlideUp>
            </div>
        </section>
    );
}
