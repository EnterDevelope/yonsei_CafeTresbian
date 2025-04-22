import React from 'react';
import styles from './Modal.module.css';

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className={styles.modalOverlay}
      onClick={(e) => {
        if (e.target.className.includes('modalOverlay')) {
          onClose();
        }
      }}
    >
      <div className={styles.modalContent}>
        <button className={styles.closeBtn} onClick={onClose}>
          &times;
        </button>
        <h3>Contact Information</h3>
        <p>전화번호: 02-1234-5678</p>
        <p>이메일: info@cafetrebien.co.kr</p>
      </div>
    </div>
  );
}

export default Modal;