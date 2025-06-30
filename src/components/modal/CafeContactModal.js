import React, { useEffect } from 'react';
import BaseModal from './BaseModal';
import { MODAL_CONTAINER_CLASS } from './modalClassNames';
import { trackModalOpen, trackModalClose, trackButtonClick } from '../../shared/utils/gtm';

const CafeContactModal = ({ isOpen, onClose }) => {
  // 모달 열기/닫기 이벤트 추적
  useEffect(() => {
    if (isOpen) {
      trackModalOpen('cafe_contact_modal');
    }
  }, [isOpen]);

  const handleClose = () => {
    trackModalClose('cafe_contact_modal');
    onClose();
  };

  const handlePhoneClick = () => {
    trackButtonClick('phone_call', 'cafe_contact_modal');
  };

  const handleEmailClick = () => {
    trackButtonClick('email_contact', 'cafe_contact_modal');
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
      <h3 className="text-xl font-bold mb-3 text-center">카페 문의</h3>
      <div className="bg-[#eaf1ff] text-blue-900 font-bold rounded-xl py-4 px-6 my-4 text-center text-[1.13rem] border-[1.7px] border-[#b6ccfc] shadow-[0_1px_7px_rgba(30,64,175,0.08)] flex items-center gap-2 justify-center">
        <span className="text-blue-600 text-lg mr-1" aria-hidden></span>
        케이터링 관련은 케이터링 안내를 확인해주세요. <br/>(번호가 달라요!)
      </div>
      <div className="flex items-center gap-2 text-[1.04rem] mb-1">
        <span className="text-blue-600 text-lg mr-1" aria-hidden>☎️</span>
        <span>전화번호:</span>
        <a 
          href="tel:0221236933" 
          className="text-blue-600 underline transition-colors duration-150 hover:text-blue-900 focus:text-blue-900"
          onClick={handlePhoneClick}
        >
          02-2123-6933
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
    </BaseModal>
  );
};

export default CafeContactModal;
