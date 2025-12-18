# GitHub Push Guide

## ✅ What's Done

1. ✅ Git repository initialized
2. ✅ Remote added: `https://github.com/Mariselvamkarthi/Code-Trails.git`
3. ✅ `.gitignore` updated to exclude Cursor config files:
   - `.cursor/`
   - `.cursorrules`
   - `.cursorignore`
4. ✅ All files staged and committed
5. ⏳ Ready to push (needs authentication)

## 🔐 Authentication Required

To push to GitHub, you need to authenticate. Choose one method:

### Method 1: GitHub Personal Access Token (Recommended)

1. **Create a Personal Access Token:**
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token" → "Generate new token (classic)"
   - Name: "Portfolio Push"
   - Select scopes: `repo` (full control of private repositories)
   - Click "Generate token"
   - **Copy the token** (you won't see it again!)

2. **Push using token:**
   ```bash
   git push -u origin main
   ```
   - When prompted for username: Enter your GitHub username
   - When prompted for password: **Paste the token** (not your password)

### Method 2: GitHub CLI

1. **Install GitHub CLI** (if not installed):
   ```bash
   winget install GitHub.cli
   ```

2. **Authenticate:**
   ```bash
   gh auth login
   ```

3. **Push:**
   ```bash
   git push -u origin main
   ```

### Method 3: SSH (Most Secure)

1. **Generate SSH key** (if you don't have one):
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

2. **Add SSH key to GitHub:**
   - Copy public key: `cat ~/.ssh/id_ed25519.pub`
   - Go to: https://github.com/settings/keys
   - Click "New SSH key"
   - Paste your public key

3. **Change remote to SSH:**
   ```bash
   git remote set-url origin git@github.com:Mariselvamkarthi/Code-Trails.git
   ```

4. **Push:**
   ```bash
   git push -u origin main
   ```

## 📋 Quick Push Commands

Once authenticated, run:

```bash
# Check status
git status

# Push to GitHub
git push -u origin main
```

## ✅ What Will Be Pushed

All portfolio files **EXCEPT**:
- ❌ `node_modules/` (dependencies)
- ❌ `.next/` (build files)
- ❌ `.env*` (environment variables)
- ❌ `.cursor/` (Cursor config - excluded)
- ❌ `.cursorrules` (Cursor rules - excluded)
- ❌ `.cursorignore` (Cursor ignore - excluded)
- ❌ Build artifacts and logs

## 🔍 Verify Before Push

Check what will be pushed:
```bash
git ls-files | Select-Object -First 30
```

## 🚀 After Successful Push

Your code will be available at:
**https://github.com/Mariselvamkarthi/Code-Trails**

---

**Current Status:** ✅ Code committed, ready to push (needs authentication)

