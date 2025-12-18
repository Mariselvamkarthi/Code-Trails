import { ReactNode } from "react";
import { createElement } from "react";
import { CaseComparison } from "@/components/case-study/CaseComparison";
import { CaseAssumptions } from "@/components/case-study/CaseAssumptions";
import { CaseTradeoffs } from "@/components/case-study/CaseTradeoffs";
import { CaseImpact } from "@/components/case-study/CaseImpact";
import { CaseCollaboration } from "@/components/case-study/CaseCollaboration";

export interface CaseStudyMeta {
  role: string;
  domain: string;
  platform: string;
  duration?: string;
  market?: string;
}

export interface CaseStudySection {
  title: string;
  content: string | ReactNode;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle?: string;
  positioning: string;
  meta: CaseStudyMeta;
  sections: CaseStudySection[];
  outcome?: string;
}

// All case studies data
export const caseStudies: CaseStudy[] = [
  {
    slug: "sensei-sigma",
    title: "Sensei SIGMA",
    subtitle: "Options Trading Application",
    positioning: "Simplifying complex options trading decisions through clarity-driven UX.",
    meta: {
      role: "Product Design, UX Strategy, UI Design",
      domain: "Fintech / Trading",
      platform: "Mobile Application",
    },
    sections: [
      {
        title: "Overview",
        content:
          "Sensei SIGMA is an options-only trading application designed to help users—especially beginners—make confident trading decisions. The focus is not on increasing trading frequency, but on improving decision quality through guided UX.",
      },
      {
        title: "Root Cause Analysis",
        content:
          "Users were not failing due to lack of data, but because too much information was presented without guidance. The real issue was decision anxiety caused by cognitive overload, not missing features.",
      },
      {
        title: "Constraints & Considerations",
        content:
          "The UI worked with pre-calculated backend metrics and existing APIs. Accuracy, performance, and regulatory transparency were critical. Client-side computation had to remain minimal.",
      },
      {
        title: "My Role & Decisions",
        content:
          "I defined the UX direction, introduced progressive disclosure, designed recommendation cards focused on actionable insights, and added challenge-based learning to reduce hesitation.",
      },
      {
        title: "UX Solution",
        content:
          "Critical metrics were surfaced first, advanced data hidden contextually, and learning was supported through 1v1 and 1vN challenges.",
      },
      {
        title: "Before vs After (UX Perspective)",
        content: createElement(CaseComparison, {
          before: [
            "UI exposed too much information at once",
            "Users had to interpret data or flows independently",
            "High cognitive load during critical actions",
            "Interface reflected system structure rather than user workflow",
          ],
          after: [
            "Progressive disclosure of information",
            "Clear primary actions and guidance",
            "Reduced mental effort during high-risk decisions",
            "UI aligned with real user tasks and priorities",
          ],
        }),
      },
      {
        title: "Key Assumptions",
        content: createElement(CaseAssumptions, {
          assumptions: [
            "Users prefer guidance over raw data",
            "Clarity reduces hesitation more than feature richness",
            "Decision confidence matters more than showing all metrics",
            "Progressive disclosure reduces cognitive overload",
          ],
        }),
      },
      {
        title: "Trade-offs Considered",
        content: createElement(CaseTradeoffs, {
          tradeoffs: [
            "Choosing clarity over feature completeness",
            "Limiting advanced data to secondary layers",
            "Reducing visual decoration to improve focus and performance",
            "Accepting fewer features initially to avoid user confusion",
          ],
        }),
      },
      {
        title: "Impact (Qualitative Outcomes)",
        content: createElement(CaseImpact, {
          impacts: [
            "Reduced confusion during critical trading decisions",
            "Improved decision confidence for users",
            "More scalable and maintainable UI systems",
            "Better stakeholder confidence in UX decisions",
          ],
        }),
      },
      {
        title: "Collaboration & Technical Awareness",
        content: createElement(CaseCollaboration, {
          content:
            "Collaborated with product and engineering teams to design within existing APIs and pre-calculated backend metrics. Focused on implementation feasibility while maintaining accuracy, performance, and regulatory transparency. Ensured client-side computation remained minimal and aligned with backend data structures.",
        }),
      },
    ],
    outcome:
      "The experience reduced cognitive overload, improved decision confidence, and created a scalable foundation for future features.",
  },
  {
    slug: "issuance-agent-portal",
    title: "Issuance Agent Portal",
    subtitle: "B2B Fintech Operations Platform",
    positioning: "Designing operational clarity for high-volume issuance workflows.",
    meta: {
      role: "UI/UX Design, UX Strategy, System Structuring",
      domain: "Fintech / Issuance",
      platform: "Web Portal",
    },
    sections: [
      {
        title: "Overview",
        content:
          "A B2B operational platform used daily by agents to manage issuance workflows, track statuses, and resolve exceptions under time pressure.",
      },
      {
        title: "Root Cause Analysis",
        content:
          "The portal used B2C-style dashboards for B2B operations. Information was not prioritized by agent workflows, and exception cases were hidden instead of highlighted.",
      },
      {
        title: "Constraints & Considerations",
        content:
          "Existing APIs and transaction states could not be changed. Accuracy, auditability, and real-time status visibility were mandatory.",
      },
      {
        title: "My Role & Decisions",
        content:
          "I restructured the information architecture, simplified navigation, and separated issuance into clear operational flows.",
      },
      {
        title: "UX Solution",
        content:
          "Exception-first design, task-based navigation, and standardized UI patterns improved clarity and speed.",
      },
      {
        title: "Before vs After (UX Perspective)",
        content: createElement(CaseComparison, {
          before: [
            "UI exposed too much information at once",
            "Users had to interpret data or flows independently",
            "High cognitive load during critical actions",
            "Interface reflected system structure rather than user workflow",
          ],
          after: [
            "Progressive disclosure of information",
            "Clear primary actions and guidance",
            "Reduced mental effort during high-risk decisions",
            "UI aligned with real user tasks and priorities",
          ],
        }),
      },
      {
        title: "Key Assumptions",
        content: createElement(CaseAssumptions, {
          assumptions: [
            "Operational users prioritize exceptions over summaries",
            "Task-based navigation reduces cognitive load",
            "Exception-first design improves agent efficiency",
            "Standardized UI patterns improve maintainability",
          ],
        }),
      },
      {
        title: "Trade-offs Considered",
        content: createElement(CaseTradeoffs, {
          tradeoffs: [
            "Choosing clarity over feature completeness",
            "Prioritizing exception handling over general dashboards",
            "Reducing navigation depth to improve speed",
            "Accepting fewer features initially to avoid user confusion",
          ],
        }),
      },
      {
        title: "Impact (Qualitative Outcomes)",
        content: createElement(CaseImpact, {
          impacts: [
            "Faster task completion for operational users",
            "Reduced confusion during exception handling",
            "More scalable and maintainable UI systems",
            "Better stakeholder confidence in UX decisions",
          ],
        }),
      },
      {
        title: "Collaboration & Technical Awareness",
        content: createElement(CaseCollaboration, {
          content:
            "Collaborated with product and engineering teams to design within existing APIs and transaction states. Focused on implementation feasibility while maintaining accuracy, auditability, and real-time status visibility. Ensured UI patterns aligned with backend data structures and operational workflows.",
        }),
      },
    ],
    outcome:
      "Agents could identify issues faster, act with confidence, and operate within a more scalable and professional system.",
  },
  {
    slug: "belema-fintech",
    title: "Belema Fintech",
    subtitle: "Retail Mobile Banking Application – Nigeria",
    positioning: "Designing trust, clarity, and simplicity for everyday banking.",
    meta: {
      role: "UI/UX Design, Branding, Key Screen Design",
      domain: "Fintech / Digital Banking",
      platform: "Mobile Application",
      market: "Nigeria",
    },
    sections: [
      {
        title: "Overview",
        content:
          "Belema Fintech is a retail mobile banking application designed for everyday users in Nigeria to perform core banking activities such as transfers, beneficiary management, and account monitoring. The product needed to balance simplicity for first-time digital banking users with the reliability and trust expected from a financial institution.",
      },
      {
        title: "Problem Statement",
        content:
          "Many mobile banking applications fail in emerging markets because interfaces are overly complex, financial actions lack transparency, and users do not clearly understand fees, confirmations, or outcomes. This often leads to user hesitation, abandoned transactions, and reduced trust in the platform.",
      },
      {
        title: "Root Cause Analysis",
        content:
          "The core issue was not feature availability. The real problems were lack of clarity during critical actions like fund transfers, poor visibility of fees and confirmations, and interfaces that assumed prior digital banking familiarity. In a market where trust in digital finance is still developing, even small ambiguities can cause users to abandon transactions.",
      },
      {
        title: "Constraints & Considerations",
        content:
          "Technical Constraints: Banking APIs and transaction flows were predefined. Account number validation followed NUBAN standards. Real-time feedback was required for transaction status. Performance needed to remain stable on mid-range devices. Business & Regional Constraints: High sensitivity around financial errors. Need for explicit confirmation and success feedback. Diverse user familiarity with mobile banking. Strong emphasis on trust and transparency.",
      },
      {
        title: "My Role & Key Decisions",
        content:
          "I was responsible for designing key user flows for transfers and beneficiary management, creating branding and visual consistency, and defining UI patterns focused on clarity and reassurance. Key decisions included making confirmation and success states highly visible, clearly showing fees before final submission, designing flows that guide users step by step, and reducing unnecessary visual elements during critical actions.",
      },
      {
        title: "UX Solution",
        content:
          "Clear Transaction Flows: Step-by-step transfer process with explicit confirmation screens before submission. Fee Transparency: Fees displayed clearly before action completion with no hidden costs or surprise deductions. Trust Signals: Clear success states, human-readable confirmation messages, and consistent visual language across screens. Beneficiary-Centric Design: Simple beneficiary addition, clear account and bank identification, and reduced chances of incorrect transfers.",
      },
      {
        title: "Before vs After (UX Perspective)",
        content: createElement(CaseComparison, {
          before: [
            "UI exposed too much information at once",
            "Users had to interpret data or flows independently",
            "High cognitive load during critical actions",
            "Interface reflected system structure rather than user workflow",
          ],
          after: [
            "Progressive disclosure of information",
            "Clear primary actions and guidance",
            "Reduced mental effort during high-risk decisions",
            "UI aligned with real user tasks and priorities",
          ],
        }),
      },
        {
          title: "Key Assumptions",
          content: createElement(CaseAssumptions, {
            assumptions: [
              "Trust and accuracy matter more than visual complexity",
              "Clarity reduces hesitation more than feature richness",
              "Fee transparency builds trust in emerging markets",
              "Step-by-step guidance reduces transaction abandonment",
            ],
          }),
        },
        {
          title: "Trade-offs Considered",
          content: createElement(CaseTradeoffs, {
            tradeoffs: [
              "Choosing clarity over feature completeness",
              "Limiting advanced features to reduce complexity",
              "Reducing visual decoration to improve focus and performance",
              "Accepting fewer features initially to avoid user confusion",
            ],
          }),
        },
        {
          title: "Impact (Qualitative Outcomes)",
          content: createElement(CaseImpact, {
            impacts: [
              "Reduced confusion during critical banking actions",
              "Improved user confidence during transactions",
              "Faster task completion for first-time users",
              "More scalable and maintainable UI systems",
            ],
          }),
        },
        {
          title: "Collaboration & Technical Awareness",
          content: createElement(CaseCollaboration, {
            content:
              "Collaborated with product and engineering teams to design within existing banking APIs and transaction flows. Focused on implementation feasibility while maintaining NUBAN account validation standards, real-time feedback requirements, and performance on mid-range devices. Ensured UI patterns aligned with regulatory transparency and trust requirements.",
          }),
        },
    ],
    outcome:
      "Improved user confidence during transactions, reduced hesitation in fund transfers, clearer understanding of fees and transaction status, and a calm, trustworthy banking experience. Key Learning: In mobile banking, clarity and reassurance are more important than feature richness.",
  },
  {
    slug: "thalappakatti-uae",
    title: "Thalappakatti UAE",
    subtitle: "Restaurant Website (UI Design Only)",
    positioning: "Designing a culturally resonant, clear, and conversion-focused dining experience online.",
    meta: {
      role: "UX Design, Visual Design, Information Architecture",
      domain: "Hospitality / Restaurant",
      platform: "Web (Responsive)",
      market: "UAE / International Visitors",
    },
    sections: [
      {
        title: "Overview",
        content:
          "Thalappakatti is a premium biryani restaurant brand with international presence, including the UAE. The design project focused on creating a clear, inviting, and conversion-oriented website that communicates authentic dining experience, core offerings, and essential actions like reservations and contact. The goal was to balance authenticity with usability for both local and international users.",
      },
      {
        title: "Problem Statement",
        content:
          "Before redesign, many restaurant sites struggle with lack of clarity in key user tasks (menu, reservations, contact), poor mobile and international navigation, and no clear visual hierarchy for offers, heritage, and dining features. Users often abandon websites that don't answer: What is the cuisine? Where is the location? How do I book or contact? Why should I choose this restaurant?",
      },
      {
        title: "Root Cause Analysis",
        content:
          "The core problem was not lack of content — it was poor prioritization and presentation. Issues included navigation that mixes too many options without hierarchy, heavy imagery without task focus, unclear paths to reservation and contact, and no clear differentiation between dining offerings. Root causes identified: assumed local familiarity with offerings (not global visitor or first-time user friendly), no clear user journey for key tasks, and lack of task-first UI hierarchy.",
      },
      {
        title: "Constraints & Considerations",
        content:
          "Technical Constraints: Must be responsive for mobile users (high traffic from mobile). Minimal custom frontend logic (static HTML/CSS focus). Fast load performance in hospitality context. Business & User Constraints: Need to support multiple audiences (UAE residents, tourists). Cultural clarity in branding and menu presentation. Reservation and contact actions must be obvious. Clear visual support for halal, location, and service features.",
      },
      {
        title: "My Role & Key Decisions",
        content:
          "I was responsible for website UX layout and content structure, information architecture for navigation and key actions, visual styling to reflect brand authenticity, and prioritizing user tasks (menu, contact, reservations). Key decisions included simplified top navigation with clear priority tasks, hero section focused on brand identity and primary action, prominent menu display with scannable categories, clear calls to action for reservations and contact, and language and cultural clarity for UAE and international visitors.",
      },
      {
        title: "UX Solution",
        content:
          "Task-First Navigation: Menu labels that match user intent, primary actions prioritized based on user goals. Hero with Value Proposition: Clear statement about cuisine and unique offerings, action button for reservations or contact. Menu Section: Scannable categories of food, visual cues to express premium and authentic cuisine. Contact & Reservation Blocks: Repeated access to actions at multiple scroll points, local contact number and location map. Responsive Design: Mobile layout optimized for quick actions, touch-friendly buttons and readable text.",
      },
      {
        title: "Before vs After (UX Perspective)",
        content: createElement(CaseComparison, {
          before: [
            "UI exposed too much information at once",
            "Users had to interpret data or flows independently",
            "High cognitive load during critical actions",
            "Interface reflected system structure rather than user workflow",
          ],
          after: [
            "Progressive disclosure of information",
            "Clear primary actions and guidance",
            "Reduced mental effort during high-risk decisions",
            "UI aligned with real user tasks and priorities",
          ],
        }),
      },
      {
        title: "Key Assumptions",
        content: createElement(CaseAssumptions, {
          assumptions: [
            "Task-first navigation improves conversion rates",
            "Cultural clarity matters for international audiences",
            "Mobile users prioritize quick actions over exploration",
            "Visual authenticity must support clear user actions",
          ],
        }),
      },
      {
        title: "Trade-offs Considered",
        content: createElement(CaseTradeoffs, {
          tradeoffs: [
            "Choosing clarity over feature completeness",
            "Prioritizing task focus over visual decoration",
            "Reducing navigation depth to improve mobile usability",
            "Accepting simpler layouts to ensure fast load performance",
          ],
        }),
      },
      {
        title: "Impact (Qualitative Outcomes)",
        content: createElement(CaseImpact, {
          impacts: [
            "Better clarity for users exploring cuisine and services",
            "More obvious paths to reservations and contact",
            "Consistent visual experience across devices",
            "Improved user confidence in booking decisions",
          ],
        }),
      },
      {
        title: "Collaboration & Technical Awareness",
        content: createElement(CaseCollaboration, {
          content:
            "Collaborated with product and development teams to design within static HTML/CSS constraints and minimal custom frontend logic. Focused on implementation feasibility while maintaining fast load performance and responsive behavior. Ensured UI patterns aligned with cultural clarity requirements and supported multiple audiences (UAE residents and international visitors).",
        }),
      },
    ],
    outcome:
      "Better clarity for users exploring cuisine and services, more obvious paths to reservations and contact, and consistent visual experience across devices. Key Learning: For hospitality websites, clarity and task focus directly influence user confidence and conversions. Visual authenticity must always support clear user actions.",
  },
];

// Helper function to get case study by slug
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

// Helper function to get all case study slugs (for static generation)
export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug);
}

// Helper function to get all case studies (for listing pages or other uses)
export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}

