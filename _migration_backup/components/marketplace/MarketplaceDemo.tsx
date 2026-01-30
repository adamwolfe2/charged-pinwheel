"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, Search, Check, Lock } from "lucide-react";
import styles from "./MarketplaceDemo.module.css";
import mockData from "@/data/marketplace_mock.json";
import { GlassCard } from "../GlassCard"; // Using our reusable component

export function MarketplaceDemo() {
    const [activeIndustry, setActiveIndustry] = useState("All");
    const [activeState, setActiveState] = useState("All");
    const [minScore, setMinScore] = useState(0);

    // Derived filters
    const industries = ["All", ...Array.from(new Set(mockData.map((d) => d.industry)))];
    const states = ["All", ...Array.from(new Set(mockData.map((d) => d.state)))];

    const filteredData = useMemo(() => {
        return mockData.filter((lead) => {
            const matchIndustry = activeIndustry === "All" || lead.industry === activeIndustry;
            const matchState = activeState === "All" || lead.state === activeState;
            const matchScore = lead.cursiveScore >= minScore;
            return matchIndustry && matchState && matchScore;
        });
    }, [activeIndustry, activeState, minScore]);

    return (
        <div className={styles.container}>
            {/* Sidebar Filters */}
            <div className={styles.sidebar}>
                <div className={styles.filterGroup}>
                    <div className={styles.filterHeader}>
                        <Filter size={16} />
                        <span>Filters</span>
                    </div>

                    <div className={styles.filterSection}>
                        <label>Industry</label>
                        <div className={styles.pills}>
                            {industries.map((ind) => (
                                <button
                                    key={ind}
                                    className={`${styles.pill} ${activeIndustry === ind ? styles.active : ""}`}
                                    onClick={() => setActiveIndustry(ind)}
                                >
                                    {ind}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className={styles.filterSection}>
                        <label>State</label>
                        <select
                            value={activeState}
                            onChange={(e) => setActiveState(e.target.value)}
                            className={styles.select}
                        >
                            {states.map((st) => (
                                <option key={st} value={st}>{st}</option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.filterSection}>
                        <label>Cursive Score™ (Intent)</label>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={minScore}
                            onChange={(e) => setMinScore(Number(e.target.value))}
                            className={styles.range}
                        />
                        <div className={styles.rangeValue}>Min Score: {minScore}</div>
                    </div>
                </div>
            </div>

            {/* Main Grid */}
            <div className={styles.main}>
                <div className={styles.header}>
                    <h2>{filteredData.length} Verified Leads Found</h2>
                    <div className={styles.searchBar}>
                        <Search size={16} />
                        <input type="text" placeholder="Search by intent signal..." readOnly />
                    </div>
                </div>

                <motion.div layout className={styles.grid}>
                    <AnimatePresence>
                        {filteredData.map((lead) => (
                            <motion.div
                                layout
                                key={lead.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                            >
                                <GlassCard className={styles.leadCard}>
                                    <div className={styles.cardHeader}>
                                        <span className={styles.industryBadge}>{lead.industry}</span>
                                        <span className={`${styles.scoreBadge} ${lead.cursiveScore > 90 ? styles.hot : styles.warm}`}>
                                            {lead.cursiveScore}
                                        </span>
                                    </div>
                                    <h3 className={styles.leadName}>{lead.title}</h3>
                                    <p className={styles.company}>{lead.company}</p>

                                    <div className={styles.intentBox}>
                                        <span className={styles.label}>Intent Signal:</span>
                                        <p>"{lead.intentSignal}"</p>
                                    </div>

                                    <div className={styles.metaGrid}>
                                        <div className={styles.metaItem}>
                                            <span className={styles.label}>Loc</span>
                                            <span>{lead.city}, {lead.state}</span>
                                        </div>
                                        <div className={styles.metaItem}>
                                            <span className={styles.label}>Price</span>
                                            <span>${lead.price.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    <div className={styles.actions}>
                                        <div className={styles.blurData}>
                                            <Lock size={12} />
                                            <span>{lead.email}</span>
                                        </div>
                                        <button className={styles.buyBtn}>
                                            Unlock Lead
                                        </button>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
