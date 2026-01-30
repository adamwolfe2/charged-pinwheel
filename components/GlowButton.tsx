"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    className?: string;
}

export function GlowButton({ children, variant = "primary", className, ...props }: GlowButtonProps) {
    return (
        <motion.button
            className={cn(
                "relative group overflow-hidden rounded-xl font-bold transition-all duration-300",
                "px-8 py-4 text-base tracking-wide",
                variant === "primary"
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:bg-blue-500"
                    : "bg-slate-800 text-white hover:bg-slate-700",
                className
            )}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2 justify-center">
                {children}
            </span>

            {/* Glow Effect */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
        </motion.button>
    );
}
