"use client";

import { motion } from "framer-motion";

interface ImagePlaceholderProps {
  label?: string;
  aspectRatio?: "16:9" | "4:3" | "1:1" | "split";
  size?: "small" | "medium" | "large" | "full";
  className?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function ImagePlaceholder({
  label = "UI Preview",
  aspectRatio = "16:9",
  size = "medium",
  className = "",
  beforeLabel,
  afterLabel,
}: ImagePlaceholderProps) {
  const sizeClasses = {
    small: "h-32 sm:h-40",
    medium: "h-48 sm:h-64",
    large: "h-64 sm:h-80",
    full: "h-64 sm:h-96",
  };

  const aspectClasses = {
    "16:9": "aspect-video",
    "4:3": "aspect-[4/3]",
    "1:1": "aspect-square",
    split: "",
  };

  if (aspectRatio === "split") {
    return (
      <div className={`grid grid-cols-2 gap-4 ${className}`}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-muted rounded-sm flex items-center justify-center min-h-[200px] sm:min-h-[300px]"
        >
          <div className="text-center">
            <p className="text-xs sm:text-sm text-muted-foreground/60 uppercase tracking-wider mb-2">
              {beforeLabel || "Before"}
            </p>
            <p className="text-sm sm:text-base text-muted-foreground/40">Concept</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-muted rounded-sm flex items-center justify-center min-h-[200px] sm:min-h-[300px]"
        >
          <div className="text-center">
            <p className="text-xs sm:text-sm text-muted-foreground/60 uppercase tracking-wider mb-2">
              {afterLabel || "After"}
            </p>
            <p className="text-sm sm:text-base text-muted-foreground/40">Concept</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${aspectClasses[aspectRatio]} ${sizeClasses[size]} bg-muted rounded-sm flex items-center justify-center ${className}`}
    >
      <div className="text-center">
        <p className="text-xs sm:text-sm text-muted-foreground/60 uppercase tracking-wider mb-2">
          {label}
        </p>
        <p className="text-sm sm:text-base text-muted-foreground/40">Placeholder</p>
      </div>
    </motion.div>
  );
}

