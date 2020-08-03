const joinModalTemplate = `
  <div class="gray-bg">
    <div class="modal-wrapper">
      <div class="title">
        회원가입
      </div>
      <div class="input-wrapper">
        <input type="text" name="id" placeholder="아이디">
        <div class="error">에러 메시지입니당</div>
      </div>
      <div class="input-wrapper">
        <input type="text" name="name" placeholder="이름">
        <div class="error">에러 메시지입니당</div>
      </div>
      <div class="input-wrapper">
        <input type="password" name="password" placeholder="비밀번호">
        <div class="error">에러 메시지입니당</div>
      </div>
      <div class="input-wrapper">
        <input type="password" name="password_confirm" placeholder="비밀번호 확인">
        <div class="error">에러 메시지입니당</div>
      </div>
      <button>회원가입</button>
      <div class="modal-bottom">
        <nav>뒤로가기</nav>
      </div>
    </div>
  </div>
`;

export default joinModalTemplate;
