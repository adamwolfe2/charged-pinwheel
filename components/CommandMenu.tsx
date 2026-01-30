"use client";

import * as React from "react";
import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { Search, Globe, Moon, Sun, ArrowRight, Calculator } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function CommandMenu() {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const runCommand = (command: () => void) => {
        setOpen(false);
        command();
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[99999] bg-slate-950/50 backdrop-blur-sm flex items-start justify-center pt-[20vh] px-4">
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full max-w-lg bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden"
                >
                    <Command className="w-full">
                        <div className="flex items-center border-b border-slate-800 px-4">
                            <Search className="w-5 h-5 text-slate-500 mr-3" />
                            <Command.Input
                                placeholder="Type a command or search..."
                                className="w-full bg-transparent py-4 text-white placeholder-slate-500 focus:outline-none"
                            />
                        </div>

                        <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-hide">
                            <Command.Empty className="py-6 text-center text-slate-500 text-sm">
                                No results found.
                            </Command.Empty>

                            <Command.Group heading="Navigation" className="text-xs font-medium text-slate-500 mb-2 px-2">
                                <Command.Item
                                    onSelect={() => runCommand(() => router.push("/marketplace-preview"))}
                                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-200 text-sm hover:bg-white/10 cursor-pointer aria-selected:bg-blue-600 aria-selected:text-white transition-colors"
                                >
                                    <Globe className="w-4 h-4" />
                                    <span>Marketplace</span>
                                </Command.Item>
                                <Command.Item
                                    onSelect={() => runCommand(() => router.push("/#calculator"))}
                                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-200 text-sm hover:bg-white/10 cursor-pointer aria-selected:bg-blue-600 aria-selected:text-white transition-colors"
                                >
                                    <Calculator className="w-4 h-4" />
                                    <span>ROI Calculator</span>
                                </Command.Item>
                                <Command.Item
                                    onSelect={() => runCommand(() => router.push("/blog"))}
                                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-200 text-sm hover:bg-white/10 cursor-pointer aria-selected:bg-blue-600 aria-selected:text-white transition-colors"
                                >
                                    <ArrowRight className="w-4 h-4" />
                                    <span>Resources / Blog</span>
                                </Command.Item>
                            </Command.Group>

                            <Command.Group heading="Settings" className="text-xs font-medium text-slate-500 mt-2 mb-2 px-2">
                                <Command.Item
                                    onSelect={() => runCommand(() => console.log("Toggle Theme"))} // Placeholder
                                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-200 text-sm hover:bg-white/10 cursor-pointer aria-selected:bg-blue-600 aria-selected:text-white transition-colors"
                                >
                                    <Moon className="w-4 h-4" />
                                    <span>Toggle Dark Mode</span>
                                </Command.Item>
                            </Command.Group>
                        </Command.List>
                    </Command>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
