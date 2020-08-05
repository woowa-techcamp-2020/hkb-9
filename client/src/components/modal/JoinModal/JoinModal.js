import './JoinModal.scss';
import observer from '../../../models/observer';
import joinModalTemplate from './template';
import { userController } from '../../../controllers';

export default class JoinModal {
  constructor() {
    this.$target = document.querySelector('.modal');
    observer.subscribe('joinModalVisible', this, this.render.bind(this));
  }

  render(visible) {
    if (visible) {
      this.$target.innerHTML = joinModalTemplate;
      this.bindEvent();
      return;
    }
    this.$target.innerHTML = '';
  }

  bindEvent() {
    const onSubmitHandler = async () => {
      const userData = {};
      this.$target.querySelectorAll('input').forEach($input => {
        userData[$input.name] = $input.value;
      });

      const status = await userController.requestJoin(userData);
      if (status === 400) {
        alert('올바르지 않은 요청입니당');
        return;
      }

      if (status === 409) {
        alert('중복된 아이디입니다.');
        return;
      }

      alert('회원가입 성공 >_<');
    };

    const onShowLoginModal = () => {
      userController.onModalVisible('joinModalVisible', false);
      userController.onModalVisible('loginModalVisible', true);
    };

    this.$target
      .querySelector('nav')
      .addEventListener('click', onShowLoginModal);

    this.$target
      .querySelector('button')
      .addEventListener('click', onSubmitHandler);
  }
}
