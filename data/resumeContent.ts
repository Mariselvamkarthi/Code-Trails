export const resumeSummary =
  "UI/UX Designer and Product Thinker with 9+ years of experience designing fintech, B2B, and enterprise systems. Strong in root-cause analysis, system thinking, and simplifying complex workflows into clear, scalable user experiences.";

export interface ResumeExperience {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

export const resumeExperiences: ResumeExperience[] = [
  {
    title: "Senior UI/UX Designer",
    company: "Fintech Product Design",
    period: "2020 - Present",
    achievements: [
      "Led UX design for options trading application, reducing cognitive overload through progressive disclosure and guided workflows",
      "Redesigned B2B fintech operations platform from B2C-style dashboard to operational-first system, improving task completion speed",
      "Collaborated with product and engineering teams to design within existing APIs and backend constraints",
      "Identified root causes of user confusion through systematic analysis and redesigned workflows to reduce errors",
    ],
  },
  {
    title: "Product Designer",
    company: "Mobile Banking & Digital Finance",
    period: "2019 - 2020",
    achievements: [
      "Designed retail mobile banking applications for emerging markets, focusing on trust and fee transparency",
      "Reduced transaction abandonment by making confirmation states highly visible and clearly showing fees",
      "Designed step-by-step flows that guide users through critical financial actions",
    ],
  },
  {
    title: "UX Designer",
    company: "Hospitality & E-commerce",
    period: "2018 - 2019",
    achievements: [
      "Designed conversion-oriented websites with task-first navigation and cultural clarity",
      "Simplified information architecture to prioritize user goals and improve conversion rates",
      "Optimized designs for mobile users while balancing authenticity with usability",
    ],
  },
];

