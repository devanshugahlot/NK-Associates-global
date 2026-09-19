/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#06101E',
          900: '#0A1E36', // Primary deep navy
          850: '#0D2746',
          800: '#102E52',
          700: '#1A4270',
          600: '#255893',
        },
        brand: {
          blue: '#1974BB', // Exact blue from logo
          dark: '#006DB8',
          hover: '#1463A2',
        },
        sky: {
          tint: '#F0F9FF',
          soft: '#E0F2FE',
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9', // Primary vibrant sky blue
          600: '#0284c7',
          700: '#0369a1',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(10, 30, 54, 0.08)',
        subtle: '0 4px 20px -2px rgba(14, 165, 233, 0.08)',
        elevated: '0 20px 50px -12px rgba(10, 30, 54, 0.12)',
        glow: '0 0 25px rgba(14, 165, 233, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
}
