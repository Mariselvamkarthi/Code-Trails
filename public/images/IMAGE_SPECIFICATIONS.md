# Image Layout & Size Specifications

Complete guide for all images in the portfolio with exact dimensions, locations, and usage.

---

## 📁 Complete Folder Structure

```
public/images/
├── profile/
│   └── Mine.png (or profile-image.jpg)
│
├── case-studies/
│   ├── sensei-sigma/
│   │   ├── hero-image.jpg
│   │   ├── preview.jpg
│   │   ├── ui-screenshot-1.jpg
│   │   ├── ui-screenshot-2.jpg
│   │   ├── flow-diagram.jpg
│   │   ├── constraints-diagram.jpg
│   │   ├── solution-example.jpg
│   │   └── before-after.jpg
│   │
│   ├── issuance-agent-portal/
│   │   ├── hero-image.jpg
│   │   ├── preview.jpg
│   │   ├── dashboard-screenshot.jpg
│   │   └── workflow-diagram.jpg
│   │
│   ├── belema-fintech/
│   │   ├── hero-image.jpg
│   │   ├── preview.jpg
│   │   ├── mobile-screens.jpg
│   │   └── transaction-flow.jpg
│   │
│   └── thalappakatti-uae/
│       ├── hero-image.jpg
│       ├── preview.jpg
│       └── website-screenshot.jpg
│
└── branding/
    ├── belema-brand-system.jpg
    ├── sensei-sigma-brand.jpg
    └── girmiti-brand.jpg
```

---

## 🖼️ Image Specifications by Location

### 1. **Profile Image** (Home Page Hero)

**Location:** `public/images/profile/Mine.png` (or `profile-image.jpg`)

**Used In:**
- Home page hero section (right column)
- About page (optional)

**Specifications:**
- **Dimensions:** 800x800px (1:1 aspect ratio, square)
- **Format:** JPG, WebP, or PNG
- **File Size:** < 200KB (optimized)
- **Display Size:**
  - Desktop: 256px × 256px (lg) to 320px × 320px (xl)
  - Mobile: 160px × 160px (sm) to 192px × 192px
- **Style:** Circular container with subtle effects
- **Priority:** Yes (above the fold)

**Code Usage:**
```tsx
<Image
  src="/images/profile/Mine.png"
  alt="Mariselvam - UI/UX Designer"
  width={800}
  height={800}
  className="rounded-full"
  priority
/>
```

---

### 2. **Case Study Hero Images**

**Location:** `public/images/case-studies/[project-slug]/hero-image.jpg`

**Used In:**
- Case study header section (top of each case study page)

**Specifications:**
- **Dimensions:** 1920x1080px (16:9 aspect ratio)
- **Format:** JPG or WebP
- **File Size:** < 300KB (optimized)
- **Display Size:** Full width, responsive (max 1920px)
- **Style:** Rounded corners, full-width container
- **Priority:** Yes (above the fold)

**Projects:**
- `sensei-sigma/hero-image.jpg`
- `issuance-agent-portal/hero-image.jpg`
- `belema-fintech/hero-image.jpg`
- `thalappakatti-uae/hero-image.jpg`

**Code Usage:**
```tsx
<Image
  src="/images/case-studies/sensei-sigma/hero-image.jpg"
  alt="Sensei SIGMA - Options Trading Application"
  width={1920}
  height={1080}
  className="rounded-sm"
  priority
/>
```

---

### 3. **Case Study Preview Images** (Home & Work Pages)

**Location:** `public/images/case-studies/[project-slug]/preview.jpg`

**Used In:**
- Home page "Featured Work" section
- Work page case study cards

**Specifications:**
- **Dimensions:** 1600x900px (16:9 aspect ratio)
- **Format:** JPG or WebP
- **File Size:** < 250KB (optimized)
- **Display Size:** 
  - Desktop: Full card width, ~450px height
  - Mobile: Full width, ~250px height
- **Style:** Rounded corners, object-cover
- **Priority:** First 2-3 cards only

**Projects:**
- `sensei-sigma/preview.jpg`
- `issuance-agent-portal/preview.jpg`
- `belema-fintech/preview.jpg`
- `thalappakatti-uae/preview.jpg`

**Code Usage:**
```tsx
<Image
  src={`/images/case-studies/${slug}/preview.jpg`}
  alt={`${title} preview`}
  width={1600}
  height={900}
  className="w-full h-auto object-cover rounded-sm"
/>
```

---

### 4. **Case Study UI Screenshots**

**Location:** `public/images/case-studies/[project-slug]/ui-screenshot-[number].jpg`

