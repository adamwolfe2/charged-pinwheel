import Link from "next/link";
import styles from "./Footer.module.css";
import verticalsData from "@/data/verticals.json";
import citiesData from "@/data/cities.json";

export function Footer() {
    // Show top 6 verticals and cities
    const featuredVerticals = verticalsData.slice(0, 6);
    const featuredCities = citiesData.slice(0, 6);

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <h3 className={styles.logo}>Cursive</h3>
                        <p className={styles.tagline}>
                            The verticalized buyer-intent engine.
                            <br />
                            Stop guessing. Start closing.
                        </p>
                    </div>

                    <div className={styles.linksGrid}>
                        <div className={styles.column}>
                            <h4>Platform</h4>
                            <Link href="/marketplace-preview">Marketplace Demo</Link>
                            <Link href="/crm-demo">Growth Engine Demo</Link>
                            <Link href="/partner/demo">Partner Network</Link>
                            <Link href="/pricing">Pricing</Link>
                        </div>

                        <div className={styles.column}>
                            <h4>Top Industries</h4>
                            {featuredVerticals.map(v => (
                                <Link key={v.slug} href={`/verticals/${v.slug}`}>{v.title}</Link>
                            ))}
                            <Link href="/verticals" className={styles.moreLink}>View All Industries →</Link>
                        </div>

                        <div className={styles.column}>
                            <h4>Top Locations</h4>
                            {featuredCities.map(c => (
                                <Link key={c.slug} href={`/locations/${c.slug}`}>{c.name}</Link>
                            ))}
                            <Link href="/locations" className={styles.moreLink}>View All Cities →</Link>
                        </div>

                        <div className={styles.column}>
                            <h4>Compare</h4>
                            <Link href="/compare/homeadvisor">vs HomeAdvisor</Link>
                            <Link href="/compare/zoominfo">vs ZoomInfo</Link>
                            <Link href="/blog">Resources & Blog</Link>
                            <Link href="/legal/privacy">Privacy Policy</Link>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© 2026 Cursive Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
