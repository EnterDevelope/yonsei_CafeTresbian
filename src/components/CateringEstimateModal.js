import React, { useState, useEffect, useCallback } from 'react';
import { MODAL_CONTAINER_CLASS } from './modalClassNames';

const CateringEstimateModal = ({ isOpen, onClose }) => {
  const [show, setShow] = useState(isOpen);
  const [fadeOut, setFadeOut] = useState(false);

  // ESC, 오버레이 클릭 닫힘
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      setFadeOut(false);
      document.addEventListener('keydown', handleKeyDown);
    } else if (show) {
      setFadeOut(true);
      const timeout = setTimeout(() => {
        setShow(false);
        setFadeOut(false);
        document.removeEventListener('keydown', handleKeyDown);
      }, 280);
      return () => {
        clearTimeout(timeout);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, show, handleKeyDown]);

  const handleDownload = () => {
    alert('아직 케이터링 양식이 준비되지 않았습니다.');
  };

  if (!show) return null;
  return (
    // 모달 오버레이 Tailwind 적용
    <div
      className={`fixed inset-0 w-screen h-screen bg-[rgba(30,40,80,0.18)] z-[1000] flex items-center justify-center transition-colors duration-200
        ${fadeOut ? 'animate-fadeOut' : 'animate-fadeIn'}`}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* 모달 컨텐츠 Tailwind 적용 */}
      <div
        className={`${MODAL_CONTAINER_CLASS} ${fadeOut ? 'animate-modalContentFadeOut' : 'animate-modalContentFadeIn'}`}
      >
        {/* 닫기 버튼 Tailwind 적용 */}
        <button
          className="absolute top-5 right-6 bg-transparent border-none text-2xl text-gray-400 cursor-pointer z-20 rounded-full transition-colors duration-150 p-1 hover:bg-blue-100 hover:text-blue-900 focus:bg-blue-100 focus:text-blue-900"
          onClick={onClose}
          aria-label="닫기"
        >
          &times;
        </button>
        {/* 제목 */}
        <h3 className="text-xl font-bold mb-3 text-center">케이터링 견적 문의</h3>
        {/* 안내문 */}
        <div className="text-gray-600 text-[0.97rem] my-1 mb-5 text-center leading-snug font-normal">
          양식을 다운받은 후, 채워주신 양식을 이메일로 보내주세요!
        </div>
        {/* 신청양식 다운로드 버튼 */}
        <button
          className="inline-flex items-center justify-center my-1 mb-5 px-9 py-4 bg-blue-600 text-white text-[1.11rem] font-semibold border-none rounded-xl shadow-[0_2px_12px_rgba(37,99,235,0.13)] transition-all duration-200 text-center cursor-pointer gap-2 hover:bg-blue-900 focus:bg-blue-900 sm:text-[1.02rem] sm:px-5 sm:py-3"
          onClick={handleDownload}
          tabIndex={0}
          aria-label="케이터링 신청양식 다운받기"
        >
          <span className="text-blue-200 text-lg mr-1" aria-hidden></span>
          케이터링 신청양식 다운받기
        </button>
        {/* 연락처(전화) */}
        <div className="flex items-center gap-2 text-[1.04rem] mb-1">
          <span className="text-blue-600 text-lg mr-1" aria-hidden>☎️</span>
          <span>전화번호:</span>
          <a href="tel:0221234025" className="text-blue-600 underline transition-colors duration-150 hover:text-blue-900 focus:text-blue-900">02-2123-4025</a>
        </div>
        {/* 연락처(이메일) */}
        <div className="flex items-center gap-2 text-[1.04rem] mb-1">
          <span className="text-blue-600 text-lg mr-1" aria-hidden>📧</span>
          <span>이메일:</span>
          <a href="mailto:yscoop01@yonsei.ac.kr" className="text-blue-600 underline transition-colors duration-150 hover:text-blue-900 focus:text-blue-900">yscoop01@yonsei.ac.kr</a>
        </div>
        {/* 하단 안내문 */}
        <div className="text-[#697089] text-[0.97rem] mt-4 text-center leading-snug">
          다운로드가 안되면 문의 바랍니다.
        </div>
      </div>
    </div>
  );
};

export default CateringEstimateModal;
