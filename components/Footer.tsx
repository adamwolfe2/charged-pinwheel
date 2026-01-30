import Link from "next/link";
import verticalsData from "@/data/verticals.json";
import citiesData from "@/data/cities.json";

export function Footer() {
    const featuredVerticals = verticalsData?.slice(0, 6) || [];
    const featuredCities = citiesData?.slice(0, 6) || [];

    return (
        <footer className="border-t border-white/5 bg-slate-950 pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">

                    {/* Brand/Mission */}
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="font-heading text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                            Cursive
                        </h2>
                        <p className="text-slate-400 leading-relaxed max-w-sm">
                            The verticalized buyer-intent engine. We track behavior across the B2B web to identify companies researching your solution right now.
                        </p>
                        <div className="flex gap-4 text-slate-500">
                            {/* Social placeholders */}
                            <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-blue-500/50 hover:text-blue-400 transition-all cursor-pointer">𝕏</div>
                            <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-blue-500/50 hover:text-blue-400 transition-all cursor-pointer">In</div>
                        </div>
                    </div>

                    {/* Platform Links */}
                    <div className="lg:col-span-1">
                        <h4 className="font-bold text-white mb-6">Platform</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><Link href="/marketplace-preview" className="hover:text-blue-400 transition-colors">Marketplace</Link></li>
                            <li><Link href="/crm-demo" className="hover:text-blue-400 transition-colors">Growth Engine</Link></li>
                            <li><Link href="/partner/demo" className="hover:text-blue-400 transition-colors">Partner Network</Link></li>
                            <li><Link href="/pricing" className="hover:text-blue-400 transition-colors">Pricing</Link></li>
                        </ul>
                    </div>

                    {/* Verticals */}
                    <div className="lg:col-span-1">
                        <h4 className="font-bold text-white mb-6">Industries</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            {featuredVerticals.map(v => (
                                <li key={v.slug}>
                                    <Link href={`/verticals/${v.slug}`} className="hover:text-blue-400 transition-colors">{v.title}</Link>
                                </li>
                            ))}
                            <li><Link href="/verticals" className="text-blue-500 hover:text-blue-400 font-medium transition-colors">View All →</Link></li>
                        </ul>
                    </div>

                    {/* Cities */}
                    <div className="lg:col-span-1">
                        <h4 className="font-bold text-white mb-6">Locations</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            {featuredCities.map(c => (
                                <li key={c.slug}>
                                    <Link href={`/locations/${c.slug}`} className="hover:text-blue-400 transition-colors">{c.name}</Link>
                                </li>
                            ))}
                            <li><Link href="/locations" className="text-blue-500 hover:text-blue-400 font-medium transition-colors">View All →</Link></li>
                        </ul>
                    </div>

                    {/* Comparison */}
                    <div className="lg:col-span-1">
                        <h4 className="font-bold text-white mb-6">Compare</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><Link href="/compare/homeadvisor" className="hover:text-blue-400 transition-colors">vs HomeAdvisor</Link></li>
                            <li><Link href="/compare/zoominfo" className="hover:text-blue-400 transition-colors">vs ZoomInfo</Link></li>
                            <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Resources</Link></li>
                            <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
                    <p>© 2026 Cursive Inc. All rights reserved.</p>
                    <p>System Status: <span className="text-green-500 font-medium">● Operational</span></p>
                </div>
            </div>
        </footer>
    );
}
