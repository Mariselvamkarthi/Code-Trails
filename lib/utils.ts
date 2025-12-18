/**
 * Utility functions
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with proper conflict resolution
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format date for display
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
}

/**
 * Generate page title
 */
export function generatePageTitle(pageTitle?: string): string {
  if (pageTitle) {
    return `${pageTitle} | ${process.env.NEXT_PUBLIC_SITE_NAME || "Mariselvam"}`;
  }
  return process.env.NEXT_PUBLIC_SITE_NAME || "Mariselvam | UI/UX Designer";
}

