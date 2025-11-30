# GitHub Pages Deployment Guide

## Quick Fix for Blank Page

The blank white page is usually caused by an incorrect base path. Follow these steps:

### Step 1: Find Your Repository Name
1. Go to your GitHub repository
2. Look at the URL: `https://github.com/YOUR_USERNAME/REPO_NAME`
3. Note the `REPO_NAME` part

### Step 2: Update Configuration
1. Open `repo-config.js`
2. Change `REPO_NAME` to match your repository name
   - If your repo is `portfolio`, keep it as `'portfolio'`
   - If your repo is `my-portfolio`, change to `'my-portfolio'`
   - If your repo is `YOUR_USERNAME.github.io`, change to `''` (empty string)

### Step 3: Commit and Push
```bash
git add repo-config.js
git commit -m "Fix base path for GitHub Pages"
git push
```

### Step 4: Wait for Deployment
1. Go to your repository → **Actions** tab
2. Wait for the workflow to complete (1-2 minutes)
3. Refresh your GitHub Pages site

## Verify It's Working

After deployment, check:
1. Open browser DevTools (F12)
2. Go to **Console** tab
3. Look for any red errors
4. Go to **Network** tab and refresh
5. Check if `index.js` and `index.css` files load successfully

If files show 404 errors, the base path is still incorrect.

## Common Issues

- **Blank white page**: Base path doesn't match repo name
- **404 errors on assets**: Update `repo-config.js` with correct repo name
- **Page loads but styles missing**: Check base path in `repo-config.js`

