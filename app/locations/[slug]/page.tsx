import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GlowButton } from "@/components/GlowButton";
import citiesData from "@/data/cities.json";
import { MapPin, TrendingUp, Users } from "lucide-react";

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
        <div className="bg-slate-950 min-h-screen">
            <Navbar />
            <main className="pt-32 pb-20">

                {/* Hero */}
                <section className="container mx-auto px-4 text-center mb-24 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full -z-10" />
                    <div className="absolute top-20 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[80px] rounded-full -z-10" />

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                        <MapPin size={16} />
                        Local Intelligence: {city.name}, {city.state}
                    </div>

                    <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                        Dominate the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">{city.name}</span> Market
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-8 leading-relaxed">
                        Stop competing for the same recycled leads in {city.name}.
                        Identify {Math.floor(Math.random() * 500) + 100}+ exclusive opportunities this week.
                    </p>

                    <GlowButton>See {city.name} Heatmap</GlowButton>
                </section>

                {/* Stats Grid */}
                <section className="container mx-auto px-4 mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
                                <Users size={24} />
                            </div>
                            <div className="text-3xl font-bold text-white mb-1">~{Math.floor(city.population / 20).toLocaleString()}</div>
                            <div className="text-sm text-slate-500 uppercase tracking-wider">Active Buyers</div>
                        </div>
                        <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                                <TrendingUp size={24} />
                            </div>
                            <div className="text-3xl font-bold text-white mb-1">High</div>
                            <div className="text-sm text-slate-500 uppercase tracking-wider">Competition Level</div>
                        </div>
                        <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4">
                                <MapPin size={24} />
                            </div>
                            <div className="text-3xl font-bold text-white mb-1">{city.state}</div>
                            <div className="text-sm text-slate-500 uppercase tracking-wider">Top Region</div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
