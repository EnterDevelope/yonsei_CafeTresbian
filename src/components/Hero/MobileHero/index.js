import React from 'react';
import HeroBubbles from '../HeroBubbles';

// 스크롤 함수 추가
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    // 헤더 높이만큼 오프셋 추가 (옵션)
    const headerOffset = 70; // 헤더 높이 (DesktopHeader/styles.module.css 참조)
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    // 기본 스크롤 (오프셋 없이)
    // section.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.warn(`Element with id '${id}' not found for scrolling.`);
  }
};

const MobileHero = ({ onContactClick }) => {
  return (
    // Hero 섹션 전체 래퍼
    <section className="py-12 px-4 bg-[var(--color-background)] overflow-hidden text-center" id="hero">
      {/* Hero 컨테이너 */}
      <div className="flex flex-col items-center gap-8">
        {/* 이미지 영역 */}
        <div className="w-full order-1 mb-6 relative">
          {/* 애니메이션 원 그룹 */}
          <HeroBubbles variant="mobile" />
          <img
            src={process.env.PUBLIC_URL + '/cafe_image.png'}
            alt="카페 트레비앙 내부 전경"
            className="w-full max-w-[400px] h-auto rounded-2xl shadow-md object-cover aspect-[16/10] block mx-auto relative z-10"
            loading="eager"
          />
        </div>
        {/* 텍스트 영역 */}
        <div className="w-full order-2">
          <h1 className="text-[clamp(2rem,4vw,2.5rem)] font-bold text-[var(--color-text-primary)] leading-tight mb-2.5">
            동아리 행사·세미나 준비는<br />
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent-indigo)] bg-clip-text text-transparent font-bold px-0.5">트레비앙에서!</span> <br />
            맞춤 케이터링 & To-go Bag
          </h1>
          <p className="text-[var(--color-text-secondary)] text-base leading-normal mb-8 max-w-[480px] mx-auto">
            합리적 가격·간편 포장·행사 맞춤 디저트·음료 제공
          </p>
          {/* CTA 버튼 영역 */}
          <div className="flex flex-col items-center gap-3 w-full">
            <button
              className="py-3 px-6 rounded-lg text-base font-medium cursor-pointer transition-all border-none text-center whitespace-nowrap w-4/5 max-w-[300px] bg-[var(--color-primary)] text-[var(--color-background)] shadow-sm hover:bg-[var(--color-primary-dark)] hover:shadow-md hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-primary-light)]"
              onClick={() => scrollToSection('services')}
            >
              케이터링 알아보기
            </button>
            <button
              className="py-3 px-6 rounded-lg text-base font-medium cursor-pointer transition-all border text-center whitespace-nowrap w-4/5 max-w-[300px] bg-[var(--color-background)] text-[var(--color-primary)] border-[var(--color-border)] shadow-sm hover:bg-[var(--color-primary-light)] hover:border-[var(--color-primary-light)] hover:shadow-md hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-primary-light)]"
              onClick={() => scrollToSection('togo-service-card')}
            >
              To-go 서비스 안내
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileHero;