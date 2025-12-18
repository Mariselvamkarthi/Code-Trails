"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getAllCaseStudies } from "@/data/caseStudies";
import { staggerContainer, scrollReveal, arrowSlide } from "@/lib/motion";

export default function Work() {
  const caseStudies = getAllCaseStudies();

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-24 md:py-32">
      <motion.div
        initial={scrollReveal.hidden}
        animate={scrollReveal.visible}
        className="mb-12 sm:mb-16 md:mb-20"
      >
        <h1 className="text-display-xl mb-4">Selected Work — Complex Systems Simplified</h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
          Case studies from fintech and B2B product design projects.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="space-y-12 sm:space-y-16"
      >
        {caseStudies.map((caseStudy) => (
          <motion.div
            key={caseStudy.slug}
            initial={scrollReveal.hidden}
            whileInView={scrollReveal.visible}
            viewport={{ once: true, margin: "-50px" }}
            className="group"
          >
            <Link
              href={`/work/${caseStudy.slug}`}
              className="block py-6 sm:py-8 border-b border-border hover:border-foreground/20 transition-colors duration-200 min-h-[44px]"
            >
              <div className="max-w-4xl">
                <div className="mb-3 sm:mb-4">
                  <h2 className="text-display-md mb-2 group-hover:text-primary transition-colors duration-200">
                    {caseStudy.title}
                  </h2>
                  {caseStudy.subtitle && (
                    <p className="text-base sm:text-lg text-muted-foreground mb-3 sm:mb-4">
                      {caseStudy.subtitle}
                    </p>
                  )}
                </div>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                  {caseStudy.positioning}
                </p>

                <motion.span
                  className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200 inline-flex items-center gap-1 min-h-[44px]"
                  initial="rest"
                  whileHover="hover"
                  variants={arrowSlide}
                >
                  View Case Study
                  <span className="inline-block">→</span>
                </motion.span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

