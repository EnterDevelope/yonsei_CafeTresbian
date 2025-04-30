import React from 'react';

/**
 * HeroBubbles: Hero 섹션의 cafe 이미지 뒤에 배치하는 애니메이션 원 그룹 (데스크탑과 동일하게 모바일에도 적용)
 */
const HeroBubbles = () => {
  // 모바일: 이미지 바깥쪽/모서리로 분산, 데스크탑: 기존 위치
  const bubbles = [
    {
      className:
        // 모바일: 왼쪽 상단, 데스크탑: 왼쪽 상단
        'absolute w-8 h-8 -left-4 top-0 opacity-60 z-0 pointer-events-none bubble-float ' +
        'md:w-10 md:h-10 md:left-[-16px] md:top-[-12px]',
      color: '#2563eb',
    },
    {
      className:
        // 모바일: 오른쪽 상단, 데스크탑: 왼쪽 중상단
        'absolute w-7 h-7 right-0 top-8 opacity-40 z-0 pointer-events-none bubble-float2 ' +
        'md:w-8 md:h-8 md:left-[32px] md:top-[16px]',
      color: '#60a5fa',
    },
    {
      className:
        // 모바일: 오른쪽 중간, 데스크탑: 오른쪽 상단
        'absolute w-10 h-10 right-2 top-1/3 opacity-50 z-0 pointer-events-none bubble-float3 ' +
        'md:w-12 md:h-12 md:right-[-12px] md:top-[4px]',
      color: '#3b82f6',
    },
    {
      className:
        // 모바일: 오른쪽 하단, 데스크탑: 오른쪽 하단
        'absolute w-7 h-7 right-1 bottom-2 opacity-40 z-0 pointer-events-none bubble-float4 ' +
        'md:w-8 md:h-8 md:right-[28px] md:bottom-[16px]',
      color: '#2563eb',
    },
    {
      className:
        // 모바일: 왼쪽 하단, 데스크탑: 왼쪽 하단
        'absolute w-8 h-8 left-2 bottom-2 opacity-60 z-0 pointer-events-none bubble-float ' +
        'md:w-7 md:h-7 md:left-[18px] md:bottom-[-10px]',
      color: '#60a5fa',
    },
    {
      className:
        // 모바일: 상단 중앙, 데스크탑: 오른쪽 상단
        'absolute w-6 h-6 left-1/3 -translate-x-1/2 top-3 opacity-70 z-0 pointer-events-none bubble-float2 ' +
        'md:w-6 md:h-6 md:right-[60px] md:left-auto md:top-[40px]',
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
