"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export function InfiniteCanvas({ children }: { children: React.ReactNode }) {
    const constraintsRef = useRef(null);
    const [cursor, setCursor] = useState("grab");

    return (
        <div className="relative w-full h-screen overflow-hidden bg-slate-950 cursor-grab" ref={constraintsRef}>
            {/* Grid Background */}
            <div
                className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />

            <motion.div
                drag
                dragConstraints={{ left: -1000, right: 1000, top: -1000, bottom: 1000 }}
                dragElastic={0.1}
                dragMomentum={true}
                onDragStart={() => setCursor("grabbing")}
                onDragEnd={() => setCursor("grab")}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing"
                style={{ cursor }}
            >
                {children}
            </motion.div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none bg-slate-900/80 backdrop-blur px-4 py-2 rounded-full border border-slate-700 text-xs text-slate-400">
                Click and drag to explore the marketplace
            </div>
        </div>
    );
}
