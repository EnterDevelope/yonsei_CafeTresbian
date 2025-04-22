import React from 'react';
import { useResponsive } from '../../shared/hooks/useResponsive';
import MobileFooter from './MobileFooter';
import DesktopFooter from './DesktopFooter';

const Footer = () => {
  const { isMobile } = useResponsive();

  return isMobile ? <MobileFooter /> : <DesktopFooter />;
};

export default Footer; 