# Project Life-Circle: Development Specification

## 1. Project Overview
* [cite_start]**Project Name:** Life-Circle (라이프 서클) [cite: 2]
* [cite_start]**Concept:** "생애 주기(Life Cycle)"와 유사한 발음으로, 단순 지식 공유를 넘어 삶의 '경험'을 공유하는 플랫폼입니다. [cite: 3, 25]
* [cite_start]**Core Value:** 2030 세대의 진로 및 인생 고민 해결을 위해 경험(Graph)과 그 과정(Circle)을 시각화하여 공유합니다. [cite: 27, 28]
* [cite_start]**Development Status (As-Is):** UI 구성, 로그인, 그래프 등록/검색/조회 구현 완료. [cite: 33]
* [cite_start]**Development Plan (To-Be):** 서버 구현 및 연동, 회원가입/마이페이지, 그래프 수정/찜하기 기능 추가, 아키텍처 리팩토링 진행 예정. [cite: 34-36]

---

## 2. Tech Stack & Environment
### Client Side
* [cite_start]**Framework:** React (CSR, Mobile View optimized) [cite: 317, 332]
* [cite_start]**Role:** UI/UX 담당, 사용자 입력 처리, 서버와 REST API 통신 [cite: 211, 218]

### Server Side
* [cite_start]**Framework:** Spring Boot [cite: 212, 333]
* [cite_start]**Role:** 인증, 비즈니스 로직(CRUD), 데이터 유효성 검증 [cite: 212, 223]

### Database & External Services
* [cite_start]**Database:** Firebase (Real-time DB, Data Persistence) [cite: 213, 311]
* [cite_start]**Authentication:** Kakao OAuth API (Login/Signup) [cite: 214, 247]

---

## 3. System Architecture
[cite_start]본 프로젝트는 **Client-Server** 구조를 기반으로 **Layered**, **Hexagonal**, **Event-driven** 아키텍처 스타일을 혼합하여 적용했습니다. [cite: 281]

### 3.1 Architecture Styles
1.  **Client-Server:** React(Client)와 Spring Boot(Server)로 역할 분리. [cite_start]Firebase는 서버의 Repository 계층을 통해서만 접근합니다. [cite: 211-213]
2.  **Layered Architecture:**
    * [cite_start]**Presentation Layer (Controller):** React 요청 처리 및 Service 위임 [cite: 231-233]
    * [cite_start]**Service Layer:** 핵심 비즈니스 로직 (검증, 권한 체크) [cite: 234-236]
    * [cite_start]**Repository Layer:** Firebase CRUD 연동 (Interface 기반) [cite: 238-241]
3.  **Hexagonal Architecture (Ports & Adapters):**
    * [cite_start]**AuthService (Core):** 외부 기술(Kakao)에 의존하지 않음. [cite: 246]
    * [cite_start]**Adapter:** `KakaoOAuthAdapter`가 `OAuthProvider` 포트를 구현. [cite: 247, 248]
    * [cite_start]**Benefit:** 추후 Google/Naver 등으로 인증 수단 확장 시 Adapter만 교체하면 됨. [cite: 249]
4.  **Event-driven Architecture:**
    * [cite_start]그래프 수정/삭제 시 발생하는 부수 작업(조회수 초기화, 찜 목록 정리 등)을 비동기 이벤트로 처리하여 응답 속도(3초 이내)를 보장합니다. [cite: 254-260]

### 3.2 Design Patterns
* [cite_start]**Repository Pattern:** 도메인과 DB(Firebase) 분리, `findById`, `save` 등 일관된 인터페이스 제공. [cite: 275, 277]
* [cite_start]**Command Pattern:** `GraphService`에서 등록/수정/삭제 행동을 구조화. [cite: 298]
* [cite_start]**Strategy Pattern:** 인증 정책 분리 (AuthService). [cite: 180]
* [cite_start]**Factory Pattern:** 객체 생성 로직 캡슐화. [cite: 127]

---

## 4. Data Model (Class & Schema)

### [cite_start]User [cite: 137-146, 286]
사용자 및 관리자 계정 정보를 관리합니다.
```typescript
interface User {
  userId: string;
  nickname: string;
  age: number;
  experience: string; // 원하는 경험
  kakaoToken: string;
  role: 'User' | 'Admin';
}