import './LoginModal.scss';
import observer from '../../../models/observer';
import { modalController } from '../../../controllers';
import loginModalTemplate from './template';
import userApis from '../../../api/userApis';

export default class LoginModal {
  constructor() {
    this.init();
  }

  init() {
    this.$target = document.querySelector('.modal');
    observer.subscribe('loginModalVisible', this, this.render.bind(this));
    modalController.onModalVisible('loginModalVisible', true);
  }

  render(visible) {
    if (visible) {
      this.$target.innerHTML = loginModalTemplate;
      this.bindEvent();
      return;
    }
    this.$target.innerHTML = '';
  }

  bindEvent() {
    const onShowJoinModal = () => {
      modalController.onModalVisible('loginModalVisible', false);
      modalController.onModalVisible('joinModalVisible', true);
    };
    const onSubmitHandler = async () => {
      const requestBody = {}; // loginId, password
      this.$inputs.forEach($input => (requestBody[$input.name] = $input.value));
      const { accessToken } = await userApis.login(requestBody);
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
    this.$target
      .querySelector('.password-input')
      .addEventListener('keyup', onKeyupHanlder);
    this.$target
      .querySelector('.login-button')
      .addEventListener('click', onSubmitHandler);
    this.$target
      .querySelector('.login-nav')
      .addEventListener('click', onShowJoinModal);
  }
}
