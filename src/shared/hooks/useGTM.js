import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, initializeGTM } from '../utils/gtm';

/**
 * Google Tag Manager 페이지뷰 추적을 위한 커스텀 훅
 * React Router의 페이지 변경을 자동으로 추적합니다.
 */
export const useGTM = () => {
  const location = useLocation();

  useEffect(() => {
    // GTM 초기화 확인
    initializeGTM();

    // 페이지뷰 이벤트 전송
    const pageTitle = document.title || '연세대학교 트레비앙 카페';
    const pagePath = location.pathname + location.search;

    trackPageView(pagePath, pageTitle);

    // 개발 환경에서 콘솔에 로그 출력
    if (process.env.NODE_ENV === 'development') {
      console.log('GTM Page View:', {
        page_path: pagePath,
        page_title: pageTitle,
        page_location: window.location.href
      });
    }
  }, [location]);

  return null;
};

/**
 * 컴포넌트에서 GTM 이벤트 추적을 위한 헬퍼 훅
 */
export const useGTMEvents = () => {
  const { trackEvent, trackButtonClick, trackModalOpen, trackModalClose, trackFormSubmit } = require('../utils/gtm');

  return {
    trackEvent,
    trackButtonClick,
    trackModalOpen,
    trackModalClose,
    trackFormSubmit
  };
}; 