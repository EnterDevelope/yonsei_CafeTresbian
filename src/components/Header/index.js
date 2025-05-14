import React from 'react';
import { useResponsive } from '../../shared/hooks/useResponsive';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

const Header = ({ onContactClick, onMenuClick }) => {
  const { isMobile } = useResponsive();
  return isMobile ? (
    <MobileHeader onContactClick={onContactClick} onMenuClick={onMenuClick} />
  ) : (
    <DesktopHeader onContactClick={onContactClick} onMenuClick={onMenuClick} />
  );
};

export default Header; 