"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GlowButton } from "@/components/GlowButton";
import { ArrowRight, BarChart3, Globe, ShieldCheck, Zap } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background overflow-hidden">

        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 container mx-auto px-4 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full -z-10" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            New: Partner Network Live
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 font-heading text-white"
          >
            Turn Intent into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Pipeline
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Cursive plugs directly into your market's behavior. We identify
            companies actively researching your solution and deliver them as
            exclusive, high-intent leads.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/marketplace-preview">
              <GlowButton>Explore Marketplace</GlowButton>
            </Link>
            <Link href="/compare/zoominfo">
              <button className="px-8 py-3 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-300 font-medium transition-all">
                Compare vs ZoomInfo
              </button>
            </Link>
          </motion.div>
        </section>

        {/* BENTO GRID FEATURES */}
        <section className="py-24 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]"
          >
            {/* Large Card */}
            <div className="md:col-span-2 row-span-1 rounded-3xl p-8 bg-slate-900/50 border border-slate-800 backdrop-blur-sm relative overflow-hidden group hover:border-blue-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400">
                    <Globe size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Marketplace Visibility</h3>
                  <p className="text-slate-400 max-w-md">Browse real-time intent signals from 50+ cities. See exactly who is looking for you.</p>
                </div>
                {/* Visual Placeholder */}
                <div className="w-full h-32 bg-slate-800/50 rounded-lg border border-slate-700/50 relative overflow-hidden">
                  <div className="absolute top-4 left-4 right-4 h-2 bg-slate-700 rounded-full w-3/4" />
                  <div className="absolute top-8 left-4 right-4 h-2 bg-slate-700 rounded-full w-1/2" />
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-500/10 to-transparent" />
                </div>
              </div>
            </div>

            {/* Tall Card */}
            <div className="md:col-span-1 row-span-2 rounded-3xl p-8 bg-slate-900/50 border border-slate-800 backdrop-blur-sm relative overflow-hidden group hover:border-green-500/50 transition-all duration-500">
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 text-green-400">
                  <BarChart3 size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Growth Engine</h3>
                <p className="text-slate-400 mb-8">Built-in CRM to manage your pipeline from lead to close.</p>

                {/* Kanban Visual */}
                <div className="flex-1 flex gap-3 overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity">
                  <div className="w-full bg-slate-800/50 rounded-t-lg p-2 space-y-2">
                    <div className="w-full h-20 bg-slate-700/50 rounded" />
                    <div className="w-full h-20 bg-slate-700/50 rounded" />
                  </div>
                  <div className="w-full bg-slate-800/50 rounded-t-lg p-2 mt-8">
                    <div className="w-full h-20 bg-slate-700/50 rounded" />
                  </div>
                </div>
              </div>
            </div>

            {/* Small Card 1 */}
            <div className="md:col-span-1 row-span-1 rounded-3xl p-8 bg-slate-900/50 border border-slate-800 backdrop-blur-sm relative overflow-hidden group hover:border-purple-500/50 transition-all duration-500">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 text-purple-400">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Real-Time Intent</h3>
                <p className="text-slate-400 text-sm">Signals delivered in milliseconds.</p>
              </div>
            </div>

            {/* Small Card 2 */}
            <div className="md:col-span-1 row-span-1 rounded-3xl p-8 bg-slate-900/50 border border-slate-800 backdrop-blur-sm relative overflow-hidden group hover:border-orange-500/50 transition-all duration-500">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 text-orange-400">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Verified Contact</h3>
                <p className="text-slate-400 text-sm">Direct dials and valid emails only.</p>
              </div>
            </div>

          </motion.div>
        </section>

        {/* STATS SECTION */}
        <section className="py-20 border-y border-white/5 bg-white/2">
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Active Buyers", val: "12,000+" },
              { label: "Intent Signals/Day", val: "4.5M" },
              { label: "Cities Covered", val: "50+" },
              { label: "Avg. ROI", val: "450%" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-5xl font-bold text-white mb-2 font-heading">{stat.val}</div>
                <div className="text-slate-500 text-sm uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
