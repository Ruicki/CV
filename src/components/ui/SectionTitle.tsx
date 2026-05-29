import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
    children: ReactNode;
    className?: string;
}

export function SectionTitle({ children, className }: SectionTitleProps) {
    return (
        <div className={cn("relative mb-12", className)}>
            <h2 className="text-2xl font-extrabold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                {children}
                <span className="text-primary">.</span>
            </h2>
            <div className="mt-2 h-1.5 w-20 rounded-full bg-linear-to-r from-primary to-accent" />
        </div>
    );
}
