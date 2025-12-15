# Project Life-Circle: Development Specification

## 1. Project Overview

- [cite_start]**Project Name:** Life-Circle (라이프 서클) [cite: 2]
- [cite_start]**Concept:** "생애 주기(Life Cycle)"와 유사한 발음으로, 단순 지식 공유를 넘어 삶의 '경험'을 공유하는 플랫폼입니다. [cite: 3, 25]
- [cite_start]**Core Value:** 2030 세대의 진로 및 인생 고민 해결을 위해 경험(Graph)과 그 과정(Circle)을 시각화하여 공유합니다. [cite: 27, 28]
- [cite_start]**Development Status (As-Is):** UI 구성, 로그인, 그래프 등록/검색/조회 구현 완료. [cite: 33]
- [cite_start]**Development Plan (To-Be):** 서버 구현 및 연동, 회원가입/마이페이지, 그래프 수정/찜하기 기능 추가, 아키텍처 리팩토링 진행 예정. [cite: 34-36]

---

## 2. Tech Stack & Environment

### Client Side

- [cite_start]**Framework:** React (CSR, Mobile View optimized) [cite: 317, 332]
- [cite_start]**Role:** UI/UX 담당, 사용자 입력 처리, 서버와 REST API 통신 [cite: 211, 218]

### Server Side

- [cite_start]**Framework:** Spring Boot [cite: 212, 333]
- [cite_start]**Role:** 인증, 비즈니스 로직(CRUD), 데이터 유효성 검증 [cite: 212, 223]

### Database & External Services

- [cite_start]**Database:** Firebase (Real-time DB, Data Persistence) [cite: 213, 311]
- [cite_start]**Authentication:** Kakao OAuth API (Login/Signup) [cite: 214, 247]

---

## 3. System Architecture

[cite_start]본 프로젝트는 **Client-Server** 구조를 기반으로 **Layered**, **Hexagonal**, **Event-driven** 아키텍처 스타일을 혼합하여 적용했습니다. [cite: 281]

### 3.1 Architecture Styles

1.  **Client-Server:** React(Client)와 Spring Boot(Server)로 역할 분리. [cite_start]Firebase는 서버의 Repository 계층을 통해서만 접근합니다. [cite: 211-213]
2.  **Layered Architecture:**
    - [cite_start]**Presentation Layer (Controller):** React 요청 처리 및 Service 위임 [cite: 231-233]
    - [cite_start]**Service Layer:** 핵심 비즈니스 로직 (검증, 권한 체크) [cite: 234-236]
    - [cite_start]**Repository Layer:** Firebase CRUD 연동 (Interface 기반) [cite: 238-241]
3.  **Hexagonal Architecture (Ports & Adapters):**
    - [cite_start]**AuthService (Core):** 외부 기술(Kakao)에 의존하지 않음. [cite: 246]
    - [cite_start]**Adapter:** `KakaoOAuthAdapter`가 `OAuthProvider` 포트를 구현. [cite: 247, 248]
    - [cite_start]**Benefit:** 추후 Google/Naver 등으로 인증 수단 확장 시 Adapter만 교체하면 됨. [cite: 249]
4.  **Event-driven Architecture:**
    - [cite_start]그래프 수정/삭제 시 발생하는 부수 작업(조회수 초기화, 찜 목록 정리 등)을 비동기 이벤트로 처리하여 응답 속도(3초 이내)를 보장합니다. [cite: 254-260]

### 3.2 Design Patterns

