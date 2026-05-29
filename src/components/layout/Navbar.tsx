"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Sobre mí", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experiencia", href: "#experience" },
    { name: "Educación", href: "#education" },
    { name: "Contacto", href: "#contact" },
];

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle mounting
    useEffect(() => {
        const frame = requestAnimationFrame(() => setMounted(true));
        return () => cancelAnimationFrame(frame);
    }, []);

    // Handle scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav 
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform-gpu",
                scrolled ? "h-16 py-0 glass border-b" : "h-24 py-2 bg-transparent border-transparent"
            )}
        >
            <div className="container mx-auto flex h-full items-center justify-between px-4 md:px-8">
                {/* Logo */}
                <Link href="/" className="text-2xl font-black tracking-tight group">
                    RP<span className="text-primary group-hover:text-accent transition-colors duration-300">.</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-semibold text-muted-foreground transition-all hover:text-primary relative group overflow-hidden"
                        >
                            {link.name}
                            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-300" />
                        </a>
                    ))}

                    <div className="flex items-center gap-3">
                        {mounted && (
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                aria-label="Toggle Theme"
                                className="rounded-full h-10 w-10 hover:bg-secondary/80"
                            >
                                {theme === "dark" ? (
                                    <Sun className="h-5 w-5" />
                                ) : (
                                    <Moon className="h-5 w-5" />
                                )}
                            </Button>
                        )}
                        <a 
                            href="#contact"
                            className="hidden lg:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-primary/20 transition-all hover:scale-105"
                        >
                            Contrátame <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden">
                    {mounted && (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="rounded-full"
                        >
                            {theme === "dark" ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )}
                        </Button>
                    )}
                    <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={toggleMenu}
                        className="rounded-full h-10 w-10"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation Content */}
            {isOpen && (
                <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl px-4 py-8 shadow-2xl animate-in slide-in-from-top-4 duration-300">
                    <div className="flex flex-col space-y-6 text-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-xl font-bold text-muted-foreground transition-colors hover:text-primary active:scale-95"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
