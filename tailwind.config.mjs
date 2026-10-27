/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cobalt: {
          50: '#EEF5FF',
          100: '#D9E8FF',
          200: '#BCD7FF',
          300: '#8EBFFF',
          400: '#599CFF',
          500: '#2B74FF',
          600: '#0047AB', // Brand Anchor Cobalt
          700: '#003887',
          800: '#002B69',
          900: '#001E4A',
          950: '#00112B',
        },
        crimson: {
          50: '#FDF2F2',
          100: '#FDE3E3',
          200: '#FBCCCC',
          300: '#F6A8A8',
          400: '#EE7676',
          500: '#E04B4B',
          600: '#B22222', // Brand Anchor Crimson
          700: '#911B1B',
          800: '#781A1A',
          900: '#641B1B',
          950: '#370A0A',
        },
        charcoal: {
          50: '#F4F5F7',
          100: '#E4E7EC',
          200: '#CFD4DC',
          300: '#AEB6C4',
          400: '#8893A6',
          500: '#687387',
          600: '#515A6B',
          700: '#3D4452',
          750: '#1F2637', // Hairline border subtle
          800: '#171C28', // Elevated card / Interactive hover
          850: '#10141E', // Secondary surface
          900: '#0A0D14', // Primary dark section surface
          950: '#06080D', // Root background (Obsidian Chiaroscuro)
        },
        paper: {
          pure: '#FFFFFF',
          bone: '#FBFBFA',
          warm: '#F4F4F0',
          sand: '#E8E8E2',
        },
      },
      fontFamily: {
        display: ['"Cabinet Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['"Satoshi"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        container: '80rem', // 1280px
        prose: '42.5rem',   // 680px
      },
      borderRadius: {
        none: '0px',
        sm: '2px',
        DEFAULT: '4px',
        md: '6px',
      },
      boxShadow: {
        'glow-cobalt': '0 0 48px -12px rgba(0, 71, 171, 0.45)',
        'glow-crimson': '0 0 36px -10px rgba(178, 34, 34, 0.40)',
        'surface-card': '0 20px 40px -24px rgba(0, 0, 0, 0.70)',
      },
    },
  },
  plugins: [],
};
