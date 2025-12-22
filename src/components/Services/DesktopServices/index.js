import React, { useState } from 'react';
import TogobagModal from '../../modal/TogobagModal';

const DesktopServices = ({ onContactClick, cards }) => {
  const [isTogobagOpen, setIsTogobagOpen] = useState(false);

  const handleCardAction = (card) => {
    window.dataLayer && window.dataLayer.push({
      event: card.eventName,
      location: 'services',
      page_path: window.location.pathname,
    });

    if (card.action === 'contact' && onContactClick) {
      onContactClick();
    }

    if (card.action === 'togo') {
      setIsTogobagOpen(true);
    }
  };

  return (
    <section id="services" className="bg-slate-25 py-20">
      <div className="mx-auto flex w-full max-w-content-lg flex-col gap-12 px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue">
            Our Services
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
            맞춤 서비스 안내
          </h2>
          <p className="mt-3 text-base text-slate-600">
            모든 행사를 특별하게 만들어 드립니다. 트레비앙의 케이터링과 To-go 서비스를
            확인하세요.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.id}
              id={card.id}
              className="flex h-full flex-col rounded-[28px] border border-white/60 bg-white p-8 shadow-card"
            >
              <div className="flex items-center justify-between text-sm font-semibold text-brand-blue">
                <span className="inline-flex items-center gap-2">
                  <span aria-hidden>{card.icon}</span>
                  {card.badge}
                </span>
                <span className="text-xs text-slate-400">Yonsei Co-op</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">{card.title}</h3>
              <p className="mt-3 text-base text-slate-600">{card.description}</p>
              <div className="mt-6 flex flex-1 gap-6">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="h-44 w-44 rounded-2xl object-cover shadow-md"
                />
                <ul className="flex flex-1 flex-col gap-3 text-sm text-slate-600">
                  {card.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-brand-blue" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <span className="text-sm font-medium text-slate-500">
                  {card.meta}
                </span>
                <button
                  type="button"
                  onClick={() => handleCardAction(card)}
                  className={`rounded-pill px-6 py-2.5 text-sm font-semibold shadow-sm ${
                    card.action === 'contact'
                      ? 'bg-brand-blue text-white hover:bg-brand-blueDark'
                      : 'border border-brand-blue/30 bg-white text-brand-blue hover:bg-brand-blue/5'
                  }`}
                >
                  {card.ctaLabel}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      <TogobagModal isOpen={isTogobagOpen} onClose={() => setIsTogobagOpen(false)} />
    </section>
  );
};

export default DesktopServices;