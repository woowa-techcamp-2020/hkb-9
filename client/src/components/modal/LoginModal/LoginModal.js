import './LoginModal.scss';
import loginModalTemplate from './template';

export default class LoginModal {
  constructor() {
    const $target = document.querySelector('.modal');
    $target.innerHTML = loginModalTemplate;
  }
}
