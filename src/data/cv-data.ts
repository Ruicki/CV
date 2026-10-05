import { Project, Experience, Skill, SocialLink, PersonalInfo, Education, Language, SkillCategory } from "@/types";

export const personalInfo: PersonalInfo = {
    name: "Ricardo Pinzón",
    title: "Desarrollador de Software Junior",
    email: "rickipinzon@gmail.com",
    phone: "6875-0112",
    location: "Panamá, 24 de Diciembre",
    heroTagline: "Desarrollo frontend y backend con React, Node.js y Docker, con foco en entregar soluciones funcionales de principio a fin.",
    about: "Desarrollador junior autodidacta, formado construyendo software real: aplicaciones de finanzas, e-commerce y automatización de procesos legales, ya en producción y usadas por clientes. Cómodo moviéndome entre frontend y backend (React, Node.js, Docker), con foco en entregar soluciones funcionales de principio a fin, no solo código de práctica.",
    availability: "Estoy buscando mi próxima oportunidad como desarrollador y con muchas ganas de aportar desde el primer día.",
    avatar: "/foto-cv-1.jpg",
};

export const languages: Language[] = [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Intermedio (lectura técnica y comunicación para desarrolladores)" },
];

export const socialLinks: SocialLink[] = [
    {
        platform: "GitHub",
        url: "https://github.com/Ruicki",
        icon: "Github",
    },
    {
        platform: "LinkedIn",
        // TODO: confirmar la URL correcta. El CV dice "ricardopinzon-dev" y la web usaba "Ricardo-Pinzon-dev".
        url: "https://linkedin.com/in/Ricardo-Pinzon-dev",
        icon: "Linkedin",
    },
    {
        platform: "Email",
        url: "mailto:rickipinzon@gmail.com",
        icon: "Mail",
    },
    {
        platform: "WhatsApp",
        url: "https://wa.me/50768750112",
        icon: "WhatsApp",
    },
];

// Experiencia en desarrollo: timeline principal con detalle.
export const experience: Experience[] = [
    {
        company: "Freelancer / Independiente",
        position: "Desarrollador Freelance",
        location: "Panamá (Remoto)",
        startDate: "Dic 2025",
        endDate: "Ago 2026",
        description: "Desarrollo de SaaS para clientes (proyectos pagados) y proyectos propios.",
        highlights: [
            "Sistema de Control de Acceso (SCA): freelance pagado (mar.–jun. 2026). React, Node.js, Express, Prisma y PostgreSQL; despliegue con Docker y Docker Compose (multi-stage builds).",
            "Gestor de Informes Periciales: SaaS MERN, freelance pagado (dic. 2025 – feb. 2026). Redujo la generación de informes de 2 horas a 10 minutos (91 % de mejora). PDF con PDFKit y notificaciones automáticas por SMTP (Nodemailer).",
            "Proyectos propios: Finanzas Maestras, Visualmind y Merkando.",
        ],
        technologies: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL", "Docker", "Docker Compose", "PDFKit", "Nodemailer"],
    },
];

// Otra experiencia laboral: bloque compacto, una línea por puesto.
export const otherExperience: Experience[] = [
    {
        company: "Yooni",
        position: "Ayudante General",
        location: "Panamá",
        startDate: "Ago 2026",
        endDate: "Actualidad",
        description: "Ventas, control de inventario, registro de productos en sistema y cobros.",
    },
    {
        company: "Carbone S.A.",
        position: "Ayudante de Inventario",
        location: "Panamá",
        startDate: "Sep 2025",
        endDate: "Dic 2025",
        description: "Manejo y control de mercancía en bodega, registro con lector PDT.",
    },
    {
        company: "Hong Kong Smart",
        position: "Ventas, Logística e Inventario",
        location: "Panamá",
        startDate: "Nov 2023",
        endDate: "Sep 2025",
        description: "",
    },
];

