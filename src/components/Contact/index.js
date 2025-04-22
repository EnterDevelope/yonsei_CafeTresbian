import React from 'react';
import { useResponsive } from '../../shared/hooks/useResponsive';
import MobileContact from './MobileContact';
import DesktopContact from './DesktopContact';

const Contact = ({ onContactClick }) => {
  const { isMobile } = useResponsive();
  
  return isMobile ? (
    <MobileContact onContactClick={onContactClick} />
  ) : (
    <DesktopContact onContactClick={onContactClick} />
  );
};

export default Contact; 