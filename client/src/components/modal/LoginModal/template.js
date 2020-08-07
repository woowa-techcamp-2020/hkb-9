import { html } from '../../../utils/functions';

const loginModalTemplate = html`
  <div class="login-modal">
    <div class="modal-wrapper">
      <div class="title">
        로그인
      </div>
      <input type="text" name="loginId" placeholder="아이디를 입력해줘용" />
      <input
        type="password"
        class="password-input"
        name="password"
        placeholder="비밀번호를 입력해줘용"
      />
      <button>로그인</button>
      <div class="modal-bottom">
        <nav>회원가입</nav>
      </div>
    </div>
  </div>
`;

export default loginModalTemplate;
