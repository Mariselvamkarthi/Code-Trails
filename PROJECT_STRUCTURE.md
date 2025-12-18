# Project Structure Skeleton

## 📁 Complete Project Structure

```
Code-Trails/
│
├── app/                          # Next.js App Router (REQUIRED)
│   ├── layout.tsx              # Root layout component
│   ├── page.tsx                 # Home page (/)
│   ├── globals.css              # Global styles
│   ├── error.tsx                # Error boundary page
│   ├── not-found.tsx            # 404 page
│   │
│   ├── about/                   # About page route
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── branding/                # Branding page route
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── contact/                 # Contact page route
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── resume/                  # Resume page route
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   └── work/                    # Work/Case studies route
│       ├── layout.tsx
│       ├── page.tsx             # Work listing page
│       ├── loading.tsx          # Loading state
│       └── [slug]/              # Dynamic route for case studies
│           ├── page.tsx
│           └── loading.tsx
│
├── components/                  # React components
│   ├── case-study/             # Case study components
│   │   ├── CaseAssumptions.tsx
│   │   ├── CaseCollaboration.tsx
│   │   ├── CaseComparison.tsx
│   │   ├── CaseImpact.tsx
│   │   ├── CaseStudyHeader.tsx
│   │   ├── CaseStudyTemplate.tsx
│   │   └── CaseTradeoffs.tsx
│   │
│   ├── contact/                # Contact components
│   │   └── ContactForm.tsx
│   │
│   ├── error/                  # Error handling
│   │   └── ErrorBoundary.tsx
│   │
│   ├── layout/                 # Layout components
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   │
│   ├── theme/                  # Theme components
│   │   └── ThemeProvider.tsx
│   │
│   └── ui/                     # Reusable UI components
│       ├── Button.tsx
│       ├── CasePreviewCard.tsx
│       └── ImagePlaceholder.tsx
│
├── data/                       # Data files
│   ├── case-studies/          # Case study assets
│   ├── caseStudies.ts         # Case studies data
│   ├── linkedinContent.ts     # LinkedIn content
│   ├── recruiterSummaries.ts  # Recruiter summaries
│   └── resumeContent.ts       # Resume content
│
├── lib/                        # Utility libraries
│   ├── constants.ts           # App constants
│   ├── motion.ts              # Animation utilities
│   └── utils.ts               # General utilities
│
├── public/                     # Static assets
│   └── images/
│       ├── branding/          # Branding images
│       ├── case-studies/     # Case study images
│       │   ├── belema-fintech/
│       │   ├── issuance-agent-portal/
│       │   ├── sensei-sigma/
│       │   └── thalappakatti-uae/
│       └── profile/          # Profile images
│           └── Mine.png
│
├── styles/                     # Additional styles (if needed)
│
├── node_modules/              # Dependencies (auto-generated)
│
├── .next/                     # Build output (auto-generated)
│
├── .gitignore                 # Git ignore rules
├── .eslintrc.json            # ESLint configuration
│
├── next.config.js            # Next.js configuration
├── package.json              # Project dependencies
├── package-lock.json         # Lock file
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── next-env.d.ts            # Next.js TypeScript definitions
│
└── README.md                  # Project documentation
```

## 🔑 Key Directories Explained

### `/app` - Next.js App Router (REQUIRED)
- **Purpose**: Contains all routes and pages
- **Required Files**:
  - `layout.tsx` - Root layout (must export default function)
  - `page.tsx` - Home page (must export default function)
  - `globals.css` - Global styles
- **Routing**: Each subdirectory becomes a route
  - `app/about/` → `/about`
  - `app/work/[slug]/` → `/work/:slug` (dynamic route)

### `/components` - React Components
- **Purpose**: Reusable React components
- **Organization**: Grouped by feature/domain
- **Naming**: PascalCase for component files

### `/data` - Data Files
- **Purpose**: Static data, content, and configuration
- **Format**: TypeScript files exporting data objects

### `/lib` - Utilities
- **Purpose**: Helper functions, constants, utilities
- **Usage**: Imported across the application

### `/public` - Static Assets
- **Purpose**: Files served statically (images, fonts, etc.)
- **Access**: Files accessible at root URL (e.g., `/images/logo.png`)

## 📄 Core Configuration Files

### `package.json`
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "^14.2.35",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }
}
```

### `next.config.js`
```javascript
const nextConfig = {
  reactStrictMode: true,
};
module.exports = nextConfig;
```

### `tsconfig.json`
- TypeScript configuration
- Path aliases: `@/*` → `./*`

## 🎯 File Naming Conventions

- **Pages**: `page.tsx` (required for routes)
- **Layouts**: `layout.tsx` (optional, wraps pages)
- **Components**: `PascalCase.tsx`
- **Utilities**: `camelCase.ts`
- **Data**: `camelCase.ts`

## 🚀 Build & Deployment

### Required for Build:
1. ✅ `/app` directory at root
2. ✅ `app/layout.tsx` with RootLayout
3. ✅ `app/page.tsx` with default export
4. ✅ `package.json` with Next.js dependencies
5. ✅ `next.config.js` (optional but recommended)

### Build Command:
```bash
npm run build
```

### Deployment:
- ✅ Ready for Vercel
- ✅ Ready for any Node.js hosting
- ✅ Static export supported (if configured)

## 📝 Notes

- All routes are defined in `/app` directory
- Components are reusable and organized by feature
- Static assets go in `/public`
- TypeScript is used throughout
- Tailwind CSS is configured (optional)

