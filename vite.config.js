import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { REPO_NAME } from './repo-config.js'

// Get base path for GitHub Pages
const getBasePath = () => {
  // Try to get from GitHub Actions environment first
  if (process.env.GITHUB_REPOSITORY) {
    const repoName = process.env.GITHUB_REPOSITORY.split('/')[1]
    if (repoName.includes('.github.io')) {
      return '/'
    }
    return `/${repoName}/`
  }
  // Fallback to config file
  if (REPO_NAME === '' || REPO_NAME.includes('.github.io')) {
    return '/'
  }
  return `/${REPO_NAME}/`
}

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? getBasePath() : '/',
})

