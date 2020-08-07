# 홍봉 가계부

### 서비스 Overview



### 배포 서버 주소



### 디렉토리 구조

```bash
├  client  
 ├  dist  # 빌드된 파일
 ├  public  # HTML template
 ├  src
  ├  api  # Api 관련 파일
  ├  components  # 프론트엔드 컴포넌트
  ├  controllers  # 프론트엔드 컨트롤러 관련
  ├  models  # 프론트엔드 모델(데이터 처리 로직)
  ├  pages  # 메인 페이지
  ├  styles  # 기본 스타일 관련
  ├  utils  # 프론트엔드 유틸 함수
  ├  App.js  # 모달 및 페이지 렌더링 관련
  ├  index.js  # 프론트엔드 엔트리 파일

└  server
 ├  config  # 데이터베이스 연결
 ├  lib  # 패스포트 및 JWT
 ├  middlewares  # 서버 에러핸들러 모듈
 ├  model  # 서버 모델(데이터 처리 로직)
 ├  routes  # 서버 라우팅 관련
 ├  utils  # 서버 유틸 함수
 ├  index.js  # 서버 엔트리 파일
```



### 설치

```bash
npm install
```



### 환경변수 설정

- 최상위 디렉토리의 .env 파일을 아래를 참고하여 수정해주세요.

```bash
DB_HOST=데이터베이스 호스트
DB_USER=데이터베이스 유저
DB_NAME=데이터베이스 이름
DB_PASS=데이터베이스 비밀번호

JWT_SECRET=아무거나
```



### 실행

```bash
npm run production
```



### 프로젝트 기록

### [🍗 Ground Rule](https://github.com/woowa-techcamp-2020/hkb-9/wiki/Ground-Rule)**



### [🥟 Convention](https://github.com/woowa-techcamp-2020/hkb-9/wiki/Convention)**



### [🔯 ERD & DB Schema](https://github.com/woowa-techcamp-2020/hkb-9/wiki/Schema)**



### 🍕 스크럼**

\- [1주차 스크럼](https://github.com/woowa-techcamp-2020/hkb-9/wiki/1%EC%A3%BC%EC%B0%A8-%EC%8A%A4%ED%81%AC%EB%9F%BC)

\- [2주차 스크럼](https://github.com/woowa-techcamp-2020/hkb-9/wiki/2%EC%A3%BC%EC%B0%A8-%EC%8A%A4%ED%81%AC%EB%9F%BC)



### 🍔 회고**

\- [1주차 회고](https://github.com/woowa-techcamp-2020/hkb-9/wiki/1%EC%A3%BC%EC%B0%A8-%ED%9A%8C%EA%B3%A0)

\- [2주차 회고](https://github.com/woowa-techcamp-2020/hkb-9/wiki/2%EC%A3%BC%EC%B0%A8-%ED%9A%8C%EA%B3%A0)



### 🍣 기술 블로그**

\- [ESLint & Prettier](https://github.com/woowa-techcamp-2020/hkb-9/wiki/ESLint,-Prettier%EA%B0%80-%EB%AD%98%EA%B9%8C%3F)

\- [Naming](https://github.com/woowa-techcamp-2020/hkb-9/wiki/Naming)

\- [Safely save password by Salt](https://github.com/woowa-techcamp-2020/hkb-9/wiki/Safely-save-password-By-salt)

\- [프론트엔드 개발환경 설정](https://github.com/doonguk/webpack-boilerplate)

\- [Passport, JWT and Salt](https://github.com/woowa-techcamp-2020/hkb-9/wiki/Passport,-JWT-and-Salt)

\- [VanilaJS로 달력 구현하기](https://github.com/woowa-techcamp-2020/hkb-9/wiki/%EB%8B%AC%EB%A0%A5-%EB%A7%8C%EB%93%A4%EA%B8%B0)
