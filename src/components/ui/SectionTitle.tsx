import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
    children: ReactNode;
    className?: string;
}

export function SectionTitle({ children, className }: SectionTitleProps) {
    return (
        <h2 className={cn("text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl", className)}>
            {children}
        </h2>
    );
}
