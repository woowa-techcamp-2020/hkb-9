import './Amount.scss';
import amountTemplate from './template';

export default class Amount {
  constructor({ selector }) {
    this.selector = selector;
    this.init();
  }

  init() {
    this.$target = document.querySelector(this.selector);
    this.render();
  }

  render() {
    this.$target.innerHTML = amountTemplate;
  }
}
