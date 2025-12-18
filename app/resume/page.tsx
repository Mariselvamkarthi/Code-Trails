"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { resumeSummary, resumeExperiences } from "@/data/resumeContent";
import { scrollReveal } from "@/lib/motion";

// Using resume content from data file

const skills = {
  "Design": [
    "User Research",
    "Information Architecture",
    "Interaction Design",
    "Visual Design",
    "Prototyping",
    "Design Systems",
  ],
  "Tools": [
    "Figma",
    "Sketch",
    "Adobe Creative Suite",
    "Principle",
    "Framer",
  ],
  "Collaboration": [
    "Cross-functional Team Leadership",
    "Stakeholder Management",
    "Design Reviews",
    "User Testing",
  ],
};

const domains = [
  "Fintech",
  "B2B SaaS",
  "Trading Platforms",
  "Banking",
  "Document Management",
  "Enterprise Tools",
];

export default function Resume() {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-24 print:py-8">
      <motion.header
        initial={scrollReveal.hidden}
        animate={scrollReveal.visible}
        className="mb-12 sm:mb-16 print:mb-8"
      >
        <div className="max-w-4xl">
          <h1 className="text-display-xl mb-4 sm:mb-6 print:mb-4">Resume</h1>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 print:flex-row print:justify-between">
            <p className="text-base sm:text-lg text-muted-foreground print:text-base">
              {resumeSummary}
            </p>
            <div className="print:hidden">
              <Button href="/resume.pdf" variant="primary">
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="max-w-4xl space-y-12 sm:space-y-16 print:space-y-8">
        {/* Skills Summary */}
        <motion.section
          initial={scrollReveal.hidden}
          whileInView={scrollReveal.visible}
          viewport={{ once: true, margin: "-100px" }}
          className="print:break-inside-avoid"
        >
          <h2 className="text-display-lg mb-6 print:mb-4 print:text-2xl">Skills</h2>
          <div className="grid md:grid-cols-3 gap-8 sm:gap-12 print:grid-cols-3 print:gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-display-sm mb-3 print:mb-2 print:text-lg">{category}</h3>
                <ul className="space-y-2 text-muted-foreground print:text-sm">
                  {items.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Experience Timeline */}
        <motion.section
          initial={scrollReveal.hidden}
          whileInView={scrollReveal.visible}
          viewport={{ once: true, margin: "-100px" }}
          className="print:break-inside-avoid"
        >
          <h2 className="text-display-lg mb-8 print:mb-4 print:text-2xl">Experience</h2>
          <div className="space-y-8 print:space-y-4">
            {resumeExperiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={scrollReveal.hidden}
                whileInView={scrollReveal.visible}
                viewport={{ once: true, margin: "-50px" }}
                className="border-l-2 border-border pl-6 sm:pl-8 print:pl-4 print:border-l"
              >
                <div className="mb-2">
                  <span className="text-sm font-medium text-muted-foreground print:text-xs">
                    {exp.period}
                  </span>
                </div>
                <h3 className="text-display-sm mb-1 print:text-lg">
                  {exp.title}
                </h3>
                <p className="text-muted-foreground mb-3 print:text-sm print:mb-2">
                  {exp.company}
                </p>
                <ul className="space-y-2 text-muted-foreground leading-relaxed print:text-sm">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-muted-foreground/60 mr-3 mt-1.5">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Domains */}
        <motion.section
          initial={scrollReveal.hidden}
          whileInView={scrollReveal.visible}
          viewport={{ once: true, margin: "-100px" }}
          className="print:break-inside-avoid"
        >
          <h2 className="text-display-lg mb-6 print:mb-4 print:text-2xl">Domains</h2>
          <div className="flex flex-wrap gap-3 print:gap-2">
            {domains.map((domain) => (
              <span
                key={domain}
                className="px-4 py-2 text-sm font-medium bg-muted text-foreground rounded-sm print:px-2 print:py-1 print:text-xs print:bg-transparent print:border print:border-border"
              >
                {domain}
              </span>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

