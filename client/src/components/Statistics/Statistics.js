/* eslint-disable no-undef */
import './Statistics.scss';
import statisticsTemplate from './template';
// import { InputForm } from './InputForm';
// import { List } from './List';

export default class Statistics {
  constructor() {
    this.init();
  }

  init() {
    this.$target = document.querySelector('main');
    this.render();
    // new InputForm();
    // new List();
  }

  render() {
    this.$target.innerHTML = statisticsTemplate;
    // new InputForm();
    // new List();
    return;
  }
}
