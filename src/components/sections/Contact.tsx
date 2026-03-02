"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Mail, Github, Linkedin, MessageSquare } from "lucide-react";
import { FadeIn, SlideUp } from "@/components/ui/motion";
import { personalInfo, socialLinks } from "@/data/resume";
import { Icons } from "@/components/ui/icons";

export default function Contact() {
    return (
        <section id="contact" className="py-24 flex flex-col items-center justify-center">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-2xl space-y-8 text-center">
                    <FadeIn>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            ¿Quieres contactarme?
                        </h2>
                    </FadeIn>
                    <SlideUp delay={0.2}>
                        <p className="text-muted-foreground md:text-xl">
                            Estoy disponible para nuevas oportunidades y colaboraciones.
                            ¡Contactame y creemos algo increíble!
                        </p>
                    </SlideUp>

                    <SlideUp delay={0.3} className="flex flex-col items-center gap-4">
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className={buttonVariants({ size: 'lg', className: "rounded-full gap-2" })}
                            >
                                <Mail className="h-4 w-4" /> Enviar Email
                            </a>
                            {socialLinks.find(l => l.platform === 'WhatsApp') && (
                                <a
                                    href={socialLinks.find(l => l.platform === 'WhatsApp')?.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={buttonVariants({ variant: 'outline', size: 'lg', className: "rounded-full gap-2" })}
                                >
                                    <Icons.WhatsApp className="h-4 w-4" /> WhatsApp
                                </a>
                            )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                            O llámame al: <span className="font-medium text-foreground">{personalInfo.phone}</span>
                        </p>
                    </SlideUp>

                    <SlideUp delay={0.4} className="flex justify-center gap-6 mt-8">
                        {/* Social Icons Mini */}
                        {socialLinks.map((link, index) => {
                            let Icon;
                            if (link.platform === 'GitHub') Icon = Github;
                            else if (link.platform === 'LinkedIn') Icon = Linkedin;
                            else if (link.platform === 'Email') Icon = Mail;
                            else if (link.platform === 'WhatsApp') Icon = Icons.WhatsApp;
                            else Icon = MessageSquare;

                            if (link.platform === 'Email' || link.platform === 'WhatsApp') return null; // Already shown in buttons

                            return (
                                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                    <Icon className="h-6 w-6" />
                                </a>
                            )
                        })}
                    </SlideUp>
                </div>
            </div>
        </section>
    );
}
