import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GlowButton } from "@/components/GlowButton";
import { GlassCard } from "@/components/GlassCard";
import { ServiceTiers } from "@/components/ServiceTiers";
import { InteractiveCalculator } from "@/components/InteractiveCalculator";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh", paddingTop: "8rem", paddingBottom: "4rem" }}>

        {/* Hero Section */}
        <section className="container" style={{ textAlign: "center", marginBottom: "8rem" }}>
          <ScrollReveal width="100%">
            <h1 style={{
              fontFamily: "var(--font-outfit)",
              fontSize: "clamp(3rem, 6vw, 5rem)",
              fontWeight: 700,
              color: "var(--color-secondary)",
              marginBottom: "1.5rem",
              lineHeight: 1.1,
              letterSpacing: "-0.02em"
            }}>
              Forget Separate Tools.<br />
              <span style={{
                fontFamily: "cursive",
                fontWeight: 400,
                opacity: 0.9,
                color: "var(--color-primary)"
              }}>Get Them All in One.</span>
            </h1>

            <p style={{
              maxWidth: "600px",
              margin: "0 auto 2.5rem",
              fontSize: "1.25rem",
              lineHeight: 1.6,
              color: "var(--text-muted)"
            }}>
              Unlock buyer intent. Enriched leads. Automated outreach.
              Everything you need to grow your service business.
            </p>

            <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
              <GlowButton style={{ fontSize: "1.125rem", padding: "1rem 2.5rem" }}>
                Get Started
              </GlowButton>
              <GlowButton variant="secondary" style={{ fontSize: "1.125rem", padding: "1rem 2.5rem" }}>
                View Demo
              </GlowButton>
            </div>
          </ScrollReveal>
        </section>

        {/* Features Grid */}
        <section className="container" style={{ marginBottom: "8rem" }} id="features">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            <ScrollReveal delay={0.1}>
              <GlassCard style={{ height: "100%" }}>
                <div style={{
                  background: "rgba(0, 102, 255, 0.1)",
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  color: "var(--color-primary)"
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                </div>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "0.75rem", fontFamily: "var(--font-outfit)", fontWeight: 600 }}>Pixel Lead Tracking</h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>Uncover hidden connections between people and businesses visiting your site.</p>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <GlassCard style={{ height: "100%" }}>
                <div style={{
                  background: "rgba(0, 102, 255, 0.1)",
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  color: "var(--color-primary)"
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                </div>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "0.75rem", fontFamily: "var(--font-outfit)", fontWeight: 600 }}>Deep ICP Scanning</h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>Go beyond surface searches by analyzing active competitors and market signals.</p>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <GlassCard style={{ height: "100%" }}>
                <div style={{
                  background: "rgba(0, 102, 255, 0.1)",
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  color: "var(--color-primary)"
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>
                </div>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "0.75rem", fontFamily: "var(--font-outfit)", fontWeight: 600 }}>Buyer Intent</h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>Collect site visitors & run retargeting directly to enriched leads.</p>
              </GlassCard>
            </ScrollReveal>
          </div>
        </section>

        {/* Pricing/Services */}
        <ServiceTiers />

        {/* ROI Calculator */}
        <section className="container" style={{ marginTop: "4rem" }}>
          <ScrollReveal width="100%">
            <InteractiveCalculator />
          </ScrollReveal>
        </section>

      </main>
      <Footer />
    </>
  );
}
