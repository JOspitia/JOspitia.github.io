/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      // ===================================================================
      // 2026-10 redesign — "Terminal meets Web Platform"
      //
      // The palette goes high-contrast monochrome + a single electric
      // accent. Default theme is DARK (`html.dark` on <html>); the
      // ThemeToggle component flips to light mode by toggling that class.
      // We keep the `ink-*` family for light surfaces (read backwards)
      // and add a `terminal-*` family for dark surfaces (monochrome
      // ladder from near-black to off-white). `accent` is now the
      // green-400 family — used for status dots, active links, the
      // cursor ring, and the blinking caret. One accent, used sparingly,
      // reads as a real terminal indicator instead of decoration.
      // ===================================================================
      colors: {
        // Light-mode surfaces (light bg, dark text)
        ink: {
          50:  '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
          DEFAULT: '#0a0a0a',
        },
        // Dark-mode surfaces (dark bg, light text) — used with class="dark"
        terminal: {
          50:  '#fafafa',   /* primary text on dark */
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#a3a3a3',   /* muted text on dark */
          400: '#737373',
          500: '#525252',   /* borders on dark */
          600: '#404040',
          700: '#262626',   /* card backgrounds on dark */
          800: '#171717',   /* section backgrounds on dark */
          900: '#0a0a0a',   /* page background on dark */
          DEFAULT: '#0a0a0a',
        },
        // Accent — electric green, terminal cursor style
        accent: {
          DEFAULT: '#00ff88',
          muted:   '#00cc6a',
          dim:     '#00b85f',
        },
        // Status colors used by the StatusBar + footer status
        success: '#00ff88',
        warn:    '#ff8c00',
        error:   '#ff3366',
      },
      fontFamily: {
        // Inter is the body face (loaded via Google Fonts in index.html).
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        // JetBrains Mono is the heading/UI/console face (added in
        // index.html). Mono weight 400/600 covers code listings,
        // section markers, status bar, and ASCII tree without going
        // to bold-strobe territory.
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      borderRadius: {
        // Sharp-first system: corners capped at 2px. Sections and cards
        // are visually square by default; the small `sm` is reserved
        // for things that need a hint of softness (skill chips).
        none: '0',
        sm:   '2px',
        DEFAULT: '0',
        md:   '2px',
        lg:   '2px',
        full: '9999px',  // only for pills / circular avatars
      },
      transitionDuration: {
        // Crisp transitions everywhere; nothing takes more than 200ms
        // so the site feels responsive instead of "smooth-glossy".
        DEFAULT: '150ms',
      },
    },
  },
  plugins: [],
}