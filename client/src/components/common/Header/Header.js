import './Header.scss';
import observer from '../../../models/observer';
import headerTemplate from './template';
import { CardModal } from '../../modal/CardModal';
import { userController } from '../../../controllers';

export default class Header {
  constructor() {
    this.init();
    this.bindEvent();
  }
  init() {
    this.$target = document.querySelector('header');
    this.$target.innerHTML = headerTemplate();
    userController.subscribe('isLogin', this, this.render.bind(this));
  }
  render(isLogin) {
    const $logoutButton = this.$target.querySelector('.logout');
    if (isLogin) {
      $logoutButton.classList.add('visible');
      new CardModal();
      return;
    }
    $logoutButton.classList.remove('visible');
  }

  bindEvent() {
    const onLogout = () => {
      const isLogout = confirm('로그아웃 하실건가요?');
      if (!isLogout) {
        return;
      }
      userController.requestLogout();
    };

    const onCardModalVisible = () =>
      userController.onModalVisible('cardModalVisible', true);

    this.$target.querySelector('.logout').addEventListener('click', onLogout);
    this.$target
      .querySelector('.pay')
      .addEventListener('click', onCardModalVisible);
  }
}
