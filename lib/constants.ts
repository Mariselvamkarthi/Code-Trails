/**
 * Application-wide constants
 */

export const SITE_CONFIG = {
  name: "Mariselvam",
  title: "Mariselvam | UI/UX Designer",
  description: "Professional portfolio of Mariselvam - UI/UX Designer specializing in fintech and B2B product design.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://mariselvam.com",
  author: "Mariselvam",
  email: "contact@mariselvam.com",
  linkedin: "https://linkedin.com/in/mariselvam",
} as const;

export type NavigationItem = {
  readonly name: string;
  readonly href: string;
};

export const NAVIGATION: readonly NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Branding", href: "/branding" },
  { name: "About", href: "/about" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
] as const;

export const SOCIAL_LINKS = {
  linkedin: SITE_CONFIG.linkedin,
  behance: "https://behance.net/mariselvam",
  email: `mailto:${SITE_CONFIG.email}`,
} as const;

