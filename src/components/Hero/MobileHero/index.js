import React from 'react';
import styles from './styles.module.css';

// 스크롤 함수 추가
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    // 헤더 높이만큼 오프셋 추가 (옵션)
    const headerOffset = 70; // 헤더 높이 (DesktopHeader/styles.module.css 참조)
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    // 기본 스크롤 (오프셋 없이)
    // section.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.warn(`Element with id '${id}' not found for scrolling.`);
  }
};

const MobileHero = ({ onContactClick }) => {
  return (
    <section className={styles.heroSection} id="hero">
      <div className={styles.heroContainer}>
        <div className={styles.imageArea}>
          <img
            src={process.env.PUBLIC_URL + '/cafe_image.png'}
            alt="카페 트레비앙 내부 전경"
            className={styles.cafeImage}
            loading="eager"
          />
        </div>

        <div className={styles.textArea}>
          <h1 className={styles.heroTitle}>
            동아리 행사·세미나 준비는<br /> 
            <span className={styles.emphasisText}>트레비앙에서!</span> <br />
            맞춤 케이터링 & To-go Bag
          </h1>
          <p className={styles.heroDesc}>
            합리적 가격·간편 포장·행사 맞춤 디저트·음료 제공
          </p>
          <div className={styles.ctaButtonContainer}>
            <button 
              className={`${styles.ctaButton} ${styles.cateringButton}`} 
              onClick={() => scrollToSection('services')}
            >
              케이터링 알아보기
            </button>
            <button 
              className={`${styles.ctaButton} ${styles.togoButton}`} 
              onClick={() => scrollToSection('services')}
            >
              To-go 서비스 안내
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileHero; 