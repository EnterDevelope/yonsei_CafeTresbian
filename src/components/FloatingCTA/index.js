import React from 'react';
import styles from './styles.module.css';
import { trackButtonClick } from '../../shared/utils/gtm';

// 스크롤 함수 제거
/* const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}; */

const FloatingCTA = ({ onContactClick }) => { // onContactClick prop 받기
  const handleContactClick = () => {
    trackButtonClick('floating_contact_button', 'floating_cta');
    onContactClick();
  };

  return (
    <div className={styles.floatingContainer}>
      <button 
        className={styles.ctaButton}
        onClick={handleContactClick} // onClick 수정
      >
        문의하기
      </button>
    </div>
  );
};

export default FloatingCTA; 