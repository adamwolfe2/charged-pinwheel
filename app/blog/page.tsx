import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GlowButton } from "@/components/GlowButton";
import { GlassCard } from "@/components/GlassCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import blogData from "@/data/blog.json";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "Cursive Resources | Lead Gen Insights",
    description: "Expert guides, case studies, and strategies for modern lead generation.",
};

export default function BlogIndexPage() {
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
                            Knowledge Base
                        </span>
                        <h1 style={{
                            fontFamily: "var(--font-outfit)",
                            fontSize: "clamp(2.5rem, 5vw, 4rem)",
                            fontWeight: 700,
                            color: "var(--color-secondary)",
                            marginBottom: "1.5rem"
                        }}>
                            Modern Lead Generation
                        </h1>
                        <p style={{
                            maxWidth: "600px",
                            margin: "0 auto 2rem",
                            fontSize: "1.25rem",
                            color: "var(--text-muted)"
                        }}>
                            Strategies, guides, and insights to help you close more deals.
                        </p>
                    </ScrollReveal>
                </section>

                <section className="container" style={{ marginBottom: "6rem" }}>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                        gap: "2rem"
                    }}>
                        {blogData.map((post, i) => (
                            <ScrollReveal key={post.slug} delay={i * 0.1}>
                                <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                                    <GlassCard style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                                        <div style={{ marginBottom: "1rem" }}>
                                            <span style={{
                                                fontSize: "0.75rem",
                                                background: "rgba(0, 102, 255, 0.1)",
                                                color: "var(--color-primary)",
                                                padding: "0.25rem 0.5rem",
                                                borderRadius: "4px",
                                                fontWeight: 600
                                            }}>
                                                {post.category}
                                            </span>
                                        </div>
                                        <h3 style={{
                                            fontSize: "1.25rem",
                                            fontWeight: 700,
                                            color: "var(--text-body)",
                                            marginBottom: "0.75rem",
                                            lineHeight: 1.4
                                        }}>
                                            {post.title}
                                        </h3>
                                        <p style={{
                                            color: "var(--text-muted)",
                                            fontSize: "0.9rem",
                                            marginBottom: "1.5rem",
                                            flexGrow: 1
                                        }}>
                                            {post.summary}
                                        </p>
                                        <div style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            borderTop: "1px solid var(--glass-border)",
                                            paddingTop: "1rem"
                                        }}>
                                            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{post.readTime}</span>
                                            <span style={{
                                                fontSize: "0.8rem",
                                                color: "var(--color-primary)",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.25rem",
                                                fontWeight: 600
                                            }}>
                                                Read Article <ArrowRight size={14} />
                                            </span>
                                        </div>
                                    </GlassCard>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                <section className="container" style={{ textAlign: "center" }}>
                    <div style={{
                        background: "var(--glass-bg)",
                        padding: "3rem",
                        borderRadius: "1rem",
                        border: "1px solid var(--glass-border)"
                    }}>
                        <h2 style={{ fontFamily: "var(--font-outfit)", fontSize: "2rem", marginBottom: "1rem" }}>
                            Get Weekly Insights
                        </h2>
                        <p style={{ maxWidth: "500px", margin: "0 auto 2rem", color: "var(--text-muted)" }}>
                            Join 15,000+ marketers and sales pros receiving our weekly intent data trends.
                        </p>
                        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                style={{
                                    padding: "0.75rem 1rem",
                                    borderRadius: "0.5rem",
                                    border: "1px solid var(--glass-border)",
                                    background: "rgba(255,255,255,0.05)",
                                    color: "var(--text-body)",
                                    minWidth: "250px"
                                }}
                            />
                            <GlowButton>Subscribe</GlowButton>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
