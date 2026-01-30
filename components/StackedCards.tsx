"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { SpotlightCard } from "./SpotlightCard";

interface Card {
    title: string;
    description: string;
    color: string;
    icon: React.ReactNode;
}

function CardItem({ card, index, progress, range, targetScale }: { card: Card, index: number, progress: MotionValue<number>, range: number[], targetScale: number }) {
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, top: `calc(-5vh + ${index * 25}px)` }}
                className="relative w-full max-w-4xl h-[500px] origin-top"
            >
                <SpotlightCard className="h-full w-full bg-slate-900 border border-slate-800">
                    <div className="flex h-full flex-col md:flex-row p-8 md:p-12 gap-8">
                        <div className="flex-1 flex flex-col justify-center">
                            <div className={`w-12 h-12 rounded-xl bg-${card.color}-500/10 flex items-center justify-center mb-6 text-${card.color}-400`}>
                                {card.icon}
                            </div>
                            <h3 className="text-4xl font-heading font-bold text-white mb-4">{card.title}</h3>
                            <p className="text-slate-400 text-lg leading-relaxed">{card.description}</p>
                        </div>
                        <div className="flex-1 bg-slate-800/50 rounded-2xl border border-slate-700/50 relative overflow-hidden group">
                            <div className={`absolute inset-0 bg-gradient-to-br from-${card.color}-500/10 to-transparent opacity-50`} />
                            {/* Abstract Visuals */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
                        </div>
                    </div>
                </SpotlightCard>
            </motion.div>
        </div>
    )
}

export function StackedCards({ items }: { items: Card[] }) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    return (
        <div ref={container} className="relative mt-[20vh] mb-[20vh]">
            {items.map((card, i) => {
                const targetScale = 1 - ((items.length - i) * 0.05);
                return <CardItem key={i} card={card} index={i} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
            })}
        </div>
    )
}
