"use client";

import { motion } from "framer-motion";
import { MoreHorizontal, Plus } from "lucide-react";
import styles from "./CRMDemo.module.css";
import mockData from "@/data/crm_mock.json";
import { GlassCard } from "../GlassCard";

export function CRMDemo() {
    return (
        <div className={styles.container}>
            {/* Visual Header simulating CRM controls */}
            <div className={styles.header}>
                <div className={styles.tabs}>
                    <button className={`${styles.tab} ${styles.active}`}>Deals</button>
                    <button className={styles.tab}>Leads</button>
                    <button className={styles.tab}>Contacts</button>
                </div>
                <button className={styles.addBtn}>
                    <Plus size={16} />
                    <span>New Deal</span>
                </button>
            </div>

            <div className={styles.board}>
                {mockData.stages.map((stage) => (
                    <div key={stage.id} className={styles.column}>
                        <div className={styles.columnHeader}>
                            <span className={styles.stageName}>{stage.name}</span>
                            <span className={styles.count}>{stage.leads.length}</span>
                        </div>

                        <div className={styles.dropZone}>
                            {stage.leads.map((lead) => (
                                <motion.div
                                    key={lead.id}
                                    layoutId={lead.id}
                                    whileHover={{ scale: 1.02 }}
                                    className={styles.draggable}
                                >
                                    <GlassCard className={styles.card}>
                                        <div className={styles.cardTop}>
                                            <span className={styles.company}>{lead.company}</span>
                                            <MoreHorizontal size={14} className={styles.moreIcon} />
                                        </div>
                                        <div className={styles.cardValue}>{lead.value}</div>
                                        <div className={styles.cardFooter}>
                                            <span className={styles.task}>{lead.task}</span>
                                        </div>
                                    </GlassCard>
                                </motion.div>
                            ))}
                            {/* Empty slot visual */}
                            <div className={styles.emptySlot} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
