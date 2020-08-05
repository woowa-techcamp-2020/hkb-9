import './LoginModal.scss';
import observer from '../../../models/observer';
import { userController } from '../../../controllers';
import loginModalTemplate from './template';
import userApis from '../../../api/userApis';

export default class LoginModal {
  constructor() {
    this.init();
  }

  init() {
    this.$target = document.querySelector('.modal');
    observer.subscribe('loginModalVisible', this, this.render.bind(this));
    userController.onModalVisible('loginModalVisible', true);
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
      userController.onModalVisible('loginModalVisible', false);
      userController.onModalVisible('joinModalVisible', true);
    };
    const onSubmitHandler = async () => {
      const userData = {}; // loginId, password
      this.$target
        .querySelectorAll('input')
        .forEach($input => (userData[$input.name] = $input.value));

      const status = await userController.requestLogin(userData);
      if (status) {
        alert('아이디 또는 비밀번호가 올바르지 않습니다.');
        return;
      }
      alert('로그인 성공 >_<');
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
      .querySelector('button')
      .addEventListener('click', onSubmitHandler);
    this.$target
      .querySelector('nav')
      .addEventListener('click', onShowJoinModal);
  }
}
