"use client";

import { useState } from "react";
import { GlowButton } from "./GlowButton";
import { GlassCard } from "./GlassCard";
import styles from "./InteractiveCalculator.module.css";

export function InteractiveCalculator() {
    const [leadCount, setLeadCount] = useState(500);
    const [closeRate, setCloseRate] = useState(20);
    const [dealValue, setDealValue] = useState(1500);

    const estimatedRevenue = leadCount * (closeRate / 100) * dealValue;

    return (
        <GlassCard className={styles.calculator}>
            <div className={styles.header}>
                <h3>Estimate Your ROI</h3>
                <p>See what Cursive intent leads could generate for you.</p>
            </div>

            <div className={styles.grid}>
                <div className={styles.inputs}>
                    <div className={styles.field}>
                        <label>Monthly Leads</label>
                        <input
                            type="range"
                            min="100"
                            max="5000"
                            step="100"
                            value={leadCount}
                            onChange={(e) => setLeadCount(Number(e.target.value))}
                        />
                        <span>{leadCount} leads</span>
                    </div>

                    <div className={styles.field}>
                        <label>Close Rate (%)</label>
                        <input
                            type="range"
                            min="5"
                            max="50"
                            step="1"
                            value={closeRate}
                            onChange={(e) => setCloseRate(Number(e.target.value))}
                        />
                        <span>{closeRate}%</span>
                    </div>

                    <div className={styles.field}>
                        <label>Avg Deal Size ($)</label>
                        <input
                            type="range"
                            min="500"
                            max="10000"
                            step="500"
                            value={dealValue}
                            onChange={(e) => setDealValue(Number(e.target.value))}
                        />
                        <span>${dealValue.toLocaleString()}</span>
                    </div>
                </div>

                <div className={styles.results}>
                    <div className={styles.resultItem}>
                        <span className={styles.label}>Potential Monthly Revenue</span>
                        <span className={styles.value}>${estimatedRevenue.toLocaleString()}</span>
                    </div>
                    <GlowButton className={styles.cta}>Start Generating Revenue</GlowButton>
                </div>
            </div>
        </GlassCard>
    );
}
