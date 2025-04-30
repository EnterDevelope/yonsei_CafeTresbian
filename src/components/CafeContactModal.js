import React, { useState, useEffect, useCallback } from 'react';
import { MODAL_CONTAINER_CLASS } from './modalClassNames';

const FADE_DURATION = 440; // ms, CSS와 일치시킴

const CafeContactModal = ({ isOpen, onClose }) => {
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
      }, FADE_DURATION);
      return () => {
        clearTimeout(timeout);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, show, handleKeyDown]);

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
        <h3 className="text-xl font-bold mb-3 text-center">카페 문의</h3>
        {/* 안내 박스 */}
        <div className="bg-[#eaf1ff] text-blue-900 font-bold rounded-xl py-4 px-6 my-4 text-center text-[1.13rem] border-[1.7px] border-[#b6ccfc] shadow-[0_1px_7px_rgba(30,64,175,0.08)] flex items-center gap-2 justify-center">
          {/* 아이콘 자리 */}
          <span className="text-blue-600 text-lg mr-1" aria-hidden></span>
          케이터링 관련은 케이터링 안내를 확인해주세요. <br/>(번호가 달라요!)
        </div>
        {/* 연락처(전화) */}
        <div className="flex items-center gap-2 text-[1.04rem] mb-1">
          <span className="text-blue-600 text-lg mr-1" aria-hidden>☎️</span>
          <span>전화번호:</span>
          <a href="tel:0221236933" className="text-blue-600 underline transition-colors duration-150 hover:text-blue-900 focus:text-blue-900">02-2123-6933</a>
        </div>
        {/* 연락처(이메일) */}
        <div className="flex items-center gap-2 text-[1.04rem] mb-1">
          <span className="text-blue-600 text-lg mr-1" aria-hidden>📧</span>
          <span>이메일:</span>
          <a href="mailto:yscoop01@yonsei.ac.kr" className="text-blue-600 underline transition-colors duration-150 hover:text-blue-900 focus:text-blue-900">yscoop01@yonsei.ac.kr</a>
        </div>
      </div>
    </div>
  );
};

export default CafeContactModal;
