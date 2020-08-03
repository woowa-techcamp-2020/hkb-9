import './Header.scss';
import headerTemplate from './template';

export default class Header {
  constructor() {
    this.$target = document.querySelector('header');

    this.init();
  }

  init() {
    this.$target.innerHTML = headerTemplate;
  }
}
