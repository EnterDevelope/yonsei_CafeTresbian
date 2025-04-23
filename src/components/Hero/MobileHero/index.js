import React from 'react';
import styles from './styles.module.css';

const MobileHero = ({ onContactClick }) => {
  return (
    <section className={styles.heroSection} id="hero">
      <div className={styles.heroContainer}>
        <div className={styles.textArea}>
          <h1 className={styles.heroTitle}>
            연세대학교<br />
            카페 트레비앙
          </h1>
          <p className={styles.heroDesc}>
            연세대학교 생협이 운영하는 카페 트레비앙에서
            합리적인 가격과 믿을 수 있는 품질의
            음료, 케이터링, To-go Bag 서비스를 만나보세요
          </p>
          <button className={styles.contactButton} onClick={onContactClick}>
            Contact us
          </button>
        </div>

        <div className={styles.imageArea}>
          <img
            src={process.env.PUBLIC_URL + '/cafe_image.png'}
            alt="카페 내부"
            className={styles.cafeImage}
          />
          <img
            src={process.env.PUBLIC_URL + '/hero_back_image.png'}
            alt="Blue Gradient Blob"
            className={styles.blobImg}
          />
        </div>
      </div>

      <div className={styles.heroBottom}>
        <img
          src={process.env.PUBLIC_URL + '/company_logo.png'}
          alt="Icon"
          className={styles.coopLogo}
        />
        <div className={styles.operationInfoContainer}>
          <div className={styles.operationInfo}>
            운영시간 : 학기중(08:50~19:00), 방학(09:00~17:30)
          </div>
          <div className={styles.operationInfo}>
            위치 : 학생회관 1층, 교육과학관 1층, 광복관 1층
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileHero; 