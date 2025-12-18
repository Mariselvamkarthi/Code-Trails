# Troubleshooting Guide - Localhost Not Showing Content

## Quick Checks

### 1. Is the Dev Server Running?
```bash
npm run dev
```
You should see:
```
▲ Next.js 14.2.35
- Local:        http://localhost:3000
```

### 2. Check Browser Console
Open browser DevTools (F12) and check:
- **Console tab**: Look for JavaScript errors
- **Network tab**: Check if files are loading (should see 200 status)
- **Elements tab**: Check if HTML is rendering

### 3. Common Issues & Fixes

#### Issue: Blank Page / White Screen
**Possible Causes:**
- JavaScript error preventing render
- Client/Server component mismatch
- Missing data

**Fix:**
1. Check browser console for errors
2. Verify all imports are correct
3. Check if `getAllCaseStudies()` returns data

#### Issue: Components Not Rendering
**Possible Causes:**
- Missing "use client" directive
- Theme provider not wrapping correctly
- CSS not loading

**Fix:**
1. Verify `app/layout.tsx` has ThemeProvider
2. Check `app/globals.css` is imported
3. Verify Tailwind is configured

#### Issue: Case Studies Not Showing
**Possible Causes:**
- Data file not loading
- Empty array returned
- Component error

**Fix:**
1. Check `data/caseStudies.ts` exports correctly
2. Verify `getAllCaseStudies()` function exists
3. Check browser console for errors

---

## Debug Steps

### Step 1: Verify Dev Server
```bash
# Stop current server (Ctrl+C)
# Clear cache
rm -rf .next
# Restart
npm run dev
```

### Step 2: Check Build
```bash
npm run build
```
If build fails, fix errors first.

### Step 3: Check Browser
1. Open http://localhost:3000
2. Open DevTools (F12)
3. Check Console for errors
4. Check Network tab for failed requests

### Step 4: Verify Data
Add temporary console.log in `app/page.tsx`:
```typescript
export default function Home() {
  const caseStudies = getAllCaseStudies();
  console.log('Case studies:', caseStudies); // Add this
  // ... rest of component
}
```

---

## Common Error Messages

### "Cannot read property of undefined"
- **Cause**: Data not loading
- **Fix**: Check `getAllCaseStudies()` returns data

### "use client" directive missing
- **Cause**: Server component using client-only features
- **Fix**: Add "use client" at top of file

### "Module not found"
- **Cause**: Incorrect import path
- **Fix**: Check import paths match file structure

---

## Quick Test

Create a simple test page to verify setup:

1. Create `app/test/page.tsx`:
```typescript
export default function Test() {
  return <h1>Test Page Works!</h1>;
}
```

2. Visit http://localhost:3000/test
3. If this works, the issue is with specific components
4. If this doesn't work, the issue is with Next.js setup

---

## Still Not Working?

1. **Check Node version**: Should be 18+
   ```bash
   node --version
   ```

2. **Reinstall dependencies**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Clear Next.js cache**:
   ```bash
   rm -rf .next
   npm run dev
   ```

4. **Check for TypeScript errors**:
   ```bash
   npm run build
   ```