**Used In:**
- Case study "UX Solution" section
- Case study "Overview" section (optional)

**Specifications:**
- **Dimensions:** 1440x900px or 1920x1080px (16:9 or 16:10)
- **Format:** JPG or WebP
- **File Size:** < 300KB each (optimized)
- **Display Size:** Full width, responsive
- **Style:** Rounded corners, centered

**Example Files:**
- `sensei-sigma/ui-screenshot-1.jpg` (Dashboard view)
- `sensei-sigma/ui-screenshot-2.jpg` (Recommendation cards)
- `issuance-agent-portal/dashboard-screenshot.jpg`
- `belema-fintech/mobile-screens.jpg`

**Code Usage:**
```tsx
<Image
  src="/images/case-studies/sensei-sigma/ui-screenshot-1.jpg"
  alt="Sensei SIGMA Dashboard Interface"
  width={1920}
  height={1080}
  className="rounded-sm"
/>
```

---

### 5. **Flow Diagrams & User Flows**

**Location:** `public/images/case-studies/[project-slug]/flow-diagram.jpg`

**Used In:**
- Case study "UX Solution" section
- Case study "Root Cause Analysis" section (optional)

**Specifications:**
- **Dimensions:** 1920x1080px (16:9 aspect ratio)
- **Format:** PNG (for diagrams with text) or JPG
- **File Size:** < 400KB (optimized)
- **Display Size:** Full width, responsive
- **Style:** Rounded corners, clear typography

**Example Files:**
- `sensei-sigma/flow-diagram.jpg` (User journey)
- `issuance-agent-portal/workflow-diagram.jpg`
- `belema-fintech/transaction-flow.jpg`

---

### 6. **Constraints & System Diagrams**

**Location:** `public/images/case-studies/[project-slug]/constraints-diagram.jpg`

**Used In:**
- Case study "Constraints & Considerations" section

**Specifications:**
- **Dimensions:** 1600x900px (16:9 aspect ratio)
- **Format:** PNG (for diagrams) or JPG
- **File Size:** < 300KB (optimized)
- **Display Size:** Medium width, centered
- **Style:** Clean, technical diagrams

---

### 7. **Before/After Comparison Images**

**Location:** `public/images/case-studies/[project-slug]/before-after.jpg`

**Used In:**
- Case study "Before vs After (UX Perspective)" section

**Specifications:**
- **Dimensions:** 2400x800px (3:1 aspect ratio, split layout)
  - OR two separate images: 1200x800px each
- **Format:** JPG or WebP
- **File Size:** < 400KB (optimized)
- **Display Size:** Full width, split 50/50
- **Style:** Side-by-side comparison

**Alternative (Two Images):**
- `before.jpg` - 1200x800px
- `after.jpg` - 1200x800px

**Code Usage (Split):**
```tsx
<div className="grid grid-cols-2 gap-4">
  <Image
    src="/images/case-studies/sensei-sigma/before.jpg"
    alt="Before - Complex interface"
    width={1200}
    height={800}
  />
  <Image
    src="/images/case-studies/sensei-sigma/after.jpg"
    alt="After - Simplified interface"
    width={1200}
    height={800}
  />
</div>
```

---

### 8. **Branding Images**

**Location:** `public/images/branding/[project-name]-brand-system.jpg`

**Used In:**
- Branding page case studies

**Specifications:**
- **Dimensions:** 1920x1080px (16:9 aspect ratio)
- **Format:** JPG or WebP
- **File Size:** < 300KB (optimized)
- **Display Size:** Full width, responsive
- **Style:** Brand system showcase

**Files:**
- `belema-brand-system.jpg`
- `sensei-sigma-brand.jpg`
- `girmiti-brand.jpg`

**Code Usage:**
```tsx
<Image
  src="/images/branding/belema-brand-system.jpg"
  alt="Belema Fintech Brand System"
  width={1920}
  height={1080}
  className="rounded-sm"
/>
```

---

## 📐 Size Reference Table

| Image Type | Dimensions | Aspect Ratio | Max File Size | Format |
|------------|-----------|--------------|---------------|--------|
| Profile Image | 800×800px | 1:1 (Square) | 200KB | JPG/WebP/PNG |
| Hero Image | 1920×1080px | 16:9 | 300KB | JPG/WebP |
| Preview Image | 1600×900px | 16:9 | 250KB | JPG/WebP |
| UI Screenshot | 1440×900px | 16:10 | 300KB | JPG/WebP |
| Flow Diagram | 1920×1080px | 16:9 | 400KB | PNG/JPG |
| Constraints Diagram | 1600×900px | 16:9 | 300KB | PNG/JPG |
| Before/After | 2400×800px | 3:1 | 400KB | JPG/WebP |
| Brand System | 1920×1080px | 16:9 | 300KB | JPG/WebP |

