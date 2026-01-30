import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GlowButton } from "@/components/GlowButton";
import { GlassCard } from "@/components/GlassCard";
import { InteractiveCalculator } from "@/components/InteractiveCalculator";
import { ScrollReveal } from "@/components/ScrollReveal";
import verticalsData from "@/data/verticals.json";

// Type generation for static params
export function generateStaticParams() {
    return verticalsData.map((vertical) => ({
        slug: vertical.slug,
    }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
    const vertical = verticalsData.find(v => v.slug === params.slug);
    if (!vertical) return {};

    return {
        title: `${vertical.heroTitle} | Cursive`,
        description: vertical.description,
    };
}

export default function VerticalPage({ params }: { params: { slug: string } }) {
    const vertical = verticalsData.find((v) => v.slug === params.slug);

    if (!vertical) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <main style={{ minHeight: "100vh", paddingTop: "8rem", paddingBottom: "4rem" }}>

                {/* Dynamic Hero */}
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
                            Industry Solutions
                        </span>
                        <h1 style={{
                            fontFamily: "var(--font-outfit)",
                            fontSize: "clamp(2.5rem, 5vw, 4rem)",
                            fontWeight: 700,
                            color: "var(--color-secondary)",
                            marginBottom: "1.5rem"
                        }}>
                            {vertical.heroTitle}
                        </h1>
                        <p style={{
                            maxWidth: "600px",
                            margin: "0 auto 2rem",
                            fontSize: "1.25rem",
                            color: "var(--text-muted)"
                        }}>
                            {vertical.description}
                        </p>
                        <GlowButton>{vertical.leadMagnet}</GlowButton>
                    </ScrollReveal>
                </section>

                {/* Specific Features */}
                <section className="container" style={{ marginBottom: "6rem" }}>
                    <h2 style={{ textAlign: "center", fontFamily: "var(--font-outfit)", marginBottom: "3rem", fontSize: "2rem" }}>
                        Tailored Signals for {vertical.title}
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
                        {vertical.features.map((feature, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <GlassCard>
                                    <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.5rem" }}>{feature}</h3>
                                    <p style={{ color: "var(--text-muted)" }}>Exclusive data points only available for the {vertical.title} sector.</p>
                                </GlassCard>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* Calculator */}
                <section className="container">
                    <InteractiveCalculator />
                </section>

            </main>
            <Footer />
        </>
    );
}
