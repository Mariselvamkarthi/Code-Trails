"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motionConfig, buttonPress } from "@/lib/motion";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
  ariaLabel?: string;
}

export function Button({ 
  children, 
  href, 
  variant = "primary", 
  className = "",
  ariaLabel,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-5 sm:px-6 py-3 text-sm font-medium tracking-wide rounded-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background min-h-[44px] min-w-[44px]";
  
  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:opacity-90 shadow-sm hover:shadow-md transition-shadow duration-200",
    secondary: "bg-transparent border border-border/60 text-foreground hover:border-border hover:bg-muted/50 backdrop-blur-sm transition-all duration-200",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap="pressed"
      variants={buttonPress}
      transition={motionConfig.standard}
    >
      <Link
        href={href}
        className={cn(baseStyles, variantStyles[variant], className)}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    </motion.div>
  );
}

