import { CRMDemo } from "@/components/crm/CRMDemo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GlowButton } from "@/components/GlowButton";

export const metadata = {
    title: "Cursive Growth Engine | CRM Demo",
    description: "Manage your leads from purchase to close.",
};

export default function CRMDemoPage() {
    return (
        <>
            <Navbar />
            <main style={{ minHeight: "100vh", paddingTop: "8rem", paddingBottom: "4rem" }}>

                {/* Hero Section */}
                <section className="container" style={{ marginBottom: "4rem", textAlign: "center" }}>
                    <ScrollReveal width="100%">
                        <span style={{
                            color: "var(--color-primary)",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            marginBottom: "1rem",
                            display: "block"
                        }}>
                            Integrated Workflow
                        </span>
                        <h1 style={{
                            fontFamily: "var(--font-outfit)",
                            fontSize: "clamp(2.5rem, 5vw, 4rem)",
                            fontWeight: 700,
                            color: "var(--color-secondary)",
                            marginBottom: "1.5rem"
                        }}>
                            Cursive Growth Engine
                        </h1>
                        <p style={{
                            maxWidth: "600px",
                            margin: "0 auto 2rem",
                            fontSize: "1.25rem",
                            color: "var(--text-muted)"
                        }}>
                            Don't just buy leads. Manage them.
                            The only CRM built specifically for high-intent signals.
                        </p>
                    </ScrollReveal>
                </section>

                {/* Demo Component */}
                <section className="container" style={{ marginBottom: "6rem" }}>
                    <ScrollReveal>
                        <CRMDemo />
                    </ScrollReveal>
                </section>

                {/* CTA Section */}
                <section className="container" style={{ textAlign: "center" }}>
                    <ScrollReveal>
                        <div style={{
                            background: "var(--glass-bg)",
                            border: "1px solid var(--glass-border)",
                            borderRadius: "1rem",
                            padding: "4rem 2rem"
                        }}>
                            <h2 style={{ fontSize: "2rem", marginBottom: "1rem", fontFamily: "var(--font-outfit)" }}>
                                Stop paying for Salesforce.
                            </h2>
                            <p style={{ marginBottom: "2rem", color: "var(--text-muted)" }}>
                                Get the Cursive Growth Engine free with your first lead purchase.
                            </p>
                            <GlowButton>Start Free Trial</GlowButton>
                        </div>
                    </ScrollReveal>
                </section>

            </main>
            <Footer />
        </>
    );
}
