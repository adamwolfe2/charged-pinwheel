"use client";

import dynamic from 'next/dynamic';
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GlowButton } from "@/components/GlowButton";
import { ArrowRight, BarChart3, Globe, ShieldCheck, Zap } from "lucide-react";
import { TextReveal } from "@/components/TextReveal";

// Dynamic Imports for Performance
const Hero3D = dynamic(() => import('@/components/Hero3D').then(mod => mod.Hero3D), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-slate-950 -z-10" />
});
const StackedCards = dynamic(() => import('@/components/StackedCards').then(mod => mod.StackedCards));
const FluidBackground = dynamic(() => import('@/components/FluidBackground').then(mod => mod.FluidBackground), { ssr: false });
const InteractiveCalculator = dynamic(() => import('@/components/InteractiveCalculator').then(mod => mod.InteractiveCalculator), { ssr: false });

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background overflow-hidden">

        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 container mx-auto px-4 text-center">
          <FluidBackground />
          {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full -z-10" /> */}

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

          <div className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 font-heading text-white">
            <TextReveal delay={0.1}>Turn Intent into</TextReveal>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              <TextReveal delay={0.4}>Pipeline</TextReveal>
            </span>
          </div>

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


        {/* STACKED CARDS FEATURES */}
        <section className="bg-slate-950">
          <div className="container mx-auto px-4 py-24 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-white">
              The Operating System for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Modern Sales Teams</span>
            </h2>
          </div>
          <StackedCards items={[
            {
              title: "Marketplace Visibility",
              description: "Browse real-time intent signals from 50+ cities. See exactly who is looking for you.",
              color: "blue",
              icon: <Globe size={32} />
            },
            {
              title: "Growth Engine",
              description: "Built-in CRM to manage your pipeline from lead to close. Seamlessly integrated.",
              color: "green",
              icon: <BarChart3 size={32} />
            },
            {
              title: "Real-Time Intent",
              description: "Signals delivered in milliseconds. Beat your competitors to the lead every single time.",
              color: "purple",
              icon: <Zap size={32} />
            },
            {
              title: "Verified Contact",
              description: "Direct dials and valid emails only. No more bouncing emails or dead numbers.",
              color: "orange",
              icon: <ShieldCheck size={32} />
            }
          ]} />
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
