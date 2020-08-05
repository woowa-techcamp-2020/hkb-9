import './Item.scss';
import { ItemContent } from './../ItemContent';
import itemTemplate from './template';

export default class Item {
  constructor() {
    this.init();
  }

  init() {
    this.$target = document.querySelector('.item-container');
    this.render();
    new ItemContent();
  }

  render() {
    this.$target.innerHTML = itemTemplate;
    return;
  }
}
