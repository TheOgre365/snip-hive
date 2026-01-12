import { signOut } from '@/app/(auth)/login/actions'; // Import the Logout action
import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase/server'; // Import Supabase
import { Code2, LogOut, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default async function Navbar() {
  // 1. Check if user is logged in
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <nav className="border-b bg-white py-3 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          {/* Using the text logo option since it's cleaner for now */}
          <div className="p-2 bg-slate-900 rounded-lg">
            <Code2 className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">
            Snip<span className="text-blue-600">Hive</span>
          </span>
        </Link>

        {/* Action Section (Dynamic) */}
        <div className="flex items-center gap-4">
          
          {user ? (
            // OPTION A: If User is Logged In -> Show Profile & Logout
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-600 hidden md:block">
                {user.user_metadata.full_name || user.email}
              </span>
              
              <form action={signOut}>
                <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </form>
              
              <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden border border-slate-300">
                 {/* Show Avatar if it exists, otherwise show Icon */}
                 {user.user_metadata.avatar_url ? (
                   <Image 
                     src={user.user_metadata.avatar_url} 
                     alt="Avatar" 
                     width={32} 
                     height={32} 
                   />
                 ) : (
                   <div className="h-full w-full flex items-center justify-center">
                     <User className="w-4 h-4 text-slate-500" />
                   </div>
                 )}
              </div>
            </div>
          ) : (
            // OPTION B: If No User -> Show Sign Up (Priority)
            <div className="flex items-center gap-4">
               {/* Small Login Link for existing users */}
               <Link href="/login" className="text-sm font-medium text-slate-700 hover:text-blue-600 hidden md:block">
                 Log in
               </Link>
               
               {/* Main Sign Up Button */}
               <Link href="/signup">
                 <Button>Sign Up</Button>
               </Link>
            </div>
          )}

        </div>
      </div>
    </nav>
  );
}