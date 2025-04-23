import React from 'react';
import styles from './styles.module.css';

const MobileServices = () => {
  return (
    <section id="services">
      <section className={`${styles.serviceSection} ${styles.cateringSection}`}>
        <span className={styles.serviceLabel}>Service</span>
        <h2 className={styles.serviceTitle}>
          카페 트레비앙
          <br />
          케이터링 서비스
        </h2>
        <div className={styles.serviceDivider} />
        <p className={styles.serviceDesc}>
          동아리 모임, 세미나, 행사 등 모임 형태에 맞춘
          맞춤형 디저트, 음료 제공 서비스
        </p>
        <img
          src={process.env.PUBLIC_URL + '/catering.png'}
          alt="케이터링 서비스"
          className={styles.serviceImage}
        />
      </section>

      <section className={`${styles.serviceSection} ${styles.togoSection}`}>
        <span className={styles.serviceLabelTogo}>service</span>
        <h2 className={styles.serviceTitle}>
          카페 트레비앙
          <br />
          To-go Bag 서비스
        </h2>
        <div className={`${styles.serviceDivider} ${styles.togoDivider}`} />
        <p className={styles.serviceDesc}>
          이동이 잦은 학생 및 교직원을 위한 간편 포장 서비스
        </p>
        <img
          src={process.env.PUBLIC_URL + '/togo.png'}
          alt="To-go Bag 서비스"
          className={styles.serviceImage}
        />
      </section>
    </section>
  );
};

export default MobileServices; 