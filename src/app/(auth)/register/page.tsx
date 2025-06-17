"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to waitlist page
    router.replace("/waitlist");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 p-4">
      <div className="text-center">
        <p className="text-muted-foreground">Redirecting to waitlist...</p>
      </div>
    </div>
  );
} 