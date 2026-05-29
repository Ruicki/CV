import React from 'react';

export const Icons = {
    Html5: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M1.5 0H22.5L20.5 21.5L12 24L3.5 21.5L1.5 0Z" fill="#E44D26" />
            <path d="M12 22.15L18.5 20L20.1 2H12V22.15Z" fill="#F16529" />
            <path d="M6.3 4.5H12V7H8.7L8.9 9.5H12V12H7.1L6.3 4.5ZM7.6 15L12 16.3L16.4 15L16.9 9.5H12V12H14.5L14.2 14.5L12 15.1L9.8 14.5L9.6 12H7.1L7.6 15Z" fill="white" />
        </svg>
    ),
    Css3: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M1.5 0H22.5L20.5 21.5L12 24L3.5 21.5L1.5 0Z" fill="#1572B6" />
            <path d="M12 22.15L18.5 20L20.1 2H12V22.15Z" fill="#33A9DC" />
            <path d="M6.3 4.5H12V7H8.2L8.4 9.5H12V12H7.1L6.3 4.5ZM7.6 15L12 16.3L16.4 15L17 8.5H12V11H14.5L14.2 13.5L12 14.1L9.8 13.5L9.6 11H7.1L7.6 15Z" fill="white" />
        </svg>
    ),
    JavaScript: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M0 0H24V24H0V0Z" fill="#F7DF1E" />
            <path d="M6.75 19.5C6.75 19.5 7.43003 20.323 9.4 20.323C11.168 20.323 11.458 19.112 11.458 18.005V13.003H13.628V17.961C13.628 20.732 12.193 22 9.444 22C7.03 22 5.922 20.5 5.922 20.5L6.75 19.5ZM19.387 14.868C19.387 13.568 18.529 13.003 16.92 12.383C15.652 11.895 15.111 11.602 15.111 10.871C15.111 10.158 15.772 9.68703 16.713 9.68703C17.732 9.68703 18.257 10.19 18.257 10.19L19.063 8.84703C19.063 8.84703 18.17 8 16.634 8C14.39 8 12.924 9.48903 12.924 11.082C12.924 12.91 14.28 13.437 16.326 14.152C17.9 14.708 18.006 15.341 18.006 15.931C18.006 16.784 17.159 17.145 16.335 17.145C15.035 17.145 14.372 16.29 14.372 16.29L13.479 17.587C13.479 17.587 14.508 18.825 16.486 18.825C18.995 18.825 20.245 17.29 20.245 15.702C20.245 15.353 20.199 15.023 20.106 14.721L19.387 14.868Z" fill="black" />
        </svg>
    ),
    TypeScript: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M0 0H24V24H0V0Z" fill="#3178C6" />
            <path d="M12.83 18.7998H14.73V10.2798H17.7V8.59985H9.87003V10.2798H12.83V18.7998ZM18.79 19C20.8 19 22 17.9 22 16.2C22 14.2 20.7 13.7 19.3 13.3C18.3 13 18 12.8 18 12.3C18 11.8 18.5 11.5 19.3 11.5C20.1 11.5 20.6 11.8 20.6 11.8L21.3 10.3C21.3 10.3 20.5 9.80005 19.2 9.80005C17.3 9.80005 16.1 10.9 16.1 12.5C16.1 14.5 17.5 15 18.7 15.3C19.7 15.6 20.1 15.9 20.1 16.4C20.1 17 19.6 17.3 18.8 17.3C17.9 17.3 17.2 16.9 17.2 16.9L16.4 18.5C16.4 18.5 17.3 19 18.79 19Z" fill="white" />
        </svg>
    ),
    React: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg" {...props}>
            <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
            <g stroke="#61DAFB" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
        </svg>
    ),
    Nextjs: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect width="24" height="24" rx="5" fill="currentColor" />
            <path d="M7.5 7v10H10V9.5L15.5 17H18V7h-2.5v7L10 7H7.5Z" fill="var(--color-background)" />
        </svg>
    ),
    Tailwind: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M12.001 4.5C8.667 4.5 6.5 6.167 5.5 9.5C7 7.5 8.75 6.75 10.75 7.25C11.882 7.548 12.708 8.381 13.62 9.3C15.097 10.79 16.801 12.5 20.5 12.5C23.833 12.5 26 10.833 27 7.5C25.5 9.5 23.75 10.25 21.75 9.75C20.618 9.452 19.792 8.619 18.88 7.7C17.403 6.21 15.699 4.5 12.001 4.5ZM5.5 12.5C2.167 12.5 0 14.167 -1 17.5C0.5 15.5 2.25 14.75 4.25 15.25C5.382 15.548 6.208 16.381 7.12 17.3C8.597 18.79 10.301 20.5 14 20.5C17.333 20.5 19.5 18.833 20.5 15.5C19 17.5 17.25 18.25 15.25 17.75C14.118 17.452 13.292 16.619 12.38 15.7C10.903 14.21 9.199 12.5 5.5 12.5Z" fill="#06B6D4" />
        </svg>
    ),
    Vite: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M12 2L21 21H3L12 2Z" fill="url(#vite_grad)" />
            <defs>
                <linearGradient id="vite_grad" x1="12" y1="2" x2="12" y2="21" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#41D1FF" />
                    <stop offset="1" stopColor="#BD34FE" />
                </linearGradient>
            </defs>
        </svg>
    ),
    Router: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#CA4245" />
            <path d="M12 6L19 12H14.5V18H9.5V12H5L12 6Z" fill="white" />
        </svg>
    ),
    Node: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M12 1L22.5 6.5V17.5L12 23L1.5 17.5V6.5L12 1Z" fill="#339933" />
            <path d="M6.5 8.5L4 10V15L6.5 16.5L9 15V10L6.5 8.5Z" fill="white" />
            <path d="M12 6L9.5 7.5L14 10.5V17.5H16.5V10L12 6Z" fill="white" />
        </svg>
    ),
    Express: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="white" />
            <path d="M17 16.5C17 16.5 15.5 18 13 18C9.5 18 8 15.5 8 13V8H10V13C10 15 11 16 13 16C14.5 16 15.5 15 16 14.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M2 8L5 14L8 8" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
    ),
    Postman: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.24 7.76C16.24 7.76 11.5 12.5 8.5 15.5C8.5 15.5 7.5 16.5 7.5 16.5L6 15C6 15 9.5 11 13 8.5C13 8.5 15.5 6.5 16.24 7.76ZM12 19.5C11.17 19.5 10.5 18.83 10.5 18C10.5 17.17 11.17 16.5 12 16.5C12.83 16.5 13.5 17.17 13.5 18C13.5 18.83 12.83 19.5 12 19.5Z" fill="#FF6C37" />
        </svg>
    ),
    Git: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#F05032" />
            <path d="M10.5 18C10.5 18.83 11.17 19.5 12 19.5C12.83 19.5 13.5 18.83 13.5 18C13.5 17.17 12.83 16.5 12 16.5C11.17 16.5 10.5 17.17 10.5 18Z" fill="white" />
            <path d="M10.5 6C10.5 6.83 11.17 7.5 12 7.5C12.83 7.5 13.5 6.83 13.5 6C13.5 5.17 12.83 4.5 12 4.5C11.17 4.5 10.5 5.17 10.5 6Z" fill="white" />
            <path d="M4.5 12C4.5 11.17 5.17 10.5 6 10.5C6.83 10.5 7.5 11.17 7.5 12C7.5 12.83 6.83 13.5 6 13.5C5.17 13.5 4.5 12.83 4.5 12Z" fill="white" />
            <path d="M10.5 12C10.5 11.17 11.17 10.5 12 10.5C12.83 10.5 13.5 11.17 13.5 12C13.5 12.83 12.83 13.5 12 13.5C11.17 13.5 10.5 12.83 10.5 12Z" fill="white" />
        </svg>
    ),
    Vercel: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M12 1L24 22H0L12 1Z" fill="currentColor" />
        </svg>
    ),
    Eslint: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="#4B32C3" />
            <path d="M12 5L5 9V15L12 19L19 15V9L12 5Z" fill="white" />
        </svg>
    ),
    Prettier: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <circle cx="12" cy="12" r="10" fill="#F7B93E" />
            <path d="M8 9.5H16" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M8 14.5H13" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    Notion: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
            <path d="M6 7h12v2H6V7zm0 4h9v2H6v-2zm0 4h11v2H6v-2z" fill="var(--color-background)" opacity="0.9" />
        </svg>
    ),
    WhatsApp: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M17.472 14.382C17.332 14.011 17.133 13.91 16.737 13.84C16.341 13.77 15.539 13.682 14.536 13.57C13.533 13.458 13.23 13.513 13.08 13.731C12.93 13.949 12.33 14.938 12.33 14.938C12.2709 15.0287 12.1852 15.1017 12.0838 15.148C11.9825 15.1942 11.8699 15.2118 11.76 15.198C11.234 15.111 8.948 14.288 7.378 12.757C6.182 11.59 5.86 11.082 5.679 10.702C5.6322 10.5977 5.61863 10.4827 5.63991 10.3705C5.66118 10.2584 5.71644 10.1537 5.799 10.069C6.012 9.879 6.273 9.605 6.476 9.324C6.679 9.043 6.786 8.79 6.637 8.513C6.488 8.236 5.61 6.136 5.253 5.297C4.945 4.549 4.646 4.654 4.417 4.654H3.665C3.398 4.654 2.872 4.773 2.508 5.176C2.144 5.579 1 6.645 1 8.818C1 10.991 2.612 13.09 2.839 13.394C3.066 13.698 5.962 18.064 10.36 19.923C13.284 21.16 13.967 20.985 14.61 20.913C15.253 20.841 16.653 20.082 16.946 19.245C17.239 18.408 17.239 17.695 17.151 17.545C17.063 17.395 16.843 17.311 16.55 17.166" fill="currentColor" />
        </svg>
    )
};
