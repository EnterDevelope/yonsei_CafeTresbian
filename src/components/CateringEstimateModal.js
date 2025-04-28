import React, { useState, useEffect, useCallback } from 'react';
import styles from './Modal.module.css';

const CateringEstimateModal = ({ isOpen, onClose }) => {
  const [show, setShow] = useState(isOpen);
  const [fadeOut, setFadeOut] = useState(false);

  // ESC, 오버레이 클릭 닫힘
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      setFadeOut(false);
      document.addEventListener('keydown', handleKeyDown);
    } else if (show) {
      setFadeOut(true);
      const timeout = setTimeout(() => {
        setShow(false);
        setFadeOut(false);
        document.removeEventListener('keydown', handleKeyDown);
      }, 280);
      return () => {
        clearTimeout(timeout);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, show, handleKeyDown]);

  const handleDownload = () => {
    alert('아직 케이터링 양식이 준비되지 않았습니다.');
  };

  if (!show) return null;
  return (
    <div
      className={`${styles.modalOverlay} ${fadeOut ? 'modal-fadeout' : ''}`}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={`${styles.modalContent} ${fadeOut ? 'modal-fadeout' : ''}`}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="닫기">
          &times;
        </button>
        <h3 className="text-xl font-bold mb-3">케이터링 견적 문의</h3>
        <div className={styles.smallNotice}>
          양식을 다운받은 후, 채워주신 양식을 이메일로 보내주세요!
        </div>
        <button
          className={styles.cateringDownloadBtn}
          onClick={handleDownload}
          tabIndex={0}
          aria-label="케이터링 신청양식 다운받기"
        >
          <span className={styles.contactIcon} aria-hidden></span>
          케이터링 신청양식 다운받기
        </button>
        <div className={styles.contactRow}>
          <span className={styles.contactIcon} aria-hidden>☎️</span>
          <span>전화번호:</span>
          <a href="tel:0221234025" className={styles.contactLink}>02-2123-4025</a>
        </div>
        <div className={styles.contactRow}>
          <span className={styles.contactIcon} aria-hidden>📧</span>
          <span>이메일:</span>
          <a href="mailto:yscoop01@yonsei.ac.kr" className={styles.contactLink}>yscoop01@yonsei.ac.kr</a>
        </div>
        <div className={styles.bottomNotice}>
          다운로드가 안되면 문의 바랍니다.
        </div>
      </div>
    </div>
  );
};

export default CateringEstimateModal;
