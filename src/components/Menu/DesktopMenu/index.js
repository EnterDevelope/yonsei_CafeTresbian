import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

const menuData = {
  '커피 Coffee': [
    { name: '아메리카노', eng: 'Americano', hot: 2.2, iced: 2.9 },
    { name: '카페 모카', eng: 'Café Mocha', hot: 4.1, iced: 4.2 },
    { name: '카라멜 마끼아또', eng: 'Caramel Macchiato', hot: 4.1, iced: 4.2 },
    { name: '카페라떼', eng: 'Café Latte', hot: 3.5, iced: 3.7 },
    { name: '바닐라 라떼', eng: 'Vanilla Latte', hot: 3.7, iced: 3.9 },
    { name: '헤이즐넛 라떼', eng: 'Hazelnut Latte', hot: 3.7, iced: 3.9 },
    { name: '토피넛 라떼', eng: 'Toffeenut Latte', hot: 4.2, iced: 4.4 },
    { name: '사이공커피', eng: 'Saigon Coffee', hot: 4.2, iced: 4.2 },
    { name: '카푸치노', eng: 'Cappuccino', hot: 3.7 },
    { name: '에스프레소', eng: 'Espresso', hot: 2.3 },
    { name: '콜드브루 커피', eng: 'Cold Brew Coffee', iced: 3.7, onlyIced: true },
    { name: '콜드브루 라떼', eng: 'Cold Brew Latte', iced: 4.4, onlyIced: true },
    { name: '아이스크림라떼', eng: 'Ice Cream Latte', iced: 4.5, onlyIced: true },
    { name: '아포카토', eng: 'Affogato', iced: 3.2, onlyIced: true },
  ],
  '티/라떼 Tea/Latte': [
    { name: '녹차', eng: 'Green Tea', hot: 2.5, iced: 2.5 },
    { name: '홍차', eng: 'Black Tea', hot: 2.5, iced: 2.5 },
    { name: '누룽지둥글레차', eng: "Solomon's Seal Tea", hot: 2.5, iced: 2.5 },
    { name: '우엉차', eng: 'Burdock Tea', hot: 2.5, iced: 2.5 },
    { name: '페퍼민트', eng: 'Peppermint Tea', hot: 2.5, iced: 2.5 },
    { name: '캐모마일', eng: 'Chamomile Tea', hot: 2.5, iced: 2.5 },
    { name: '루이보스', eng: 'Rooibos Tea', hot: 2.5, iced: 2.5 },
    { name: '레몬차', eng: 'Lemon Tea', hot: 3.0, iced: 3.0 },
    { name: '매실차', eng: 'Green Plum Tea', hot: 3.0, iced: 3.0 },
    { name: '유자차', eng: 'Citron Tea', hot: 3.3, iced: 3.3 },
    { name: '모과차', eng: 'Quince Tea', hot: 3.3, iced: 3.3 },
    { name: '생강차', eng: 'Ginger Tea', hot: 3.3, iced: 3.3 },
    { name: '자몽차', eng: 'Grapefruit Tea', hot: 4.0, iced: 4.0 },
    { name: '초코라떼', eng: 'Choco Latte', hot: 3.7, iced: 3.9 },
    { name: '그린티라떼', eng: 'Green-tea Latte', hot: 3.7, iced: 3.9 },
    { name: '밀크티라떼', eng: 'Milk Tea Latte', hot: 3.7, iced: 3.9 },
  ],
  '스무디/오트 Smoothie/Oat': [
    { name: '망고 스무디', eng: 'Mango Smoothie', iced: 5.0, onlyIced: true },
    { name: '요거트 스무디', eng: 'Yogurt Smoothie', iced: 4.1, onlyIced: true },
    { name: '타로버블티', eng: 'Taro Bubble Tea', iced: 3.7, onlyIced: true },
    { name: '옥수수 크림 오트라떼', eng: 'Corn Cream Oat Latte', hot: 4.2 },
    { name: '오트 리치 라떼', eng: 'Oat Rich Latte', hot: 4.1, iced: 4.2 },
    { name: '오트 밀크티 라떼', eng: 'Oat Milk Tea Latte', hot: 4.1, iced: 4.2 },
  ],
  '주스/에이드 Juice/Ade': [
    { name: '딸기바나나주스', eng: 'Strawberry & Banana Juice', iced: 5.0, onlyIced: true },
    { name: '딸기주스', eng: 'Strawberry Juice', iced: 5.0, onlyIced: true },
    { name: '바나나주스', eng: 'Banana Juice', iced: 5.0, onlyIced: true },
    { name: '사과주스', eng: 'Apple Juice', iced: 5.0, onlyIced: true },
    { name: '토마토주스', eng: 'Tomato Juice', iced: 5.0, onlyIced: true },
    { name: '파인애플주스', eng: 'Pineapple Juice', iced: 5.0, onlyIced: true },
    { name: '에이드(복분자/레몬/자몽/청포도)', eng: 'Ade (Raspberry/Lemon/Grape/Green grape)', iced: 3.9, onlyIced: true },
    { name: '복숭아아이스티', eng: 'Peach Iced Tea', iced: 3.2, onlyIced: true },
  ],
  '블렌디드 Blended': [
    { name: '바닐라 블렌디드', eng: 'Vanilla Blended', iced: 4.1, onlyIced: true },
    { name: '그린티 블렌디드', eng: 'Greentea Blended', iced: 4.1, onlyIced: true },
    { name: '초콜릿 블렌디드', eng: 'Chocolate Blended', iced: 4.1, onlyIced: true },
    { name: '오레오 블렌디드', eng: 'Oreo Blended', iced: 4.1, onlyIced: true },
    { name: '민트초코 블렌디드', eng: 'Mint Chocolate Blended', iced: 4.1, onlyIced: true },
    { name: '초코바나나 블렌디드', eng: 'Chocolate Banana Blended', iced: 4.1, onlyIced: true },
    { name: '쿠키바닐라버블 블렌디드', eng: 'Cookies Vanilla Bubble', iced: 4.5, onlyIced: true },
  ],
  '와플/기타 Waffle/Others': [
    { name: '와플', eng: 'Waffle', price: 2.5 },
    { name: '와플 아이스크림', eng: 'Waffle Ice Cream', price: 3.8 },
    { name: '소프트아이스크림', eng: 'Soft Ice Cream', price: 2.2 },
    { name: '토핑추가(누텔라/카야/로투스)', eng: 'Add toppings (Nutella/Kaya/Lotus)', price: 0.5, option: true },
    { name: '우유/두유', eng: 'Milk/Soymilk', price: '2.7/1.2' },
    { name: '미숫가루', eng: 'Powder made of mixed grains', price: 3.2 },
    { name: '흑임자 미숫가루', eng: 'Roasted Black Sesame and Grain Latte', price: 4.2 },
    { name: '탄산음료/전통식혜', eng: 'Soda/Sweet rice drink', price: '1.7/2.7' },
  ],
};

