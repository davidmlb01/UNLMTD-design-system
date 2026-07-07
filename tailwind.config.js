/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './.storybook/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Base
        'unlmtd-black':     '#0D0D0D',
        'unlmtd-cream':     '#EDE8DC',
        'unlmtd-bone':      '#F5F0E8',
        'unlmtd-ink':       '#1A1A1A',
        // Secondary
        'unlmtd-champagne': '#C4A45A',
        'unlmtd-rust':      '#C1440E',
        // Neutrals
        neutral: {
          100: '#F5F0E8',
          200: '#EDE8DC',
          300: '#D4CEC2',
          400: '#A09A8E',
          500: '#6B6560',
          600: '#3D3935',
          700: '#2A2620',
          800: '#1A1814',
          900: '#0D0D0D',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', '"Times New Roman"', 'serif'],
        body:    ['"DM Sans"', '"Helvetica Neue"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', '"Courier New"', 'monospace'],
      },
      fontSize: {
        '8xl': ['6rem',  { lineHeight: '1' }],
        '9xl': ['8rem',  { lineHeight: '1' }],
      },
      letterSpacing: {
        widest: '0.2em',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeIn:  { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp: { from: { opacity: '0', transform: 'translateY(16px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
};
