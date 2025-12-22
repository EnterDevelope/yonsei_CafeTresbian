import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trackButtonClick } from '../../../shared/utils/gtm';

const MobileHeader = ({ onContactClick, onMenuClick }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef(null);
  const { pathname } = useLocation();

  const navItems = [
    { id: 'menu', label: '메뉴', type: 'action' },
    { id: 'services', label: '서비스', to: '/services' },
    { id: 'about', label: '소개', to: '/about' },
  ];

  useEffect(() => {
    if (!isDrawerOpen) {
      return undefined;
    }

    const drawerEl = drawerRef.current;
    const focusableElements = drawerEl
      ? drawerEl.querySelectorAll('button, a')
      : [];
    const firstFocusable = focusableElements[0];
    const lastFocusable =
      focusableElements[focusableElements.length - 1];

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsDrawerOpen(false);
      }

      if (event.key === 'Tab' && focusableElements.length > 0) {
        if (event.shiftKey && document.activeElement === firstFocusable) {
          event.preventDefault();
          lastFocusable.focus();
        } else if (!event.shiftKey && document.activeElement === lastFocusable) {
          event.preventDefault();
          firstFocusable.focus();
        }
      }
    };

    firstFocusable?.focus();
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isDrawerOpen]);

  const emitNavEvent = (id) => {
    const eventName = {
      menu: 'menu_button_click',
      services: 'services_button_click',
      about: 'about_button_click',
    }[id];

    if (eventName) {
      window.dataLayer && window.dataLayer.push({
        event: eventName,
        location: 'header',
        device: 'mobile',
        page_path: window.location.pathname,
      });
    }
  };

  const handleMenuToggle = () => {
    emitNavEvent('menu');
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => setIsDrawerOpen(false);

  const handleDrawerNavClick = (item) => {
    emitNavEvent(item.id);
    setIsDrawerOpen(false);
    if (item.type === 'action') {
      onMenuClick();
    }
  };

  const handleContactButtonClick = () => {
    trackButtonClick('contact_button', 'mobile_header_drawer');
    setIsDrawerOpen(false);
    onContactClick();
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[1000] border-b border-white/60 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-content-lg items-center justify-between px-4">
          <img
            src={`${process.env.PUBLIC_URL}/cafe_logo.png`}
            alt="Cafe Trebien Logo"
            className="h-12 w-auto"
          />
          <button
            type="button"
            aria-label="메뉴 열기"
            onClick={handleMenuToggle}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm"
          >
            <span className="flex w-5 flex-col gap-1">
              <span className="h-0.5 w-full rounded-full bg-slate-800" />
              <span className="h-0.5 w-3/4 rounded-full bg-slate-800" />
              <span className="h-0.5 w-full rounded-full bg-slate-800" />
            </span>
          </button>
        </div>
      </header>

      {isDrawerOpen && (
        <div className="fixed inset-0 z-[1100]">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={handleDrawerClose}
            aria-hidden="true"
          />
          <nav
            ref={drawerRef}
            className="relative ml-auto flex h-full w-full max-w-xs flex-col gap-8 rounded-l-3xl bg-white px-6 pb-10 pt-6 shadow-2xl"
            aria-label="모바일 내비게이션"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-500">Navigation</p>
              <button
                type="button"
                aria-label="닫기"
                onClick={handleDrawerClose}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-100 bg-white shadow-sm"
              >
                ×
              </button>
            </div>
            <ul className="flex flex-col gap-4 text-lg font-semibold text-slate-700">
              {navItems.map((item) =>
                item.type === 'action' ? (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => handleDrawerNavClick(item)}
                      className="flex w-full items-center justify-between rounded-2xl bg-slate-50 px-4 py-3"
                    >
                      {item.label}
                      <span aria-hidden>›</span>
                    </button>
                  </li>
                ) : (
                  <li key={item.id}>
                    <Link
                      to={item.to}
                      onClick={() => {
                        handleDrawerNavClick(item);
                      }}
                      className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 ${
                        pathname === item.to
                          ? 'bg-brand-blue/10 text-brand-blue'
                          : 'bg-slate-50 hover:bg-slate-100'
                      }`}
                      aria-current={pathname === item.to ? 'page' : undefined}
                    >
                      {item.label}
                      <span aria-hidden>›</span>
                    </Link>
                  </li>
                ),
              )}
            </ul>
            <div className="mt-auto space-y-3 rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-medium text-slate-500">
                운영 시간
              </p>
              <p className="text-base font-semibold text-slate-800">
                평일 08:00 - 19:00
              </p>
              <button
                type="button"
                onClick={handleContactButtonClick}
                className="flex w-full items-center justify-center rounded-pill bg-brand-blue px-4 py-3 text-base font-semibold text-white shadow-card"
              >
                문의하기
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileHeader;
