import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trackButtonClick } from '../../../shared/utils/gtm';

const DesktopHeader = ({ onContactClick, onMenuClick }) => {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = () => {
    window.dataLayer && window.dataLayer.push({
      event: 'menu_button_click',
      location: 'header',
      device: 'desktop',
      page_path: window.location.pathname
    });
    onMenuClick();
  };

  const handleContactClick = () => {
    trackButtonClick('contact_button', 'desktop_header');
    onContactClick();
  };

  const handleNavigationClick = (pageName) => {
    const events = {
      services: 'services_button_click',
      about: 'about_button_click'
    };

    if (events[pageName]) {
      window.dataLayer && window.dataLayer.push({
        event: events[pageName],
        location: 'header',
        device: 'desktop',
        page_path: window.location.pathname
      });
    }
  };

  const navItems = [
    { id: 'menu', label: '메뉴', type: 'menu' },
    { id: 'services', label: '서비스', type: 'link', to: '/services' },
    { id: 'about', label: '소개', type: 'link', to: '/about' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[1000] border-b transition-all duration-300 ${
        isScrolled
          ? 'border-slate-200 bg-white/95 shadow-lg backdrop-blur-md'
          : 'border-transparent bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-content-lg items-center justify-between px-4 lg:h-20 lg:px-8">
        <Link to="/" className="flex items-center gap-2 no-underline">
          <img
            src={`${process.env.PUBLIC_URL}/cafe_logo.png`}
            alt="트레비앙 로고"
            className="h-12 w-auto object-contain lg:h-14"
          />
        </Link>
        <nav className="flex items-center gap-4 text-base">
          {navItems.map((item) =>
            item.type === 'menu' ? (
              <button
                key={item.id}
                type="button"
                onClick={handleMenuClick}
                className="inline-flex items-center gap-1 rounded-full border border-slate-200/70 bg-white/80 px-5 py-2 font-semibold text-slate-600 shadow-sm backdrop-blur hover:border-brand-blue hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
              >
                <span aria-hidden>🍽️</span>
                {item.label}
              </button>
            ) : (
              <Link
                key={item.id}
                to={item.to}
                onClick={() => handleNavigationClick(item.id)}
                className={`rounded-full px-4 py-2 font-semibold transition ${
                  pathname === item.to
                    ? 'bg-brand-blue/10 text-brand-blue'
                    : 'text-slate-500 hover:bg-slate-100 hover:text-brand-blue'
                }`}
                aria-current={pathname === item.to ? 'page' : undefined}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
        <button
          onClick={handleContactClick}
          className="rounded-pill bg-brand-blue px-6 py-2.5 text-base font-semibold text-white shadow-card transition hover:bg-brand-blueDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blueLight"
        >
          카페 문의하기
        </button>
      </div>
    </header>
  );
};

export default DesktopHeader;