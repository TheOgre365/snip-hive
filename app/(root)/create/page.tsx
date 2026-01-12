"use client";

import { SubmitButton } from "@/components/shared/SubmitButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";
import { createSnippet } from "./actions";

export default function CreateSnippetPage() {
  const [state, dispatch] = useActionState(createSnippet, undefined);

  return (
    <div className="container mx-auto max-w-2xl py-10 px-4">
      <div className="mb-8 flex items-center gap-4">
        <Link href="/">
            <Button variant="ghost" size="icon"><ArrowLeft className="w-5 h-5" /></Button>
        </Link>
        <div>
            <h1 className="text-2xl font-bold text-slate-900">Create New Snippet</h1>
            <p className="text-slate-500">Share your code with the world.</p>
        </div>
      </div>

      {state?.error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-600">
          <AlertCircle className="w-5 h-5" />{state.error}
        </div>
      )}

      <form action={dispatch} className="space-y-6">
        <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Title</label>
            <Input name="title" placeholder="e.g. Center a Div" required />
        </div>
        
        <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Language</label>
            <select name="language" className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm">
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
            </select>
        </div>

        <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Code</label>
            <Textarea name="code" placeholder="// Type code here..." className="min-h-[300px] font-mono bg-slate-950 text-slate-50" required />
        </div>

        <div className="pt-4">
            <SubmitButton text="Share Snippet" loadingText="Publishing..." />
        </div>
      </form>
    </div>
  );
}