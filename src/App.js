import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      {/* 상단 고정 헤더 */}
      <Header onContactClick={openModal}/>

      {/* Hero 섹션 */}
      <Hero onContactClick={openModal} />

      {/* 나머지 콘텐츠 */}
      <Services />
      <Menu />
      <Contact onContactClick={openModal} />
      <Footer />

      {/* 모달 */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;