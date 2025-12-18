"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact/ContactForm";
import { SOCIAL_LINKS, SITE_CONFIG } from "@/lib/constants";
import { scrollReveal } from "@/lib/motion";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-24">
      <motion.header
        initial={scrollReveal.hidden}
        animate={scrollReveal.visible}
        className="mb-10 sm:mb-12 md:mb-16"
      >
        <div className="max-w-2xl">
          <h1 className="text-display-xl mb-4 sm:mb-6">Contact</h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            I'm open to discussing new projects, design opportunities, or collaboration. 
            Reach out through the form below or connect via email or LinkedIn.
          </p>
        </div>
      </motion.header>

      <div className="max-w-2xl space-y-12 sm:space-y-16">
        {/* Contact Form */}
        <motion.section
          initial={scrollReveal.hidden}
          whileInView={scrollReveal.visible}
          viewport={{ once: true, margin: "-100px" }}
        >
          <ContactForm />
        </motion.section>

        {/* Let's Connect */}
        <motion.section
          initial={scrollReveal.hidden}
          whileInView={scrollReveal.visible}
          viewport={{ once: true, margin: "-100px" }}
          className="pt-8 border-t border-border"
        >
          <h2 className="text-display-sm mb-4 sm:mb-6">Let's Connect</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8">
            I'm open to discussing design opportunities, collaborations, or project inquiries.
          </p>
          <div className="space-y-4">
            <a
              href={SOCIAL_LINKS.email}
              className="block text-foreground hover:text-primary transition-colors duration-200 min-h-[44px] flex items-center text-base sm:text-lg font-medium"
            >
              {SITE_CONFIG.email}
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-foreground hover:text-primary transition-colors duration-200 min-h-[44px] flex items-center text-base sm:text-lg font-medium"
            >
              LinkedIn
            </a>
            <a
              href={SOCIAL_LINKS.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-foreground hover:text-primary transition-colors duration-200 min-h-[44px] flex items-center text-base sm:text-lg font-medium"
            >
              Behance
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

