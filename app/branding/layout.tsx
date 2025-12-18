import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Branding & Visual Systems",
  description: "Brand systems that support product clarity, trust, and consistency across digital platforms. Branding work integrated with UX and product thinking.",
  openGraph: {
    title: `Branding & Visual Systems | ${SITE_CONFIG.name}`,
    description: "Brand systems that support product clarity, trust, and consistency across digital platforms.",
  },
};

export default function BrandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

