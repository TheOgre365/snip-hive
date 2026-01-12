"use client";

import { SubmitButton } from "@/components/shared/SubmitButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { AlertCircle, ArrowLeft, Github, KeyRound, Mail, Terminal } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react"; // The new Hook
import { login } from "./actions";

export default function LoginPage() {
  // Hook the login action to state so we can see errors
  const [state, dispatch] = useActionState(login, undefined);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full min-h-screen grid lg:grid-cols-2">
      
      {/* LEFT SIDE: Visuals */}
      <div className="hidden lg:flex flex-col justify-between bg-slate-900 text-white p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <div className="p-1 bg-white/10 rounded-md"><Terminal className="w-5 h-5" /></div>
            SnipHive
          </Link>
        </div>

        <div className="relative z-10 space-y-6">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                <h2 className="text-4xl font-bold leading-tight">Code better, <br /><span className="text-blue-400">together.</span></h2>
                <p className="mt-4 text-slate-400 text-lg max-w-md">Join the community of developers sharing snippets.</p>
            </motion.div>
        </div>
        <div className="relative z-10 text-sm text-slate-500">© 2026 SnipHive Inc.</div>
      </div>

      {/* RIGHT SIDE: Login Form */}
      <div className="flex items-center justify-center p-8 bg-white relative">
        <Link href="/" className="absolute top-8 left-8 lg:hidden">
            <ArrowLeft className="w-6 h-6 text-slate-600" />
        </Link>

        <motion.div 
            initial="hidden" animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="w-full max-w-md space-y-8"
        >
            <motion.div variants={fadeInUp} className="text-center lg:text-left">
                <h1 className="text-3xl font-bold text-slate-900">Welcome back</h1>
                <p className="mt-2 text-slate-600">Enter your credentials to access your stash.</p>
            </motion.div>

            {/* ERROR ALERT BOX - This will now show because we used useActionState! */}
            {state?.error && (
              <div className="p-3 rounded-md bg-red-50 border border-red-200 flex items-center gap-2 text-red-600 text-sm">
                <AlertCircle className="w-4 h-4" />
                {state.error}
              </div>
            )}

            {/* FORM - Uses 'dispatch' instead of dumb action */}
            <form action={dispatch} className="space-y-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Email</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                        <Input name="email" type="email" placeholder="dev@example.com" className="pl-10 h-11" required />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Password</label>
                    <div className="relative">
                        <KeyRound className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                        <Input name="password" type="password" placeholder="••••••••" className="pl-10 h-11" required />
                    </div>
                </div>

                {/* Smart Button handles loading state */}
                <SubmitButton text="Log In" loadingText="Signing In..." />
            </form>

            <motion.div variants={fadeInUp}>
                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-200" /></div>
                    <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-slate-500">Or continue with</span></div>
                </div>
                <Button variant="outline" className="w-full h-11 gap-2"><Github className="w-5 h-5" /> GitHub</Button>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-center text-sm text-slate-600">
                Don't have an account? <Link href="/signup" className="font-semibold text-blue-600 hover:underline">Sign up</Link>
            </motion.p>
        </motion.div>
      </div>
    </div>
  );
}