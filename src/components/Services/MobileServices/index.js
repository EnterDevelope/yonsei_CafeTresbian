import React, { useState } from 'react';
import TogobagModal from '../../modal/TogobagModal';

const MobileServices = ({ onContactClick, cards }) => {
  const [isTogobagOpen, setIsTogobagOpen] = useState(false);

  const handleAction = (card) => {
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
    <section id="services" className="bg-slate-25 px-4 py-14">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
          Our Services
        </p>
        <h2 className="mt-2 text-2xl font-extrabold text-slate-900">맞춤 서비스 안내</h2>
        <p className="mt-3 text-sm text-slate-600">
          케이터링과 To-go 서비스를 모바일에서도 간편하게 신청하세요.
        </p>
      </div>
      <div className="mt-8 flex flex-col gap-6">
        {cards.map((card) => (
          <article
            key={card.id}
            id={card.id}
            className="rounded-[26px] border border-white/60 bg-white p-6 shadow-card"
          >
            <div className="flex items-center justify-between text-xs font-semibold text-brand-blue">
              <span className="inline-flex items-center gap-1">
                <span aria-hidden>{card.icon}</span>
                {card.badge}
              </span>
              <span className="text-[10px] text-slate-400">Yonsei Co-op</span>
            </div>
            <img
              src={card.image}
              alt={card.title}
              loading="lazy"
              className="mt-4 h-44 w-full rounded-2xl object-cover"
            />
            <h3 className="mt-4 text-xl font-bold text-slate-900">{card.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{card.description}</p>
            <ul className="mt-4 space-y-2 text-left text-sm text-slate-600">
              {card.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span aria-hidden className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-blue" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-3">
              <div className="rounded-2xl bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-500">
                {card.meta}
              </div>
              <button
                type="button"
                onClick={() => handleAction(card)}
                className={`w-full rounded-pill px-4 py-3 text-sm font-semibold shadow-sm ${
                  card.action === 'contact'
                    ? 'bg-brand-blue text-white'
                    : 'border border-brand-blue/40 bg-white text-brand-blue'
                }`}
              >
                {card.ctaLabel}
              </button>
            </div>
          </article>
        ))}
      </div>
      <TogobagModal isOpen={isTogobagOpen} onClose={() => setIsTogobagOpen(false)} />
    </section>
  );
};

export default MobileServices;
