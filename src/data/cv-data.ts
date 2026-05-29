import { Project, Experience, Skill, SocialLink, PersonalInfo, Education } from "@/types";

export const personalInfo: PersonalInfo = {
    name: "Ricardo Pinzón",
    title: "Desarrollador de Software",
    email: "rickipinzon@gmail.com",
    phone: "6875-0112",
    location: "Panamá, 24 de Diciembre",
    about: `Desarrollador de software con más de 3 años de experiencia en JavaScript y TypeScript, especializado en desarrollo frontend con React y backend con Node.js. 
  Apasionado por crear interfaces de usuario dinámicas, limpias y escalables. He desarrollado proyectos funcionales incluyendo aplicaciones financieras, plataformas de ventas y más.
  Actualmente en búsqueda activa de mi próxima oportunidad laboral como desarrollador, con muchas ganas de aportar valor desde el primer día.`,
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
        description: "Desarrollo de proyectos full-stack por cuenta propia. Creación de aplicaciones web modernas con React, Next.js, Node.js y TypeScript. Despliegue y mantenimiento en Vercel.",
        technologies: ["React", "Next.js", "TypeScript", "Node.js", "Vercel"],
    },
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
        startDate: "Nov 2023",
        endDate: "Sep 2025",
        description: "Gestión de inventario y atención al cliente. Resolución de problemas en entornos de ventas y bodega.",
        technologies: ["Ventas", "Atención al Cliente", "Inventario"],
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
        description: "Plataforma integral para la gestión de finanzas personales. Controla ingresos, gastos, deudas y metas con una interfaz moderna y reportes dinámicos.",
        tags: ["TypeScript", "Next.js", "React", "Full Stack"],
        mainIcon: "Nextjs",
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
        metric: { value: "10+", label: "Páginas y Secciones" },
        demoUrl: "https://visualmind-one.vercel.app/",
        repoUrl: "",
    },
];

export const skills: Skill[] = [
    { name: "HTML5", category: "frontend", icon: "Html5" },
    { name: "CSS3", category: "frontend", icon: "Css3" },
    { name: "JavaScript", category: "frontend", icon: "JavaScript" },
    { name: "TypeScript", category: "frontend", icon: "TypeScript" },
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
