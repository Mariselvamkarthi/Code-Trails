import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected case studies from fintech and B2B product design projects. Complex systems simplified through clarity-driven UX.",
  openGraph: {
    title: `Work | ${SITE_CONFIG.name}`,
    description: "Selected case studies from fintech and B2B product design projects.",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