---

## 🎨 Visual Layout Guide

### Home Page Hero Section
```
┌─────────────────────────────────────────────────┐
│  [Profile Image]    Name                        │
│  256-320px         Role Line                    │
│  Circular          Statement                    │
│                    [CTAs]                       │
└─────────────────────────────────────────────────┘
```

### Case Study Card (Home/Work Page)
```
┌─────────────────────────────┐
│  [Preview Image]            │
│  1600×900px                 │
│  16:9 aspect                │
├─────────────────────────────┤
│  Title                      │
│  Problem Statement          │
│  View Case Study →          │
└─────────────────────────────┘
```

### Case Study Page Header
```
┌─────────────────────────────────────┐
│  [Hero Image]                       │
│  1920×1080px                        │
│  Full width                         │
│  16:9 aspect                        │
├─────────────────────────────────────┤
│  Title                              │
│  Subtitle                           │
│  Meta Info                          │
└─────────────────────────────────────┘
```

### Before/After Comparison
```
┌──────────────────┬──────────────────┐
│  Before          │  After           │
│  1200×800px      │  1200×800px      │
│  Left side       │  Right side      │
└──────────────────┴──────────────────┘
```

---

## 📝 File Naming Conventions

### Rules:
1. **Lowercase only**: `hero-image.jpg` ✅ (not `Hero-Image.jpg` ❌)
2. **Use hyphens**: `ui-screenshot-1.jpg` ✅ (not `ui_screenshot_1.jpg` ❌)
3. **Be descriptive**: `sensei-sigma-dashboard.jpg` ✅
4. **Number sequences**: `screenshot-1.jpg`, `screenshot-2.jpg`
5. **Consistent format**: Use `.jpg` or `.webp` consistently

### Examples:
- ✅ `hero-image.jpg`
- ✅ `preview.jpg`
- ✅ `ui-screenshot-1.jpg`
- ✅ `flow-diagram.jpg`
- ✅ `before-after.jpg`
- ❌ `Hero Image.jpg` (uppercase, space)
- ❌ `ui_screenshot_1.jpg` (underscore)
- ❌ `screenshot1.jpg` (no hyphen)

---

## ⚡ Optimization Checklist

Before adding images:

- [ ] **Resize to exact dimensions** (don't rely on CSS scaling)
- [ ] **Compress images** using:
  - [TinyPNG](https://tinypng.com/)
  - [Squoosh](https://squoosh.app/)
  - [ImageOptim](https://imageoptim.com/)
- [ ] **Convert to WebP** (better compression, modern browsers)
- [ ] **Keep file sizes** under recommended limits
- [ ] **Test on different devices** (mobile, tablet, desktop)
- [ ] **Verify aspect ratios** match specifications
- [ ] **Add descriptive alt text** for accessibility

---

## 🔍 Where Each Image Type is Used

| Image Type | Used In | Component/Page |
|------------|---------|----------------|
| Profile Image | Home Hero | `app/page.tsx` |
| Profile Image | About Page | `app/about/page.tsx` (optional) |
| Preview Image | Home Featured | `components/ui/CasePreviewCard.tsx` |
| Preview Image | Work Page | `app/work/page.tsx` |
| Hero Image | Case Study Header | `components/case-study/CaseStudyHeader.tsx` |
| UI Screenshot | Case Study Solution | `components/case-study/CaseStudyTemplate.tsx` |
| Flow Diagram | Case Study Solution | `components/case-study/CaseStudyTemplate.tsx` |
| Constraints Diagram | Case Study Constraints | `components/case-study/CaseStudyTemplate.tsx` |
| Before/After | Case Study Comparison | `components/case-study/CaseStudyTemplate.tsx` |
| Brand System | Branding Page | `app/branding/page.tsx` |

---

## 🎯 Quick Reference

### Minimum Required Images:
1. ✅ Profile Image (`Mine.png` - already added)
2. Hero images for each case study (4 projects)
3. Preview images for each case study (4 projects)
4. Branding images (3 projects)

### Optional Images:
- UI screenshots (per case study)
- Flow diagrams (per case study)
- Before/after comparisons (per case study)
- Constraints diagrams (per case study)

---

## 📱 Responsive Breakpoints

Images should work well at these breakpoints:

- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px - 1920px
- **Large Desktop**: 1921px+

Next.js Image component automatically handles responsive sizing based on the `sizes` prop.

---

**Last Updated:** Current portfolio structure
**Total Images Needed:** ~15-20 images (depending on optional content)

