import { InfiniteCanvas } from "@/components/InfiniteCanvas";
import { Navbar } from "@/components/Navbar";
import { GlowButton } from "@/components/GlowButton";

export default function MarketplacePreview() {
    return (
        <>
            <Navbar />
            <InfiniteCanvas>
                <div className="grid grid-cols-3 gap-8 w-[1200px]">
                    {/* Mock Lead Cards */}
                    {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl hover:scale-105 transition-transform duration-300 group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
                                <div>
                                    <h4 className="font-bold text-white">Lead #{1000 + i}</h4>
                                    <p className="text-xs text-slate-400">Active 2m ago • HVAC Service</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 w-3/4 bg-slate-800 rounded-full" />
                                <div className="h-2 w-1/2 bg-slate-800 rounded-full" />
                            </div>
                            <div className="mt-6 flex justify-between items-center">
                                <div className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">High Intent</div>
                                <GlowButton className="text-xs py-1 px-3">Unlock</GlowButton>
                            </div>
                        </div>
                    ))}

                    {/* Central Node */}
                    <div className="col-start-2 col-end-2 row-start-2 row-end-2 flex items-center justify-center">
                        <div className="w-48 h-48 bg-blue-600 rounded-full blur-[80px] absolute -z-10 animate-pulse" />
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-white mb-2">Live Feed</h2>
                            <p className="text-slate-300">San Francisco, CA</p>
                        </div>
                    </div>
                </div>
            </InfiniteCanvas>
        </>
    )
}
