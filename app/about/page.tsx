"use client";

import { motion } from "framer-motion";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SOCIAL_LINKS } from "@/lib/constants";
import { scrollReveal } from "@/lib/motion";

export default function About() {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-24">
      <motion.header
        initial={scrollReveal.hidden}
        animate={scrollReveal.visible}
        className="mb-12 sm:mb-16 md:mb-20"
      >
        <div className="max-w-4xl">
          <h1 className="text-display-xl mb-4 sm:mb-6">About</h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-8">
            I design interfaces that make complex systems understandable and usable.
          </p>
          {/* Optional Profile Image Placeholder */}
          <div className="max-w-xs">
            <ImagePlaceholder
              label="Profile Image"
              aspectRatio="1:1"
              size="medium"
            />
          </div>
        </div>
      </motion.header>

      <div className="max-w-4xl space-y-16 sm:space-y-20">
        {/* Background */}
        <motion.section
          initial={scrollReveal.hidden}
          whileInView={scrollReveal.visible}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-display-lg mb-6">Background</h2>
          <div className="text-base leading-relaxed text-muted-foreground space-y-4">
            <p>
              I started my career in engineering, which gave me a foundation in systematic 
              thinking and problem-solving. After eight years in UI/UX design, I've learned 
              that the best interfaces emerge from understanding both the technical constraints 
              and the human needs behind a product.
            </p>
            <p>
              My engineering background helps me communicate effectively with development teams 
              and make design decisions that are both user-centered and technically feasible. 
              I approach design problems methodically, breaking down complex challenges into 
              manageable components.
            </p>
          </div>
        </motion.section>

        {/* Specialization */}
        <motion.section
          initial={scrollReveal.hidden}
          whileInView={scrollReveal.visible}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-display-lg mb-6">Specialization</h2>
          <div className="text-base leading-relaxed text-muted-foreground space-y-4">
            <p>
              I specialize in fintech and B2B products—domains where complexity is inherent 
              and clarity is essential. These industries require interfaces that handle 
              intricate workflows, dense information, and high-stakes decisions.
            </p>
            <p>
              In fintech, users need to understand risk, make informed choices, and execute 
              actions with confidence. In B2B products, efficiency and accuracy directly impact 
              business outcomes. Both demand interfaces that reduce cognitive load and prevent 
              errors.
            </p>
            <p>
              I've worked on trading platforms, financial dashboards, document management 
              systems, and enterprise tools. Each project has reinforced the importance of 
              clear information architecture and thoughtful interaction design.
            </p>
          </div>
        </motion.section>

        {/* Approach */}
        <motion.section
          initial={scrollReveal.hidden}
          whileInView={scrollReveal.visible}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-display-lg mb-6">Approach</h2>
          <div className="text-base leading-relaxed text-muted-foreground space-y-4">
            <p>
              I approach design problems logically, starting with understanding the problem 
              before proposing solutions. This means spending time on research, user interviews, 
              and data analysis. I ask questions about user goals, business objectives, and 
              technical constraints.
            </p>
            <p>
              Once I understand the problem, I explore multiple solutions and evaluate them 
              against clear criteria. I prefer solutions that are simple, scalable, and aligned 
              with how users actually work. I avoid adding features or complexity unless they 
              directly address a validated need.
            </p>
            <p>
              Collaboration is essential. I work closely with product managers to define 
              requirements, with engineers to understand technical possibilities, and with 
              users to validate assumptions. The best designs emerge from this collaborative 
              process, not from working in isolation.
            </p>
          </div>
        </motion.section>

        {/* Design Philosophy */}
        <motion.section
          initial={scrollReveal.hidden}
          whileInView={scrollReveal.visible}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-display-lg mb-6">Design Philosophy</h2>
          <div className="text-base leading-relaxed text-muted-foreground space-y-4">
            <p>
              My design philosophy centers on clarity and usability. I believe interfaces should 
              be self-explanatory—users shouldn't need training or documentation to accomplish 
              their goals. This means prioritizing clear information hierarchy, consistent 
              patterns, and predictable interactions.
            </p>
            <p>
              I focus on making the right information visible at the right time. This often 
              means using progressive disclosure to manage complexity, showing essential 
              information first and making advanced features available when needed. It also 
              means using visual design to guide attention and communicate relationships 
              between elements.
            </p>
            <p>
              Usability isn't just about making things easy—it's about making things efficient 
              and error-resistant. I design for the tasks users perform most frequently, 
              optimizing for speed and accuracy. I also design to prevent mistakes, using 
              confirmation steps, clear feedback, and constraints that guide users toward 
              correct actions.
            </p>
            <p>
              Finally, I believe in building systems that scale. Rather than designing one-off 
              solutions, I create design systems and component libraries that ensure consistency 
              and speed up development. This systematic approach benefits both users and teams.
            </p>
          </div>
        </motion.section>

        {/* What I Bring */}
        <motion.section
          initial={scrollReveal.hidden}
          whileInView={scrollReveal.visible}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-display-lg mb-6">What I Bring</h2>
          <div className="text-base leading-relaxed text-muted-foreground space-y-4">
            <p>
              When I join a project, I bring a methodical approach to problem-solving, 
              experience with complex domains, and a focus on clarity and usability. I can 
              translate business requirements into user-centered designs, work effectively 
              with cross-functional teams, and build design systems that scale.
            </p>
            <p>
              I'm comfortable with ambiguity and can help define problems when requirements 
              are unclear. I'm also comfortable with constraints and can find creative solutions 
              within technical and business limitations. Most importantly, I'm focused on 
              outcomes—I measure success by whether users can accomplish their goals efficiently 
              and whether the product achieves its business objectives.
            </p>
          </div>
        </motion.section>

        {/* Professional Links */}
        <motion.section
          initial={scrollReveal.hidden}
          whileInView={scrollReveal.visible}
          viewport={{ once: true, margin: "-100px" }}
          className="pt-8 border-t border-border"
        >
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            You can also find my work and professional background here:
          </p>
          <div className="space-y-2">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-base text-foreground hover:text-primary transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href={SOCIAL_LINKS.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-base text-foreground hover:text-primary transition-colors duration-200"
            >
              Behance
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

