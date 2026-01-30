import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GlowButton } from "@/components/GlowButton";
import { GlassCard } from "@/components/GlassCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import comparisonsData from "@/data/comparisons.json";
import { Check, X } from "lucide-react";

export function generateStaticParams() {
    return comparisonsData.map((comp) => ({
        slug: comp.slug,
    }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
    const comp = comparisonsData.find(c => c.slug === params.slug);
    if (!comp) return {};

    return {
        title: `Cursive vs ${comp.name} | The Better Alternative`,
        description: `Why businesses are switching from ${comp.name} to Cursive for higher quality leads and lower costs.`,
    };
}

export default function ComparePage({ params }: { params: { slug: string } }) {
    const comp = comparisonsData.find((c) => c.slug === params.slug);

    if (!comp) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <main style={{ minHeight: "100vh", paddingTop: "8rem", paddingBottom: "4rem" }}>

                <section className="container" style={{ textAlign: "center", marginBottom: "6rem" }}>
                    <ScrollReveal width="100%">
                        <span style={{
                            color: "var(--color-primary)",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            marginBottom: "1rem",
                            display: "block"
                        }}>
                            Unfair Advantage
                        </span>
                        <h1 style={{
                            fontFamily: "var(--font-outfit)",
                            fontSize: "clamp(2.5rem, 5vw, 4rem)",
                            fontWeight: 700,
                            color: "var(--color-secondary)",
                            marginBottom: "1.5rem"
                        }}>
                            Cursive vs. {comp.name}
                        </h1>
                        <p style={{
                            maxWidth: "600px",
                            margin: "0 auto 2rem",
                            fontSize: "1.25rem",
                            color: "var(--text-muted)"
                        }}>
                            See why smart businesses save {comp.savings} by switching to the
                            verified, intent-driven marketplace.
                        </p>
                    </ScrollReveal>
                </section>

                <section className="container" style={{ marginBottom: "6rem", maxWidth: "900px" }}>
                    <ScrollReveal>
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "2rem",
                            alignItems: "stretch"
                        }}>
                            {/* Competitor Card */}
                            <div style={{
                                padding: "2rem",
                                background: "rgba(255, 50, 50, 0.05)",
                                border: "1px solid rgba(255, 0, 0, 0.1)",
                                borderRadius: "1rem"
                            }}>
                                <h3 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", color: "var(--text-body)" }}>{comp.name}</h3>
                                <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                    {comp.cons.map((con, i) => (
                                        <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                                            <div style={{
                                                width: "24px", height: "24px",
                                                background: "rgba(255, 0, 0, 0.1)",
                                                color: "red",
                                                borderRadius: "50%",
                                                display: "flex", alignItems: "center", justifyContent: "center"
                                            }}>
                                                <X size={14} />
                                            </div>
                                            <span style={{ color: "var(--text-muted)" }}>{con}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Cursive Card */}
                            <GlassCard style={{ padding: "2rem", border: "2px solid var(--color-primary)" }}>
                                <h3 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", color: "var(--color-primary)" }}>Cursive</h3>
                                <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                    {[
                                        "100% Exclusive Leads",
                                        "Real-time Intent Signals",
                                        "No Contracts or Fees"
                                    ].map((pro, i) => (
                                        <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                                            <div style={{
                                                width: "24px", height: "24px",
                                                background: "rgba(16, 185, 129, 0.1)",
                                                color: "#10B981",
                                                borderRadius: "50%",
                                                display: "flex", alignItems: "center", justifyContent: "center"
                                            }}>
                                                <Check size={14} />
                                            </div>
                                            <span style={{ fontWeight: 600, color: "var(--text-body)" }}>{pro}</span>
                                        </li>
                                    ))}
                                </ul>
                            </GlassCard>
                        </div>

                        <div style={{ textAlign: "center", marginTop: "3rem" }}>
                            <GlowButton>Switch & Save {comp.savings}</GlowButton>
                        </div>
                    </ScrollReveal>
                </section>

            </main>
            <Footer />
        </>
    );
}
