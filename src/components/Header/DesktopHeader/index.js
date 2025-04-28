import React from 'react';
import { Link } from 'react-router-dom';
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
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img
            src={`${process.env.PUBLIC_URL}/cafe_logo.png`}
            alt="트레비앙 로고"
            className={styles.logoImage}
          />
        </Link>

        <nav className={styles.nav}>
          <Link to="/menu" className={styles.navLink}>
            메뉴
          </Link>
          <Link to="/services" className={styles.navLink}>
            서비스
          </Link>
          <Link to="/about" className={styles.navLink}>
            소개
          </Link>
        </nav>

        <button className={styles.contactButton} onClick={onContactClick}>
          카페 문의하기
        </button>
      </div>
    </header>
  );
};

export default DesktopHeader; 