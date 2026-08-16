import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Sparkles, Layers, Send } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#030305] text-[#f4f4f5] flex items-center justify-center p-6 relative overflow-hidden selection:bg-[#a461d8] selection:text-white">
      {/* Background ambient lighting effects */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#3c096c]/30 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-1/4 w-[350px] h-[250px] bg-[#a461d8]/15 rounded-full blur-[100px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-xl w-full text-center relative z-10 p-8 sm:p-12 rounded-3xl border border-white/10 bg-[#09090e]/80 backdrop-blur-xl shadow-2xl shadow-[#3c096c]/20">
        {/* Glowing Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest text-[#a461d8] uppercase font-mono mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Error 404 • Destination Unknown</span>
        </div>

        {/* 404 Big Heading */}
        <h1 className="text-7xl sm:text-9xl font-extrabold tracking-tight bg-gradient-to-b from-white via-zinc-200 to-zinc-600 bg-clip-text text-transparent mb-2">
          404
        </h1>

        {/* Serif Subheading */}
        <h2 className="text-2xl sm:text-3xl font-serif italic text-zinc-300 mb-4">
          Looks like this page drifted off course
        </h2>

        <p className="text-sm sm:text-base text-zinc-400 max-w-md mx-auto mb-8 leading-relaxed">
          The page or route you are attempting to reach does not exist or has been relocated to our unified experience.
        </p>

        {/* Navigation Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a461d8] to-[#6a11cb] text-white font-medium text-sm transition-all duration-300 hover:opacity-90 hover:scale-[1.02] shadow-lg shadow-[#a461d8]/25"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 font-medium text-sm transition-all duration-300 hover:scale-[1.02]"
          >
            <Layers className="w-4 h-4" />
            <span>Explore Services</span>
          </Link>

          <Link
            href="/#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 font-medium text-sm transition-all duration-300 hover:scale-[1.02]"
          >
            <Send className="w-4 h-4" />
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
