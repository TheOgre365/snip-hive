"use client";

import { Button } from "@/components/ui/button";
import { LayoutGrid, Plus } from "lucide-react";
import Link from "next/link";

export default function Dashboard({ user }: { user: any }) {
  return (
    <div className="container mx-auto p-6 space-y-8 min-h-screen flex flex-col">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Welcome back, {user.user_metadata.full_name?.split(" ")[0] || "Developer"} 👋
          </h1>
          
          {/* ✅ YOUR SIGNATURE (Moved to Top) */}
          <p className="text-slate-500 text-sm mt-1">
            Designed & Developed by <span className="font-bold text-slate-900">Akshat Darji</span> 🚀
          </p>
        </div>
        
        <div className="flex items-center gap-3">
            {/* View Snippets Button */}
            <Link href="/my-snippets">
                <Button variant="outline" className="gap-2">
                    <LayoutGrid className="w-4 h-4" /> Your Snippets
                </Button>
            </Link>

            {/* Create Snippet Button */}
            <Link href="/create">
                <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                    <Plus className="mr-2 h-4 w-4" /> Create Snippet
                </Button>
            </Link>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="flex-grow border-2 border-dashed border-slate-200 rounded-xl p-12 text-center bg-slate-50/50 flex flex-col items-center justify-center">
          <div className="bg-white p-4 rounded-full shadow-sm mb-4">
            <div className="text-4xl">🚀</div>
          </div>
          <h3 className="text-xl font-semibold text-slate-900">Ready to code?</h3>
          <p className="text-slate-500 max-w-sm mt-2">
            Click "Create Snippet" to add code, or "Your Snippets" to view your library.
          </p>
      </div>

    </div>
  );
}