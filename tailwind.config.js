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
        // ── Category-card decorative motifs ──────────────────────
        rise: {
          '0%': { transform: 'translateY(8px) scale(0.85)', opacity: '0' },
          '20%': { opacity: '0.95' },
          '100%': { transform: 'translateY(-30px) scale(1)', opacity: '0' },
        },
        twinkle: {
          '0%, 100%': { transform: 'scale(0.7)', opacity: '0.3' },
          '50%': { transform: 'scale(1)', opacity: '1' },
        },
        flicker: {
          '0%, 100%': { transform: 'scaleY(1) scaleX(1)', opacity: '0.9' },
          '35%': { transform: 'scaleY(1.18) scaleX(0.94)', opacity: '1' },
          '65%': { transform: 'scaleY(0.9) scaleX(1.04)', opacity: '0.82' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-7deg)' },
          '50%': { transform: 'rotate(7deg)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        confetti: {
          '0%': { transform: 'translateY(-12px) rotate(0deg)', opacity: '0' },
          '15%': { opacity: '1' },
          '100%': { transform: 'translateY(44px) rotate(220deg)', opacity: '0' },
        },
        'bar-grow': {
          '0%, 100%': { transform: 'scaleY(0.35)' },
          '50%': { transform: 'scaleY(1)' },
        },
        sweep: {
          '0%': { transform: 'translateX(-130%) skewX(-12deg)' },
          '100%': { transform: 'translateX(160%) skewX(-12deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { transform: 'scale(0.8)', opacity: '0.3' },
          '50%': { transform: 'scale(1.12)', opacity: '0.7' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(3px, -7px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.4s ease both',
        float: 'float 4s ease-in-out infinite',
        rise: 'rise 3s ease-in-out infinite',
        twinkle: 'twinkle 2.2s ease-in-out infinite',
        flicker: 'flicker 1.5s ease-in-out infinite',
        sway: 'sway 3.6s ease-in-out infinite',
        'spin-slow': 'spin-slow 9s linear infinite',
        confetti: 'confetti 2.8s linear infinite',
        'bar-grow': 'bar-grow 2.4s ease-in-out infinite',
        sweep: 'sweep 2.8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2.8s ease-in-out infinite',
        drift: 'drift 3.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
