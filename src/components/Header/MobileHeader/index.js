import React from 'react';
import styles from './styles.module.css';

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
            onClick={() => setIsDrawerOpen(true)}
            aria-label="메뉴 열기"
          >
            <span className={styles.menuIcon}></span>
          </button>
        </div>
      </header>


    {isDrawerOpen && (
      <>
        <div className={styles.drawerOverlay} onClick={() => setIsDrawerOpen(false)} />
        <nav className={styles.drawer}>
          <button
            className={styles.drawerCloseBtn}
            onClick={() => setIsDrawerOpen(false)}
            aria-label="닫기"
          >
            ×
          </button>
          <ul className={styles.drawerMenuList}>
            <li>
              <button
                className={styles.drawerMenuBtn}
                onClick={() => {
                  setIsDrawerOpen(false);
                  onMenuClick();
                }}
              >
                메뉴
              </button>
            </li>
            <li>
              <button
                className={styles.drawerMenuBtn}
                onClick={() => {
                  setIsDrawerOpen(false);
                  scrollToSection('services');
                }}
              >
                서비스
              </button>
            </li>
            <li>
              <button
                className={styles.drawerMenuBtn}
                onClick={() => {
                  setIsDrawerOpen(false);
                  scrollToSection('about');
                }}
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