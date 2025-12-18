"use client";

import { motion } from "framer-motion";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { scrollReveal } from "@/lib/motion";

interface CaseStudyHeaderProps {
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
}

export function CaseStudyHeader({
  title,
  subtitle,
  positioning,
  meta,
}: CaseStudyHeaderProps) {
  return (
    <motion.header
      initial={scrollReveal.hidden}
      animate={scrollReveal.visible}
      className="mb-16 sm:mb-20"
    >
      <div className="max-w-4xl">
        {/* Domain Badge */}
        <span className="inline-block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-6">
          {meta.domain}
        </span>

        {/* Title */}
        <h1 className="text-display-xl mb-4">{title}</h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-xl text-muted-foreground mb-8">{subtitle}</p>
        )}

        {/* Positioning Statement */}
        <p className="text-lg sm:text-xl text-foreground leading-relaxed mb-10 max-w-3xl font-medium">
          {positioning}
        </p>

        {/* Optional Hero Image Placeholder */}
        <div className="mb-10">
          <ImagePlaceholder
            label="Hero Preview"
            aspectRatio="16:9"
            size="large"
          />
        </div>

        {/* Meta Information */}
        <div className="flex flex-wrap gap-6 sm:gap-8 text-sm text-muted-foreground border-t border-border pt-6">
          <div>
            <span className="font-medium text-foreground block mb-1">Role</span>
            <span>{meta.role}</span>
          </div>
          <div>
            <span className="font-medium text-foreground block mb-1">Platform</span>
            <span>{meta.platform}</span>
          </div>
          {meta.duration && (
            <div>
              <span className="font-medium text-foreground block mb-1">Duration</span>
              <span>{meta.duration}</span>
            </div>
          )}
          {meta.market && (
            <div>
              <span className="font-medium text-foreground block mb-1">Market</span>
              <span>{meta.market}</span>
            </div>
          )}
        </div>
      </div>
    </motion.header>
  );
}

