# Images Folder Structure

## 📁 Folder Organization

```
public/
├── images/
│   ├── case-studies/     # Case study screenshots and mockups
│   │   ├── sensei-sigma/
│   │   ├── issuance-agent-portal/
│   │   ├── belema-fintech/
│   │   └── thalappakatti-uae/
│   ├── profile/          # Profile/About page images
│   │   └── profile-image.jpg
│   └── branding/         # Branding work images
│       ├── belema-brand-system.jpg
│       ├── sensei-sigma-brand.jpg
│       └── girmiti-brand.jpg
```

## 🖼️ Image Guidelines

### Recommended Formats:
- **WebP** (best quality/size ratio)
- **AVIF** (smallest file size)
- **JPG/JPEG** (fallback, widely supported)
- **PNG** (for logos, icons with transparency)

### Recommended Sizes:

#### Case Study Images:
- **Hero Images**: 1920x1080px (16:9 aspect ratio)
- **UI Screenshots**: 1440x900px or 1920x1080px
- **Flow Diagrams**: 1920x1080px (16:9)
- **Before/After**: 1200x800px each (split layout)

#### Profile Image:
- **Profile Photo**: 800x800px (1:1 aspect ratio, square)

#### Branding Images:
- **Brand System**: 1920x1080px (16:9)
- **Logo Variations**: 1200x600px (2:1)

### File Naming Convention:
- Use lowercase
- Use hyphens instead of spaces
- Be descriptive: `sensei-sigma-hero-image.jpg`
- Example: `case-study-hero.jpg`, `profile-photo.jpg`

## 📝 How to Use Images

### 1. Replace ImagePlaceholder with Next.js Image

**Before (Placeholder):**
```tsx
<ImagePlaceholder
  label="UI Preview"
  aspectRatio="16:9"
  size="large"
/>
```

**After (Real Image):**
```tsx
import Image from "next/image";

<Image
  src="/images/case-studies/sensei-sigma/hero-image.jpg"
  alt="Sensei SIGMA - Options Trading Application"
  width={1920}
  height={1080}
  className="rounded-sm"
  priority // For above-the-fold images
/>
```

### 2. In Case Study Cards

**File:** `components/ui/CasePreviewCard.tsx`

```tsx
import Image from "next/image";

<Image
  src={`/images/case-studies/${slug}/preview.jpg`}
  alt={`${title} preview`}
  width={800}
  height={450}
  className="w-full h-auto object-cover"
/>
```

### 3. Profile Image

**File:** `app/about/page.tsx`

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

## ⚡ Performance Tips

1. **Optimize Before Uploading**: Compress images using tools like:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
   - [ImageOptim](https://imageoptim.com/)

2. **Use Next.js Image Component**: Always use `next/image` for:
   - Automatic optimization
   - Lazy loading
   - Responsive images
   - Modern formats (WebP, AVIF)

3. **Set Priority for Above-the-Fold Images**:
   ```tsx
   <Image priority src="..." />
   ```

4. **Use Appropriate Sizes**: Don't upload 4K images if you only need 1920px width

## 🔄 Replacing Placeholders

### Step 1: Add Your Images
Place images in the appropriate folders:
- Case study images → `public/images/case-studies/[project-name]/`
- Profile image → `public/images/profile/`
- Branding images → `public/images/branding/`

### Step 2: Update Components
Replace `ImagePlaceholder` components with `next/image`:

```tsx
// Import Next.js Image
import Image from "next/image";

// Replace placeholder
<Image
  src="/images/case-studies/sensei-sigma/hero.jpg"
  alt="Description"
  width={1920}
  height={1080}
/>
```

### Step 3: Remove ImagePlaceholder Import
Once all images are replaced, you can remove:
```tsx
// Remove this
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
```

## 📋 Checklist

- [ ] Create folder structure
- [ ] Optimize images (compress, resize)
- [ ] Name files descriptively
- [ ] Add images to appropriate folders
- [ ] Replace ImagePlaceholder components
- [ ] Test images load correctly
- [ ] Verify responsive behavior
- [ ] Check image alt text for accessibility

## 🎯 Example File Structure

```
public/
└── images/
    ├── case-studies/
    │   ├── sensei-sigma/
    │   │   ├── hero-image.jpg
    │   │   ├── ui-screenshot-1.jpg
    │   │   ├── ui-screenshot-2.jpg
    │   │   └── flow-diagram.jpg
    │   ├── issuance-agent-portal/
    │   │   ├── hero-image.jpg
    │   │   └── dashboard-screenshot.jpg
    │   └── belema-fintech/
    │       ├── hero-image.jpg
    │       └── mobile-screens.jpg
    ├── profile/
    │   └── profile-image.jpg
    └── branding/
        ├── belema-brand-system.jpg
        └── sensei-sigma-brand.jpg
```

---

**Note**: All images in the `public` folder are served from the root URL.
Example: `public/images/photo.jpg` → `/images/photo.jpg`

