import { html } from '../../../utils/functions';

const headerTemplate = isLogin => html`<header>
  <span class="title">이름</span>
  <div class="logo">
    <span class="logo-1">홍봉</span>
    <span class="logo-2">가계부</span>
  </div>
  <div class="side">
    <span class="logout">로그아웃</span>
    <span class="pay">결제 수단관리</span>
  </div>
</header>`;

export default headerTemplate;
