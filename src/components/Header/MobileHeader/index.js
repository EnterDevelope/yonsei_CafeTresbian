import React, { useState } from 'react';
import styles from './styles.module.css';

const MobileHeader = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logoArea}>
            <img
              src={process.env.PUBLIC_URL + '/cafe_logo.png'}
              alt="Cafe Trebien Logo"
              className={styles.logoImg}
            />
          </div>

          <button
            className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={styles.menuIcon}></span>
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <>
          <div className={styles.overlay} onClick={() => setIsMenuOpen(false)} />
          <nav className={styles.mobileNav}>
            <ul className={styles.navList}>
              <li onClick={() => scrollToSection('top')}>홈</li>
              <li onClick={() => scrollToSection('services')}>서비스 안내</li>
              <li onClick={() => scrollToSection('menu')}>메뉴 안내</li>
            </ul>
            <div className={styles.actionBtns}>
              <button
                type="button"
                className={styles.contactBtn}
                onClick={() => {
                  onContactClick();
                  setIsMenuOpen(false);
                }}
              >
                문의하기
              </button>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default MobileHeader; 