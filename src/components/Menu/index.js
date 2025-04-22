import React from 'react';
import { useResponsive } from '../../shared/hooks/useResponsive';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';

const Menu = () => {
  const { isMobile } = useResponsive();
  
  return isMobile ? <MobileMenu /> : <DesktopMenu />;
};

export default Menu; 