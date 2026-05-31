"use client";

import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Mail, Github, Linkedin, MessageSquare, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { FadeIn, SlideUp } from "@/components/ui/motion";
import { personalInfo, socialLinks } from "@/data/cv-data";
import { Icons } from "@/components/ui/icons";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [formState, setFormState] = useState<FormState>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("loading");
        setErrorMsg("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });

            const data = await res.json();

            if (!res.ok) {
                setErrorMsg(data.error || "Error al enviar el mensaje.");
                setFormState("error");
                return;
            }

            setFormState("success");
            setName("");
            setEmail("");
            setMessage("");
        } catch {
            setErrorMsg("Error de conexión. Intenta de nuevo.");
            setFormState("error");
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden flex flex-col items-center justify-center bg-muted/30 scroll-mt-24">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-border to-transparent opacity-50"></div>

            <div className="container px-4 md:px-8">
                <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-start">
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

                        {/* Contact Form */}
                        <SlideUp delay={0.3}>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-semibold text-foreground/80">
                                            Nombre
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Tu nombre"
                                            required
                                            disabled={formState === "loading"}
                                            className="w-full px-4 py-3 rounded-xl border border-border bg-background/60 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all disabled:opacity-50"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-semibold text-foreground/80">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="tu@email.com"
                                            required
                                            disabled={formState === "loading"}
                                            className="w-full px-4 py-3 rounded-xl border border-border bg-background/60 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all disabled:opacity-50"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-foreground/80">
                                        Mensaje
                                    </label>
                                    <textarea
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Cuéntame sobre tu proyecto o propuesta..."
                                        required
                                        rows={5}
                                        disabled={formState === "loading"}
                                        className="w-full px-4 py-3 rounded-xl border border-border bg-background/60 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all resize-none disabled:opacity-50"
                                    />
                                </div>

                                {/* Feedback messages */}
                                {formState === "success" && (
                                    <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400">
                                        <CheckCircle className="h-5 w-5 shrink-0" />
                                        <p className="text-sm font-medium">¡Mensaje enviado! Te responderé pronto.</p>
                                    </div>
                                )}
                                {formState === "error" && (
                                    <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400">
                                        <AlertCircle className="h-5 w-5 shrink-0" />
                                        <p className="text-sm font-medium">{errorMsg}</p>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={formState === "loading"}
                                    className={cn(
                                        buttonVariants({ size: "lg", className: "w-full h-14 rounded-2xl gap-3 text-lg font-bold shadow-xl hover:shadow-primary/20 transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100" })
                                    )}
                                >
                                    {formState === "loading" ? (
                                        <>
                                            <Loader2 className="h-5 w-5 animate-spin" /> Enviando...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="h-5 w-5" /> Enviar Mensaje
                                        </>
                                    )}
                                </button>
                            </form>
                        </SlideUp>

                        <div className="flex gap-8 items-center pt-8 border-t border-border/50">
                            {socialLinks.map((link, index) => {
                                let Icon;
                                if (link.platform === "GitHub") Icon = Github;
                                else if (link.platform === "LinkedIn") Icon = Linkedin;
                                else if (link.platform === "Email") Icon = Mail;
                                else if (link.platform === "WhatsApp") Icon = Icons.WhatsApp;
                                else Icon = MessageSquare;

                                if (link.platform === "Email" || link.platform === "WhatsApp") return null;

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
                                );
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
                                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-5 group">
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

                                {socialLinks.find((l) => l.platform === "WhatsApp") && (
                                    <a
                                        href="https://wa.me/50768750112?text=Hola%20Ricardo%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-5 group"
                                    >
                                        <div className="h-14 w-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform duration-300">
                                            <Icons.WhatsApp className="h-6 w-6" />
                                        </div>
                                        <div className="space-y-0.5">
                                            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">WhatsApp</span>
                                            <p className="text-lg font-black text-foreground group-hover:text-green-500 transition-colors">Escríbeme</p>
                                        </div>
                                    </a>
                                )}
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
