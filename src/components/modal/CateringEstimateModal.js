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

const CateringEstimateModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      trackModalOpen('catering_estimate_modal');
    }
  }, [isOpen]);

  const handleClose = () => {
    trackModalClose('catering_estimate_modal');
    onClose();
  };

  const handleDownload = () => {
    window.dataLayer && window.dataLayer.push({
      event: 'catering_form_download_click',
      location: 'catering_estimate_modal',
      page_path: window.location.pathname,
    });
    const link = document.createElement('a');
    link.href = 'files/catering_order.xlsx';
    link.download = 'catering_order.xlsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <BaseModal isOpen={isOpen} onClose={handleClose} className={MODAL_CONTAINER_CLASS}>
      <div className="space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue">
              Catering
            </p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">케이터링 견적 문의</h3>
            <p className="mt-2 text-sm text-slate-500">
              양식을 내려 받은 뒤 내용을 작성해 이메일로 보내주세요.
            </p>
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
        <button
          type="button"
          onClick={handleDownload}
          className="flex w-full items-center justify-center gap-2 rounded-pill bg-brand-blue px-6 py-4 text-base font-semibold text-white shadow-card transition hover:bg-brand-blueDark"
        >
          케이터링 신청양식 다운받기
        </button>
        <div className="grid gap-3">
          <ContactRow
            icon="☎️"
            label="전화번호"
            value="02-2123-4025"
            href="tel:0221234025"
            onClick={() => trackButtonClick('phone_call', 'catering_estimate_modal')}
          />
          <ContactRow
            icon="📧"
            label="이메일"
            value="yscoop01@yonsei.ac.kr"
            href="mailto:yscoop01@yonsei.ac.kr"
            onClick={() => trackButtonClick('email_contact', 'catering_estimate_modal')}
          />
        </div>
        <p className="text-center text-sm text-slate-500">
          다운로드가 되지 않는다면 위 연락처로 문의해주세요.
        </p>
      </div>
    </BaseModal>
  );
};

export default CateringEstimateModal;
