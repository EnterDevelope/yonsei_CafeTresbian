import React, { useState } from 'react';
import TogobagModal from '../../modal/TogobagModal';

const MobileServices = ({ onContactClick }) => {
  const [isTogobagOpen, setIsTogobagOpen] = useState(false);
  console.log('MobileServices rendering'); // 디버깅용 로그

  return (
    // 서비스 전체 래퍼
    <section id="services" className="py-10 px-5 text-center bg-[var(--color-background)]">
      {/* 섹션 타이틀 영역 */}
      <div className="flex flex-col items-center mb-10">
        <span className="text-blue-600 font-semibold text-xs mb-2">Our Services</span>
        <h2 className="text-xl font-bold text-gray-900 mb-2">맞춤 서비스 안내</h2>
        <p className="text-base text-[var(--color-text-secondary)] text-center max-w-[400px] mx-auto mb-2">모든 행사를 특별하게 만들어 드립니다. 트레비앙의 맞춤 케이터링과 편리한 To-go 서비스를 만나보세요.</p>
      </div>
      {/* 서비스 카드 컨테이너 */}
      <div className="flex flex-col gap-7">
        {/* 케이터링 서비스 카드 */}
        <div className="bg-white rounded-xl p-6 mb-7 shadow-lg text-center flex flex-col items-center">
          <div className="w-full flex justify-center mb-4">
            <img
              src={`${process.env.PUBLIC_URL}/catering.png`}
              alt="케이터링 서비스 예시 이미지"
              className="w-full max-w-[220px] h-auto rounded-lg"
              loading="lazy"
            />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">케이터링 서비스</h3>
          <p className="text-base text-[var(--color-text-secondary)] mb-5">동아리 모임, 학과 세미나, 스터디 그룹 등 다양한 행사의 규모와 성격에 맞춘 케이터링을 신청해보세요. 신선한 재료로 만든 맛있는 디저트와 음료로 <br /> 행사의 퀄리티를 높여드립니다.</p>
          <button
            className="py-2 px-6 rounded-full text-base font-semibold cursor-pointer transition-colors duration-150 outline-none border-none bg-blue-600 text-white shadow hover:bg-blue-900"
            onClick={(e) => {
              window.dataLayer && window.dataLayer.push({
                event: 'catering_estimate_click',
                location: 'services',
                page_path: window.location.pathname
              });
              onContactClick && onContactClick(e);
            }}
          >
            케이터링 견적받기
          </button>
        </div>
        {/* To-go Bag 서비스 카드 */}
        <div className="bg-white rounded-xl p-6 mb-7 shadow-lg text-center flex flex-col items-center" id="togo-service-card">
          <div className="w-full flex justify-center mb-4">
            <img
              src={`${process.env.PUBLIC_URL}/togo.png`}
              alt="To-go Bag 서비스 예시 이미지"
              className="w-full max-w-[220px] h-auto rounded-lg"
              loading="lazy"
            />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">To-go Bag 서비스 <br /> (매장에 직접 문의)</h3>
          <p className="text-base text-[var(--color-text-secondary)] mb-5">바쁜 학생과 교직원을 위해 준비했습니다. 든든하고 맛있는 메뉴를 포장해서 간편하게 쏙!</p>
          <button
            className="py-2 px-6 rounded-full text-base font-semibold cursor-pointer transition-colors duration-150 outline-none border-none bg-sky-500 text-white shadow hover:bg-sky-600"
            onClick={() => {
              window.dataLayer && window.dataLayer.push({
                event: 'store_info_click',
                location: 'services',
                page_path: window.location.pathname
              });
              setIsTogobagOpen(true);
            }}
          >
            매장 운영 정보
          </button>
        </div>
      </div>
      <TogobagModal isOpen={isTogobagOpen} onClose={() => setIsTogobagOpen(false)} />
    </section>
  );
};

export default MobileServices;