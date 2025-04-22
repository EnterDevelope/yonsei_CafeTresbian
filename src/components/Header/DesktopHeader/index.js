import React from 'react';
import styles from './styles.module.css';

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
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoArea}>
          <img
            src="cafe_logo.png"
            alt="Cafe Trebien Logo"
            className={styles.logoImg}
          />
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li onClick={() => scrollToSection('top')}>홈</li>
            <li onClick={() => scrollToSection('services')}>서비스 안내</li>
            <li onClick={() => scrollToSection('menu')}>메뉴 안내</li>
          </ul>
        </nav>

        <div className={styles.actionBtns}>
          <button
            type="button"
            className={styles.contactBtn}
            onClick={onContactClick}
          >
            Contact us
          </button>
          <button type="button" className={styles.loginBtn}>
            Log in
          </button>
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader; 