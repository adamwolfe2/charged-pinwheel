"use client";

import { Check } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { GlowButton } from "./GlowButton";
import { ScrollReveal } from "./ScrollReveal";

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
        <section className="py-24" id="pricing">
            <div className="container mx-auto px-6 max-w-7xl">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
                            Simple, Transparent Models.
                        </h2>
                        <p className="text-xl text-slate-400">Choose how you want to scale.</p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {tiers.map((tier, index) => (
                        <ScrollReveal key={tier.name} delay={index * 0.1} className="h-full">
                            <GlassCard className={`
                                h-full flex flex-col p-8
                                ${tier.variant === 'primary'
                                    ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-blue-500/50 shadow-2xl shadow-blue-900/20 lg:scale-105 z-10 relative'
                                    : 'bg-slate-950/50'}
                            `}>
                                <div className="mb-8">
                                    <span className="block text-sm font-bold uppercase tracking-widest text-blue-500 mb-4">
                                        {tier.name}
                                    </span>
                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className="font-heading text-4xl font-bold text-white">
                                            {tier.price}
                                        </span>
                                        {tier.price !== "Custom" && <span className="text-slate-500">/mo</span>}
                                    </div>
                                    <p className="text-slate-400 leading-relaxed min-h-[50px]">
                                        {tier.description}
                                    </p>
                                </div>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3 text-slate-300 text-sm">
                                            <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 text-blue-400">
                                                <Check size={12} strokeWidth={3} />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto">
                                    <GlowButton
                                        variant={tier.variant === 'primary' ? 'primary' : 'secondary'}
                                        className="w-full"
                                    >
                                        Get Started
                                    </GlowButton>
                                </div>
                            </GlassCard>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
