import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div id="footer" className={styles.footer}>
      <div id="footer_wrap" className={styles.footerWrap}>
        <div id="footer_logo" className={styles.footerLogo}>
          <img src="company_logo.png" alt="하단로고" />
        </div>
        <div className={styles.footerRight}>
          <ul className={styles.footerMenu}>
            <li>
              <a href="/?act=info.page&seq=1">회사소개</a>
            </li>
            <li>
              <a href="/?act=info.privacy">개인정보보호취급방침</a>
            </li>
            <li>
              <a href="/?act=info.no_email_collect">이메일주소 무단수집 거부</a>
            </li>
            <li>
              <a href="/?act=info.page5">오시는길</a>
            </li>
          </ul>
          <div className={styles.searchInfo}>
            <select
              name="type_search"
              onChange={(e) => window.open(e.target.value, '_blank')}
            >
              <option value="http://www.yonsei.ac.kr">연세대학교</option>
              <option value="http://www.yuhs.or.kr">연세의료원</option>
              <option value="http://www.yonsein.net/">연세총동문회</option>
              <option value="http://yonseicoop.com">생협 온라인몰</option>
              <option value="http://www.facebook.com/yonseicoop">생협페이스북</option>
              <option value="http://www.instagram.com/yonsei_coop">생협인스타그램</option>
              <option value="http://yonseicoop.co.kr/?act=info.page&seq=16">
                교내식당 식단안내
              </option>
              <option
                value="http://yonseicoop.co.kr/?act=board.index&bbs_mode=view&ch=f_modern-0001&bbs_code=noticeyonsei&bbs_seq=3343&sc=bbs_title&ss=&page=1&category_code="
              >
                매장운영시간안내
              </option>
            </select>
          </div>
          <div id="footer_info" className={styles.footerInfo}>
            상호명:{" "}
            <span className={styles.bold}>
              연세대학교 생활협동조합
            </span>{" "}
            | 이사장: 김용호 | 개인정보관리책임자 : 권훈
            <br />
            사업자번호 : 890-82-00336 | 통신판매업신고 : 2021-서울서대문-0417&nbsp;
            <a
              href="http://www.ftc.go.kr/info/bizinfo/communicationViewPopup.jsp?wrkr_no=8908200336"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              [사업자정보확인]
            </a>
            | TEL : 02-2123-4022 | FAX : 02-312-0471
            <br />
            사업장주소지 : 서울특별시 서대문구 연세로 50 (신촌동 연세대학교)
            학생회관 1층 연세대학교 생활협동조합 (우)03722
            <br />
            Email : yonseicoop@yonsei.ac.kr
            <p className={styles.copyText}>
              COPYRIGHT 2019. ALL RIGHTS RESERVED, YOENSEI CO-OP
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;