import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// No need for @tailwindcss/vite in v3
export default defineConfig({
  plugins: [react()],
})
