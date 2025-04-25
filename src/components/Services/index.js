import React from 'react';
// import useResponsive from '../../shared/hooks/useResponsive'; // 기존 default import 주석 처리
import { useResponsive } from '../../shared/hooks/useResponsive'; // named import로 변경
import MobileServices from './MobileServices';
import DesktopServices from './DesktopServices';

const Services = ({ onContactClick }) => {
  // const { isMobile } = useResponsive(); // 기존 방식 주석 처리 (오류 가능성 있는 코드)
  const { isMobile } = useResponsive(); // 객체 구조 분해 할당 사용 확인 (이 부분은 이전 수정에서 올바르게 적용된 것 같으나, import문과 함께 확실히 수정)
  
  return isMobile ? (
    <MobileServices onContactClick={onContactClick} />
  ) : (
    <DesktopServices onContactClick={onContactClick} />
  );
};

export default Services; 