export interface RecruiterSummary {
  slug: string;
  title: string;
  summary: string;
}

export const recruiterSummaries: RecruiterSummary[] = [
  {
    slug: "sensei-sigma",
    title: "Sensei SIGMA",
    summary:
      "Led UX design for an options trading application, identifying root causes of user decision anxiety and redesigning workflows to reduce cognitive overload. Introduced progressive disclosure, recommendation cards, and challenge-based learning to help users make confident trading decisions. Focused on simplifying complex trading decisions through clarity-driven UX rather than increasing feature complexity.",
  },
  {
    slug: "issuance-agent-portal",
    title: "Issuance Agent Portal",
    summary:
      "Redesigned a B2B fintech operations platform from a B2C-style dashboard to an operational-first system. Restructured information architecture based on agent workflows, prioritized exception handling, and simplified navigation. Resulted in faster task completion, reduced confusion during exception handling, and a more scalable system for high-volume issuance workflows.",
  },
  {
    slug: "belema-fintech",
    title: "Belema Fintech",
    summary:
      "Designed a retail mobile banking application for Nigeria, focusing on trust, fee transparency, and step-by-step banking flows. Addressed root causes of user hesitation in emerging markets by making confirmation states highly visible, clearly showing fees before submission, and designing flows that guide users through critical financial actions. Improved user confidence and reduced transaction abandonment.",
  },
  {
    slug: "thalappakatti-uae",
    title: "Thalappakatti UAE",
    summary:
      "Designed a restaurant website with task-first hospitality UX, cultural clarity, and conversion-oriented design. Simplified navigation to prioritize user goals (menu, reservations, contact), created clear value propositions, and optimized for mobile users. Balanced authenticity with usability for both UAE residents and international visitors, resulting in better clarity and more obvious paths to reservations.",
  },
];

// Helper function to get summary by slug
export function getRecruiterSummaryBySlug(slug: string): RecruiterSummary | undefined {
  return recruiterSummaries.find((summary) => summary.slug === slug);
}

// Helper function to get all summaries
export function getAllRecruiterSummaries(): RecruiterSummary[] {
  return recruiterSummaries;
}

