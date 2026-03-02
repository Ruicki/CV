export interface Project {
    title: string;
    description: string;
    tags: string[];
    imageUrl?: string;
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
    about: string;
    avatar: string;
}

export interface Education {
    institution: string;
    degree: string;
    startDate: string;
    endDate: string;
}
