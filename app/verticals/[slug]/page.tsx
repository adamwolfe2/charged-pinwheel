import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GlowButton } from "@/components/GlowButton";
import verticalsData from "@/data/verticals.json";
import { CheckCircle2 } from "lucide-react";

// Type generation for static params
export function generateStaticParams() {
    return verticalsData.map((vertical) => ({
        slug: vertical.slug,
    }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
    const vertical = verticalsData.find(v => v.slug === params.slug);
    if (!vertical) return {};

    return {
        title: `${vertical.heroTitle} | Cursive`,
        description: vertical.description,
    };
}

export default function VerticalPage({ params }: { params: { slug: string } }) {
    const vertical = verticalsData.find((v) => v.slug === params.slug);

    if (!vertical) {
        notFound();
    }

    return (
        <div className="bg-slate-950 min-h-screen">
            <Navbar />
            <main className="pt-32 pb-20">

                {/* Dynamic Hero */}
                <section className="container mx-auto px-4 text-center mb-24 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full -z-10" />

                    <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">
                        Industry Solutions
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                        {vertical.heroTitle}
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-8 leading-relaxed">
                        {vertical.description}
                    </p>
                    <div className="flex justify-center gap-4">
                        <GlowButton>{vertical.leadMagnet}</GlowButton>
                    </div>
                </section>

                {/* Specific Features */}
                <section className="container mx-auto px-4 mb-24">
                    <h2 className="text-center font-heading text-3xl font-bold text-white mb-12">
                        Tailored Signals for <span className="text-blue-500">{vertical.title}</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {vertical.features.map((feature, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-blue-500/30 transition-all group">
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                                    <CheckCircle2 size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature}</h3>
                                <p className="text-slate-400">Exclusive proprietary data points curated specifically for the {vertical.title} sector.</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="container mx-auto px-4 text-center mb-12">
                    <div className="p-12 rounded-3xl bg-gradient-to-br from-blue-900/20 to-slate-900/50 border border-blue-500/20">
                        <h2 className="text-3xl font-bold text-white mb-4">Ready to dominate {vertical.title}?</h2>
                        <p className="text-slate-400 mb-8">Access the Cursive platform and start closing high-intent leads today.</p>
                        <GlowButton>Get Access Now</GlowButton>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
