"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export function SubmitButton({ text, loadingText }: { text: string, loadingText: string }) {
  const { pending } = useFormStatus();

  return (
    <Button 
      disabled={pending} 
      type="submit" 
      className="w-full h-11 text-base bg-blue-600 hover:bg-blue-700"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {loadingText}
        </>
      ) : (
        text
      )}
    </Button>
  );
}
