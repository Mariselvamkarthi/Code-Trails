# Image Integration Guide

## 📍 Where to Add Images

**All images go in the `public` folder at the root of your project:**

```
My portfolio dev/
├── public/              ← Add images here
│   └── images/
│       ├── case-studies/
│       ├── profile/
│       └── branding/
├── app/
├── components/
└── ...
```

## 🗂️ Folder Structure Created

I've created this structure for you:

```
public/
└── images/
    ├── case-studies/    # For case study screenshots
    ├── profile/         # For your profile photo
    └── branding/        # For branding work images
```

## 📝 Quick Start

### 1. Add Your Images

Place your images in the appropriate folders:

**Case Study Images:**
```
public/images/case-studies/
├── sensei-sigma/
│   ├── hero-image.jpg
│   ├── ui-screenshot-1.jpg
│   └── flow-diagram.jpg
├── issuance-agent-portal/
│   └── hero-image.jpg
└── belema-fintech/
    └── hero-image.jpg
```

**Profile Image:**
```
public/images/profile/
└── profile-image.jpg
```

**Branding Images:**
```
public/images/branding/
├── belema-brand-system.jpg
└── sensei-sigma-brand.jpg
```

### 2. Use Next.js Image Component

**Example - Case Study Hero:**
```tsx
import Image from "next/image";

<Image
  src="/images/case-studies/sensei-sigma/hero-image.jpg"
  alt="Sensei SIGMA - Options Trading Application"
  width={1920}
  height={1080}
  className="rounded-sm"
  priority
/>
```

**Example - Profile Image:**
```tsx
import Image from "next/image";

<Image
  src="/images/profile/profile-image.jpg"
  alt="Mariselvam - UI/UX Designer"
  width={400}
  height={400}
  className="rounded-sm"
/>
```

## 🔄 Replacing Placeholders

### In Case Study Cards (`components/ui/CasePreviewCard.tsx`)

**Find this:**
```tsx
<ImagePlaceholder
  label="UI Preview"
  aspectRatio="16:9"
  size="medium"
/>
```

**Replace with:**
```tsx
<Image
  src={`/images/case-studies/${slug}/preview.jpg`}
  alt={`${title} preview`}
  width={800}
  height={450}
  className="w-full h-auto object-cover rounded-sm"
/>
```

### In Case Study Header (`components/case-study/CaseStudyHeader.tsx`)

**Find this:**
```tsx
<ImagePlaceholder
  label="Hero Preview"
  aspectRatio="16:9"
  size="large"
/>
```

**Replace with:**
```tsx
<Image
  src={`/images/case-studies/${slug}/hero-image.jpg`}
  alt={`${title} - ${subtitle}`}
  width={1920}
  height={1080}
  className="rounded-sm"
  priority
/>
```

### In About Page (`app/about/page.tsx`)

**Find this:**
```tsx
<ImagePlaceholder
  label="Profile Image"
  aspectRatio="1:1"
  size="medium"
/>
```

**Replace with:**
```tsx
<Image
  src="/images/profile/profile-image.jpg"
  alt="Mariselvam - UI/UX Designer"
  width={400}
  height={400}
  className="rounded-sm"
/>
```

## ⚡ Image Optimization Tips

1. **Compress Images Before Uploading**
   - Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
   - Aim for < 200KB per image

2. **Recommended Sizes:**
   - Hero images: 1920x1080px
   - UI screenshots: 1440x900px
   - Profile photo: 800x800px

3. **File Formats:**
   - Use **WebP** or **JPG** for photos
   - Use **PNG** only for logos/icons with transparency

4. **File Naming:**
   - Use lowercase: `hero-image.jpg`
   - Use hyphens: `case-study-preview.jpg`
   - Be descriptive: `sensei-sigma-dashboard.jpg`

## 📋 Checklist

- [ ] Add images to `public/images/` folders
- [ ] Optimize images (compress, resize)
- [ ] Replace `ImagePlaceholder` components
- [ ] Add proper `alt` text for accessibility
- [ ] Test images load correctly
- [ ] Verify responsive behavior

## 🎯 Important Notes

1. **Public Folder**: Files in `public/` are served from the root URL
   - `public/images/photo.jpg` → `/images/photo.jpg`

2. **Next.js Image Component**: Always use `next/image` (not `<img>`)
   - Automatic optimization
   - Lazy loading
   - Responsive images
   - Modern formats (WebP, AVIF)

3. **Width & Height**: Always specify width and height
   - Prevents layout shift
   - Required for Next.js Image

4. **Priority**: Use `priority` prop for above-the-fold images
   - Hero images
   - First case study card
   - Profile image

## 📚 See Also

- `public/images/README.md` - Detailed folder structure and guidelines
- [Next.js Image Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/images)

---

**Ready to add images?** Just place them in the `public/images/` folders and replace the placeholders!

