"use client";

import { motion } from "framer-motion";

interface CaseCollaborationProps {
  content: string;
}

export function CaseCollaboration({ content }: CaseCollaborationProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="scroll-mt-20"
    >
      <h2 className="text-display-lg mb-8">Collaboration & Technical Awareness</h2>
      <div className="text-base leading-relaxed text-muted-foreground">
        <p className="leading-8">{content}</p>
      </div>
    </motion.section>
  );
}

