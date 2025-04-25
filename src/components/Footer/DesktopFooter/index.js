import React from 'react';
import styles from './styles.module.css';

const DesktopFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <img src={process.env.PUBLIC_URL + '/company_logo.png'} alt="연세대학교 생활협동조합" className={styles.logo} />
          <p className={styles.coopText}>연세대학교 생활협동조합 운영</p>
        </div>
        <div className={styles.infoSection}>
          <p>상호명: 연세대학교 생활협동조합 | 이사장: 김용호 | 개인정보관리책임자 : 권훈</p>
          <p>사업자번호 : 890-82-00336 | 통신판매업신고 : 2021-서울서대문-0417 [사업자정보확인] | TEL : 02-2123-4022 | FAX : 02-312-0471</p>
          <p>사업장주소 : 서울특별시 서대문구 연세로 50 (신촌동 연세대학교) 학생회관 1층 연세대학교 생활협동조합 (주)037722</p>
          <p>Email : yonseicoop@yonsei.ac.kr</p>
          <p className={styles.operationInfo}>운영 시간: 평일 08:00 - 19:00 (주말 및 공휴일 휴무)</p>
          <p className={styles.operationInfo}>위치: 연세대학교 학생회관 1층</p>
        </div>
      </div>
    </footer>
  );
};

export default DesktopFooter; 