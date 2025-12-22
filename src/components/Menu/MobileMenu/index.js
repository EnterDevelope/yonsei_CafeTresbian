import React, { useRef, useState } from 'react';
import { menuCategories, optionInfo } from '../menuData';

const formatPrice = (value) => {
  if (value === undefined || value === null) return '-';
  return typeof value === 'number' ? value.toFixed(1) : value;
};

const MobileMenu = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(menuCategories[0].id);
  const scrollRef = useRef(null);
  const activeCategory = menuCategories.find((category) => category.id === activeCategoryId);

  const handleTabClick = (categoryId) => {
    setActiveCategoryId(categoryId);
    const activeButton = scrollRef.current?.querySelector(`[data-id="${categoryId}"]`);
    if (activeButton && scrollRef.current) {
      scrollRef.current.scrollTo({
        left: activeButton.offsetLeft - scrollRef.current.offsetWidth / 2 + activeButton.offsetWidth / 2,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="menu" className="space-y-6 rounded-[28px] bg-white p-6 shadow-card">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">Our Menu</p>
        <h2 className="mt-2 text-2xl font-extrabold text-slate-900">카페 트레비앙 메뉴</h2>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto rounded-2xl bg-slate-50 p-2"
        role="tablist"
      >
        {menuCategories.map((category) => (
          <button
            key={category.id}
            id={`menu-tab-${category.id}`}
            type="button"
            data-id={category.id}
            onClick={() => handleTabClick(category.id)}
            role="tab"
            aria-selected={activeCategoryId === category.id}
            aria-controls={`menu-panel-${category.id}`}
            tabIndex={activeCategoryId === category.id ? 0 : -1}
            className={`flex h-full min-w-[120px] flex-col rounded-xl px-3 py-2 text-xs font-semibold ${
              activeCategoryId === category.id
                ? 'bg-white text-brand-blue shadow-sm'
                : 'text-slate-500'
            }`}
          >
            {category.label}
            <span className="text-[10px] text-slate-400">{category.subLabel}</span>
          </button>
        ))}
      </div>
      <div
        className="space-y-4"
        role="tabpanel"
        id={`menu-panel-${activeCategoryId}`}
        aria-labelledby={`menu-tab-${activeCategoryId}`}
      >
        {activeCategory.items.map((item) => (
          <div
            key={item.name}
            className="rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-3 text-left"
          >
            <div className="font-semibold text-slate-900">{item.name}</div>
            <div className="text-xs text-slate-500">{item.eng}</div>
            <div className="mt-2 flex flex-wrap gap-3 text-sm font-semibold text-slate-800">
              {item.onlyIced ? (
                <span>
                  ICED {formatPrice(item.iced ?? item.price)}
                </span>
              ) : (
                <>
                  <span>HOT {formatPrice(item.hot ?? item.price)}</span>
                  <span>ICED {formatPrice(item.iced ?? item.price)}</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-2xl bg-slate-50 px-4 py-3 text-xs text-slate-600">
        {optionInfo.map((info) => (
          <p key={info}>※ {info}</p>
        ))}
      </div>
    </section>
  );
};

export default MobileMenu;
