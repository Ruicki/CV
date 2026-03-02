import { Project, Experience, Skill, SocialLink } from "@/types";
import { Github, Linkedin, Mail, Twitter, MapPin, Phone } from "lucide-react";

export const personalInfo = {
    name: "Ricardo Pinzón",
    title: "Desarrollador de Software",
    email: "rickipinzon@gmail.com",
    phone: "6875-0112",
    location: "Panamá, 24 de Diciembre",
    about: `Desarrollador de software con experiencia en JavaScript y TypeScript, especializado en desarrollo frontend con React y backend con Node.js. 
  Poseo una mentalidad analítica y habilidades autodidactas, complementadas con experiencia en optimización de procesos y resolución de problemas en entornos logísticos. 
  Busco aplicar mis conocimientos técnicos y capacidad de adaptación para contribuir eficazmente en proyectos de desarrollo de software.`,
    avatar: "/Foto-cv_2026-2.jpg",
};

export const socialLinks: SocialLink[] = [
    {
        platform: "GitHub",
        url: "https://github.com/Ruicki",
        icon: "Github",
    },
    {
        platform: "Email",
        url: "mailto:rickipinzon@gmail.com",
        icon: "Mail",
    },
    {
        platform: "WhatsApp",
        url: "https://wa.me/50768750112",
        icon: "WhatsApp", // New key for custom icon handling
    },
];

export const experience: Experience[] = [
    {
        company: "Carbone S.A",
        position: "Ayudante de Inventario",
        startDate: "Sep 2025",
        endDate: "Dic 2025",
        description: "Apoyo en la gestión de inventario y optimización de procesos logísticos.",
        technologies: ["Logística", "Inventario"],
    },
    {
        company: "Hong Kong Smart",
        position: "Asistente de Inventario y Ventas",
        startDate: "Ene 2023",
        endDate: "Dic 2025",
        description: "Gestión de inventario y atención al cliente. Resolución de problemas en entornos de ventas y bodega.",
        technologies: ["Ventas", "Atención al Cliente", "Inventario"],
    },
];

export const education = [
    {
        institution: "Universidad Tecnológica de Panamá",
        degree: "Licenciatura en Desarrollo de Software",
        startDate: "2016",
        endDate: "Pausado",
    },
    {
        institution: "Colegio José Antonio Remón Cantera",
        degree: "Bachiller en Ciencias con Énfasis en Informática",
        startDate: "2013",
        endDate: "2015",
    },
];

export const projects: Project[] = [
    {
        title: "Gestor de Salarios",
        description: "Aplicación para la gestión y cálculo de salarios. (Descripción pendiente de ampliar detalles técnicos).",
        tags: ["JavaScript", "Full Stack"],
        imageUrl: "/project-placeholder.jpg",
        demoUrl: "", // Si existe un deploy, agregarlo aquí
        repoUrl: "https://github.com/Ruicki/gestor-salarios",
    },
    // Placeholder para futuros proyectos
    {
        title: "Más Proyectos",
        description: "Explora más de mis proyectos y código fuente en mi perfil de GitHub.",
        tags: ["Open Source", "Code"],
        // imageUrl: "/github-banner.jpg",
        demoUrl: "https://github.com/Ruicki?tab=repositories",
        repoUrl: "https://github.com/Ruicki",
    }
];

export const skills: Skill[] = [
    { name: "JavaScript", category: "frontend", icon: "JavaScript" },
    { name: "TypeScript", category: "frontend", icon: "TypeScript" },
    { name: "React", category: "frontend", icon: "React" },
    { name: "Node.js", category: "backend", icon: "Node" },
    { name: "Análisis de Datos", category: "other", icon: "Data" },
    { name: "Resolución de Problemas", category: "other", icon: "Problem" },
    { name: "Español (Nativo)", category: "other", icon: "Spanish" },
    { name: "Inglés (Intermedio)", category: "other", icon: "English" },
];
