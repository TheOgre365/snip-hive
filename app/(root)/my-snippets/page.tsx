import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import { Code2, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

// Force fresh data every time
export const dynamic = "force-dynamic";

export default async function MySnippetsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  // Fetch Snippets
  const { data: snippets } = await supabase
    .from('snippets')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  const list = snippets || [];

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/">
          <Button variant="ghost" size="icon"><ArrowLeft className="w-5 h-5" /></Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Your Snippets</h1>
          <p className="text-slate-500">You have saved {list.length} snippets.</p>
        </div>
      </div>

      {/* THE CARD VIEW */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((snippet) => (
          <div key={snippet.id} className="flex flex-col justify-between border rounded-xl bg-white p-5 hover:shadow-lg transition-all border-slate-200">
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Code2 className="w-5 h-5" /></div>
                <span className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded-full uppercase">{snippet.language}</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-slate-900 line-clamp-1">{snippet.title}</h3>
                <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(snippet.created_at).toLocaleDateString()}
                </p>
              </div>
              <div className="bg-slate-950 rounded-md p-3 overflow-hidden h-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/90" />
                <pre className="text-xs text-slate-300 font-mono"><code>{snippet.code}</code></pre>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}