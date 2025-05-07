import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Menu from './components/Menu';
// import Contact from './components/Contact'; // Contact import 주석 처리
import Footer from './components/Footer';
import CafeContactModal from './components/modal/CafeContactModal';
import CateringEstimateModal from './components/modal/CateringEstimateModal';
import Modal from './components/Modal';
import './App.css';
// import useResponsive from './shared/hooks/useResponsive'; // 기존 default import 주석 처리
import { useResponsive } from './shared/hooks/useResponsive'; // named import로 변경
import FloatingCTA from './components/FloatingCTA';

function HomePage({ onContactClick }) {
  console.log('HomePage rendering'); // 디버깅용 로그
  return (
    <>
      <Hero onContactClick={onContactClick} />
      <Services onContactClick={onContactClick} />
      <Menu />
    </>
  );
}

function App() {
  const [isCafeContactModalOpen, setIsCafeContactModalOpen] = useState(false);
  const [isCateringEstimateModalOpen, setIsCateringEstimateModalOpen] = useState(false);
  const { isMobile } = useResponsive();

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
    <BrowserRouter basename="/yonsei_CafeTresbian">
      <div className="App">
        <Header onContactClick={openCafeContactModal} />
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
                  <Menu />
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
              element={
                <div className="page-container">
                  <h1>트레비앙 소개</h1>
                  <p>연세대학교 학생들을 위한 특별한 공간, 트레비앙입니다.</p>
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
        <CafeContactModal isOpen={isCafeContactModalOpen} onClose={closeModals} />
        <CateringEstimateModal isOpen={isCateringEstimateModalOpen} onClose={closeModals} />
        {isMobile && <FloatingCTA onContactClick={openCafeContactModal} />}
      </div>
    </BrowserRouter>
  );
}

export default App;