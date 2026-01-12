"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] overflow-hidden bg-slate-50">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Floating Gradient Blob for aesthetics */}
      <div className="absolute top-0 left-0 right-0 h-[500px] w-full bg-gradient-to-b from-blue-100/40 to-transparent blur-3xl pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          v1.0 Public Beta is Live
        </motion.div>

        {/* Animated Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900"
        >
          Where Developers <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Stash & Share Code.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-slate-600 max-w-2xl mx-auto"
        >
          SnipHive is the open-source social platform for code snippets. 
          Save your logic, star your favorites, and never lose that one function again.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-4 justify-center"
        >
          <Link href="/login">
            <Button size="lg" className="h-12 px-8 text-base">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="h-12 px-8 text-base bg-white">
            <Code2 className="mr-2 h-4 w-4 text-slate-500" /> Explore Snippets
          </Button>
        </motion.div>
      </div>
    </div>
  );
}