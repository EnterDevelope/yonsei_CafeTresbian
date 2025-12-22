import React from 'react';
import { useResponsive } from '../../shared/hooks/useResponsive';
import MobileServices from './MobileServices';
import DesktopServices from './DesktopServices';

const serviceCards = [
  {
    id: 'catering-service-card',
    badge: 'Full Catering',
    icon: '🥐',
    title: '케이터링 서비스',
    description:
      '동아리 모임·학과 세미나·스터디 그룹 등 행사 성격에 맞춘 디저트와 음료 세트를 준비해드립니다.',
    highlights: ['규모 맞춤 메뉴 제안', '케이터링 양식 제공', '디저트, 음료 패키지'],
    image: `${process.env.PUBLIC_URL}/catering.png`,
    ctaLabel: '케이터링 견적받기',
    eventName: 'catering_estimate_click',
    action: 'contact',
    meta: '최소 2~3일 전 예약 · 학생회관 픽업',
  },
  {
    id: 'togo-service-card',
    badge: 'To-go Bag',
    icon: '👜',
    title: 'To-go Bag 서비스 (매장 문의)',
    description:
      '바쁜 학생과 교직원을 위해 간편하게 픽업할 수 있는 To-go 구성을 준비했습니다.',
    highlights: ['매장별 운영', '전날 예약 가능', '커피, 디저트 패키지'],
    image: `${process.env.PUBLIC_URL}/togo.png`,
    ctaLabel: '매장 운영 정보',
    eventName: 'store_info_click',
    action: 'togo',
    meta: '연세대 생활협동조합 매장 상담',
  },
];

const Services = ({ onContactClick }) => {
  const { isMobile } = useResponsive();

  return isMobile ? (
    <MobileServices onContactClick={onContactClick} cards={serviceCards} />
  ) : (
    <DesktopServices onContactClick={onContactClick} cards={serviceCards} />
  );
};

export default Services;
