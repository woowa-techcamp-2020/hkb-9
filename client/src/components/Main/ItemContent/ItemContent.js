import './ItemContent.scss';
import itemContentTemplate from './template';

export default class ItemContent {
  constructor() {
    this.init();
  }

  init() {
    this.$target = document.querySelector('.item-list');
    this.$itemContent = document.createElement('div');
    this.$itemContent.className = 'item-content';
    this.$itemContent.innerHTML = itemContentTemplate;
    this.render();
  }

  render() {
    this.$target.appendChild(this.$itemContent);
    return;
  }
}
