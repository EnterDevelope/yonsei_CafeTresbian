import React from 'react';
import styles from './styles.module.css';

// 스크롤 함수 추가
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const DesktopHero = ({ onContactClick }) => {
  console.log('DesktopHero rendering'); // 디버깅용 로그

  return (
    <section className={styles.heroSection} id="hero">
      <div className={styles.heroContainer}>
        <div className={styles.textArea}>
          <h1 className={styles.heroTitle}>
            동아리 행사·세미나도 <br />트레비앙에서! <br />
            맞춤 케이터링 & To-go Bag
          </h1>
          <p className={styles.heroDesc}>
            합리적 가격·간편 포장·행사 맞춤 디저트·음료 제공
          </p>
          <div className={styles.ctaButtonContainer}>
            <button className={`${styles.ctaButton} ${styles.cateringButton}`} onClick={onContactClick}>
              케이터링 문의하기
            </button>
            <button className={`${styles.ctaButton} ${styles.togoButton}`} onClick={() => {
              const togoCard = document.getElementById('togo-service-card');
              if (togoCard) {
                togoCard.scrollIntoView({ behavior: 'smooth' });
              } else {
                // fallback: 기존 서비스 섹션으로 이동
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}>
              To-go 서비스 안내
            </button>
          </div>
        </div>

        <div className={styles.imageArea}>
          <img
            src={`${process.env.PUBLIC_URL}/hero_back_image.png`}
            alt=""
            className={styles.blobImg}
            loading="lazy"
            onError={(e) => {
              console.error('Image failed to load:', e.target.src);
              e.target.style.display = 'none';
            }}
          />
          <img
            src={`${process.env.PUBLIC_URL}/cafe_image.png`}
            alt="카페 내부"
            className={styles.cafeImage}
            loading="lazy"
            onError={(e) => {
              console.error('Image failed to load:', e.target.src);
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default DesktopHero;