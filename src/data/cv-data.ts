import { Project, Experience, Skill, SocialLink, PersonalInfo, Education, Language, SkillCategory } from "@/types";

export const personalInfo: PersonalInfo = {
    name: "Ricardo Pinzón",
    title: "Desarrollador de Software Junior",
    email: "rickipinzon@gmail.com",
    phone: "6875-0112",
    location: "24 de Diciembre, Panamá",
    heroTagline: "Desarrollo frontend y backend con React, Node.js y Docker, y me enfoco en entregar soluciones funcionales de principio a fin.",
    about: "Soy desarrollador junior autodidacta y me he formado construyendo software real: aplicaciones de finanzas, comercio electrónico y automatización de procesos legales, que ya están en producción y que usan clientes reales. Me muevo con comodidad entre el frontend y el backend (React, Node.js, Docker) y me enfoco en entregar soluciones funcionales de principio a fin, no solo código de práctica.",
    availability: "Busco mi próxima oportunidad como desarrollador y tengo muchas ganas de aportar desde el primer día.",
    avatar: "/foto-cv-1.jpg",
    // TODO: copiar Ricardo_Pinzon_CV.pdf (oct. 2026) a public/ y descomentar para mostrar el botón.
    // cvUrl: "/Ricardo_Pinzon_CV.pdf",
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
        url: "https://www.linkedin.com/in/ricardo-pinzon-dev",
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

// Experiencia en desarrollo: tarjeta principal con detalle.
export const experience: Experience[] = [
    {
        company: "Independiente",
        position: "Desarrollador Freelance",
        location: "Panamá (Remoto)",
        startDate: "Dic 2025",
        endDate: "Ago 2026",
        description: "Desarrollo de SaaS para clientes (proyectos pagados) y de proyectos propios.",
        highlights: [
            {
                title: "Gestor de Informes Periciales",
                period: "Dic 2025 – Feb 2026",
                detail: "Reduce el tiempo de cada informe de 2 horas a 10 minutos (91 % menos), con generación automática de PDF y notificaciones por correo.",
            },
            {
                title: "Sistema de Control de Acceso (SCA)",
                period: "Mar – Jun 2026",
                detail: "Registro de visitantes sin conexión, con panel administrativo y despliegue con Docker y Docker Compose (multi-stage builds).",
            },
            {
                title: "Proyectos propios",
                detail: "Finanzas Maestras, Visualmind y Merkando.",
            },
        ],
        technologies: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL", "Prisma", "Docker", "Docker Compose", "PDFKit", "Nodemailer"],
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
        description: "Ventas, control de inventario, registro de productos en el sistema y cobros.",
    },
    {
        company: "Carbone S.A.",
        position: "Ayudante de Inventario",
        location: "Panamá",
        startDate: "Sep 2025",
        endDate: "Dic 2025",
        description: "Manejo y control de mercancía en bodega y registro con lector PDT.",
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
        degree: "Bachiller en Ciencias con énfasis en Informática",
        startDate: "2013",
        endDate: "2015",
    },
];

export const projects: Project[] = [
    {
        slug: "gestor-informes",
        title: "Gestor de Informes Periciales",
        description: "SaaS que automatiza la elaboración de informes periciales: reduce el tiempo de cada informe de 2 h a 10 min (91 % menos), genera el PDF y envía notificaciones automáticas.",
        tags: ["React", "Node.js", "Express", "MongoDB", "PDFKit", "Nodemailer", "Docker"],
        mainIcon: "Node",
        accent: "#14b8a6",
        metric: { value: "91 %", label: "Menos tiempo por informe" },
        // Capturas con datos ficticios (nombres, correos y números de caso inventados).
        screenshots: [
            { src: "/projects/gestor-informes/admin.webp", kind: "desktop", label: "Administración" },
            { src: "/projects/gestor-informes/informes.webp", kind: "desktop", label: "Informes" },
            { src: "/projects/gestor-informes/clientes.webp", kind: "desktop", label: "Clientes" },
        ],
        privateNote: "Código privado",
    },
    {
        slug: "sca",
        title: "Sistema de Control de Acceso (SCA)",
        description: "Sistema de control de acceso y registro de visitantes que funciona 100 % sin conexión en una mini PC. Incluye acceso remoto seguro mediante Tailscale, un módulo de auditoría y un panel administrativo protegido con PIN cifrado.",
        tags: ["React", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL", "Docker", "Docker Compose"],
        mainIcon: "React",
        accent: "#6366f1",
        screenshots: [
            { src: "/projects/sca/desktop.webp", kind: "desktop", label: "Escritorio" },
            { src: "/projects/sca/mobile.webp", kind: "mobile", label: "Móvil" },
        ],
        privateNote: "Código privado",
    },
    {
        slug: "finanzas-maestras",
        title: "Finanzas Maestras",
        description: "Gestor de finanzas personales: cuentas, ingresos, gastos, deudas y metas de ahorro en un solo lugar.",
        tags: ["Next.js", "React", "TypeScript", "Node.js"],
        mainIcon: "Nextjs",
        accent: "#22c55e",
        screenshots: [
            { src: "/projects/finanzas-maestras/desktop.webp", kind: "desktop", label: "Escritorio" },
            { src: "/projects/finanzas-maestras/mobile.webp", kind: "mobile", label: "Móvil" },
        ],
        demoUrl: "https://finanzas-maestras.vercel.app/",
    },
    {
        slug: "visualmind",
        title: "Visualmind",
        description: "Plataforma de ventas (e-commerce) full-stack con panel administrativo.",
        tags: ["React", "Node.js"],
        mainIcon: "React",
        accent: "#f59e0b",
        logoSrc: "/visualmind-logo.png",
        screenshots: [
            { src: "/projects/visualmind/desktop.webp", kind: "desktop", label: "Escritorio" },
            { src: "/projects/visualmind/mobile.webp", kind: "mobile", label: "Móvil" },
        ],
        demoUrl: "https://visualmind-one.vercel.app/",
    },
    {
        slug: "merkando",
        title: "Merkando",
        description: "App móvil para compras de supermercado: comparación de precios, despensa, listas compartidas y estimados de gasto.",
        tags: ["React Native", "Expo", "TypeScript", "SQLite", "Firebase", "Zustand"],
        mainIcon: "React",
        accent: "#3b82f6",
        screenshots: [
            { src: "/projects/merkando/vista-general.webp", kind: "desktop", label: "Vista general" },
            { src: "/projects/merkando/funciones.webp", kind: "desktop", label: "Funciones" },
            { src: "/projects/merkando/mobile.webp", kind: "mobile", label: "Inicio" },
        ],
        // TODO: agregar repoUrl cuando el repositorio de Merkando sea público.
        privateNote: "Repositorio privado",
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
