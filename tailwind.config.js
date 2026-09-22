/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // Final palette (WU-10). Accent is the blue-500/600/700 family from
      // the Tailwind default scale; ink is slate-50 → slate-900 so we have
      // neutral surface tokens that pair with accent for borders, dividers,
      // and text on light backgrounds. The DEFAULT entry keeps utilities
      // like `bg-accent` / `text-ink` working alongside the numbered shades.
      colors: {
        accent: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          DEFAULT: '#3b82f6',
        },
        ink: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          DEFAULT: '#0f172a',
        },
      },
      fontFamily: {
        // Inter is the primary face (loaded via Google Fonts in index.html).
        // System stack follows so the page still renders with a sensible
        // sans-serif if Google Fonts is blocked or slow.
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}