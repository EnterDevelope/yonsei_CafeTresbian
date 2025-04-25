import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Menu from './components/Menu';
// import Contact from './components/Contact'; // Contact import 주석 처리
import Footer from './components/Footer';
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isMobile } = useResponsive();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  console.log('App rendering, isMobile:', isMobile); // 디버깅용 로그

  useEffect(() => {
    console.log('App mounted'); // 디버깅용 로그
  }, []);

  return (
    <BrowserRouter basename="/yonsei_CafeTresbian">
      <div className="App">
        <Header onContactClick={openModal} />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={<HomePage onContactClick={openModal} />}
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
                  <Services onContactClick={openModal} />
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
        <Modal isOpen={isModalOpen} onClose={closeModal} />
        {isMobile && <FloatingCTA onContactClick={openModal} />}
      </div>
    </BrowserRouter>
  );
}

export default App;