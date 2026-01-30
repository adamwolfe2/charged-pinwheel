"use client";

import { motion } from "framer-motion";
import { MoreHorizontal, Plus, DollarSign, Calendar, User } from "lucide-react";
import mockData from "@/data/crm_mock.json";

interface Deal {
    id: string;
    company: string;
    value: number;
    stage: string;
    owner: string;
    last_activity: string;
}

const stages = [
    { id: "new", label: "New Leads", color: "bg-blue-500" },
    { id: "contacted", label: "Contacted", color: "bg-purple-500" },
    { id: "proposal", label: "Proposal Sent", color: "bg-orange-500" },
    { id: "closed", label: "Closed Won", color: "bg-emerald-500" },
];

export function CRMDemo() {
    return (
        <div className="w-full h-[800px] overflow-hidden bg-slate-950 rounded-3xl border border-slate-800 flex flex-col shadow-2xl">

            {/* Toolbar */}
            <div className="h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-900/50 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                    <h2 className="font-heading font-bold text-slate-200">Pipeline</h2>
                    <div className="h-4 w-[1px] bg-slate-700" />
                    <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="h-8 w-8 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-xs text-slate-400">
                                <User size={12} />
                            </div>
                        ))}
                    </div>
                </div>
                <button className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg flex items-center gap-2 transition-all">
                    <Plus size={16} /> New Deal
                </button>
            </div>

            {/* Kanban Board */}
            <div className="flex-1 overflow-x-auto p-6">
                <div className="flex gap-6 min-w-max h-full">
                    {stages.map((stage) => {
                        const deals = mockData.filter((d: Deal) => d.stage === stage.id);
                        const stageValue = deals.reduce((acc, d) => acc + d.value, 0);

                        return (
                            <div key={stage.id} className="w-80 flex flex-col gap-4">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${stage.color}`} />
                                        <span className="font-medium text-slate-300 text-sm">{stage.label}</span>
                                        <span className="text-slate-500 text-xs bg-slate-900 px-2 py-0.5 rounded-full">{deals.length}</span>
                                    </div>
                                    <span className="text-xs font-mono text-slate-500">${stageValue.toLocaleString()}</span>
                                </div>

                                {/* Drop Zone */}
                                <div className="flex-1 bg-slate-900/30 rounded-xl p-2 space-y-3 border border-slate-800/50">
                                    {deals.map((deal: Deal, i) => (
                                        <motion.div
                                            key={deal.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.05 }}
                                            whileHover={{ y: -2, scale: 1.02 }}
                                            className="bg-slate-800/80 p-4 rounded-lg border border-slate-700/50 shadow-sm cursor-grab active:cursor-grabbing group hover:border-slate-600"
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="font-medium text-slate-200 text-sm">{deal.company}</span>
                                                <button className="text-slate-600 hover:text-slate-400">
                                                    <MoreHorizontal size={14} />
                                                </button>
                                            </div>
                                            <div className="flex items-center gap-1 text-slate-400 text-xs mb-3">
                                                <DollarSign size={12} className="text-emerald-500" />
                                                <span className="font-mono text-emerald-400">{deal.value.toLocaleString()}</span>
                                            </div>
                                            <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
                                                <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                                                    <Calendar size={10} />
                                                    {new Date(deal.last_activity).toLocaleDateString()}
                                                </div>
                                                <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px] font-bold">
                                                    {deal.owner.charAt(0)}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                    {/* Empty State visual */}
                                    <div className="h-24 rounded-lg border-2 border-dashed border-slate-800/50 flex items-center justify-center text-slate-700 text-xs font-medium">
                                        Drop to move
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
