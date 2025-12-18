# Fixing Blank Page Issue

## Immediate Steps

### 1. Check Browser Console
Open DevTools (F12) → Console tab
Look for any red error messages

### 2. Test Simple Page
Visit: http://localhost:3000/test
- If this works → Issue is with home page components
- If this doesn't work → Issue is with Next.js setup

### 3. Clear Cache and Restart
```bash
# Stop dev server (Ctrl+C)
Remove-Item -Recurse -Force .next
npm run dev
```

### 4. Check Network Tab
Open DevTools → Network tab
Refresh page
Check if any files return 404 or error status

## Common Causes

### Cause 1: JavaScript Error
**Symptom**: Blank page, error in console
**Fix**: Check console for specific error message

### Cause 2: Data Import Issue
**Symptom**: Page crashes when loading case studies
**Fix**: I've added error handling to home page

### Cause 3: Theme Provider Issue
**Symptom**: Page renders but is invisible (white on white)
**Fix**: Check if dark mode is causing visibility issues

### Cause 4: CSS Not Loading
**Symptom**: Content exists but unstyled
**Fix**: Check if Tailwind is compiling

## Quick Diagnostic

1. **View Page Source** (Right-click → View Page Source)
   - If you see HTML → JavaScript error
   - If blank → Server not running

2. **Check Elements Tab**
   - If you see `<body>` with content → CSS/styling issue
   - If `<body>` is empty → JavaScript error

3. **Disable JavaScript** (temporarily)
   - If page shows → JavaScript error confirmed
   - If still blank → Server/HTML issue

## Next Steps

After checking console, share the error message and I can provide a specific fix.