export const education: Education[] = [
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
        slug: "gestor-informes",
        title: "Gestor de Informes Periciales",
        status: "cliente",
        description: "SaaS que automatiza informes periciales: de 2 h a 10 min (91 % de mejora). Genera PDF y envía notificaciones automáticas.",
        tags: ["React", "Node.js", "Express", "MongoDB", "PDFKit", "Nodemailer", "Docker"],
        mainIcon: "Node",
        metric: { value: "91 %", label: "Menos tiempo por informe" },
        privateNote: "Proyecto de cliente · código privado",
    },
    {
        slug: "sca",
        title: "Sistema de Control de Acceso (SCA)",
        status: "cliente",
        description: "Sistema de control de acceso y registro de visitantes que funciona 100 % offline en una Mini PC, con acceso remoto seguro vía Tailscale, módulo de auditoría y acceso administrativo protegido por PIN cifrado.",
        tags: ["React", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL", "Docker", "Docker Compose"],
        mainIcon: "React",
        privateNote: "Proyecto de cliente · código privado",
    },
    {
        slug: "finanzas-maestras",
        title: "Finanzas Maestras",
        status: "propio",
        description: "Gestor de finanzas personales: cuentas, ingresos, gastos, deudas y metas de ahorro en un solo lugar.",
        tags: ["Next.js", "React", "TypeScript", "Node.js"],
        mainIcon: "Nextjs",
        images: { desktop: "/finanzas-m.png" },
        demoUrl: "https://finanzas-maestras.vercel.app/",
    },
    {
        slug: "visualmind",
        title: "Visualmind",
        status: "propio",
        description: "Plataforma de ventas (e-commerce) full-stack con panel administrativo.",
        tags: ["React", "Node.js"],
        mainIcon: "React",
        logoSrc: "/visualmind-logo.png",
        images: { desktop: "/visualmind.png" },
        demoUrl: "https://visualmind-one.vercel.app/",
    },
    {
        slug: "merkando",
        title: "Merkando",
        status: "propio",
        description: "App móvil para compras de supermercado: comparación de precios, despensa, listas compartidas y estimados de gasto.",
        tags: ["React Native", "Expo", "TypeScript", "SQLite", "Firebase", "Zustand"],
        mainIcon: "React",
        privateNote: "Repositorio privado",
    },
    {
        slug: "job-tracker",
        title: "Job Tracker",
        status: "en-desarrollo",
        description: "Dashboard para gestionar postulaciones: puntúa cada vacante de 0 a 100 según encaje de stack y seniority.",
        tags: ["React", "Vite", "Node.js", "Express", "MongoDB"],
        mainIcon: "React",
        // TODO: agregar repoUrl cuando el repositorio del Job Tracker esté en GitHub.
    },
];

export const skillCategories: { id: SkillCategory; label: string }[] = [
    { id: "frontend-backend", label: "Frontend & Backend" },
    { id: "devops", label: "DevOps & Infraestructura" },
    { id: "metodologias", label: "Metodologías" },
    { id: "ia", label: "IA & Productividad" },
    { id: "herramientas", label: "Herramientas" },
];

export const skills: Skill[] = [
    { name: "JavaScript (ES6+)", category: "frontend-backend", icon: "JavaScript" },
    { name: "TypeScript", category: "frontend-backend", icon: "TypeScript" },
    { name: "React", category: "frontend-backend", icon: "React" },
    { name: "Next.js", category: "frontend-backend", icon: "Nextjs" },
    { name: "Node.js", category: "frontend-backend", icon: "Node" },
    { name: "Express", category: "frontend-backend", icon: "Express" },
    { name: "MongoDB", category: "frontend-backend", icon: "Database" },
    { name: "SQL", category: "frontend-backend", icon: "Database" },
    { name: "PostgreSQL", category: "frontend-backend", icon: "Database" },
    { name: "HTML/CSS", category: "frontend-backend", icon: "Html5" },
    { name: "Tailwind CSS", category: "frontend-backend", icon: "Tailwind" },
    { name: "Docker", category: "devops", icon: "Container" },
    { name: "Docker Compose", category: "devops", icon: "Container" },
    { name: "Git", category: "devops", icon: "Git" },
    { name: "GitHub", category: "devops", icon: "Github" },
    { name: "REST APIs", category: "devops", icon: "Api" },
    { name: "Vercel", category: "devops", icon: "Vercel" },
    { name: "MVC", category: "metodologias", icon: "Layers" },
    { name: "Automatización de procesos", category: "metodologias", icon: "Workflow" },
    { name: "Clean Code", category: "metodologias", icon: "Sparkles" },
    { name: "Gemini", category: "ia", icon: "Bot" },
    { name: "Opencode", category: "ia", icon: "Bot" },
    { name: "Ollama", category: "ia", icon: "Bot" },
    { name: "Prompt Engineering", category: "ia", icon: "Bot" },
    { name: "Claude Code", category: "ia", icon: "Bot" },
    { name: "Vite", category: "herramientas", icon: "Vite" },
    { name: "Postman", category: "herramientas", icon: "Postman" },
    { name: "ESLint", category: "herramientas", icon: "Eslint" },
    { name: "Prettier", category: "herramientas", icon: "Prettier" },
];
