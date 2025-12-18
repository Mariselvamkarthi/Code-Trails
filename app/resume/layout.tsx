import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Resume",
  description: "Mariselvam's professional resume - UI/UX Designer with 9+ years of experience in fintech and B2B product design.",
  openGraph: {
    title: `Resume | ${SITE_CONFIG.name}`,
    description: "Professional resume - UI/UX Designer with 9+ years of experience.",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

