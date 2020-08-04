import './Header.scss';
import headerTemplate from './template';
import { checkIsLogin } from '../../../utils/functions';

export default class Header {
  constructor() {
    this.$target = document.querySelector('header');
    this.$target.innerHTML = headerTemplate();
    this.render(checkIsLogin());
    this.bindEvent();
  }
  render(visible) {
    // logout 버튼만 rerender
    const $logoutButton = this.$target.querySelector('.logout');
    if (visible) {
      $logoutButton.classList.add('visible');
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
      window.localStorage.removeItem('accessToken');
      window.location.href = '/';
      window.location.reload();
    };

    this.$target.querySelector('.logout').addEventListener('click', onLogout);
  }
}
