import Dashboard from "@/components/shared/Dashboard";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import { ArrowRight, Sparkles, Terminal } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  // 1. Check if user is logged in
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // 2. If User exists -> Show Dashboard
  if (user) {
    return <Dashboard user={user} />;
  }

  // 3. If No User -> Show The Hero Page (With Signature, No Duplicate Header)
  return (
    <div className="min-h-screen bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] flex flex-col justify-center">
      
      {/* Hero Content */}
      <main className="container mx-auto flex flex-col items-center justify-center text-center px-4 -mt-20">
        
        {/* Version Badge */}
        <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-800 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
          v1.0 Public Beta is Live
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-4xl mb-6">
          Where Developers <br />
          <span className="text-blue-600">Stash & Share Code.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-slate-600 max-w-2xl mb-8 leading-relaxed">
          SnipHive is the open-source social platform for code snippets. Save your logic, star your favorites, and never lose that one function again.
        </p>

        {/* ✅ YOUR GLOWING SIGNATURE */}
        <div className="mb-10 group relative inline-block">
            {/* The background glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            
            {/* The card content */}
            <div className="relative px-6 py-3 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-purple-600 animate-pulse" />
                <span className="text-slate-600 font-medium text-sm">Created by </span>
                <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-pulse text-lg">
                    AKSHAT DARJI
                </span>
            </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/login">
            <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 h-12 px-8 text-base shadow-xl">
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          
          <Link href="/explore">
            <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-white hover:bg-slate-50">
              <Terminal className="mr-2 w-4 h-4" /> Explore Snippets
            </Button>
          </Link>
        </div>

      </main>
    </div>
  );
}