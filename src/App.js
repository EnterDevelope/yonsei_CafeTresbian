import React, { useState } from 'react';
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
  return (
    <>
      <Hero />
      <Services onContactClick={onContactClick} />
      {/* 메뉴 섹션 제거됨. 메뉴는 오버레이로만 노출 */}
    </>
  );
}

const About = () => (
  <section className="mx-auto w-full max-w-content-lg space-y-10 px-4 py-12 text-slate-700">
    <div className="flex flex-col items-center text-center">
      <img
        src={`${process.env.PUBLIC_URL}/cafe_logo.png`}
        alt="카페 트레비앙 로고"
        className="h-24 w-24 rounded-full border border-slate-100 shadow-card"
      />
      <h1 className="mt-6 text-3xl font-extrabold text-slate-900">어서오세요, 트레비앙입니다!</h1>
      <p className="mt-2 text-base text-slate-500">연세대학교 구성원 모두의 휴식과 만남을 위한 공간</p>
      <span className="mt-4 rounded-pill bg-brand-blue/10 px-4 py-1 text-sm font-semibold text-brand-blue">
        Tre Bien!
      </span>
    </div>
    <div className="grid gap-8 lg:grid-cols-2">
      <img
        src={`${process.env.PUBLIC_URL}/cafe_image.png`}
        alt="카페 내부"
        className="w-full rounded-[32px] border border-white shadow-card"
      />
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">트레비앙은 어떤 곳인가요?</h2>
        <p>
          학생회관 1층에 자리한 트레비앙은 학생·교직원·방문객 모두에게 열려 있는 카페입니다. 합리적인 가격의
          커피와 음료, 다양한 디저트와 간편식, 그리고 행사/세미나/스터디를 위한 케이터링 서비스까지 한 번에
          준비할 수 있어요.
        </p>
        <p className="font-semibold text-brand-blue">
          누구나 편하게 머물고 추억을 나눌 수 있는 공간이 되기 위해 매일 새로움을 준비합니다.
        </p>
      </div>
    </div>
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900">트레비앙의 마음</h3>
        <p className="mt-3">
          "Tre Bien"은 프랑스어로 "아주 훌륭하다"라는 뜻입니다. 하루의 시작과 끝에 작은 여유와 따뜻함을 더하기
          위해 커피를 내리고 공간을 준비합니다.
        </p>
      </div>
      <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900">이런 분들께 추천해요</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>강의 사이 잠깐의 휴식이 필요할 때</li>
          <li>친구, 동료와 담소를 나누고 싶을 때</li>
          <li>행사·세미나·스터디 등 모임을 준비할 때</li>
          <li>합리적인 가격과 따뜻한 분위기를 찾을 때</li>
        </ul>
      </div>
    </div>
    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900">연락처 & 위치</h3>
      <ul className="mt-3 space-y-2">
        <li>
          <b>위치</b>: 연세대학교 학생회관 1층
        </li>
        <li>
          <b>전화</b>:{' '}
          <a href="tel:0221236933" className="text-brand-blue underline">
            02-2123-6933
          </a>
        </li>
        <li>
          <b>이메일</b>:{' '}
          <a href="mailto:yscoop01@yonsei.ac.kr" className="text-brand-blue underline">
            yscoop01@yonsei.ac.kr
          </a>
        </li>
      </ul>
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

  return (
    <div className="flex min-h-screen flex-col bg-slate-25 font-sans text-slate-900">
      <Header onContactClick={openCafeContactModal} onMenuClick={() => setIsMenuOverlayOpen(true)} />
      <main className="flex-1 pt-24 pb-16 lg:pt-28">
        <Routes>
          <Route
            path="/"
            element={<HomePage onContactClick={openCateringEstimateModal} />}
          />
          <Route
            path="/menu"
            element={
              <div className="mx-auto w-full max-w-content-lg px-4 py-6 lg:px-10">

              </div>
            }
          />
          <Route
            path="/services"
            element={
              <div className="mx-auto w-full max-w-content-lg px-4 lg:px-10">
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