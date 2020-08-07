/* eslint-disable no-undef */
import './Main.scss';
import mainTemplate from './template';
import { InputForm } from './InputForm';
import { Amount } from '../Amount';
import { List } from './List';

export default class Main {
  constructor() {
    this.init();
  }

  init() {
    this.$target = document.querySelector('main');
    this.$target.innerHTML = mainTemplate;
    new InputForm();
    new Amount({ selector: '.amount-container' });
    new List();
  }
}
