import { Project, Experience, Skill, SocialLink, PersonalInfo, Education } from "@/types";

export const personalInfo: PersonalInfo = {
    name: "Ricardo Pinzón",
    title: "Desarrollador de Software",
    email: "rickipinzon@gmail.com",
    phone: "6875-0112",
    location: "Panamá, 24 de Diciembre",
    about: `Desarrollador de software con más de 3 años de experiencia en JavaScript, especializado en desarrollo frontend con React y backend con Node.js. 
  Actualmente explorando TypeScript para escribir código más robusto y escalable. Me gusta crear interfaces limpias y funcionales, y he trabajado en proyectos propios que van desde apps financieras hasta plataformas de ventas.
  Estoy buscando mi próxima oportunidad como desarrollador y con muchas ganas de aportar desde el primer día.`,
    avatar: "/foto-cv-1.jpg",
};

export const socialLinks: SocialLink[] = [
    {
        platform: "GitHub",
        url: "https://github.com/Ruicki",
        icon: "Github",
    },
    {
        platform: "LinkedIn",
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

export const experience: Experience[] = [
    {
        company: "Freelancer / Independiente",
        position: "Desarrollador de Software",
        startDate: "Dic 2025",
        endDate: "Presente",
        description: "Desarrollo de proyectos full-stack por cuenta propia. Creación de aplicaciones web con React, Next.js y Node.js. Explorando TypeScript para mejorar la calidad del código. Despliegue y mantenimiento en Vercel.",
        technologies: ["React", "Next.js", "Node.js", "TypeScript (aprendiendo)", "Vercel"],
    },
    {
        company: "Carbone S.A",
        position: "Desarrollador de Herramientas Internas",
        startDate: "Sep 2025",
        endDate: "Dic 2025",
        description: "Desarrollo y automatización de herramientas internas para la gestión y control de inventario mediante hojas de cálculo avanzadas con macros y fórmulas complejas. Diseño de dashboards de seguimiento en tiempo real para entradas y salidas de productos. Análisis de flujos operativos para detectar ineficiencias y proponer soluciones técnicas. Documentación de procesos y capacitación al equipo en el uso de las herramientas desarrolladas, logrando una reducción significativa de errores manuales en el registro de datos.",
        technologies: ["Excel Avanzado", "Macros", "Automatización", "Dashboards", "Documentación Técnica"],
    },
    {
        company: "Hong Kong Smart",
        position: "Desarrollador Junior y Soporte de Sistemas",
        startDate: "Nov 2023",
        endDate: "Sep 2025",
        description: "Desarrollo y mantenimiento de soluciones digitales para la gestión de productos, precios y clientes. Construcción de reportes automatizados de ventas e inventario con análisis de tendencias para la toma de decisiones gerenciales. Optimización del sistema de registro digital reduciendo tiempos de consulta y errores de captura de datos. Soporte técnico a usuarios internos, diagnóstico y resolución de incidencias en equipos y software. Coordinación entre áreas para garantizar la integridad, consistencia y disponibilidad de los datos del negocio.",
        technologies: ["Desarrollo de Herramientas", "Bases de Datos", "Automatización", "Soporte Técnico", "Análisis de Datos", "Sistemas de Gestión"],
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
