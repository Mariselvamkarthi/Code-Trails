"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-display-xl mb-6">Something went wrong</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          An unexpected error occurred. Please try again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-primary text-primary-foreground text-sm font-medium tracking-wide rounded-sm hover:opacity-90 transition-all duration-200"
          >
            Try Again
          </button>
          <Button href="/" variant="secondary">
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}

