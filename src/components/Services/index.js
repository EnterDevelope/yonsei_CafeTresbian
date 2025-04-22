import React from 'react';
import { useResponsive } from '../../shared/hooks/useResponsive';
import MobileServices from './MobileServices';
import DesktopServices from './DesktopServices';

const Services = () => {
  const { isMobile } = useResponsive();
  
  return isMobile ? <MobileServices /> : <DesktopServices />;
};

export default Services; 