import type { Metadata } from "next";
import { CaseStudyTemplate } from "@/components/case-study/CaseStudyTemplate";
import { notFound } from "next/navigation";
import { getCaseStudyBySlug, getAllCaseStudySlugs } from "@/data/caseStudies";
import { SITE_CONFIG } from "@/lib/constants";

// Generate static params for all case studies
export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({
    slug,
  }));
}

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: PageProps): Metadata {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: caseStudy.title,
    description: caseStudy.positioning,
    openGraph: {
      title: `${caseStudy.title} | ${SITE_CONFIG.name}`,
      description: caseStudy.positioning,
      type: "article",
    },
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <CaseStudyTemplate
      title={caseStudy.title}
      subtitle={caseStudy.subtitle}
      positioning={caseStudy.positioning}
      meta={caseStudy.meta}
      sections={caseStudy.sections}
      outcome={caseStudy.outcome}
    />
  );
}
