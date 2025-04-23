import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

const MobileMenu = () => {
  const [activeTab, setActiveTab] = useState('Coffee');
  const [isAnimating, setIsAnimating] = useState(false);

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

  const handleTabClick = (tabName) => {
    if (activeTab === tabName || isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(tabName);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className={styles.menuSection}>
      <h2 className={styles.menuTitle}>카페 트레비앙 메뉴</h2>
      
      <div className={styles.menuTabs}>
        {Object.keys(menuData).map((tabName) => (
          <button
            key={tabName}
            className={`${styles.menuTab} ${activeTab === tabName ? styles.active : ''}`}
            onClick={() => handleTabClick(tabName)}
            disabled={isAnimating}
          >
            {tabName}
          </button>
        ))}
      </div>

      <div 
        key={activeTab}
        className={`${styles.menuList} ${isAnimating ? styles.fadeOut : styles.fadeIn}`}
      >
        {menuData[activeTab].map((item, index) => (
          <div key={index} className={styles.menuItem}>
            <div className={styles.menuItemHeader}>
              <span className={styles.menuName}>{item.name}</span>
              <span className={styles.menuPrice}>{item.price}</span>
            </div>
            <div className={styles.menuItemDetails}>
              <span className={styles.menuKoreanName}>{item.koreanName}</span>
              <span className={styles.menuType}>{item.type}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobileMenu; 