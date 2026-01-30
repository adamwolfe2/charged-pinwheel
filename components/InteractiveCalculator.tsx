"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, Users, Target, ArrowRight } from "lucide-react";

export function InteractiveCalculator() {
    const [leadsPerMonth, setLeadsPerMonth] = useState(50);
    const [closeRate, setCloseRate] = useState(20);
    const [dealValue, setDealValue] = useState(2500);

    const projectedRevenue = leadsPerMonth * (closeRate / 100) * dealValue;

    return (
        <div className="w-full max-w-4xl mx-auto bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-heading font-bold text-white mb-4">Calculate Your ROI</h2>
                <p className="text-slate-400">See how much revenue you're missing by ignoring intent data.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Inputs */}
                <div className="space-y-8">
                    {/* Leads Slider */}
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                <Users size={16} className="text-blue-500" />
                                Monthly Leads
                            </label>
                            <span className="font-mono text-blue-400 bg-blue-500/10 px-3 py-1 rounded-lg border border-blue-500/20">{leadsPerMonth}</span>
                        </div>
                        <input
                            type="range"
                            min="10"
                            max="500"
                            value={leadsPerMonth}
                            onChange={(e) => setLeadsPerMonth(Number(e.target.value))}
                            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                        />
                    </div>

                    {/* Close Rate Slider */}
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                <Target size={16} className="text-emerald-500" />
                                Close Rate
                            </label>
                            <span className="font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">{closeRate}%</span>
                        </div>
                        <input
                            type="range"
                            min="5"
                            max="50"
                            value={closeRate}
                            onChange={(e) => setCloseRate(Number(e.target.value))}
                            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                        />
                    </div>

                    {/* Deal Value Slider */}
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                <DollarSign size={16} className="text-purple-500" />
                                Avg. Deal Value
                            </label>
                            <span className="font-mono text-purple-400 bg-purple-500/10 px-3 py-1 rounded-lg border border-purple-500/20">${dealValue.toLocaleString()}</span>
                        </div>
                        <input
                            type="range"
                            min="500"
                            max="10000"
                            step="500"
                            value={dealValue}
                            onChange={(e) => setDealValue(Number(e.target.value))}
                            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                        />
                    </div>
                </div>

                {/* Result */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white shadow-2xl shadow-blue-900/50 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20" />
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 blur-[50px] rounded-full group-hover:scale-150 transition-transform duration-700" />

                    <div className="relative z-10">
                        <p className="text-blue-100 font-medium mb-2 uppercase tracking-wider text-sm">Projected Monthly Revenue</p>
                        <motion.div
                            key={projectedRevenue}
                            initial={{ scale: 0.9, opacity: 0.5 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-4xl md:text-5xl font-heading font-bold mb-6"
                        >
                            ${projectedRevenue.toLocaleString()}
                        </motion.div>
                        <button className="w-full bg-white text-blue-900 font-bold py-3 rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                            Start Generating Revenue <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
