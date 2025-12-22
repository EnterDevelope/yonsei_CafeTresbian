import React from 'react';
import HeroBubbles from '../HeroBubbles';

const heroHighlights = [
  '합리적 가격',
  '간편 포장',
  '행사 맞춤 디저트·음료',
];

const DesktopHero = () => {
  const handleScrollTo = (targetId, eventName) => {
    const element = document.getElementById(targetId) || document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' });

    window.dataLayer && window.dataLayer.push({
      event: eventName,
      location: 'hero',
      page_path: window.location.pathname,
    });
  };

  return (
    <section className="relative isolate overflow-hidden bg-white" id="hero">
      <div className="mx-auto flex w-full max-w-content-lg flex-col gap-12 px-4 py-16 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14 lg:px-8 lg:py-24">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-pill border border-brand-blue/20 bg-brand-blue/5 px-4 py-1 text-sm font-semibold text-brand-blue">
            Yonsei Café Trebien
          </div>
          <div className="space-y-5">
            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 lg:text-5xl">
              동아리 행사·세미나 준비,
              <br />
              <span className="bg-gradient-to-r from-brand-blue to-brand-indigo bg-clip-text text-transparent">
                트레비앙에서!
              </span>
              <br />
              맞춤 케이터링 &amp; To-go Bag
            </h1>
            <p className="text-lg text-slate-600">
              합리적 예산으로 간편하게 준비하는 행사. 트레비앙이 디저트와 음료를
              맞춤으로 챙겨드립니다.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {heroHighlights.map((item) => (
              <span
                key={item}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm ring-1 ring-slate-100"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              aria-label="케이터링 알아보기"
              onClick={() => handleScrollTo('catering-service-card', 'catering_cta_click')}
              className="rounded-pill bg-brand-blue px-6 py-3 text-base font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-brand-blueDark"
            >
              케이터링 알아보기
            </button>
            <button
              type="button"
              aria-label="To-go 서비스 안내"
              onClick={() => handleScrollTo('togo-service-card', 'togo_cta_click')}
              className="rounded-pill border border-brand-blue/30 bg-white px-6 py-3 text-base font-semibold text-brand-blue shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-blue/5"
            >
              To-go 서비스 안내
            </button>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 rounded-[32px] bg-hero-gradient blur-3xl" aria-hidden />
            <HeroBubbles />
            <img
              src={`${process.env.PUBLIC_URL}/cafe_image.png`}
              alt="카페 내부"
              loading="lazy"
              className="relative z-10 w-full rounded-[32px] border border-white/70 object-cover shadow-floating"
            />
            <div className="absolute -bottom-6 right-6 z-20 rounded-2xl bg-white/95 px-5 py-4 text-sm font-semibold text-slate-700 shadow-card">
              하단의 매장 운영 정보를 확인해주세요!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopHero;