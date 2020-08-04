import './LoginModal.scss';
import loginModalTemplate from './template';
import apis from '../../../api/apis';

export default class LoginModal {
  constructor({ onModalVisible, renderApp }) {
    this.$target = document.querySelector('.modal');
    this.onModalVisible = onModalVisible;
    this.renderApp = renderApp; // 로그인 후 렌더위해

    const $div = document.createElement('div');
    $div.innerHTML = loginModalTemplate;
    this.$target.appendChild($div);

    this.$loginModal = this.$target.querySelector('.login-modal');
    this.$inputs = this.$loginModal.querySelectorAll('input');
    this.bindEvent();
  }

  render(visible) {
    if (visible) {
      this.$loginModal.classList.add('visible');
      return;
    }
    this.$loginModal.classList.remove('visible');
  }

  bindEvent() {
    const onShowJoinModal = () => {
      this.onModalVisible('loginModal', false); // loginModal off;
      this.onModalVisible('joinModal', true);
    };

    const onSubmitHandler = async () => {
      const requestBody = {}; // loginId, password
      this.$inputs.forEach($input => (requestBody[$input.name] = $input.value));
      const { accessToken } = await apis.login(requestBody);
      if (!accessToken) {
        alert('아이디 또는 비밀번호가 올바르지 않습니다.');
        return;
      }
      alert('로그인 성공 >_<');
      window.localStorage.setItem('accessToken', accessToken);
      this.onModalVisible('loginModal', false);
      this.onModalVisible('header', true); // logout button show
      this.renderApp(); // App Render()
    };

    const onKeyupHanlder = e => {
      if (e.key !== 'Enter') {
        return;
      }

      onSubmitHandler();
    };

    this.$loginModal
      .querySelector('.password-input')
      .addEventListener('keyup', onKeyupHanlder);

    this.$loginModal
      .querySelector('.login-button')
      .addEventListener('click', onSubmitHandler);

    this.$loginModal
      .querySelector('.login-nav')
      .addEventListener('click', onShowJoinModal);
  }
}
