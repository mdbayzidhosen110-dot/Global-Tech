/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#fff8f0',
          100: '#feebd6',
          200: '#fcd4ac',
          300: '#f9b478',
          400: '#f58a42',
          500: '#f26b1d',
          600: '#e35213',
          700: '#bc3c12',
          800: '#963116',
          900: '#792b16',
        },
        brand: {
          pink:   '#e8517a',
          orange: '#f4874b',
          yellow: '#f5c518',
        },
        dark: {
          900: '#0f0f1a',
          800: '#1a1a2e',
          700: '#252540',
          600: '#333355',
        },
      },
      fontFamily: {
        sans:    ['var(--font-outfit)', 'sans-serif'],
        display: ['var(--font-syne)',   'sans-serif'],
        mono:    ['var(--font-jetbrains)', 'monospace'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #e8517a 0%, #f4874b 50%, #f5c518 100%)',
        'dark-gradient':  'linear-gradient(180deg, #0f0f1a 0%, #1a1a2e 100%)',
      },
      animation: {
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'slide-in-up':    'slideInUp 0.4s ease-out',
        'fade-in':        'fadeIn 0.3s ease-out',
        'fade-in-slow':   'fadeIn 0.6s ease-out',
        'pulse-slow':     'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'shimmer':        'shimmer 1.5s infinite',
        'bounce-in':      'bounceIn 0.5s cubic-bezier(0.34,1.56,0.64,1) both',
        'scale-in':       'scaleIn 0.3s cubic-bezier(0.34,1.56,0.64,1) both',
        'spin-slow':      'spin 3s linear infinite',
      },
      keyframes: {
        slideInRight: {
          '0%':   { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)',     opacity: 1 },
        },
        slideInUp: {
          '0%':   { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)',     opacity: 1 },
        },
        fadeIn: {
          '0%':   { opacity: 0 },
          '100%': { opacity: 1 },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        bounceIn: {
          '0%':   { opacity: 0, transform: 'scale(0.85)' },
          '70%':  { opacity: 1, transform: 'scale(1.04)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        scaleIn: {
          '0%':   { opacity: 0, transform: 'scale(0.9)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
      boxShadow: {
        'brand':   '0 4px 24px rgba(244, 135, 75, 0.3)',
        'brand-lg':'0 8px 40px rgba(232, 81, 122, 0.4)',
        'card':    '0 2px 16px rgba(0,0,0,0.08)',
        'card-lg': '0 8px 40px rgba(0,0,0,0.12)',
      },
      transitionTimingFunction: {
        'bounce-out': 'cubic-bezier(0.34,1.56,0.64,1)',
        'smooth':     'cubic-bezier(0.22,1,0.36,1)',
      },
    },
  },
  plugins: [],
};
