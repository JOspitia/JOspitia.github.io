import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// User-site repo: this site is served at the ROOT of the domain
// (https://jospitia.github.io/), NOT under a /<repo>/ subpath.
// Therefore the Vite base must be '/'.
// If you fork this and the site ends up under a project page
// (username.github.io/repo-name/), change this to '/repo-name/'.
// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
})
