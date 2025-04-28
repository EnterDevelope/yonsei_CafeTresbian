import React, { useState, useEffect, useCallback } from 'react';
import styles from './Modal.module.css';

const FADE_DURATION = 440; // ms, CSS와 일치시킴

const CafeContactModal = ({ isOpen, onClose }) => {
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
      }, FADE_DURATION);
      return () => {
        clearTimeout(timeout);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, show, handleKeyDown]);

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
        <h3 className="text-xl font-bold mb-3">카페 문의</h3>
        <div className={styles.highlightNotice}>
          <span className={styles.contactIcon} aria-hidden></span>
          케이터링 관련은 케이터링 안내를 확인해주세요. <br/>(번호가 달라요!)
        </div>
        <div className={styles.contactRow}>
          <span className={styles.contactIcon} aria-hidden>☎️</span>
          <span>전화번호:</span>
          <a href="tel:0221236933" className={styles.contactLink}>02-2123-6933</a>
        </div>
        <div className={styles.contactRow}>
          <span className={styles.contactIcon} aria-hidden>📧</span>
          <span>이메일:</span>
          <a href="mailto:yscoop01@yonsei.ac.kr" className={styles.contactLink}>yscoop01@yonsei.ac.kr</a>
        </div>
      </div>
    </div>
  );
};

export default CafeContactModal;
