"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, MapPin, Building2, DollarSign, Search, CheckCircle2 } from "lucide-react";
import leadsData from "@/data/marketplace_mock.json";

// Types
interface Lead {
    id: string;
    company_name: string;
    industry: string;
    location: string;
    price: number;
    enrichment_score: number;
    intent_signal: string;
    posted_at: string;
}

export function MarketplaceDemo() {
    const [filterIndustry, setFilterIndustry] = useState("All");
    const [selectedLeads, setSelectedLeads] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState("");

    const industries = ["All", "Healthcare", "Legal", "HVAC", "Technology", "Construction"];

    const filteredLeads = leadsData.filter((lead: Lead) => {
        const matchIndustry = filterIndustry === "All" || lead.industry === filterIndustry;
        const matchSearch =
            lead.company_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            lead.location.toLowerCase().includes(searchQuery.toLowerCase());
        return matchIndustry && matchSearch;
    });

    const toggleLead = (id: string) => {
        setSelectedLeads((prev) =>
            prev.includes(id) ? prev.filter((l) => l !== id) : [...prev, id]
        );
    };

    return (
        <div className="w-full max-w-6xl mx-auto p-4 space-y-8 min-h-screen">
            {/* Header / Controls */}
            <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
                <div>
                    <h2 className="text-3xl font-heading font-bold text-white mb-2">Live Marketplace</h2>
                    <p className="text-slate-400">Real-time buyer intent signals, enriched and ready to close.</p>
                </div>

                <div className="flex items-center gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-white/10 backdrop-blur-sm">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search territory..."
                            className="bg-transparent border-none text-sm text-white pl-9 pr-4 py-2 w-48 focus:ring-0 placeholder:text-slate-600"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="h-6 w-[1px] bg-white/10" />
                    <div className="flex gap-1">
                        {industries.slice(0, 3).map(ind => (
                            <button
                                key={ind}
                                onClick={() => setFilterIndustry(ind)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${filterIndustry === ind
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                                    }`}
                            >
                                {ind}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
                <AnimatePresence>
                    {filteredLeads.map((lead: Lead) => (
                        <motion.div
                            layout
                            key={lead.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            className={`
                relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden group
                ${selectedLeads.includes(lead.id)
                                    ? "bg-blue-600/10 border-blue-500/50 shadow-xl shadow-blue-500/10"
                                    : "bg-slate-900/60 border-white/5 hover:border-white/10 hover:bg-slate-900/80"}
              `}
                            onClick={() => toggleLead(lead.id)}
                        >
                            {/* Selection Ring */}
                            <div className={`absolute top-4 right-4 h-6 w-6 rounded-full border-2 flex items-center justify-center transition-all ${selectedLeads.includes(lead.id)
                                    ? "bg-blue-500 border-blue-500 scale-110"
                                    : "border-slate-600 group-hover:border-slate-500"
                                }`}>
                                {selectedLeads.includes(lead.id) && <CheckCircle2 className="w-4 h-4 text-white" />}
                            </div>

                            {/* Content */}
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border border-white/5 text-2xl">
                                        {lead.company_name.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-100 group-hover:text-blue-200 transition-colors">{lead.company_name}</h3>
                                        <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                                            <MapPin className="w-3 h-3" />
                                            {lead.location}
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2 text-xs">
                                    <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                                        <span className="text-slate-500 block mb-0.5">Industry</span>
                                        <span className="text-slate-300 font-medium">{lead.industry}</span>
                                    </div>
                                    <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                                        <span className="text-slate-500 block mb-0.5">Intent Focus</span>
                                        <span className="text-slate-300 font-medium truncate">{lead.intent_signal}</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                                        <span>Posted {new Date(lead.posted_at).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex items-center text-emerald-400 font-bold">
                                        <DollarSign className="w-3.5 h-3.5" />
                                        {lead.price}
                                    </div>
                                </div>
                            </div>

                            {/* Gloss */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Floating Checkout */}
            <AnimatePresence>
                {selectedLeads.length > 0 && (
                    <motion.div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        exit={{ y: 100 }}
                        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 bg-slate-900 border border-t border-white/10 shadow-2xl rounded-2xl p-4 flex items-center gap-6 pr-6 backdrop-blur-xl"
                    >
                        <div>
                            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Selected</div>
                            <div className="text-2xl font-bold text-white font-heading">{selectedLeads.length} Leads</div>
                        </div>
                        <div className="h-8 w-[1px] bg-white/10" />
                        <div>
                            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Total</div>
                            <div className="text-2xl font-bold text-emerald-400 font-heading">
                                ${selectedLeads.reduce((acc, id) => {
                                    const l = leadsData.find((item: Lead) => item.id === id);
                                    return acc + (l ? l.price : 0);
                                }, 0)}
                            </div>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95 ml-4">
                            Unlock Data
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
