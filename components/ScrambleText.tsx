"use client";

import { useScramble } from "@/hooks/useScramble";
import { cn } from "@/lib/utils";

interface ScrambleTextProps {
    text: string;
    className?: string;
    speed?: number;
}

export function ScrambleText({ text, className, speed = 30 }: ScrambleTextProps) {
    const { displayText } = useScramble(text, speed);

    return <span className={cn("font-mono", className)}>{displayText}</span>;
}
