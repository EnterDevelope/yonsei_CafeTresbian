# 연세대학교 카페 트레비앙 웹사이트 인수인계 문서

## 📋 목차

1. [프로젝트 개요](#프로젝트-개요)
2. [기술 스택](#기술-스택)
3. [프로젝트 구조](#프로젝트-구조)
4. [설치 및 실행](#설치-및-실행)
5. [주요 기능](#주요-기능)
6. [컴포넌트 상세 설명](#컴포넌트-상세-설명)
7. [스타일링 가이드](#스타일링-가이드)
8. [라우팅 구조](#라우팅-구조)
9. [GTM/GA4 설정](#gtmga4-설정)
10. [배포 가이드](#배포-가이드)
11. [개발 가이드라인](#개발-가이드라인)
12. [주요 파일 설명](#주요-파일-설명)
13. [문제 해결 가이드](#문제-해결-가이드)

---

## 프로젝트 개요

### 프로젝트 목적

연세대학교 학생회관 1층에 위치한 카페 트레비앙의 공식 웹사이트입니다. 카페 정보, 메뉴, 케이터링 서비스, To-go Bag 서비스 등을 소개하고 고객 문의를 받는 웹사이트입니다.

### 주요 목표

- 카페 방문자들에게 메뉴, 운영시간, 위치 등 필수 정보 제공
- 온라인 존재감을 통한 고객 접근성 향상
- 케이터링 및 포장 신청
- GA4를 통한 사용자 행동 분석으로 서비스 개선
- 반응형 디자인으로 모바일/데스크톱 환경 모두 지원

### 배포 정보

- **배포 URL**: https://enterdevelope.github.io/yonsei_CafeTresbian/
- **배포 플랫폼**: GitHub Pages
- **저장소**: https://github.com/enterdevelope/yonsei_CafeTresbian --> 연세 생협 github 계정은 Collaborator로 지정되어있습니다. 필요 시 fork하고 netlify로 배포 권장.

---

## 기술 스택

### 핵심 기술

- **React**: 18.3.1
- **React DOM**: 18.3.1
- **React Router DOM**: 6.22.3 (SPA 라우팅)
- **React Scripts**: 5.0.1 (CRA 기반)

### 스타일링

- **Tailwind CSS**: 3.4.17 (유틸리티 기반 CSS 프레임워크)
- **CSS Modules**: 일부 컴포넌트에서 사용
- **PostCSS**: 8.5.3
- **Autoprefixer**: 10.4.21

### 분석 도구

- **Google Tag Manager (GTM)**: GTM-5BR82T2T
- **Google Analytics 4 (GA4)**: GTM을 통한 연동

### 빌드 및 배포

- **gh-pages**: 6.3.0 (GitHub Pages 배포)
- **Web Vitals**: 4.2.4 (성능 측정)

### 개발 환경

- **Node.js**: 16.0.0 이상 권장
- **npm**: 8.0.0 이상 권장

---

## 프로젝트 구조

```
yonsei_CafeTresbian/
├── public/                          # 정적 파일
│   ├── index.html                  # HTML 템플릿 (GTM 스크립트 포함)
│   ├── cafe_image.png              # 카페 내부 이미지
│   ├── cafe_logo.png               # 카페 로고
│   ├── catering.png                # 케이터링 서비스 이미지
│   ├── company_logo.png            # 회사 로고
│   ├── hero_back_image.png         # 히어로 섹션 배경 이미지
│   ├── togo.png                    # To-go 서비스 이미지
│   └── files/
│       └── catering_order.xlsx     # 케이터링 신청 양식
│
├── src/
│   ├── App.js                      # 메인 앱 컴포넌트 (라우팅 포함)
│   ├── App.css                     # 앱 전역 스타일
│   ├── index.js                    # React 진입점
│   ├── global.css                  # 전역 CSS (Tailwind 포함)
│   ├── index.css                   # 추가 전역 스타일
│   │
│   ├── components/                 # 컴포넌트 디렉토리
│   │   ├── Header/                 # 헤더 컴포넌트
│   │   │   ├── index.js            # 헤더 래퍼 (반응형 분기)
│   │   │   ├── DesktopHeader/      # 데스크톱 헤더
│   │   │   │   ├── index.js
│   │   │   │   └── styles.module.css
│   │   │   └── MobileHeader/       # 모바일 헤더
│   │   │       ├── index.js
│   │   │       └── styles.module.css
│   │   │
│   │   ├── Hero/                   # 히어로 섹션
│   │   │   ├── index.js            # 히어로 래퍼
│   │   │   ├── HeroBubbles.js      # 히어로 애니메이션 버블
│   │   │   ├── DesktopHero/
│   │   │   │   ├── index.js
│   │   │   │   └── styles.module.css
│   │   │   └── MobileHero/
│   │   │       ├── index.js
│   │   │       └── styles.module.css
│   │   │
│   │   ├── Services/               # 서비스 섹션
│   │   │   ├── index.js            # 서비스 래퍼
│   │   │   ├── DesktopServices/
│   │   │   │   ├── index.js
│   │   │   │   └── styles.module.css
│   │   │   └── MobileServices/
│   │   │       ├── index.js
│   │   │       └── styles.module.css
│   │   │
│   │   ├── Menu/                   # 메뉴 섹션 (현재 오버레이로만 사용)
│   │   │   ├── index.js
│   │   │   ├── menuData.js         # 메뉴 데이터
│   │   │   ├── DesktopMenu/
│   │   │   │   ├── index.js
│   │   │   │   └── styles.module.css
│   │   │   └── MobileMenu/
│   │   │       ├── index.js
│   │   │       └── styles.module.css
│   │   │
│   │   ├── Contact/                # 연락처 섹션 (현재 미사용)
│   │   │   ├── index.js
│   │   │   ├── DesktopContact/
│   │   │   │   ├── index.js
│   │   │   │   └── styles.module.css
│   │   │   └── MobileContact/
│   │   │       ├── index.js
│   │   │       └── styles.module.css
│   │   │
│   │   ├── Footer/                  # 푸터 컴포넌트
│   │   │   ├── index.js            # 푸터 래퍼
│   │   │   ├── DesktopFooter/
│   │   │   │   ├── index.js
│   │   │   │   └── styles.module.css
│   │   │   └── MobileFooter/
│   │   │       ├── index.js
│   │   │       └── styles.module.css
│   │   │
│   │   ├── FloatingCTA/            # 플로팅 문의 버튼 (모바일 전용)
│   │   │   ├── index.js
│   │   │   └── styles.module.css
│   │   │
│   │   └── modal/                  # 모달 컴포넌트
│   │       ├── BaseModal.js        # 기본 모달 (재사용 가능)
│   │       ├── CafeContactModal.js # 카페 문의 모달
│   │       ├── CateringEstimateModal.js # 케이터링 견적 모달
│   │       ├── MenuOverlay.js      # 메뉴 오버레이
│   │       ├── TogobagModal.js     # To-go Bag 모달
│   │       ├── modalClassNames.js   # 모달 클래스명 상수
│   │       ├── Modal.module.css    # 모달 스타일
│   │       └── MenuOverlay.module.css
│   │
│   ├── shared/                     # 공유 유틸리티 및 훅
│   │   ├── hooks/
│   │   │   ├── useResponsive.js    # 반응형 감지 훅
│   │   │   └── useGTM.js           # GTM 페이지뷰 추적 훅
│   │   └── utils/
│   │       └── gtm.js              # GTM 이벤트 추적 유틸리티
│   │
│   └── assets/                     # 에셋 파일
│       ├── images/                 # 이미지 파일들
│       └── files/                  # 기타 파일들
│
├── build/                          # 빌드 결과물 (배포용)
├── node_modules/                   # 의존성 패키지
├── package.json                    # 프로젝트 설정 및 의존성
├── package-lock.json               # 의존성 잠금 파일
├── tailwind.config.js             # Tailwind CSS 설정
├── postcss.config.js               # PostCSS 설정
├── README.md                       # 기본 README
├── GTM_SETUP.md                    # GTM 설정 가이드
└── PROJECT_HANDOVER.md            # 이 인수인계 문서
```

---

## 설치 및 실행

### 필수 요구사항

- Node.js 16.0.0 이상
- npm 8.0.0 이상 (또는 yarn)

### 설치 단계

1. **저장소 클론**

```bash
git clone https://github.com/enterdevelope/yonsei_CafeTresbian.git
cd yonsei_CafeTresbian
```

2. **의존성 설치**

```bash
npm install
# 또는
yarn install
```

3. **개발 서버 실행**

```bash
npm start
# 또는
yarn start
```

개발 서버는 기본적으로 `http://localhost:3000`에서 실행됩니다.

4. **프로덕션 빌드**

```bash
npm run build
# 또는
yarn build
```

빌드 결과물은 `build/` 디렉토리에 생성됩니다.

5. **로컬에서 빌드 결과 확인**

```bash
# build 디렉토리를 서빙하는 방법
npx serve -s build
```

### 주요 스크립트

| 스크립트            | 설명                       |
| ------------------- | -------------------------- |
| `npm start`         | 개발 서버 실행 (포트 3000) |
| `npm run build`     | 프로덕션 빌드 생성         |
| `npm test`          | 테스트 실행                |
| `npm run predeploy` | 배포 전 빌드 실행          |
| `npm run deploy`    | GitHub Pages에 배포        |

---

## 주요 기능

### 1. 반응형 디자인

- **모바일**: 768px 이하에서 모바일 전용 컴포넌트 표시
- **데스크톱**: 768px 초과에서 데스크톱 전용 컴포넌트 표시
- `useResponsive` 훅을 통한 자동 감지

### 2. 라우팅

- React Router를 사용한 SPA 라우팅
- 주요 페이지:
  - `/` - 홈페이지 (히어로 + 서비스 섹션)
  - `/menu` - 메뉴 페이지 (현재 빈 페이지)
  - `/services` - 서비스 페이지
  - `/about` - 소개 페이지

### 3. 모달 시스템

- **카페 문의 모달**: 일반 문의 (전화, 이메일)
- **케이터링 견적 모달**: 케이터링 신청 양식 다운로드 및 문의
- **메뉴 오버레이**: 메뉴 정보 표시
- BaseModal을 통한 재사용 가능한 모달 구조

### 4. GTM/GA4 통합

- 페이지뷰 자동 추적
- 버튼 클릭 이벤트 추적
- 모달 열기/닫기 이벤트 추적
- 폼 제출 이벤트 추적

### 5. 플로팅 CTA

- 모바일에서만 표시되는 플로팅 문의 버튼
- 화면 하단 고정

---

## 컴포넌트 상세 설명

### Header 컴포넌트

**위치**: `src/components/Header/`

**역할**:

- 네비게이션 바 제공
- 로고, 메뉴 버튼, 문의 버튼 포함
- 모바일/데스크톱 버전 분리

**Props**:

- `onContactClick`: 문의 버튼 클릭 핸들러
- `onMenuClick`: 메뉴 버튼 클릭 핸들러

**사용 예시**:

```javascript
<Header
  onContactClick={openCafeContactModal}
  onMenuClick={() => setIsMenuOverlayOpen(true)}
/>
```

### Hero 컴포넌트

**위치**: `src/components/Hero/`

**역할**:

- 메인 히어로 섹션 표시
- 카페 소개 및 주요 메시지
- 애니메이션 버블 효과 (HeroBubbles)

**특징**:

- 배경 이미지 사용
- 반응형 레이아웃

### Services 컴포넌트

**위치**: `src/components/Services/`

**역할**:

- 케이터링 서비스 소개
- To-go Bag 서비스 소개
- 각 서비스별 CTA 버튼

**데이터 구조**:

```javascript
const serviceCards = [
  {
    id: 'catering-service-card',
    badge: 'Full Catering',
    icon: '🥐',
    title: '케이터링 서비스',
    description: '...',
    highlights: [...],
    image: '...',
    ctaLabel: '케이터링 견적받기',
    eventName: 'catering_estimate_click',
    action: 'contact',
    meta: '...',
  },
  // ...
];
```

### Footer 컴포넌트

**위치**: `src/components/Footer/`

**역할**:

- 푸터 정보 표시
- 연락처 정보
- 저작권 정보

### Modal 컴포넌트들

#### BaseModal

**위치**: `src/components/modal/BaseModal.js`

**역할**:

- 모든 모달의 기본 구조 제공
- ESC 키로 닫기
- 배경 클릭으로 닫기
- 페이드 인/아웃 애니메이션

**Props**:

- `isOpen`: 모달 열림 상태
- `onClose`: 닫기 핸들러
- `children`: 모달 내용
- `className`: 추가 클래스명

#### CafeContactModal

**위치**: `src/components/modal/CafeContactModal.js`

**역할**:

- 카페 일반 문의 모달
- 전화번호: 02-2123-6933
- 이메일: yscoop01@yonsei.ac.kr

#### CateringEstimateModal

**위치**: `src/components/modal/CateringEstimateModal.js`

**역할**:

- 케이터링 견적 문의 모달
- 케이터링 신청 양식 다운로드 기능
- 전화번호: 02-2123-4025 (케이터링 전용)
- 이메일: yscoop01@yonsei.ac.kr

### MenuOverlay

**위치**: `src/components/modal/MenuOverlay.js`

**역할**:

- 메뉴 정보를 오버레이 형태로 표시
- 메뉴 데이터는 `Menu/menuData.js`에서 가져옴

### FloatingCTA

**위치**: `src/components/FloatingCTA/`

**역할**:

- 모바일에서만 표시되는 플로팅 문의 버튼
- 화면 하단 고정
- 문의 모달 열기 기능

---

## 스타일링 가이드

### Tailwind CSS 사용

이 프로젝트는 주로 Tailwind CSS를 사용합니다.

**설정 파일**: `tailwind.config.js`

**주요 커스텀 설정**:

#### 브랜드 컬러

```javascript
brand: {
  blue: '#0123B4',        // 메인 블루
  blueLight: '#E8EDFF',  // 연한 블루
  blueDark: '#001A80',   // 진한 블루
  indigo: '#4263EB',
  purple: '#7048E8',
}
```

#### 슬레이트 컬러

```javascript
slate: {
  25: '#f8fafc',  // 배경색
  950: '#0f172a', // 텍스트 색상
}
```

#### 폰트

- **기본 폰트**: Pretendard (Google Fonts에서 로드)
- **폴백**: Inter, Helvetica, system-ui, sans-serif

#### 커스텀 애니메이션

- `fadeIn` / `fadeOut`: 페이드 인/아웃
- `modalContentFadeIn` / `modalContentFadeOut`: 모달 콘텐츠 애니메이션
- `bubbleFloat` / `bubbleFloatAlt`: 버블 플로팅 애니메이션
- `pulseRing`: 펄스 링 애니메이션

#### 커스텀 그림자

- `card`: 카드 그림자
- `floating`: 플로팅 요소 그림자

### CSS Modules 사용

일부 컴포넌트는 CSS Modules를 사용합니다:

- Header (Desktop/Mobile)
- Hero (Desktop/Mobile)
- Services (Desktop/Mobile)
- Footer (Desktop/Mobile)
- Menu (Desktop/Mobile)
- Contact (Desktop/Mobile)
- FloatingCTA

**사용 예시**:

```javascript
import styles from "./styles.module.css";

<div className={styles.container}>{/* ... */}</div>;
```

### 전역 스타일

**파일**: `src/global.css`

- Tailwind CSS 디렉티브
- Pretendard 폰트 임포트
- 기본 리셋 스타일
- 스크롤바 커스터마이징

---

## 라우팅 구조

### 라우터 설정

**파일**: `src/App.js`

```javascript
<BrowserRouter basename="/yonsei_CafeTresbian">
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/menu" element={<MenuPage />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
```

### 주요 라우트

#### `/` (홈페이지)

- Hero 섹션
- Services 섹션
- Footer

#### `/menu` (메뉴 페이지)

- 현재 빈 페이지 (메뉴는 오버레이로만 표시)

#### `/services` (서비스 페이지)

- Services 컴포넌트만 표시

#### `/about` (소개 페이지)

- 카페 소개 정보
- 연락처 및 위치 정보
- 인라인 컴포넌트로 구현

### basename 설정

GitHub Pages 배포를 위해 `basename="/yonsei_CafeTresbian"`이 설정되어 있습니다.
로컬 개발 시에는 이 basename이 적용되지 않습니다.

---

## GTM/GA4 설정

### GTM 컨테이너 ID

- **ID**: GTM-5BR82T2T
- **위치**: `public/index.html`

### 구현된 기능

#### 1. 페이지뷰 추적

- React Router 페이지 변경 시 자동 추적
- `useGTM` 훅 사용

**위치**: `src/shared/hooks/useGTM.js`

```javascript
useGTM(); // App.js에서 호출
```

#### 2. 이벤트 추적 유틸리티

**위치**: `src/shared/utils/gtm.js`

**주요 함수**:

- `trackPageView(pagePath, pageTitle)`: 페이지뷰 추적
- `trackButtonClick(buttonName, buttonLocation)`: 버튼 클릭 추적
- `trackModalOpen(modalName)`: 모달 열기 추적
- `trackModalClose(modalName)`: 모달 닫기 추적
- `trackFormSubmit(formName)`: 폼 제출 추적
- `trackExternalLink(linkUrl, linkText)`: 외부 링크 클릭 추적
- `trackScrollDepth(scrollPercentage)`: 스크롤 깊이 추적
- `trackCustomEvent(eventName, customParameters)`: 커스텀 이벤트

**사용 예시**:

```javascript
import { trackButtonClick } from "./shared/utils/gtm";

const handleClick = () => {
  trackButtonClick("contact_button", "header");
};
```

### 추적되는 이벤트 목록

#### 페이지뷰

- `page_view`: 모든 페이지 변경 시

#### 버튼 클릭

- `button_click`: 모든 버튼 클릭
  - `nav_services`: 서비스 페이지 네비게이션
  - `nav_about`: 소개 페이지 네비게이션
  - `menu_button`: 메뉴 버튼 클릭
  - `contact_button`: 문의 버튼 클릭
  - `floating_contact_button`: 플로팅 문의 버튼
  - `phone_call`: 전화번호 클릭
  - `email_contact`: 이메일 클릭
  - `download_catering_form`: 케이터링 양식 다운로드

#### 모달 이벤트

- `modal_open`: 모달 열기
  - `cafe_contact_modal`: 카페 문의 모달
  - `catering_estimate_modal`: 케이터링 견적 모달
- `modal_close`: 모달 닫기

### GTM 설정 가이드

자세한 GTM 설정 방법은 `GTM_SETUP.md` 파일을 참고하세요.

---

## 배포 가이드

### GitHub Pages 배포

#### 1. 배포 전 확인사항

- `package.json`의 `homepage` 필드 확인
- GTM 컨테이너 ID 확인
- 빌드 테스트

#### 2. 배포 명령어

```bash
npm run deploy
```

이 명령어는 다음을 수행합니다:

1. `npm run predeploy` 실행 (빌드 생성)
2. `gh-pages`를 통해 `build/` 디렉토리를 `gh-pages` 브랜치에 배포

#### 3. 배포 후 확인

- 배포 URL 접속: https://enterdevelope.github.io/yonsei_CafeTresbian/
- GTM 로드 확인
- 라우팅 동작 확인
- 모바일/데스크톱 반응형 확인

### 수동 배포

```bash
# 1. 빌드 생성
npm run build

# 2. gh-pages 배포
npx gh-pages -d build
```

### 배포 주의사항

1. **basename 설정**: `App.js`에서 `basename="/yonsei_CafeTresbian"` 확인
2. **public URL**: 이미지 경로는 `process.env.PUBLIC_URL` 사용
3. **캐시 문제**: 배포 후 브라우저 캐시 클리어 필요할 수 있음

---

## 개발 가이드라인

### 컴포넌트 구조 규칙

#### 1. 반응형 컴포넌트 패턴

각 컴포넌트는 모바일/데스크톱 버전을 분리합니다:

```
ComponentName/
├── index.js              # 래퍼 컴포넌트 (반응형 분기)
├── DesktopComponent/
│   ├── index.js
│   └── styles.module.css
└── MobileComponent/
    ├── index.js
    └── styles.module.css
```

**예시**:

```javascript
// ComponentName/index.js
import { useResponsive } from "../../shared/hooks/useResponsive";
import DesktopComponent from "./DesktopComponent";
import MobileComponent from "./MobileComponent";

const ComponentName = ({ ...props }) => {
  const { isMobile } = useResponsive();
  return isMobile ? (
    <MobileComponent {...props} />
  ) : (
    <DesktopComponent {...props} />
  );
};

export default ComponentName;
```

#### 2. 이벤트 핸들러 네이밍

- `handle` 접두사 사용
- 예: `handleClick`, `handleSubmit`, `handleClose`

#### 3. 함수 선언 방식

- `const` 사용 (화살표 함수)
- 예: `const handleClick = () => { ... }`

#### 4. Props 타입

- 현재 TypeScript 미사용, 하지만 명확한 Props 구조 유지

### 스타일링 규칙

#### 1. Tailwind CSS 우선 사용

- 가능한 한 Tailwind 유틸리티 클래스 사용
- 커스텀 스타일이 필요한 경우에만 CSS Modules 사용

#### 2. 클래스명 순서

- 레이아웃 → 스타일 → 상태 순서로 정렬
- 예: `flex items-center justify-between rounded-2xl bg-white px-4 py-3`

#### 3. 반응형 클래스

- 모바일 우선 접근 방식
- `lg:`, `md:` 등의 브레이크포인트 사용

### 코드 품질

#### 1. Early Return

- 조건부 렌더링 시 early return 사용

#### 2. DRY 원칙

- 반복되는 코드는 함수/컴포넌트로 추출

#### 3. 명확한 변수명

- 의미 있는 변수명 사용
- 축약어 지양

### GTM 이벤트 추적

#### 1. 모든 상호작용 추적

- 버튼 클릭
- 모달 열기/닫기
- 폼 제출
- 외부 링크 클릭

#### 2. 이벤트 네이밍 규칙

- 소문자와 언더스코어 사용
- 예: `button_click`, `modal_open`

---

## 주요 파일 설명

### src/App.js

**역할**: 메인 앱 컴포넌트

- React Router 설정
- 라우트 정의
- 모달 상태 관리
- GTM 초기화

**주요 상태**:

- `isMenuOverlayOpen`: 메뉴 오버레이 열림 상태
- `isCafeContactModalOpen`: 카페 문의 모달 열림 상태
- `isCateringEstimateModalOpen`: 케이터링 견적 모달 열림 상태

### src/index.js

**역할**: React 앱 진입점

- ReactDOM 렌더링
- 전역 CSS 임포트
- StrictMode 활성화

### src/shared/hooks/useResponsive.js

**역할**: 반응형 감지 훅

- 화면 너비 768px 기준으로 모바일/데스크톱 구분
- 리사이즈 이벤트 리스너 관리

**반환값**:

```javascript
{
  isMobile: boolean;
}
```

### src/shared/hooks/useGTM.js

**역할**: GTM 페이지뷰 추적 훅

- React Router의 location 변경 감지
- 페이지뷰 이벤트 자동 전송

### src/shared/utils/gtm.js

**역할**: GTM 이벤트 추적 유틸리티

- dataLayer를 통한 이벤트 전송
- 다양한 이벤트 타입 지원

### tailwind.config.js

**역할**: Tailwind CSS 설정

- 커스텀 컬러, 폰트, 애니메이션 정의
- 컨텐츠 경로 설정

### public/index.html

**역할**: HTML 템플릿

- GTM 스크립트 포함
- 메타 태그 설정
- 기본 경로 설정 (`<base href="/yonsei_CafeTresbian/" />`)

### package.json

**역할**: 프로젝트 설정

- 의존성 관리
- 스크립트 정의
- 배포 설정

---

## 문제 해결 가이드

### 일반적인 문제

#### 1. 개발 서버가 시작되지 않음

**증상**: `npm start` 실행 시 오류

**해결 방법**:

```bash
# node_modules 삭제 후 재설치
rm -rf node_modules package-lock.json
npm install
npm start
```

#### 2. 빌드 실패

**증상**: `npm run build` 실행 시 오류

**해결 방법**:

- 콘솔 오류 메시지 확인
- 의존성 버전 확인
- `node_modules` 재설치

#### 3. 라우팅이 작동하지 않음 (GitHub Pages)

**증상**: 새로고침 시 404 오류

**원인**: GitHub Pages는 SPA를 기본적으로 지원하지 않음

**해결 방법**:

- `basename` 설정 확인 (`App.js`)
- `public/index.html`의 `<base>` 태그 확인
- GitHub Pages 설정에서 404 페이지를 `index.html`로 리다이렉트 설정

#### 4. 이미지가 표시되지 않음

**증상**: 이미지가 로드되지 않음

**해결 방법**:

- `process.env.PUBLIC_URL` 사용 확인
- 이미지 경로 확인 (`public/` 또는 `src/assets/`)
- 빌드 후 `build/` 디렉토리에서 이미지 존재 확인

#### 5. GTM 이벤트가 전송되지 않음

**증상**: GA4에서 이벤트가 보이지 않음

**해결 방법**:

1. 브라우저 콘솔에서 `window.dataLayer` 확인
2. GTM 컨테이너 ID 확인 (`GTM-5BR82T2T`)
3. GTM 디버그 모드 활성화
4. 네트워크 탭에서 GTM 요청 확인

#### 6. 모달이 열리지 않음

**증상**: 모달 클릭 시 아무 반응 없음

**해결 방법**:

- `isOpen` prop 확인
- `onClose` 핸들러 확인
- BaseModal의 조건부 렌더링 확인

#### 7. 반응형이 작동하지 않음

**증상**: 모바일/데스크톱 전환이 안 됨

**해결 방법**:

- `useResponsive` 훅이 제대로 호출되는지 확인
- 브라우저 개발자 도구에서 화면 크기 확인
- 리사이즈 이벤트 리스너 확인

### 성능 최적화

#### 1. 이미지 최적화

- 이미지 크기 최적화
- WebP 형식 사용 고려
- Lazy loading 적용 고려

#### 2. 번들 크기 최적화

- 불필요한 의존성 제거
- 코드 스플리팅 고려
- Tree shaking 확인

#### 3. 빌드 최적화

- `npm run build` 후 빌드 크기 확인
- Source map 생성 여부 확인

### 보안 고려사항

#### 1. 환경 변수

- 민감한 정보는 환경 변수로 관리
- `.env` 파일은 `.gitignore`에 추가

#### 2. 의존성 보안

- 정기적으로 `npm audit` 실행
- 취약점 발견 시 업데이트

---

## 추가 정보

### 연락처 정보

#### 카페 일반 문의

- **전화**: 02-2123-6933
- **이메일**: yscoop01@yonsei.ac.kr

#### 케이터링 문의

- **전화**: 02-2123-4025
- **이메일**: yscoop01@yonsei.ac.kr

#### 위치

- 연세대학교 학생회관 1층 등등 많음.

### 향후 개선 사항

1. **TypeScript 도입**: 타입 안정성 향상
2. **테스트 코드 작성**: Jest, React Testing Library 사용
3. **성능 최적화**: 이미지 최적화, 코드 스플리팅
4. **고객 경험 및 관리자 모드"**: 케이터링 신청 액셀 다운로드 후 메일을 해야하는 복잡한 신청 방식을 웹 내에서 심리스하게 처리하는 방식으로 개선. 이를 위해선 관리자가 웹 내에서 모든 신청 데이터를 손쉽게 확인할 수 있는 장치도 필요.

### 유용한 리소스

- **React 공식 문서**: https://react.dev/
- **React Router 문서**: https://reactrouter.com/
- **Tailwind CSS 문서**: https://tailwindcss.com/
- **GTM 문서**: https://developers.google.com/tag-manager
- **GA4 문서**: https://developers.google.com/analytics/devguides/collection/ga4

---

## 문서 버전 정보

- **작성일**: 2025년
- **작성자**: 김우현
- **최종 수정일**: 2025년 12월
- **문서 버전**: 1.1.0

---

**이 문서는 프로젝트 인수인계를 위해 작성되었습니다. 추가 질문이나 수정 사항이 있으면 이슈를 생성하거나 문서를 업데이트해 주세요.**
