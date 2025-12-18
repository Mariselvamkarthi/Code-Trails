"use client";

import { useEffect } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Always apply dark mode
    document.documentElement.classList.add("dark");
    // Remove any light mode class if present
    document.documentElement.classList.remove("light");
  }, []);

  return <>{children}</>;
}

