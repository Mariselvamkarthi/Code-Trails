"use client";

import { motion } from "framer-motion";

interface CaseComparisonProps {
  before: string[];
  after: string[];
}

export function CaseComparison({ before, after }: CaseComparisonProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="scroll-mt-20"
    >
      <h2 className="text-display-lg mb-8">Before vs After (UX Perspective)</h2>
      <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
        <div>
          <h3 className="text-display-sm text-foreground mb-4 font-semibold">Before</h3>
          <ul className="space-y-3 text-base leading-relaxed text-muted-foreground">
            {before.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-muted-foreground/60 mr-3 mt-1.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-display-sm text-foreground mb-4 font-semibold">After</h3>
          <ul className="space-y-3 text-base leading-relaxed text-muted-foreground">
            {after.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-muted-foreground/60 mr-3 mt-1.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}

