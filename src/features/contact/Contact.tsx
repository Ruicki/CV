"use client";

import { buttonVariants } from "@/components/ui/button";
import { Mail, Github, Linkedin, MessageSquare, Phone, MapPin, ExternalLink } from "lucide-react";
import { FadeIn, SlideUp } from "@/components/ui/motion";
import { personalInfo, socialLinks } from "@/data/cv-data";
import { Icons } from "@/components/ui/icons";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden flex flex-col items-center justify-center bg-muted/30 scroll-mt-24">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-border to-transparent opacity-50"></div>
            
            <div className="container px-4 md:px-8">
                <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-center">
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <FadeIn>
                                <SectionTitle>
                                    ¡Construyamos Algo <br /><span className="text-gradient">Increíble </span> Juntos
                                </SectionTitle>
                            </FadeIn>
                            <SlideUp delay={0.2}>
                                <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
                                    Estoy en búsqueda de nuevas oportunidades y colaboraciones. Si tienes un proyecto o una vacante, me encantaría escucharte.
                                </p>
                            </SlideUp>
                        </div>

                        <div className="flex flex-wrap gap-5">
                            <a
                                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                    buttonVariants({ size: 'lg', className: "h-14 px-8 rounded-2xl gap-3 text-lg font-bold shadow-xl hover:shadow-primary/20 transition-all hover:scale-105" })
                                )}
                            >
                                <Mail className="h-5 w-5" /> Enviar Email
                            </a>
                            {socialLinks.find(l => l.platform === 'WhatsApp') && (
                                <a
                                    href={`https://wa.me/50768750112?text=Hola%20Ricardo%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cn(
                                        buttonVariants({ variant: 'outline', size: 'lg', className: "h-14 px-8 border-2 rounded-2xl gap-3 text-lg font-bold hover:bg-secondary transition-all" })
                                    )}
                                >
                                    <Icons.WhatsApp className="h-5 w-5" /> WhatsApp
                                </a>
                            )}
                        </div>

                        <div className="flex gap-8 items-center pt-8 border-t border-border/50">
                            {socialLinks.map((link, index) => {
                                let Icon;
                                if (link.platform === 'GitHub') Icon = Github;
                                else if (link.platform === 'LinkedIn') Icon = Linkedin;
                                else if (link.platform === 'Email') Icon = Mail;
                                else if (link.platform === 'WhatsApp') Icon = Icons.WhatsApp;
                                else Icon = MessageSquare;

                                if (link.platform === 'Email' || link.platform === 'WhatsApp') return null;

                                return (
                                    <a 
                                        key={index} 
                                        href={link.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="h-12 w-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                                        aria-label={link.platform}
                                    >
                                        <Icon className="h-6 w-6" />
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    <SlideUp delay={0.4} className="relative">
                        <div className="absolute -inset-6 rounded-[2.5rem] bg-linear-to-br from-primary/10 to-accent/10 blur-3xl opacity-60"></div>
                        <div className="glass p-10 rounded-[2.5rem] border-2 border-white/20 dark:border-white/10 shadow-2xl space-y-8">
                            <h3 className="text-xl font-bold tracking-tight text-foreground">Información Directa</h3>
                            
                            <div className="space-y-6">
                                <a href={`tel:${personalInfo.phone.replace(/\s/g, "")}`} className="flex items-center gap-5 group">
                                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div className="space-y-0.5">
                                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">Llámanos</span>
                                        <p className="text-lg font-black text-foreground group-hover:text-primary transition-colors">{personalInfo.phone}</p>
                                    </div>
                                </a>
                                <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group">
                                    <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div className="space-y-0.5">
                                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">Email</span>
                                        <p className="text-lg font-black text-foreground group-hover:text-primary transition-colors truncate">{personalInfo.email}</p>
                                    </div>
                                </a>
                                
                                <div className="flex items-center gap-5 group">
                                    <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div className="space-y-0.5">
                                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">Ubicación</span>
                                        <p className="text-lg font-black text-foreground">{personalInfo.location}</p>
                                    </div>
                                </div>


                            </div>

                            <div className="pt-6">
                                <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 text-xs font-bold leading-relaxed text-primary/70 text-center uppercase tracking-widest">
                                    Respuesta garantizada <br /> en menos de 24 horas
                                </div>
                            </div>
                        </div>
                    </SlideUp>
                </div>
            </div>
        </section>
    );
}
