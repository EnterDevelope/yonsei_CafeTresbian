import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

const menuData = {
  Coffee: [
    { name: 'Espresso', koreanName: '에스프레소', price: '1.5', type: 'Hot / Ice' },
    { name: 'Americano', koreanName: '아메리카노', price: '1.5 / 2.0', type: 'Hot / Ice' },
    { name: 'Caffe Latte', koreanName: '카페 라떼', price: '2.4', type: 'Hot / Ice' },
    { name: 'Cappuccino', koreanName: '카푸치노', price: '2.4', type: 'Hot / Ice' },
    { name: 'Vanilla Caffe Latte', koreanName: '바닐라 카페 라떼', price: '2.6', type: 'Hot / Ice' },
    { name: 'Hazelnut caffe latte', koreanName: '헤이즐넛 카페 라떼', price: '2.6', type: 'Hot / Ice' },
    { name: 'Caramel Macchiato', koreanName: '카라멜 마키아또', price: '2.6', type: 'Hot / Ice' },
    { name: 'Caffe Mocha', koreanName: '카페 모카', price: '2.6', type: 'Hot / Ice' },
    { name: 'Cold Brew', koreanName: '콜드브루', price: '2.5', type: 'Only Ice' },
    { name: 'Cold Brew Latte', koreanName: '콜드브루 라떼', price: '2.5', type: 'Only Ice' }
  ],
  Beverage: [
    { name: 'Green Tea Latte', koreanName: '녹차 라떼', price: '2.5', type: 'Hot / Ice' },
    { name: 'Chocolate', koreanName: '초콜릿', price: '2.5', type: 'Hot / Ice' },
    { name: 'Strawberry Latte', koreanName: '딸기 라떼', price: '2.5', type: 'Hot / Ice' }
  ],
  Blender: [
    { name: 'Strawberry Smoothie', koreanName: '딸기 스무디', price: '3.0', type: 'Only Ice' },
    { name: 'Mango Smoothie', koreanName: '망고 스무디', price: '3.0', type: 'Only Ice' }
  ],
  Icecream: [
    { name: 'Vanilla Icecream', koreanName: '바닐라 아이스크림', price: '2.0', type: 'Only Ice' },
    { name: 'Chocolate Icecream', koreanName: '초콜릿 아이스크림', price: '2.0', type: 'Only Ice' }
  ],
  Add: [
    { name: 'Shot', koreanName: '샷', price: '0.5', type: 'Add' },
    { name: 'Syrup', koreanName: '시럽', price: '0.5', type: 'Add' }
  ]
};

const DesktopMenu = () => {
  const [activeTab, setActiveTab] = useState('Coffee');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabClick = (tabName) => {
    if (tabName !== activeTab) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTab(tabName);
        setIsAnimating(false);
      }, 150);
    }
  };

  useEffect(() => {
    const adjustFontSize = () => {
      const cells = document.querySelectorAll(`.${styles.menuCell}`);
      cells.forEach((cell) => {
        let fontSize = parseInt(window.getComputedStyle(cell).fontSize, 10);
        while (cell.scrollWidth > cell.offsetWidth && fontSize > 10) {
          fontSize -= 1;
          cell.style.fontSize = `${fontSize}px`;
        }
      });
    };

    adjustFontSize();
    window.addEventListener('resize', adjustFontSize);
    return () => window.removeEventListener('resize', adjustFontSize);
  }, []);

  return (
    <section className={styles.menuSection} id="menu">
      <div className={styles.sectionTitleContainer}>
        <span className={styles.sectionLabel}>Our Menu</span>
        <h2 className={styles.sectionTitle}>카페 트레비앙 메뉴</h2>
      </div>

      <div className={styles.menuTabs}>
        {Object.keys(menuData).map((tabName) => (
          <button
            key={tabName}
            className={`${styles.menuTab} ${activeTab === tabName ? styles.menuTabActive : ''}`}
            onClick={() => handleTabClick(tabName)}
            aria-selected={activeTab === tabName}
            role="tab"
          >
            {tabName}
            {activeTab === tabName && <div className={styles.tabUnderline} />}
          </button>
        ))}
      </div>

      <div 
        className={`${styles.menuTable} ${isAnimating ? styles.fadeOut : ''}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
      >
        {menuData[activeTab].map((item, index) => (
          <div key={index} className={styles.menuRow}>
            <div className={styles.menuCell}>{item.name}</div>
            <div className={styles.menuCell}>{item.koreanName}</div>
            <div className={styles.menuCell}>{item.price}</div>
            <div className={styles.menuCell}>{item.type}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DesktopMenu; 