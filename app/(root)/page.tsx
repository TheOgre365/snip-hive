import Dashboard from "@/components/shared/Dashboard";
import Hero from "@/components/shared/Hero";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  // 1. Check if user is logged in
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // 2. If User exists -> Show Dashboard
  if (user) {
    return <Dashboard user={user} />;
  }

  // 3. If No User -> Show Marketing Hero
  return <Hero />;
}