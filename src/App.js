import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
// import Menu from './components/Menu';
import MenuOverlay from './components/modal/MenuOverlay';
// import Contact from './components/Contact'; // Contact import 주석 처리
import Footer from './components/Footer';
import CafeContactModal from './components/modal/CafeContactModal';
import CateringEstimateModal from './components/modal/CateringEstimateModal';
import './App.css';
// import useResponsive from './shared/hooks/useResponsive'; // 기존 default import 주석 처리
import { useResponsive } from './shared/hooks/useResponsive'; // named import로 변경
import FloatingCTA from './components/FloatingCTA';
import { useGTM } from './shared/hooks/useGTM';

function HomePage({ onContactClick }) {
  console.log('HomePage rendering'); // 디버깅용 로그
  return (
    <>
      <Hero onContactClick={onContactClick} />
      <Services onContactClick={onContactClick} />
      {/* 메뉴 섹션 제거됨. 메뉴는 오버레이로만 노출 */}
    </>
  );
}

const About = () => (
  <section className="max-w-2xl mx-auto px-4 py-12">
    <div className="flex flex-col items-center mb-10">
      <img
        src={process.env.PUBLIC_URL + '/cafe_logo.png'}
        alt="카페 트레비앙 로고"
        className="w-28 h-28 mb-5 rounded-full shadow-lg border-2 border-blue-100"
      />
      <h1 className="text-3xl font-extrabold mb-2 text-center text-blue-900 tracking-tight">어서오세요, 트레비앙입니다!</h1>
      <p className="text-base text-blue-700 text-center font-medium mb-2">연세대학교 구성원 모두의 휴식과 만남을 위한 공간</p>
      <span className="inline-block bg-blue-50 text-blue-700 text-sm rounded-full px-4 py-1 mt-2">Tre Bien!</span>
    </div>

    <div className="mb-10">
      <img
        src={process.env.PUBLIC_URL + '/cafe_image.png'}
        alt="카페 내부"
        className="w-full max-w-md mx-auto rounded-2xl shadow mb-6 border border-blue-100"
      />
      <h2 className="text-xl font-bold mb-3 text-blue-800 border-l-4 border-blue-300 pl-3">트레비앙은 어떤 곳인가요?</h2>
      <p className="text-gray-800 leading-relaxed mb-2">
        트레비앙은 연세대학교 학생회관 1층에 자리한, 학생·교직원·방문객 모두를 위한 따뜻한 카페입니다.<br />
        합리적인 가격의 커피와 음료, 다양한 디저트와 간편식, 그리고 행사/세미나/스터디를 위한 케이터링 서비스까지!<br />
        <span className="font-semibold text-blue-700">누구나 편하게 머물고, 소중한 사람들과 추억을 쌓을 수 있는 공간</span>이 되고자 합니다.
      </p>
    </div>

    <div className="mb-10">
      <h2 className="text-xl font-bold mb-3 text-blue-800 border-l-4 border-blue-300 pl-3">트레비앙의 마음</h2>
      <p className="text-gray-800 leading-relaxed mb-2">
        "Tre Bien"은 프랑스어로 <span className="font-semibold text-blue-700">"아주 훌륭하다"</span>는 뜻이에요.<br />
        저희는 매일 아침, 여러분의 하루가 더 훌륭해지길 바라는 마음으로 커피를 내리고, 공간을 준비합니다.<br />
        <span className="font-medium text-blue-700">작은 여유, 따뜻한 한 잔, 그리고 좋은 만남</span>이 여러분의 일상에 스며들길 바랍니다.
      </p>
    </div>

    <div className="mb-10">
      <h2 className="text-xl font-bold mb-3 text-blue-800 border-l-4 border-blue-300 pl-3">이런 분들께 추천해요</h2>
      <ul className="list-disc pl-6 text-gray-800 leading-relaxed mb-2">
        <li>바쁜 수업과 과제 사이, 잠깐의 휴식이 필요할 때</li>
        <li>친구, 동료와 함께 담소를 나누고 싶을 때</li>
        <li>행사·세미나·스터디 등 특별한 모임을 준비할 때</li>
        <li>합리적인 가격, 빠른 서비스, 따뜻한 분위기를 원할 때</li>
      </ul>
    </div>

    <div className="mb-10">
      <h2 className="text-xl font-bold mb-3 text-blue-800 border-l-4 border-blue-300 pl-3">트레비앙이 바라는 것</h2>
      <p className="text-gray-800 leading-relaxed mb-2">
        트레비앙은 단순한 카페를 넘어, <span className="font-semibold text-blue-700">연세대학교 구성원 모두의 일상에 작은 행복과 여유</span>를 더하고 싶어요.<br />
        언제든 편하게 들러 쉴 수 있는 공간, 소중한 사람들과의 만남, 그리고 특별한 행사를 위한 든든한 파트너가 되겠습니다.
      </p>
    </div>

    <div className="mb-4">
      <h2 className="text-xl font-bold mb-3 text-blue-800 border-l-4 border-blue-300 pl-3">연락처 & 위치</h2>
      <ul className="text-gray-800 mb-2">
        <li><b>위치</b>: 연세대학교 학생회관 1층</li>
        <li><b>전화</b>: <a href="tel:0221236933" className="text-blue-600 underline">02-2123-6933</a></li>
        <li><b>이메일</b>: <a href="mailto:yscoop01@yonsei.ac.kr" className="text-blue-600 underline">yscoop01@yonsei.ac.kr</a></li>
      </ul>
    </div>
    <div className="text-center text-blue-700 font-semibold mt-8">
      오늘도 트레비앙에서 좋은 하루 보내세요!<br />
      여러분을 언제나 환영합니다 ☕️
    </div>
  </section>
);

