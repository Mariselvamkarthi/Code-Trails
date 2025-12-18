"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { CaseStudyHeader } from "./CaseStudyHeader";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { scrollReveal } from "@/lib/motion";

interface CaseStudySection {
  title: string;
  content: string | ReactNode;
}

interface CaseStudyTemplateProps {
  title: string;
  subtitle?: string;
  positioning: string;
  meta: {
    role: string;
    domain: string;
    platform: string;
    duration?: string;
    market?: string;
  };
  sections: CaseStudySection[];
  outcome?: string;
}

export function CaseStudyTemplate({
  title,
  subtitle,
  positioning,
  meta,
  sections,
  outcome,
}: CaseStudyTemplateProps) {
  return (
    <article className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-24">
      {/* Header */}
      <CaseStudyHeader
        title={title}
        subtitle={subtitle}
        positioning={positioning}
        meta={meta}
      />

      {/* Sections */}
      <div className="max-w-4xl space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
        {sections.map((section, index) => (
          <motion.section
            key={`${section.title}-${index}`}
            initial={scrollReveal.hidden}
            whileInView={scrollReveal.visible}
            viewport={{ once: true, margin: "-100px" }}
            className="scroll-mt-20"
          >
            <h2 className="text-display-lg mb-6 sm:mb-8">{section.title}</h2>
            <div className="text-base leading-relaxed text-muted-foreground [&_h3]:text-display-sm [&_h3]:text-foreground [&_h3]:mb-3 [&_h3]:mt-6 [&_h3]:font-semibold [&_h4]:text-lg [&_h4]:text-foreground [&_h4]:mb-2 [&_h4]:mt-4 [&_h4]:font-medium [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-2 [&_ul]:ml-4 [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:space-y-2 [&_ol]:ml-4 [&_p]:mb-4 [&_p:last-child]:mb-0 [&_blockquote]:border-l-2 [&_blockquote]:border-border [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono">
              {typeof section.content === "string" ? (
                <p className="leading-8">{section.content}</p>
              ) : (
                section.content
              )}
            </div>
            
            {/* Conditional Image Placeholders */}
            {section.title === "Constraints & Considerations" && (
              <div className="mt-8">
                <ImagePlaceholder
                  label="System Constraints Diagram"
                  aspectRatio="16:9"
                  size="medium"
                />
              </div>
            )}
            {section.title === "UX Solution" && (
              <div className="mt-8">
                <ImagePlaceholder
                  label="Key Screen / Flow Example"
                  aspectRatio="16:9"
                  size="large"
                />
              </div>
            )}
            {section.title === "Before vs After (UX Perspective)" && (
              <div className="mt-8">
                <ImagePlaceholder
                  aspectRatio="split"
                  beforeLabel="Before"
                  afterLabel="After"
                />
              </div>
            )}
          </motion.section>
        ))}
      </div>

            {/* Outcome Section */}
            {outcome && (
              <motion.section
                initial={scrollReveal.hidden}
                whileInView={scrollReveal.visible}
                viewport={{ once: true, margin: "-100px" }}
                className="scroll-mt-20 mt-20 sm:mt-24"
              >
          <h2 className="text-display-lg mb-8">Outcome</h2>
          <div className="text-base leading-relaxed text-muted-foreground">
            <p className="leading-8">{outcome}</p>
          </div>
        </motion.section>
      )}
    </article>
  );
}

