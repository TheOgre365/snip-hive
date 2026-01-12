"use client";

import { SubmitButton } from "@/components/shared/SubmitButton"; // Import your new button
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { AlertCircle, ArrowLeft, Code2, KeyRound, Mail, User } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react"; // Hook for Next.js 15/16
import { signup } from "../login/actions";

export default function SignUpPage() {
  // state will hold any error returned by the server
  // dispatch is the function we call to submit the form
  const [state, dispatch] = useActionState(signup, undefined);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full min-h-screen grid lg:grid-cols-2">
      
      {/* LEFT SIDE (Same as before) */}
      <div className="hidden lg:flex flex-col justify-between bg-blue-600 text-white p-12 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500 rounded-full blur-2xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-50" />
        
        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <div className="p-1 bg-white/20 rounded-md"><Code2 className="w-5 h-5" /></div>
            SnipHive
          </Link>
        </div>

        <div className="relative z-10 space-y-6">
            <motion.h2 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-4xl font-bold leading-tight">
                Join the Hive. <br /><span className="text-blue-200">Start Snipping.</span>
            </motion.h2>
            <p className="text-blue-100 text-lg max-w-md">
                Create your free account today and get unlimited access.
            </p>
        </div>
        <div className="relative z-10 text-sm text-blue-200">© 2026 SnipHive Inc.</div>
      </div>

      {/* RIGHT SIDE: Form */}
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
                <h1 className="text-3xl font-bold text-slate-900">Create an Account</h1>
                <p className="mt-2 text-slate-600">Enter your details below to get started.</p>
            </motion.div>

            {/* ERROR ALERT BOX */}
            {state?.error && (
              <div className="p-3 rounded-md bg-red-50 border border-red-200 flex items-center gap-2 text-red-600 text-sm">
                <AlertCircle className="w-4 h-4" />
                {state.error}
              </div>
            )}

            {/* FORM */}
            <form action={dispatch} className="space-y-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Full Name</label>
                    <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                        <Input name="fullName" type="text" placeholder="John Doe" className="pl-10 h-11" required />
                    </div>
                </div>

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
                        <Input name="password" type="password" placeholder="Create a password" className="pl-10 h-11" required />
                    </div>
                </div>

                {/* New Smart Button */}
                <SubmitButton text="Sign Up" loadingText="Creating Account..." />
            </form>

            <motion.p variants={fadeInUp} className="text-center text-sm text-slate-600">
                Already have an account?{" "}
                <Link href="/login" className="font-semibold text-blue-600 hover:underline">Log in here</Link>
            </motion.p>
        </motion.div>
      </div>
    </div>
  );
}