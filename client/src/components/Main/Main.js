/* eslint-disable no-undef */
import './Main.scss';
import mainTemplate from './template';

export default class Main {
  constructor() {
    this.$target = document.querySelector('main');
    this.$target.innerHTML = 'hi this is Main Page';
  }
}