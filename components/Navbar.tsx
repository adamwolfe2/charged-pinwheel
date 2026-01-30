"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { GlowButton } from "./GlowButton";
import { cn } from "@/lib/utils"; // Assuming shadcn utils exist, or I will create it.

const navLinks = [
    { name: "Marketplace", href: "/marketplace-preview" },
    { name: "Growth Engine", href: "/crm-demo" },
    { name: "Partner Network", href: "/partner/demo" },
    { name: "Resources", href: "/blog" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                    scrolled
                        ? "bg-slate-950/80 backdrop-blur-xl border-white/10 py-3"
                        : "bg-transparent border-transparent py-5"
                )}
            >
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <Link href="/" className="relative z-50">
                        <span className="font-heading text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                            Cursive
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <Link href="/compare/zoominfo" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                            Compare
                        </Link>
                        <Link href="/marketplace-preview">
                            <GlowButton className="text-xs px-5 py-2">Get Data</GlowButton>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden relative z-50 text-white p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-slate-950 pt-24 px-4 md:hidden"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-slate-800 text-lg font-medium text-slate-200"
                                    >
                                        {link.name}
                                        <ChevronRight className="text-slate-600" size={20} />
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                className="mt-4"
                            >
                                <Link href="/marketplace-preview" onClick={() => setIsOpen(false)}>
                                    <button className="w-full py-4 bg-blue-600 rounded-xl text-white font-bold text-lg shadow-lg shadow-blue-900/20">
                                        Get Access Now
                                    </button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
