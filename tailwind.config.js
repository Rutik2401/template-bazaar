/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,jsx,mdx}', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        party: ['var(--font-poppins)', 'Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#0f172a',
          soft: '#334155',
          muted: '#64748b',
        },
        gold: {
          50: '#fbf6e9',
          100: '#f6ead0',
          200: '#ecd49b',
          300: '#e2bd66',
          400: '#d4a437',
          500: '#b8860b',
          600: '#9a6f08',
          700: '#7a5606',
        },
        maroon: {
          400: '#9b2c3a',
          500: '#7a1f2b',
          600: '#5e1822',
          700: '#45111a',
        },
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(15, 23, 42, 0.18)',
        lift: '0 24px 60px -20px rgba(15, 23, 42, 0.30)',
        card: '0 18px 50px -22px rgba(15, 23, 42, 0.45)',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.4s ease both',
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
