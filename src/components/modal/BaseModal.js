import React, { useEffect, useCallback, useState } from 'react';

const BaseModal = ({ isOpen, onClose, children, className = '', ...props }) => {
  const [show, setShow] = useState(isOpen);
  const [fadeOut, setFadeOut] = useState(false);

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

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 w-screen h-screen z-[1000] flex items-center justify-center bg-[rgba(30,40,80,0.18)] transition-colors duration-200 ${fadeOut ? 'animate-fadeOut' : 'animate-fadeIn'}`}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      {...props}
    >
      <div className={className}>
        {children}
      </div>
    </div>
  );
};

export default BaseModal;
