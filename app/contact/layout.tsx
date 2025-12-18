import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Mariselvam for design opportunities, collaborations, or project discussions.",
  openGraph: {
    title: `Contact | ${SITE_CONFIG.name}`,
    description: "Get in touch for design opportunities, collaborations, or project discussions.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

