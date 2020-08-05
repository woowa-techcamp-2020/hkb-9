import { html } from '../../../utils/functions';

const headerTemplate = isLogin => html`<header>
  <span class="title">가계부</span>
  <div class="side">
    <span class="logout">로그아웃</span>
    <span class="pay">결제 수단관리</span>
  </div>
</header>`;

export default headerTemplate;
