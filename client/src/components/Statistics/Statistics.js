/* eslint-disable no-undef */
import './Statistics.scss';
import statisticsTemplate from './template'

export default class Statistics {
  constructor() {
    this.init();
  }

  init() {
    this.$target = document.querySelector('main');
    this.render();
  }

  render() {
    this.$target.innerHTML = statisticsTemplate;
    return;
  }
}
