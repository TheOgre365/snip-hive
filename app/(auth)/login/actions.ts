"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Update the login function signature to accept prevState
// Update the login function signature to accept prevState
export async function login(prevState: any, formData: FormData) {
  const supabase = await createClient();

  // 1. Get data
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // 2. Attempt Login
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.log("Login Error:", error.message);
    return { error: error.message }; // Send error to UI
  }

  // 3. If successful, redirect
  revalidatePath("/", "layout");
  redirect("/");
}

// Update the signup function signature
export async function signup(prevState: any, formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const fullName = formData.get("fullName") as string;

  // 1. Validate inputs immediately
  if (!email || !password || !fullName) {
    return { error: "Please fill in all fields." };
  }
  if (password.length < 6) {
    return { error: "Password must be at least 6 characters." };
  }

  const data = {
    full_name: fullName,
    avatar_url: `https://api.dicebear.com/9.x/avataaars/svg?seed=${email}`,
  };

  // 2. Try to Sign Up
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: { data },
  });

  if (error) {
    console.error("Signup Error:", error.message); // This helps you debug in terminal
    return { error: error.message }; // This sends the error to the UI
  }

  // 3. Success
  revalidatePath("/", "layout");
  redirect("/");
}
export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/login");
}