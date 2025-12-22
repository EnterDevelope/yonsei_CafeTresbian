import React from 'react';
import HeroBubbles from '../HeroBubbles';

const heroHighlights = [
  '합리적 가격',
  '간편 포장',
  '행사 맞춤 디저트·음료',
];

const MobileHero = () => {
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
    <section className="overflow-hidden bg-white px-4 pb-16 pt-8 text-center" id="hero">
      <div className="mx-auto flex max-w-md flex-col items-center gap-10">
        <div className="relative w-full">
          <div className="absolute inset-0 rounded-[32px] bg-hero-gradient blur-3xl" aria-hidden />
          <HeroBubbles />
          <img
            src={`${process.env.PUBLIC_URL}/cafe_image.png`}
            alt="카페 트레비앙 내부 전경"
            loading="eager"
            className="relative z-10 w-full rounded-[32px] border border-white/70 object-cover shadow-floating"
          />
        </div>
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-pill border border-brand-blue/20 bg-brand-blue/5 px-4 py-1 text-xs font-semibold text-brand-blue">
            Yonsei Café Trebien
          </div>
          <h1 className="text-3xl font-extrabold leading-snug text-slate-900">
            동아리 행사·세미나 준비,
            <br />
            <span className="bg-gradient-to-r from-brand-blue to-brand-indigo bg-clip-text text-transparent">
              트레비앙에서!
            </span>
          </h1>
          <p className="text-base text-slate-600">
            케이터링과 To-go Bag 서비스로
            <br />
            빠르게 준비하는 연세대 공식 카페
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {heroHighlights.map((item) => (
              <span
                key={item}
                className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500 shadow-sm ring-1 ring-slate-100"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-col items-center gap-3">
            <button
              type="button"
              onClick={() => handleScrollTo('catering-service-card', 'catering_cta_click')}
              className="w-full rounded-pill bg-brand-blue px-4 py-3 text-base font-semibold text-white shadow-card transition hover:-translate-y-0.5"
            >
              케이터링 알아보기
            </button>
            <button
              type="button"
              onClick={() => handleScrollTo('togo-service-card', 'togo_cta_click')}
              className="w-full rounded-pill border border-brand-blue/40 bg-white px-4 py-3 text-base font-semibold text-brand-blue shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-blue/5"
            >
              To-go 서비스 안내
            </button>
          </div>
          <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
            하단의 매장 운영 정보를 확인해주세요!
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileHero;
