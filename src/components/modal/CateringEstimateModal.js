import React, { useEffect } from 'react';
import BaseModal from './BaseModal';
import { MODAL_CONTAINER_CLASS } from './modalClassNames';
import { trackModalOpen, trackModalClose, trackButtonClick } from '../../shared/utils/gtm';

const CateringEstimateModal = ({ isOpen, onClose }) => {
  // 모달 열기/닫기 이벤트 추적
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
    trackButtonClick('download_catering_form', 'catering_estimate_modal');
    const link = document.createElement('a');
    link.href = 'files/catering_order.xlsx';
    link.download = 'catering_order.xlsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePhoneClick = () => {
    trackButtonClick('phone_call', 'catering_estimate_modal');
  };

  const handleEmailClick = () => {
    trackButtonClick('email_contact', 'catering_estimate_modal');
  };

  return (
    <BaseModal isOpen={isOpen} onClose={handleClose} className={MODAL_CONTAINER_CLASS}>
      <button
        className="absolute top-5 right-6 bg-transparent border-none text-2xl text-gray-400 cursor-pointer z-20 rounded-full transition-colors duration-150 p-1 hover:bg-blue-100 hover:text-blue-900 focus:bg-blue-100 focus:text-blue-900"
        onClick={handleClose}
        aria-label="닫기"
      >
        &times;
      </button>
      <h3 className="text-xl font-bold mb-3 text-center">케이터링 견적 문의</h3>
      <div className="text-gray-600 text-[0.97rem] my-1 mb-5 text-center leading-snug font-normal">
        양식을 다운받은 후, 채워주신 양식을 이메일로 보내주세요!
      </div>
      <button
        className="inline-flex items-center justify-center my-1 mb-5 px-9 py-4 bg-blue-600 text-white text-[1.11rem] font-semibold border-none rounded-xl shadow-[0_2px_12px_rgba(37,99,235,0.13)] transition-all duration-200 text-center cursor-pointer gap-2 hover:bg-blue-900 focus:bg-blue-900 sm:text-[1.02rem] sm:px-5 sm:py-3"
        onClick={handleDownload}
        tabIndex={0}
        aria-label="케이터링 신청양식 다운받기"
      >
        <span className="text-blue-200 text-lg mr-1" aria-hidden></span>
        케이터링 신청양식 다운받기
      </button>
      <div className="flex items-center gap-2 text-[1.04rem] mb-1">
        <span className="text-blue-600 text-lg mr-1" aria-hidden>☎️</span>
        <span>전화번호:</span>
        <a 
          href="tel:0221234025" 
          className="text-blue-600 underline transition-colors duration-150 hover:text-blue-900 focus:text-blue-900"
          onClick={handlePhoneClick}
        >
          02-2123-4025
        </a>
      </div>
      <div className="flex items-center gap-2 text-[1.04rem] mb-1">
        <span className="text-blue-600 text-lg mr-1" aria-hidden>📧</span>
        <span>이메일:</span>
        <a 
          href="mailto:yscoop01@yonsei.ac.kr" 
          className="text-blue-600 underline transition-colors duration-150 hover:text-blue-900 focus:text-blue-900"
          onClick={handleEmailClick}
        >
          yscoop01@yonsei.ac.kr
        </a>
      </div>
      <div className="text-[#697089] text-[0.97rem] mt-4 text-center leading-snug">
        다운로드가 안되면 문의 바랍니다.
      </div>
    </BaseModal>
  );
};

export default CateringEstimateModal;
