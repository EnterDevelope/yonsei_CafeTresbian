import React from 'react';
import { useResponsive } from '../../shared/hooks/useResponsive';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

const Header = ({ onContactClick }) => {
  const { isMobile } = useResponsive();
  
  return isMobile ? (
    <MobileHeader onContactClick={onContactClick} />
  ) : (
    <DesktopHeader onContactClick={onContactClick} />
  );
};

export default Header; 