- [cite_start]**Repository Pattern:** 도메인과 DB(Firebase) 분리, `findById`, `save` 등 일관된 인터페이스 제공. [cite: 275, 277]
- [cite_start]**Command Pattern:** `GraphService`에서 등록/수정/삭제 행동을 구조화. [cite: 298]
- [cite_start]**Strategy Pattern:** 인증 정책 분리 (AuthService). [cite: 180]
- [cite_start]**Factory Pattern:** 객체 생성 로직 캡슐화. [cite: 127]

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
  role: "User" | "Admin";
}
```

## 5. Service Layer Specification

시스템의 핵심 비즈니스 로직을 담당하는 Service 계층의 상세 명세입니다. 각 서비스는 **Layered Architecture**의 Service Layer에 위치하며, **GRASP**, **SOLID** 원칙을 준수하여 설계되었습니다.

### [cite_start]5.1 AuthService [cite: 152-157, 180, 293-296]

- **Role:** 사용자 및 관리자의 로그인/회원가입 인증 프로세스 제어.
- **Architecture Style:**
  - **Hexagonal Architecture (Core):** 외부 기술(Kakao API)에 직접 의존하지 않고 `TokenProvider` 인터페이스에 의존(DIP)하여 결합도를 낮춤.
  - **GRASP Controller:** 로그인 UI 요청을 받아 비즈니스 로직 흐름을 제어.
- **Design Patterns:**
  - **Strategy Pattern:** 인증 방식(Kakao, Admin 등)에 따른 전략 분리.
- **Key Methods:**
  - `loginWithKakao(token: String)`: 카카오 액세스 토큰 검증 및 로그인 처리.
  - `registerUser(userDto)`: 일반 사용자 회원가입 (닉네임, 나이, 경험 저장).
  - `loginAdmin(id, pw)`: 관리자 자체 로그인 인증.
  - `validateToken()`: JWT 등 토큰 유효성 검사.
- **Quality Attributes (NFR):**
  - **Security:** 개인정보 보호 및 토큰 검증 로직의 무결성 보장.
  - **Flexibility:** `OAuthAdapter` 교체를 통해 다른 소셜 로그인(Google, Naver)으로 확장 용이.

### [cite_start]5.2 GraphService [cite: 158-164, 181, 297-298]

- **Role:** 그래프의 생성(Create), 조회(Read), 수정(Update), 삭제(Delete) 로직 총괄.
- **Architecture Style:**
  - **Layered Architecture:** `GraphRepository`에 의존하여 도메인 로직 수행.
  - **Event-driven (Publisher):** 수정/삭제 시 조회수 초기화 등의 부수 작업을 위해 이벤트 발행.
- **Design Patterns:**
  - **Command Pattern:** 등록, 수정, 삭제 요청을 객체로 캡슐화하여 처리.
- **Key Methods:**
  - `createGraph(graphDto)`: 제목 글자 수(30자) 제한 및 필수 값 검증 후 저장.
  - `updateGraph(graphId, updateDto)`: 그래프 및 내부 서클 정보 수정.
  - `deleteGraph(graphId, userId)`: 삭제 요청자가 소유자(Owner) 혹은 관리자(Admin)인지 권한 확인 후 삭제.
  - `searchGraphs(keyword)`: 제목/내용 키워드 검색.
  - `listGraphs(page)`: 조회수 내림차순 정렬 및 페이징(10개 단위) 목록 반환.
- **Quality Attributes (NFR):**
  - **Performance:** 등록/수정 처리를 **3초 이내**에 완료.
  - **Consistency:** 수정 후 즉시 조회 시 최신 데이터 반영 보장.

### [cite_start]5.3 FavoriteService [cite: 150, 181-182, 299]

- **Role:** 사용자의 '찜' 기능(추가, 해제, 조회) 전담.
- **Architecture Style:**
  - **SRP (Single Responsibility Principle):** 그래프 로직(`GraphService`)과 분리하여 찜 기능만 전담.
- **Key Methods:**
  - `addFavorite(userId, graphId)`: 중복 찜 방지 확인 후 관계 저장.
  - `removeFavorite(userId, graphId)`: 찜 관계 삭제.
  - `getFavoriteGraphs(userId)`: 사용자가 찜한 그래프 목록 조회.
- **Quality Attributes (NFR):**
  - **Responsiveness:** 찜 버튼 클릭 시 UI에 즉각적인 상태 반영.

### [cite_start]5.4 Data Access Layer (Repositories) [cite: 165-174, 182, 301-302]

- **Components:** `UserRepository`, `GraphRepository`, `FavoriteRepository`
- **Role:** Firebase DB와의 실제 연동 담당 (CRUD).
- **Architecture Style:**
  - **Repository Pattern:** 도메인 계층과 데이터 소스(Firebase)를 분리.
  - **GRASP Pure Fabrication:** 비즈니스 개념은 아니지만 DB 연동 책임을 위해 생성된 클래스.
- **Quality Attributes (NFR):**
  - **Maintainability:** DB를 Firebase에서 MySQL 등으로 교체 시, Repository 구현체만 변경하면 됨.

## 6. Functional Requirements (Detailed Use Cases)

시스템의 주요 기능 요구사항에 대한 상세 흐름 및 예외 처리 로직입니다.

### 6.1 User Account (사용자 계정)

[cite_start]**UC-01: 사용자 회원가입 (User Signup)** [cite: 39-41]

- **Actor:** 사용자
- **Trigger:** 사용자가 로그인을 시도할 때.
- **Preconditions:** 카카오톡 계정이 있어야 함.
- **Main Flow:**
  1.  사용자가 온보딩 화면에서 '카카오로 시작하기'를 클릭한다.
  2.  카카오 로그인 페이지로 이동하여 로그인을 수행한다.
  3.  서비스 리다이렉팅 페이지로 이동한다.
  4.  닉네임, 나이, 원하는 경험 정보를 입력하고 '회원가입' 버튼을 누른다.
  5.  시스템은 입력 정보를 확인 후 해당 계정으로 로그인시킨다.
- **Exception Flow:**
  - **토큰 오류:** 올바르지 않은 토큰일 경우 오류 팝업과 함께 온보딩 화면으로 복귀.
  - **닉네임 중복:** 이미 등록된 닉네임일 경우 중복 팝업 표시.
  - **필수 정보 누락:** 닉네임 미기입 시 회원가입 불가 및 오류 팝업.

[cite_start]**UC-02: 사용자 로그인 (User Login)** [cite: 39, 42-44]

- **Actor:** 사용자
- **Trigger:** 로그인 버튼 클릭.
- **Preconditions:** 시스템에 회원가입된 상태여야 함.
- **Main Flow:**
  1.  로그인 페이지에서 로그인 버튼을 클릭한다.
  2.  카카오 로그인 API 페이지로 이동한다.
  3.  아이디와 비밀번호를 입력한다.
  4.  시스템이 계정을 확인하고 로그인을 완료시킨다.

[cite_start]**UC-05: 로그아웃 (Logout)** [cite: 39, 49-50]

- **Actor:** 사용자, 관리자
- **Main Flow:**
  1.  로그아웃 버튼을 클릭한다.
  2.  로그아웃 확인 팝업에서 '확인'을 누른다.
  3.  시스템은 토큰/쿠키를 만료시키고 온보딩 화면으로 이동시킨다.
- **Exception Flow:**
  - **취소:** 확인 팝업에서 취소를 누르면 로그아웃 중단.

---

### 6.2 Admin Account (관리자 계정)

[cite_start]**UC-03: 관리자 회원가입 (Admin Signup)** [cite: 39, 45-46]

- **Actor:** 관리자
- **Trigger:** 자체 회원가입 버튼 클릭.
- **Main Flow:**
  1.  자체 회원가입 페이지로 이동한다.
  2.  닉네임, 아이디, 비밀번호를 입력한다.
  3.  Google Authenticator 등을 통해 인증번호를 요청하고 입력한다.
  4.  인증 성공 시 관리자 권한을 부여받고 메인 화면으로 이동한다.
- **Exception Flow:**
  - **닉네임 중복:** 중복 팝업 표시.
  - **인증 실패:** 인증번호 불일치 시 입력창 붉은색 표시 및 안내 문구 출력.

[cite_start]**UC-04: 관리자 로그인 (Admin Login)** [cite: 39, 47-48]

- **Actor:** 관리자
- **Preconditions:** 관리자로 가입된 상태여야 함.
- **Main Flow:**
  1.  온보딩 페이지에서 자체 로그인 페이지로 이동한다.
  2.  아이디와 비밀번호를 입력하고 로그인한다.
- **Exception Flow:**
  - **미등록 관리자:** 등록되지 않은 계정일 경우 회원가입 이동 혹은 재시도 선택 팝업 표시.

---

### 6.3 Graph Management (그래프 관리)

[cite_start]**UC-06: 그래프 등록 (Create Graph)** [cite: 39, 51-52]

- **Actor:** 사용자
- **Trigger:** 메인 화면 하단 '그래프 등록' 버튼 클릭.
- **Main Flow:**
  1.  그래프 제목을 입력한다. (30자 제한 검사)
  2.  경험 내 그래프(서클)를 시간 순으로 등록한다. (모달 창 활용)
  3.  내용 입력 확인 후 그래프를 추가한다.
  4.  '완성하기' 버튼 클릭 시 그래프 조회 페이지로 이동한다.
- **Exception Flow:**
  - **제목 길이 초과:** 30자 초과 시 제한.
  - **필수 내용 누락:** 필수 정보 미입력 시 등록 실패.

[cite_start]**UC-07: 그래프 수정 (Edit Graph)** [cite: 39, 53-59]

- **Actor:** 사용자
- **Trigger:** 그래프 화면에서 '수정' 버튼 클릭.
- **Description:** 서클의 제목, 날짜, 상세 내용, 색상을 수정한다. (라이프 그래프 전체 제목은 수정 불가)
- **Main Flow:**
  1.  수정 페이지로 이동한다.
  2.  서클 상세 내용/날짜 등을 모달을 통해 수정한다.
  3.  '완성하기' 버튼을 누르면 조회 페이지로 이동한다.
- **Exception Flow:**
  - **날짜 중복:** 기존 서클과 동일한 날짜로 수정 시 등록 불가 팝업.

[cite_start]**UC-08: 그래프 삭제 (Delete Graph)** [cite: 39, 60-65]

- **Actor:** 사용자, 관리자
- **Postconditions:** 삭제된 그래프는 복구 불가하며 타인에게 보이지 않음.
- **Main Flow:**
  1.  '삭제하기' 버튼을 클릭한다.
  2.  삭제 확인 팝업에서 '확인'을 누른다.
  3.  그래프 정보가 영구 삭제된다.
- **Exception Flow:**
  - **권한 없음:** 작성자 본인이나 관리자가 아닐 경우 삭제 불가 모달 출력.

---

### 6.4 Graph View & Search (그래프 조회 및 검색)

[cite_start]**UC-09: 그래프 목록 확인 (List Graphs)** [cite: 39, 66-68]

- **Actor:** 사용자
- **Main Flow:**
  1.  메인 페이지에 접속한다.
  2.  그래프 목록이 조회순 내림차순으로 정렬되어 표시된다.
  3.  스크롤 시 10개씩 추가 로드된다 (Infinite Scroll).

[cite_start]**UC-10: 그래프 검색 (Search Graphs)** [cite: 39, 69-73]

- **Trigger:** 검색창에 키워드 입력 후 엔터.
- **Main Flow:**
  1.  서버에서 제목이나 내용에 키워드가 포함된 그래프를 검색한다.
  2.  일치하는 그래프 목록을 화면에 보여준다.
- **Exception Flow:**
  - **결과 없음:** '해당 단어를 포함하고 있는 그래프가 없습니다' 안내 문구 표시.

[cite_start]**UC-11: 그래프 상세 조회 (View Graph Details)** [cite: 39, 74-76]

- **Description:** 작성자, 한 줄 요약, 그리고 하단의 서클(경험)들을 확인한다.
- **Main Flow:**
  1.  목록에서 특정 그래프를 클릭한다.
  2.  상세 조회 페이지로 이동하여 내용을 표시한다.

[cite_start]**UC-12: 서클 상세 조회 (View Circle Details)** [cite: 39, 77-111]

- **Trigger:** 그래프 상의 특정 서클 클릭.
- **Main Flow:**
  1.  사용자가 서클을 클릭한다.
  2.  해당 서클의 상세 내용을 화면(모달 등)에 표시한다.
- **Exception Flow:**
  - **긴 텍스트:** 내용이 표시 영역을 넘어갈 경우 스크롤 처리하여 심미성 유지.

---

### 6.5 Favorite (찜하기 기능)

[cite_start]**UC-13: 그래프 찜하기 (Add to Favorites)** [cite: 39, 112-114]

- **Trigger:** 상세보기 페이지 상단의 찜하기 버튼 클릭.
- **Main Flow:**
  1.  찜하기 버튼을 누른다.
  2.  '찜 페이지로 이동하시겠습니까?' 팝업을 띄운다.
  3.  확인 시 찜한 그래프 페이지로 이동한다.
- **Exception Flow:**
  - **이동 취소:** 팝업에서 취소 시 현재 페이지 유지.

[cite_start]**UC-14: 찜한 그래프 확인하기 (View Favorites)** [cite: 39, 115-116]

- **Trigger:** '찜 페이지' 버튼 클릭.
- **Main Flow:**
  1.  사용자가 찜한 그래프 리스트를 렌더링한다.
  2.  그래프 클릭 시 상세 페이지로 이동한다.
- **Exception Flow:**
  - **목록 없음:** 찜한 그래프가 없음을 알리는 안내 문구 표시.

[cite_start]**UC-15: 찜한 그래프 삭제하기 (Remove Favorite)** [cite: 39, 117-118]

- **Trigger:** 찜 페이지 혹은 상세 페이지에서 활성화된 '찜 버튼' 클릭.
- **Main Flow:**
  1.  찜 버튼을 클릭한다.
  2.  시스템에서 찜 관계를 삭제한다.
  3.  찜 페이지의 리스트를 다시 렌더링하여 반영한다.
