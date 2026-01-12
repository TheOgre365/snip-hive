"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createSnippet(prevState: any, formData: FormData) {
  const supabase = await createClient();

  // 1. Get the current user
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return { error: "You must be logged in to create a snippet." };
  }

  // 2. Get form data
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;
  const language = formData.get("language") as string;
  const description = formData.get("description") as string;

  // 3. Validation
  if (!title || !code) {
    return { error: "Title and Code are required." };
  }

  // 4. Insert into Database
  const { error } = await supabase.from("snippets").insert({
    title,
    code,
    language,
    description,
    user_id: user.id, // Important: Link to the user!
  });

  if (error) {
    return { error: error.message };
  }

  // 5. Success! Go back home
  revalidatePath("/");
  redirect("/");
}