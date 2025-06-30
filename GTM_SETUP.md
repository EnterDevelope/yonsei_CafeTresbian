# Google Tag Manager (GTM) 설정 가이드

## 개요

이 프로젝트는 Google Tag Manager를 통해 Google Analytics 4 (GA4)를 사용하여 사용자 행동을 추적합니다.

## 구현된 기능

### 1. 기본 GTM 설정

- `public/index.html`에 GTM 스크립트 추가
- 모든 페이지에서 자동으로 GTM 로드

### 2. 페이지뷰 추적

- React Router 페이지 변경 시 자동 페이지뷰 추적
- `useGTM` 훅을 통해 자동화

### 3. 사용자 상호작용 추적

- 버튼 클릭 이벤트
- 모달 열기/닫기 이벤트
- 폼 제출 이벤트
- 외부 링크 클릭 이벤트
- 스크롤 깊이 추적

## 추적되는 이벤트 목록

### 페이지뷰 이벤트

- `page_view`: 모든 페이지 변경 시 자동 추적

### 버튼 클릭 이벤트

- `button_click`: 모든 버튼 클릭
  - `nav_services`: 서비스 페이지 네비게이션
  - `nav_about`: 소개 페이지 네비게이션
  - `menu_button`: 메뉴 버튼 클릭
  - `contact_button`: 문의 버튼 클릭
  - `floating_contact_button`: 플로팅 문의 버튼
  - `phone_call`: 전화번호 클릭
  - `email_contact`: 이메일 클릭
  - `download_catering_form`: 케이터링 양식 다운로드

### 모달 이벤트

- `modal_open`: 모달 열기
  - `cafe_contact_modal`: 카페 문의 모달
  - `catering_estimate_modal`: 케이터링 견적 모달
- `modal_close`: 모달 닫기

## 사용법

### 1. 기본 사용법

```javascript
import { useGTM } from "./shared/hooks/useGTM";

function App() {
  useGTM(); // 페이지뷰 자동 추적
  // ...
}
```

### 2. 이벤트 추적

```javascript
import { trackButtonClick, trackModalOpen } from "./shared/utils/gtm";

// 버튼 클릭 추적
const handleClick = () => {
  trackButtonClick("button_name", "location");
};

// 모달 열기 추적
const handleModalOpen = () => {
  trackModalOpen("modal_name");
};
```

### 3. 커스텀 이벤트

```javascript
import { trackCustomEvent } from "./shared/utils/gtm";

trackCustomEvent("custom_event_name", {
  custom_parameter: "value",
  another_parameter: 123,
});
```

## GTM 태그 설정

### 1. GA4 구성 태그

GTM에서 다음 설정으로 GA4 태그를 생성하세요:

**태그 유형**: Google Analytics: GA4 이벤트
**측정 ID**: G-XXXXXXXXXX (GA4 속성 ID)
**이벤트 이름**: `page_view`
**트리거**: 모든 페이지뷰

### 2. 사용자 정의 이벤트 태그

각 사용자 정의 이벤트에 대해 별도 태그를 생성:

**태그 유형**: Google Analytics: GA4 이벤트
**측정 ID**: G-XXXXXXXXXX
**이벤트 이름**: `button_click` (또는 해당 이벤트명)
**트리거**: 사용자 정의 이벤트 - 이벤트 이름: `button_click`

### 3. 변수 설정

다음 변수들을 GTM에서 설정하세요:

- `event_category`: 이벤트 카테고리
- `event_action`: 이벤트 액션
- `event_label`: 이벤트 라벨
- `event_value`: 이벤트 값

## 개발 환경에서 확인

개발 환경에서는 브라우저 콘솔에서 GTM 이벤트를 확인할 수 있습니다:

```javascript
// dataLayer 확인
console.log(window.dataLayer);

// 특정 이벤트 확인
window.dataLayer.push({
  event: "test_event",
  test_parameter: "test_value",
});
```

## 배포 시 주의사항

1. GTM 컨테이너 ID가 올바른지 확인 (`GTM-5BR82T2T`)
2. GA4 속성이 올바르게 연결되었는지 확인
3. 프로덕션 환경에서 이벤트가 정상적으로 전송되는지 확인

## 문제 해결

### GTM이 로드되지 않는 경우

1. 네트워크 연결 확인
2. GTM 컨테이너 ID 확인
3. 브라우저 개발자 도구에서 오류 확인

### 이벤트가 전송되지 않는 경우

1. GTM 디버그 모드 활성화
2. dataLayer 확인: `console.log(window.dataLayer)`
3. GTM 태그 및 트리거 설정 확인

## 추가 설정

### 스크롤 깊이 추적

스크롤 깊이 추적을 활성화하려면:

```javascript
import { trackScrollDepth } from "./shared/utils/gtm";

// 스크롤 이벤트 리스너 추가
window.addEventListener("scroll", () => {
  const scrollPercentage = Math.round(
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
      100
  );

  if (scrollPercentage % 25 === 0) {
    // 25%, 50%, 75%, 100%에서만 추적
    trackScrollDepth(scrollPercentage);
  }
});
```

### 외부 링크 추적

외부 링크 클릭을 자동으로 추적하려면:

```javascript
document.addEventListener("click", (e) => {
  if (
    e.target.tagName === "A" &&
    e.target.hostname !== window.location.hostname
  ) {
    trackExternalLink(e.target.href, e.target.textContent);
  }
});
```
