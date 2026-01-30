"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { clsx } from "clsx";
import styles from "./GlowButton.module.css";

interface GlowButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    className?: string;
}

export function GlowButton({ children, variant = "primary", className, ...props }: GlowButtonProps) {
    return (
        <motion.button
            className={clsx(styles.button, styles[variant], className)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            {...props}
        >
            <span className={styles.content}>{children}</span>
            <div className={styles.glow} />
        </motion.button>
    );
}
