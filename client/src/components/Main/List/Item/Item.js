import './Item.scss';
import { ItemContent } from './ItemContent';
import itemTemplate from './template';

export default class Item {
  constructor() {
    this.$target = document.querySelector('.list-container');
    this.$item = document.createElement('div');
    this.$item.classList.add('item-container');
    this.$item.innerHTML = itemTemplate;
    this.render();
  }
  render() {
    this.$target.appendChild(this.$item);
    new ItemContent();
  }
}
