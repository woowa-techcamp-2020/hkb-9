import './Navbar.scss';
import { routeController } from '../../../controllers';
import navbarTemplate from './template';
import { parsePath } from '../../../utils/functions';

export default class Navbar {
  constructor() {
    this.init();
    this.bindEvent();
  }

  init() {
    this.$target = document.querySelector('.nav-bar');
    this.$target.innerHTML = navbarTemplate;
  }

  bindEvent() {
    this.$target.addEventListener('click', e => {
      if (e.target.tagName !== 'A') {
        return;
      }
      e.preventDefault();
      routeController.pushState(parsePath(e.target.href));
    });
  }
}
