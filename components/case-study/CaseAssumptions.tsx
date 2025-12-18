"use client";

import { motion } from "framer-motion";

interface CaseAssumptionsProps {
  assumptions: string[];
}

export function CaseAssumptions({ assumptions }: CaseAssumptionsProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="scroll-mt-20"
    >
      <h2 className="text-display-lg mb-8">Key Assumptions</h2>
      <ul className="space-y-3 text-base leading-relaxed text-muted-foreground">
        {assumptions.map((assumption, index) => (
          <li key={index} className="flex items-start">
            <span className="text-muted-foreground/60 mr-3 mt-1.5">•</span>
            <span>{assumption}</span>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}

