"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, CheckCircle2, FileText, Loader2, ArrowRight } from "lucide-react";
import { GlowButton } from "../GlowButton";

const steps = [
    { number: 1, title: "Upload Leads", desc: "CSV or Excel" },
    { number: 2, title: "Mapping", desc: "Match columns" },
    { number: 3, title: "Validation", desc: "AI Checks" },
    { number: 4, title: "Earnings", desc: "Rev Share" }
];

export function UploadWizard() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isUploading, setIsUploading] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleUpload = () => {
        setIsUploading(true);
        // Simulate upload
        let p = 0;
        const interval = setInterval(() => {
            p += 5;
            setProgress(p);
            if (p >= 100) {
                clearInterval(interval);
                setIsUploading(false);
                setCurrentStep(2);
            }
        }, 100);
    };

    return (
        <div className="max-w-4xl mx-auto">
            {/* Steps Visual */}
            <div className="flex justify-between items-center mb-12 relative">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -z-10" />
                {steps.map((step) => (
                    <div key={step.number} className="flex flex-col items-center bg-slate-950 px-4">
                        <div className={`
                            w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mb-2 transition-all duration-500 border-2
                            ${currentStep >= step.number
                                ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20"
                                : "bg-slate-900 border-slate-700 text-slate-500"}
                        `}>
                            {currentStep > step.number ? <CheckCircle2 size={20} /> : step.number}
                        </div>
                        <span className={`text-xs font-medium ${currentStep >= step.number ? "text-slate-200" : "text-slate-600"}`}>
                            {step.title}
                        </span>
                    </div>
                ))}
            </div>

            {/* Main Card */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-12 min-h-[400px] flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent pointer-events-none" />

                <AnimatePresence mode="wait">
                    {currentStep === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="w-full max-w-md"
                        >
                            <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 mx-auto mb-6">
                                <Upload size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Upload your Lead List</h3>
                            <p className="text-slate-400 mb-8">Drag and drop your CSV or Excel file here to monetize your unused leads.</p>

                            {!isUploading ? (
                                <div
                                    onClick={handleUpload}
                                    className="border-2 border-dashed border-slate-700 hover:border-blue-500/50 rounded-2xl p-10 cursor-pointer transition-all group bg-slate-950/50 hover:bg-blue-500/5"
                                >
                                    <FileText className="w-8 h-8 text-slate-500 group-hover:text-blue-400 mx-auto mb-2 transition-colors" />
                                    <p className="font-medium text-slate-300">Click to Browse</p>
                                    <p className="text-sm text-slate-500 mt-1">or drag file here</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-blue-500"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${progress}%` }}
                                        />
                                    </div>
                                    <div className="flex items-center justify-center gap-2 text-blue-400 text-sm">
                                        <Loader2 className="animate-spin w-4 h-4" />
                                        Uploading... {progress}%
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    )}

                    {currentStep === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="text-left w-full max-w-lg"
                        >
                            <h3 className="text-xl font-bold text-white mb-6 text-center">Map Columns</h3>
                            <div className="space-y-4">
                                {["Company Name", "Contact Email", "Phone Number", "Industry"].map((field) => (
                                    <div key={field} className="flex items-center justify-between p-4 bg-slate-950/80 border border-slate-800 rounded-xl">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-green-500" />
                                            <span className="text-slate-300 font-medium">{field}</span>
                                        </div>
                                        <ArrowRight className="text-slate-600" size={16} />
                                        <div className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded border border-blue-500/20">
                                            Auto-Matched
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 flex justify-center">
                                <GlowButton onClick={() => setCurrentStep(3)}>Confirm Mapping</GlowButton>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
