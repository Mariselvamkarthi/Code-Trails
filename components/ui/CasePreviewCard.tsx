"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { scrollReveal, cardHover, arrowSlide } from "@/lib/motion";

interface CasePreviewCardProps {
  slug: string;
  title: string;
  problem: string;
  domain?: string;
  platform?: string;
}

export function CasePreviewCard({
  slug,
  title,
  problem,
  domain,
  platform,
}: CasePreviewCardProps) {
  return (
    <motion.div
      initial={scrollReveal.hidden}
      whileInView={scrollReveal.visible}
      viewport={{ once: true, margin: "-50px" }}
      className="group"
    >
      <motion.div
        initial="rest"
        whileHover="hover"
        variants={cardHover}
        className="h-full"
      >
        <Link
          href={`/work/${slug}`}
          className="block h-full bg-card border border-border rounded-sm overflow-hidden hover:border-foreground/20 hover:shadow-lg transition-all duration-200"
        >
        <div className="flex flex-col h-full">
          {/* Image Placeholder */}
          <div className="relative overflow-hidden">
            <ImagePlaceholder
              label="UI Preview"
              aspectRatio="16:9"
              size="medium"
              className="group-hover:scale-[1.02] transition-transform duration-300"
            />
            {platform && (
              <div className="absolute top-3 right-3">
                <span className="text-xs px-2 py-1 bg-background/80 backdrop-blur-sm rounded text-muted-foreground uppercase tracking-wider">
                  {platform}
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col">
            {domain && (
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                {domain}
              </span>
            )}
            <h3 className="text-display-md mb-3 group-hover:text-primary transition-colors duration-200">
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
              {problem}
            </p>
            <div className="pt-4 border-t border-border">
              <motion.span
                className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200 inline-flex items-center gap-1"
                initial="rest"
                whileHover="hover"
                variants={arrowSlide}
              >
                View Case Study
                <span className="inline-block">→</span>
              </motion.span>
            </div>
          </div>
        </div>
      </Link>
      </motion.div>
    </motion.div>
  );
}

