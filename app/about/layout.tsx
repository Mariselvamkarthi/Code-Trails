import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Mariselvam's background, design philosophy, and approach to UI/UX design for fintech and B2B products.",
  openGraph: {
    title: `About | ${SITE_CONFIG.name}`,
    description: "Learn about Mariselvam's background, design philosophy, and approach to UI/UX design.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

