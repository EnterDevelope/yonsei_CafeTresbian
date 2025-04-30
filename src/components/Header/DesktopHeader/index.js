import React from 'react';
import { Link } from 'react-router-dom';

const DesktopHeader = ({ onContactClick }) => {
  const scrollToSection = (id) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    // 헤더 전체 래퍼
    <header className="fixed top-0 left-0 right-0 bg-[var(--color-background)] shadow-sm z-[1000] border-b border-[var(--color-border)]">
      {/* 내부 컨테이너 */}
      <div className="flex items-center justify-between max-w-[1200px] mx-auto px-6 py-2 h-[70px]">
        {/* 로고 영역 */}
        <Link to="/" className="flex items-center gap-3 no-underline">
          <img
            src={`${process.env.PUBLIC_URL}/cafe_logo.png`}
            alt="트레비앙 로고"
            className="w-[100px] h-[108px] object-contain"
          />
        </Link>
        {/* 네비게이션 */}
        <nav className="flex items-center gap-6">
          <Link to="/menu" className="text-[var(--color-text-secondary)] text-base font-medium px-2.5 py-1.5 rounded-md transition-all hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-light)] focus:text-[var(--color-primary)] focus:bg-[var(--color-primary-light)] active:text-[var(--color-primary-dark)]">
            메뉴
          </Link>
          <Link to="/services" className="text-[var(--color-text-secondary)] text-base font-medium px-2.5 py-1.5 rounded-md transition-all hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-light)] focus:text-[var(--color-primary)] focus:bg-[var(--color-primary-light)] active:text-[var(--color-primary-dark)]">
            서비스
          </Link>
          <Link to="/about" className="text-[var(--color-text-secondary)] text-base font-medium px-2.5 py-1.5 rounded-md transition-all hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-light)] focus:text-[var(--color-primary)] focus:bg-[var(--color-primary-light)] active:text-[var(--color-primary-dark)]">
            소개
          </Link>
        </nav>
        {/* 문의 버튼 */}
        <button
          className="text-[1.05rem] font-medium py-2 px-5 border-none rounded-full bg-[var(--color-primary)] text-white shadow-[0_2px_10px_rgba(37,99,235,0.09)] cursor-pointer transition-colors duration-150 ml-5 hover:bg-[var(--color-primary-dark)] focus:bg-[var(--color-primary-dark)] active:bg-[var(--color-primary-dark)] outline-none focus-visible:outline-2 focus-visible:outline-[var(--color-primary-light)] focus-visible:outline-offset-2"
          onClick={onContactClick}
        >
          카페 문의하기
        </button>
      </div>
    </header>
  );
};

export default DesktopHeader;