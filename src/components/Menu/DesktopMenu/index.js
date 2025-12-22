import React, { useState } from 'react';
import { menuCategories, optionInfo } from '../menuData';

const formatPrice = (value) => {
  if (value === undefined || value === null) return '-';
  return typeof value === 'number' ? value.toFixed(1) : value;
};

const DesktopMenu = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(menuCategories[0].id);
  const activeCategory = menuCategories.find((category) => category.id === activeCategoryId);

  const getHotPrice = (item) => {
    if (item.onlyIced) return '-';
    return formatPrice(item.hot ?? item.price);
  };

  const getIcedPrice = (item) => {
    if (item.onlyIced) {
      return formatPrice(item.iced ?? item.price);
    }

    return formatPrice(item.iced ?? item.price);
  };

  return (
    <section id="menu" className="space-y-6 rounded-[24px] bg-white p-6 shadow-card">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue">Our Menu</p>
        <h2 className="mt-1 text-2xl font-extrabold text-slate-900">카페 트레비앙 메뉴</h2>
        <p className="mt-2 text-sm text-slate-600">
          따뜻한 커피부터 디저트까지, 트레비앙의 대표 메뉴를 확인하세요.
        </p>
      </div>
      <div className="flex flex-wrap gap-2 rounded-2xl bg-slate-50 p-2 text-sm">
        {menuCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setActiveCategoryId(category.id)}
            className={`flex flex-col rounded-xl px-3 py-2 font-semibold transition ${
              activeCategoryId === category.id
                ? 'bg-white text-brand-blue shadow-sm'
                : 'text-slate-500 hover:text-brand-blue'
            }`}
          >
            {category.label}
            <span className="text-xs font-medium text-slate-400">{category.subLabel}</span>
          </button>
        ))}
      </div>
      <div className="overflow-hidden rounded-[20px] border border-slate-100">
        <div className="grid grid-cols-4 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-600 uppercase tracking-wide">
          <span>메뉴</span>
          <span>영문</span>
          <span>HOT</span>
          <span>ICED</span>
        </div>
        <div className="max-h-[360px] overflow-y-auto">
          {activeCategory.items.map((item) => (
            <div
              key={item.name}
              className="grid grid-cols-4 items-center px-4 py-2 text-sm text-slate-700 odd:bg-white even:bg-slate-50/70"
            >
              <span className="font-semibold text-slate-900">{item.name}</span>
              <span className="text-slate-500">{item.eng}</span>
              <span className="font-semibold text-slate-900">{getHotPrice(item)}</span>
              <span className="font-semibold text-slate-900">{getIcedPrice(item)}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-1 rounded-2xl bg-slate-50 px-4 py-2 text-xs text-slate-600">
        {optionInfo.map((info) => (
          <p key={info}>※ {info}</p>
        ))}
      </div>
    </section>
  );
};

export default DesktopMenu;
