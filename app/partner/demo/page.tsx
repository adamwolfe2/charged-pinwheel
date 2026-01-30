import { UploadWizard } from "@/components/partner/UploadWizard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata = {
    title: "Cursive Partner Network | Upload Demo",
    description: "Monetize your high-intent lead data with Cursive.",
};

export default function PartnerDemoPage() {
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
                            Partner Network
                        </span>
                        <h1 style={{
                            fontFamily: "var(--font-outfit)",
                            fontSize: "clamp(2.5rem, 5vw, 4rem)",
                            fontWeight: 700,
                            color: "var(--color-secondary)",
                            marginBottom: "1.5rem"
                        }}>
                            Turn Your Data Into Revenue
                        </h1>
                        <p style={{
                            maxWidth: "600px",
                            margin: "0 auto 2rem",
                            fontSize: "1.25rem",
                            color: "var(--text-muted)"
                        }}>
                            Upload your exclusive lead inventory.
                            Our AI verifies quality and matches buyers instantly.
                        </p>
                    </ScrollReveal>
                </section>

                {/* Demo Component */}
                <section className="container" style={{ marginBottom: "6rem" }}>
                    <ScrollReveal>
                        <UploadWizard />
                    </ScrollReveal>
                </section>

            </main>
            <Footer />
        </>
    );
}
