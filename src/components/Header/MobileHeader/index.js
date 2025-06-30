import React from 'react';
import styles from './styles.module.css';
import { trackButtonClick } from '../../../shared/utils/gtm';

const MobileHeader = ({ onContactClick, onMenuClick }) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  React.useEffect(() => {
    if (!isDrawerOpen) return;
    const handleEsc = (e) => { if (e.key === 'Escape') setIsDrawerOpen(false); };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isDrawerOpen]);

  const scrollToSection = (id) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleMenuButtonClick = () => {
    trackButtonClick('mobile_menu_button', 'mobile_header');
    setIsDrawerOpen(true);
  };

  const handleDrawerMenuClick = (menuName) => {
    trackButtonClick(`mobile_nav_${menuName}`, 'mobile_header');
    setIsDrawerOpen(false);
    
    if (menuName === 'menu') {
      onMenuClick();
    } else if (menuName === 'services') {
      scrollToSection('services');
    } else if (menuName === 'about') {
      scrollToSection('about');
    }
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logoArea}>
            <img
              src={process.env.PUBLIC_URL + '/cafe_logo.png'}
              alt="Cafe Trebien Logo"
              className={styles.logoImg}
            />
          </div>

          <button
            className={styles.menuButton}
            onClick={handleMenuButtonClick}
            aria-label="메뉴 열기"
          >
            <span className={styles.menuIcon}></span>
          </button>
        </div>
      </header>


    {isDrawerOpen && (
      <>
        <div className={styles.drawerOverlay} onClick={handleDrawerClose} />
        <nav className={styles.drawer}>
          <button
            className={styles.drawerCloseBtn}
            onClick={handleDrawerClose}
            aria-label="닫기"
          >
            ×
          </button>
          <ul className={styles.drawerMenuList}>
            <li>
              <button
                className={styles.drawerMenuBtn}
                onClick={() => handleDrawerMenuClick('menu')}
              >
                메뉴
              </button>
            </li>
            <li>
              <button
                className={styles.drawerMenuBtn}
                onClick={() => handleDrawerMenuClick('services')}
              >
                서비스
              </button>
            </li>
            <li>
              <button
                className={styles.drawerMenuBtn}
                onClick={() => handleDrawerMenuClick('about')}
              >
                소개
              </button>
            </li>
          </ul>
        </nav>
      </>
    )}
    </>
  );
};

export default MobileHeader; 