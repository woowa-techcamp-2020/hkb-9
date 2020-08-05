/* eslint-disable no-undef */
import './Main.scss';
import mainTemplate from './template';
import { InputForm } from './InputForm';
import { List } from './List';

export default class Main {
  constructor() {
    this.init();
  }

  init() {
    this.$target = document.querySelector('main');
    this.render();
    new InputForm();
    new List();
  }

  render() {
    this.$target.innerHTML = mainTemplate;
    // new InputForm();
    // new List();
    return;
  }
}
