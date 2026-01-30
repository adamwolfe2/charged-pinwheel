import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import blogData from "@/data/blog.json";
import styles from "./BlogPost.module.css"; // We will create this

export function generateStaticParams() {
    // Add a fallback for when blogData might be empty or undefined to prevent build errors
    if (!blogData || blogData.length === 0) return [];
    return blogData.map((post) => ({
        slug: post.slug,
    }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
    const post = blogData.find(p => p.slug === params.slug);
    if (!post) return {};

    return {
        title: `${post.title} | Cursive Blog`,
        description: post.summary,
    };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogData.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <ScrollReveal>
                    <article className={styles.article}>
                        <header className={styles.header}>
                            <div className={styles.meta}>
                                <span className={styles.category}>{post.category}</span>
                                <span className={styles.date}>{post.date}</span>
                            </div>
                            <h1 className={styles.title}>{post.title}</h1>
                            <p className={styles.summary}>{post.summary}</p>
                        </header>

                        <div className={styles.content}>
                            <p>
                                <i>(This is a placeholder for the full article content. In a real implementation, this would be rendered from MDX or a CMS.)</i>
                            </p>
                            <br />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <h2>The Problem with Traditional Lead Gen</h2>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <blockquote>
                                "Intent data is the difference between guessing and knowing."
                            </blockquote>
                            <h2>How Cursive Solves It</h2>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                        </div>
                    </article>
                </ScrollReveal>
            </main>
            <Footer />
        </>
    );
}
