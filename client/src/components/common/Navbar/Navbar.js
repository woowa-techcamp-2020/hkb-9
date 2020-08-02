import './Navbar.scss';
import navbarTemplate from './template';

export default class Navbar {
  constructor() {
    this.$target = document.querySelector('.nav-bar');
    this.init()
  }


  getElement() {
    return this.$target
  }

  init() {
    this.$target.innerHTML = navbarTemplate
  }
}