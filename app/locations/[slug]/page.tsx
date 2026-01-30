import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GlowButton } from "@/components/GlowButton";
import { InteractiveCalculator } from "@/components/InteractiveCalculator";
import { ScrollReveal } from "@/components/ScrollReveal";
import citiesData from "@/data/cities.json";

// Type generation for static params
export function generateStaticParams() {
    return citiesData.map((city) => ({
        slug: city.slug,
    }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
    const city = citiesData.find(c => c.slug === params.slug);
    if (!city) return {};

    return {
        title: `Lead Generation in ${city.name} | Cursive`,
        description: `Find high-intent leads in ${city.name} with Cursive's AI engine.`,
    };
}

export default function LocationPage({ params }: { params: { slug: string } }) {
    const city = citiesData.find((c) => c.slug === params.slug);

    if (!city) {
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
                            Local Intelligence
                        </span>
                        <h1 style={{
                            fontFamily: "var(--font-outfit)",
                            fontSize: "clamp(2.5rem, 5vw, 4rem)",
                            fontWeight: 700,
                            color: "var(--color-secondary)",
                            marginBottom: "1.5rem"
                        }}>
                            Dominate the {city.name} Market
                        </h1>
                        <p style={{
                            maxWidth: "600px",
                            margin: "0 auto 2rem",
                            fontSize: "1.25rem",
                            color: "var(--text-muted)"
                        }}>
                            Stop competing for the same leads in {city.name}.
                            Identify 100+ exclusive opportunities this week.
                        </p>
                        <GlowButton>See {city.name} Heatmap</GlowButton>
                    </ScrollReveal>
                </section>

                <section className="container">
                    <InteractiveCalculator />
                </section>

            </main>
            <Footer />
        </>
    );
}
