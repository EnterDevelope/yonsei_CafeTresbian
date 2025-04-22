import React from 'react';
import { useResponsive } from '../../shared/hooks/useResponsive';
import MobileHero from './MobileHero';
import DesktopHero from './DesktopHero';

const Hero = ({ onContactClick }) => {
  const { isMobile } = useResponsive();
  
  return isMobile ? (
    <MobileHero onContactClick={onContactClick} />
  ) : (
    <DesktopHero onContactClick={onContactClick} />
  );
};

export default Hero; 