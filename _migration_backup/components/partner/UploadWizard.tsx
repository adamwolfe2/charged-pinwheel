"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Check, ChevronRight, FileSpreadsheet, ShieldCheck, DollarSign } from "lucide-react";
import styles from "./UploadWizard.module.css";
import { GlassCard } from "@/components/GlassCard";
import { GlowButton } from "@/components/GlowButton";

const STEPS = [
    { id: 1, label: "Upload CSV" },
    { id: 2, label: "Map Columns" },
    { id: 3, label: "Quality Check" },
    { id: 4, label: "Set Pricing" },
    { id: 5, label: "Launch" },
];

export function UploadWizard() {
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(0);

    // Simulation helpers
    const handleUpload = () => {
        // Simulate upload delay
        setTimeout(() => setStep(2), 1000);
    };

    const handleVerification = () => {
        setStep(3);
        // Simulate progress bar for verification
        let p = 0;
        const interval = setInterval(() => {
            p += 2;
            setProgress(p);
            if (p >= 100) {
                clearInterval(interval);
                setTimeout(() => setStep(4), 500);
            }
        }, 30);
    };

    return (
        <div className={styles.container}>
            {/* Step Indicator */}
            <div className={styles.stepper}>
                {STEPS.map((s) => (
                    <div key={s.id} className={`${styles.stepItem} ${step >= s.id ? styles.active : ""}`}>
                        <div className={styles.stepCircle}>
                            {step > s.id ? <Check size={14} /> : s.id}
                        </div>
                        <span className={styles.stepLabel}>{s.label}</span>
                    </div>
                ))}
                <div className={styles.progressBar}>
                    <div
                        className={styles.progressFill}
                        style={{ width: `${((step - 1) / (STEPS.length - 1)) * 100}%` }}
                    />
                </div>
            </div>

            <GlassCard className={styles.card}>
                <AnimatePresence mode="wait">

                    {/* STEP 1: UPLOAD */}
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className={styles.stepContent}
                        >
                            <h2>Upload Your Leads</h2>
                            <p>Drag and drop your CSV file here to start monetizing.</p>

                            <div className={styles.dropZone} onClick={handleUpload}>
                                <Upload size={48} className={styles.uploadIcon} />
                                <span className={styles.dropText}>Click to browse or drag file</span>
                                <span className={styles.supported}>Supports CSV, XLSX up to 50MB</span>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 2: MAPPING */}
                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className={styles.stepContent}
                        >
                            <h2>Map Your Columns</h2>
                            <p>We auto-detected 5 columns. Please confirm mapping.</p>

                            <div className={styles.mappingList}>
                                {["First Name", "Email Address", "Phone Number", "Company", "Job Title"].map((col) => (
                                    <div key={col} className={styles.mappingRow}>
                                        <div className={styles.csvCol}>
                                            <FileSpreadsheet size={16} />
                                            {col}
                                        </div>
                                        <ChevronRight size={16} className={styles.arrow} />
                                        <div className={styles.systemCol}>
                                            <Check size={16} className={styles.mappedIcon} />
                                            {col}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <GlowButton onClick={handleVerification}>Confirm Mapping</GlowButton>
                        </motion.div>
                    )}

                    {/* STEP 3: VERIFICATION */}
                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className={styles.stepContent}
                        >
                            <h2>Verifying Quality</h2>
                            <p>Running Cursive Verification Engine™ on 2,450 rows...</p>

                            <div className={styles.verifyBox}>
                                <ShieldCheck size={48} className={styles.pulseIcon} />
                                <div className={styles.verifyProgress}>
                                    <div className={styles.barOuter}>
                                        <div className={styles.barInner} style={{ width: `${progress}%` }} />
                                    </div>
                                    <span className={styles.percent}>{progress}%</span>
                                </div>
                                <ul className={styles.checks}>
                                    <li className={progress > 20 ? styles.checked : ""}>Email Deliverability</li>
                                    <li className={progress > 50 ? styles.checked : ""}>Phone Line Active</li>
                                    <li className={progress > 80 ? styles.checked : ""}>Spam Trap Detection</li>
                                    <li className={progress > 90 ? styles.checked : ""}>Duplicate Check</li>
                                </ul>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 4: PRICING */}
                    {step === 4 && (
                        <motion.div
                            key="step4"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className={styles.stepContent}
                        >
                            <h2>Set Your Price</h2>
                            <p>Based on quality score (94/100), we recommend $0.75/lead.</p>

                            <div className={styles.pricingControl}>
                                <div className={styles.priceDisplay}>
                                    <span className={styles.currency}>$</span>
                                    <span className={styles.amount}>0.75</span>
                                </div>
                                <input type="range" min="0.10" max="2.00" step="0.05" defaultValue="0.75" className={styles.range} />
                                <div className={styles.earningsProj}>
                                    <DollarSign size={16} />
                                    <span>Est. Earnings: <b>$1,837.50</b></span>
                                </div>
                            </div>
                            <GlowButton onClick={() => setStep(5)}>Launch Campaign</GlowButton>
                        </motion.div>
                    )}

                    {/* STEP 5: SUCCESS */}
                    {step === 5 && (
                        <motion.div
                            key="step5"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className={`${styles.stepContent} ${styles.success}`}
                        >
                            <div className={styles.confetti}>🎉</div>
                            <h2>Ready to Sell!</h2>
                            <p>Your 2,450 leads are now live on the Cursive Marketplace.</p>
                            <div className={styles.stats}>
                                <div className={styles.statBox}>
                                    <span className={styles.label}>Potential Earnings</span>
                                    <span className={styles.val}>$1,837</span>
                                </div>
                                <div className={styles.statBox}>
                                    <span className={styles.label}>Quality Score</span>
                                    <span className={styles.val}>94</span>
                                </div>
                            </div>
                            <button
                                className={styles.resetBtn}
                                onClick={() => { setStep(1); setProgress(0); }}
                            >
                                Upload Another File
                            </button>
                        </motion.div>
                    )}

                </AnimatePresence>
            </GlassCard>
        </div>
    );
}
