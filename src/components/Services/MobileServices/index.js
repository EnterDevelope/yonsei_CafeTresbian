import React from 'react';
import styles from './styles.module.css';

// scrollToSection 함수 정의 추가 (주석 해제)
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const MobileServices = ({ onContactClick }) => {
  console.log('MobileServices rendering'); // 디버깅용 로그

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.sectionTitleContainer}>
        <span className={styles.sectionLabel}>Our Services</span>
        <h2 className={styles.sectionTitle}>맞춤 서비스 안내</h2>
        <p className={styles.sectionDesc}>모든 행사를 특별하게 만들어 드립니다. 트레비앙의 맞춤 케이터링과 편리한 To-go 서비스를 만나보세요.</p>
      </div>

      <div className={styles.serviceCardsContainer}>
        {/* 케이터링 서비스 카드 */}
        <div className={styles.serviceCard}>
          <div className={styles.serviceImageContainer}>
            <img
              src={`${process.env.PUBLIC_URL}/catering.png`}
              alt="케이터링 서비스 예시 이미지"
              className={styles.serviceMainImage}
              loading="lazy"
            />
          </div>
          <h3 className={styles.serviceTitle}>케이터링 서비스</h3>
          <p className={styles.serviceDesc}>
          동아리 모임, 학과 세미나, 스터디 그룹 등 다양한 행사의 규모와 성격에 맞춘 케이터링을 신청해보세요. 신선한 재료로 만든 맛있는 디저트와 음료로 <br /> 행사의 퀄리티를 높여드립니다.
          </p>
          <button 
            className={`${styles.ctaButton} ${styles.ctaButtonPrimary}`} 
            onClick={onContactClick}
          >
            케이터링 견적받기
          </button>
        </div>

        {/* To-go Bag 서비스 카드 */}
        <div className={styles.serviceCard} id="togo-service-card">
          <div className={styles.serviceImageContainer}>
            <img
              src={`${process.env.PUBLIC_URL}/togo.png`}
              alt="To-go Bag 서비스 예시 이미지"
              className={styles.serviceMainImage}
              loading="lazy"
            />
          </div>
          <h3 className={styles.serviceTitle}>To-go Bag 서비스 <br /> (매장에 직접 문의)</h3>
          <p className={styles.serviceDesc}>
            바쁜 학생과 교직원을 위해 준비했습니다. 든든하고 맛있는 메뉴를 포장해서 간편하게 쏙!
          </p>
          <button 
            className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`} 
            onClick={() => scrollToSection('menu')}
          >
            To-go 메뉴 보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default MobileServices;