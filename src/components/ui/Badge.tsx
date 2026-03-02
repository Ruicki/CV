import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
    children: ReactNode;
    className?: string;
}

export function Badge({ children, className }: BadgeProps) {
    return (
        <span className={cn("px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground font-medium", className)}>
            {children}
        </span>
    );
}
