import { Project, Experience, Skill, SocialLink, PersonalInfo, Education, Language } from "@/types";

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
        title: "Finanzas Maestras",
        description: "App para llevar el control de tus finanzas personales. Puedes registrar ingresos, gastos, deudas y metas desde un solo lugar.",
        tags: ["Next.js", "React", "TypeScript (aprendiendo)", "Full Stack"],
        mainIcon: "Nextjs",
        previewSrc: "/finanzas-m.png",
        metric: { value: "3", label: "Módulos Financieros" },
        demoUrl: "https://finanzas-maestras.vercel.app/",
        repoUrl: "",
    },
    {
        title: "Visualmind",
        description: "Plataforma de ventas con panel administrativo. Proyecto full-stack con frontend en React y backend en Node.js.",
        tags: ["JavaScript", "React", "Node.js", "Full Stack"],
        mainIcon: "React",
        logoSrc: "/visualmind-logo.png",
        previewSrc: "/visualmind.png",
        metric: { value: "10+", label: "Páginas y Secciones" },
        demoUrl: "https://visualmind-one.vercel.app/",
        repoUrl: "",
    },
];

export const skills: Skill[] = [
    { name: "HTML5", category: "frontend", icon: "Html5" },
    { name: "CSS3", category: "frontend", icon: "Css3" },
    { name: "JavaScript", category: "frontend", icon: "JavaScript" },
    { name: "TypeScript", category: "frontend", icon: "TypeScript", note: "Explorando" },
    { name: "React", category: "frontend", icon: "React" },
    { name: "Next.js", category: "frontend", icon: "Nextjs" },
    { name: "TailwindCSS", category: "frontend", icon: "Tailwind" },
    { name: "Vite", category: "frontend", icon: "Vite" },
    { name: "React Router", category: "frontend", icon: "Router" },
    { name: "Node.js", category: "backend", icon: "Node" },
    { name: "Express.js", category: "backend", icon: "Express" },
    { name: "Postman", category: "backend", icon: "Postman" },
    { name: "Git", category: "tools", icon: "Git" },
    { name: "Vercel", category: "tools", icon: "Vercel" },
    { name: "ESLint", category: "tools", icon: "Eslint" },
    { name: "Prettier", category: "tools", icon: "Prettier" },
    { name: "Notion", category: "tools", icon: "Notion" },
];
