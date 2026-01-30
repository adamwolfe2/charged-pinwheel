import Link from "next/link";
import styles from "./Footer.module.css";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <h3 className={styles.logo}>Cursive</h3>
                        <p className={styles.tagline}>
                            Turn buyer intent into pipeline.
                        </p>
                    </div>

                    <div className={styles.column}>
                        <h4>Platform</h4>
                        <Link href="#">Features</Link>
                        <Link href="#">Pricing</Link>
                        <Link href="#">Verticals</Link>
                    </div>

                    <div className={styles.column}>
                        <h4>Company</h4>
                        <Link href="#">About</Link>
                        <Link href="#">Blog</Link>
                        <Link href="#">Careers</Link>
                    </div>

                    <div className={styles.column}>
                        <h4>Legal</h4>
                        <Link href="#">Privacy</Link>
                        <Link href="#">Terms</Link>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© 2026 Cursive. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
