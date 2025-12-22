import React from 'react';
import { trackButtonClick } from '../../shared/utils/gtm';

const FloatingCTA = ({ onContactClick }) => {
  const handleContactClick = () => {
    trackButtonClick('floating_contact_button', 'floating_cta');
    onContactClick();
  };

  return (
    <div className="fixed bottom-6 right-4 z-[900] flex flex-col items-end gap-2">
      <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-500 shadow-sm backdrop-blur">
        빠른 문의
      </span>
      <button
        type="button"
        aria-label="문의하기"
        onClick={handleContactClick}
        className="relative rounded-pill bg-brand-blue px-6 py-3 text-base font-semibold text-white shadow-floating transition hover:-translate-y-0.5"
      >
        <span className="absolute inset-0 -z-10 rounded-pill border border-brand-blue/30" />
        문의하기
      </button>
    </div>
  );
};

export default FloatingCTA;
