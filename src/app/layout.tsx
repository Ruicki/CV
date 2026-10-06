import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { personalInfo } from "@/data/cv-data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

// Dominio público del sitio. En Vercel se toma del dominio de producción del proyecto
// (variable de sistema VERCEL_PROJECT_PRODUCTION_URL); NEXT_PUBLIC_SITE_URL permite fijarlo a mano.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

// Textos cortos para la tarjeta al compartir: WhatsApp corta el título en ~40 caracteres.
const shareTitle = `${personalInfo.name} | Desarrollador Junior`;
const shareDescription = "Portafolio con proyectos reales en React, Node.js y Docker.";

export const metadata: Metadata = {
  title: `${personalInfo.name} | ${personalInfo.title}`,
  description: personalInfo.heroTagline,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: shareTitle,
    description: shareDescription,
    url: siteUrl,
    siteName: "RicardoPinzonDev",
    locale: "es_PA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: shareTitle,
    description: shareDescription,
  },
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans text-foreground antialiased",
        inter.variable,
        outfit.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
