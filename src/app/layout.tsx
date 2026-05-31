import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "RicardoPinzonDev",
  description: "Desarrollador de software especializado en JavaScript, React y Node.js. Portafolio con proyectos reales y experiencia en desarrollo web full stack.",
  metadataBase: new URL("https://cv-main-rho.vercel.app"),
  openGraph: {
    title: "Ricardo Pinzón - Desarrollador de Software",
    description: "Desarrollador de software especializado en JavaScript, React y Node.js. Portafolio con proyectos reales y experiencia en desarrollo web full stack.",
    url: "https://cv-main-rho.vercel.app",
    siteName: "RicardoPinzonDev",
    locale: "es_PA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ricardo Pinzón - Desarrollador de Software",
    description: "Desarrollador de software especializado en JavaScript, React y Node.js.",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
    shortcut: "/favicon.svg",
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