const optionInfo = [
  '샷 추가 0.6 / 시럽(바닐라, 헤이즐넛) 추가 0.5',
  '와플 토핑(누텔라/카야/로투스) 추가 0.5',
  '우유/두유 선택 가능',
];

const DesktopMenu = () => {
  const [activeTab, setActiveTab] = useState(Object.keys(menuData)[0]);
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
            className={
              `${styles.menuTab} ${activeTab === tabName ? styles.menuTabActive : ''}`
            }
            onClick={() => handleTabClick(tabName)}
            aria-selected={activeTab === tabName}
            role="tab"
            tabIndex={0}
            aria-label={`${tabName} 메뉴 카테고리`}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') handleTabClick(tabName);
            }}
          >
            {tabName}
          </button>
        ))}
      </div>

      <div 
        className={`${styles.menuTable} ${isAnimating ? styles.fadeOut : ''}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
      >
        <div className={styles.menuRow + ' font-bold bg-gray-100'}>
          <div className={styles.menuCell}>메뉴</div>
          <div className={styles.menuCell}>영문</div>
          <div className={styles.menuCell}>HOT</div>
          <div className={styles.menuCell}>ICED</div>
        </div>
        {menuData[activeTab].map((item, index) => (
          <div key={index} className={styles.menuRow}>
            <div className={styles.menuCell}>{item.name}</div>
            <div className={styles.menuCell}>{item.eng}</div>
            <div className={styles.menuCell}>{
              item.onlyIced ? '-' : (item.hot ?? (item.price ?? '-'))
            }</div>
            <div className={styles.menuCell}>{
              item.onlyIced ? (item.iced ?? item.price ?? '-') : (item.iced ?? (item.price ?? '-'))
            }</div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-sm text-gray-600">
        {optionInfo.map((info, idx) => (
          <div key={idx}>※ {info}</div>
        ))}
      </div>
    </section>
  );
};

export default DesktopMenu; 