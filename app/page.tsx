"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CasePreviewCard } from "@/components/ui/CasePreviewCard";
import { getAllCaseStudies } from "@/data/caseStudies";
import { staggerContainer, scrollReveal } from "@/lib/motion";

export default function Home() {
  // Add error boundary for data loading
  let caseStudies: ReturnType<typeof getAllCaseStudies> = [];
  try {
    caseStudies = getAllCaseStudies();
  } catch (error) {
    console.error("Error loading case studies:", error);
    caseStudies = [];
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-24 md:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center max-w-7xl mx-auto">
          {/* Left Column: Content (Primary Focus) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center"
          >
            {/* Name */}
            <motion.div variants={scrollReveal} className="mb-6 sm:mb-7">
              <h1 className="text-display-2xl font-bold tracking-tight leading-[1.1]">
                Mariselvam
              </h1>
            </motion.div>

            {/* Role Line */}
            <motion.div variants={scrollReveal} className="mb-8 sm:mb-10">
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-normal tracking-normal leading-relaxed">
                UI/UX Designer · Product Thinker · Problem Solver
              </p>
            </motion.div>

            {/* Statement */}
            <motion.div variants={scrollReveal} className="mb-10 sm:mb-12">
              <p className="text-base sm:text-lg md:text-xl text-foreground leading-relaxed max-w-lg font-normal">
                I design <span className="font-medium text-foreground">clarity</span> for complex fintech and enterprise systems.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={scrollReveal} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button href="/work" variant="primary">
                View Work
              </Button>
              <Button href="/resume" variant="secondary">
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Image (Supporting Element) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-64 h-64 xl:w-80 xl:h-80">
              {/* Subtle background glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-muted/30 via-muted/10 to-transparent dark:from-muted/15 dark:via-muted/5 dark:to-transparent blur-2xl"></div>
              
              {/* Circular container */}
              <div className="relative w-full h-full rounded-full overflow-hidden ring-1 ring-border/30 dark:ring-border/20">
                {/* Subtle gradient overlay for reduced contrast */}
                <div className="absolute inset-0 bg-gradient-to-br from-background/5 via-transparent to-background/10 dark:from-background/10 dark:via-transparent dark:to-background/5 pointer-events-none z-10"></div>
                
                {/* Subtle noise texture overlay */}
                <div 
                  className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] mix-blend-overlay pointer-events-none z-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundSize: '100px 100px',
                  }}
                ></div>
                
                {/* Profile Image */}
                <Image
                  src="/images/profile/Mine.png"
                  alt="Mariselvam - UI/UX Designer"
                  fill
                  className="object-cover opacity-95 dark:opacity-90"
                  priority
                  sizes="(max-width: 1280px) 256px, 320px"
                />
              </div>
            </div>
          </motion.div>

          {/* Mobile: Profile Image (below content) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:hidden flex justify-center mt-8 sm:mt-10"
          >
            <div className="relative w-40 h-40 sm:w-48 sm:h-48">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-muted/20 via-muted/10 to-transparent dark:from-muted/10 dark:via-muted/5 dark:to-transparent blur-xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden ring-1 ring-border/30 dark:ring-border/20">
                <div className="absolute inset-0 bg-gradient-to-br from-background/5 via-transparent to-background/10 dark:from-background/10 dark:via-transparent dark:to-background/5 pointer-events-none z-10"></div>
                <Image
                  src="/images/profile/Mine.png"
                  alt="Mariselvam - UI/UX Designer"
                  fill
                  className="object-cover opacity-95 dark:opacity-90"
                  priority
                  sizes="(max-width: 640px) 160px, 192px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What I Do Best Section */}
      <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-display-xl mb-12 sm:mb-16 md:mb-20">What I Do Best</h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-display-md mb-4">Simplifying Complexity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Breaking down intricate financial workflows and enterprise systems into clear, 
                actionable interfaces that users can navigate with confidence.
              </p>
            </motion.div>

            <motion.div
              initial={scrollReveal.hidden}
              whileInView={scrollReveal.visible}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...scrollReveal.visible.transition, delay: 0.1 }}
            >
              <h3 className="text-display-md mb-4">Problem-First Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Starting with user problems and business goals, not trends. Every design decision 
                is grounded in research, data, and real user needs.
              </p>
            </motion.div>

            <motion.div
              initial={scrollReveal.hidden}
              whileInView={scrollReveal.visible}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...scrollReveal.visible.transition, delay: 0.15 }}
            >
              <h3 className="text-display-md mb-4">Scalable UI Systems</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building design systems and component libraries that grow with products, ensuring 
                consistency and speed across teams and features.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Featured Case Studies Section */}
      <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-24 md:py-32">
        <motion.div
          initial={scrollReveal.hidden}
          whileInView={scrollReveal.visible}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-display-xl mb-12 sm:mb-16 md:mb-20">Featured Work</h2>
          
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {caseStudies && caseStudies.length > 0 ? (
              caseStudies
                .slice(0, 4)
                .filter((caseStudy) => caseStudy) // Filter out any undefined/null
                .map((caseStudy) => {
                // Extract problem statement from first section or use positioning
                const problem =
                  caseStudy.sections.find((s) => s.title === "Problem Statement" || s.title === "Overview")
                    ?.content || caseStudy.positioning;

                return (
                  <CasePreviewCard
                    key={caseStudy.slug}
                    slug={caseStudy.slug}
                    title={caseStudy.title}
                    problem={typeof problem === "string" ? problem : caseStudy.positioning}
                    domain={caseStudy.meta.domain}
                    platform={caseStudy.meta.platform}
                  />
                );
              })
            ) : (
              <div className="col-span-2 text-center py-12">
                <p className="text-muted-foreground">No case studies available.</p>
              </div>
            )}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
