"use client";

import { motion } from "framer-motion";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { scrollReveal } from "@/lib/motion";

export default function Branding() {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-24">
      {/* Header */}
      <motion.header
        initial={scrollReveal.hidden}
        animate={scrollReveal.visible}
        className="mb-12 sm:mb-16 md:mb-20"
      >
        <div className="max-w-4xl">
          <h1 className="text-display-xl mb-4 sm:mb-6">Branding & Visual Systems</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            I design brand systems that support product clarity, trust, and consistency across digital platforms.
          </p>
        </div>
      </motion.header>

      <div className="max-w-4xl space-y-16 sm:space-y-20 md:space-y-24">
        {/* Belema Fintech — Brand System */}
        <motion.section
          initial={scrollReveal.hidden}
          whileInView={scrollReveal.visible}
          viewport={{ once: true, margin: "-100px" }}
          className="scroll-mt-20"
        >
          <div className="mb-6 sm:mb-8">
            <h2 className="text-display-lg mb-2">Belema Fintech — Brand System</h2>
            <p className="text-sm sm:text-base text-muted-foreground uppercase tracking-wider">
              Retail Fintech / Mobile Banking
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-display-sm mb-3 text-foreground font-semibold">Context</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Belema is a retail fintech product where trust and clarity are critical for user adoption.
              </p>
            </div>

            <div>
              <h3 className="text-display-sm mb-3 text-foreground font-semibold">Problem</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                The brand needed to feel reliable, approachable, and suitable for everyday banking,
                while also working consistently across mobile UI and marketing materials.
              </p>
            </div>

            <div>
              <h3 className="text-display-sm mb-3 text-foreground font-semibold">Brand Decisions</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base leading-relaxed text-muted-foreground">
                <li>Calm, trustworthy color palette</li>
                <li>Simple, readable typography</li>
                <li>Minimal visual noise to support usability</li>
                <li>Branding aligned closely with mobile UI patterns</li>
              </ul>
            </div>

            <div>
              <h3 className="text-display-sm mb-3 text-foreground font-semibold">System Usage</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base leading-relaxed text-muted-foreground">
                <li>Mobile banking application UI</li>
                <li>App icons and splash screens</li>
                <li>Marketing and communication assets</li>
              </ul>
            </div>

            <div>
              <h3 className="text-display-sm mb-3 text-foreground font-semibold">Outcome</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                The brand system supported user trust and ensured consistency across product and communication touchpoints.
              </p>
            </div>

            {/* Optional Image Placeholder */}
            <div className="mt-8 sm:mt-12">
              <ImagePlaceholder
                label="Brand System Preview"
                aspectRatio="16:9"
                size="large"
              />
            </div>
          </div>
        </motion.section>

        {/* Sensei SIGMA — Product Brand Identity */}
        <motion.section
          initial={scrollReveal.hidden}
          whileInView={scrollReveal.visible}
          viewport={{ once: true, margin: "-100px" }}
          className="scroll-mt-20"
        >
          <div className="mb-6 sm:mb-8">
            <h2 className="text-display-lg mb-2">Sensei SIGMA — Product Brand Identity</h2>
            <p className="text-sm sm:text-base text-muted-foreground uppercase tracking-wider">
              Options Trading / Fintech
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-display-sm mb-3 text-foreground font-semibold">Context</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Sensei SIGMA is an options trading product aimed at simplifying a complex domain.
              </p>
            </div>

            <div>
              <h3 className="text-display-sm mb-3 text-foreground font-semibold">Problem</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                The brand needed to communicate intelligence, guidance, and confidence
                without intimidating new users.
              </p>
            </div>

            <div>
              <h3 className="text-display-sm mb-3 text-foreground font-semibold">Brand Decisions</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base leading-relaxed text-muted-foreground">
                <li>Strong, focused visual identity</li>
                <li>Balanced use of contrast to highlight key actions</li>
                <li>Branding integrated tightly with UX patterns</li>
                <li>Visual tone aligned with "Making Complex Simple"</li>
              </ul>
            </div>

            <div>
              <h3 className="text-display-sm mb-3 text-foreground font-semibold">System Usage</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base leading-relaxed text-muted-foreground">
                <li>Trading dashboards</li>
                <li>Recommendation cards</li>
                <li>Gamified challenge features</li>
                <li>Product presentations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-display-sm mb-3 text-foreground font-semibold">Outcome</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                The brand reinforced the product's positioning as a guided, clarity-driven trading platform.
              </p>
            </div>

            {/* Optional Image Placeholder */}
            <div className="mt-8 sm:mt-12">
              <ImagePlaceholder
                label="UI + Brand Integration Example"
                aspectRatio="16:9"
                size="large"
              />
            </div>
          </div>
        </motion.section>

        {/* Girmiti — Corporate & Internal Branding */}
        <motion.section
          initial={scrollReveal.hidden}
          whileInView={scrollReveal.visible}
          viewport={{ once: true, margin: "-100px" }}
          className="scroll-mt-20"
        >
          <div className="mb-6 sm:mb-8">
            <h2 className="text-display-lg mb-2">Girmiti — Corporate & Internal Branding</h2>
            <p className="text-sm sm:text-base text-muted-foreground uppercase tracking-wider">
              Corporate / Internal Platforms
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-display-sm mb-3 text-foreground font-semibold">Context</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Branding was required for internal platforms, presentations, and communication materials.
              </p>
            </div>

            <div>
              <h3 className="text-display-sm mb-3 text-foreground font-semibold">Problem</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Lack of standardization caused inconsistency across internal products and assets.
              </p>
            </div>

            <div>
              <h3 className="text-display-sm mb-3 text-foreground font-semibold">Brand Decisions</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base leading-relaxed text-muted-foreground">
                <li>Standardized color and typography usage</li>
                <li>Consistent layout rules</li>
                <li>Reusable visual components</li>
              </ul>
            </div>

            <div>
              <h3 className="text-display-sm mb-3 text-foreground font-semibold">System Usage</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base leading-relaxed text-muted-foreground">
                <li>Internal fintech platforms</li>
                <li>Business presentations</li>
                <li>Company communication assets</li>
              </ul>
            </div>

            <div>
              <h3 className="text-display-sm mb-3 text-foreground font-semibold">Outcome</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Improved visual consistency, reduced design debt, and easier scalability across teams.
              </p>
            </div>

            {/* Optional Image Placeholder */}
            <div className="mt-8 sm:mt-12">
              <ImagePlaceholder
                label="Brand System Preview"
                aspectRatio="16:9"
                size="large"
              />
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

