import React, { useState, useEffect, useRef } from 'react';
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

const MobileMenu = () => {
  const [activeTab, setActiveTab] = useState('Coffee');
  const [isAnimating, setIsAnimating] = useState(false);
  const tabsRef = useRef(null);

  const handleTabClick = (tabName) => {
    if (tabName !== activeTab) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTab(tabName);
        setIsAnimating(false);
      }, 150); // 애니메이션 시간
    }
  };

  // 활성 탭이 중앙에 오도록 스크롤 (옵션)
  useEffect(() => {
    const activeTabElement = tabsRef.current?.querySelector(`.${styles.menuTabActive}`);
    if (activeTabElement && tabsRef.current) {
      const scrollContainer = tabsRef.current;
      const scrollLeft = activeTabElement.offsetLeft - (scrollContainer.offsetWidth / 2) + (activeTabElement.offsetWidth / 2);
      scrollContainer.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  }, [activeTab]);

  return (
    <section className={styles.menuSection} id="menu">
       <div className={styles.sectionTitleContainer}>
        <span className={styles.sectionLabel}>Our Menu</span>
        <h2 className={styles.sectionTitle}>카페 트레비앙 메뉴</h2>
      </div>

      <div className={styles.menuTabs} ref={tabsRef} role="tablist">
        {Object.keys(menuData).map((tabName) => (
          <button
            key={tabName}
            id={`tab-${tabName}`}
            className={`${styles.menuTab} ${activeTab === tabName ? styles.menuTabActive : ''}`}
            onClick={() => handleTabClick(tabName)}
            aria-controls={`panel-${tabName}`}
            aria-selected={activeTab === tabName}
            role="tab"
            tabIndex={activeTab === tabName ? 0 : -1} // 활성 탭만 포커스 가능
          >
            {tabName}
            {activeTab === tabName && <div className={styles.tabUnderline} />}
          </button>
        ))}
      </div>

      <div 
        className={`${styles.menuList} ${isAnimating ? styles.fadeOut : ''}`}
        id={`panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
      >
        {menuData[activeTab].map((item, index) => (
          <div key={index} className={styles.menuItem}>
            <div className={styles.itemInfo}>
              <div className={styles.itemName}>{item.koreanName} ({item.name})</div>
              <div className={styles.itemType}>{item.type}</div>
            </div>
            <div className={styles.itemPrice}>{item.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobileMenu; 