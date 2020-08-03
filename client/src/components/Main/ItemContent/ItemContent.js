import './ItemContent.scss';
import itemContentTemplate from './template';

export default class ItemContent {
  constructor() {
    this.$target = document.querySelector('.item-container');
    this.$item = document.createElement('div');
    this.$item.classList.add('item-content');
    this.$item.innerHTML = itemContentTemplate;
    this.render();
  }
  render() {
    this.$target.appendChild(this.$item);
  }
}
