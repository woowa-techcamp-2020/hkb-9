const joinModalTemplate = `
  <div class="gray-bg">
    <div class="modal-wrapper">
      <div class="title">
        회원가입
      </div>
      <div class="input-wrapper">
        <input type="text" name="loginId" placeholder="아이디">
        <div class="error">아이디를 확인해주세요.</div>
      </div>
      <div class="input-wrapper">
        <input type="text" name="name" placeholder="이름">
        <div class="error">이름을 확인해주세요.</div>
      </div>
      <div class="input-wrapper">
        <input type="password" name="password" placeholder="비밀번호">
        <div class="error">비밀번호를 확인해주세요.</div>
      </div>
      <div class="input-wrapper">
        <input type="password" name="passwordConfirm" placeholder="비밀번호 확인">
        <div class="error">비밀번호 확인이 올바르지 않습니다.</div>
      </div>
      <button>회원가입</button>
      <div class="modal-bottom">
        <nav>뒤로가기</nav>
      </div>
    </div>
  </div>
`;

export default joinModalTemplate;
