# Case Studies Data Structure

This directory contains the data-driven case study system for the portfolio.

## Structure

```
data/
├── caseStudies.ts              # Main data file with all case studies
└── case-studies/               # Optional: Individual case study files (for complex content)
```

## Adding a New Case Study

Simply add a new object to the `caseStudies` array in `data/caseStudies.ts`:

### Example

```tsx
{
  slug: "my-project",
  title: "My Project",
  subtitle: "Project Description",
  positioning: "One-line value proposition.",
  meta: {
    role: "Your Role",
    domain: "Domain",
    platform: "Platform",
    duration: "Optional Timeline",
  },
  sections: [
    {
      title: "Overview",
      content: "Your content as a string. Simple and clean.",
    },
    {
      title: "Root Cause Analysis",
      content: "Analysis content here...",
    },
    // Add more sections...
  ],
  outcome: "Optional outcome statement.",
}
```

## Content Format

- **Sections**: Use simple strings for content, or ReactNode for complex layouts
- **Outcome**: Optional top-level outcome statement
- **Sections**: No need for `id` field - titles are used as keys

## Usage

The dynamic route `/app/work/[slug]/page.tsx` automatically renders case studies based on the slug.

## TypeScript Types

- `CaseStudy`: Main case study interface
- `CaseStudyMeta`: Metadata (role, domain, platform, duration)
- `CaseStudySection`: Individual section with id, title, and content

