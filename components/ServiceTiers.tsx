"use client";

import { Check } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { GlowButton } from "./GlowButton";
import { ScrollReveal } from "./ScrollReveal";
import styles from "./ServiceTiers.module.css";

const tiers = [
    {
        name: "Tier 1: Lead Lists",
        subtitle: "High Intent Data",
        price: "Custom",
        description: "Weekly CSVs of high-intent buyers in your exact vertical.",
        features: ["Buyer Intent Signals", "Validated Emails", "City-Level Targeting", "Weekly Delivery"],
        variant: "secondary" as const,
    },
    {
        name: "Tier 2: Activation",
        subtitle: "Agency Portal",
        price: "$500+",
        description: "We set up the infrastructure. You close the deals.",
        features: ["Everything in Tier 1", "White-labeled Outbound Portal", "Unlimited Campaigns", "Deliverability Managed"],
        variant: "primary" as const, // Highlighted
    },
    {
        name: "Tier 3: Growth Ops",
        subtitle: "Done-For-You",
        price: "Retainer",
        description: "Full service growth engine. We book meetings on your calendar.",
        features: ["Everything in Tier 2", "Inbox Management", "AI-Driven Replies", "Meeting Booking"],
        variant: "secondary" as const,
    },
];

export function ServiceTiers() {
    return (
        <section className={styles.section} id="pricing">
            <div className={styles.container}>
                <ScrollReveal>
                    <h2 className={styles.title}>Simple, Transparent Models.</h2>
                    <p className={styles.subtitle}>Choose how you want to scale.</p>
                </ScrollReveal>

                <div className={styles.grid}>
                    {tiers.map((tier, index) => (
                        <ScrollReveal key={tier.name} delay={index * 0.1} className={styles.cardWrapper}>
                            <GlassCard className={`${styles.card} ${tier.variant === 'primary' ? styles.highlight : ''}`}>
                                <div className={styles.header}>
                                    <span className={styles.tierName}>{tier.name}</span>
                                    <div className={styles.priceBlock}>
                                        <span className={styles.price}>{tier.price}</span>
                                        {tier.price !== "Custom" && <span className={styles.period}>/mo</span>}
                                    </div>
                                    <p className={styles.description}>{tier.description}</p>
                                </div>

                                <ul className={styles.features}>
                                    {tier.features.map((feature) => (
                                        <li key={feature}>
                                            <Check size={18} className={styles.check} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <GlowButton
                                    variant={tier.variant === 'primary' ? 'primary' : 'secondary'}
                                    className={styles.button}
                                >
                                    Get Started
                                </GlowButton>
                            </GlassCard>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
