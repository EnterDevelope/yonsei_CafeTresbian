import React from 'react';
import styles from './styles.module.css';

const MobileFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <img 
            src="/images/logo.png" 
            alt="카페 트레비앙 로고" 
            className={styles.logo}
          />
          <p className={styles.copyright}>
            © 2024 카페 트레비앙. All rights reserved.
          </p>
        </div>
        
        <div className={styles.infoSection}>
          <div className={styles.contactInfo}>
            <h3>Contact Us</h3>
            <p>Email: tresbian@yonsei.ac.kr</p>
            <p>Phone: 02-2123-4567</p>
          </div>
          
          <div className={styles.locationInfo}>
            <h3>Location</h3>
            <p>서울특별시 서대문구 연세로 50</p>
            <p>연세대학교 학생회관 1층</p>
          </div>
          
          <div className={styles.hoursInfo}>
            <h3>Hours</h3>
            <p>월-금: 9:00 - 20:00</p>
            <p>토-일: 10:00 - 18:00</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MobileFooter; 