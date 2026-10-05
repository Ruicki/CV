export interface ProjectMetric {
    value: string;
    label: string;
}

export type ProjectStatus = "cliente" | "propio" | "en-desarrollo";

export interface ProjectImages {
    desktop?: string;
    mobile?: string;
}

export interface Project {
    slug: string;
    title: string;
    status: ProjectStatus;
    description: string;
    tags: string[];
    mainIcon: string;
    logoSrc?: string;
    images?: ProjectImages;
    metric?: ProjectMetric;
    demoUrl?: string;
    repoUrl?: string;
    /** Código no público (proyecto de cliente o repo privado). */
    privateNote?: string;
}

export interface Experience {
    company: string;
    position: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    highlights?: string[];
    technologies?: string[];
}

export type SkillCategory = "frontend-backend" | "devops" | "metodologias" | "ia" | "herramientas";

export interface Skill {
    name: string;
    level?: number; // 0-100
    icon?: string;
    category: SkillCategory;
}

export interface SocialLink {
    platform: string;
    url: string;
    icon: string; // Lucide icon name or component
}

export interface PersonalInfo {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    heroTagline: string;
    about: string;
    availability: string;
    avatar: string;
    /** Ruta pública del CV en PDF. El botón de descarga solo aparece si existe. */
    cvUrl?: string;
}

export interface Language {
    name: string;
    level: string;
}

export interface Education {
    institution: string;
    degree: string;
    startDate: string;
    endDate: string;
}
