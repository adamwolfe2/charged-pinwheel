import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GlowButton } from "@/components/GlowButton";
import { GlassCard } from "@/components/GlassCard";
import blogData from "@/data/blog.json";
import Link from "next/link";
import { ArrowRight, BookOpen, Mail } from "lucide-react";

export const metadata = {
    title: "Cursive Resources | Lead Gen Insights",
    description: "Expert guides, case studies, and strategies for modern lead generation.",
};

export default function BlogIndexPage() {
    return (
        <div className="bg-slate-950 min-h-screen">
            <Navbar />
            <main className="pt-32 pb-20">

                {/* Hero */}
                <section className="container mx-auto px-4 text-center mb-24 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full -z-10" />

                    <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">
                        Knowledge Base
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
                        Modern Lead Generation
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-8 leading-relaxed">
                        Strategies, guides, and insights to help you close more deals in the age of intent data.
                    </p>
                </section>

                {/* Blog Grid */}
                <section className="container mx-auto px-4 mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogData.map((post, i) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
                                <GlassCard className="h-full flex flex-col group-hover:border-blue-500/30 transition-colors">
                                    <div className="mb-4">
                                        <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-xs font-bold uppercase tracking-wider">
                                            {post.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                        {post.summary}
                                    </p>
                                    <div className="flex justify-between items-center pt-4 border-t border-white/5">
                                        <span className="text-xs text-slate-500 flex items-center gap-1">
                                            <BookOpen size={12} />
                                            {post.readTime}
                                        </span>
                                        <span className="text-sm font-bold text-blue-500 flex items-center gap-1">
                                            Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </GlassCard>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Newsletter */}
                <section className="container mx-auto px-4 text-center">
                    <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-12 backdrop-blur-sm relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent pointer-events-none" />

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-blue-400 mx-auto mb-6">
                                <Mail size={32} />
                            </div>
                            <h2 className="font-heading text-3xl font-bold text-white mb-4">
                                Get Weekly Insights
                            </h2>
                            <p className="text-slate-400 mb-8 text-lg">
                                Join 15,000+ marketers and sales pros receiving our weekly intent data trends.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <input
                                    type="email"
                                    placeholder="Enter your work email"
                                    className="px-6 py-4 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-full sm:w-80"
                                />
                                <GlowButton>Subscribe</GlowButton>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
