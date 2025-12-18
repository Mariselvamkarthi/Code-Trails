# Mariselvam Portfolio

A professional portfolio website for UI/UX Designer Mariselvam, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18** with **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for animations

## Features

- ✅ Clean, professional fintech-grade UI
- ✅ Light and Dark mode support
- ✅ Fully responsive design
- ✅ Accessibility best practices
- ✅ Scalable folder structure
- ✅ Production-ready setup

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Header & Footer
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles & design system
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Site footer
│   └── theme/
│       ├── ThemeProvider.tsx # Theme context provider
│       └── ThemeToggle.tsx   # Theme toggle button
├── data/                   # Projects & case studies data
└── styles/                 # Additional styles (if needed)
```

## Design System

The design system uses CSS variables for theming and includes:

- **Colors**: Professional fintech/SaaS palette with light and dark variants
- **Typography**: Scale from display-2xl to body text
- **Spacing**: Consistent spacing scale
- **Components**: Reusable UI components with proper accessibility

## Build

```bash
npm run build
```

## License

Private project - All rights reserved.

