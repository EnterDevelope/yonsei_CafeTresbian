/**
 * Google Tag Manager 유틸리티
 * React SPA에서 GTM 이벤트 추적을 위한 헬퍼 함수들
 */

// dataLayer가 존재하는지 확인
const isDataLayerAvailable = () => {
  return typeof window !== 'undefined' && window.dataLayer;
};

// 기본 GTM 이벤트 전송 함수
const pushToDataLayer = (eventData) => {
  if (isDataLayerAvailable()) {
    window.dataLayer.push(eventData);
  }
};

// 페이지뷰 이벤트 전송
export const trackPageView = (pagePath, pageTitle) => {
  pushToDataLayer({
    event: 'page_view',
    page_path: pagePath,
    page_title: pageTitle,
    page_location: window.location.href
  });
};

// 사용자 상호작용 이벤트 전송
export const trackEvent = (eventName, eventCategory, eventAction, eventLabel = null, eventValue = null) => {
  const eventData = {
    event: eventName,
    event_category: eventCategory,
    event_action: eventAction
  };

  if (eventLabel) {
    eventData.event_label = eventLabel;
  }

  if (eventValue) {
    eventData.event_value = eventValue;
  }

  pushToDataLayer(eventData);
};

// 버튼 클릭 이벤트 추적
export const trackButtonClick = (buttonName, buttonLocation) => {
  trackEvent('button_click', 'engagement', 'click', buttonName, buttonLocation);
};

// 모달 열기 이벤트 추적
export const trackModalOpen = (modalName) => {
  trackEvent('modal_open', 'engagement', 'open', modalName);
};

// 모달 닫기 이벤트 추적
export const trackModalClose = (modalName) => {
  trackEvent('modal_close', 'engagement', 'close', modalName);
};

// 폼 제출 이벤트 추적
export const trackFormSubmit = (formName) => {
  trackEvent('form_submit', 'engagement', 'submit', formName);
};

// 외부 링크 클릭 이벤트 추적
export const trackExternalLink = (linkUrl, linkText) => {
  trackEvent('external_link_click', 'engagement', 'click', linkText, linkUrl);
};

// 스크롤 깊이 이벤트 추적
export const trackScrollDepth = (scrollPercentage) => {
  trackEvent('scroll_depth', 'engagement', 'scroll', `${scrollPercentage}%`);
};

// 사용자 정의 이벤트 전송
export const trackCustomEvent = (eventName, customParameters = {}) => {
  pushToDataLayer({
    event: eventName,
    ...customParameters
  });
};

// GTM 초기화 확인
export const initializeGTM = () => {
  if (isDataLayerAvailable()) {
    console.log('Google Tag Manager가 성공적으로 로드되었습니다.');
    return true;
  } else {
    console.warn('Google Tag Manager가 로드되지 않았습니다.');
    return false;
  }
}; 