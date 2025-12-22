import React from 'react';

/**
 * HeroBubbles: Hero 섹션의 cafe 이미지 뒤에 배치하는 애니메이션 원 그룹 (데스크탑과 동일하게 모바일에도 적용)
 */
const HeroBubbles = () => {
  // 모바일: 이미지 바깥쪽/모서리로 분산, 데스크탑: 기존 위치
  const bubbles = [
    {
      className:
        'pointer-events-none absolute -left-4 top-0 h-8 w-8 opacity-60 animate-bubbleFloat md:-left-4 md:-top-3 md:h-10 md:w-10',
      color: '#2563eb',
    },
    {
      className:
        // 모바일: 오른쪽 상단, 데스크탑: 왼쪽 중상단
        'pointer-events-none absolute right-0 top-8 h-7 w-7 opacity-40 animate-bubbleFloatAlt md:left-8 md:top-4 md:h-8 md:w-8',
      color: '#60a5fa',
    },
    {
      className:
        // 모바일: 오른쪽 중간, 데스크탑: 오른쪽 상단
        'pointer-events-none absolute right-2 top-1/3 h-10 w-10 opacity-50 animate-bubbleFloat md:-right-3 md:top-1 md:h-12 md:w-12',
      color: '#3b82f6',
    },
    {
      className:
        // 모바일: 오른쪽 하단, 데스크탑: 오른쪽 하단
        'pointer-events-none absolute right-1 bottom-2 h-7 w-7 opacity-40 animate-bubbleFloatAlt md:right-7 md:bottom-4 md:h-8 md:w-8',
      color: '#2563eb',
    },
    {
      className:
        // 모바일: 왼쪽 하단, 데스크탑: 왼쪽 하단
        'pointer-events-none absolute left-2 bottom-2 h-8 w-8 opacity-60 animate-bubbleFloat md:left-4 md:-bottom-2 md:h-7 md:w-7',
      color: '#60a5fa',
    },
    {
      className:
        // 모바일: 상단 중앙, 데스크탑: 오른쪽 상단
        'pointer-events-none absolute left-1/3 top-3 h-6 w-6 -translate-x-1/2 opacity-70 animate-bubbleFloatAlt md:left-auto md:right-16 md:top-10',
      color: '#2563eb',
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none select-none z-0" aria-hidden>
      {bubbles.map((b, i) => (
        <svg
          key={i}
          className={b.className}
          style={{ zIndex: 0 }}
          width="100%" height="100%" viewBox="0 0 100 100" fill="none"
        >
          <circle cx="50" cy="50" r="50" fill={b.color} />
        </svg>
      ))}
    </div>
  );
};

export default HeroBubbles;
