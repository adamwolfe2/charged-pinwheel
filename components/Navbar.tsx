"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { GlowButton } from "./GlowButton";
import styles from "./Navbar.module.css";

const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Verticals", href: "#verticals" },
    { name: "Pricing", href: "#pricing" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link href="/" className={styles.logo}>
                    Cursive
                </Link>

                {/* Desktop Nav */}
                <div className={styles.desktopNav}>
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className={styles.link}>
                            {link.name}
                        </Link>
                    ))}
                    <GlowButton>Get Started</GlowButton>
                </div>

                {/* Mobile Toggle */}
                <button className={styles.menuToggle} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className={styles.mobileLinks}>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={styles.mobileLink}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className={styles.mobileCta}>
                                <GlowButton onClick={() => setIsOpen(false)}>Get Started</GlowButton>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
