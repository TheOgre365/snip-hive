"use client";

import { Button } from "@/components/ui/button";
import { LayoutGrid, Plus } from "lucide-react";
import Link from "next/link";

export default function Dashboard({ user }: { user: any }) {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Welcome back, {user.user_metadata.full_name?.split(" ")[0] || "Developer"} 👋
          </h1>
        </div>
        
        <div className="flex items-center gap-3">
            {/* LINK TO THE NEW VIEW PAGE */}
            <Link href="/my-snippets">
                <Button variant="outline" className="gap-2">
                    <LayoutGrid className="w-4 h-4" /> Your Snippets
                </Button>
            </Link>

            {/* LINK TO THE FORM PAGE */}
            <Link href="/create">
                <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                    <Plus className="mr-2 h-4 w-4" /> Create Snippet
                </Button>
            </Link>
        </div>
      </div>
      
      {/* Simple Welcome content */}
      <div className="border-2 border-dashed border-slate-200 rounded-xl p-12 text-center bg-slate-50/50 min-h-[400px] flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold text-slate-900">Ready to code?</h3>
          <p className="text-slate-500 max-w-sm mt-2">
            Click "Create Snippet" to add code, or "Your Snippets" to view your library.
          </p>
      </div>
    </div>
  );
}