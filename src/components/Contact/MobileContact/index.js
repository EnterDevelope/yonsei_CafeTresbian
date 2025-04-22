import React from 'react';
import styles from './styles.module.css';

const MobileContact = ({ onContactClick }) => {
  return (
    <section className={styles.contactSection} id="contact">
      <h2 className={styles.contactTitle}>연락하기</h2>
      <p className={styles.contactDescription}>
        카페 트레비앙에 대해 더 알고 싶으시다면 연락 주세요.
      </p>
      <button className={styles.contactButton} onClick={onContactClick}>
        문의하기
      </button>
    </section>
  );
};

export default MobileContact; 