import React, { useEffect } from 'react';
import BaseModal from './BaseModal';
import { MODAL_CONTAINER_CLASS } from './modalClassNames';
import { trackModalOpen, trackModalClose, trackButtonClick } from '../../shared/utils/gtm';

const ContactRow = ({ icon, label, value, href, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-base font-semibold text-slate-700 transition hover:border-brand-blue/30"
  >
    <span className="flex items-center gap-2">
      <span aria-hidden>{icon}</span>
      {label}
    </span>
    <span className="text-brand-blue">{value}</span>
  </a>
);

const CafeContactModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      trackModalOpen('cafe_contact_modal');
    }
  }, [isOpen]);

  const handleClose = () => {
    trackModalClose('cafe_contact_modal');
    onClose();
  };

  return (
    <BaseModal isOpen={isOpen} onClose={handleClose} className={MODAL_CONTAINER_CLASS}>
      <div className="space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue">
              Contact
            </p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">카페 문의</h3>
          </div>
          <button
            type="button"
            aria-label="닫기"
            onClick={handleClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-2xl text-slate-500 shadow-sm"
          >
            ×
          </button>
        </div>
        <div className="rounded-3xl bg-brand-blue/5 px-5 py-4 text-center text-sm font-semibold text-brand-blue">
          케이터링 문의는 케이터링 신청 버튼을 눌러 확인해주세요.<br></br>(일반 문의 번호와 케이터린 문의 번호가 달라요!)
        </div>
        <div className="space-y-3">
          <ContactRow
            icon="☎️"
            label="전화번호"
            value="02-2123-6933"
            href="tel:0221236933"
            onClick={() => trackButtonClick('phone_call', 'cafe_contact_modal')}
          />
          <ContactRow
            icon="📧"
            label="이메일"
            value="yscoop01@yonsei.ac.kr"
            href="mailto:yscoop01@yonsei.ac.kr"
            onClick={() => trackButtonClick('email_contact', 'cafe_contact_modal')}
          />
        </div>
      </div>
    </BaseModal>
  );
};

export default CafeContactModal;
