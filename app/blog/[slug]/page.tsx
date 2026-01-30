import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import blogData from "@/data/blog.json";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

export function generateStaticParams() {
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
        <div className="bg-slate-950 min-h-screen">
            <Navbar />
            <main className="pt-32 pb-20">
                <article className="max-w-3xl mx-auto px-4">

                    {/* Header */}
                    <header className="text-center mb-16">
                        <Link href="/blog" className="inline-flex items-center text-sm text-slate-500 hover:text-blue-400 mb-8 transition-colors">
                            <ArrowLeft size={16} className="mr-2" /> Back to Resources
                        </Link>

                        <div className="flex items-center justify-center gap-4 text-sm mb-6">
                            <span className="flex items-center gap-1.5 text-blue-400 font-bold uppercase tracking-wider bg-blue-500/10 px-3 py-1 rounded-full">
                                <Tag size={12} /> {post.category}
                            </span>
                            <span className="flex items-center gap-1.5 text-slate-500">
                                <Calendar size={12} /> {post.date}
                            </span>
                        </div>

                        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            {post.title}
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                            {post.summary}
                        </p>
                    </header>

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none text-slate-300">
                        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-12">
                            <p className="text-sm text-slate-500 italic mb-0">
                                This is a simulated blog post for demo purposes. In a production environment, this content would be rendered via MDX or a Headless CMS.
                            </p>
                        </div>

                        <p className="lead text-xl text-white mb-8">
                            Startups and enterprises alike are facing a new reality: <span className="text-blue-400 font-bold">cold outreach is dying</span>. The noise level is too high, and decision-makers have tuned out generic sequences.
                        </p>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Intent Revolution</h2>
                        <p className="mb-6">
                            Traditional lead generation relies on firmographics: "Find me companies with 50-200 employees." But that doesn't tell you who is <strong>ready to buy</strong>.
                        </p>
                        <p className="mb-6">
                            Intent data flips the script. Instead of guessing, we listen for signals. A company visiting your pricing page, reading comparison articles, or searching for "best enterprise CRM" is broadcasting intent.
                        </p>

                        <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-12 bg-blue-900/10 rounded-r-xl">
                            <p className="text-2xl font-heading font-bold text-white italic">
                                "Intent data is the difference between guessing and knowing. It turns cold calls into warm introductions."
                            </p>
                        </blockquote>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-6">How Cursive Solves This</h2>
                        <p className="mb-6">
                            Cursive aggregates signals from across the B2B web, mapping anonymous traffic to real companies and verified decision-makers. We don't just give you a list; we give you a <strong>pipeline</strong>.
                        </p>

                        <div className="mt-12 p-8 bg-blue-600 rounded-2xl text-center">
                            <h3 className="text-2xl font-bold text-white mb-4">Ready to test it?</h3>
                            <p className="text-blue-100 mb-6">See who is researching you right now.</p>
                            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                                Get Your Free Report
                            </button>
                        </div>
                    </div>

                </article>
            </main>
            <Footer />
        </div>
    );
}
