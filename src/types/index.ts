export interface ProjectMetric {
    value: string;
    label: string;
}

export interface Project {
    title: string;
    description: string;
    tags: string[];
    mainIcon: string;
    logoSrc?: string;
    previewSrc?: string;
    metric: ProjectMetric;
    demoUrl?: string;
    repoUrl?: string;
}

export interface Experience {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
    technologies?: string[];
}

export interface Skill {
    name: string;
    level?: number; // 0-100
    icon?: string;
    category: "frontend" | "backend" | "tools" | "other";
    note?: string;
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
