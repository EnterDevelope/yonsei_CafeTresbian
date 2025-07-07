# 연세대학교 카페 트레비앙 웹사이트

연세대학교 카페 트레비앙의 공식 웹사이트입니다. React를 기반으로 개발되었으며, 반응형 디자인을 통해 모바일과 데스크톱 환경 모두에서 최적화된 사용자 경험을 제공합니다.

## 프로젝트 목적

- **사용자 경험**: 카페 방문자들에게 메뉴, 운영시간, 위치 등 필수 정보를 제공
- **비즈니스 성장**: 온라인 존재감을 통해 고객 접근성 향상 및 매출 증대
- **데이터 분석**: GA4를 통한 사용자 행동 분석으로 서비스 개선
- **유지보수성**: 향후 웹사이트 유지보수, 개발, 관리, 개선을 담당할 개발자에게 필요한 정보를 구조적으로 전달

## 주요 기능

- **반응형 디자인**: 모바일과 데스크톱 환경에 최적화된 UI
- **메뉴 정보**: 카페의 다양한 메뉴와 가격 정보 제공
- **운영 정보**: 카페 운영 시간 및 위치 정보
- **연락처**: 카페 문의 및 예약 연락처
- **모던한 UI/UX**: 사용자 친화적인 인터페이스
- **GA4 추적**: Google Analytics 4를 통한 사용자 행동 분석

## 기술 스택

- **Frontend**: React 18
- **Styling**: CSS Modules
- **Deployment**: GitHub Pages
- **Analytics**: Google Analytics 4 (GTM 연동)

## 프로젝트 구조

```
src/
├── components/
│   ├── Header/          # 헤더 컴포넌트 (모바일/데스크톱)
│   ├── Hero/            # 히어로 섹션 (모바일/데스크톱)
│   ├── Menu/            # 메뉴 섹션 (모바일/데스크톱)
│   ├── Services/        # 서비스 섹션
│   ├── Contact/         # 연락처 섹션
│   └── Footer/          # 푸터 컴포넌트 (모바일/데스크톱)
├── shared/
│   └── hooks/           # 커스텀 훅
└── assets/              # 이미지 및 리소스
```

## 시작하기

### 필수 요구사항

- Node.js 16.0.0 이상
- npm 8.0.0 이상

### 설치 및 실행

1. **저장소 클론**

```bash
git clone https://github.com/enterdevelope/yonsei_CafeTresbian.git
cd yonsei_CafeTresbian
```

2. **의존성 설치**

```bash
npm install
```

3. **개발 서버 실행**

```bash
npm start
```

4. **프로덕션 빌드**

```bash
npm run build
```

5. **GitHub Pages 배포**

```bash
npm run deploy
```

## 배포

이 프로젝트는 GitHub Pages를 통해 배포됩니다.

**배포 URL**: [https://enterdevelope.github.io/yonsei_CafeTresbian/](https://enterdevelope.github.io/yonsei_CafeTresbian/)

## 분석 및 추적

- **Google Analytics 4**: 사용자 행동 분석 및 이벤트 추적
- **Google Tag Manager**: 태그 관리 및 이벤트 설정
- 주요 추적 이벤트:
  - 메뉴 클릭 (모바일/데스크톱)
  - 서비스 버튼 클릭
  - 케이터링 관련 액션
  - 헤더 네비게이션

## 개발 가이드

### 컴포넌트 구조

- 각 컴포넌트는 모바일과 데스크톱 버전을 별도로 관리
- CSS Modules를 사용하여 스타일 충돌 방지
- 반응형 디자인은 미디어 쿼리를 통해 구현

### 이벤트 추적

- GA4 이벤트는 dataLayer.push()를 통해 전송
- 각 버튼별로 고유한 이벤트명 사용
- GTM에서 이벤트 트리거 및 태그 설정 필요

### 배포 프로세스

- main 브랜치에 푸시 시 자동으로 GitHub Pages에 배포
- 빌드 전 npm run build 명령어로 프로덕션 최적화
- 배포 후 캐시 클리어가 필요할 수 있음

## 기여하기

1. 이 저장소를 포크합니다
2. 새로운 기능 브랜치를 생성합니다 (`git checkout -b feature/AmazingFeature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/AmazingFeature`)
5. Pull Request를 생성합니다

## 라이센스

이 프로젝트는 연세대학교 카페 트레비앙의 자산입니다. 모든 권리가 보유자에게 있습니다.

## 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해 주세요.

---

**연세대학교 카페 트레비앙**
