import './LoginModal.scss';
import loginModalTemplate from './template';

export default class LoginModal {
  constructor($children) {
    const $target = document.querySelector('.modal');
    $target.innerHTML = loginModalTemplate;
  }
}
