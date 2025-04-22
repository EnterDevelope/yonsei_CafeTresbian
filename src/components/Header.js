import React from 'react';
import styles from './Header.module.css';

function Header({ onContactClick }) {
  // 스크롤 이동 함수 (홈 → 최상단, 서비스 안내/메뉴 안내 → 해당 섹션)
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
        {/* 왼쪽 로고 */}
        <div className={styles.logoArea}>
          <img
            src="cafe_logo.png"
            alt="Cafe Trebien Logo"
            className={styles.logoImg}
          />
        </div>

        {/* 중앙 메뉴 (홈/서비스 안내/메뉴 안내) */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li onClick={() => scrollToSection('top')}>홈</li>
            <li onClick={() => scrollToSection('services')}>서비스 안내</li>
            <li onClick={() => scrollToSection('menu')}>메뉴 안내</li>
          </ul>
        </nav>

        {/* 오른쪽 버튼 (Contact us, Log in) */}
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
}

export default Header;