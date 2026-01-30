"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { useInteractionSound } from "@/hooks/useInteractionSound";

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    glowColor?: string;
}

export function GlowButton({
    children,
    className,
    glowColor = "#3b82f6", // Default blue
    ...props
}: GlowButtonProps) {
    const { playHover, playClick } = useInteractionSound();

    return (
        <button
            onMouseEnter={() => playHover()}
            onClick={(e) => {
                playClick();
                props.onClick?.(e);
            }}
            className={cn(
                "relative py-3 px-6 rounded-xl font-bold text-white transition-all duration-300 group",
                "bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700/50",
                "hover:shadow-[0_0_40px_-10px_var(--glow-color)] hover:border-white/20 hover:-translate-y-1",
                className
            )}
            style={
                {
                    "--glow-color": glowColor,
                } as React.CSSProperties
            }
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">{children}</span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_100%] animate-shimmer" />
        </button>
    );
}
