import React from 'react';

// scrollToSection 함수 정의 추가 (주석 해제)
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const DesktopServices = ({ onContactClick }) => {
  console.log('DesktopServices rendering'); // 디버깅용 로그

  return (
    // 서비스 전체 래퍼
    <section id="services" className="w-full py-16 px-4 bg-[var(--color-background)]">
      {/* 섹션 타이틀 영역 */}
      <div className="flex flex-col items-center mb-12">
        <span className="text-blue-600 font-semibold text-sm mb-2">Our Services</span>
        <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-3">맞춤 서비스 안내</h2>
        <p className="text-base text-[var(--color-text-secondary)] text-center max-w-[540px] mb-2">모든 행사를 특별하게 만들어 드립니다. 트레비앙의 맞춤 케이터링과 편리한 To-go 서비스를 만나보세요.</p>
      </div>
      {/* 서비스 카드 컨테이너 */}
      <div className="flex gap-10 flex-wrap justify-center">
        {/* 케이터링 서비스 카드 */}
        <div className="flex bg-white rounded-2xl shadow-md p-8 gap-8 w-full max-w-[540px] min-h-[320px] items-center border-l-4 border-blue-600" id="catering-service-card">
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-2">케이터링 서비스</h3>
            <p className="text-base text-[var(--color-text-secondary)] mb-6">동아리 모임, 학과 세미나, 스터디 그룹 등 다양한 행사의 규모와 성격에 맞춘 케이터링을 신청해보세요. 신선한 재료로 만든 맛있는 디저트와 음료로 행사의 퀄리티를 높여드립니다.</p>
            <button 
              className="py-2.5 px-7 rounded-full text-base font-semibold cursor-pointer transition-colors duration-150 outline-none border-none bg-blue-600 text-white shadow hover:bg-blue-900"
              onClick={onContactClick}
            >
              케이터링 견적받기
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
              src={`${process.env.PUBLIC_URL}/catering.png`}
              alt="케이터링 서비스 예시 이미지"
              className="w-[140px] h-[140px] object-cover rounded-xl shadow"
              loading="lazy"
            />
          </div>
        </div>
        {/* To-go Bag 서비스 카드 */}
        <div className="flex bg-white rounded-2xl shadow-md p-8 gap-8 w-full max-w-[540px] min-h-[320px] items-center border-l-4 border-purple-500" id="togo-service-card">
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-2">To-go Bag 서비스 (매장에 직접 문의)</h3>
            <p className="text-base text-[var(--color-text-secondary)] mb-6">바쁜 학생과 교직원을 위해 준비했습니다. 간편하게 픽업해가 실 수 있도록 포장해드립니다.</p>
            <button 
              className="py-2.5 px-7 rounded-full text-base font-semibold cursor-pointer transition-colors duration-150 outline-none border-none bg-purple-500 text-white shadow hover:bg-purple-800"
              onClick={() => scrollToSection('menu')}
            >
              To-go 메뉴 보기
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
              src={`${process.env.PUBLIC_URL}/togo.png`}
              alt="To-go Bag 서비스 예시 이미지"
              className="w-[140px] h-[140px] object-cover rounded-xl shadow"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopServices;