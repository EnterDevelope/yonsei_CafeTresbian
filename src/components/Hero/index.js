import React from 'react';
import { useResponsive } from '../../shared/hooks/useResponsive';
import MobileHero from './MobileHero';
import DesktopHero from './DesktopHero';

const Hero = () => {
  const { isMobile } = useResponsive();

  return isMobile ? <MobileHero /> : <DesktopHero />;
};

export default Hero; 