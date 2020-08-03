import './LoginModal.scss';
import loginModalTemplate from './template';

export default class LoginModal {
  constructor({ onModalVisible }) {
    this.$target = document.querySelector('.modal');
    this.onModalVisible = onModalVisible;

    const $div = document.createElement('div');
    $div.innerHTML = loginModalTemplate;
    this.$target.appendChild($div);

    this.bindEvent();
  }

  render(visible) {
    const $loginModal = this.$target.querySelector('.login-modal');
    if (visible) {
      $loginModal.classList.add('visible');
      return;
    }
    $loginModal.classList.remove('visible');
  }

  bindEvent() {
    const onShowJoinModal = () => {
      this.onModalVisible('loginModal', false); // loginModal off;
      this.onModalVisible('joinModal', true);
    };

    this.$target
      .querySelector('.login-nav')
      .addEventListener('click', onShowJoinModal);
  }
}
