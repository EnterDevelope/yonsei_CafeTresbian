/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0123B4',
          blueLight: '#E8EDFF',
          blueDark: '#001A80',
          indigo: '#4263EB',
          purple: '#7048E8',
        },
        slate: {
          25: '#f8fafc',
          950: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'Inter', 'Helvetica', 'system-ui', 'sans-serif'],
        display: ['Pretendard', 'Inter', 'Helvetica', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1.25rem',
        '2xl': '1.75rem',
        '3xl': '2.25rem',
        'pill': '999px',
      },
      boxShadow: {
        card: '0 25px 55px -25px rgba(1, 35, 180, 0.35)',
        floating: '0 20px 45px rgba(66, 99, 235, 0.22)',
      },
      maxWidth: {
        'content-lg': '72rem',
        'content-xl': '80rem',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(1,35,180,0.08) 0%, rgba(66,99,235,0.12) 48%, rgba(1,35,180,0.06) 100%)',
      },
      animation: {
        fadeIn: 'fadeIn 0.38s cubic-bezier(0.4,0,0.2,1) forwards',
        fadeOut: 'fadeOut 0.44s cubic-bezier(0.4,0,0.2,1) forwards',
        modalContentFadeIn: 'modalContentFadeIn 0.44s cubic-bezier(0.4,0,0.2,1) forwards',
        modalContentFadeOut: 'modalContentFadeOut 0.44s cubic-bezier(0.4,0,0.2,1) forwards',
        bubbleFloat: 'bubbleFloat 4s ease-in-out infinite',
        bubbleFloatAlt: 'bubbleFloatAlt 4.4s ease-in-out infinite',
        pulseRing: 'pulseRing 2.6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeOut: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        modalContentFadeIn: {
          from: {
            opacity: '0',
            transform: 'translate(-50%, -50%) scale(0.96) translateY(24px)',
          },
          to: {
            opacity: '1',
            transform: 'translate(-50%, -50%) scale(1) translateY(0)',
          },
        },
        modalContentFadeOut: {
          from: {
            opacity: '1',
            transform: 'translate(-50%, -50%) scale(1) translateY(0)',
          },
          to: {
            opacity: '0',
            transform: 'translate(-50%, -50%) scale(0.98) translateY(24px)',
          },
        },
        bubbleFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        bubbleFloatAlt: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(12px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.95)', opacity: '0.55' },
          '70%': { transform: 'scale(1.05)', opacity: '0' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
