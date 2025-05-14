import React from 'react';
import styles from './MenuOverlay.module.css';
import Menu from '../Menu';

export default function MenuOverlay({ isOpen, onClose }) {
  React.useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.menuContainer} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} aria-label="닫기" onClick={onClose}>
          ×
        </button>
        <h2 className={styles.title}>카페 트레비앙 메뉴</h2>
        <div className={styles.menuContentScroll}>
          <Menu />
        </div>
      </div>
    </div>
  );
}
