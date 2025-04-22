import React from 'react';
import styles from './Hero.module.css';

function Hero({ onContactClick }) {
  return (
    <section className={styles.heroSection} id="hero">
      <div className={styles.heroContainer}>
        {/* 왼쪽 텍스트 영역 */}
        <div className={styles.textArea}>
          <h1 className={styles.heroTitle}>
            연세대학교<br />
            카페 트레비앙
          </h1>
          <p className={styles.heroDesc}>
            연세대학교 생협이 운영하는 카페 트레비앙에서<br />
            합리적인 가격과 믿을 수 있는 품질의<br />
            음료, 케이터링, To-go Bag 서비스를 만나보세요
          </p>
          <button className={styles.contactButton} onClick={onContactClick}>
            Contact us
          </button>
        </div>

        {/* 우측 이미지 영역 (블롭 + 카페 이미지) */}
        <div className={styles.imageArea}>
          {/* 블롭 이미지 (절대 배치, 크기 축소) */}
          <img
            src="hero_back_image.png"  /* 실제 블롭 PNG 파일 경로 */
            alt="Blue Gradient Blob"
            className={styles.blobImg}
          />
          {/* 카페 내부 사진 (위로 올리기) */}
          <img
            src="cafe_image.png"
            alt="카페 내부"
            className={styles.cafeImage}
          />
        </div>
      </div>

      {/* 하단 영역: 생협 로고, 운영, 운영시간, 위치 */}
      <br />
      <br />
      <div className={styles.heroBottom}>
        <img
            src="company_logo.png"
            alt="Icon"
            className={styles.coopLogo}
          />
          <div className={styles.operationInfo}>
            운영시간 : 학기중(08:50~19:00), 방학(09:00~17:30)
          </div>
          <div className={styles.operationInfo}>
            위치 : 학생회관 1층, 교육과학관 1층, 광복관 1층
          </div>
      </div>
    </section>
  );
}

export default Hero;