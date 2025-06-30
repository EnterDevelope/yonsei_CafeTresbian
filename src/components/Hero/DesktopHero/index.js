import React from 'react';
import HeroBubbles from '../HeroBubbles';

const DesktopHero = ({ onContactClick }) => {
  console.log('DesktopHero rendering'); // 디버깅용 로그

  return (
    // Hero 섹션 전체 래퍼
    <section className="py-12 bg-[var(--color-background)] overflow-hidden" id="hero">
      {/* Hero 컨테이너 */}
      <div className="max-w-[1200px] mx-auto px-6 flex items-center gap-16">
        {/* 텍스트 영역 */}
        <div className="flex-1 max-w-[580px] z-[1]">
          <h1 className="text-[var(--font-size-h1)] font-bold text-[var(--color-text-primary)] leading-tight mb-6">
            동아리 행사·세미나도 <br />
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent-indigo)] bg-clip-text text-transparent font-bold px-0.5">트레비앙에서!</span> <br />
            맞춤 케이터링 & To-go Bag
          </h1>
          <p className="text-[var(--color-text-secondary)] text-lg leading-normal mb-8">
            합리적 가격·간편 포장·행사 맞춤 디저트·음료 제공
          </p>
          {/* CTA 버튼 영역 */}
          <div className="flex gap-5 mt-9">
            <button
              className="text-base font-semibold py-2.5 px-6 border-none rounded-full shadow-[0_2px_12px_rgba(37,99,235,0.11)] cursor-pointer transition-colors duration-150 outline-none bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] focus:bg-[var(--color-primary-dark)] hover:-translate-y-0.5 hover:scale-[1.04]"
              onClick={() => {
                const cateringCard = document.getElementById('catering-service-card');
                if (cateringCard) {
                  cateringCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else {
                  const servicesSection = document.getElementById('services');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
              tabIndex={0}
              aria-label="케이터링 알아보기"
            >
              케이터링 알아보기
            </button>
            <button
              className="text-base font-semibold py-2.5 px-6 border-none rounded-full shadow-[0_2px_12px_rgba(37,99,235,0.11)] cursor-pointer transition-colors duration-150 outline-none bg-white text-[var(--color-primary)] border-2 border-[var(--color-primary)] shadow-[0_2px_12px_rgba(37,99,235,0.07)] hover:bg-[#f1f5ff] hover:text-[var(--color-primary-dark)] hover:border-[var(--color-primary-dark)] focus:bg-[#f1f5ff] focus:text-[var(--color-primary-dark)] focus:border-[var(--color-primary-dark)] hover:-translate-y-0.5 hover:scale-[1.04]"
              onClick={() => {
                const togoCard = document.getElementById('togo-service-card');
                if (togoCard) {
                  togoCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else {
                  const servicesSection = document.getElementById('services');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
              tabIndex={0}
              aria-label="To-go 서비스 안내"
            >
              To-go 서비스 안내
            </button>
          </div>
        </div>
        {/* 이미지 영역 */}
        <div className="flex-1 flex flex-col items-center relative overflow-visible">
          {/* 애니메이션 원 그룹 */}
          <HeroBubbles variant="desktop" />
          <img
            src={`${process.env.PUBLIC_URL}/cafe_image.png`}
            alt="카페 내부"
            className="relative z-10 w-full max-w-[400px] h-auto rounded-2xl shadow-md object-cover aspect-[16/10] block mx-auto"
            loading="lazy"
            onError={(e) => {
              console.error('Image failed to load:', e.target.src);
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default DesktopHero;