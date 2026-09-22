/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // Minimal placeholder palette — final colors land in a later WU once
      // the user picks the accent hue. Using tailwind defaults for everything
      // except these tokens so placeholders don't look broken.
      colors: {
        accent: {
          DEFAULT: '#3b82f6', // blue-500 placeholder per product decision
        },
        ink: {
          DEFAULT: '#0f172a', // slate-900 placeholder
        },
      },
      fontFamily: {
        // Inter via Google Fonts loaded in index.html (PR 3). System fallback
        // here so PR 1 placeholders render with a sensible sans-serif.
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
