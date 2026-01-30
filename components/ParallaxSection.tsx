"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * A wrapper that creates a parallax effect for its children.
 * As the user scrolls past this section, the content moves slower/faster than the scroll.
 */
export function ParallaxSection({ children, className, offset = 50 }: { children: React.ReactNode; className?: string; offset?: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

    return (
        <div ref={ref} className={className}>
            <motion.div style={{ y }}>{children}</motion.div>
        </div>
    );
}
