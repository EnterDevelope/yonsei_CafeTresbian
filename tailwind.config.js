/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // 모달 오버레이 fadeIn/fadeOut, 모달 컨텐츠 fadeIn/fadeOut 애니메이션 등록
      animation: {
        fadeIn: 'fadeIn 0.38s cubic-bezier(0.4,0,0.2,1) forwards',
        fadeOut: 'fadeOut 0.44s cubic-bezier(0.4,0,0.2,1) forwards',
        modalContentFadeIn: 'modalContentFadeIn 0.44s cubic-bezier(0.4,0,0.2,1) forwards',
        modalContentFadeOut: 'modalContentFadeOut 0.44s cubic-bezier(0.4,0,0.2,1) forwards',
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
      },
    },
  },
  plugins: [],
}
