import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Change 'portfolio' to match your GitHub repository name
  // If your repo is 'username.github.io', change this to '/'
  // If your repo is 'my-portfolio', change this to '/my-portfolio/'
  base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
})