function AppContent() {
  const [isMenuOverlayOpen, setIsMenuOverlayOpen] = useState(false);
  const [isCafeContactModalOpen, setIsCafeContactModalOpen] = useState(false);
  const [isCateringEstimateModalOpen, setIsCateringEstimateModalOpen] = useState(false);
  const { isMobile } = useResponsive();

  // GTM 페이지뷰 추적 활성화 (Router 내부에서 호출)
  useGTM();

  // 각각의 모달 오픈 핸들러
  const openCafeContactModal = () => {
    setIsCafeContactModalOpen(true);
    setIsCateringEstimateModalOpen(false);
  };
  const openCateringEstimateModal = () => {
    setIsCafeContactModalOpen(false);
    setIsCateringEstimateModalOpen(true);
  };
  const closeModals = () => {
    setIsCafeContactModalOpen(false);
    setIsCateringEstimateModalOpen(false);
  };

  console.log('App rendering, isMobile:', isMobile); // 디버깅용 로그

  useEffect(() => {
    console.log('App mounted'); // 디버깅용 로그
  }, []);

  return (
    <div className="App">
      <Header onContactClick={openCafeContactModal} onMenuClick={() => setIsMenuOverlayOpen(true)} />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={<HomePage onContactClick={openCateringEstimateModal} />}
          />
          <Route
            path="/menu"
            element={
              <div className="page-container">

              </div>
            }
          />
          <Route
            path="/services"
            element={
              <div className="page-container">
                <Services onContactClick={openCateringEstimateModal} />
              </div>
            }
          />
          <Route
            path="/about"
            element={<About />}
          />
        </Routes>
      </main>
      <Footer />
      <CafeContactModal isOpen={isCafeContactModalOpen} onClose={closeModals} />
      <CateringEstimateModal isOpen={isCateringEstimateModalOpen} onClose={closeModals} />
      {isMobile && <FloatingCTA onContactClick={openCafeContactModal} />}
      {isMenuOverlayOpen && (
        <MenuOverlay isOpen={isMenuOverlayOpen} onClose={() => setIsMenuOverlayOpen(false)} />
      )}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename="/yonsei_CafeTresbian">
      <AppContent />
    </BrowserRouter>
  );
}

export default App;